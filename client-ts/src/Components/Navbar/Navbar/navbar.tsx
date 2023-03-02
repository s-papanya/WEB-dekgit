import { useState, useEffect } from "react";
import NavbarHeader from "../Navbar-header/navbar-header";
import NavbarMenu from "../Navbar-Menu/navbar-menu";
import "./navbar.css";

function NavBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isTop, setIsTop] = useState(true); // เพิ่ม state สำหรับตรวจสอบว่าอยู่บนสุดของหน้าจอหรือไม่

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (lastScrollY < window.scrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      // เพิ่มเงื่อนไขเพื่อตรวจสอบว่าอยู่บนสุดของหน้าจอหรือไม่
      const isTop = window.scrollY === 0;
      setIsTop(isTop);

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isHidden ? "navbar--hidden" : ""}`}
      style={{ backgroundColor: isTop ? "transparent" : "#ffffff" }} // เพิ่มเงื่อนไขเพื่อเปลี่ยนสีพื้นหลังของ Navbar เมื่อเลื่อนลงมาครั้งแรก
    >
      <NavbarHeader />
      <NavbarMenu />
    </nav>
  );
}

export default NavBar;
