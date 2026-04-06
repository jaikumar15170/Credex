import { mockBudget, mockBudgetData } from "@/data/mock-budget";
import { mockTransactions } from "@/data/mock-transactions";

// GET /api/budget - Get current budget (Mock data)
export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const accountId = searchParams.get("accountId");

        // Calculate current month expenses from mock data
        const currentDate = new Date();
        const startOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        const endOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );

        const currentExpenses = mockTransactions
            .filter((t) => {
                const date = new Date(t.date);
                return (
                    t.type === "EXPENSE" &&
                    date >= startOfMonth &&
                    date <= endOfMonth &&
                    (!accountId || t.accountId === accountId)
                );
            })
            .reduce((sum, t) => sum + parseFloat(t.amount), 0);

        return Response.json({
            budget: mockBudget,
            currentExpenses,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// PUT /api/budget - Update budget (Demo mode - disabled)
export async function PUT(request) {
    try {
        const { amount } = await request.json();

        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Budget update disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
