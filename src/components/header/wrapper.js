import styled, { css } from "styled-components";
import RowWrapper from "../../shared/Rowrapper";

const Wrapper = styled(RowWrapper)`
  ${({ theme }) => css`
    padding: 30px;

    @media (max-width: 730px) {
      flex-wrap: wrap;
      gap: 2rem;

      .right-side {
        margin-left: auto;
      }
    }

   

    .user {
      font-size: 1.5rem;

      & > span {
        font-size: 1rem;
      }
    }

    .count-box {
      position: relative;
      height: 1.8rem;
      font-size: 1.5rem;

      & > span {
        position: absolute;
        top: 60%;
        left: 50%;
        background-color: ${theme.primary};
        color: #fff;
        width: 1rem;
        height: 1rem;
        font-size: 0.8rem;
        border-radius: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .sidebar-toggle {
      display: none;
    }

    .sidebar-label {
      width: fit-content;
      min-height: 2rem;
      display: none;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      z-index: 40;

      .sidebar-btn {
        position: relative;
      }

      .sidebar-btn,
      .sidebar-btn::after,
      .sidebar-btn::before {
        width: 2rem;
        height: 2px;
        background-color: ${theme.title};
        transition: all 0.2s linear;
      }

      .sidebar-btn::before {
        content: "";
        position: absolute;
        top: -0.5rem;
        left: 0;
      }

      .sidebar-btn::after {
        content: "";
        position: absolute;
        top: 0.5rem;
        left: 0;
      }
    }

    .sidebar-bg {
      width: 5vw;
      height: 5rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      background-color: ${theme.secondary};
      transform: scale(0);
      transition: width 0.6s, height 0.6s, transform 0.4s;
    }

    .sidebar-toggle:checked {
      & ~ .sidebar-bg {
        width: 100%;
        height: 100%;
        transform: scale(1);
        z-index: 30;
        position: fixed;
      }

      & + .sidebar-label .sidebar-btn {
        height: 0;

        &::before {
          top: 0;
          transform: rotate(-45deg);
        }

        &::after {
          top: 0;
          transform: rotate(45deg);
        }
      }
    }

    .header-search {
      cursor: pointer;
      font-size: 1.5rem;
    }

    @media (max-width: 1050px) {
      nav ul {
        display: none;
      }

      .sidebar-label {
        display: flex;
        z-index: 1001;
      }

      .sidebar-toggle:checked ~ .sidebar-bg {
        z-index: 1000;
      }

      .sidebar-toggle:checked ~ nav {
        display: flex;
        justify-content: center;
        width: 100vw;
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 1000;
      }

      .sidebar-toggle:checked ~ nav ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  `}
`;

export default Wrapper;
