import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./redux/configureStore.dev";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("airline-app")
);
