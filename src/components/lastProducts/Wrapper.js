import styled from "styled-components";
import { container } from "../../shared/utils";

const Wrapper = styled.div`
  ${container}

  .title {
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-weight: 300;
  }

  swiper-container {
    width: 80vw;
    min-height: 65vh;
    margin: 50px auto 0;
  }
`;

export default Wrapper;
