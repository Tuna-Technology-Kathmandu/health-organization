import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/ApolloClient.js";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);
