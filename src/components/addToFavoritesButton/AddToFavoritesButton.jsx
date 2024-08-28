import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  useAddProductToFavoritesMutation,
  useGetFavoriteProductsQuery,
  useRemoveProductFromFavoritesMutation,
} from "../../Redux/service/api/favorites";

export default function AddToFavoritesButton({ userInfo, product }) {
  const [isThisProductFavorite, setIsThisProductFavorite] = useState(false);

  const [addProductToFavorites] = useAddProductToFavoritesMutation();
  const [removeProductFromFavorites] = useRemoveProductFromFavoritesMutation();
  const { data: favoriteProducts } = useGetFavoriteProductsQuery(
    userInfo?.[0].id,
    {
      skip: !userInfo,
    }
  );

  useEffect(() => {
    favoriteProducts &&
      setIsThisProductFavorite(
        favoriteProducts.some(
          (favoriteProduct) => favoriteProduct.productTitle === product.name
        )
      );
  }, [favoriteProducts]);

  function addProductToFavoritesHandler() {
    if (userInfo) {
      if (isThisProductFavorite) {
        removeProductFromFavorites([userInfo?.[0].id, product.id]);
      } else {
        addProductToFavorites([
          userInfo?.[0].id,
          {
            productID: product.id,
            productImg: product.image,
            productTitle: product.name,
            productPrice: product.price,
            productUrl: product.url,
          },
        ]);
      }
    } else {
      iziToast.info({
        message: "you must first sign up/in🙂",
      });
      navigate("/account");
    }
  }
  return (
    <button
      className="heart"
      onClick={addProductToFavoritesHandler}
      title={`${
        isThisProductFavorite ? "Remove from" : "Add to"
      } favorites list`}
    >
      {isThisProductFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
