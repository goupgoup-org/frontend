import React from "react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import SEOConfig from "../next-seo.config";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { Header } from "@/components/header/Header";
import Popup from "@/components/popup/Popup";
import GlobalStyles from "@/common/styled/global";
import Head from "next/head";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <HelmetProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Header />
          <DefaultSeo {...SEOConfig} />
          <Head>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          </Head>
          <Component {...pageProps} />

          <Popup />
        </QueryClientProvider>
      </RecoilRoot>
    </HelmetProvider>
  );
};

export default App;
