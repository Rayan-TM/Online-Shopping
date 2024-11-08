import styled, { css } from "styled-components";

const Wrapper = styled.section`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: 10px;
    padding: 2rem 0.5rem;

    span {
      margin-bottom: 0.5rem;
    }

    .links {
      justify-content: center;
      flex-wrap: wrap;

      a {
        display: block;
        margin-bottom: 1rem;
      }

      a:hover {
        color: ${theme.primary};
      }
    }

    background-color: ${theme.secondary};
    color: ${theme.title};
  `}
`;

export default Wrapper;
