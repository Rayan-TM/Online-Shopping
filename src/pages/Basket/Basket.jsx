import React from "react";
import Path from "../../components/path/Path";
import Wrapper from "./Wrapper";
import { useGetBasketProductsQuery } from "../../Redux/service/api/basket";
import { useGetUserInfoBytokenQuery } from "../../Redux/service/api/users";
import Counter from "../../components/counter/Counter";
import { FaRegTrashAlt } from "react-icons/fa";
import CTAButton from "../../shared/CTAButton";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Basket", url: "/basket" },
];

export default function Basket() {
  const userToken = localStorage.getItem("Token");
  const { data: userInfo } = useGetUserInfoBytokenQuery(userToken);
  const { data: basketProducts, isLoading } = useGetBasketProductsQuery(
    userInfo?.[0].id
  );

  console.log(basketProducts);
  return (
    <Wrapper>
      <Path paths={paths} title="Basket" />

      <main>
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
                  <Counter initialValue={product.count} />
                </td>
                <td>total</td>
                <td>
                  <button>
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bill">
          <h3>The total of the shopping cart</h3>
          <h4>12$</h4>
          <CTAButton as="button">Submit Order</CTAButton>
        </div>
      </main>
    </Wrapper>
  );
}
