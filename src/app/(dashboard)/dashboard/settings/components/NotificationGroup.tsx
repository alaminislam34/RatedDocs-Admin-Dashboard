"use client";

import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationItem from "./NotificationItem";
import { cn } from "@/lib/utils";
import type { NotificationGroupData } from "../types";

type NotificationGroupProps = {
  group: NotificationGroupData;
  onEnableAll: () => void;
  onDisableAll: () => void;
  onToggleItem: (itemId: string, checked: boolean) => void;
};

const iconMap = {
  mail: Mail,
  push: Bell,
  sms: MessageSquare,
};

export function NotificationGroup({
  group,
  onEnableAll,
  onDisableAll,
  onToggleItem,
}: NotificationGroupProps) {
  const Icon = iconMap[group.icon];

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              group.icon === "mail" && "bg-blue-50 text-blue-600",
              group.icon === "push" && "bg-violet-50 text-violet-600",
              group.icon === "sms" && "bg-emerald-50 text-emerald-600",
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-semibold text-slate-900">
            {group.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <button
            type="button"
            onClick={onEnableAll}
            className="hover:text-slate-900"
          >
            Enable all
          </button>
          <button
            type="button"
            onClick={onDisableAll}
            className="hover:text-slate-900"
          >
            Disable all
          </button>
        </div>
      </div>

      <div className="px-6">
        {group.items.map((item) => (
          <NotificationItem
            key={item.id}
            label={item.label}
            checked={item.enabled}
            onCheckedChange={(checked) => onToggleItem(item.id, checked)}
          />
        ))}
      </div>
    </section>
  );
}

export default NotificationGroup;
