"use client";


import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";


export const usePatientLogs = () => {
  const { accessToken } = useAuth();
 


  return useQuery({
    queryKey: ["patient-logs"],
    queryFn: async () => {
      const res = await api.get(`/patient/logs`);
      return res.data;
    },
    enabled: !!accessToken, 
  });
};


export const usePatientStats = () => {
  const { accessToken } = useAuth();

  return useQuery({
    queryKey: ["patient-stats"],
    queryFn: async () => {
      const res = await api.get("/patient/stats");
      return res.data;
    },
    enabled: !!accessToken, 
  });
};


export const usePatientWeekStats = () => {
  const { accessToken } = useAuth();

  return useQuery({
    queryKey: ["patientWeek-stats"],
    queryFn: async () => {
      const res = await api.get("/patient/week_stats");
      return res.data;
    },
    enabled: !!accessToken, 
  });
};