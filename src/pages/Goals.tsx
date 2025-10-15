import { Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const goals = [
  { id: 1, name: "Emergency Fund", target: 10000, current: 6500, category: "Safety" },
  { id: 2, name: "Vacation to Japan", target: 5000, current: 2300, category: "Travel" },
  { id: 3, name: "New Laptop", target: 2000, current: 1800, category: "Tech" },
  { id: 4, name: "Car Down Payment", target: 15000, current: 8500, category: "Transport" },
];

const categoryColors: Record<string, string> = {
  Safety: "bg-success/10 text-success border-success/20",
  Travel: "bg-info/10 text-info border-info/20",
  Tech: "bg-primary/10 text-primary border-primary/20",
  Transport: "bg-warning/10 text-warning border-warning/20",
};

export default function Goals() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Savings Goals</h1>
          <p className="text-muted-foreground mt-1">Track your progress towards financial targets</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;

          return (
            <Card key={goal.id} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-foreground mb-2">{goal.name}</CardTitle>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${categoryColors[goal.category]}`}>
                      {goal.category}
                    </span>
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">${goal.current.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-1">of ${goal.target.toLocaleString()} goal</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-primary">{progress.toFixed(0)}%</p>
                      <p className="text-xs text-muted-foreground">${remaining.toLocaleString()} to go</p>
                    </div>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
