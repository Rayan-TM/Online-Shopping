import { css } from "styled-components";

export const boxShadow = (color) => css`
  -webkit-box-shadow: 0px 0px 30px -7px ${color};
  -moz-box-shadow: 0px 0px 30px -7px ${color};
  box-shadow: 0px 0px 30px -7px ${color};
`;

export const makeDots = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const container = css`
  padding: 0 30px;
  margin: 20px 0;
`;

export const modal = css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
