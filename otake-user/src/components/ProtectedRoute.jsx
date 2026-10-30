import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0a0f] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border-2 border-purple-400/30 border-t-purple-400 animate-spin"></div>
          <span className="text-white/70">Loading...</span>
        </div>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
