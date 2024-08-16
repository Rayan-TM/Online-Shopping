import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";

const Wrapper = styled(RowWrapper)`
  ${({ theme }) => css`
    border-radius: 1rem;
    border: 2px solid ${theme.title};
    padding: 0.25rem 1rem;
    width: fit-content;
    font-size: 2rem;

    button {
      font-size: 1.5rem;
      background-color: transparent;
      border: none;
      color: ${theme.title};
      cursor: pointer;
      transition: color .1s linear;

      &:hover {
        color: ${theme.primary};
      }
    }
  `}
`;

export default Wrapper;
