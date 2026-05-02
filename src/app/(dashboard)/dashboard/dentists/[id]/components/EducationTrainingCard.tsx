import { DentistProfileData } from "@/types/types";

type EducationTrainingCardProps = {
  education: DentistProfileData["education"];
};

export function EducationTrainingCard({
  education,
}: EducationTrainingCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-800">
          Education &amp; training
        </h2>
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] text-slate-400">{education.year}</p>
        <p className="mt-1 text-sm font-semibold text-slate-800">
          {education.degree}
        </p>
        <p className="text-xs text-slate-500">{education.institution}</p>
      </div>
    </section>
  );
}
