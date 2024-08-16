import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";
import { boxShadow, container } from "../../shared/utils";
import { fadeIn } from "../../styles/animations";

const Wrapper = styled(RowWrapper)`
  ${container}
  /* min-height: 50vh; */
  margin: 5rem 0;

  .container {
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 50px;

    & > div {
      flex-basis: 15%;
    }

    & > div:first-child {
      flex-basis: 30%;
    }

    & .subscribe {
      flex-basis: 30%;
    }

    @media (max-width: 992px) {
      & > .subscribe {
        flex-basis: 50%;
      }

      & > div {
        flex-basis: 24%;
      }

      & > div:first-child {
        flex-basis: 40%;
      }
    }

    @media (max-width: 768px) {
      & > div {
        flex-basis: 44%;
      }
    }

    @media (max-width: 600px) {
      & > div,
      & > div:first-child,
      & > .subscribe {
        flex-basis: 100%;
      }
    }
  }

  a {
    width: fit-content;
  }

  .description {
    flex-basis: 25%;

    span {
      color: ${({ theme }) => theme.primary};
    }
  }

  .title {
    font-weight: 600;
  }

  .subscribe {
    flex-basis: 35%;
  }

  .subscribe .title {
    font-size: 1.5rem;
  }

  ul {
    justify-content: flex-start;
  }

  ${({ theme }) => css`
    form {
      background-color: ${theme.secondary};
      border-radius: 50px;
      height: 70px;
      padding: 10px 20px;

      input {
        width: 100%;
        border: none;
        outline: none;
        height: 100%;
        font-size: 1.2rem;
        background-color: transparent;
        padding-left: 20px;
        color: ${theme.title};
      }

      button {
        background-color: ${theme.primary};
        border-radius: 50px;
        border: none;
        outline: none;
        color: ${theme.esther};
        width: 200px;
        height: 100%;
        font-size: 1rem;

        ${boxShadow(theme.primary)}
        transition: all 0.1s linear;
        cursor: pointer;
      }

      button:hover {
        background-color: ${theme.title};
        ${boxShadow(theme.title)}
      }
    }
  `}
`;
export default Wrapper;
