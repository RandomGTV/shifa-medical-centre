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
    bio: "Senior orthopaedic surgeon specialising in fracture management, joint degeneration, spine pain, and sports injury trauma. Directly utilizes the on-site 500 mA digital X-Ray for rapid diagnosis.",
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
    bio: "Clinical dermatologist experienced in managing severe acne, psoriasis, chronic eczema, hair disorders, and complex skin allergies with evidence-based medical therapies.",
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
    bio: "Consultant neurologist managing migraine, refractory headaches, peripheral neuropathy, post-stroke recovery, epilepsy, and movement disorders.",
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
    bio: "Consultant endocrinologist focusing on complex diabetes, thyroid disorders, metabolic syndrome, and hormonal imbalances, working with in-house laboratory assays.",
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
    bio: "Consultant urologist and andrologist specialising in kidney stone diseases, prostate enlargement (BPH), recurrent UTIs, and male reproductive health.",
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
    bio: "Expert rheumatologist managing rheumatoid arthritis, ankylosing spondylitis, lupus (SLE), gout, and connective tissue autoimmune diseases.",
  },
];
