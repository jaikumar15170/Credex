import { mockTransactions } from "@/data/mock-transactions";

// POST /api/transaction - Create transaction (Demo mode - disabled)
export async function POST(request) {
    try {
        const data = await request.json();
        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Transaction creation disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// GET /api/transaction - Get transactions (Mock data)
export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const transactionId = searchParams.get("id");

        if (transactionId) {
            // Get specific transaction
            const transaction = mockTransactions.find((t) => t.id === transactionId);

            if (!transaction) {
                return Response.json(
                    { error: "Transaction not found" },
                    { status: 404 }
                );
            }

            return Response.json(transaction);
        } else {
            // Get all transactions
            return Response.json({
                success: true,
                data: mockTransactions,
            });
        }
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
