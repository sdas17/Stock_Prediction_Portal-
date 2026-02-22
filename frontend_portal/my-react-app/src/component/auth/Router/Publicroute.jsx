import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthsProvider";

const Publicroute = ({ children }) => {
  const { islogged } = useContext(AuthContext);

  return !islogged ? children : <Navigate to="/dashboard" />;
};

export default Publicroute;