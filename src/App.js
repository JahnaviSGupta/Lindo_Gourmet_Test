// Dependency imports
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import Pagebottom from "./components/Pagebottom";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categorypage from "./pages/Categorypage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Categoryentityidpage from "./pages/Categoryentityidpage";
import Productpage from "./pages/Productpage";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/payment">
            <Payment />
          </Route>
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
          <Route index path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Pagebottom />
    </Router>
  );
}

export default App;
