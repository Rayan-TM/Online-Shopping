import React, { useEffect, useState } from "react";
import RowWrapper from "../../shared/Rowrapper";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import Wrapper from "./Wrapper";

export default function ContentSidebar({
  categories,
  type,
  currentCategory,
  onChange,
  searchValue,
  setSearchValue,
  selectedStructure,
}) {
  const [isListOpen, setIsListOpen] = useState(true);

  return (
    <Wrapper $selectedStructure={selectedStructure}>
      <RowWrapper as="form">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder={`Search ${type}`}
        />
        <div>
          <BsSearch />
        </div>
      </RowWrapper>

      <RowWrapper
        as="h3"
        onClick={() => setIsListOpen((prevState) => !prevState)}
      >
        {type} categories
        <IoIosArrowForward className={isListOpen ? "rotate" : null} />
      </RowWrapper>

      <ul className={isListOpen ? null : "hidden"}>
        {categories &&
          [{ id: -1, name: "all" }, ...categories].map((category) => (
            <li
              onClick={() => onChange(category.name)}
              key={category.id}
              className={currentCategory === category.name ? "selected" : null}
            >
              {category.name.toUpperCase()}
            </li>
          ))}
      </ul>
    </Wrapper>
  );
}
