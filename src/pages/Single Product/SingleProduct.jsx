import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import {
  useGetAllProductsQuery,
  selectProductByUrl,
} from "../../Redux/service/api/products";
import { useGetAllProductCommentsQuery } from "../../Redux/service/api/comments";
import { useGetUserInfoBytokenQuery } from "../../Redux/service/api/users";
import {
  useAddProductToFavoritesMutation,
  useGetFavoriteProductsQuery,
  useRemoveProductFromFavoritesMutation,
} from "../../Redux/service/api/favorites";

import Color from "../../components/color/Color";
import Counter from "../../components/counter/Counter";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { BsBasket } from "react-icons/bs";
import Tabs from "./Tabs";
import Comment from "../../components/comment/Comment";
import CTAButton from "../../shared/CTAButton";
import { useTheme } from "styled-components";

export default function SingleProduct() {
  const swiperRef = useRef();
  const theme = useTheme();
  const [colors, setColors] = useState([]);
  const [tabs, setTabs] = useState(["Description", "Comments"]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const userToken = localStorage.getItem("Token");
  const { productUrl } = useParams();
  const [isThisProductFavorite, setIsThisProductFavorite] = useState(null);
  const { data: products, isLoading } = useGetAllProductsQuery();
  const product = useSelector((state) => selectProductByUrl(productUrl)(state));
  const { data: comments } = useGetAllProductCommentsQuery([1, product?.id], {
    skip: !product,
  });

  const { data: userInfo } = useGetUserInfoBytokenQuery([], {
    skip: !userToken,
  });

  const [addProductToFavorites] = useAddProductToFavoritesMutation();
  const [removeProductFromFavorites] = useRemoveProductFromFavoritesMutation();
  const { data: favoriteProducts } = useGetFavoriteProductsQuery(
    userInfo?.[0].id,
    {
      skip: !userInfo,
    }
  );

  useEffect(() => {
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

  useEffect(() => {
    favoriteProducts &&
      setIsThisProductFavorite(
        favoriteProducts.some(
          (favoriteProduct) => favoriteProduct.productTitle === product.name
        )
      );
  }, [favoriteProducts]);

  useEffect(() => {
    product && setColors(JSON.parse(product.colors));
  }, [product]);

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  function changeTab() {
    currentTab === "Description"
      ? setCurrentTab("Comments")
      : setCurrentTab("Description");
  }

  function addProductToFavoritesHandler() {
    if (userInfo) {
      const isProductInFavorites = favoriteProducts.some(
        (favoriteProduct) => favoriteProduct.productTitle === product.name
      );

      if (isProductInFavorites) {
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
    <Wrapper>
      <div className="info">
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
              <img src={`/${product.image}`} alt={product.name} />
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
              <Counter />
              <button className="btn-add-to-basket">
                Add To Basket <BsBasket />
              </button>

              <div className="more-btns">
                <button
                  className="heart"
                  onClick={addProductToFavoritesHandler}
                  title={`${
                    isThisProductFavorite ? "Remove from" : "Add to"
                  } favorites list`}
                >
                  {isThisProductFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
                <button className="comparison">
                  <TfiReload />
                </button>
              </div>
            </div>
            <div className="category">
              <span>Category:</span> {product.category}
            </div>
          </div>
        </div>
      </div>
      <Tabs>
        <div className="tabs-btns">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={changeTab}
              className={tab === currentTab ? "active" : null}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="content">
          {currentTab === "Description" ? (
            <>
              <h2>Description</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description),
                }}
              ></div>
            </>
          ) : (
            <>
              <div className="comments">
                {comments.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))}
              </div>

              <div className="comment-form">
                <h4>Write your opinion</h4>
                {userToken ? (
                  <form>
                    <textarea rows={10} />
                    <CTAButton as="button">SEND</CTAButton>
                  </form>
                ) : (
                  <p>To register a comment, please log in to the site first.</p>
                )}
              </div>
            </>
          )}
        </div>
      </Tabs>
    </Wrapper>
  );
}
