import React from "react";

const ExecutarFuncao = ({ fn }) => {
  return (
    <div>
      <h2>Executar função</h2>
      <button onClick={fn}>Exec Function</button>
    </div>
  );
};

export default ExecutarFuncao;
