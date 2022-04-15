import React, { useEffect, useState } from "react";

const ReqProduct = () => {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de produto</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReqProduct;
