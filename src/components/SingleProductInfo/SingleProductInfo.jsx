import React, { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../components/color/Color";
import Counter from "../../components/counter/Counter";

import ComparisonButton from "../comparisonButton/ComparisonButton";
import ComparisonTable from "../comparisonTable/ComparisonTable";
import AddToFavoritesButton from "../addToFavoritesButton/AddToFavoritesButton";
import AddToBasketButton from "../addToBasketButton/AddToBasketButton";

export default function SingleProductInfo({ product, userInfo }) {
  const swiperRef = useRef();
  const theme = useTheme();
  const dispatch = useDispatch();
  const comparisonProducts = useSelector((state) => state.comparison);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [colors, setColors] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    product && setColors(JSON.parse(product.colors));

    const swiperContainer = swiperRef.current;

    if (swiperContainer) {
      const params = {
        injectStyles: [
          `
            .swiper-button-prev, .swiper-button-next{
            color: ${theme.primary};
            width: fit-content;
            transition: all .3s linear;
            top: 40%;
          }
          `,
        ],
      };

      Object.assign(swiperContainer, params);
      swiperContainer?.initialize();
    }
  }, [product]);

  const comparisonButtonProps = {
    newProduct: {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      colors: product.colors,
      category: product.category,
    },
    comparisonProducts,
    dispatch,
    setIsComparisonOpen,
  };

  const addToFavoritesProps = {
    product,
    userInfo,
  };

  const addToBasketProps = {
    ...product,
    userInfo,
    count: counter,
  };

  const comparisonTableProps = {
    userInfo,
    dispatch,
    comparisonProducts,
    setIsComparisonOpen,
  };

  return (
    <Wrapper className="single-product">
      <div className="image-side">
        {product.album ? (
          <div className="albums">
            <swiper-container
              thumbs-swiper=".mySwiper2"
              space-between="10"
              navigation="true"
              ref={swiperRef}
              init="false"
            >
              {product.album.split(",").map((img) => (
                <swiper-slide style={{ height: "400px" }} key={img}>
                  <img
                    style={{
                      height: "100%",
                    }}
                    src={`/${img}`}
                    alt=""
                  />
                </swiper-slide>
              ))}
            </swiper-container>

            <swiper-container
              class="mySwiper2"
              space-between="10"
              slides-per-view="4"
              free-mode="true"
              watch-slides-progress="true"
            >
              {product.album.split(",").map((img) => (
                <swiper-slide key={img}>
                  <img src={`/${img}`} alt="" />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        ) : (
          <div className="main-img">
            <img src={`${product.image}`} alt={product.name} />
          </div>
        )}
      </div>

      <div className="content">
        <div>
          <h1>{product.name}</h1>
          <div className="price">
            {product.status ? `${product.price}$` : "Unavailable"}
          </div>
        </div>
        <div className="down-side">
          <div className="colors">
            {colors.map((color) => (
              <Color key={color.id} {...color} />
            ))}
          </div>

          <div className="actions">
            <Counter initialValue={counter} changeValue={setCounter} />

            <AddToBasketButton {...addToBasketProps} />

            <div className="more-btns">
              <AddToFavoritesButton {...addToFavoritesProps} />
              <ComparisonButton {...comparisonButtonProps} />
            </div>
          </div>
          <div className="category">
            <span>Category:</span> {product.category}
          </div>
        </div>
      </div>
      {isComparisonOpen && <ComparisonTable {...comparisonTableProps} />}
    </Wrapper>
  );
}
