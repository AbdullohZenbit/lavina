import { createElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_SIGN_UP } from "../../routes/route.constants";

export const LayoutBase = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return createElement(Navigate, { to: ROUTE_SIGN_UP });
  }
  return <Outlet />;
};
