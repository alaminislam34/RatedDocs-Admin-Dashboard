"use client";

import ToggleSwitch from "./ToggleSwitch";

type NotificationItemProps = {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export function NotificationItem({
  label,
  checked,
  onCheckedChange,
}: NotificationItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-slate-100 last:border-b-0">
      <p className="text-sm text-slate-700">{label}</p>
      <ToggleSwitch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

export default NotificationItem;
