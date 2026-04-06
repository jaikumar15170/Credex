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

export async function getCurrentBudget(accountId) {
  try {
    const baseUrl = getBaseUrl();
    let url = `${baseUrl}/api/budget`;
    if (accountId) {
      url += `?accountId=${accountId}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch budget");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching budget:", error);
    throw error;
  }
}

export async function updateBudget(amount) {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/budget`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update budget");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating budget:", error);
    throw error;
  }
}
