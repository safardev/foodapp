import React, { useState } from "react";
import "../CSS/Navbar.css";

export default function Navbar() {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "60px" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className="logo">BOOZLO</div>
      </nav>

      <div className={menu_class}>
        <ul>
          <li>Home</li>
          <li>Offer Zone</li>
          <li>Fashion</li>
          <li>Elctronics</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
}
