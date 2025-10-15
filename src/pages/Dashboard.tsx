import { Wallet, TrendingDown, TrendingUp, CreditCard } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { RecentExpenses } from "@/components/dashboard/RecentExpenses";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your financial overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Balance"
          value="$12,450"
          change="+7.2% from last month"
          trend="up"
          icon={Wallet}
        />
        <MetricCard
          title="Total Expenses"
          value="$9,300"
          change="+4.6% from last month"
          trend="down"
          icon={TrendingDown}
        />
        <MetricCard
          title="Total Income"
          value="$15,750"
          change="+12.3% from last month"
          trend="up"
          icon={TrendingUp}
        />
        <MetricCard
          title="Active Subscriptions"
          value="12"
          change="3 expiring soon"
          trend="neutral"
          icon={CreditCard}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ExpenseChart />
        <RecentExpenses />
      </div>
    </div>
  );
}
