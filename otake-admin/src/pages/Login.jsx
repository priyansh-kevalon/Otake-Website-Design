import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otake-admin-bg min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block w-fit rounded-full bg-yellow-300 px-3 py-1 text-[11px] font-semibold text-neutral-800 sm:px-3.5 sm:py-1.5 sm:text-[12px]">
            Admin Access
          </span>
          <h1 className="mt-4 text-[30px] font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-[36px]">
            Otake Admin Panel
          </h1>
          <p className="mt-2 text-[13px] text-neutral-600 sm:text-[14px]">
            Sign in to manage your website dashboard
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_20px_60px_rgba(30,8,25,0.08)] p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-neutral-800">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full h-11 px-4 rounded-lg border border-neutral-200 bg-white text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full h-11 px-4 rounded-lg border border-neutral-200 bg-white text-[13px] text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              disabled={loading}
              className="w-full h-11 bg-neutral-900 text-white rounded-lg text-[13px] font-medium hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 disabled:opacity-50 transition-colors"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
        <p className="text-center text-[11px] text-neutral-500 mt-6">
          © {new Date().getFullYear()} Otake. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
