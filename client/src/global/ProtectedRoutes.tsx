import { Navigate } from "react-router-dom";
import { TProtectedRoutesProps } from "./types";

const ProtectedRoutes = ({ children }: TProtectedRoutesProps) => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
