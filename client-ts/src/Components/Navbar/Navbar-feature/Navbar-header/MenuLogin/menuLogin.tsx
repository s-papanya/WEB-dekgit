import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
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
