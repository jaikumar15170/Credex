export const mockAccounts = [
    {
        id: "account-1",
        name: "Main Checking",
        type: "CURRENT",
        balance: "15000.50",
        isDefault: true,
        userId: "user-1",
        createdAt: "2024-01-15T08:00:00Z",
        updatedAt: "2024-04-06T10:30:00Z",
    },
    {
        id: "account-2",
        name: "Savings Account",
        type: "SAVINGS",
        balance: "45230.75",
        isDefault: false,
        userId: "user-1",
        createdAt: "2024-02-20T08:00:00Z",
        updatedAt: "2024-04-06T09:15:00Z",
    },
    {
        id: "account-3",
        name: "Business",
        type: "CURRENT",
        balance: "8920.25",
        isDefault: false,
        userId: "user-1",
        createdAt: "2024-03-10T08:00:00Z",
        updatedAt: "2024-04-05T15:45:00Z",
    },
];

export const mockUser = {
    id: "user-1",
    email: "demo@credex.com",
    name: "Jai Kumar Mallah",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jai",
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-04-06T10:30:00Z",
};
