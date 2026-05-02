export type DentistProfileData = {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  languages: string[];
  email: string;
  phone: string;
  location: string;
  experience: string;
  stats: {
    totalBookings: string;
    revenue: string;
    cancellationRate: string;
    estimateAccuracy: string;
    avgResponseTime: string;
  };
  profileInfo: {
    fullName: string;
    license: string;
    specialty: string;
    yearsOfPractice: string;
    clinic: string;
    address: string;
    bio: string;
  };
  procedures: Array<{
    procedure: string;
    category: string;
    price: string;
    bookings: string;
  }>;
  education: {
    year: string;
    degree: string;
    institution: string;
  };
  verification: {
    score: string;
    title: string;
    subtitle: string;
    phaseBreakdown: Array<{
      name: string;
      percent: number;
      date: string;
      status: string;
    }>;
  };
  performance: Array<{
    label: string;
    value: number;
    color: string;
  }>;
};
