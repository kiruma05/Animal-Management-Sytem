import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "/api/v1/projects/1/forms/ng'ombe_DATA.svc/Submissions";

export const fetchOdkData = async () => {
  const response = await axios.get(API_URL, {
    auth: {
      username: import.meta.env.VITE_ODK_USERNAME,
      password: import.meta.env.VITE_ODK_PASSWORD,
    },
  });

  console.log("Fetched Data:", response.data); // ✅ Debugging step
  return response.data.value || []; // Ensure we always return an array
};

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchOdkData,
  });
}
