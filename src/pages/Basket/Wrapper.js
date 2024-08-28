import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    .loading,
    .no-product {
      text-align: center;
      margin-top: 3rem;
      font-size: 1.5rem;
    }

    main {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 2rem;

      @media (max-width: 1200px) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .basket-container {
      overflow-x: auto;
    }

    table.basket {
      border-collapse: collapse;
      text-align: center;
      min-width: 700px;
      width: 100%;

      th {
        padding-bottom: 2rem;
      }

      thead tr {
        border-bottom: 2px solid ${theme.title};
      }

      tbody {
        tr {
          border-bottom: 1px solid ${theme.title};
          td {
            padding: 1rem;
          }

          td:first-child {
            width: 200px;
            img {
              width: 100%;
            }
          }

          td:last-child button {
            background-color: transparent;
            border: none;
            font-size: 1.2rem;
            color: ${theme.title};
            cursor: pointer;
            transition: all 0.2s linear;

            &:hover {
              color: ${theme.primary};
            }
          }
        }
      }
    }
    .bill {
      border: 2px solid ${theme.title};
      border-radius: 2rem;
      height: fit-content;
      padding: 2rem;
      margin-top: 2rem;

      h3 {
        white-space: nowrap;
        font-size: 1.3rem;
        text-align: center;
      }

      h4 {
        margin-top: 2rem;
        text-align: center;
        font-size: 3rem;
      }

      @media (max-width: 450px) {
        width: 100%;

        h3 {
          white-space: wrap;
        }
      }
    }
  `}
`;

export default Wrapper;
