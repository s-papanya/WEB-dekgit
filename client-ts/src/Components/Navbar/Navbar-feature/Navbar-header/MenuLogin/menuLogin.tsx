import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import "./menuLogin.css";

function MenuLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    setIsLoggedIn(jwt ? true : false);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to Logout ?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons:true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        navigate("/");
      }
    });
  };

  return (
    <nav className="menuLogin">
      {isLoggedIn ? (
        <a className="menulogin-link" onClick={handleLogout}>
          LOGOUT
        </a>
      ) : (
        <a className="menulogin-link" onClick={handleLogin}>
          LOGIN
        </a>
      )}
    </nav>
  );
}

export default MenuLogin;
