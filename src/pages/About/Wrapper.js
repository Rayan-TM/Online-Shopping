import styled from "styled-components";
import RowWrapper from "../../shared/Rowrapper";
import { container } from "../../shared/utils";

const Wrapper = styled(RowWrapper)`
  ${container}

  min-height: 90vh;

  .img-container {
    overflow: hidden;
    border-radius: 25px;
    flex-basis: 50vw;
    height: 70vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s linear;
  }

  img:hover {
    scale: 1.025;
  }

  .content {
    flex-basis: 40vw;
    span {
      color: ${({ theme }) => theme.primary};
      font-size: 1.4rem;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.8rem;
      opacity: 0.8;
    }
  }

  @media (max-width: 910px) {
    flex-wrap: wrap;
    row-gap: 2rem;
    margin: 4rem 0;

    .img-container {
      flex-basis: 100vw;
      order: 1;
    }

    .content {
      flex-basis: 100vw;
      order: 2;
    }
  }

  @media (max-width: 430px) {
    .content {
      span {
        font-size: 1rem;
      }

      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default Wrapper;
