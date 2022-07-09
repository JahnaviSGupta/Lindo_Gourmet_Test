import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "react-dropdown";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LindoGourmetLogo from "../images/LindoGourmetLogo.png";
import "../styles/dropdown.css";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={LindoGourmetLogo} alt="" />
      </Link>

      <div className="header__nav">
        <Link to="/" className="header__link">
          {" "}
          {/* href will refresh page, Link won't refresh */}
          <div className="header__option">
            <span className="header__optionLineOneHome">Home</span>
          </div>
        </Link>

        <Link to="/about" className="header__link">
          {" "}
          {/* href will refresh page, Link won't refresh */}
          <div className="header__option">
            <span className="header__optionLineOne">About</span>
          </div>
        </Link>

        <Link to="/category" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Products</span>
          </div>
        </Link>

        <Link to="/contact" className="header__link">
          {" "}
          {/* href will refresh page, Link won't refresh */}
          <div className="header__option">
            <span className="header__optionLineOne">Contact</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          {" "}
          {/* href will refresh page, Link won't refresh */}
          <div className="header__option">
            <span className="header__optionLineOne">Username</span>
          </div>
        </Link>

        <div className="dropdown">
          <button className="dropbtn">Account &#x25BE;</button>
          <div className="dropdown-content">
            <a href="/">Dashboard</a>
            <a href="/">Profile</a>
            <a href="/">Cart</a>
            <a href="/">Admin</a>
            <a href="/">Signout</a>
          </div>
        </div>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
