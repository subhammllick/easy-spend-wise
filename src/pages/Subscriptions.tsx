import { Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const subscriptions = [
  { id: 1, name: "Netflix", amount: 15.99, renewalDate: "2024-02-01", category: "Entertainment", daysUntilRenewal: 15 },
  { id: 2, name: "Spotify", amount: 9.99, renewalDate: "2024-01-25", category: "Entertainment", daysUntilRenewal: 9 },
  { id: 3, name: "Adobe Creative Cloud", amount: 54.99, renewalDate: "2024-01-20", category: "Software", daysUntilRenewal: 4 },
  { id: 4, name: "Amazon Prime", amount: 14.99, renewalDate: "2024-02-10", category: "Shopping", daysUntilRenewal: 24 },
  { id: 5, name: "Gym Membership", amount: 50.00, renewalDate: "2024-02-15", category: "Health", daysUntilRenewal: 29 },
];

const categoryColors: Record<string, string> = {
  Entertainment: "bg-info/10 text-info border-info/20",
  Software: "bg-primary/10 text-primary border-primary/20",
  Shopping: "bg-warning/10 text-warning border-warning/20",
  Health: "bg-success/10 text-success border-success/20",
};

export default function Subscriptions() {
  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground mt-1">Manage your recurring payments</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4 mr-2" />
          Add Subscription
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">${totalMonthly.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">{subscriptions.length} active subscriptions</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Renewals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">3</p>
            <p className="text-xs text-muted-foreground mt-1">Within next 10 days</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">Active Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{subscription.name}</p>
                      {subscription.daysUntilRenewal <= 7 && (
                        <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Renewing soon
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline" className={`${categoryColors[subscription.category]} mt-2`}>
                      {subscription.category}
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-foreground">${subscription.amount.toFixed(2)}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Next renewal: {subscription.renewalDate}</span>
                    <span>{subscription.daysUntilRenewal} days left</span>
                  </div>
                  <Progress value={(30 - subscription.daysUntilRenewal) / 30 * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
