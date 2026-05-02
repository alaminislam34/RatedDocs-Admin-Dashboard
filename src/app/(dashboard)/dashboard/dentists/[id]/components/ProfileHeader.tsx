import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DentistProfileData } from "@/types/types";
import { Briefcase, Mail, MapPin, Phone, Star } from "lucide-react";

type ProfileHeaderProps = {
  data: DentistProfileData;
};

export function ProfileHeader({ data }: ProfileHeaderProps) {
  return (
    <div className="">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3.5">
          <Avatar className="size-16 lg:size-20">
            <AvatarFallback className="text-black text-xl font-semibold bg-blue-100  border-4 border-white">
              DM
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-semibold text-slate-800">
                {data.name}
              </h1>
              <Badge className="h-5 rounded-full bg-[#495ed7] px-2 text-[10px] text-white hover:bg-[#495ed7]">
                RDV Verified - 100
              </Badge>
              <Badge className="h-5 rounded-full bg-emerald-100 px-2 text-[10px] text-emerald-700 hover:bg-emerald-100">
                Active
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="h-5 rounded-full border-slate-200 bg-slate-50 px-2 text-[10px] text-slate-600"
              >
                {data.specialty}
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3" /> {data.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Mail className="size-3" /> {data.email}
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="size-3" /> {data.phone}
              </span>
              <span className="inline-flex items-center gap-1">
                <Briefcase className="size-3" /> {data.experience}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 md:items-end">
          <div className="flex items-center gap-1 text-amber-500">
            {[0, 1, 2, 3, 4].map((idx) => (
              <Star key={idx} className="size-3.5 fill-current" />
            ))}
            <span className="ml-1 text-sm font-semibold text-slate-700">
              {data.rating}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            {data.reviews} verified reviews
          </p>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            {data.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
