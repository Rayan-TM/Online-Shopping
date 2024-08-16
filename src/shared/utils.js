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
