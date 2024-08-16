import React from "react";
import Path from "../../components/path/Path";
import Wrapper from "./Wrapper";
import Managers from "./Managers";
import { useGetAllManagersQuery } from "../../Redux/service/api/managers";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import styled from "styled-components";
import { useTheme } from "styled-components";
import useSwiper from "../../hooks/useSwiper";

const paths = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About us", url: "/about" },
];

export default function About() {
  const theme = useTheme();

  const params = {
    pagination: true,
    centeredSlides: true,
    pagination: {
      clickable: true,
    },
    spaceBetween: 40,
    breakpoints: {
      992: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
    injectStyles: [
      `
      .swiper-pagination-bullet {
        width: 20px;
        height: 15px;
        background-color: ${theme.primary};
      }
    `,
    ],
  };
  const { data: managers } = useGetAllManagersQuery();
  const [swiperRef] = useSwiper(managers, params);

  return (
    <>
      <Path paths={paths} title="About us" />
      <Wrapper>
        <div data-aos="fade-right" className="content">
          <span>Welcome to Online Shopping</span>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, in.
            Molestias, voluptate ad. Alias error et odio. Ab, asperiores ex
            explicabo, nam sequi harum deserunt architecto, expedita doloremque
            ipsum commodi.
          </p>
        </div>
        <div data-aos="fade-left" className="img-container">
          <img src="./assets/images/our-team.webp" alt="" />
        </div>
      </Wrapper>
      <ManagerTitle>Meet our managers</ManagerTitle>
      <Managers data-aos="fade-right" data-aos-duration="1000">
        <swiper-container ref={swiperRef} init="false">
          {managers?.map((manager) => (
            <swiper-slide key={manager.id}>
              <div className="image-container">
                <img src={manager.image} alt="manager image" />
                <div className="links">
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com">
                    <FiFacebook />
                  </a>
                  <a href="https://twitter.com">
                    <FiTwitter />
                  </a>
                </div>
              </div>
              <div className="name">
                {manager.firstname} {manager.lastname}
              </div>
              <div className="role">{manager.role}</div>
            </swiper-slide>
          ))}
        </swiper-container>
      </Managers>
    </>
  );
}

const ManagerTitle = styled.h2`
  padding: 0 30px;
`;
