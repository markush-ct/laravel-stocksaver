import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import CategoryTableRowActions from "@/Pages/Dashboard/Categories/Partials/CategoryTableRowActions";
import { Category } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Category>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] truncate">{row.getValue("name")}</div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="max-w-[400px] truncate">
          {row.getValue("description")}
        </div>
      );
    },
  },
  {
    id: "created at",
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <CategoryTableRowActions row={row} />,
    enableHiding: false,
  },
];
