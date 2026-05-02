import React from "react";
import { ProfileInformationCard } from "../ProfileInformationCard";
import { ProceduresOfferedCard } from "../ProceduresOfferedCard";
import { EducationTrainingCard } from "../EducationTrainingCard";
import { VerificationCard } from "../VerificationCard";
import { PerformanceCard } from "../PerformanceCard";
import { AdminActionsCard } from "../AdminActionsCard";
import { dentistData } from "../../../../../../../../public/Mock_Data/data";

export default function Overview() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <ProfileInformationCard profileInfo={dentistData.profileInfo} />
        <ProceduresOfferedCard procedures={dentistData.procedures} />
        <EducationTrainingCard education={dentistData.education} />
      </div>

      <aside className="space-y-4">
        <VerificationCard verification={dentistData.verification} />
        <PerformanceCard performance={dentistData.performance} />
        <AdminActionsCard />
      </aside>
    </div>
  );
}
