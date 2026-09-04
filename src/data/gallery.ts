export type GalleryItem = {
  id: string;
  title: string;
  category: "Facility" | "Camps & Outreach" | "Results" | "Team";
  caption: string;
  /**
   * Drop a photo into /public/gallery/ and put the path here, e.g. "/gallery/op-wing.jpg".
   * Leave it out and the site renders a styled placeholder tile instead — the layout never breaks.
   */
  image?: string;
  tall?: boolean;
};

export const galleryCategories = [
  "All",
  "Facility",
  "Camps & Outreach",
  "Results",
  "Team",
] as const;

export const gallery: GalleryItem[] = [
  {
    id: "xray-500ma",
    title: "500 mA Digital X-Ray Suite",
    category: "Facility",
    caption: "High-frequency 500 mA radiography system for crystal-clear chest, trauma and bone imaging.",
    image: "/gallery/xray-500ma.jpg",
    tall: true,
  },
  {
    id: "op-wing",
    title: "Specialist Outpatient Wing",
    category: "Facility",
    caption: "Naturally lit consulting corridors and consultation chambers for visiting specialists.",
    image: "/gallery/op-wing.jpg",
    tall: true,
  },
  {
    id: "lab",
    title: "Diagnostic Pathology Lab",
    category: "Facility",
    caption: "Automated analysers for LFT, TFT, Lipid, Blood Sugar, CBC, Vitamins & Urine microscopy.",
    image: "/gallery/lab.jpg",
  },
  {
    id: "diabetes-camp",
    title: "Diabetes & Metabolic Screening",
    category: "Camps & Outreach",
    caption: "Free HbA1c and glucose screening drives at community panchayat centres.",
  },
  {
    id: "acne-result",
    title: "Dermatological Care · 12 weeks",
    category: "Results",
    caption: "Medical dermatological therapy for severe acne. Published with written consent.",
    tall: true,
  },
  {
    id: "team-photo",
    title: "Clinical Staff & Specialists",
    category: "Team",
    caption: "Consultants, laboratory technicians, and dedicated patient care staff.",
    tall: true,
  },
  {
    id: "front-desk",
    title: "Front Desk & Reception",
    category: "Team",
    caption: "Registration, appointment token booking, and WhatsApp report dispatch.",
  },
];
