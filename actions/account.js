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

export async function getAccountWithTransactions(accountId) {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/account/${accountId}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to fetch account");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function bulkDeleteTransactions(transactionIds) {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/account/transactions`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionIds }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to delete transactions");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateDefaultAccount(accountId) {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/account/${accountId}`, {
      method: "PUT",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Failed to update default account");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
