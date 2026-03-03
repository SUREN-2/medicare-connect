"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { IconUser } from "@tabler/icons-react";
import DashboardTabs from "@/components/dashtabs";

export default function Page() {
  const [activeTab, setActiveTab] = useState("user_dashboard");
  return (
    <div className="">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" onNavigate={setActiveTab} />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col columns-md p-6">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-1 px-4 md:px-4">
                <div className="flex items-center gap-2">
                  <IconUser className="w-6 h-6 text-primary" />

                  <h1 className="text-2xl md:text-3xl font-bold text-l-primary">
                    Suren
                    <span className="text-muted-foreground text-lg font-normal">
                      {" "}
                      medication stats
                    </span>
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-4 py-4 md:gap-6 md:pt-6 md:pb-0">
                <SectionCards />
              </div>

              <div className="flex flex-col px-4 gap-4 py-0 md:gap-6 md:py-0  ">
                <DashboardTabs value={activeTab} onChange={setActiveTab} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
