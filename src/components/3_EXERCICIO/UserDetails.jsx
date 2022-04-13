import React from "react";

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h3>Detalhes da pessoa {nome}</h3>
      <ul>
        <li>Possui a idade de {idade} anos</li>
        <li>Trabalha como {profissao}</li>
      </ul>
      <h4>
        {idade >= 18 ? (
          <strong>Você pode tirar habilitação</strong>
        ) : (
          <strong>Não pode tirar habilitação</strong>
        )}
      </h4>
    </div>
  );
};

export default UserDetails;
