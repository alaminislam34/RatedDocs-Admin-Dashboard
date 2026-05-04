"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Star,
  Calendar,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ProfileHeaderProps = {
  data: any;
  type: "dentist" | "patient";
};

export function ProfileHeader({ data, type }: ProfileHeaderProps) {
  const isDentist = type === "dentist";
  const initials = data.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-full space-y-6">
      {/* 1. Breadcrumbs / Back Link (As per your screenshot) */}
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <Link
          href={isDentist ? "/dashboard/dentists" : "/dashboard/patients"}
          className="flex items-center gap-2 hover:text-slate-600 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to {isDentist ? "dentists" : "patients"}</span>
        </Link>
        <span>/</span>
        <span className="text-slate-500">
          {isDentist ? "Dentists" : "Patients"} / {data.name}
        </span>
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left Section: Profile Info */}
        <div className="flex items-center gap-5">
          <Avatar
            className={cn(
              "size-20 lg:size-24 border-4 border-white shadow-sm",
              !isDentist && "bg-blue-600", // Matches your blue patient avatar screenshot
            )}
          >
            <AvatarFallback
              className={cn(
                "text-xl font-bold",
                isDentist
                  ? "bg-blue-100 text-blue-700"
                  : "bg-[#2563eb] text-white",
              )}
            >
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">{data.name}</h1>
              <Badge
                className={cn(
                  "h-6 rounded-full px-3 text-[11px] font-semibold flex items-center gap-1.5",
                  data.status?.toLowerCase() === "active"
                    ? "bg-emerald-50 text-emerald-600 hover:bg-emerald-50 border-emerald-100"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-100",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {data.status === "active" ? "Active" : data.status}
              </Badge>

              <Badge
                variant="secondary"
                className="h-6 rounded-md bg-slate-100 px-2 text-[11px] text-slate-500 hover:bg-slate-100"
              >
                {isDentist ? "Verified Practitioner" : "Patient"}
              </Badge>
            </div>

            {/* Sub-header for Dentist only */}
            {isDentist && (
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="rounded-full border-slate-200 bg-slate-50 text-slate-600"
                >
                  {data.specialty}
                </Badge>
              </div>
            )}

            {/* Dynamic Info Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-slate-400" />{" "}
                {isDentist ? data.location : data.city}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="size-3.5 text-slate-400" /> {data.email}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="size-3.5 text-slate-400" /> {data.phone}
              </span>

              {!isDentist ? (
                <>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-slate-400" /> Joined{" "}
                    {data.joinedDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-slate-400" /> Last visit{" "}
                    {data.lastBooking}
                  </span>
                </>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase className="size-3.5 text-slate-400" />{" "}
                  {data.experience}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Different for Dentist and Patient */}
        <div className="flex flex-col items-start gap-1 md:items-end">
          {isDentist ? (
            /* Dentist Rating Logic */
            <>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={cn(
                      "size-4 fill-current",
                      idx >= Math.floor(data.rating) &&
                        "text-slate-200 fill-transparent",
                    )}
                  />
                ))}
                <span className="ml-1 text-base font-bold text-slate-900">
                  {data.rating}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {data.reviews} verified reviews
              </p>
              <div className="mt-1 flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                {data.languages?.map((lang: string) => (
                  <span key={lang} className="uppercase tracking-wider">
                    {lang}
                  </span>
                ))}
              </div>
            </>
          ) : (
            /* Patient Referral Credits (Matching your screenshot) */
            <div className="text-right">
              <p className="text-xs text-slate-400 font-medium">
                Referral credits
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">$50</h2>
              <p className="text-[11px] text-slate-400 font-medium">
                Available to use
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
