import styled, { css } from "styled-components";

const Icon = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.primary};
    cursor: pointer;
    height: 3.2rem;
    padding: 15px;
    border-radius: 5px;
    transition: all 0.2s linear;

    svg {
      font-size: 1.2rem;
      color: ${theme.primary};
    }

    &:hover,
    &.active {
      background-color: ${theme.primary};

      svg {
        color: #fff;
      }
    }

    @media (max-width: 576px) {
      display: none;
    }
  `}
`;

export default Icon;
