import React, { useState } from "react";
import Wrapper from "./Wrapper";

export default function SelectBox({ items, currentItem, setCurrentItem }) {
 
  const [isListOpen, setIsListOpen] = useState(false);

  const changeSelectedItem = e => {
    setCurrentItem(e.target.innerText)
    setIsListOpen(false)
  }

  return (
    <Wrapper>
      <button onClick={() => setIsListOpen((prevState) => !prevState)}>
        {currentItem}
      </button>
      <ul className={isListOpen ? 'active' : null}>
        {items.map((item) => (
          <li onClick={changeSelectedItem} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
