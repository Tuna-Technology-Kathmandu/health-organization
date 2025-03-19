import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://test.devabhishek.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
