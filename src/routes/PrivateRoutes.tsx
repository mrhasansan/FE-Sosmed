import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const isLoggedIn = user && user.token;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
