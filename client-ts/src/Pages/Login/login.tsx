import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastOptions } from "react-toastify";
import { Button, Input } from "@mui/material";

import { Register } from "./register";
import axios from "axios";

import { storeRole, storeUser, userData } from "../../Config/provider";

import "./login.css";
import "./login-effect.css";

interface IUser {
  password: string;
  identifier: string;
}

function Login(): JSX.Element {
  const initialUser: IUser = { password: "", identifier: "" };
  const [user, setUser] = useState<IUser>(initialUser);
  const navigate = useNavigate();

  const handleChange = ({
    target,
  }: {
    target: { name: string; value: string };
  }): void => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async (): Promise<void> => {
    const url = "http://localhost:1337/api/auth/local";
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          const successOptions: ToastOptions = {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          };
          toast.success("Logged in successfully", successOptions);
          setUser(initialUser);
          addRole();
          navigate("/");
        }
      } else {
        const errorOptions: ToastOptions = {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        };
        toast.error("Please fill in all required fields.", errorOptions);
      }
    } catch (error: any) {
      const errorOptions: ToastOptions = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      };
      toast.error("Username or password is incorrect", errorOptions);
    }
  };

  const addRole = async (): Promise<void> => {
    const user = userData();
    try {
      const { data } = await axios.get(
        "http://localhost:1337/api/users/me?fields[0]=id&populate[role][fields][0]=type",
        {
          headers: {
            Authorization: "Bearer " + user.jwt,
          },
        }
      );
      storeRole(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSignUpClick = (): void => {
    containerRef.current?.classList.add("login-right-panel-active");
  };

  const handleSignInClick = (): void => {
    containerRef.current?.classList.remove("login-right-panel-active");
  };

  return (
    <div className="login-container">
      <div className="login-container-main" ref={containerRef}>
        <div className="login-container-form login-container-signUp">
          <form className="login-form">
            <h1 className="login-h1">Create Account</h1>
            <span className="login-span">Use your email for registration</span>
            <Register />
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
          if logged in You will be able to use additional features of the
          website. Or if you don't want to log in,
          <a className="login-a" href="/">
            {" "}
            click to exit.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Login;
