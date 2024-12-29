import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { router } from "@inertiajs/react";
import { Home } from "lucide-react";
import Cookies from "js-cookie";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function DashboardLayout({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs: {
    title: string;
    link?: string;
  }[];
}) {
  const sidebarDefaultOpen = Cookies.get("sidebar:state") === "true";

  return (
    <SidebarProvider defaultOpen={sidebarDefaultOpen}>
      <AppSidebar />

      <div className="px-4 py-2 pt-0 w-full overflow-x-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((breadcrumb) => (
                <React.Fragment key={breadcrumb.title}>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    {breadcrumb.link ? (
                      <BreadcrumbLink href={breadcrumb.link}>
                        {breadcrumb.title}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <Button
            className="ml-auto"
            size="sm"
            variant="ghost"
            onClick={() => router.get("/")}
          >
            <Home />
            <span className="md:block hidden">Back to home</span>
          </Button>
        </header>

        <main className="space-y-4">{children}</main>

        <Toaster />
      </div>
    </SidebarProvider>
  );
}
