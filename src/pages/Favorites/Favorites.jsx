import React from "react";
import Path from "../../components/path/Path";
import { useGetFavoriteProductsQuery } from "../../Redux/service/api/favorites";
import { useGetUserInfoBytokenQuery } from "../../Redux/service/api/users";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import Wrapper from "./Wrapper";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Favorites", url: "/favorites" },
];

export default function Favorites() {
  const userToken = localStorage.getItem("Token");
  const { data: userInfo } = useGetUserInfoBytokenQuery(userToken);
  const { data: favoriteProducts } = useGetFavoriteProductsQuery(
    userInfo?.[0].id
  );

  return (
    <Wrapper>
      <Path paths={paths} title="Favorites" />

      <div className="products">
        {favoriteProducts?.length ? (
          favoriteProducts.map((product) => (
            <div className="product" key={product.id}>
              <SingleProduct
                className="single-product"
                id={product.productID}
                image={product.productImg}
                name={product.productTitle}
                price={product.productPrice}
                url={product.productUrl}
              />
            </div>
          ))
        ) : (
          <h2 className="not-found-message">No Products Found</h2>
        )}
      </div>
    </Wrapper>
  );
}
