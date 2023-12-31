import React, { useState, useEffect } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function navBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav
        className="navbar"
        // style={{ outline: "2px solid red" }}
      >
        <div
          className="navbar-container"
          // style={{ outline: "2px solid orange" }}
        >
          <Link
            to="/"
            className="navbar-logo"
            // style={{ outline: "2px solid yellow" }}
            onClick={closeMobileMenu}
          >
            <div>
              <FaCameraRetro /> {"   "}
              JAY GRIESEDIECK PHOTOGRAPHY
            </div>
          </Link>

          <div className="menu-icon">
            {click ? (
              <FaX size={30} color="black" onClick={handleClick} />
            ) : (
              <FaAlignJustify size={30} color="black" onClick={handleClick} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/prints"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Prints
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Shop"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Shop</Button>}
        </div>
      </nav>
    </>
  );
}

export default navBar;
