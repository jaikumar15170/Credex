import { getCurrentBudget } from "@/actions/budget";
import { BudgetProgress } from "./budget-progress";

export async function BudgetProgressServer({ accountId }) {
    if (!accountId) {
        return null;
    }

    const budgetData = await getCurrentBudget(accountId);

    return (
        <BudgetProgress
            initialBudget={budgetData?.budget}
            currentExpenses={budgetData?.currentExpenses || 0}
        />
    );
}
