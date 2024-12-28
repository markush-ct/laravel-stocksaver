import {
  Activity,
  Blocks,
  Box,
  ChartNoAxesCombined,
  Gauge,
  Grid2X2,
  ListChecks,
  Percent,
  Settings,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarLinks from "./sidebar-links";
import AppLogo from "./app-logo";
import { SidebarUser } from "./sidebar-user";

export function AppSidebar() {
  const data = {
    user: {
      name: "Juan Dela Cruz",
      email: "juandc@example.com",
      avatar: "https://i.pravatar.cc/150?img=58",
    },
    links: [
      {
        title: "Dashboard",
        namedRoute: "dashboard.index",
        icon: Gauge,
      },
      {
        title: "Products",
        namedRoute: "products.index",
        icon: Box,
      },
      {
        title: "Inventory",
        namedRoute: "inventory.index",
        icon: ListChecks,
      },
      {
        title: "Categories",
        namedRoute: "categories.index",
        icon: Grid2X2,
      },
      {
        title: "Suppliers",
        namedRoute: "suppliers.index",
        icon: Blocks,
      },
      {
        title: "Discounts",
        namedRoute: "discounts.index",
        icon: Percent,
      },
      {
        title: "Monitoring",
        namedRoute: "monitoring.index",
        icon: Activity,
      },
      {
        title: "Reports",
        namedRoute: "reports.index",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Staff",
        namedRoute: "staff.index",
        icon: User,
      },
      {
        title: "Settings",
        namedRoute: "settings.index",
        icon: Settings,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinks items={data.links} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
