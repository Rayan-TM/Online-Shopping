import { useState, useRef, useEffect } from "react";
import Logo from "./logo";
import Wrapper from "./wrapper";
import { NavLink } from "react-router-dom";
import { BsBasket, BsSearch } from "react-icons/bs";
import { FaDroplet, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import RowWrapper from "../../shared/Rowrapper";
import ThemeBox from "./ThemeBox";
import { useGetUserInfoBytokenQuery } from "../../Redux/service/api/users";
import { useGetBasketProductsQuery } from "../../Redux/service/api/basket";
import { useGetFavoriteProductsQuery } from "../../Redux/service/api/favorites";

function Header({ changeTheme, setTheme }) {
  const themeList = useRef();
  const [basketLength, setBasketLength] = useState(0);
  const [favoriteLength, setFavoriteLength] = useState(0);
  const [isThemeBoxOpen, setIsThemeBoxOpen] = useState(false);
  const userToken = localStorage.getItem("Token");
  const { data: userInfo } = useGetUserInfoBytokenQuery([], {
    skip: !userToken,
  });
  const { data: favoriteProducts } = useGetFavoriteProductsQuery(
    userInfo?.[0].id,
    {
      skip: !userInfo,
    }
  );
  const { data: basketProducts } = useGetBasketProductsQuery(userInfo?.[0].id, {
    skip: !userInfo,
  });

  function handleThemeBox(e) {
    const colors = Array.from(themeList.current.children);
    if (colors.includes(e.target)) {
      const selectedTheme = e.target.innerText;
      localStorage.setItem("theme", selectedTheme);
      setTheme(() => changeTheme());
    } else {
      setIsThemeBoxOpen((prevState) => !prevState);
    }
  }

  useEffect(() => {
    if (basketProducts?.length) {
      setBasketLength(basketProducts.reduce((a, b) => a + b.count, 0));
    }
  }, [basketProducts]);

  useEffect(() => {
    favoriteProducts?.length && setFavoriteLength(favoriteProducts.length);
  }, [favoriteProducts]);

  return (
    <Wrapper as="header">
      <RowWrapper>
        <input id="sidebar-toggle" type="checkbox" className="sidebar-toggle" />
        <label htmlFor="sidebar-toggle" className="sidebar-label">
          <div className="sidebar-btn"></div>
        </label>
        <div className="sidebar-bg"></div>
        <Logo to="/">Online Shopping</Logo>
        <nav>
          <RowWrapper as="ul">
            <li>
              <NavLink className="underlined" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="underlined" to="/products">
                Store
              </NavLink>
            </li>
            <li>
              <NavLink className="underlined" to="/blogs">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="underlined" to="/about">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink className="underlined" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="underlined" to="/qa">
                QA
              </NavLink>
            </li>
          </RowWrapper>
        </nav>
      </RowWrapper>
      <RowWrapper className="right-side">
        <ThemeBox
          className="theme-box"
          $isOpen={isThemeBoxOpen}
          onClick={handleThemeBox}
        >
          <span>Page Theme</span>
          <FaDroplet />
          <ul ref={themeList}>
            <li>Classic</li>
            <li>Purple</li>
            <li>Orange</li>
            <li>Red</li>
          </ul>
        </ThemeBox>
        {userInfo ? (
          <RowWrapper className="user">
            <FaRegUser /> <span>{userInfo[0].username}</span>
          </RowWrapper>
        ) : (
          <NavLink className="underlined" to="/account">
            Login/Register
          </NavLink>
        )}
        <BsSearch className="header-search" />
        <NavLink className="count-box" to="/favorites">
          <FaRegHeart />
          <span>{favoriteLength}</span>
        </NavLink>
        <NavLink className="count-box" to="/basket">
          <BsBasket />
          <span>{basketLength}</span>
        </NavLink>
      </RowWrapper>
    </Wrapper>
  );
}

export default Header;
