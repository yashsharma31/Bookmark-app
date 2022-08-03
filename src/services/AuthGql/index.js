import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";
import { setHeaders } from "../Headers";
import { addDataToLocalStorage, removeDataFromLocalStorage,getDataFromLocalStorage } from "../LocalStorage";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

export const link = from([
    errorLink,
    new HttpLink({ uri: `${process.env.REACT_APP_URL}` }),
  ]);
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });