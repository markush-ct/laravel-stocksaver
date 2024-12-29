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
import { columns } from "./Partials/CategoryTableColumns";
import { Category, PaginatedData } from "@/types";

export default function CategoriesPage({
  categories,
}: {
  categories: PaginatedData<Category>;
}) {
  const breadcrumbs = [
    {
      title: "Categories",
    },
  ];

  const categoriesPagination = {
    currentPage: categories.meta.current_page,
    total: categories.meta.total,
    perPage: categories.meta.per_page,
  };

  console.log(categories);

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <Head title="Categories" />

      <div className="flex justify-end">
        <Button
          size="sm"
          onClick={() => router.get(route("categories.create"))}
        >
          <Plus />
          <span>Create category</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Categories List</CardTitle>
          <CardDescription>Here's a list of categories.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={categories.data}
            serverPagination={categoriesPagination}
          />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
