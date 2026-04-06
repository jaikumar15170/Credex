import { mockTransactions } from "@/data/mock-transactions";
import { mockAccounts } from "@/data/mock-accounts";

// GET /api/dashboard/data - Get dashboard data (Mock data)
export async function GET() {
    try {
        // Calculate totals from mock data
        let totalBalance = 0;
        let totalIncome = 0;
        let totalExpense = 0;

        mockAccounts.forEach((account) => {
            totalBalance += parseFloat(account.balance);
        });

        mockTransactions.forEach((transaction) => {
            if (transaction.type === "INCOME") {
                totalIncome += parseFloat(transaction.amount);
            } else if (transaction.type === "EXPENSE") {
                totalExpense += parseFloat(transaction.amount);
            }
        });

        return Response.json({
            transactions: mockTransactions,
            accounts: mockAccounts,
            totalBalance,
            totalIncome,
            totalExpense,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
