import React from "react";

const ManageDate = () => {
  let [contador, setContador] = React.useState(0);
  return (
    <div>
      <div>{contador}</div>
      <button onClick={() => setContador(++contador)}>+1</button>
      <button onClick={() => setContador(--contador)}> -1</button>
    </div>
  );
};

export default ManageDate;
