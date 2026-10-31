export const getBaseUrl = () => {
  // If explicitly configured in Vite environment with a remote production URL, use it
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
  if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
    return envUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '');
  }

  // When running locally or on a mobile device on Wi-Fi, return empty base so requests use relative `/api/...`.
  // This routes all requests through Vite's proxy on the frontend port, which:
  // 1. Completely bypasses Windows Firewall blocking port 5000 on mobile devices.
  // 2. Completely eliminates Cross-Origin CORS and preflight OPTIONS failures on mobile.
  // 3. Works seamlessly on both desktop (localhost) and mobile (LAN IP / tunnels).
  return '';
};

const API_BASE_URL = getBaseUrl();

export default API_BASE_URL;

export const getApiUrl = (path) => {
  const base = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!base) {
    return cleanPath;
  }
  return `${base}${cleanPath}`;
};
