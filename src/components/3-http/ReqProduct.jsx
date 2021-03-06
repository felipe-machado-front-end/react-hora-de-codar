import React, { useEffect, useState } from "react";
import "../../App.css";
import { useFetch } from "../../hooks/useFetch";

const ReqProduct = () => {
  const url = "http://localhost:3000/products";
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { data: items, httpConfig, loading, error } = useFetch(url);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    /** 
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const addProduct = await res.json();
    setProducts((preventProducts) => [...preventProducts, addProduct]);
    
    */

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div>
      <h1>Lista de produto</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Deletar
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            NOME
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            PREÇO
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {!loading && <input type="submit" value="Criar" />}
          {loading && <input type="submit" value="Aguarde" />}
        </form>
      </div>
    </div>
  );
};

export default ReqProduct;
