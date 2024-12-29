import { Button } from "@/components/ui/button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, router } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import CategoryForm from "./Partials/CategoryForm";

export default function CategoriesCreatePage() {
  const breadcrumbs = [
    {
      title: "Categories",
      link: route("categories.index"),
    },
    {
      title: "Create",
    },
  ];

  return (
    <DashboardLayout breadcrumbs={breadcrumbs}>
      <Head title="Categories" />

      <div className="flex justify-end">
        <Button size="sm" onClick={() => router.get(route("categories.index"))}>
          <ArrowLeft />
          <span>Go back</span>
        </Button>
      </div>

      <CategoryForm />
    </DashboardLayout>
  );
}
