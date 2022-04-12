import React from "react";

const RenderList = () => {
  const [list] = React.useState(["Felipe", "Jamilton", "Matheus"]);
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderList;
