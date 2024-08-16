import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: 1rem;
    position: relative;

    button {
      border: none;
      outline: none;
      background-color: ${theme.primary};
      color: #fff;
      padding: 14px 18px;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
    }

    ul {
      border: 1px solid ${theme.primary};
      border-radius: 5px;
      padding: 10px 0;
      position: absolute;
      top: 110%;
      display: none;
      width: max-content;
      z-index: 5;
      background-color: ${theme.esther};
    }

    ul.active{
        display: block;
    }

    li{
        color: ${theme.title};
    }
  `}
`;

export default Wrapper;
