import React from "react";

export const Events = () => {
  const handleMyEvent = (e) => {
    console.log("Ativou o evento ", "INFORMAÇÕES DO EVENTO CLICK = ", e);
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui !</button>
      </div>
    </div>
  );
};
