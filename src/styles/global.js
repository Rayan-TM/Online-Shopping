import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.esther};
    color: ${({ theme }) => theme.title};
    overflow-x: hidden;
    
    .box{
        background-color: ${({ theme }) => theme.secondary};
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.title};
    }

    ul{
        list-style-type: none;
    }

    .underlined{
    position: relative;

    &::after {
    content: "";
    width: 0%;
    background-color: ${({ theme }) => theme.primary};
    height: 3px;
    display: block;
    position: absolute;
    border-radius: 20px;
    transition: all 0.2s linear;
    }

    &:hover::after {
        width: 100%;
    }
    }

    ${({ theme }) => css`
      .active {
        color: ${theme.primary};
        font-weight: 600;
      }
    `}
}
`;

export default GlobalStyles;
