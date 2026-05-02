import { DashboardStatsCard } from "./DashboardStatsCard";

// This data structure matches your STATS_DATA mock
const stats = [
  {
    label: "Active dentists",
    value: "1,284",
    change: "+8.2%",
    trend: "up",
    subtext: "vs last week",
    icon: "Stethoscope",
  },
  {
    label: "Total patients",
    value: "28,491",
    change: "+12.5%",
    trend: "up",
    subtext: "vs last week",
    icon: "Users",
  },
  {
    label: "Bookings today",
    value: "312",
    change: "-2.1%",
    trend: "down",
    subtext: "vs yesterday",
    icon: "Calendar",
  },
  {
    label: "Revenue (MTD)",
    value: "$184,210",
    change: "+18.4%",
    trend: "up",
    subtext: "vs last month",
    icon: "DollarSign",
  },
] as const;

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <DashboardStatsCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          change={stat.change}
          trend={stat.trend}
          subtext={stat.subtext}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
