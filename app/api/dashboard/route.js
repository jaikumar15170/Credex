import { mockAccounts } from "@/data/mock-accounts";

// GET /api/dashboard - Get user accounts (Mock data)
export async function GET() {
    try {
        // Return mock accounts with transaction count
        const accountsWithCount = mockAccounts.map((account) => ({
            ...account,
            _count: {
                transactions: Math.floor(Math.random() * 20) + 5, // Mock transaction count
            },
        }));

        return Response.json(accountsWithCount);
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

// POST /api/dashboard - Create account (Demo mode - disabled)
export async function POST(request) {
    try {
        const data = await request.json();
        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Account creation disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
