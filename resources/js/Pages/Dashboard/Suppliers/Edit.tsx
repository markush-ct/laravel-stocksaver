import { Button } from "@/components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Supplier } from "@/types";
import { Head } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import UpdateSupplierForm from "./Partials/UpdateSupplierForm";

export default function SuppliersEditPage({
  supplier,
}: {
  supplier: Supplier;
}) {
  const breadcrumbs = [
    {
      title: "Suppliers",
      link: route("suppliers.index"),
    },
    {
      title: supplier.name,
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

      <UpdateSupplierForm supplier={supplier} />
    </DashboardLayout>
  );
}
