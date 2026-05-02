"use client";

import {
  dentistData,
  profileTabs,
} from "../../../../../../public/Mock_Data/data";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileTabs } from "./components/ProfileTabs";
import { StatsSummaryRow } from "./components/StatsSummaryRow";
import { TopNavigation } from "./components/TopNavigation";
import Overview from "./components/page/Overview";
import { useState } from "react";
import PricingAndProtocol from "./components/page/PricingAndProtocol";
import Verification from "./components/page/Verification/Verification";
import Reviews from "./components/page/Reviews/Reviews";
import PatientResult from "./components/page/PatientResult/Patient-Result";
import Material from "./components/page/Mateiral/Material";

const DentistProfile = () => {
  const [profileTab, setProfileTab] = useState(profileTabs[0]);
  return (
    <div className="min-h-screen">
      <div className="space-y-4 md:space-y-5">
        <TopNavigation name={dentistData.name} />

        <ProfileHeader data={dentistData} />

        <StatsSummaryRow stats={dentistData.stats} />

        <ProfileTabs tabs={profileTabs} setProfileTab={setProfileTab} />
        {profileTab === "Overview" ? (
          <Overview />
        ) : profileTab === "Pricing & Protocols" ? (
          <PricingAndProtocol />
        ) : profileTab === "Verification Data" ? (
          <Verification />
        ) : profileTab === "Reviews" ? (
          <Reviews />
        ) : profileTab === "Patient Results" ? (
          <PatientResult />
        ) : (
          profileTab === "Materials" && <Material />
        )}
      </div>
    </div>
  );
};

export default DentistProfile;
