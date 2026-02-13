import { Navigate, Outlet } from "react-router-dom";

export const AdminGuard = () => {
  const admin = localStorage.getItem("admin");
  return admin ? <Outlet /> : <Navigate to="/private/dashboard" replace />;
};
