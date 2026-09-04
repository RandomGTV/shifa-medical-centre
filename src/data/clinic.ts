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
  established: 2008,

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
      alt: "Shifa Medical Centre front architectural elevation — modern blue reflective glass facade with golden framing in Vailathur, Tirur",
      caption: "Front elevation · Vailathur, Tirur",
      headline: "The whole visit, under one roof.",
      body: "Super Specialist consultations, 500 mA digital X-Ray, diagnostic laboratory, and in-house pharmacy under one roof in Vailathur, Tirur. Best in the town.",
    },
    {
      src: "/hero/facade-aerial.jpg",
      alt: "Shifa Medical Centre modern architectural perspective showing forecourt, parking, and multi-story facade in Vailathur, Tirur",
      caption: "Architectural forecourt & parking",
      headline: "Room to park. Step-free to the door.",
      body: "Spacious paved forecourt in Vailathur, Tirur with ground-level parking and step-free entry, making visits easy for elderly patients and families.",
    },
    {
      src: "/hero/facade-side.jpg",
      alt: "Shifa Medical Centre ground floor entrance and polyclinic bays in Vailathur, Tirur",
      caption: "Ground floor entrance & diagnostics",
      headline: "Mon – Sat: 7 AM to 8 PM.",
      body: "Working hours from 7:00 AM to 8:00 PM, Monday to Saturday. Sample collection, 500 mA digital X-Ray, diagnostic laboratory, and in-house pharmacy open throughout the day. Closed on Sundays.",
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

  // Official booking numbers - Mobile is first priority
  whatsapp: "918086585859",
  whatsappDisplay: "+91 80865 85859",
  phone: "+91 80865 85859",
  phoneHref: "tel:+918086585859",
  phoneAlt: "0494 258 58 58",
  phoneAltHref: "tel:04942585858",
  emergency: "+91 80865 85859",
  email: "shifavailathur@gmail.com",
  // Shown only on the unlisted /investors page.
  investorEmail: "shifavailathur@gmail.com",

  address: {
    line1: "7/228-B, Chelatt Arcade Building",
    line2: "Vailathur, Tirur",
    district: "Malappuram",
    state: "Kerala",
    pincode: "676106",
  },

  // Paste the "Embed a map" src from Google Maps → Share → Embed
  mapEmbed:
    "https://www.google.com/maps?q=Shifa+Medical+Centre+Chelatt+Arcade+Building+Vailathur+Tirur+Malappuram&output=embed",
  mapLink: "https://maps.google.com/?q=Shifa+Medical+Centre+Chelatt+Arcade+Building+Vailathur+Tirur+Malappuram",

  hours: [
    { days: "Monday – Saturday", morning: "7:00 AM – 8:00 PM", evening: "Open throughout the day" },
    { days: "Sunday", morning: "Closed", evening: "Closed" },
  ],
  emergencyNote: "Working hours: 7:00 AM to 8:00 PM (Monday – Saturday). Closed on Sundays.",

  /**
   * Continuous working schedule: 7:00 AM to 8:00 PM (07:00 to 20:00).
   * Indexed by JavaScript day number: 0 = Sunday.
   * Sunday is not a working day.
   */
  schedule: [
    [], // Sun: Closed
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
  { value: "18+", label: "Years serving families since 2008" },
  { value: "6", label: "Super speciality departments" },
  { value: "500 mA", label: "Digital X-Ray on-site" },
  { value: "12 min", label: "Average waiting time" },
];

export const trustPoints = [
  {
    title: "Clinical excellence",
    body: "Infection control, digital diagnostic accuracy, and medicine storage follow strict clinical standards.",
  },
  {
    title: "One family, one file",
    body: "Every visit, prescription, and test report sits in a single digital file your doctor opens in seconds.",
  },
  {
    title: "Honest billing",
    body: "Consultation and test rates are clearly stated at the front desk. No hidden costs or unnecessary packages.",
  },
  {
    title: "Malayalam first",
    body: "Your doctor explains your diagnosis, prescription, and recovery plan in Malayalam first, with consultations also in English, Hindi, Tamil, and Arabic.",
  },
];
