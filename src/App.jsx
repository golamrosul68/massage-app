import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_found from "./pages/NotFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Message from "./pages/Message";

createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },


   {
    path: "/Login",
    Component: Login,
   
  },
   {
    path: "/singup",
    Component: Signup,
   
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
