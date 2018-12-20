import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { render } from "react-dom";
import 'normalize.css'
import App from "./screens/Root";
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);
serviceWorker.register();