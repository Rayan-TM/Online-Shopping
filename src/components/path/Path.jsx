import React from "react";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import RowWrapper from "../../shared/Rowrapper";
import Wrapper from "./Wrapper";

export default function Path({ paths, title }) {
  return (
    <Wrapper>
      <RowWrapper className="links">
        {paths.map((path) => (
          <RowWrapper key={path.id}>
            <Link to={path.url}>{path.name}</Link>
            <span>{path.id < paths.length && <GrNext />}</span>
          </RowWrapper>
        ))}
      </RowWrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
}
