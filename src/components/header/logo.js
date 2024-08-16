import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(NavLink)`
  color: ${({ theme }) => theme.primary};
  font-weight: 300;
  font-size: 1.5rem;

  &.active{
    font-weight: 300;
  }
`;

export default Logo