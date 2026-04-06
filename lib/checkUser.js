import { mockUser } from "@/data/mock-accounts";

// Demo mode: Returns mock user instead of checking database
export const checkUser = async () => {
  try {
    // Return mock user for demo/showcase
    return mockUser;
  } catch (error) {
    console.error("Error checking user:", error);
    return null;
  }
};
