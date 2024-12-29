import { useToast } from "@/hooks/use-toast";
import { router } from "@inertiajs/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Edit, Trash } from "lucide-react";
import {
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { Category } from "@/types";

interface CategoryTableRowActionsProps<TData> {
  row: Row<TData>;
}

export default function CategoryTableRowActions<TData extends Category>({
  row,
}: CategoryTableRowActionsProps<TData>) {
  const { toast } = useToast();
  const rowData = row.original;

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Eye />
            View
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.get(route("categories.edit", rowData.id))}
          >
            <Edit />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem>
              <Trash />
              Delete
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <span className="font-bold italic text-white">
              "{rowData.name}"
            </span>{" "}
            and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              router.delete(route("categories.destroy", rowData.id), {
                preserveScroll: true,
                onSuccess: () => {
                  toast({
                    description: "You have successfully deleted a category.",
                  });
                },
              })
            }
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
