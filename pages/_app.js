import {ChakraProvider} from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
