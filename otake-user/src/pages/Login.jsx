import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="otake-admin-bg min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <span className="inline-block w-fit rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-3 py-1 text-[11px] font-semibold text-white sm:px-3.5 sm:py-1.5 sm:text-[12px] shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            User Access
          </span>
          <h1 className="mt-4 text-[30px] font-bold leading-[1.15] tracking-tight text-white sm:text-[36px]">
            Otake User Panel
          </h1>
          <p className="mt-2 text-[13px] text-white/60 sm:text-[14px]">
            Sign in to access your user dashboard
          </p>
        </div>
        <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_40px_80px_rgba(146,118,255,0.15)] p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-2 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-white/90">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full h-11 px-4 rounded-lg border border-white/10 bg-white/[0.05] text-[13px] text-white placeholder:text-white/30 focus:border-purple-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/20"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-white/90">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full h-11 px-4 rounded-lg border border-white/10 bg-white/[0.05] text-[13px] text-white placeholder:text-white/30 focus:border-purple-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/20"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              disabled={loading}
              className="w-full h-11 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg text-[13px] font-medium hover:from-pink-600 hover:to-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:opacity-50 transition-all shadow-[0_10px_40px_rgba(168,85,247,0.3)]"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-white/60 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-purple-400 hover:text-purple-300 font-medium">
            Sign up
          </a>
        </p>
        <p className="text-center text-[11px] text-white/40 mt-4">
          © {new Date().getFullYear()} Otake. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
