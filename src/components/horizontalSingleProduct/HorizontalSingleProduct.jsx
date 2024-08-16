import React from "react";
import Wrapper from "./Wrapper";
import ColumnWrapper from "../../shared/ColWrapper";
import { Link } from "react-router-dom";
import { FaHeart, FaRegEye, FaRegHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { BsBasket } from "react-icons/bs";

export default function HorizontalSingleProduct({
  addProductToBasketHandler,
  addProductLoading,
  isThisProductFavorite,
  addProductToFavoritesHandler,
  increaseCountLoading,
  image,
  name,
  price,
  url,
}) {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <ColumnWrapper className="content">
        <h4>
          <Link to={`/product/${url}`}>{name}</Link>
        </h4>
        <span className="price">{price}$</span>

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
      </ColumnWrapper>
    </Wrapper>
  );
}
