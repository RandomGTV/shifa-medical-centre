export type Doctor = {
  slug: string;
  name: string;
  qualification: string;
  speciality: string;
  experience: string;
  days: string;
  timing: string;
  languages: string[];
  bio: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-shameer-k",
    name: "Dr. Shameer K.",
    qualification: "MBBS, MS (Orthopaedics)",
    speciality: "Orthopedic",
    experience: "16 years",
    days: "Monday, Wednesday, Friday",
    timing: "5:00 PM – 8:30 PM",
    languages: ["Malayalam", "English", "Hindi"],
    bio: "Senior orthopaedic surgeon treating fractures, joint pain, spinal conditions, and sports injuries, supported by immediate on-site 500 mA digital X-Ray imaging.",
  },
  {
    slug: "dr-anjali-menon",
    name: "Dr. Anjali Menon",
    qualification: "MBBS, MD (Dermatology)",
    speciality: "Dermatologist",
    experience: "12 years",
    days: "Tuesday, Thursday, Saturday",
    timing: "10:00 AM – 1:00 PM",
    languages: ["Malayalam", "English"],
    bio: "Clinical dermatologist treating acne, psoriasis, eczema, hair loss, and allergic skin conditions with careful medical consultations.",
  },
  {
    slug: "dr-harish-kumar",
    name: "Dr. Harish Kumar",
    qualification: "MBBS, MD (Med), DM (Neurology)",
    speciality: "Neurologist",
    experience: "15 years",
    days: "Tuesday, Friday",
    timing: "4:30 PM – 7:30 PM",
    languages: ["Malayalam", "English", "Hindi"],
    bio: "Consultant neurologist evaluating and treating migraines, persistent headaches, nerve pain, numbness, stroke recovery, and tremor disorders.",
  },
  {
    slug: "dr-firoz-khan",
    name: "Dr. Firoz Khan",
    qualification: "MBBS, MD (Med), DM (Endocrinology)",
    speciality: "Endocrinology",
    experience: "14 years",
    days: "Monday, Thursday",
    timing: "10:00 AM – 1:30 PM",
    languages: ["Malayalam", "English", "Arabic"],
    bio: "Consultant endocrinologist treating complex diabetes, thyroid conditions, and hormonal imbalances, backed by our same-day laboratory blood profiles.",
  },
  {
    slug: "dr-rasheed-mohammed",
    name: "Dr. Rasheed Mohammed",
    qualification: "MBBS, MS (Surgery), MCh (Urology)",
    speciality: "Urology",
    experience: "17 years",
    days: "Wednesday, Saturday",
    timing: "4:00 PM – 7:00 PM",
    languages: ["Malayalam", "English", "Arabic"],
    bio: "Consultant urologist treating kidney stones, prostate enlargement (BPH), recurrent urinary infections, and men's health concerns.",
  },
  {
    slug: "dr-nabeel-k",
    name: "Dr. Nabeel K.",
    qualification: "MBBS, MD (Med), DM (Rheumatology)",
    speciality: "Rheumatologist",
    experience: "11 years",
    days: "Monday, Saturday",
    timing: "10:30 AM – 2:00 PM",
    languages: ["Malayalam", "English"],
    bio: "Consultant rheumatologist treating rheumatoid arthritis, ankylosing spondylitis, lupus, gout, and long-term joint pain.",
  },
];
