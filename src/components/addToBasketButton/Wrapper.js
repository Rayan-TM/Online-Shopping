import styled, { css } from "styled-components";

const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.primary};
    color: #fff;
    border-color: ${theme.title};
    border-radius: 0.5rem;
    padding: 0.7rem 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s linear;
    width: fit-content;

    &.add-product {
      position: absolute;
      bottom: -37%;
      left: 0;
      background-color: ${theme.secondary};
      color: ${theme.primary};
      border-color: ${theme.secondary};
      border-radius: 0;
      cursor: pointer;
      width: 100%;
      font-size: 1.2rem;
      transition: all 0.2s linear;
      line-height: 1.5rem;
      svg {
        margin-left: 0.5rem;
      }

      &:hover {
        background-color: ${theme.title};
        color: ${theme.primary};
      }
    }

    svg {
      margin-left: 0.5rem;
    }

    &:hover {
      background-color: ${theme.esther};
      color: ${theme.title};
    }
  `}
`;

export default Wrapper;
