import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_found from "./pages/NotFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const router = createBrowserRouter([
 
  {
    path: "*",
    element: <Not_found />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
