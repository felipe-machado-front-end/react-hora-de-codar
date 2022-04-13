import React from "react";

const RenderList = () => {
  const [list] = React.useState(["Felipe", "Jamilton", "Matheus"]);
  const [users, setUsers] = React.useState([
    { id: 1, name: "Felipe", age: 26 },
    { id: 2, name: "Francisco", age: 24 },
    { id: 3, name: "Mariana", age: 46 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default RenderList;
