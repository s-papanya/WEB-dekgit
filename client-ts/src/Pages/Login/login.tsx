import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input } from "@mui/material";
import axios from "axios";

import "./login.css";
import "./login-effect.css";

interface IUser {
  password: string;
  identifier: string;
}

function Login() {
  const navigate = useNavigate();
  const initialUser = { password: "", identifier: "" };
  const [user, setUser] = useState<IUser>(initialUser);

  const handleChange = ({
    target,
  }: {
    target: { name: string; value: any };
  }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    const url = "http://localhost:1337/api/auth/local";
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          toast.success("Logged in successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error: any) {
      toast.error("Please try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSignUpClick = () => {
    containerRef.current?.classList.add("login-right-panel-active");
  };

  const handleSignInClick = () => {
    containerRef.current?.classList.remove("login-right-panel-active");
  };

  return (
    <div className="login-container">
      <div className="login-container-main" ref={containerRef}>
        <div className="login-container-form login-container-signUp">
          <form className="login-form">
            <h1 className="login-h1">Create Account</h1>
            <span className="login-span">Use your email for registration</span>
            <Input className="login-input" type="text" placeholder="Name" />
            <Input className="login-input" type="email" placeholder="Email" />
            <Input
              className="login-input"
              type="password"
              placeholder="Password"
            />
            <Button className="login-button">Sign Up</Button>
          </form>
        </div>

        <div className="login-container-form login-container-signIn">
          <form className="login-form">
            <h1 className="login-h1">Sign in</h1>
            <span className="login-span">
              We're so excited to see you again
            </span>
            <Input
              className="login-input"
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <Input
              className="login-input"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <a className="login-a" href="/">
              Forgot your password?
            </a>
            <Button className="login-button" onClick={handleLogin}>
              Sign In
            </Button>
          </form>
        </div>

        <div className="login-container-overley">
          <div className="login-overlay">
            <div className="login-overlay-panel login-overlay-left">
              <h1 className="login-h1">Welcome Back!</h1>
              <p className="login-p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="login-button login-ghost"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>

            <div className="login-overlay-panel login-overlay-right">
              <h1 className="login-h1">Hello, Friend!</h1>
              <p className="login-p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="login-button login-ghost"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="login-footer">
        <p className="login-p">
          If logged in, you will be able to use More website features
        </p>
      </footer>
    </div>
  );
}

export default Login;
