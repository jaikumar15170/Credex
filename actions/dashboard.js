"use server";

export async function getUserAccounts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/dashboard`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch accounts");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createAccount(data) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/dashboard`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to create account");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDashboardData(limit = 20) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/dashboard/data`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch dashboard data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
