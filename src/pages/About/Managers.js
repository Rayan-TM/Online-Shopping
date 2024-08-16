import styled, { css } from "styled-components";

const Managers = styled.div`
  swiper-container {
    position: relative;
    margin: 0 auto;
    width: 90vw;
    height: 80vh;
    padding: 20px 0;
  }



  swiper-slide {
    margin-top: 5rem;
    height: fit-content;
  }

  .swiper-slide-active {
    transform: scale(1.3);
    transition: all 0.4s linear;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .swiper-wrapper {
    position: absolute;
    top: 50%;
  }

  ${({ theme }) => css`
    border-radius: 5px;
    overflow: hidden;

    .image-container {
      position: relative;

      img {
        width: 100%;
      }

      .links {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 6px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        opacity: 0;
        transition: opacity 0.5s linear;
        background-color: ${theme.secondary};

        a {
          font-size: 1.3rem;
          padding: 10px;
          cursor: pointer;
          color: ${theme.title};
          opacity: 50;
          transition: color 0.3s linear;
        }

        a:hover {
          color: ${theme.primary};
        }
      }

      &:hover .links {
        opacity: 100;
      }
    }

    .name,
    .role {
      padding: 0 10px 10px;
    }

    .name {
      font-weight: 600;
    }

    .role {
      font-size: 0.8rem;
      font-weight: 200;
    }
  `}
`;

export default Managers;
