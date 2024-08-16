import styled, { css } from "styled-components";
import ColumnWrapper from "../../shared/ColWrapper";
import { fadeIn, up } from "../../styles/animations";
import { boxShadow } from "../../shared/utils";

const Wrapper = styled(ColumnWrapper)`
  margin: 0 30px 5rem;
  padding: 100px 50px;
  border-radius: 30px;
  position: relative;
  min-height: 100vh;

  @media (max-width: 500px) {
    padding: 100px 20px;
  }

  .title1 {
    font-size: 2rem;
    font-weight: 600;
  }

  .title2 {
    font-size: 2.7rem;
    font-weight: 700;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .description {
    width: 30vw;
    span {
      font-weight: 600;
      font-size: 1.2rem;
    }

    p {
      margin-top: 10px;
      font-weight: 200;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  img {
    position: absolute;
    bottom: -40px;
    right: 5%;
    width: 90%;
    animation: ${up} 2s linear infinite;
  }

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 5vw;
    letter-spacing: 0.8rem;
  }

  ${({ theme }) => css`
    background: ${`linear-gradient(to bottom, ${theme.secondary}, ${theme.esther})`};
    transition: all 0.3s linear;
    &:hover {
      ${boxShadow(theme.secondary)}
    }
  `}
`;

export default Wrapper;
