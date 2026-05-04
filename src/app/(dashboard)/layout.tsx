"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/Sidebar/sidebar";
import { DashboardNavbar } from "../components/Dashboard/navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* 1. DESKTOP SIDEBAR (Visible only on lg screens) */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <header className="">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="p-0 w-70 border-none">
            <SheetTitle className="sr-only">Sidebar navigation</SheetTitle>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </header>

      {/* 3. MAIN CONTENT AREA */}
      {/* Offset by 280px (sidebar width) on large screens */}
      <main className="lg:pl-70 flex flex-col min-h-screen">
        <DashboardNavbar onOpenChange={setOpen} />
        <div className="flex-1 p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
