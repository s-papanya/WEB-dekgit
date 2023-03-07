import { useState } from "react";
import { toast, ToastOptions } from "react-toastify";
import { Button, Input } from "@mui/material";
import axios, { AxiosResponse } from "axios";

import "./login.css";

interface ApiResponse {
  message: string;
  data: {
    id: number;
    username: string;
    email: string;
  };
}

interface IUser {
  username: string;
  email: string;
  password: string;
}

export const Register = (): any => {
  const initialUser = { email: "", password: "", username: "" };
  const [user, setUser] = useState<IUser>(initialUser);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      signUp();
    }
  };

  const signUp = async (): Promise<void> => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        if (user.username.length < 6) {
          throw new Error("Username must be at least 6 characters.");
        }
        if (!/\S+@\S+\.\S+/.test(user.email)) {
          throw new Error("Please enter a valid email.");
        }
        if (!/(?=.*\d)(?=.*[a-zA-Z])/.test(user.password)) {
          throw new Error("Password must contain both letters and numbers.");
        }
        const res: AxiosResponse<ApiResponse> = await axios.post(url, user);
        if (res.data) {
          const successOptions: ToastOptions = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          };
          toast.success(
            "Registered successfully, Please try to login.",
            successOptions
          );
          setUser(initialUser);
        }
      } else {
        throw new Error("Please fill in all required fields.");
      }
    } catch (error: any) {
      toast.error(error.message, {
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

  const handleUserChange = ({
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

  return (
    <>
      <Input
        className="login-input"
        type="text"
        name="username"
        value={user.username}
        onChange={handleUserChange}
        onKeyDown={handleKeyDown}
        placeholder="Name"
      />
      <Input
        className="login-input"
        type="email"
        name="email"
        value={user.email}
        onChange={handleUserChange}
        onKeyDown={handleKeyDown}
        placeholder="Email"
      />
      <Input
        className="login-input"
        type="password"
        name="password"
        value={user.password}
        onChange={handleUserChange}
        onKeyDown={handleKeyDown}
        placeholder="Password"
      />
      <Button className="login-button" onClick={signUp}>
        Sign up
      </Button>
    </>
  );
};
