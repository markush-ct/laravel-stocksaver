import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CategoryForm() {
  return (
    <div className="max-w-sm space-y-6">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Enter category name." />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="description">Description</Label>
        <Textarea placeholder="Enter category description." id="description" />
      </div>
    </div>
  );
}
