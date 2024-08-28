import styled, { css } from "styled-components";

const Comments = styled.div`
  ${({ theme }) => css`
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

export default Comments;
