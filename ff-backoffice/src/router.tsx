import { createBrowserRouter, redirect } from "react-router-dom";
import { Page404 } from "./components/404";
import * as FeatureController from "./controller/features_controller";
import {
  CreateFeature,
  Home
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
    loader: FeatureController.index
  },
  {
    path: "create-feature",
    element: <CreateFeature />,
    action: FeatureController.create
  },
]);
