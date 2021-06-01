import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/themes";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar changeTheme={changeTheme} themeSwitch={theme} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home themeSwitch={theme} />
          </Route>
          <Route path="/country/:id">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
