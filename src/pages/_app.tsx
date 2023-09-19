import React from 'react';
import '@styles/globals.css';
import { AppProps } from 'next/app';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
};

export default MyApp;
