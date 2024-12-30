import { Button } from "@/components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import SupplierForm from "./Partials/SupplierForm";

export default function CategoriesCreatePage() {
  const breadcrumbs = [
    {
      title: "Suppliers",
      link: route("suppliers.index"),
    },
    {
      title: "Create",
    },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <Head title="Suppliers" />

      <div className="flex justify-end">
        <Button size="sm" onClick={() => history.back()}>
          <ArrowLeft />
          <span>Go back</span>
        </Button>
      </div>

      <SupplierForm />
    </DashboardLayout>
  );
}
