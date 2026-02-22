import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthsProvider";

const PrivateRoute = () => {
  const { islogged } = useContext(AuthContext);

  // If not logged in → redirect
  if (!islogged) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → render child routes
  return <Outlet />;
};

export default PrivateRoute;