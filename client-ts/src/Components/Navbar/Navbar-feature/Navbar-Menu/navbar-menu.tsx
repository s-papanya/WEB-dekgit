import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar-menu.scss";

function NavbarMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    setIsLoggedIn(jwt ? true : false);
  }, [isLoggedIn]);

  const handleHome = () => {
    navigate("/");
  };

  const handleHistory = () => {
    navigate("/history");
  };

  const handleNotification = () => {
    navigate("/Notification");
  };

  const handleContact = () => {
    navigate("/Contact");
  };

  return (
    <ul className="navbar-menu">
      <li className="navbar-li-home">
        <a className="navbar-a" onClick={handleHome}>
          HOME
        </a>
      </li>
      {isLoggedIn && (
        <>
          <li className="navbar-li-history">
            <a className="navbar-a" onClick={handleHistory}>
              HISTORY
            </a>
          </li>
          <li className="navbar-li-notification">
            <a className="navbar-a" onClick={handleNotification}>
              NOTIFICATION
            </a>
          </li>
        </>
      )}
      <li className="navbar-li-contact">
        <a className="navbar-a" onClick={handleContact}>
          CONTACT
        </a>
      </li>
    </ul>
  );
}

export default NavbarMenu;
