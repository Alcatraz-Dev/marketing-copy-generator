import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider> */}
      <Component {...pageProps} />
      <Analytics />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
