import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagebottom from "./components/Pagebottom";
import Categorypage from "./pages/Categorypage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Categoryentityidpage from "./pages/Categoryentityidpage";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Categoryentityidpage">
            <Categoryentityidpage />
          </Route>
          <Route path="/Productpage">
            <Productpage />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/category">
            <Categorypage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Pagebottom />
    </Router>
  );
}

export default App;
