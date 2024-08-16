import { useState } from "react";
import { RiCoinsLine } from "react-icons/ri";
import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";
import RowWrapper from "../../shared/Rowrapper";
import { fadeOut } from "../../styles/animations";



export default function TopHeader() {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <Wrapper>
      <div>
        <RiCoinsLine /> <span>Big sale</span> for Christmas, discount up to 30%
        on all products
      </div>
      <IoClose
        isclosed={isClosed ? 1 : 0}
        onClick={() => setIsClosed(true)}
        className="close-btn"
      />
    </Wrapper>
  );
}

const Wrapper = styled(RowWrapper)`
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
  color: white;
  padding: 15px 0;
  justify-content: center;

  ${(props) =>
    props.children[1].props.isclosed &&
    css`
      animation: ${fadeOut} .5s linear forwards;
    `}

  .close-btn {
    cursor: pointer;
    font-size: 1.4rem;
  }
`;