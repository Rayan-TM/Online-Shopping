import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    main {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 2rem;
      }

      table{
        border-collapse: collapse;
        text-align: center;

        th{
            padding-bottom: 2rem;
        }
        
        thead tr {
            border-bottom: 2px solid ${theme.title};
            
        }

        tbody{


            tr{
                border-bottom: 1px solid ${theme.title};
                td{
                    padding: 1rem;
                }

                td:first-child{
                    width: 20%;
                    padding: 1rem;
                    img{
                        width: 100%;
                    }
                }

                
                td:last-child button{
                    background-color: transparent;
                    border: none;
                    font-size: 1.2rem;
                    color: ${theme.title};
                }
                
            }

        }

        
      }
      .bill{
            border: 2px solid ${theme.title};
            border-radius: 2rem;
            height: fit-content;
            padding: 2rem;

            h3{
                white-space: nowrap;
                font-size: 1.3rem
            }

            h4{
                margin: 2rem 0;
                text-align: center;
                font-size: 3rem;
            }
            button{
                width: 100%;
                font-size: 1.4rem;
            }
        }
    }
  `}
`;

export default Wrapper;
