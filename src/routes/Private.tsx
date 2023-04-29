import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function Private() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const isLoggedIn = user && user.token;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
