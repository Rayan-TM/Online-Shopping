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
        img{
          height: 100%;
        }

        @media (max-width: 980px) {
          width: 30%;
        }

        @media (max-width: 680px) {
          width: 45%;
        }

        @media (max-width: 480px) {
          width: 100%;
        }
      }
    }
    .not-found-message {
      width: 100%;
      text-align: center;
    }
  `}
`;

export default Wrapper;
