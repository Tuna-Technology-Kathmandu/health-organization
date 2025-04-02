import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:10003/graphql",
  uri: "http://cms.allnepalclinic.com/graphql",
  uri: "https://cms.allnepalclinic.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
