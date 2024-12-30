import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, router } from "@inertiajs/react";
import { Plus } from "lucide-react";
import { columns } from "./Partials/SupplierTableColumns";
import { PaginatedData, Supplier } from "@/types";

export default function CategoriesPage({
  suppliers,
}: {
  suppliers: PaginatedData<Supplier>;
}) {
  const breadcrumbs = [
    {
      title: "Suppliers",
    },
  ];

  const suppliersPagination = {
    currentPage: suppliers.meta.current_page,
    total: suppliers.meta.total,
    perPage: suppliers.meta.per_page,
  };

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <Head title="Categories" />

      <div className="flex justify-end">
        <Button size="sm" onClick={() => router.get(route("suppliers.create"))}>
          <Plus />
          <span>Create supplier</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Suppliers List</CardTitle>
          <CardDescription>Here's a list of suppliers.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={suppliers.data}
            serverPagination={suppliersPagination}
            routeForPagination="suppliers.index"
          />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
