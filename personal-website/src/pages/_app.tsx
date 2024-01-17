import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
