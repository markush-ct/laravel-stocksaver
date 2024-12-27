import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function DashboardPage() {
  const breadcrumbs = [
    {
      title: "Overview",
    },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <Head title="Overview" />

      <div>dashboard page</div>
    </DashboardLayout>
  );
}
