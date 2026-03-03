import { Progress } from "@/components/ui/progress";

export function MedicationProgressCard() {
  const progress = 56;

  const stats = {
    taken: 14,
    missed: 3,
    remaining: 8,
  };

  return (
    <div className="flex flex-col rounded-xl border bg-card p-6 mx-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Medication Progress</h3>

      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">Monthly Adherence</span>
        <span className="text-sm font-semibold text-primary">{progress}%</span>
      </div>

      <Progress value={progress} className="h-3 mb-4 [&>div]:bg-purple-500" />

      <div className="grid grid-cols-3 gap-3 text-center mt-2">
        <div className="rounded-lg bg-green-50 p-3">
          <p className="text-xs text-muted-foreground">Taken</p>
          <p className="text-lg font-bold text-green-700">{stats.taken}</p>
        </div>

        <div className="rounded-lg bg-red-50 p-3">
          <p className="text-xs text-muted-foreground">Missed</p>
          <p className="text-lg font-bold text-red-600">{stats.missed}</p>
        </div>

        <div className="rounded-lg bg-yellow-50 p-3">
          <p className="text-xs text-muted-foreground">Remaining</p>
          <p className="text-lg font-bold text-yellow-600">{stats.remaining}</p>
        </div>
      </div>
    </div>
  );
}
