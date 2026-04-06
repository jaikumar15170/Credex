export const mockBudget = {
    id: "budget-1",
    amount: "2500.00",
    lastAlertSent: null,
    userId: "user-1",
    createdAt: "2024-02-01T08:00:00Z",
    updatedAt: "2024-04-06T10:30:00Z",
};

export const mockBudgetData = {
    totalLimit: "2500.00",
    totalSpent: "1651.48",
    percentageUsed: "66.06",
    remaining: "848.52",
    categories: [
        {
            name: "Food & Dining",
            spent: "111.49",
            limit: "500.00",
            percentage: "22.30",
        },
        {
            name: "Transportation",
            spent: "150.00",
            limit: "400.00",
            percentage: "37.50",
        },
        {
            name: "Housing",
            spent: "1200.00",
            limit: "1200.00",
            percentage: "100",
        },
        {
            name: "Entertainment",
            spent: "89.99",
            limit: "300.00",
            percentage: "30.00",
        },
    ],
};
