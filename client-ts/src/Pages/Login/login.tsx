import React, { useRef } from "react";
import "./login.css";
import "./login-effect.css";

function Login() {
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
            <span className="login-span">
              or use your email for registration
            </span>
            <input className="login-input" type="text" placeholder="Name" />
            <input className="login-input" type="email" placeholder="Email" />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
            />
            <button className="login-button">Sign Up</button>
          </form>
        </div>

        <div className="login-container-form login-container-signIn">
          <form className="login-form">
            <h1 className="login-h1">Sign in</h1>
            <span className="login-span">or use your account</span>
            <input className="login-input" type="email" placeholder="Email" />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
            />
            <a className="login-a" href="/">
              Forgot your password?
            </a>
            <button className="login-button">Sign In</button>
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
    </div>
  );
}

export default Login;
