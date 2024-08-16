import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    .products {
      margin: 20px;
      display: flex;
      gap: 25px;
      flex-wrap: wrap;

      & .product   {
        width: 23%;
      }
    }
    .not-found-message {
      width: 100%;
      text-align: center;
    }
  `}
`;

export default Wrapper;
