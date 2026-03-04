import axios from "axios";
import { getAccessToken, setAccessToken } from "./tokenStore";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let queue: any[] = [];

const processQueue = (token: string | null) => {
  queue.forEach((cb) => cb(token));
  queue = [];
};

// ✅ REQUEST → attach token
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ RESPONSE → handle 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    // ❌ prevent infinite loop
    if (original.url?.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      if (isRefreshing) {
        return new Promise((resolve) => {
          queue.push((token: string) => {
            original.headers.Authorization = `Bearer ${token}`;
            resolve(api(original));
          });
        });
      }

      isRefreshing = true;

      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/auth/refresh",
          {
            method: "POST",
            credentials: "include",
          }
        );

        if (!res.ok) throw new Error("Refresh failed");

        const data = await res.json();

        setAccessToken(data.accessToken);
        processQueue(data.accessToken);

        original.headers.Authorization = `Bearer ${data.accessToken}`;

        return api(original);
      } catch (err) {
        processQueue(null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;