import { createElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_SIGN_UP } from "../routes/route.constants";
import { HomeContainer } from "./styled";

export const LayoutBase = () => {
  const token = localStorage.getItem("key");

  if (!token) {
    return createElement(Navigate, { to: ROUTE_SIGN_UP });
  }
  return (
    <HomeContainer>
      <Outlet />
    </HomeContainer>
  );
};
