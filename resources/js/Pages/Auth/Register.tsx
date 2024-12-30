import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Loader2Icon } from "lucide-react";
import { FormEventHandler } from "react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your details below to create an account
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              required
            />
            {errors.name && (
              <div className="text-red-600 text-sm">{errors.name}</div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="name@example.com"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
            />
            {errors.email && (
              <div className="text-red-600 text-sm">{errors.email}</div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              required
            />
            {errors.password && (
              <div className="text-red-600 text-sm">{errors.password}</div>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              id="confirm_password"
              type="password"
              name="confirm_password"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              required
            />
            {errors.password_confirmation && (
              <div className="text-red-600 text-sm">
                {errors.password_confirmation}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={processing}>
            {processing && <Loader2Icon className="animate-spin" />}
            <span>{processing ? "Registering..." : "Register"}</span>
          </Button>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button variant="outline" className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              className="fill-white"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            Google
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href={route("login")} className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
