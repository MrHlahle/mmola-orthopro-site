import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  if (adminOnly && user.role !== "admin") return <Navigate to="/dashboard" />;

  return children;
}
