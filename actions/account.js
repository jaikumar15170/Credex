"use server";

export async function getAccountWithTransactions(accountId) {
  try {
    const response = await fetch(`/api/account/${accountId}`);
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
    const response = await fetch(`/api/account/transactions`, {
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
    const response = await fetch(`/api/account/${accountId}`, {
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
