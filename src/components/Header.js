import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "react-dropdown";
import LindoGourmetLogo from "../images/LindoGourmetLogo.png";

import "../styles/Header.css";

import MobileNav from "./MobileNav";
import { HeaderLink } from "./HeaderLink";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactIcon from "@material-ui/icons/Contacts";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <>
      <nav className="header">
        {/* This is the logo link */}
        <Link to="/">
          <img className="header__logo" src={LindoGourmetLogo} alt="" />
        </Link>

        {/* This is the search bar and icon*/}
        <div className="header__searchbar">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* This is button for account */}
        <div className="dropdown">
          <button className="dropbtn">
            <AccountCircleIcon className="header__accountcircleIconIcon" />
            &#x25BE;
          </button>

          <div className="dropdown-content">
            <a href="/">Dashboard</a>
            <a href="/">Profile</a>
            <a href="/">Cart</a>
            <a href="/">Admin</a>
            <a href="/">Signout</a>
          </div>
        </div>

        {/* This is the mobile navbar */}
        <MobileNav />
      </nav>

      <nav>
        <div className="header2">
          <div className="header__linkContainer">
            <HeaderLink name={"Home"} linkTo={"/"} />
            <HeaderLink name={"About"} linkTo={"/about"} />
            <HeaderLink name={"Product"} linkTo={"/category"} />
            <HeaderLink name={"Contact"} linkTo={"/contact"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
