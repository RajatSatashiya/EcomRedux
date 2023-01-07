import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import AuthContextProvider from "./Context/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={Store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  </AuthContextProvider>
);
