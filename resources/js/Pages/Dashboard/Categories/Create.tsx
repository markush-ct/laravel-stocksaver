import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, router } from "@inertiajs/react";
import { ArrowLeft, Save } from "lucide-react";
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

      <Card>
        <CardHeader>
          <CardTitle>Create Category</CardTitle>
          <CardDescription>
            Fill up the form below to create category.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CategoryForm />
        </CardContent>
        <CardFooter>
          <Button>
            <Save />
            <span>Save</span>
          </Button>
        </CardFooter>
      </Card>
    </DashboardLayout>
  );
}
