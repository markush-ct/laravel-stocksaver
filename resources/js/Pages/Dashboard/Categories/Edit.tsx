import { Button } from "@/components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Category } from "@/types";
import { Head } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import UpdateCategoryForm from "./Partials/UpdateCategoryForm";

export default function CategoriesEditPage({
  category,
}: {
  category: Category;
}) {
  const breadcrumbs = [
    {
      title: "Categories",
      link: route("categories.index"),
    },
    {
      title: category.name,
    },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <Head title="Categories" />

      <div className="flex justify-end">
        <Button size="sm" onClick={() => history.back()}>
          <ArrowLeft />
          <span>Go back</span>
        </Button>
      </div>

      <UpdateCategoryForm category={category} />
    </DashboardLayout>
  );
}
