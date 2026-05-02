import PriceTable from "./PriceTable";
import ClinicalProtocolsCard from "./ClinicalProtocolsCard";
import { dentistData } from "../../../../../../../../public/Mock_Data/data";

export default function PricingAndProtocol() {
  const protocolItems: {
    title: string;
    meta?: string;
    status?: "Reviewed" | "Pending";
  }[] = [
    {
      title: "Implant protocol.pdf",
      meta: "2.4 MB · Apr 12, 2025",
      status: "Reviewed",
    },
    {
      title: "Veneer protocol.pdf",
      meta: "1.1 MB · Apr 12, 2025",
      status: "Reviewed",
    },
    {
      title: "Sterilization cert (JCI).pdf",
      meta: "980 KB · Apr 12, 2025",
      status: "Reviewed",
    },
    {
      title: "Crown protocol.pdf",
      meta: "740 KB · Apr 13, 2025",
      status: "Reviewed",
    },
    {
      title: "Anesthesia protocol.pdf",
      meta: "520 KB · Pending review",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <PriceTable procedures={dentistData.procedures} />
      <ClinicalProtocolsCard items={protocolItems} />
    </div>
  );
}
