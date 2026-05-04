"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";
import { profileMeta } from "../data";

export function ProfileHeader() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative">
          <Avatar className="h-18 w-18 bg-indigo-600 text-white shadow-sm">
            <AvatarFallback className="text-lg font-semibold">
              JS
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#101828] text-white">
            <Camera className="h-3 w-3" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold text-[#101828]">
            {profileMeta.name}
          </h2>
          <p className="text-sm text-slate-500">{profileMeta.role}</p>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-100">
              {profileMeta.badge}
            </Badge>
            <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 hover:bg-slate-100">
              {profileMeta.joined}
            </Badge>
            <Badge className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 hover:bg-slate-100">
              {profileMeta.lastLogin}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
