import { useState, createContext } from "react";
import axios from "axios";
import { API_URL } from "../Helper";

interface User {
  userName: string;
  token: string;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface LoginContextType {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  user: User | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  setLoggedIn: () => { },
  user: null,
  handleLogin: () => Promise.resolve(),
  handleLogout: () => { },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(API_URL + `/users/login`, {
        email,
        password,
      });

      const { userName, token } = response.data;
      console.log(response.data);

      // Perform any necessary actions based on the API response
      localStorage.setItem("token", token);
      setLoggedIn(true);
      setUser({ userName, token });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
  };

  const contextValue: LoginContextType = {
    loggedIn,
    setLoggedIn,
    user,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
