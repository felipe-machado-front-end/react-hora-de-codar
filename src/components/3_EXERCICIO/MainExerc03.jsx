import React from "react";
import { Pessoas } from "./Pessoas";
import UserDetails from "./UserDetails";

const MainExerc03 = () => {
  return (
    <div>
      <h1>Exercicio 03</h1>
      <div>
        {Pessoas.map(({ id, nome, idade, profissao }) => (
          <UserDetails
            key={id}
            nome={nome}
            idade={idade}
            profissao={profissao}
          />
        ))}
      </div>
    </div>
  );
};

export default MainExerc03;
