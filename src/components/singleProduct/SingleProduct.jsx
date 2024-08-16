import React, { useEffect, useState } from "react";
import HorizontalSingleProduct from "../horizontalSingleProduct/HorizontalSingleProduct";
import Wrapper from "./Wrapper";
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";
import iziToast from "izitoast";
import { useNavigate } from "react-router-dom";
import { useGetUserInfoBytokenQuery } from "../../Redux/service/api/users";
import {
  useAddProductToFavoritesMutation,
  useRemoveProductFromFavoritesMutation,
  useGetFavoriteProductsQuery,
} from "../../Redux/service/api/favorites";
import {
  useAddProductToBasketMutation,
  useIncreaseProductCountMutation,
  useGetBasketProductsQuery,
} from "../../Redux/service/api/basket";

export default function SingleProduct({
  image,
  name,
  price,
  url,
  id,
  isFavorite = false,
  structure = "grid",
}) {
  const navigate = useNavigate();
  const [isThisProductFavorite, setIsThisProductFavorite] =
    useState(isFavorite);
  const userToken = localStorage.getItem("Token");
  const { data: userInfo } = useGetUserInfoBytokenQuery([], {
    skip: !userToken,
  });
  const { data: basketProducts } = useGetBasketProductsQuery(userInfo?.[0].id, {
    skip: !userInfo,
  });
  const [addProductToBasket, { isLoading: addProductLoading }] =
    useAddProductToBasketMutation();
  const [increaseProductCount, { isLoading: increaseCountLoading }] =
    useIncreaseProductCountMutation();

  const { data: favoriteProducts } = useGetFavoriteProductsQuery(
    userInfo?.[0].id,
    {
      skip: !userInfo,
    }
  );
  const [addProductToFavorites] = useAddProductToFavoritesMutation();
  const [removeProductFromFavorites] = useRemoveProductFromFavoritesMutation();

  useEffect(() => {
    favoriteProducts &&
      setIsThisProductFavorite(
        favoriteProducts.some((product) => product.productTitle === name)
      );
  }, [favoriteProducts]);

  function addProductToFavoritesHandler() {
    if (userInfo) {
      const isProductInFavorites = favoriteProducts.some(
        (product) => product.productTitle === name
      );

      if (isProductInFavorites) {
        removeProductFromFavorites([userInfo?.[0].id, id]);
      } else {
        addProductToFavorites([
          userInfo?.[0].id,
          {
            productID: id,
            productImg: image,
            productTitle: name,
            productPrice: price,
            productUrl: url,
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

  function addProductToBasketHandler() {
    if (userInfo) {
      const isProductInBasket = basketProducts.some(
        (product) => product.productTitle === name
      );

      if (isProductInBasket) {
        increaseProductCount([userInfo?.[0].id, id]);
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

  if (structure === "grid") {
    return (
      <Wrapper>
        <div className="image-container">
          <img src={image} alt="product image" />
          <button
            disabled={addProductLoading || increaseCountLoading}
            onClick={addProductToBasketHandler}
            className="add-product"
          >
            {addProductLoading || increaseCountLoading
              ? "Adding Product"
              : "ADD TO CART"}
            <BsBasket />
          </button>
          <div className="actions">
            <button title="quick view">
              <FaRegEye />
            </button>
            <button title="compare">
              <TfiReload />
            </button>
            <button
              onClick={addProductToFavoritesHandler}
              title={`${
                isThisProductFavorite ? "Remove from" : "Add to"
              } favorites list`}
            >
              {isThisProductFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
        <div className="content">
          <Link to={`/product/${url}`} className="name">
            {name}
          </Link>
          <div className="price">{price}$</div>
        </div>
      </Wrapper>
    );
  } else {
    const props = {
      addProductToBasketHandler,
      addProductLoading,
      isThisProductFavorite,
      addProductToFavoritesHandler,
      increaseCountLoading,
      image,
      name,
      price,
      url,
      id,
      isFavorite,
    };
    return <HorizontalSingleProduct {...props} />;
  }
}
