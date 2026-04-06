import { mockTransactions } from "@/data/mock-transactions";

// PUT /api/transaction/[id] - Update transaction (Demo mode - disabled)
export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();

        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Transaction update disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// DELETE /api/transaction/[id] - Delete transaction (Demo mode - disabled)
export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Transaction deletion disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
