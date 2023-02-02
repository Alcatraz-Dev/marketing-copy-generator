import Link from "next/link";
// import DarkMode from "../pages/DarkMode";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5  pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 ">
        <h1 className="sm:text-4xl text-2xl font-extrabold ml-2 tracking-tight">
          Bio Generator AI
        </h1>
      </Link>
      {/* <div className="flex justify-between items-center space-x-7 ">
        {" "}
        <DarkMode />
      </div> */}
    </header>
  );
}
