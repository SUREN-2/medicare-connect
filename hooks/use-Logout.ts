import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useLogout = () => {
  const queryClient = useQueryClient();
  const { setAccessToken } = useAuth();

  return useMutation({
    mutationFn: async () => {
      await api.post("/auth/logout");
    },
    onSuccess: () => {
    
      setAccessToken(null);

      
      queryClient.clear();

      
      window.location.href = "/";
    },
  });
};