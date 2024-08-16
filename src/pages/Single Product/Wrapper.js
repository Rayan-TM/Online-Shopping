import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem;

    .info {
      display: flex;
      justify-content: space-between;
      padding: 2rem 0;

      .image-side {
        width: 50%;
        display: flex;
        gap: 1rem;

        img {
          width: 100%;
          border-radius: 2rem;
        }
      }

      .albums {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        img {
          height: 5rem;
        }
      }

      .content {
        width: 50%;
        padding: 2rem;
        display: flex;
        flex-direction: column;

        .price {
          font-size: 2rem;
          margin-top: 2rem;
        }

        .down-side {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .colors {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }

          .category {
            & > span {
              color: ${theme.primary};
              font-size: 1.2rem;
              font-weight: 600;
            }
          }
        }
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 2rem 1rem;

        .more-btns{
          display: flex;
          gap: 1rem;
        }

        button {
          cursor: pointer;
          border: none;
          color: #fff;
          transition: all 0.2s linear;

          &:hover {
            color: ${theme.primary};
          }

          &:not(.btn-add-to-basket) {
            background-color: transparent;
            font-size: 1.8rem;
          }

          &.heart,
          &.comparison {
            color: ${theme.primary};

            &:hover {
              color: ${theme.title};
            }
          }
        }

        .btn-add-to-basket {
          font-size: 1.2rem;
          background-color: ${theme.primary};
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          border: 2px solid ${theme.primary};
          white-space: nowrap;

          &:hover {
            background-color: ${theme.title};
          }
        }
      }
    }

    @media (max-width: 992px) {
      .info {
        flex-wrap: wrap;
      }

      .image-side,
      .content {
        flex-basis: 100%;
      }
    }

    @media (max-width: 576px) {
      h1 {
        font-size: 1.5rem !important;
      }

      .actions {
        flex-wrap: wrap;
      }
    }
  `}
`;

export default Wrapper;
