import { useEffect } from "react";
import axios from "axios";
import config from "./config";
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

const addRole = async (): Promise<void> => {
  const user = userData();
  try {
    const { data } = await axios.get(
      `${config.apiPrefix}/users/me?fields[0]=id&populate[role][fields][0]=type`,
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

type Props = {
  children: JSX.Element;
};

export const ProtectRoute = ({ children }: Props) => {
  const { jwt } = userData();
  useEffect(() => {
    addRole()
  }, [jwt]);
  return children;
};
