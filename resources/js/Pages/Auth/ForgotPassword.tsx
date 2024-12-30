import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { Loader2Icon } from "lucide-react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      <form onSubmit={submit} className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Forgot your password?</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Just let us know your email address and we will email you a password
            reset link.
          </p>
        </div>

        {status && (
          <div className="text-sm font-medium text-green-600 text-center">
            {status}
          </div>
        )}

        <div className="grid gap-2">
          <Input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            required
            autoFocus
          />
          {errors.email && (
            <div className="text-red-600 text-sm">{errors.email}</div>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={processing}>
          {processing && <Loader2Icon className="animate-spin" />}
          <span>{processing ? "Sending..." : "Reset password"}</span>
        </Button>
      </form>
    </GuestLayout>
  );
}
