import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { appReducer } from "./reducers/appReducer";

const store = createStore(appReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    {console.log(store)}
    <App />
  </Provider>,
  rootElement
);
