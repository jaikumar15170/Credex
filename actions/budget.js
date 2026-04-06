"use server";

export async function getCurrentBudget(accountId) {
  try {
    let url = `${process.env.NEXT_PUBLIC_APP_URL}/api/budget`;
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/budget`, {
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
