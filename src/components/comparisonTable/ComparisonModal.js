import styled, { css } from "styled-components";
import { modal } from "../../shared/utils";

const ComparisonModal = styled.div`
  ${({ theme }) => css`
    ${modal};
    .container {
      width: 80vw;
      height: 80vh;
      overflow: auto;
    }

    table {
      align-items: center;
      background-color: #fff;
      color: #000;
      border-collapse: collapse;

      .remove-btn {
        border: none;
        font-size: 1.2rem;
        width: 100%;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: #eb1616;
        cursor: pointer;
      }

      .colors {
        width: 100%;
        & > div {
          border: 1px solid #000;
          display: inline-block;
          margin-right: 0.5rem;
        }
      }

      tr {
        th,
        td {
          text-align: left;
          padding: 1rem;
          border: 2px solid ${theme.secondary};
        }
        th {
          width: 100%;
          color: ${theme.primary};
          background-color: ${theme.esther};
        }
      }

      img {
        width: 200px;
      }
    }
  `}
`;

export default ComparisonModal;
