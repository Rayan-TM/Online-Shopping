import React from "react";
import Wrapper from "./Wrapper";

export default function Pagination({
  currentPage,
  minusPage,
  plusPage,
  lastPage,
  isNextDisabled,
}) {
  return (
    <Wrapper>
      <button disabled={currentPage === 1} onClick={minusPage} className="prev">
        Prev
      </button>
      <span>{currentPage}</span>
      <button
        disabled={isNextDisabled || currentPage === lastPage}
        onClick={plusPage}
        className="next"
      >
        Next
      </button>
    </Wrapper>
  );
}
