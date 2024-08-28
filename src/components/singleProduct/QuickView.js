import styled, { css } from "styled-components";
import { modal } from "../../shared/utils";

const QuickView = styled.div`
  ${({ theme }) => css`
    ${modal};
    .single-product {
      width: 80vw;
      height: 90vh;
      background-color: ${theme.secondary};
      border-radius: 1rem;
      padding: 2rem;
      color: ${theme.title};
      overflow-y: auto;
      flex-wrap: wrap;

      .image-side,
      img {
        height: 100%;
      }

      .actions{
        flex-wrap: wrap;
      }

      .btn-add-to-basket {
        white-space: nowrap;
      }

      button:not(.btn-add-to-basket) {
        color: ${theme.title};
        &:hover {
          color: ${theme.primary};
        }
      }
    }
  `}
`;

export default QuickView;
