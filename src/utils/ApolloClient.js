import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://cms.allnepalclinic.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
