import styled, { css } from "styled-components";
import { boxShadow, makeDots } from "../../shared/utils";

const Wrapper = styled.div`

  a {
    &:hover img {
      ${boxShadow()}
    }

    img {
      width: 100%;
      border-radius: 25px;
      transition: all 0.2s linear;
    }

    h3 {
      font-weight: 600;
    }

    .content p {
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &:not(:first-child) {
        display: none;
      }
    }
  }
`;

export default Wrapper;
