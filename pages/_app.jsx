import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/apollo-client";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
