import { mockUser } from "@/data/mock-accounts";

// GET /api/auth/init - Initialize user (Mock data)
export async function GET() {
    try {
        // Demo mode - return mock user
        return Response.json({
            success: true,
            message: "User initialized (demo mode)",
            user: {
                id: mockUser.id,
                email: mockUser.email,
                name: mockUser.name,
            },
        });
    } catch (error) {
        console.error("Error in auth init:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
