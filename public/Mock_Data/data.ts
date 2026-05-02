export const STATS_DATA = [
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
];

export const VERIFICATION_QUEUE = [
  {
    id: 1,
    name: "Dr. Amelia Garcia",
    role: "Pediatric",
    time: "2h ago",
    status: "pending",
    initials: "AG",
  },
  {
    id: 2,
    name: "Dr. Sara Chen",
    role: "General",
    time: "5h ago",
    status: "pending",
    initials: "SC",
  },
  {
    id: 3,
    name: "Dr. Ravi Verma",
    role: "Endodontics",
    time: "Resubmitted",
    status: "review",
    initials: "RV",
  },
  {
    id: 4,
    name: "Dr. Jamie Tao",
    role: "Cosmetic",
    time: "Missing license",
    status: "action",
    initials: "JT",
  },
];

export const TOP_DENTISTS = [
  {
    id: 1,
    name: "Dr. Liam O'Connor",
    specialty: "Oral Surgery",
    location: "Chicago, IL",
    bookings: 402,
    initials: "LO",
  },
  {
    id: 2,
    name: "Dr. Maya Patel",
    specialty: "Orthodontics",
    location: "San Francisco",
    bookings: 312,
    initials: "MP",
  },
  {
    id: 3,
    name: "Dr. Brian Lee",
    specialty: "Endodontics",
    location: "New York",
    bookings: 268,
    initials: "BL",
  },
  {
    id: 4,
    name: "Dr. Noah Kim",
    specialty: "Cosmetic",
    location: "Seattle",
    bookings: 198,
    initials: "NK",
  },
];

export const RECENT_ACTIVITY = [
  {
    id: 1,
    type: "verified",
    title: "Dr. Maya Patel verified",
    description: "Approved by Jordan Smith",
    time: "2m",
    icon: "CheckCircle2",
    color: "text-emerald-500",
  },
  {
    id: 2,
    type: "signup",
    title: "5 new patient signups",
    description: "From SF, NYC and Austin",
    time: "18m",
    icon: "UserPlus",
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "flagged",
    title: "Review flagged for moderation",
    description: "RV-503 · Dr. Priya Shah",
    time: "1h",
    icon: "Flag",
    color: "text-amber-500",
  },
  {
    id: 4,
    type: "payout",
    title: "Payout processed",
    description: "$2,480 → Dr. Brian Lee",
    time: "3h",
    icon: "CreditCard",
    color: "text-emerald-500",
  },
  {
    id: 5,
    type: "failed",
    title: "Payment failed",
    description: "TXN-9006 · Mia Thompson",
    time: "4h",
    icon: "XCircle",
    color: "text-red-500",
  },
];
export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "New Dentist Signup",
    description: "Dr. Sarah Jenkins registered.",
    time: "2m ago",
    isRead: false,
  },
  {
    id: "2",
    title: "Verification Required",
    description: "Dr. Maya Patel uploaded documents.",
    time: "1h ago",
    isRead: false,
  },
  {
    id: "3",
    title: "Payout Processed",
    description: "Payment of $1,200 sent to Dr. Lee.",
    time: "5h ago",
    isRead: true,
  },
];

export const MOCK_USER = {
  name: "Jordan Smith",
  email: "jordan@rateddocs.com",
  role: "System Administrator",
  initials: "JS",
};

export const DATA = [
  { date: "Apr 16", bookings: 210, revenue: 24000 },
  { date: "Apr 17", bookings: 195, revenue: 22000 },
  { date: "Apr 18", bookings: 280, revenue: 35000 },
  { date: "Apr 19", bookings: 260, revenue: 31000 },
  { date: "Apr 20", bookings: 320, revenue: 42000 },
  { date: "Apr 21", bookings: 290, revenue: 38000 },
  { date: "Apr 22", bookings: 340, revenue: 45000 },
  { date: "Apr 23", bookings: 310, revenue: 41000 },
  { date: "Apr 24", bookings: 380, revenue: 51000 },
  { date: "Apr 25", bookings: 360, revenue: 47000 },
  { date: "Apr 26", bookings: 400, revenue: 53000 },
  { date: "Apr 27", bookings: 385, revenue: 50000 },
  { date: "Apr 28", bookings: 420, revenue: 55000 },
  { date: "Apr 29", bookings: 312, revenue: 39000 },
];
