import React, { useState } from "react";
import Wrapper from "./Wrapper";
import ColumnWrapper from "../../shared/ColWrapper";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import ComparisonButton from "../comparisonButton/ComparisonButton";
import AddToBasketButton from "../addToBasketButton/AddToBasketButton";
import AddToFavoritesButton from "../addToFavoritesButton/AddToFavoritesButton";
import { createPortal } from "react-dom";
import QuickView from "../singleProduct/QuickView";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";

export default function HorizontalSingleProduct({
  image,
  name,
  price,
  url,
  id,
  comparisonButtonProps,
  userInfo,
  setIsQuickViewOpen
}) {
  const product = {
    name,
    image,
    id,
    price,
    url,
  };

  const addToFavoritesProps = {
    product,
    userInfo,
  };

  const addToBasketButtonProps = {
    ...product,
    userInfo,
  };

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
          <button onClick={() => setIsQuickViewOpen(true)} title="quick view">
            <FaRegEye />
          </button>
          <ComparisonButton {...comparisonButtonProps} />
          <AddToFavoritesButton {...addToFavoritesProps} />
        </div>
        <AddToBasketButton {...addToBasketButtonProps} />
      </ColumnWrapper>
    </Wrapper>
  );
}
