import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.secondary};
    border-radius: 1rem;
    padding: 1rem 2rem;

    p{
        width: 80%;
        margin: auto;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;

      & > svg {
        font-size: 4rem;
        border: 4px solid ${theme.title};
        border-radius: 50%;        
      }

      .user-info{
        h5{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .date-time{
            display: flex;
            gap: 1rem;
        }

        .date, .hour{
            display: flex;
            align-items: center;
            gap: .25rem;

            svg{
                color: ${theme.primary};
            }
        }
      }
    }

    @media (max-width: 500px) {

      padding: 2rem 0;
      text-align: center;
      margin-bottom: 1.5rem;

      .header{
        flex-direction: column;
      }
    }
  `}
`;

export default Wrapper;
