import React from "react";
import Wrapper from "./Wrapper";
import { useGetAllProductsQuery } from "../../Redux/service/api/products";
import SingleProduct from "../singleProduct/SingleProduct";
import useSwiper from "../../hooks/useSwiper";

export default function LastProducts() {
  const params = {
    spaceBetween: 40,
    navigation: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      540: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  const { data: allProducts } = useGetAllProductsQuery();
  const [swiperRef] = useSwiper(allProducts, params);

  return (
    <Wrapper data-aos="zoom-out-up" data-aos-duration="1000">
      <div className="title">
        <h2>Our Newest Products</h2>
        <h3>The best hand-picked digital products at the lowest prices</h3>
      </div>

      <swiper-container ref={swiperRef} init="false">
        {allProducts?.map((product) => (
          <swiper-slide key={product.id}>
            <SingleProduct {...product} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Wrapper>
  );
}
