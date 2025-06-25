import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Not_found from './pages/NotFound'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "*",
    element: <Not_found />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
