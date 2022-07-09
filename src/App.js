// Dependency imports
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/Payment" element={<Categoryentityidpage />}></Route>
        <Route path="/Payment" element={<Productpage />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/category" element={<Categorypage />}></Route>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
      <Pagebottom />
    </BrowserRouter>
  );
}

export default App;
