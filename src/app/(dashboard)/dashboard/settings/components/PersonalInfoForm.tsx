"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userProfile } from "../data";
import type { UserProfile } from "../types";

type PersonalInfoFormProps = {
  profile?: UserProfile;
};

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Enter a valid email address"),
  bio: z.string().min(10, "Bio should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function PersonalInfoForm({
  profile = userProfile,
}: PersonalInfoFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: profile,
  });

  return (
    <form
      onSubmit={form.handleSubmit(() => undefined)}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
        <h3 className="text-sm font-semibold text-slate-900">
          Personal details
        </h3>
        <Button
          type="submit"
          className="bg-slate-900 text-white hover:bg-slate-800"
        >
          Save changes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 px-6 py-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" {...form.register("firstName")} />
          {form.formState.errors.firstName && (
            <p className="text-xs text-red-500">
              {form.formState.errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" {...form.register("lastName")} />
          {form.formState.errors.lastName && (
            <p className="text-xs text-red-500">
              {form.formState.errors.lastName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" {...form.register("phone")} />
          {form.formState.errors.phone && (
            <p className="text-xs text-red-500">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" {...form.register("email")} />
          {form.formState.errors.email ? (
            <p className="text-xs text-red-500">
              {form.formState.errors.email.message}
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              Changing email requires re-verification
            </p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="bio">Bio</Label>
          <textarea
            id="bio"
            rows={4}
            className="min-h-24 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            {...form.register("bio")}
          />
          {form.formState.errors.bio ? (
            <p className="text-xs text-red-500">
              {form.formState.errors.bio.message}
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              A short description visible to other admins
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
