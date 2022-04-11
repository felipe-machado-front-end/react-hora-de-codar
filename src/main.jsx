import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import TemplateExpression from "./components/1-fundamentos/TemplateExpression";
import UseComponents from "./components/1-fundamentos/UseComponents";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseComponents />
  </React.StrictMode>,
  document.getElementById("root")
);
