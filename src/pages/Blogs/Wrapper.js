import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";
import { container } from "../../shared/utils";

const Wrapper = styled(RowWrapper)`
  ${({ theme }) => css`
    ${container}
    align-items: start;
    gap: 50px;

    .main {
      width: 100%;

      .blogs-info {
        border-bottom: 1px solid ${theme.title};
        padding-bottom: 1rem;
      }

      .blogs {
        flex-wrap: wrap;
        display: flex;
        gap: 1rem;
        margin: 50px 0;
        row-gap: 50px;

        & > div {
          width: 31%;
        }
      }
    }

    @media (max-width: 1090px) {
      .main {
        width: 250%;

        .blogs {
          & > div {
            width: 47%;
          }
        }
      }
    }

    @media (max-width: 900px) {
      flex-wrap: wrap;
    }

    @media (max-width: 576px) {
      .blogs {
        & > div {
          flex-basis: 100%;
        }
      }
    }
  `}
`;

export default Wrapper;
