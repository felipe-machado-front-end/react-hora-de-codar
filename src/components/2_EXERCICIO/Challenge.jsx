import React from "react";

const Challenge = () => {
  let nums = [25, 24];
  const sum = () => parseInt(nums[0] + nums[1]);
  return (
    <div>
      <h1>Somatorio</h1>
      <strong>{sum()}</strong> <br />
      <br />
      <br />
      <button
        onClick={() =>
          console.log(`SOMA DOS VALORES ${nums[0]} e ${nums[1]} = `, sum())
        }
      >
        Somar
      </button>
    </div>
  );
};

export default Challenge;
