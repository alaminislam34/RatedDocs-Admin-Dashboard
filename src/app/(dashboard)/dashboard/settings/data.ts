import type { NotificationGroupData, UserProfile } from "./types";

export const userProfile: UserProfile = {
  firstName: "Jordan",
  lastName: "Smith",
  email: "jordan@rateddocs.com",
  phone: "+1 (415) 555-0142",
  bio: "Managing the RatedDocs admin platform. Passionate about building great dental experiences.",
};

export const profileMeta = {
  name: "Jordan Smith",
  role: "Platform Administrator · Engineering",
  badge: "Super Admin",
  joined: "Joined Jan 14, 2024",
  lastLogin: "Last login: Today at 9:41 AM",
};

export const notificationGroups: NotificationGroupData[] = [
  {
    id: "email",
    title: "Email notifications",
    icon: "mail",
    items: [
      { id: "new-dentist", label: "New dentist registration", enabled: true },
      { id: "new-review", label: "New review submitted", enabled: true },
      { id: "escrow-dispute", label: "Escrow dispute opened", enabled: true },
      { id: "weekly-digest", label: "Weekly summary digest", enabled: false },
    ],
  },
  {
    id: "push",
    title: "In-app / push",
    icon: "push",
    items: [
      {
        id: "queue-alert",
        label: "Verification queue needs attention",
        enabled: true,
      },
      {
        id: "escrow-release",
        label: "Escrow funds ready to release",
        enabled: true,
      },
      {
        id: "new-device",
        label: "New login from unrecognised device",
        enabled: true,
      },
    ],
  },
  {
    id: "sms",
    title: "SMS notifications",
    icon: "sms",
    items: [
      {
        id: "critical-alerts",
        label: "Critical system alerts only",
        enabled: false,
      },
      { id: "twofa", label: "2FA verification codes", enabled: true },
    ],
  },
];
