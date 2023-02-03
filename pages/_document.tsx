import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next marketing copy in seconds."
          />
          <meta
            property="og:site_name"
            content="alca-marketing-copy.vercel.app"
          />
          <meta
            property="og:description"
            content="Generate your next marketing copy in seconds."
          />
          <meta property="og:title" content="marketing copy Generator" />
          <meta name="marketing copy:card" content="summary_large_image" />
          <meta
            name="marketing copy:title"
            content="marketing copy Generator"
          />
          <meta
            name="marketing copy:description"
            content="Generate your next marketing copy in seconds."
          />
          <meta
            property="og:image"
            content="https://alca-marketing-copy.vercel.app/og-image.png"
          />
          <meta
            name="marketing copy:image"
            content="https://alca-marketing-copy.vercel.app/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
