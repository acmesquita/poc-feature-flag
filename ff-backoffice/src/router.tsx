import { createBrowserRouter } from "react-router-dom";
import { Page404 } from "./components/404";
import {
  CreateFeature,
  Home
} from "./pages";
import { getAllfeatures } from "./services/feature";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
    loader: getAllfeatures
  },
  {
    path: "create-feature",
    element: <CreateFeature />,
  },
]);