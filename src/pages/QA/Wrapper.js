import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 70vw;
  margin: 5rem auto;

  @media (max-width: 600px) {
    width: 100vw;
  }

  ${({ theme }) => css`
    .accordion {
      width: 100%;
      background-color: ${theme.secondary};
      color: ${theme.title};
      text-align: left;
      border: none;
      outline: none;
      padding: 20px;
      font-size: 1.4rem;
      cursor: pointer;
      transition: all 0.2s linear;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &.active,
      &:hover {
        background-color: ${theme.primary};
      }

      &.active + .panel {
        padding: 20px;
        max-height: unset;
        overflow: unset;
      }

      &:after {
        content: "+";
        font-size: 2rem;
      }

      &.active:after {
        content: "-";
        font-size: 2rem;
      }
    }

    .panel {
      line-height: 2rem;
      max-height: 0;
      overflow: hidden;
      transition: all 0.2s ease-out;
    }
  `}
`;

export default Wrapper;
