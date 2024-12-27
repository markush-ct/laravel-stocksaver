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
        url: "#",
        icon: Gauge,
      },
      {
        title: "Products",
        url: "#",
        icon: Box,
      },
      {
        title: "Inventory",
        url: "#",
        icon: ListChecks,
      },
      {
        title: "Categories",
        url: "#",
        icon: Grid2X2,
      },
      {
        title: "Suppliers",
        url: "#",
        icon: Blocks,
      },
      {
        title: "Discounts",
        url: "#",
        icon: Percent,
      },
      {
        title: "Monitoring",
        url: "#",
        icon: Activity,
      },
      {
        title: "Reports",
        url: "#",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Staff",
        url: "#",
        icon: User,
      },
      {
        title: "Settings",
        url: "#",
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
