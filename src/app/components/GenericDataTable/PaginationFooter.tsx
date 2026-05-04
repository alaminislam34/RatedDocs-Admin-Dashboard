import { Button } from "@/components/ui/button";

export default function PaginationFooter({
  total,
  showingFrom = 1,
  showingTo,
}: {
  total: number;
  showingFrom?: number;
  showingTo?: number;
}) {
  const to = showingTo ?? total;

  return (
    <div className="flex items-center justify-between p-4 text-sm text-slate-600">
      <div>
        Showing {showingFrom}–{to} of {total} results
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          ‹
        </Button>
        <p>{showingFrom}</p>
        <Button variant="outline" size="sm">
          ›
        </Button>
      </div>
    </div>
  );
}
