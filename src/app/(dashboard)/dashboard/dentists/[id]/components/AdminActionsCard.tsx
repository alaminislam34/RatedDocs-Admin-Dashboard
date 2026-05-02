import { Button } from "@/components/ui/button";
import { Pause, Trash2 } from "lucide-react";

export function AdminActionsCard() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <h2 className="mb-3 text-sm font-semibold text-slate-800">
        Admin actions
      </h2>
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full border-slate-200 text-slate-600"
        >
          <Pause className="mr-1.5 size-3.5" /> Suspend account
        </Button>
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="mr-1.5 size-3.5" /> Delete account
        </Button>
      </div>
    </section>
  );
}
