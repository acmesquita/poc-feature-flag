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
    loader: async () => {
      const response = await fetch('http://localhost:3333/allFeatures')
      const features = await response.json()

      return features
    }
  },
  {
    path: "create-feature",
    element: <CreateFeature />,
  },
]);