import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { Heroes } from "../pages/Heroes";
import { Heroe } from "../pages/Heroe";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Heroes",
        element: <Heroes />,
        children: [
          {
            path: "/Heroes/Heroe",
            element: <Heroe />,
          },
        ],
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);
