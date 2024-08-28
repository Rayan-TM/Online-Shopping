import React, { useEffect, useState } from "react";
import RowWrapper from "../../shared/Rowrapper";
import styled, { css } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export default function SubFooter({ isScrollActive }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <BottomFooterWrapper>
      <div>
        © Designed by <span>Rayan</span> | Developed by <span>Rayan Web</span>
      </div>
      <div>Privacy Policy . Terms and Conditions</div>
      {isScrollActive && (
        <Scroll onClick={scrollToTop}>
          <FaArrowUp />
        </Scroll>
      )}
    </BottomFooterWrapper>
  );
}

const Scroll = styled.button`
  ${({ theme }) => css`
    position: fixed;
    color: ${theme.title};
    background-color: ${theme.esther};
    bottom: 1rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      background-color: ${theme.primary};
      color: #fff;
    }
  `}
`;

const BottomFooterWrapper = styled(RowWrapper)`
  padding: 20px 30px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
  }
  span:hover {
    font-weight: 600;
  }

  background-color: #111;
  color: #fff;

  span {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    transition: all 0.1s linear;
  }
`;
