"use client";

type ResultCardProps = {
  title: string;
  location: string;
  date: string;
};

export function ResultCard({ title, location, date }: ResultCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
      <div className="grid grid-cols-2">
        {/* Before Section */}
        <div className="aspect-video bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Before
          </p>
        </div>

        {/* After Section */}
        <div className="aspect-video bg-blue-50 border-b border-slate-100 p-4 flex items-center justify-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            After
          </p>
        </div>
      </div>
      {/* Content Footer */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-[#101828]">{title}</h3>
        <p className="text-xs text-slate-500 mt-1">
          {location} · {date}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;
