import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
