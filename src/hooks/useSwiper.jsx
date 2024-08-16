import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";

export default function useSwiper(data, props) {
  const swiperRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const swiperContainer = swiperRef.current;

    const params = {
      ...props,
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
      },
      injectStyles: [
        props.injectStyles,
        `
        .swiper-button-prev, .swiper-button-next{
          color: ${theme.primary};
          width: fit-content;
          transition: all .3s linear;
          top: 40%;
        }

        .swiper-button-prev svg, .swiper-button-next svg{
          height: 5rem;
        }

        .swiper{
          position: unset;
        }

        .swiper-button-prev{
          left: -80px;
        }

         .swiper-button-prev:hover{
          left: -90px;
        }
        
        .swiper-button-next{
          right: -80px;
        }

        .swiper-button-next:hover{
          right: -90px;
        }

        @media (max-width: 768px) {
          .swiper-button-prev, .swiper-button-next {
            display: none;
          }
        }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [data]);

  return [swiperRef];
}
