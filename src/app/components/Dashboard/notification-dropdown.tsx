"use client";

import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MOCK_NOTIFICATIONS } from "../../../../public/Mock_Data/data";

export function NotificationDropdown() {
  const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.isRead).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-slate-500 hover:text-slate-900"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="flex items-center justify-between">
          <span className="font-bold">Notifications</span>
          <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">
            {unreadCount} New
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-87.5 overflow-y-auto">
          {MOCK_NOTIFICATIONS.length > 0 ? (
            MOCK_NOTIFICATIONS.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start gap-1 p-4 cursor-pointer focus:bg-slate-50"
              >
                <div className="flex w-full justify-between items-start gap-2">
                  <p
                    className={cn(
                      "text-sm font-bold leading-tight",
                      !notification.isRead
                        ? "text-slate-900"
                        : "text-slate-500",
                    )}
                  >
                    {notification.title}
                  </p>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap">
                    {notification.time}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {notification.description}
                </p>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="p-8 text-center text-sm text-slate-400">
              No new notifications
            </div>
          )}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full text-center justify-center text-xs font-bold text-[#D99A29] cursor-pointer py-3">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
