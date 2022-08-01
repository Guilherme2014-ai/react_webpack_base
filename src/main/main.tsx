import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { App } from "./App";

// CSS
import "./styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
