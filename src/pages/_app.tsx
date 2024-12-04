import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        {/* Métadonnées globales */}
        <title>Mon Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio moderne et innovant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AnimatePresence mode="wait">
        {/* Transition entre pages */}
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
