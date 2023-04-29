import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/ErrorPage";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Post } from "../pages/Post";
import { Chat } from "../pages/Chat";
import PrivateRoutes from "./PrivateRoutes";

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
    element: <PrivateRoutes />,
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
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
]);

function RouteApp() {
  return <RouterProvider router={router} />;
}

export default RouteApp;
