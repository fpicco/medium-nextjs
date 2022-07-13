import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/home/Hero';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />

      {/* POSTS */}
    </div>
  );
};

export default Home;
