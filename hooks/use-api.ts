// import { useAuth } from "@/context/AuthContext";
// import { api } from "@/lib/api";

// export const useApi = () => {
//   const { accessToken } = useAuth();

//   const request = async (config: any) => {
//     return api({
//       ...config,
//       headers: {
//         ...config.headers,
//         Authorization: accessToken
//           ? `Bearer ${accessToken}`
//           : undefined,
//       },
//     });
//   };

//   return { request };
// };