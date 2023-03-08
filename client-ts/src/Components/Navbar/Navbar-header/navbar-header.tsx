import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../../Config/provider";
import Swal from "sweetalert2";

import "./navbar-header.css";

function NavbarHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const iconLogo = require("../../../Assets/cover_iconLogo/iconLogo.png");
  const avatar = require("../../../Assets/cover_iconLogo/avatar.png");
  const navigate = useNavigate();
  const user = userData();

  const username = user.username;

  // check jwt on localstorage and change isLoggedIn state
  useEffect(() => {
    const jwt = user.jwt;
    setIsLoggedIn(jwt ? true : false);
  }, [isLoggedIn]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to Logout ?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        setIsLoggedIn(false);
        window.location.reload();
      }
    });
  };

  return (
    <div className="navbarHeader">
      <div className="navbar-container-left">
        <img className="iconLogo-image" src={iconLogo} alt="Logo" />
      </div>
      {isLoggedIn ? (
        <div className="navbar-container-right">
          <div className="navbar-username">
            <a className="user-name">{username}</a>
          </div>
          <div className="navbar-avatar">
            <img className="avatar" src={avatar} alt="" />
          </div>
          <div className="navbar-login">
            <a className="menulogin-link btn-15" onClick={handleLogout}>
              LOGOUT
            </a>
          </div>
        </div>
      ) : (
        <div className="navbar-container-right">
          <div className="navbar-login">
            <a className="menulogin-link btn-15" onClick={handleLogin}>
              SIGN IN
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default NavbarHeader;
