import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgressServer } from "./_components/budget-progress-server";
import { DashboardOverviewServer } from "./_components/dashboard-overview-server";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default async function DashboardPage() {
  // Fetch accounts first (usually faster)
  const accounts = await getUserAccounts();
  const defaultAccount = accounts?.find((account) => account.isDefault);

  return (
    <div className="space-y-8">
      {/* Budget Progress - Load in parallel but show with Suspense */}
      <Suspense fallback={<div className="h-32 bg-gray-100 rounded animate-pulse" />}>
        <BudgetProgressServer accountId={defaultAccount?.id} />
      </Suspense>

      {/* Dashboard Overview - Lazy load transactions */}
      <Suspense fallback={<div className="h-64 bg-gray-100 rounded animate-pulse" />}>
        <DashboardOverviewServer accounts={accounts} />
      </Suspense>

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 &&
          accounts?.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </div>
    </div>
  );
}
