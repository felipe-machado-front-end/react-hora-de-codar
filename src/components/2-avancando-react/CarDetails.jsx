import React from "react";

const CarDetails = ({ brand, km, cor, novo }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {cor}</li>
      </ul>
      <div>
        {novo && <p>Carro da marca {brand} é novo!</p>}
        {!novo && <p>Carro da marca {brand} NÃO É novo!</p>}
      </div>
    </div>
  );
};

export default CarDetails;
