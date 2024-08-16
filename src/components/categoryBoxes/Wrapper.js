import styled from "styled-components";
import { container } from "../../shared/utils";

const Wrapper = styled.section`
  ${container}

  & > div {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin-bottom: 25px;
    flex-wrap: wrap;
  }

  .category {
    flex: 1;
  }

  .category3,
  .category4 {
    flex: 2;
  }

  @media (max-width: 985px) {
    .category4 {
      order: 1;

      #box4 img {
        width: 35%;
      }
    }
  }
`;

export default Wrapper;
