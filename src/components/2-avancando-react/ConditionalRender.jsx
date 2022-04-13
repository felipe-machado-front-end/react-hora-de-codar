import React from "react";

const ConditionalRender = () => {
  const [x] = React.useState(true);
  const [name] = React.useState("João");
  return (
    <div>
      <h2>Renderização do && </h2>
      {x && <p>Se x for true,Sim</p>}
      {!x && <p>Se x for falso,Não</p>}
      <h2>Renderização do ternário</h2>
      {name === "João" ? <p>Seu nome é Jõao</p> : <p>Seu nome não é João</p>}
    </div>
  );
};

export default ConditionalRender;
