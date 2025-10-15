import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentExpenses = [
  { id: 1, name: "Grocery Shopping", amount: 120.50, category: "Food", date: "Today" },
  { id: 2, name: "Netflix Subscription", amount: 15.99, category: "Entertainment", date: "Yesterday" },
  { id: 3, name: "Gas Station", amount: 45.00, category: "Transport", date: "2 days ago" },
  { id: 4, name: "Restaurant", amount: 68.30, category: "Food", date: "3 days ago" },
];

const categoryColors: Record<string, string> = {
  Food: "bg-warning/10 text-warning border-warning/20",
  Entertainment: "bg-info/10 text-info border-info/20",
  Transport: "bg-primary/10 text-primary border-primary/20",
};

export function RecentExpenses() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentExpenses.map((expense) => (
            <div key={expense.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex-1">
                <p className="font-medium text-foreground">{expense.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className={categoryColors[expense.category]}>
                    {expense.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{expense.date}</span>
                </div>
              </div>
              <p className="font-semibold text-foreground">-${expense.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
