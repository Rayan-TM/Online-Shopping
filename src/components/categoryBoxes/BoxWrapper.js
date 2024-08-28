import styled, { css } from "styled-components";
import { boxShadow } from "../../shared/utils";

const BoxWrapper = styled.div`
  border-radius: 25px;
  padding: 80px 40px;
  transition: all 0.3s linear;
  color: #fff;
  position: relative;
  height: 350px;

  img {
    position: absolute;
  }

  #box1 img {
    bottom: -100px;
    left: -50px;
    scale: 0.8;
  }

  #box2 img {
    left: -30px;
    top: -50px;
    width: 70%;
  }

  #box3 img {
    top: 0;
    left: -20px;
    width: 65%;
  }

  #box4 img {
    left: -20px;
    width: 55%;
    bottom: 0;
  }

  #box5 img {
    bottom: 0;
    left: 0;
    width: 100%;
  }

  #box6 img {
    bottom: -50px;
    width: 100%;
    left: -80px;
  }

  .title1 {
    font-weight: 200;
  }

  .title2 {
    font-weight: 600;
    font-size: 2rem;
    text-align: right;
    white-space: nowrap;

    @media (max-width: 500px) {
      white-space: normal;
    }
  }

  .title3 {
    font-weight: 700;
    font-size: 2.5rem;
    opacity: 0.7;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 15px;
  }

  ${(props) => css`
    background-color: ${props.$color};
    &:hover {
      ${boxShadow(props.$color)}
    }
  `}
`;

export default BoxWrapper;
