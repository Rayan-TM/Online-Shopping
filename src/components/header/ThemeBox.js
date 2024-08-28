import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";
import { fadeIn, fadeOut } from "../../styles/animations";

const ThemeBox = styled(RowWrapper)`
  padding: 12px 15px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  z-index: 999;
  white-space: nowrap;

  svg {
    color: ${({ theme }) => theme.primary};
  }

  ul {
    position: absolute;
    top: 110%;
    left: 0;
    background-color: ${({ theme }) => theme.secondary};
    border-bottom: 5px solid ${({ theme }) => theme.primary};
    width: 100%;
    border-radius: 10px;
    ${({ $isOpen }) =>
      $isOpen
        ? css`
            animation: ${fadeIn} 0.2s linear forwards;
          `
        : css`
            animation: ${fadeOut} 0.2s linear forwards;
          `}
  }

  ul li {
    transition: all 0.2s linear;
    padding: 4px 15px;
  }

  ul li:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 500px) {
    span {
      display: none;
    }

    ul {
      width: fit-content;
    }
  }
`;

export default ThemeBox;
