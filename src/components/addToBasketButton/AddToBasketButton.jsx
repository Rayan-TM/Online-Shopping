import React from "react";
import Wrapper from "./Wrapper";
import { BsBasket } from "react-icons/bs";
import iziToast from "izitoast";
import { useNavigate } from "react-router-dom";

import {
  useAddProductToBasketMutation,
  useIncreaseProductCountMutation,
  useGetBasketProductsQuery,
} from "../../Redux/service/api/basket";

export default function AddToBasketButton({
  userInfo,
  name,
  id,
  image,
  price,
  url,
  isUnique,
  count = 1,
}) {
  const navigate = useNavigate();

  const { data: basketProducts } = useGetBasketProductsQuery(userInfo?.[0].id, {
    skip: !userInfo,
  });
  const [addProductToBasket, { isLoading: addProductLoading }] =
    useAddProductToBasketMutation();
  const [increaseProductCount, { isLoading: increaseCountLoading }] =
    useIncreaseProductCountMutation();

  function addProductToBasketHandler() {
    if (userInfo) {
      const isProductInBasket = basketProducts.some(
        (product) => product.productTitle === name
      );

      if (isProductInBasket) {
        increaseProductCount([userInfo?.[0].id, id, count]);
        iziToast.show({
          message: "Product Added!😁",
          backgroundColor: "#4BB543",
          messageColor: "#fff",
        });
      } else {
        addProductToBasket([
          {
            productID: id,
            productImg: image,
            productTitle: name,
            productPrice: price,
            productUrl: url,
            count,
          },
          userInfo?.[0].id,
        ]);
        iziToast.show({
          message: "Product Added!😁",
          backgroundColor: "#4BB543",
          messageColor: "#fff",
        });
      }
    } else {
      iziToast.info({
        message: "you must first sign up/in🙂",
      });
      navigate("/account");
    }
  }

  return (
    <Wrapper
      disabled={addProductLoading || increaseCountLoading}
      onClick={addProductToBasketHandler}
      className={`btn-add-to-basket ${isUnique ? "add-product" : null}`}
    >
      {addProductLoading || increaseCountLoading
        ? "Adding Product"
        : "Add To Basket"}
      <BsBasket />
    </Wrapper>
  );
}
