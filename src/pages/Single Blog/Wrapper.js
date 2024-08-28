import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 2rem;

    .content {
      width: 70vw;
      margin: auto;
      text-align: justify;
    }

    .cover {
      margin: 2rem 0;
      border-radius: 1rem;
      width: 100%;
    }

    .description{
      margin-bottom: 5rem;
    }

    .info {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
      .category .title {
        font-size: 1.2rem;
        color: ${theme.primary};
      }

      .date,
      .hour {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      svg {
        font-size: 1.7rem;
        color: ${theme.primary};
      }
    }

    @media (max-width: 768px) {
      .content {
        width: 85vw;
      }
    }

    @media (max-width: 500px) {
      .content {
        .info {
          flex-wrap: wrap;
        }
      }
    }
  `}
`;

export default Wrapper;
