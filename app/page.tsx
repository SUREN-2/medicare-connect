import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex flex-col min-h-screen">
            {/* 🔵 HERO SECTION */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto w-full">
              {/* Left */}
              <div className="flex flex-col gap-4 max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">
                  Manage Your Medicines Easily 💊
                </h1>
                <p className="text-muted-foreground">
                  Track medications, set reminders, and manage your family’s
                  health in one place.
                </p>

                <div className="flex gap-3">
                  <Button size="lg">Get Started</Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right */}
              <div className="mt-8 md:mt-0">
                <div className="w-[280px] h-[500px] bg-muted rounded-2xl shadow-xl flex items-center justify-center">
                  App Preview
                </div>
              </div>
            </section>

            {/* 🟢 FEATURES SECTION */}
            <section className="px-6 py-12 bg-muted/40">
              <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Medication Reminder",
                    desc: "Never miss a dose with smart alerts",
                  },
                  {
                    title: "Health Records",
                    desc: "Store prescriptions & reports safely",
                  },
                  {
                    title: "Family Profiles",
                    desc: "Manage health for your loved ones",
                  },
                ].map((item, i) => (
                  <Card
                    key={i}
                    className="rounded-2xl shadow-md hover:shadow-lg transition"
                  >
                    <CardContent className="p-6 flex flex-col gap-3">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 🔵 DASHBOARD PREVIEW */}
            <section className="px-6 py-12 max-w-6xl mx-auto w-full">
              <h2 className="text-2xl font-bold mb-6">Your Dashboard</h2>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="rounded-2xl">
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground">
                      Today's Medicines
                    </p>
                    <h3 className="text-xl font-semibold mt-2">3 Pending</h3>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground">
                      Next Reminder
                    </p>
                    <h3 className="text-xl font-semibold mt-2">2:30 PM</h3>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardContent className="p-5">
                    <p className="text-sm text-muted-foreground">
                      Family Members
                    </p>
                    <h3 className="text-xl font-semibold mt-2">4 Profiles</h3>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* 🟣 CTA SECTION */}
            <section className="px-6 py-12 bg-primary text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Take Control of Your Health Today
              </h2>
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
