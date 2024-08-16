import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";

const Wrapper = styled(RowWrapper)`
  ${({ theme }) => css`
    width: 90vw;
    margin: auto;
    padding: 30px;
    align-items: start;
    gap: 5rem;

    & > div {
      flex: 1;
    }

    h2 {
      border-bottom: 2px solid ${theme.secondary};
      padding-bottom: 25px;
      margin-bottom: 25px;
    }

    form {
      border: 2px solid ${theme.secondary};
      border-radius: 5px;
      padding: 20px;
      gap: 30px;

      & > div > span {
        font-size: 0.8rem;
        color: ${theme.primary};
      }

      .password-container {
        border: 2px solid ${theme.secondary};
        border-radius: 5px;
        background-color: transparent;

        div {
          height: 1.2rem;
        }

        input {
          border: none;
          width: 100%;
          color: ${theme.title};
        }

        svg {
          cursor: pointer;
          font-size: 1.2rem;
          margin-right: 18px;
          color: ${theme.primary};
        }
      }

      input {
        font-size: 1rem;
        padding: 14px 18px;
        border: 2px solid ${theme.secondary};
        outline: none;
        border-radius: 5px;
        background-color: transparent;
        color: ${theme.title};

        &[type="submit"] {
          background-color: ${theme.primary};
          cursor: pointer;
          color: #fff;

          &:hover {
            filter: opacity(0.9);
          }
        }
      }

      label {
        font-weight: 600;

        & span {
          color: ${theme.primary};
        }
      }
    }
  `}
`;

export default Wrapper;
