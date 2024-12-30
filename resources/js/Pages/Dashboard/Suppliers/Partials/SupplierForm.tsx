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
import { PhoneInput } from "@/components/ui/phone-input";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "laravel-precognition-react-inertia";
import { Loader2Icon, Save } from "lucide-react";
import { FormEventHandler } from "react";

export default function SupplierForm() {
  const { toast } = useToast();

  const form = useForm("post", route("suppliers.store"), {
    name: "",
    contact_number: "",
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    form.submit({
      preserveScroll: true,
      onSuccess: () => {
        form.reset();

        toast({
          description: "You have successfully created a supplier.",
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
          <CardTitle>Create Supplier</CardTitle>
          <CardDescription>
            Fill up the form below to create a supplier.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-sm space-y-6">
            {/* Name field */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name / Company</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter name or company."
                value={form.data.name}
                onChange={(e) => form.setData("name", e.target.value)}
                onBlur={() => form.validate("name")}
                autoFocus
              />
              {form.invalid("name") && (
                <div className="text-red-600 text-sm">{form.errors.name}</div>
              )}
            </div>

            {/* Contact number field */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact_number">Contact Number</Label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="PH"
                id="contact_number"
                value={form.data.contact_number}
                onChange={(value) => form.setData("contact_number", value)}
                onBlur={() => form.validate("contact_number")}
              />
              {form.invalid("contact_number") && (
                <div className="text-red-600 text-sm">
                  {form.errors.contact_number}
                </div>
              )}
            </div>

            {/* Email address field */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter contact number."
                value={form.data.email}
                onChange={(e) => form.setData("email", e.target.value)}
                onBlur={() => form.validate("email")}
              />
              {form.invalid("email") && (
                <div className="text-red-600 text-sm">{form.errors.email}</div>
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
            <span>{form.processing ? "Saving..." : "Save"}</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
