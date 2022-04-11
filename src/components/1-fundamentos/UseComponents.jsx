import React from "react";
import Challenge from "../2_EXERCICIO/Challenge";
import { Events } from "./Events";
import FirstComponent from "./FirstComponent";
import TemplateExpression from "./TemplateExpression";

const UseComponents = () => {
  return (
    <div>
      <h2>Usando componentes das aula anterior</h2>
      <FirstComponent />
      <TemplateExpression />
      <Events />
      <Challenge />
    </div>
  );
};

export default UseComponents;
