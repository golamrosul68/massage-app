import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // <-- ঠিক করা হলো এখানে
import Not_found from "./pages/NotFound";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Rootlayout from "./component/Rootlayout";


const router = createBrowserRouter([
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
    path: "/Signup",
    Component: Signup,
  },
  {
    path: "*",
    Component: Not_found,
  },
]);

const App = () => {
  return <RouterProvider router={router} />; 
};

export default App;
