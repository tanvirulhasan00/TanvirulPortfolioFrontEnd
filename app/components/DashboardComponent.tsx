import React, { type ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { SiteHeader } from "./site-header";

interface DashboardProps {
  children?: ReactNode;
  userId: string;
}

const DashboardComponent: React.FC<DashboardProps> = ({ children, userId }) => {
  console.log("m", userId);
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardComponent;
