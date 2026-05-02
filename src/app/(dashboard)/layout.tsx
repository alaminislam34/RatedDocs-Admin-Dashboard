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

      {/* 2. MOBILE HEADER & DRAWER */}
      <header className="sticky top-0 z-40 flex h-16 items-center border-b px-6 lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-70 border-none">
            <SheetTitle className="sr-only">Sidebar navigation</SheetTitle>
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className="flex-1 font-bold text-slate-900">RatedDocs</div>
      </header>

      {/* 3. MAIN CONTENT AREA */}
      {/* Offset by 280px (sidebar width) on large screens */}
      <main className="lg:pl-70 flex flex-col min-h-screen">
        <DashboardNavbar />
        <div className="flex-1 p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
