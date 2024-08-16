import React from "react";
import Wrapper from "./Wrapper";

export default function Color({ code, title }) {
  return (
    <Wrapper $color={code}>
      <div className="title">{title}</div>
    </Wrapper>
  );
}
