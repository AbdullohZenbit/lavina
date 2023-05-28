import { createBrowserRouter } from "react-router-dom";
import {
  ROUTE_ADD_BOOK,
  ROUTE_BASE,
  ROUTE_HOME,
  ROUTE_SIGN_UP,
} from "./route.constants";
import { SignUpPage } from "../pages/SignUpPage";
import { LayoutBase } from "../layouts";
import { BooksPage } from "../pages/BooksPage";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: ROUTE_BASE,
    element: <LayoutBase />,
    children: [
      {
        index: true,
        path: ROUTE_HOME,
        element: <HomePage />,
        caseSensitive: true,
      },
      {
        path: ROUTE_ADD_BOOK,
        element: <BooksPage />,
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
