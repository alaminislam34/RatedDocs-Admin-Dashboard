import {
  LayoutDashboard,
  Users,
  UserRound,
  CalendarDays,
  ShieldCheck,
  Landmark,
  BarChart3,
  Star,
  ShieldAlert,
  Globe,
  Settings,
} from "lucide-react";

export const navConfig = [
  {
    group: "Overview",
    items: [{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard }],
  },
  {
    group: "Practice",
    items: [
      { label: "Dentists", href: "/dashboard/dentists", icon: UserRound },
      { label: "Patients", href: "/dashboard/patients", icon: Users },
      { label: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
      {
        label: "Verification Queue",
        href: "/dashboard/verification",
        icon: ShieldCheck,
        badge: 12,
      },
    ],
  },
  {
    group: "Finance",
    items: [
      {
        label: "Payments & Escrow",
        href: "/dashboard/payments",
        icon: Landmark,
      },
      { label: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    ],
  },
  {
    group: "Directory",
    items: [{ label: "KOL Management", href: "/dashboard/kol", icon: Star }],
  },
  {
    group: "Trust & Safety",
    items: [
      {
        label: "Anti-Collusion",
        href: "/dashboard/collusion",
        icon: ShieldAlert,
        badge: 7,
      },
      {
        label: "SEO Review Pages",
        href: "/dashboard/seo",
        icon: Globe,
        badge: 4,
      },
    ],
  },
  {
    group: "System",
    items: [{ label: "Settings", href: "/dashboard/settings", icon: Settings }],
  },
];
