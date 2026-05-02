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
      { label: "Dentists", href: "/dentists", icon: UserRound },
      { label: "Patients", href: "/patients", icon: Users },
      { label: "Bookings", href: "/bookings", icon: CalendarDays },
      {
        label: "Verification Queue",
        href: "/verification",
        icon: ShieldCheck,
        badge: 12,
      },
    ],
  },
  {
    group: "Finance",
    items: [
      { label: "Payments & Escrow", href: "/payments", icon: Landmark },
      { label: "Reports", href: "/reports", icon: BarChart3 },
    ],
  },
  {
    group: "Directory",
    items: [{ label: "KOL Management", href: "/kol", icon: Star }],
  },
  {
    group: "Trust & Safety",
    items: [
      {
        label: "Anti-Collusion",
        href: "/collusion",
        icon: ShieldAlert,
        badge: 7,
      },
      { label: "SEO Review Pages", href: "/seo", icon: Globe, badge: 4 },
    ],
  },
  {
    group: "System",
    items: [{ label: "Settings", href: "/settings", icon: Settings }],
  },
];
