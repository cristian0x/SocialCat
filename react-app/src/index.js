import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Layout />
    </Provider>
  </>,
  document.getElementById("root")
);
