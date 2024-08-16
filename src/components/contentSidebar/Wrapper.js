import styled, { css } from "styled-components";
import { boxShadow } from "../../shared/utils";

const Wrapper = styled.aside`
  ${({ theme, $selectedStructure }) => css`
    h3 {
      cursor: pointer;
      margin: 40px 0 20px;
      white-space: nowrap;
    }

    svg {
      transition: all 0.5s linear;
    }

    svg.rotate {
      transform: rotate(90deg);
    }

    ul {
      max-height: 500px;
      overflow: hidden;
      transition: max-height 0.5s linear;

      &.hidden {
        max-height: 0;
      }

      li {
        padding: 5px 30px;
        cursor: pointer;
        transition: all 0.2s linear;
      }

      li:hover,
      li.selected {
        color: ${theme.primary};
      }
    }

    form {
      background-color: ${theme.secondary};
      border-radius: 50px;
      height: 60px;
      padding: 10px;

      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 1.2rem;
        background-color: transparent;
        padding-left: 20px;
        color: ${theme.title};
      }

      div {
        background-color: ${theme.primary};
        color: #fff;
        border-radius: 50%;
        border: none;
        outline: none;
        padding: 8px 12px;
        font-size: 1rem;

        ${boxShadow(theme.primary)}
        transition: all 0.1s linear;
      }

      button:hover {
        background-color: ${theme.title};
        color: ${theme.primary} !important;
        ${boxShadow(theme.title)};
      }
    }

    ${$selectedStructure !== "grid"
      ? css`
          @media (max-width: 1090px) {
            width: 100%;

            h3 {
              background-color: ${theme.secondary};
              border-radius: 50px;
              padding: 1rem 2rem;
            }
          }
        `
      : css`
          @media (max-width: 830px) {
            width: 100%;

            h3 {
              background-color: ${theme.secondary};
              border-radius: 50px;
              padding: 1rem 2rem;
            }
          }
        `}
  `}
`;

export default Wrapper;
