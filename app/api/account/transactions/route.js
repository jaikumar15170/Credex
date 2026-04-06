// DELETE /api/account/transactions - Bulk delete transactions (Demo mode - disabled)
export async function DELETE(request) {
    try {
        const { transactionIds } = await request.json();

        // Demo mode - just return success message
        return Response.json({
            success: true,
            message: "Demo mode: Bulk delete disabled. This is a frontend-only showcase.",
            data: null,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}

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
