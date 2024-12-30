import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { Supplier } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import SupplierTableRowActions from "./SupplierTableRowActions";

export const columns: ColumnDef<Supplier>[] = [
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
    enableHiding: false,
  },
  {
    id: "contact number",
    accessorKey: "contact_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact Number" />
    ),
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <SupplierTableRowActions row={row} />,
    enableHiding: false,
  },
];
