import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const CTAButton = styled(Link)`
  ${({ theme, $color, $isUnique }) => css`
    color: ${$isUnique ? "#fff" : $color};
    background-color: ${$isUnique ? theme.primary : "#fff"};
    border: 1px solid ${$isUnique ? theme.primary : "#fff"};

    &:hover {
      background: ${$color || theme.primary};
      border: ${theme.title};
      color: ${$isUnique ? theme.secondary : $color};
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
