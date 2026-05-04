export type PatientStatus = "active" | "inactive" | "blocked";

export interface Patient {
  id: string;
  name: string;
  patientId: string;
  email: string;
  phone: string;
  city: string;
  status: PatientStatus;
  totalBookings: number;
  lastBooking: string;
  joinedDate: string;
  image?: string;
}

export const MOCK_PATIENTS: Patient[] = [
  {
    id: "1",
    name: "Olivia Martinez",
    patientId: "PAT-1001",
    email: "olivia@mail.com",
    phone: "+1 415 555 0188",
    city: "San Francisco, CA",
    status: "active",
    totalBookings: 4,
    lastBooking: "2026-04-20",
    joinedDate: "2025-02-14",
  },
  {
    id: "2",
    name: "Ethan Wright",
    patientId: "PAT-1002",
    email: "ethan@mail.com",
    phone: "+1 415 555 0189",
    city: "Los Angeles, CA",
    status: "inactive",
    totalBookings: 2,
    lastBooking: "2026-04-19",
    joinedDate: "2025-02-15",
  },
  {
    id: "3",
    name: "Sophie Bennett",
    patientId: "PAT-1003",
    email: "sophie@mail.com",
    phone: "+1 415 555 0190",
    city: "New York, NY",
    status: "blocked",
    totalBookings: 0,
    lastBooking: "2026-04-18",
    joinedDate: "2025-02-16",
  },
  {
    id: "4",
    name: "Daniel Nguyen",
    patientId: "PAT-1004",
    email: "daniel@mail.com",
    phone: "+1 415 555 0191",
    city: "Chicago, IL",
    status: "active",
    totalBookings: 3,
    lastBooking: "2026-04-21",
    joinedDate: "2025-02-17",
  },
  {
    id: "5",
    name: "Zoe Robinson",
    patientId: "PAT-1005",
    email: "zoe@mail.com",
    phone: "+1 415 555 0192",
    city: "Boston, MA",
    status: "active",
    totalBookings: 1,
    lastBooking: "2026-04-22",
    joinedDate: "2025-02-18",
  },
  {
    id: "6",
    name: "Liam Johnson",
    patientId: "PAT-1006",
    email: "liam@mail.com",
    phone: "+1 415 555 0193",
    city: "Seattle, WA",
    status: "inactive",
    totalBookings: 0,
    lastBooking: "2026-04-23",
    joinedDate: "2025-02-19",
  },
  {
    id: "7",
    name: "Emma Davis",
    patientId: "PAT-1007",
    email: "emma@mail.com",
    phone: "+1 415 555 0194",
    city: "Denver, CO",
    status: "active",
    totalBookings: 2,
    lastBooking: "2026-04-24",
    joinedDate: "2025-02-20",
  },
  {
    id: "8",
    name: "Noah Wilson",
    patientId: "PAT-1008",
    email: "noah@mail.com",
    phone: "+1 415 555 0195",
    city: "Austin, TX",
    status: "active",
    totalBookings: 1,
    lastBooking: "2026-04-25",
    joinedDate: "2025-02-21",
  },
  {
    id: "9",
    name: "Ava Lee",
    patientId: "PAT-1009",
    email: "ava@mail.com",
    phone: "+1 415 555 0196",
    city: "Miami, FL",
    status: "active",
    totalBookings: 0,
    lastBooking: "2026-04-26",
    joinedDate: "2025-02-22",
  },
  {
    id: "10",
    name: "Lucas Martinez",
    patientId: "PAT-1010",
    email: "lucas@mail.com",
    phone: "+1 415 555 0197",
    city: "Portland, OR",
    status: "active",
    totalBookings: 1,
    lastBooking: "2026-04-27",
    joinedDate: "2025-02-23",
  },
];
