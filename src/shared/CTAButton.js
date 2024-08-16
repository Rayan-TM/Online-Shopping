import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ctaButtonMixin = (background, color) => css`
  background-color: ${background};
  border: 1px solid ${background};
  &:hover {
    color: ${color || '#fff'} ;
  }
`;

const CTAButton = styled(Link)`
  ${({ theme, $background, $color }) => css`
    ${ctaButtonMixin($background || theme.primary, $color || theme.esther)}
    color: ${$color || "#fff"};

    &:hover {
      background: ${$color || theme.primary};
      border: ${theme.title};
    }

    &::before,
    &::after {
      background: ${theme.title};
    }
  `}

  z-index: 998;
  border-radius: 50px;
  padding: 8px 16px;
  display: inline-block;
  user-select: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-weight: 500;

  text-align: center;
  min-width: 130px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
    transform: scaleX(0);
    transition: background 0.5s, transform 0.5s, opacity 0.5s ease-in;
  }

  &::before {
    left: -30%;
  }

  &::after {
    right: -30%;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

export default CTAButton;
