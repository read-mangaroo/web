import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";

import { useApollo } from "../src/apollo-client";
import theme from "../src/theme";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseLine />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

MyApp.getInitialProps = async (context) => {
  const initialProps = await App.getInitialProps(context);
  return {...initialProps};
};

export default MyApp;
