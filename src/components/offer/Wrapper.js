import styled from "styled-components";
import { up } from "../../styles/animations";

const Wrapper = styled.section`
  padding: 30vh 30px 20vh;

  .content {
    padding: 50px;
    position: relative;
    background-color: ${({ $color }) => $color};
    color: #fff;
    min-height: 60vh;
    border-radius: 25px;
    flex-wrap: wrap;
  }

  .off-count,
  .expire {
    font-weight: 300;
  }

  h3 {
    font-size: 5rem;
  }

  .sup-title {
    font-weight: 500;
  }

  .title {
    font-size: 2rem;
    font-weight: 600;
  }

  img {
    position: absolute;
    animation: ${up} 2s linear infinite;
  }

  img.img-Summer {
    left: -15%;
    width: 100%;
  }

  img.img-Winter {
    width: 60%;
    left: 15%;
  }

  .right {
    width: 40%;
    align-items: start;
  }

  .left {
    width: 40%;
  }

  @media (max-width: 992px) {
    padding: 100px 50px;
    img.img-Summer {
      left: -5%;
    }

    .right,
    .left {
      width: 100%;
      text-align: center;

      span {
        width: 100%;
        text-align: center;
      }

      .sup-title {
        margin-top: 25rem;
      }

      .link {
        margin: auto;
      }
    }
  }

  @media (max-width: 500px) {
    img.img-Winter {
      left: 0;
      top: 25%;
      width: 100%;
    }

    img.img-Summer {
      left: -20%;
      width: 130%;
      top: 25%;
    }

    h3 {
      font-size: 2rem;
    }

    .sub-title {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
