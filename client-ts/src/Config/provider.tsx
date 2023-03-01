import { useEffect } from "react";

export const storeUser = (data: any) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      email: data.user.email,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringfiedUser = localStorage.getItem("user") || '""';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

export const storeRole = (data: any) => {
  localStorage.setItem(
    "role",
    JSON.stringify({
      role: data.role.type,
    })
  );
};

export const roleData = () => {
  const stringfiedUser = localStorage.getItem("role") || '""';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

type Props = {
  children: JSX.Element;
};

export const ProtectRoute = ({ children }: Props) => {
  const { jwt } = userData();
  useEffect(() => {
    if (!jwt) {
      console.log("aaaaa");
    }
  }, [jwt]);

  return children;
};
