import { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 100%;
    }

`;

export const fadeOut = keyframes`
    from{
        opacity: 100%;
    }
    to{
        opacity: 0;
        display: none;
    }

`;

export const up = keyframes`
0% {
  transform: translateY(0);
}

50%{
    transform: translateY(30px);
}

to {
    transform: translateY(0);
}
`;
