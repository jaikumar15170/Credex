import { getDashboardData } from "@/actions/dashboard";
import { DashboardOverview } from "./transaction-overview";

export async function DashboardOverviewServer({ accounts }) {
    try {
        const data = await getDashboardData(30); // Load 30 recent transactions
        const transactions = data?.transactions || [];

        return (
            <DashboardOverview
                accounts={accounts}
                transactions={transactions}
            />
        );
    } catch (error) {
        console.error("Error loading dashboard overview:", error);
        return (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-sm text-red-800">
                    Failed to load transactions: {error?.message || "Unknown error"}
                </p>
            </div>
        );
    }
}
