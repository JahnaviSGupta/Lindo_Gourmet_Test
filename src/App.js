// Dependency imports
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import Pagebottom from "./components/Pagebottom";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Payment from "./components/Payment";

// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categorypage from "./pages/Categorypage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Categoryentityidpage from "./pages/Categoryentityidpage";
import Productpage from "./pages/Productpage";
import LabelTeas from "./pages/LabelTeas";
import TeaGifts from "./pages/TeaGifts";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      {/* Header with navbar */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/teagifts" element={<TeaGifts />} />
        <Route path="/labelteas" element={<LabelTeas />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/categoryentityidpage"
          element={<Categoryentityidpage />}
        />
        <Route path="/productpage" element={<Productpage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Categorypage />} />
        <Route index path="/" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Pagebottom />
    </BrowserRouter>
  );
}

export default App;
