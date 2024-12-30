import Checkbox from "@/components/Checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Loader2Icon } from 'lucide-react';

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Login" />

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
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

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {canResetPassword && (
                <Link
                  href={route("password.request")}
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              )}
            </div>
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

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={processing}>
          {processing && (
              <Loader2Icon className="animate-spin" />
            ) }
            <span>{processing ? "Logging in..." : "Login"}</span>
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
          Don&apos;t have an account?{" "}
          <Link
            href={route("register")}
            className="underline underline-offset-4"
          >
            Sign up
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
