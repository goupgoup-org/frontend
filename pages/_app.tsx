import React from "react";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { HelmetProvider } from "react-helmet-async";
import SEOConfig from "../next-seo.config";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

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
          <DefaultSeo {...SEOConfig} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </HelmetProvider>
  );
};

export default App;
