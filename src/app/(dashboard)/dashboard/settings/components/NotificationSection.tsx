"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import NotificationGroup from "./NotificationGroup";
import { notificationGroups } from "../data";
import type { NotificationGroupData } from "../types";

export function NotificationSection() {
  const [groups, setGroups] =
    useState<NotificationGroupData[]>(notificationGroups);

  const updateGroup = (
    groupId: string,
    updater: (group: NotificationGroupData) => NotificationGroupData,
  ) => {
    setGroups((current) =>
      current.map((group) => (group.id === groupId ? updater(group) : group)),
    );
  };

  return (
    <div className="space-y-6">
      {groups.map((group) => (
        <NotificationGroup
          key={group.id}
          group={group}
          onEnableAll={() =>
            updateGroup(group.id, (current) => ({
              ...current,
              items: current.items.map((item) => ({ ...item, enabled: true })),
            }))
          }
          onDisableAll={() =>
            updateGroup(group.id, (current) => ({
              ...current,
              items: current.items.map((item) => ({ ...item, enabled: false })),
            }))
          }
          onToggleItem={(itemId, checked) =>
            updateGroup(group.id, (current) => ({
              ...current,
              items: current.items.map((item) =>
                item.id === itemId ? { ...item, enabled: checked } : item,
              ),
            }))
          }
        />
      ))}

      <div className="flex justify-end">
        <Button className="rounded-lg bg-[#101828] px-4 text-white hover:bg-slate-800">
          Save all preferences
        </Button>
      </div>
    </div>
  );
}

export default NotificationSection;
