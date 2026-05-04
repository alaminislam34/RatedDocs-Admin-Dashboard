"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type TopNavigationProps = {
  name: string;
};

export function TopNavigation({ name }: TopNavigationProps) {
  const router = useRouter();
  return (
    <div className="flex items-center gap-3 text-xs text-slate-500">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-[#101828] transition-colors"
      >
        <ChevronLeft className="size-3.5" />
        Back to dentists
      </button>
      <span className="text-slate-300">Dentists / {name}</span>
    </div>
  );
}
