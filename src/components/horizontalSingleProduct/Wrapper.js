import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: flex-start;
    min-height: 200px;
    border-radius: 0.2rem;
    overflow: hidden;
    background-color: ${theme.secondary};
    padding: 2rem;

    .content {
      width: 100%;
    }

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .image-container {
      width: 500px;
      height: 300px;
      overflow: hidden;
      border-radius: 0.1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s linear;
      }

      img:hover {
        transform: scale(1.05);
      }
    }

    .add-product {
      margin-right: auto;
      background-color: ${theme.secondary};
      color: ${theme.title};
      border-radius: 0.5rem;
      padding: 0.5rem 1.2rem;
      font-size: 1.2rem;
      cursor: pointer;

      svg {
        margin-left: 0.5rem;
      }
    }

    .price {
      font-size: 1.7rem;
      font-weight: 200;
    }

    .actions {
      display: flex;
      margin-top: 2rem;
      gap: 1rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.primary};
        color: ${theme.title};
        font-size: 1.3rem;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s linear;
      }
    }

    @media (max-width: 768px) {
      padding: 1rem;

      h4 {
        font-size: 1.2rem;
      }

      .image-container {
        width: 300px;
        height: 250px;
      }
    }

   
  `}
`;

export default Wrapper;
