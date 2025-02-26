import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define API URL
const API_URL = "/api/v1/projects/1/forms/ng'ombe_DATA.svc/Submissions";

// Fetch ODK Data
export const fetchOdkData = async () => {
  try {
    // Use environment variables with fallback values
    const username = import.meta.env.VITE_ODK_USERNAME || "fredricknyombi42@gmail.com";
    const password = import.meta.env.VITE_ODK_PASSWORD || "nyombi1997";

    const response = await axios.get(API_URL, {
      auth: {
        username, // Automatically use credentials
        password,
      },
    });

    console.log("Fetched Data:", response.data); // ✅ Check API response
    return response.data.value; // Ensure you're returning the correct data structure
  } catch (error) {
    console.error("Error fetching ODK data:", error);
    throw new Error("Failed to fetch ODK data");
  }
};

// React Query Hook
export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchOdkData,
  });
}
