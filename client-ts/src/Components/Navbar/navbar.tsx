import React, { useState, useEffect } from "react";
import NavbarHeader from "./Navbar-feature/Navbar-header/navbar-header";
import NavbarMenu from "./Navbar-feature/Navbar-Menu/navbar-menu";
import "./navbar.css";

function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (lastScrollY < window.scrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isHidden ? "navbar--hidden" : ""}`}>
      <NavbarHeader />
      <NavbarMenu/>
    </nav>
  );
}

export default NavBar;
