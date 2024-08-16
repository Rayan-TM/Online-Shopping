import styled, { css } from "styled-components";
import { makeDots } from "../../shared/utils";

const Wrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;

    .content {
      padding: 20px 10px;

      .name {
        ${makeDots}
        max-width: 400px;
        margin-bottom: 10px;
        display: block;
        transition: all 0.1s linear;
        font-weight: 600;
      }
    }

    .image-container {
      position: relative;
      overflow: hidden;
      height: 220px;

      img {
        width: 100%;
      }

      .add-product {
        position: absolute;
        bottom: -37%;
        left: 0;
        background-color: ${theme.secondary};
        color: ${theme.primary};
        border: none;
        cursor: pointer;
        width: 100%;
        height: 37%;
        font-size: 1.2rem;
        transition: all 0.2s linear;

        svg{
          margin-left: .5rem;
        }
      }

      .add-product:hover {
        background-color: ${theme.title};
        color: ${theme.primary};
      }

      .actions {
        position: absolute;
        top: 10px;
        left: -40px;
        display: flex;
        flex-direction: column;
        gap: 3px;
        transition: all 0.2s linear;

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${theme.secondary};
          color: ${theme.primary};
          font-size: 1.3rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s linear;
        }

        button:hover {
          background-color: ${theme.title};
          color: ${theme.primary};
        }
      }
    }
  `}

  &:hover .actions {
    left: 10px;
  }

  &:hover .add-product {
    bottom: 0;
  }
`;

export default Wrapper;
