import { createBrowserRouter } from "react-router-dom";
import { FORM_BOOK, ROUTE_BASE, ROUTE_SIGN_UP } from "./route.constants";
import { SignUpPage } from "../pages/SignUpPage";
import { LayoutBase } from "../components/layouts";
import HomePage from "../pages/HomePage/HomePage";
import FormPage from "../pages/FormPage/FormPage";
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
      // {
      //   index: true,
      //   element: <FormPage />,
      //   caseSensitive: true,
      // },
    ],
    // path: FORM_BOOK,
    // element:
  },
  {
    path: FORM_BOOK,
    element: <FormPage />,
    caseSensitive: true,
  },
  {
    path: ROUTE_SIGN_UP,
    caseSensitive: true,
    element: <SignUpPage />,
  },
]);
