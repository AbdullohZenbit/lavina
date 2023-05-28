import { createBrowserRouter } from "react-router-dom";
import { ROUTE_BASE, ROUTE_SIGN_UP } from "./route.constants";
import { SignUpPage } from "../pages/SignUpPage";
import { LayoutBase } from "../components/layouts";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: ROUTE_BASE,
    element: <LayoutBase />,
    children: [
      {
        index: true,
        element: <HomePage />,
        caseSensitive: true,
      },
    ],
  },
  {
    path: ROUTE_SIGN_UP,
    caseSensitive: true,
    element: <SignUpPage />,
  },
]);
