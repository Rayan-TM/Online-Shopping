import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import * as Themes from "./styles/theme";
import { useState } from "react";
import Header from "./components/header/Header";
import TopHeader from "./components/header/TopHeader";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/footer/SubFooter";
import TopFooter from "./components/footer/TopFooter";

function App() {
  const [theme, setTheme] = useState(() => getThemeFromLocalStorage());
  const router = useRoutes(routes);

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
      <Header changeTheme={getThemeFromLocalStorage} setTheme={setTheme} />
      {router}
      <TopFooter />
      <Footer />
      <SubFooter />
    </ThemeProvider>
  );
}

export default App;
