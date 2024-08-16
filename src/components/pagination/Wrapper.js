import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`

    margin: auto;
    width: fit-content;
    display: flex;

    button {
      border: 1px solid ${theme.primary};
      padding: 15px;
      cursor: pointer;
      background-color: ${theme.esther};
      font-size: 1rem;
      transition: all .2s linear;
      color: ${theme.title};

      &:hover:not(:disabled){
        background-color: ${theme.primary};
        color: #fff;
      }

      &:disabled{
        opacity: .3;
        cursor: not-allowed;
      }
    }

    .next {
      border-radius: 0 5px 5px 0;
    }

    .prev {
      border-radius: 5px 0 0 5px;
    }

    span {
      color: #fff;
      background-color: ${theme.primary};
      padding: 15px 20px;

    }
  `}
`;

export default Wrapper;
