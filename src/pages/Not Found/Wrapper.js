import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";

const Wrapper = styled(RowWrapper)`
  ${({ theme }) => css`
    background-color: ${theme.primary};
    height: 90vh;
    margin-bottom: -5rem;
    justify-content: center;
    padding: 0 5rem;
    gap: 2rem;
    color: #fff;

    .img-container {
      width: 50%;

      img {
        width: 100%;
      }
    }

    .content {
      width: 45%;

      h1 {
        font-size: 5rem;
        text-transform: uppercase;
        text-align: center;

        span {
          font-size: 3.5rem;
          display: block;
          width: fit-content;
          margin: 0 auto 2rem;
          padding: 0 2rem;

          background-color: #fff;
          color: ${theme.primary};
          border-radius: 1rem;
        }
      }
      p {
        border-left: 5px solid #fff;
        padding-left: 1rem;
        font-weight: 300;
        font-size: 1.2rem;
        text-transform: capitalize;
      }

      a {
        display: block;
        width: fit-content;
        margin: 2rem auto;
        background-color: #fff;
        color: ${theme.primary};
        font-size: 1.5rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        border-radius: 3px;
        transition: all .1s linear;
        border: 4px outset #fff;

        &:hover{
            border-color: ${theme.primary};
        }
      }
    }
  `}
`;

export default Wrapper;
