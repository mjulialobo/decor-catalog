import Head from "next/head";
import '../style/global.css';
import { Header } from "../components/Header/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
