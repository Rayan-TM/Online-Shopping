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

    .comments {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .comment-form {
      margin-top: 5rem;

      h4 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;

        textarea {
          border-radius: 0.5rem;
          border: none;
          outline: none;
          padding: 1rem;
          font-size: 1.2rem;
          max-width: 100%;
          width: 100%;
          background-color: ${theme.secondary};
          color: ${theme.title};
        }

        button {
          padding: 1rem 5rem;
        }
      }
    }
  `}
`;

export default Tabs;
