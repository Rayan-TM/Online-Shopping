import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "./logo";
import Wrapper from "./wrapper";
import { NavLink } from "react-router-dom";
import { BsBasket, BsSearch } from "react-icons/bs";
import { FaDroplet, FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import RowWrapper from "../../shared/Rowrapper";
import ThemeBox from "./ThemeBox";
import { useGetUserInfoByTokenQuery } from "../../Redux/service/api/users";
import { useGetBasketProductsQuery } from "../../Redux/service/api/basket";
import { useGetFavoriteProductsQuery } from "../../Redux/service/api/favorites";
import Search from "./Search";

function Header({ changeTheme, setTheme, hasShadow }) {
  const [colors, setColors] = useState(["Classic", "Purple", "Orange", "Red"]);
  const [basketLength, setBasketLength] = useState(0);
  const [favoriteLength, setFavoriteLength] = useState(0);
  const [isThemeBoxOpen, setIsThemeBoxOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const userToken = localStorage.getItem("Token");
  const { data: userInfo } = useGetUserInfoByTokenQuery(userToken, {
    skip: !userToken,
  });

  const { data: favoriteProducts } = useGetFavoriteProductsQuery(
    userInfo?.[0]?.id,
    {
      skip: !userInfo,
    }
  );
  const { data: basketProducts } = useGetBasketProductsQuery(
    userInfo?.[0]?.id,
    {
      skip: !userInfo,
    }
  );

  function handleThemeBox(e) {
    localStorage.setItem("theme", e.target.innerText);
    setTheme(() => changeTheme());
  }

  useEffect(() => {
    basketProducts?.length >= 0 &&
      setBasketLength(basketProducts.reduce((a, b) => a + b.count, 0));
  }, [basketProducts]);

  useEffect(() => {
    favoriteProducts?.length >= 0 && setFavoriteLength(favoriteProducts.length);
  }, [favoriteProducts]);

  return (
    <Wrapper as="header" className={hasShadow ? "shadow" : null}>
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
          onClick={() => setIsThemeBoxOpen((prevState) => !prevState)}
        >
          <span>Page Theme</span>
          <FaDroplet />
          <ul>
            {colors.map((color) => (
              <li onClick={handleThemeBox} key={color}>
                {color}
              </li>
            ))}
          </ul>
        </ThemeBox>
        {userInfo?.length > 0 ? (
          <RowWrapper className="user">
            <FaRegUser /> <span>{userInfo[0]?.username}</span>
          </RowWrapper>
        ) : (
          <NavLink className="underlined" to="/account">
            Login/Register
          </NavLink>
        )}
        <BsSearch
          onClick={() => setIsSearchActive(true)}
          className="header-search"
        />
        <NavLink className="count-box" to="/favorites">
          <FaRegHeart />
          <span>{favoriteLength}</span>
        </NavLink>
        <NavLink className="count-box" to="/basket">
          <BsBasket />
          <span>{basketLength}</span>
        </NavLink>
      </RowWrapper>
      {isSearchActive &&
        createPortal(<Search onClose={setIsSearchActive} />, document.body)}
    </Wrapper>
  );
}

export default Header;
