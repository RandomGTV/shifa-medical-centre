/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE FIRST.
 *  Every name, number and address on the website comes from here.
 *  Replace the placeholder values with the clinic's real details.
 * ─────────────────────────────────────────────────────────────
 */

export const clinic = {
  name: "Shifa Medical Centre",
  shortName: "Shifa Medical",
  tagline: "Careful medicine, close to home.",
  established: 2016,

  /**
   * Hero photographs of the building.
   * Save the files into  public/hero/  under these names and this works as-is.
   * The first one is the main frame; the rest appear as selectable thumbnails.
   * Leave the array empty and the hero falls back to a designed navy glass panel —
   * the layout never breaks.
   */
  heroImages: [
    {
      src: "/hero/facade-front.jpg",
      alt: "Shifa Medical Centre from the road — the glass frontage with the department signboard running across the ground floor",
      caption: "The frontage on Ponmundam Bypass",
      headline: "The whole visit, under one roof.",
      body: "Specialist consultations, 500 mA digital X-Ray, diagnostic laboratory, and in-house pharmacy under one roof on the Ponmundam bypass. Avoid unnecessary travel to distant tertiary hospitals.",
    },
    {
      src: "/hero/facade-aerial.jpg",
      alt: "Shifa Medical Centre seen from above, showing the full building, the forecourt and the parking",
      caption: "Forecourt and parking",
      headline: "Room to park. Step-free to the door.",
      body: "A full forecourt off the bypass, covered parking below, and a ramp to the entrance — so bringing an elderly parent here is not a two-person job.",
    },
    {
      src: "/hero/facade-side.jpg",
      alt: "Shifa Medical Centre at sunrise, the ground-floor departments lit behind the glass",
      caption: "Daily OP & Diagnostics",
      headline: "Open from 7 AM to 8 PM.",
      body: "Working hours from 7:00 AM to 8:00 PM. Sample collection, 500 mA digital X-Ray, diagnostic laboratory, and in-house pharmacy open throughout the day.",
    },
  ],

  /** The bays written across the shopfront, left to right. */
  facadeBays: [
    "500 mA Digital X-Ray",
    "Diagnostic Laboratory",
    "In-House Pharmacy",
    "Dermatologist",
    "Neurologist",
    "Endocrinology",
    "Urology",
    "Rheumatologist",
    "Orthopedic",
  ],

  // Official booking numbers from signboard
  whatsapp: "918086585859",
  whatsappDisplay: "+91 80865 85859",
  phone: "0494 258 58 58",
  phoneHref: "tel:04942585858",
  phoneAlt: "0494 258 58 59",
  phoneAltHref: "tel:04942585859",
  emergency: "0494 258 58 59",
  email: "shifavailathur@gmail.com",
  // Shown only on the unlisted /investors page.
  investorEmail: "shifavailathur@gmail.com",

  address: {
    line1: "7/228-B, Chelatt Arcade Building",
    line2: "Ponmundam PO, Vailathur, Tirur",
    district: "Malappuram",
    state: "Kerala",
    pincode: "676106",
  },

  // Paste the "Embed a map" src from Google Maps → Share → Embed
  mapEmbed:
    "https://www.google.com/maps?q=Shifa+Medical+Centre+Chelatt+Arcade+Building+Ponmundam+Vailathur+Tirur+Malappuram&output=embed",
  mapLink: "https://maps.google.com/?q=Shifa+Medical+Centre+Chelatt+Arcade+Building+Ponmundam+Vailathur+Tirur+Malappuram",

  hours: [
    { days: "Monday – Saturday", morning: "7:00 AM – 8:00 PM", evening: "Open throughout the day" },
    { days: "Sunday", morning: "7:00 AM – 8:00 PM", evening: "OP & Diagnostics" },
  ],
  emergencyNote: "Medical Centre working hours: 7:00 AM to 8:00 PM daily",

  /**
   * Continuous working schedule: 7:00 AM to 8:00 PM (07:00 to 20:00).
   * Indexed by JavaScript day number: 0 = Sunday.
   */
  schedule: [
    [["07:00", "20:00"]], // Sun
    [["07:00", "20:00"]], // Mon
    [["07:00", "20:00"]], // Tue
    [["07:00", "20:00"]], // Wed
    [["07:00", "20:00"]], // Thu
    [["07:00", "20:00"]], // Fri
    [["07:00", "20:00"]], // Sat
  ] as [string, string][][],

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },

  languages: ["Malayalam", "English", "Hindi", "Tamil", "Arabic"],

  insurers: [
    "Karunya Arogya Suraksha Padhathi (KASP)",
    "Star Health",
    "Niva Bupa",
    "New India Assurance",
    "ICICI Lombard",
    "CGHS / ESI reimbursement support",
  ],
} as const;

export const stats = [
  { value: "1.2 L+", label: "Patient visits since 2016" },
  { value: "6", label: "Specialist medical departments" },
  { value: "500 mA", label: "Digital X-Ray system" },
  { value: "12 min", label: "Average waiting time" },
];

export const trustPoints = [
  {
    title: "NABH-aligned protocols",
    body: "Infection control, drug storage and record-keeping run on written SOPs, audited every quarter.",
  },
  {
    title: "One family, one file",
    body: "Every visit, prescription and report sits in a single digital record your doctor opens in seconds.",
  },
  {
    title: "Honest billing",
    body: "Consultation and procedure rates are printed at the desk and on this website. No package pressure.",
  },
  {
    title: "Malayalam first",
    body: "Diagnosis, dosage and next steps explained in the language the patient actually thinks in.",
  },
];
