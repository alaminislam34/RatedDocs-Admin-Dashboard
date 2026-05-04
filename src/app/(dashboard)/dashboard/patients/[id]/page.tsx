"use client";

import { useState } from "react";
import { ProfileHeader } from "../../dentists/[id]/components/ProfileHeader";
import {
  ProfileTabs,
  profileTabsForPatients,
} from "../../dentists/[id]/components/ProfileTabs";
import PatientBookings from "../_components/BookingTable";
import StatsCard from "@/app/components/GenericDataTable/StatsCard";
import PatientOverview from "../_components/Overview";
import { MOCK_PATIENTS } from "@/types/patinets/types";
const patient = {
  name: "Olivia Martinez",
  status: "active",
  city: "San Francisco, CA",
  email: "olivia@mail.com",
  phone: "+1 415 555 0188",
  joinedDate: "2025-02-14",
  lastBooking: "2026-04-20",
};

const PatientProfile = () => {
  // Fix 1: Initialize with the string label
  const [activeTabLabel, setActiveTabLabel] = useState(
    profileTabsForPatients[0].label,
  );

  // Mock counts for stats cards
  const counts = {
    total: 120,
    active: 95,
    pending: 15,
    suspended: 10,
  };

  return (
    <div className="min-h-screen">
      <div className="space-y-4 md:space-y-6">
        {/* Reuse your updated ProfileHeader */}
        <ProfileHeader data={patient} type="patient" />
        {/* Stats Cards Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white *:border-l border rounded-lg overflow-hidden">
          <StatsCard
            label="Total Bookings"
            value={counts.total}
            note={
              <span className="text-emerald-600 font-bold">+34 this week</span>
            }
            className="border-r border-b sm:border-b-0 rounded-none shadow-none"
          />
          <StatsCard
            label="Amount Spent"
            value={counts.active}
            note={
              <span className="text-slate-400 font-medium">
                {Math.round((counts.active / counts.total) * 100)}% coverage
              </span>
            }
            className="lg:border-r border-b sm:border-b-0 rounded-none shadow-none"
          />
          <StatsCard
            label="Previews Written"
            value={counts.pending}
            note={
              <span className="text-amber-600 font-bold">Awaiting review</span>
            }
            className="border-r rounded-none shadow-none"
          />
          <StatsCard
            label="Referrals Made"
            value={counts.suspended}
            note={<span className="text-slate-400 font-medium">0.6% rate</span>}
            className="rounded-none shadow-none"
          />
          <StatsCard
            label="Inactive"
            value={counts.suspended}
            note={<span className="text-slate-400 font-medium">0.6% rate</span>}
            className="rounded-none shadow-none"
          />
        </div>
        {/* Fix 3: Ensure labels are passed correctly */}
        <ProfileTabs
          tabs={profileTabsForPatients}
          setProfileTab={(label) => setActiveTabLabel(label)}
        />

        {activeTabLabel === "Bookings" && <PatientBookings />}

        {activeTabLabel === "Overview" && (
          <PatientOverview patient={MOCK_PATIENTS} />
        )}
      </div>
    </div>
  );
};

export default PatientProfile;
