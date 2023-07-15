import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter((prevCounter) => prevCounter + 5);
  };

  const handleReduce = () => {
    setCounter((prevCounter) => prevCounter - 5);
  };

  return (
    <div>
      <h2 data-testid="counter-element">{counter}</h2>
      <button data-testid="add-button" onClick={handleAdd}>
        Add
      </button>
      <button data-testid="reduce-button" onClick={handleReduce}>
        Reduce
      </button>
    </div>
  );
};

export default Counter;
