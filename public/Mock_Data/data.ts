import { DentistProfileData } from "@/types/types";

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

export interface Dentist {
  id: string;
  name: string;
  email: string;
  idCode: string;
  specialty: string;
  location: string;
  status: "Active" | "Pending" | "Suspended" | "Rejected";
  rating: number;
  reviews: number;
  bookings: number | null;
  joined: string;
}

export const MOCK_DENTISTS: Dentist[] = [
  {
    id: "DEN-001",
    name: "Dr. Maya Patel",
    email: "maya@clinicx.com",
    idCode: "DEN-001",
    specialty: "Orthodontics",
    location: "San Francisco, CA",
    status: "Active",
    rating: 4.9,
    reviews: 184,
    bookings: 312,
    joined: "2024-08-12",
  },
  {
    id: "DEN-002",
    name: "Dr. Brian Lee",
    email: "blee@smilecare.io",
    idCode: "DEN-002",
    specialty: "Endodontics",
    location: "New York, NY",
    status: "Active",
    rating: 4.8,
    reviews: 142,
    bookings: 268,
    joined: "2024-09-03",
  },
  {
    id: "DEN-003",
    name: "Dr. Amelia Garcia",
    email: "amelia@brightd.com",
    idCode: "DEN-003",
    specialty: "Pediatric",
    location: "Austin, TX",
    status: "Pending",
    rating: 0,
    reviews: 0,
    bookings: null,
    joined: "2026-04-22",
  },
  {
    id: "DEN-004",
    name: "Dr. Noah Kim",
    email: "noah@northdent.com",
    idCode: "DEN-004",
    specialty: "Cosmetic",
    location: "Seattle, WA",
    status: "Active",
    rating: 4.7,
    reviews: 96,
    bookings: 198,
    joined: "2025-01-10",
  },
  {
    id: "DEN-005",
    name: "Dr. Priya Shah",
    email: "priya@dentalp.co",
    idCode: "DEN-005",
    specialty: "Periodontics",
    location: "Boston, MA",
    status: "Suspended",
    rating: 3.9,
    reviews: 58,
    bookings: 74,
    joined: "2024-11-19",
  },
  {
    id: "DEN-006",
    name: "Dr. Liam O'Connor",
    email: "liam@oaktree.dent",
    idCode: "DEN-006",
    specialty: "Oral Surgery",
    location: "Chicago, IL",
    status: "Active",
    rating: 4.6,
    reviews: 211,
    bookings: 402,
    joined: "2024-06-04",
  },
  {
    id: "DEN-007",
    name: "Dr. Sara Chen",
    email: "sara@chendent.com",
    idCode: "DEN-007",
    specialty: "General",
    location: "Los Angeles, CA",
    status: "Pending",
    rating: 0,
    reviews: 0,
    bookings: null,
    joined: "2026-04-25",
  },
  {
    id: "DEN-008",
    name: "Dr. Marcus Hall",
    email: "marcus@hall.dental",
    idCode: "DEN-008",
    specialty: "Prosthodontics",
    location: "Denver, CO",
    status: "Active",
    rating: 4.5,
    reviews: 73,
    bookings: 124,
    joined: "2025-03-15",
  },
];

export const dentistData: DentistProfileData = {
  name: "Dr. Maya Patel",
  specialty: "Orthodontics",
  rating: 4.9,
  reviews: 164,
  languages: ["English", "Spanish"],
  email: "maya@clinic.com",
  phone: "+1 415 555 0192",
  location: "San Francisco, CA",
  experience: "11y experience",
  stats: {
    totalBookings: "312",
    revenue: "$48,200",
    cancellationRate: "3.2%",
    estimateAccuracy: "94%",
    avgResponseTime: "1h12m",
  },
  profileInfo: {
    fullName: "Dr. Maya Patel",
    license: "CA-DDS-44192",
    specialty: "Orthodontics",
    yearsOfPractice: "11 years",
    clinic: "CliniX Smile Center",
    address: "88 Market St, San Francisco, CA",
    bio: "Dr. Patel specializes in invisible aligners and pediatric orthodontics. Trained at UCSF, certified in Invisalign Diamond, and lingual braces. With 11 years of experience she has completed over 800 smile transformations and welcomes international patients.",
  },
  procedures: [
    {
      procedure: "Single Implant",
      category: "Implants",
      price: "$1,200",
      bookings: "56",
    },
    {
      procedure: "Veneer (per tooth)",
      category: "Cosmetic",
      price: "$380",
      bookings: "88",
    },
    {
      procedure: "Crown",
      category: "Restorative",
      price: "$750",
      bookings: "72",
    },
    {
      procedure: "Full-arch restoration",
      category: "Implants",
      price: "$1,200",
      bookings: "28",
    },
    {
      procedure: "Invisalign fitting",
      category: "Orthodontics",
      price: "$480",
      bookings: "68",
    },
  ],
  education: {
    year: "2013",
    degree: "Doctor of Dental Surgery (DDS)",
    institution: "UCSF School of Dentistry",
  },
  verification: {
    score: "100%",
    title: "All 3 phases approved",
    subtitle: "By Jordan Smith, Apr 12, 2025",
    phaseBreakdown: [
      {
        name: "Phase 1 - Identity",
        percent: 50,
        date: "approved Apr 10, 2025",
        status: "Approved",
      },
      {
        name: "Phase 2 - Operations",
        percent: 40,
        date: "approved Apr 12, 2025",
        status: "Approved",
      },
      {
        name: "Phase 3 - Clinical Depth",
        percent: 50,
        date: "approved Apr 13, 2025",
        status: "Approved",
      },
    ],
  },
  performance: [
    { label: "Show-up rate", value: 96.8, color: "bg-slate-900" },
    { label: "5-star reviews", value: 76, color: "bg-amber-500" },
    { label: "Repeat patients", value: 62, color: "bg-amber-700" },
    { label: "Estimate accuracy", value: 94, color: "bg-emerald-500" },
  ],
};

export const profileTabs = [
  "Overview",
  "Pricing & Protocols",
  "Verification Data",
  "Reviews",
  "Patient Results",
  "Materials",
];
