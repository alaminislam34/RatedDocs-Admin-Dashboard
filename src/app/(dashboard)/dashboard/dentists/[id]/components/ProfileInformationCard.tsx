import { Badge } from "@/components/ui/badge";
import { DentistProfileData } from "@/types/types";
import { Pencil } from "lucide-react";

type ProfileInformationCardProps = {
  profileInfo: DentistProfileData["profileInfo"];
};

export function ProfileInformationCard({
  profileInfo,
}: ProfileInformationCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-800">
          Profile information
        </h2>
        <button className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700">
          <Pencil className="size-3.5" /> Edit
        </button>
      </div>

      <div className="space-y-4 px-4 py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-[10px] text-slate-400">Full name</p>
            <p className="text-sm font-semibold text-slate-800">
              {profileInfo.fullName}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400">License #</p>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-slate-800">
                {profileInfo.license}
              </p>
              <Badge className="h-4 rounded-full bg-emerald-100 px-1.5 text-[9px] text-emerald-700 hover:bg-emerald-100">
                AI auto-validated
              </Badge>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-slate-400">Specialty</p>
            <p className="text-sm font-semibold text-slate-800">
              {profileInfo.specialty}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400">Years of practice</p>
            <p className="text-sm font-semibold text-slate-800">
              {profileInfo.yearsOfPractice}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400">Clinic</p>
            <p className="text-sm font-semibold text-slate-800">
              {profileInfo.clinic}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400">Address</p>
            <p className="text-sm font-semibold text-slate-800">
              {profileInfo.address}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[10px] text-slate-400">Bio</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            {profileInfo.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
