import Header from "@/components/header";
import GlobalStyles from "@/styles/globals";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TonClubs</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
