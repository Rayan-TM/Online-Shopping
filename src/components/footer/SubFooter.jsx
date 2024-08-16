import React from "react";
import RowWrapper from "../../shared/Rowrapper";
import styled, { css } from "styled-components";

export default function SubFooter() {
  return (
    <BottomFooterWrapper>
      <div>
        © Designed by <span>Rayan</span> | Developed by <span>Rayan Web</span>
      </div>
      <div>Privacy Policy . Terms and Conditions</div>
    </BottomFooterWrapper>
  );
}

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
