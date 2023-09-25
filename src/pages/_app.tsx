import React from 'react';
import '@style/globals.css';
import { AppProps } from 'next/app';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Layout } from '@common/layout';
import { Provider as ProviderJotai } from 'jotai';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PrimeReactProvider>
      <ProviderJotai>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProviderJotai>
    </PrimeReactProvider>
  );
};

export default MyApp;
