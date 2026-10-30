import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const queryToken = urlParams.get("token");
      const queryUser = urlParams.get("user");

      if (queryToken && queryUser) {
        const parsed = JSON.parse(decodeURIComponent(queryUser));
        const adminUser = { ...parsed, isAdmin: true, role: "admin", token: queryToken };
        localStorage.setItem("otake_admin_token", queryToken);
        localStorage.setItem("otake_admin_user", JSON.stringify(adminUser));
        localStorage.setItem("otake_site_token", queryToken);
        localStorage.setItem("otake_site_user", JSON.stringify(adminUser));
        setUser(adminUser);
        setLoading(false);

        // Remove token/user query parameters from the address bar for clean display
        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
        return;
      }
    } catch (e) {
      console.error("SSO authentication parse error:", e);
    }

    const token = localStorage.getItem("otake_admin_token") || localStorage.getItem("otake_site_token");
    const userData = localStorage.getItem("otake_admin_user") || localStorage.getItem("otake_site_user");
    if (token && userData) {
      try {
        const parsed = JSON.parse(userData);
        setUser({ ...parsed, isAdmin: true, role: "admin" });
      } catch (e) {
        setUser(null);
      }
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
