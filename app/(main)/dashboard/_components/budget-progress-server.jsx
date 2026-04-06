import { getCurrentBudget } from "@/actions/budget";
import { BudgetProgress } from "./budget-progress";

export async function BudgetProgressServer({ accountId }) {
    if (!accountId) {
        return null;
    }

    try {
        const budgetData = await getCurrentBudget(accountId);

        return (
            <BudgetProgress
                initialBudget={budgetData?.budget}
                currentExpenses={budgetData?.currentExpenses || 0}
            />
        );
    } catch (error) {
        console.error("Error loading budget:", error);
        return <div className="text-sm text-red-500">Failed to load budget</div>;
    }
}
