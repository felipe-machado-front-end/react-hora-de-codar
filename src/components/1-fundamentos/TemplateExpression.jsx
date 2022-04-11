import React from "react";

const TemplateExpression = () => {
  const name = "Felipe";
  const data = {
    age: 26,
    job: "Programador",
  };
  return (
    <div>
      <p>Olá {name},tudo bem ?</p>
      <p>
        Me chamo {name} tenho {data.age} anos e trabalho como {data.job}
      </p>
      <p>Quando é 5 + 5 ? = {5 + 5}</p>
    </div>
  );
};

export default TemplateExpression;
