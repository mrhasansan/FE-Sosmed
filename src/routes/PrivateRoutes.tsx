import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { useContext } from "react";

const PrivateRoutes = () => {
  const { user } = useContext(LoginContext);
  console.log(user);
  const isLoggedIn = user && user.token;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
