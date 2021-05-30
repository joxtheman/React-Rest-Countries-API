import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Navbar className="dark" />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/country/:id">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
