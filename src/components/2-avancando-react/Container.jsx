import React from "react";

const Container = ({ children }) => {
  return (
    <div>
      <h1>Dentro do container</h1>
      {children}
    </div>
  );
};

export default Container;
