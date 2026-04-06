"use server";

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  return "http://localhost:3000";
}

function getFetchHeaders() {
  const headers = {
    "Content-Type": "application/json",
  };

  // Add deployment protection bypass token if available
  if (process.env.VERCEL_DEPLOYMENT_PROTECTION_BYPASS_TOKEN) {
    headers["x-vercel-protection-bypass"] = process.env.VERCEL_DEPLOYMENT_PROTECTION_BYPASS_TOKEN;
  }

  return headers;
}

export async function getUserAccounts() {
  try {
    const baseUrl = getBaseUrl();
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
    const baseUrl = getBaseUrl();
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
    const baseUrl = getBaseUrl();
    console.log("[getDashboardData] Base URL:", baseUrl);
    console.log("[getDashboardData] Fetching from", `${baseUrl}/api/dashboard/data`);
    const response = await fetch(`${baseUrl}/api/dashboard/data`, {
      cache: 'no-store'
    });

    console.log("[getDashboardData] Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[getDashboardData] API error response:", errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("[getDashboardData] Successfully fetched data");
    return data;
  } catch (error) {
    console.error("[getDashboardData] Error:", error);
    throw error;
  }
}
