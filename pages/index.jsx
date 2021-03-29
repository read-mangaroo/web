import Head from "next/head";
import App from "../src/components/layout";
import MangaList from "../src/components/manga-list";

const LandingPage = () => (
  <App>
    <Head>
      <title>Mangaroo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <MangaList />
    </main>
  </App>
);

export default LandingPage;
