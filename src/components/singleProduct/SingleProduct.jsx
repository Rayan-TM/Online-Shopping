import React, { useState } from "react";
import { createPortal } from "react-dom";
import HorizontalSingleProduct from "../horizontalSingleProduct/HorizontalSingleProduct";
import Wrapper from "./Wrapper";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetUserInfoByTokenQuery } from "../../Redux/service/api/users";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";
import QuickView from "./QuickView";
import { useSelector, useDispatch } from "react-redux";
import ComparisonTable from "../comparisonTable/ComparisonTable";
import ComparisonButton from "../comparisonButton/ComparisonButton";
import AddToFavoritesButton from "../addToFavoritesButton/AddToFavoritesButton";
import AddToBasketButton from "../addToBasketButton/AddToBasketButton";

export default function SingleProduct({
  image,
  name,
  price,
  url,
  id,
  album,
  colors,
  status,
  category,
  structure = "grid",
}) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const dispatch = useDispatch();
  const comparisonProducts = useSelector((state) => state.comparison);

  const userToken = localStorage.getItem("Token");
  const { data: userInfo } = useGetUserInfoByTokenQuery(userToken, {
    skip: !userToken,
  });

  const productInfo = {
    product: { image, name, price, url, id, album, colors, status, category },
    userInfo,
  };

  const product = {
    id,
    image,
    name,
    price,
    url,
  };

  const addToBasketButtonProps = {
    ...product,
    userInfo,
  };

  const comparisonButtonProps = {
    newProduct: {
      ...product,
      colors,
      category,
    },
    comparisonProducts,
    dispatch,
    setIsComparisonOpen,
  };

  const horizontalProductProps = {
    userInfo,
    comparisonButtonProps,
    setIsQuickViewOpen,
    ...product,
  };

  const comparisonTableProps = {
    userInfo,
    dispatch,
    comparisonProducts,
    setIsComparisonOpen,
  };

  const content =
    structure === "grid" ? (
      <Wrapper>
        <div className="image-container">
          <img src={image} alt="product image" />
          <AddToBasketButton isUnique {...addToBasketButtonProps} />
          <div className="actions">
            <button onClick={() => setIsQuickViewOpen(true)} title="quick view">
              <FaRegEye />
            </button>
            <ComparisonButton {...comparisonButtonProps} />
            <AddToFavoritesButton product={product} userInfo={userInfo} />
          </div>
        </div>
        <div className="content">
          <Link to={`/product/${url}`} className="name">
            {name}
          </Link>
          <div className="price">{price}$</div>
        </div>
        {isQuickViewOpen &&
          createPortal(
            <QuickView
              className="quick-view-container"
              onClick={(e) =>
                e.target.classList.contains("quick-view-container") &&
                setIsQuickViewOpen(false)
              }
            >
              <SingleProductInfo {...productInfo} />
            </QuickView>,
            document.body
          )}
        {isComparisonOpen && <ComparisonTable {...comparisonTableProps} />}
      </Wrapper>
    ) : (
      <HorizontalSingleProduct {...horizontalProductProps} />
    );

  return (
    <>
      {content}
      {isQuickViewOpen &&
        createPortal(
          <QuickView
            className="quick-view-container"
            onClick={(e) =>
              e.target.classList.contains("quick-view-container") &&
              setIsQuickViewOpen(false)
            }
          >
            <SingleProductInfo {...productInfo} />
          </QuickView>,
          document.body
        )}
      {isComparisonOpen && <ComparisonTable {...comparisonTableProps} />}
    </>
  );
}
