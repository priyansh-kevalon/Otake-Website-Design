import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("otake_admin_token");
    const userData = localStorage.getItem("otake_admin_user");
    if (token && userData) {
      const parsed = JSON.parse(userData);
      setUser({ ...parsed, isAdmin: true });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    const adminUser = { ...data, isAdmin: true, role: 'admin' };
    localStorage.setItem("otake_admin_token", data.token);
    localStorage.setItem("otake_admin_user", JSON.stringify(adminUser));
    localStorage.setItem("otake_site_token", data.token);
    localStorage.setItem("otake_site_user", JSON.stringify(adminUser));
    setUser(adminUser);
    return adminUser;
  };

  const logout = () => {
    localStorage.removeItem("otake_admin_token");
    localStorage.removeItem("otake_admin_user");
    localStorage.removeItem("otake_site_token");
    localStorage.removeItem("otake_site_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
