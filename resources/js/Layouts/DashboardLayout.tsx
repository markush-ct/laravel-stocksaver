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
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { router } from "@inertiajs/react";
import { Home } from "lucide-react";

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
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((breadcrumb) => (
                <>
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
                </>
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
            <span>Back to home</span>
          </Button>
        </header>
        <main className="p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
