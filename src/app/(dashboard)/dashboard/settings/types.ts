export type SystemSection =
  | "personal-info"
  | "password"
  | "notifications"
  | "danger-zone";

export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
};

export type NotificationToggle = {
  id: string;
  label: string;
  enabled: boolean;
};

export type NotificationGroupData = {
  id: string;
  title: string;
  icon: "mail" | "push" | "sms";
  items: NotificationToggle[];
};
