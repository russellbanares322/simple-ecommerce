import { Navigate } from "react-router-dom";
import { TProtectedRoutesProps } from "./types";

const ProtectedRoutes = ({
  children,
  isAuthenticated,
}: TProtectedRoutesProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
