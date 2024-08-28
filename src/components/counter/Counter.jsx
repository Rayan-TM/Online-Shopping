import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  useIncreaseProductCountMutation,
  useDecreaseProductCountMutation,
  useRemoveProductFromBasketMutation,
} from "../../Redux/service/api/basket";

export default function Counter({
  initialValue,
  changeValue,
  isInBasket,
  userInfo,
  productID,
}) {
  const [counter, setCounter] = useState(initialValue);

  const [increaseProductCount, { isLoading: increaseCountLoading }] =
    useIncreaseProductCountMutation();
  const [decreaseProductCount, { isLoading: decreaseCountLoading }] =
    useDecreaseProductCountMutation();
  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();

  useEffect(() => {
    !changeValue && setCounter(initialValue);
  }, [initialValue]);

  function minusCounter() {
    if (isInBasket) {
      counter !== 1
        ? decreaseProductCount([userInfo?.[0].id, productID])
        : removeProductFromBasket([userInfo?.[0].id, productID]);
    } else {
      if (changeValue) {
        initialValue !== 1 && changeValue((prevState) => prevState - 1);
      } else {
        counter !== 1 && setCounter((prevState) => prevState - 1);
      }
    }
  }

  function plusCounter() {
    if (isInBasket) {
      increaseProductCount([userInfo?.[0].id, productID, 1]);
    } else {
      changeValue
        ? changeValue((prevState) => prevState + 1)
        : setCounter((prevState) => prevState + 1);
    }
  }

  return (
    <Wrapper>
      <button onClick={minusCounter}>
        <FaMinus />
      </button>
      <span>
        {increaseCountLoading || decreaseCountLoading
          ? "..."
          : changeValue
          ? initialValue
          : counter}
      </span>
      <button onClick={plusCounter}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}
