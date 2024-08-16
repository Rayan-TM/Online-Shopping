import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Counter({ initialValue = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function minusCounter() {
    counter !== 1 && setCounter((prevState) => prevState - 1);
  }

  return (
    <Wrapper>
      <button onClick={minusCounter}>
        <FaMinus />
      </button>
      <span>{counter}</span>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}
