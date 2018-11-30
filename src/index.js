import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "react-dom";
import 'normalize.css'
import App from "./screens/Root";

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
