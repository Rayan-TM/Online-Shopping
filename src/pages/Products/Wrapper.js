import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";
import { boxShadow, container } from "../../shared/utils";

const Wrapper = styled(RowWrapper)`
  ${({ theme, $selectedStructure }) => css`
    ${container}
    align-items: start;
    gap: 50px;

    .products {
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      gap: 25px;
      flex-wrap: wrap;

      img{
        height: 100%;
      }

      ${$selectedStructure === "grid"
        ? css`
            & > div {
              width: 22%;

              @media (max-width: 1100px) {
                width: 29%;
              }

              @media (max-width: 560px) {
                width: 44%;
              }

              @media (max-width: 400px) {
                width: 100%;
              }
            }
          `
        : css`
            flex-direction: column;
            & > div {
              width: 100%;
            }
          `}
    }
    .not-found-message {
      width: 100%;
      text-align: center;
    }

    .main {
      width: 100%;

      .top-section {
        border-bottom: 1px solid ${theme.title};
        padding-bottom: 20px;
      }
    }
    ul {
      li {
        padding: 5px 30px;
        cursor: pointer;
        transition: all 0.2s linear;
      }

      li:hover {
        color: ${theme.primary};
      }
    }

    @media (max-width: 1090px) {
      ${$selectedStructure !== "grid" &&
      css`
        flex-wrap: wrap;
      `}
    }

    @media (max-width: 830px) {
      flex-wrap: wrap;
    }

    
  `}
`;

export default Wrapper;
