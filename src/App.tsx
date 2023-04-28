import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { Register } from "./pages/Register";
import { ErrorPage } from "./pages/ErrorPage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Post } from "./pages/Post";
import { Chat } from "./pages/Chat";
import { LoginProvider } from "./contexts/LoginContext";

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
  {
    path: "chat",
    element: <Chat />,
  },
]);
function App() {
  return (
    <ChakraProvider>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </ChakraProvider>
  );
}

export default App;
