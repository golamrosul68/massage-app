import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_found from "./pages/NotFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Rootlayout from "./component/Rootlayout";

createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "massage", Component: Message },
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
