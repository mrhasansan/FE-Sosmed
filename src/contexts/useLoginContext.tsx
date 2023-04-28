import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export const useLoginContext = () => {
  return useContext(LoginContext);
};
