import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const expenses = [
  { id: 1, name: "Grocery Shopping", amount: 120.50, category: "Food", date: "2024-01-15" },
  { id: 2, name: "Netflix Subscription", amount: 15.99, category: "Entertainment", date: "2024-01-14" },
  { id: 3, name: "Gas Station", amount: 45.00, category: "Transport", date: "2024-01-13" },
  { id: 4, name: "Restaurant", amount: 68.30, category: "Food", date: "2024-01-12" },
  { id: 5, name: "Gym Membership", amount: 50.00, category: "Health", date: "2024-01-11" },
  { id: 6, name: "Amazon Purchase", amount: 89.99, category: "Shopping", date: "2024-01-10" },
];

const categoryColors: Record<string, string> = {
  Food: "bg-warning/10 text-warning border-warning/20",
  Entertainment: "bg-info/10 text-info border-info/20",
  Transport: "bg-primary/10 text-primary border-primary/20",
  Health: "bg-success/10 text-success border-success/20",
  Shopping: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function Expenses() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Expenses</h1>
          <p className="text-muted-foreground mt-1">Track and categorize your spending</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4 mr-2" />
          Add Expense
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">All Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{expense.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className={categoryColors[expense.category]}>
                      {expense.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{expense.date}</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground">-${expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
