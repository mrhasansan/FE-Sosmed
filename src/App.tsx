import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import { Home, action as actionHome } from "./routes/Home";
import { Register } from "./routes/Register";
import { ErrorPage } from "./routes/ErrorPage";
import { Login } from "./routes/Login";
import { Profile } from "./routes/Profile";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <Private />,
    children: [
      {
        path: "/home",
        element: <Home />,
        action: actionHome
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
}
