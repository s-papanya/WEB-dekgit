import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { roleData, userData } from "../../../Config/provider";
import useModal from "../../Hook/useModal";

import Notification from "../../Notification/notification";

import "./navbar-menu.scss";

function NavbarMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { isOpen: isNotification, toggle: toggleNotification } = useModal();
  const checkJwt = userData();
  const role = roleData();
  const navigate = useNavigate();

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsTop(isTop);

      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const jwt = checkJwt.jwt;
    setIsLoggedIn(jwt ? true : false);

    const user = role.role;
    if (user === "authenticated") {
      setIsUser(true);
    }

    const admin = role.role;
    if (admin === "admin") {
      setIsAdmin(true);
    }
  }, [isLoggedIn, isAdmin, isUser]);

  const handleHome = () => {
    navigate("/");
  };

  const handleHistory = () => {
    navigate("/History");
  };

  const handleContact = () => {
    navigate("/Contact");
  };

  const handleCreateActivity = () => {
    navigate("/Admin/CreateActivity");
  };

  return (
    <ul className="navbar-menu">
      <Notification
        isOpen={isNotification}
        toggle={toggleNotification}
      ></Notification>
      <li className="navbar-li-home">
        <a
          className="navbar-a"
          onClick={handleHome}
          style={{ color: isTop ? "#ffffff" : "#000000" }}
        >
          HOME
        </a>
      </li>
      {isLoggedIn && (
        <>
          {isUser && (
            <li className="navbar-li-history">
              <a
                className="navbar-a"
                onClick={handleHistory}
                style={{ color: isTop ? "#ffffff" : "#000000" }}
              >
                HISTORY
              </a>
            </li>
          )}
          <li className="navbar-li-notification">
            <a
              className="navbar-a"
              onClick={toggleNotification}
              style={{ color: isTop ? "#ffffff" : "#000000" }}
            >
              NOTIFICATION
            </a>
          </li>

          {isAdmin && (
            <li className="navbar-li-notification">
              <a
                className="navbar-a"
                onClick={handleCreateActivity}
                style={{ color: isTop ? "#ffffff" : "#000000" }}
              >
                CREATE ACTIVITY
              </a>
            </li>
          )}
        </>
      )}
      <li className="navbar-li-contact">
        <a
          className="navbar-a"
          onClick={handleContact}
          style={{ color: isTop ? "#ffffff" : "#000000" }}
        >
          CONTACT
        </a>
      </li>
    </ul>
  );
}

export default NavbarMenu;
