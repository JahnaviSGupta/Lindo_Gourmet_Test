import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";


import { HeaderLink } from "./HeaderLink";

import "../styles/MobileNav.css";

export default function MobileNav() {

  const [toggled, setToggled] = useState(false);

  function handleToggle() {
    toggled ? setToggled(false) : setToggled(true);
  }
  
  return (
    <>
      {/* The burger menu */}
      <button className="header__menuButton" onClick={() => handleToggle()}>
        <MenuIcon />
      </button>

      {toggled ? (
        <div className="moblieNav">
          <button onClick={() => handleToggle()}>x</button>

          <div
            className="mobileNav__linkContainer"
            onClick={() => setToggled(false)}
          >
            <HeaderLink
              name={"Home"}
              linkTo={"/"}
            />
            <HeaderLink
              name={"About"}
              linkTo={"/about"}
            />
            <HeaderLink
              name={"Product"}
              linkTo={"/category"}
            />
            <HeaderLink
              name={"Contact"}
              linkTo={"/contact"}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );

      

}
