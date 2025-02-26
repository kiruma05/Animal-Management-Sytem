import axios from "axios";

const API_URL = "/api/v1/projects/1/forms/ng'ombe_DATA.svc/Submissions";
const USERNAME = import.meta.env.VITE_ODK_USERNAME;
const PASSWORD = import.meta.env.VITE_ODK_PASSWORD;

export const fetchOdkData = async () => {
  try {
    const response = await axios.get(API_URL, {
      auth: {
        username: USERNAME,
        password: PASSWORD,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching ODK data:", error);
    throw error;
  }
};
