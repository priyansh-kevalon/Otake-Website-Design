export const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL;
  if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
    return envUrl.replace(/\/api\/?$/, '').replace(/\/+$/, '');
  }
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
