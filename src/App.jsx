import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_found from "./pages/NotFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Not_found />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
