export const getBaseUrl = () => {
  // If explicitly configured in Vite environment, use it
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
  if (envUrl) {
    return envUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '');
  }

  // When running in a browser, use the current host so mobile devices on the same Wi-Fi/LAN reach the backend
  if (typeof window !== 'undefined' && window.location) {
    const { hostname, protocol } = window.location;
    // If mobile or remote device accessed via LAN IP (e.g. 192.168.x.x, 10.x.x.x, etc.)
    if (hostname && hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return `${protocol}//${hostname}:5000`;
    }
    return `http://${hostname || 'localhost'}:5000`;
  }

  return 'http://127.0.0.1:5000';
};

const API_BASE_URL = getBaseUrl();

export default API_BASE_URL;

export const getApiUrl = (path) => {
  const base = getBaseUrl().replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
