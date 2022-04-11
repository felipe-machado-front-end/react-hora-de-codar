import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import TemplateExpression from "./components/1-fundamentos/TemplateExpression";
import UseComponents from "./components/1-fundamentos/UseComponents";
import { UseComponents2 } from "./components/2-avancando-react/UseComponents2";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseComponents2 />
  </React.StrictMode>,
  document.getElementById("root")
);
