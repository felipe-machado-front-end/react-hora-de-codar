import React from "react";

const ChangeMessageState = ({ handleMessage }) => {
  const messages = ["ola", "olá", "oi", "tudo bem ?"];
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>0</button>
      <button onClick={() => handleMessage(messages[1])}>1</button>
      <button onClick={() => handleMessage(messages[2])}>2</button>
      <button onClick={() => handleMessage(messages[3])}>3</button>
    </div>
  );
};

export default ChangeMessageState;
