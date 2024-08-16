import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme, $color }) => css`
    background-color: ${$color};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid ${theme.title};
    position: relative;

    &:hover .title{
      visibility: visible;
      opacity: 1;
      top: -70%;
    }

    .title {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${theme.primary};
      color: #fff;
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      text-transform: uppercase;
      visibility: hidden;
      opacity: 0;
      transition: all .25s linear;
      font-size: .8rem;


      &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-right: .4rem solid transparent;
        border-left: .4rem solid transparent;

        border-top: .4rem solid ${theme.primary};
      }
    }
  `}
`;

export default Wrapper;
