import { createBrowserRouter, redirect } from "react-router-dom";
import { Page404 } from "./components/404";
import * as FeatureController from "./controller/features_controller";
import {
  AddUserToFeature,
  CreateFeature,
  Home
} from "./pages";
import { DisableUserToFeature } from "./pages/DisableUserToFeature";

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
  {
    path: "add-user-to-feature",
    element: <AddUserToFeature />,
    action: FeatureController.addUser
  },
  {
    path: "disable-user-to-feature",
    element: <DisableUserToFeature />,
    action: FeatureController.disableUser
  },
]);
