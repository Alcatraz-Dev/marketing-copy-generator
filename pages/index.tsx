import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
// import Footer from "../components/Footer";
// import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [marketing, setmarketing] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generateMarketing, setGeneratedMarketing] = useState<String>("");

  console.log("Streamed response: ", generateMarketing);

  const prompt =
    vibe === "Funny"
      ? `Generate 2 and make it a funny joke You are a marketing expert,and clearly labeled "1." and "2.". and a customer approaches you to write a very short and exciting marketing copy for them. This is the topic they would like a marketing copy for: '${marketing}.'\n\nThis is the short marketing copy you came up with:${
          marketing.slice(-1) === "." ? "" : "."
        }`
      : `Generate 2 ${vibe} marketing expert, with no hashtags and clearly labeled "1." and "2.". You are a marketing expert, and a customer approaches you to write a very short and exciting marketing copy for them. This is the topic they would like a marketing copy for: '${marketing}.'\n\nThis is the short marketing copy you came up with:${
          marketing.slice(-1) === "." ? "" : "."
        }`;

  const generateCopyMarketing = async (e: any) => {
    e.preventDefault();
    setGeneratedMarketing("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedMarketing((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>marketing copy Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 ">
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
          Generate your next marketing copy in seconds ...
        </h1>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Copy your current marketing copy{" "}
              <span className="text-slate-500">
                (or write a few sentences about marketing copy)
              </span>
              .
            </p>
          </div>
          <textarea
            value={marketing}
            onChange={(e) => setmarketing(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "Enhance your business success with our product! Our innovative solutions will help you make the most of your resources and drive your business forward. Let us help you reach your goals! "
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Select your vibe.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              className="bg-[#3bbc34] rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-[#6dea00] w-full"
              onClick={(e) => generateCopyMarketing(e)}
            >
              Generate your marketing copy &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-[#ffd500] rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-[#FFD900]/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}

          <div className="flex mt-10  items-center space-x-3 ">
            <Image src="/3-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">
              {" "}
              Click on the generated marketing copy to copy it.
            </p>
          </div>
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generateMarketing && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      Your generated bios
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                    {generateMarketing
                      .substring(generateMarketing.indexOf("1") + 3)
                      .split("2.")
                      .map((generatedBio) => {
                        return (
                          <div
                            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedBio);
                              toast("Bio copied to clipboard", {
                                icon: "📋",
                              });
                            }}
                            key={generatedBio}
                          >
                            <p>{generatedBio}</p>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
