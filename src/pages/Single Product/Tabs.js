import styled, { css } from "styled-components";

const Tabs = styled.div`
  ${({ theme }) => css`
    border-top: 2px solid ${theme.title};

    .content {
      width: 70vw;
      margin: 5rem auto 0;

      h2 {
        margin-bottom: 2rem;
      }
    }

    .tabs-btns {
      display: flex;
      justify-content: center;
      gap: 10rem;

      @media (max-width: 400px) {
        gap: 5rem;
      }


      button {
        border: none;
        color: ${theme.title};
        border-top: 6px solid transparent;
        background-color: transparent;
        font-size: 1.2rem;
        padding-top: 1.5rem;
        cursor: pointer;
        transition: color 0.2s linear;

        &.active {
          color: ${theme.primary};
          border-top: 6px solid ${theme.primary};
        }

        &:hover {
          color: ${theme.primary};
        }
      }
    }

  `}
`;

export default Tabs;
