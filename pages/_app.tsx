import "../style/global.css";
import Layout from "../src/components/Layout/layout";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Theme from "../style/Theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
