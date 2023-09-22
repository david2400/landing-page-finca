import React from 'react';
import '@style/globals.css';
import { AppProps } from 'next/app';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Layout } from '@common/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <PrimeReactProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PrimeReactProvider>
  );
};

export default MyApp;
