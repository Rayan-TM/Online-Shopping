import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import * as Themes from "./styles/theme";
import { useRoutes, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import TopHeader from "./components/header/TopHeader";

import routes from "./routes";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/footer/SubFooter";
import TopFooter from "./components/footer/TopFooter";

function App() {
  const [theme, setTheme] = useState(() => getThemeFromLocalStorage());
  const router = useRoutes(routes);
  const location = useLocation();

  const [isScrollActive, setIsScrollActive] = useState(false);
  const [hasNavbarShadow, setHasNavbarShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);

    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function toggleScroll() {
    setIsScrollActive(window.scrollY > 500);
    setHasNavbarShadow(window.scrollY > 0);
  }

  function getThemeFromLocalStorage() {
    const currentTheme = localStorage.getItem("theme");
    return (
      Object.entries(Themes).filter(
        (theme) => theme[0] === currentTheme
      )?.[0]?.[1] || Themes.Classic
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TopHeader />
      <Header
        hasShadow={hasNavbarShadow}
        changeTheme={getThemeFromLocalStorage}
        setTheme={setTheme}
      />
      {router}
      <TopFooter />
      <Footer />
      <SubFooter isScrollActive={isScrollActive} />
    </ThemeProvider>
  );
}

export default App;
