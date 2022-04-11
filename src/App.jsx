import React from "react";
import "./App.css";

const App = () => {
  let meuNome = "Felipe";

  return (
    <div className="nome-destaque">
      <p>
        Prazer meu nome é <strong>{meuNome}</strong>
      </p>
    </div>
  );
};

export default App;
