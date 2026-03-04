import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export const useRestoreSession = () => {
  const { setAccessToken } = useAuth();

  useEffect(() => {
    const restore = async () => {
      const res = await fetch("/api/refresh", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setAccessToken(data.accessToken);
      }
    };

    restore();
  }, []);
};