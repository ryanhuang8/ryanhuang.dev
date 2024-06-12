import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/RootLayout";
import Start from "../pages/Start";
import Research from "../pages/Research";
import Experience from "../pages/Experience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "research",
        element: <Research />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
    ],
  },
]);
