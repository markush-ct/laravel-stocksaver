import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Category } from "@/types";
import { router } from "@inertiajs/react";
import { useForm } from "laravel-precognition-react-inertia";
import { Loader2Icon, Save } from "lucide-react";
import { FormEventHandler } from "react";

export default function UpdateCategoryForm({
  category,
}: {
  category: Category;
}) {
  const { toast } = useToast();

  const form = useForm("patch", route("categories.update", category.id), {
    name: category.name,
    description: category.description,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    form.submit({
      preserveScroll: true,
      onSuccess: () => {
        toast({
          description: "You have successfully updated the category.",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          description: "There was a problem with your request.",
        });
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <Card>
        <CardHeader>
          <CardTitle>Update Category</CardTitle>
          <CardDescription>
            Fill up the form below to update the category.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-sm space-y-6">
            {/* Name field */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter category name."
                value={form.data.name}
                onChange={(e) => form.setData("name", e.target.value)}
                onBlur={() => form.validate("name")}
                autoFocus
              />
              {form.invalid("name") && (
                <div className="text-red-600 text-sm">{form.errors.name}</div>
              )}
            </div>

            {/* Description field */}
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Enter category description."
                id="description"
                value={form.data.description}
                onChange={(e) => form.setData("description", e.target.value)}
                onBlur={() => form.validate("description")}
              />
              {form.invalid("description") && (
                <div className="text-red-600 text-sm">
                  {form.errors.description}
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={form.processing}>
            {form.processing ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              <Save />
            )}
            <span>{form.processing ? "Updating..." : "Update"}</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
