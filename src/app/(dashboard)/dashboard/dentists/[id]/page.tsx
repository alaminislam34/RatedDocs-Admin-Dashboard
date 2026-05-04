"use client";

import { dentistData } from "../../../../../../public/Mock_Data/data";
import { ProfileHeader } from "./components/ProfileHeader";
import { profileTabs, ProfileTabs } from "./components/ProfileTabs";
import { StatsSummaryRow } from "./components/StatsSummaryRow";
import Overview from "./components/page/Overview";
import { useState } from "react";
import PricingAndProtocol from "./components/page/PricingAndProtocol";
import Verification from "./components/page/Verification/Verification";
import Reviews from "./components/page/Reviews/Reviews";
import PatientResult from "./components/page/PatientResult/Patient-Result";
import Material from "./components/page/Mateiral/Material";

const DentistProfile = () => {
  // Fix 1: Initialize state with the string label of the first tab
  const [activeTabLabel, setActiveTabLabel] = useState(profileTabs[0].label);

  // Fix 2: Use a switch or a cleaner mapping for the content
  const renderTabContent = () => {
    switch (activeTabLabel) {
      case "Overview":
        return <Overview />;
      case "Pricing & Protocols":
        return <PricingAndProtocol />;
      case "Verification Data":
        return <Verification />;
      case "Reviews":
        return <Reviews />;
      case "Patient Results":
        return <PatientResult />;
      case "Materials":
        return <Material />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="space-y-4 md:space-y-6">
        <ProfileHeader data={dentistData} type="dentist" />

        <StatsSummaryRow stats={dentistData.stats} />

        {/* Fix 3: Ensure setProfileTab receives the string label correctly */}
        <ProfileTabs
          tabs={profileTabs}
          setProfileTab={(label) => setActiveTabLabel(label)}
        />

        <div className="mt-4">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default DentistProfile;
