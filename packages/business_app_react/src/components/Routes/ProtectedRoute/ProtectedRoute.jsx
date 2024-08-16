import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const useAuth = false;
  // const { user } = useAuth();
  const user = false;
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
