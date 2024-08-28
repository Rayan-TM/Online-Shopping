import styled, { css } from "styled-components";
import { container } from "../../shared/utils";
import RowWrapper from "../../shared/Rowrapper";

const Wrapper = styled(RowWrapper)`
  ${({ theme }) => css`
    ${container}

    .leaflet-top, .leaflet-bottom{
      z-index: unset;
    }

    small {
      color: ${theme.primary};
    }

    p {
      margin: 20px 0;
    }

    .leaflet-container {
      height: 90vh;
      width: 50%;
      border-radius: 25px;
    }

    .form-container {
      flex-basis: 40vw;
      margin-top: 5rem;
    }

    form {
      gap: 25px;

      span {
        font-size: 0.8rem;
        color: ${theme.primary};
        padding: 0 20px;
        margin-top: -5px;
      }

      input,
      textarea {
        background-color: ${theme.secondary};
        color: ${theme.title};
        font-size: 1rem;
        padding: 14px 20px;
        border: none;
        outline: none;
      }

      input {
        border-radius: 40px;
      }

      textarea {
        border-radius: 20px;
        max-width: 100%;
      }

      button {
        align-self: flex-end;
        padding: 15px;
        width: 14rem;
        display: block;
        font-size: 1rem;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 992px) {
      flex-wrap: wrap;
      justify-content: center;


      .form-container {
        flex-basis: 80vw;
        order: 2
      }

      .leaflet-container {
        flex-basis: 80vw;
        order: 1;
        margin-top: 2rem;
      }
    }
  `}
`;

export default Wrapper;
