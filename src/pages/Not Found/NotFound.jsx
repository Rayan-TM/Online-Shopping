import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Wrapper>
      <div className="img-container">
        <img src="/public/assets/images/404.png" alt="404 error" />
      </div>
      <div className="content">
        <h1>
          Page <span>not found</span>
        </h1>
        <p>The page you are looking for doesn't exist, go back to home page</p>
        <Link to="/">Go Home</Link>
      </div>
    </Wrapper>
  );
}
