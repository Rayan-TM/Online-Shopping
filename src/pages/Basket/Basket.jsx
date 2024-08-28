import React, { useEffect, useState } from "react";
import Path from "../../components/path/Path";
import Wrapper from "./Wrapper";
import {
  useGetBasketProductsQuery,
  useRemoveProductFromBasketMutation,
} from "../../Redux/service/api/basket";
import { useGetUserInfoByTokenQuery } from "../../Redux/service/api/users";
import Counter from "../../components/counter/Counter";
import { FaRegTrashAlt } from "react-icons/fa";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Basket", url: "/basket" },
];

export default function Basket() {
  const userToken = localStorage.getItem("Token");

  const [totalPrice, setTotalPrice] = useState(0);

  const { data: userInfo, isLoading: isGettingUser } =
    useGetUserInfoByTokenQuery(userToken);
  const { data: basketProducts, isLoading: isGettingProducts } =
    useGetBasketProductsQuery(userInfo?.[0].id, {
      skip: !userInfo,
    });
  const [removeProductFromBasket] = useRemoveProductFromBasketMutation();

  useEffect(() => {
    if (basketProducts) {
      setTotalPrice(
        basketProducts.reduce(
          (prev, current) => prev + current.productPrice * current.count,
          0
        )
      );
    }
  }, [basketProducts]);

  return (
    <Wrapper>
      <Path paths={paths} title="Basket" />

      {isGettingUser || isGettingProducts ? (
        <p className="loading">Loading...</p>
      ) : basketProducts?.length ? (
        <main>
          <div className="basket-container">
            <table className="basket">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {basketProducts?.map((product) => (
                  <tr className="product" key={product.id}>
                    <td>
                      <img src={product.productImg} alt="" />
                    </td>
                    <td>{product.productTitle}</td>
                    <td>{product.productPrice}$</td>
                    <td>
                      <Counter
                        initialValue={product.count}
                        isInBasket
                        productID={product.productID}
                        userInfo={userInfo}
                      />
                    </td>
                    <td>{product.count * product.productPrice}$</td>
                    <td>
                      <button
                        onClick={() =>
                          removeProductFromBasket([
                            userInfo?.[0].id,
                            product.productID,
                          ])
                        }
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bill">
            <h3>The total of the shopping cart</h3>
            <h4>{totalPrice}$</h4>
          </div>
        </main>
      ) : (
        <p className="no-product">Your Basket is empty</p>
      )}
    </Wrapper>
  );
}
