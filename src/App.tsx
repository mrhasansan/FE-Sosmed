import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";
import { Register } from "./routes/Register";
import { ErrorPage } from "./routes/ErrorPage";
import { Login } from "./routes/Login";
import { Profile } from "./routes/Profile";
import { Post } from "./routes/Post";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    element: <Private />,
    children: [
      {
        path: "home",
        element: <Layout />,
        children: [
          {
            path: "post",
            element: <Post />,
          },
        ],
      },
      {
        path: "profile",
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
