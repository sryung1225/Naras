import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { GlobalStyle } from "@/styles/GlobalStyle";

type NextPageWithLayout = NextPage & {
  Layout?: ({ children }: { children: ReactNode }) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const EmptyLayout = ({ children }: { children: ReactNode }) => (
    <>{children}</>
  );
  const SubLayout = Component.Layout || EmptyLayout;
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SubLayout>
          <Component {...pageProps} />
        </SubLayout>
      </Layout>
    </>
  );
}
