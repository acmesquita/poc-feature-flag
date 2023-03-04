import { createBrowserRouter } from "react-router-dom";
import { Page404 } from "./components/404";
import {
  CreateFeature,
  Home
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "create-feature",
    element: <CreateFeature />,
  },
]);