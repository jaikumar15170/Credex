import { getDashboardData } from "@/actions/dashboard";
import { DashboardOverview } from "./transaction-overview";

export async function DashboardOverviewServer({ accounts }) {
    const data = await getDashboardData(30); // Load 30 recent transactions
    const transactions = data?.transactions || [];

    return (
        <DashboardOverview
            accounts={accounts}
            transactions={transactions}
        />
    );
}
