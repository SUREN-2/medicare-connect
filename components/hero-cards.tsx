import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconUsers } from "@tabler/icons-react";

export function HeroCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 sm:pt-0 w-full">
      <div className="w-full md:flex-1 rounded-xl border border-[#ab90bf]/30 bg-white shadow-lg transition-all hover:shadow-xl">
        <div className="p-6">
          <div className="flex items-center mb-4 text-xl font-bold tracking-tight gap-2">
            <span className="text-l-primary">
              <i className="bi bi-calendar text-l-primary"></i>
            </span>
            <h5 className="">Today Status</h5>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border py-3 px-4 shadow-sm bg-purple-100">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div>
                <strong className="block text-muted-foreground text-sm">
                  Daily Medication Time
                </strong>
                <span className="block font-semibold text-lg text-black">
                  8pm
                </span>
              </div>

              <div className="flex items-center justify-center">
                <Badge className="bg-green-50 text-green-700 text-sm">
                  Pending
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full md:flex-1 bg-card border rounded-xl p-4 shadow-sm bg-new-brand-glow">
        <h5 className="p-2 text-xl font-bold tracking-tight">Quick Actions</h5>
        <div className="flex flex-col gap-3 px-2 mt-2">
          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-2"
          >
            <i className="bi bi-calendar"></i>
            View Full Clander
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-2"
          >
            <i className="bi bi-bell"></i>
            Set Reminder
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-start gap-2"
          >
            <i className="bi bi-bell-fill"></i>
            Send Email Notification
          </Button>
        </div>
      </div> */}
    </div>
  );
}
