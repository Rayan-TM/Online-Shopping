import React from "react";
import Wrapper from "./Wrapper";
import useSwiper from "../../hooks/useSwiper";
import { useGetAllArticlesQuery } from "../../Redux/service/api/articles";
import SingleBlog from "../singleBlog/SingleBlog";

export default function LastBlogs() {
  const params = {
    spaceBetween: 40,
    navigation: true,

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  const { data: allArticles } = useGetAllArticlesQuery();
  const [swiperRef] = useSwiper(allArticles, params);

  return (
    <Wrapper data-aos="zoom-out-up" data-aos-duration="1000">
      <div className="title">
        <h2>Our Newest Blogs</h2>
        <h3>The best hand-picked digital products at the lowest prices</h3>
      </div>
      <swiper-container ref={swiperRef} init="false">
        {allArticles?.map((article) => (
          <swiper-slide key={article.id}>
            <SingleBlog {...article} />
          </swiper-slide>
        ))}
      </swiper-container>
    </Wrapper>
  );
}
