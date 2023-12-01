import { Navigate } from "react-router-dom";
import { TProtectedRouteProps } from "./types";

const ProtectedRoute = ({
  children,
  isAuthenticated,
}: TProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
