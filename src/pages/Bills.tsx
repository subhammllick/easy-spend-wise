import { Plus, Bell, Calendar, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bills = [
  { id: 1, name: "Electricity Bill", amount: 85.00, dueDate: "2024-01-20", status: "upcoming", category: "Utilities" },
  { id: 2, name: "Internet & Cable", amount: 120.00, dueDate: "2024-01-18", status: "urgent", category: "Utilities" },
  { id: 3, name: "Credit Card Payment", amount: 450.00, dueDate: "2024-01-25", status: "upcoming", category: "Finance" },
  { id: 4, name: "Car Insurance", amount: 180.00, dueDate: "2024-02-01", status: "scheduled", category: "Insurance" },
  { id: 5, name: "Rent", amount: 1500.00, dueDate: "2024-02-01", status: "scheduled", category: "Housing" },
];

const statusConfig = {
  urgent: { color: "bg-destructive/10 text-destructive border-destructive/20", label: "Due soon" },
  upcoming: { color: "bg-warning/10 text-warning border-warning/20", label: "Upcoming" },
  scheduled: { color: "bg-success/10 text-success border-success/20", label: "Scheduled" },
};

const categoryColors: Record<string, string> = {
  Utilities: "bg-info/10 text-info border-info/20",
  Finance: "bg-primary/10 text-primary border-primary/20",
  Insurance: "bg-warning/10 text-warning border-warning/20",
  Housing: "bg-success/10 text-success border-success/20",
};

export default function Bills() {
  const totalUpcoming = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const urgentBills = bills.filter((bill) => bill.status === "urgent").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bill Reminders</h1>
          <p className="text-muted-foreground mt-1">Stay on top of your payment schedule</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4 mr-2" />
          Add Bill
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Upcoming</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">${totalUpcoming.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">{bills.length} bills scheduled</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Urgent Bills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-destructive">{urgentBills}</p>
              {urgentBills > 0 && <AlertTriangle className="h-5 w-5 text-destructive" />}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Due within 3 days</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Reminders Set</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold text-success">{bills.length}</p>
              <Bell className="h-5 w-5 text-success" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">All bills tracked</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Upcoming Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bills.map((bill) => (
              <div
                key={bill.id}
                className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-medium text-foreground">{bill.name}</p>
                      <Badge variant="outline" className={statusConfig[bill.status as keyof typeof statusConfig].color}>
                        {statusConfig[bill.status as keyof typeof statusConfig].label}
                      </Badge>
                    </div>
                    <Badge variant="outline" className={categoryColors[bill.category]}>
                      {bill.category}
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-foreground">${bill.amount.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Due: {bill.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
