import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global-styles";
import { usePersonalWebsiteStore } from "@/store/personalWebsiteStore";

function MyApp({ Component, pageProps }: AppProps) {
  const { isModalOpen } = usePersonalWebsiteStore();

  return (
    <>
      <GlobalStyles isModal={isModalOpen} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
