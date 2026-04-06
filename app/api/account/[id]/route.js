import { mockAccounts } from "@/data/mock-accounts";
import { mockTransactions } from "@/data/mock-transactions";

// GET /api/account/[id] - Get account with transactions (Mock data)
export async function GET(request, { params }) {
    try {
        const { id } = params;

        const account = mockAccounts.find((a) => a.id === id);

        if (!account) {
            return Response.json({ error: "Account not found" }, { status: 404 });
        }

        const transactions = mockTransactions
            .filter((t) => t.accountId === id)
            .sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );

        return Response.json({
            ...account,
            transactions,
            _count: {
                transactions: transactions.length,
            },
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// DELETE /api/account/[id] - Delete account (Demo mode - disabled)
export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Account deletion disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// PUT /api/account/[id] - Update account (Demo mode - disabled)
export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();

        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Account update disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
transaction.type === "EXPENSE"
    ? transaction.amount
    : -transaction.amount;
acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
return acc;
        }, { });

await db.$transaction(async (tx) => {
    await tx.transaction.deleteMany({
        where: {
            id: { in: transactionIds },
            userId: user.id,
        },
    });

    for (const [accountId, balanceChange] of Object.entries(
        accountBalanceChanges
    )) {
        await tx.account.update({
            where: { id: accountId },
            data: {
                balance: {
                    increment: balanceChange,
                },
            },
        });
    }
});

return Response.json({ success: true });
    } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
}
}
