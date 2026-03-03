import { Badge } from "@/components/ui/badge";

const activities = [
  {
    day: "Monday",
    date: "Feb 24",
    time: "08:00 AM",
    status: "completed",
  },
  {
    day: "Tuesday",
    date: "Feb 25",
    time: "08:15 AM",
    status: "completed",
  },
  {
    day: "Wednesday",
    date: "Feb 26",
    time: "—",
    status: "missed",
  },
  {
    day: "Thursday",
    date: "Feb 27",
    time: "08:05 AM",
    status: "completed",
  },
];

export function RecentActivityCard() {
  return (
    <div className="w-full bg-card border rounded-xl p-5 shadow-sm">
      <h2 className="text-xl font-bold mb-4 text-l-primary">
        <i className="bi bi-clock-history"></i> Recent Activity
      </h2>

      <div className="flex flex-col gap-3">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg border bg-muted/40"
          >
            <div className="flex flex-col">
              <span className="font-semibold">
                {item.day} • {item.date}
              </span>
              <span className="text-sm text-muted-foreground">
                Time: {item.time}
              </span>
            </div>

            <Badge
              className={`capitalize ${
                item.status === "completed"
                  ? "border-green-600 bg-green-50 text-green-700 text-sm"
                  : "border-red-600 bg-red-50 text-red-700 text-sm"
              }`}
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
