import { ChakraProvider } from "@chakra-ui/react";

import { AuthProvider } from "./contexts/AuthContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function RouteApp() {
  return <RouterProvider router={router} />;
}

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <RouteApp />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
