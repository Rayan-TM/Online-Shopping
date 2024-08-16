import React from "react";
import Wrapper from "./Wrapper";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import ColumnWrapper from "../../shared/ColWrapper";

export default function SingleBlog({ date, hour, image, title, content, url }) {
  return (
    <Wrapper>
      <Link to={`/blog/${url}`}>
        <ColumnWrapper>
          <img src={image} alt={`${title} image`} />
          <small className="sub-title">
            <span className="date">
              {date} | {hour}
            </span>
            <span> . By Online Shopping</span>
          </small>
          <h3>{title}</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          ></div>
        </ColumnWrapper>
      </Link>
    </Wrapper>
  );
}
