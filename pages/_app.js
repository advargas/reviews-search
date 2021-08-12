import Head from "next/head";
import "../styles/index.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Reviews Search</title>
        <meta key="description" name="description" content="reviews search" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
