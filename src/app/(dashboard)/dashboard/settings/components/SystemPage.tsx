"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import SystemSidebar from "./SystemSidebar";
import PersonalInfoForm from "./PersonalInfoForm";
import PasswordForm from "./PasswordForm";
import NotificationSection from "./NotificationSection";
import DangerZone from "./DangerZone";
import type { SystemSection } from "../types";

export function SystemPage() {
  const [activeSection, setActiveSection] =
    useState<SystemSection>("personal-info");

  return (
    <div className="min-h-screen bg-[#f7f8fb] px-4 py-5 md:px-6">
      <div className="mx-auto max-w-360 space-y-5">
        <header>
          <h1 className="text-2xl font-semibold text-[#101828]">My Profile</h1>
          <p className="text-sm text-slate-500">System / My Profile</p>
        </header>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <SystemSidebar
            activeSection={activeSection}
            onChange={setActiveSection}
          />

          <main className="min-w-0 flex-1 space-y-4">
            {activeSection === "personal-info" && (
              <>
                <ProfileHeader />
                <PersonalInfoForm />
              </>
            )}

            {activeSection === "password" && <PasswordForm />}

            {activeSection === "notifications" && <NotificationSection />}

            {activeSection === "danger-zone" && <DangerZone />}
          </main>
        </div>
      </div>
    </div>
  );
}

export default SystemPage;
