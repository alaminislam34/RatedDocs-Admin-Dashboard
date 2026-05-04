"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Activity, Eye, EyeOff, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { loginSchema, LoginValues } from "@/app/lib/validations/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(data: LoginValues) {
    toast.success("Logged in successfully!");
    setTimeout(() => {
      router.push("/dashboard");
    }, 150);
  }

  return (
    <div className="flex w-full flex-col justify-between p-8 sm:p-12 lg:p-16 h-full min-h-screen bg-white">
      {/* Header / Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D99A29]">
          <Activity className="h-6 w-6 text-black" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold leading-tight text-[#101828]">
            RatedDocs
          </span>
          <span className="text-sm font-medium leading-tight text-slate-400">
            Admin Console
          </span>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="w-full max-w-md flex-1 flex flex-col justify-center pb-20">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#101828]">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500">
            Sign in to manage dentists, patients and bookings.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm text-[#101828] font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Work email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="admin@rateddocs.com"
              className={`h-11 rounded-lg border-slate-200 ${
                form.formState.errors.email
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }`}
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-[0.8rem] font-medium text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm text-[#101828] font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-[#101828]"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="demopassword"
                className={`h-11 rounded-lg border-slate-200 pr-10 ${
                  form.formState.errors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                {...form.register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {form.formState.errors.password && (
              <p className="text-[0.8rem] font-medium text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex flex-row items-center space-x-3 space-y-0">
            <Controller
              name="rememberMe"
              control={form.control}
              render={({ field }) => (
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="h-5 w-5 rounded-md border-slate-300 data-[state=checked]:bg-[#0a192f] data-[state=checked]:border-[#0a192f]"
                />
              )}
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-normal text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-11 bg-[#0a192f] hover:bg-[#0a192f]/90 text-white rounded-lg text-base font-medium"
          >
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-sm text-slate-400">
        © 2026 RatedDocs Inc. ·{" "}
        <a href="#" className="hover:text-slate-600">
          Terms
        </a>{" "}
        ·{" "}
        <a href="#" className="hover:text-slate-600">
          Privacy
        </a>
      </div>
    </div>
  );
}
