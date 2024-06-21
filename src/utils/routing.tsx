import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/RootLayout";
import Start from "../pages/Start";
import Research from "../pages/Research";
import Experience from "../pages/Experience";
import Blog from "../pages/Blog";
import Oscar from "../components/blogsPage/blogs/Oscar";

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
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "blogs/oscar",
        element: <Oscar />,
      },
    ],
  },
]);
