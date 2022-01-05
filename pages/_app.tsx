import React,{useEffect,useState} from 'react';
import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'
import Layout from '../src/components/Layout';



// should be replaced with styled component

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <Layout >
          <Component {...pageProps} />
        </Layout>
  );
}
export default MyApp
