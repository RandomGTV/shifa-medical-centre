import "server-only";
import { clinic } from "@/data/clinic";
import { readOverrides } from "@/lib/store";

/**
 * The fields staff can edit from /admin.
 *
 * Everything else on the site still lives in src/data/*.ts and changes by
 * editing code — deliberately. These are the values that go stale (a number
 * changes, hours shift, the clinic moves a bay) and that nobody should need a
 * developer for.
 */
export const EDITABLE = [
  { key: "name", label: "Clinic name", group: "Identity" },
  { key: "shortName", label: "Short name (header, footer)", group: "Identity" },
  { key: "tagline", label: "Tagline", group: "Identity" },

  { key: "phone", label: "Phone, as displayed", group: "Contact", hint: "e.g. 0494 258 58 58" },
  { key: "phoneDigits", label: "Phone, digits only", group: "Contact", hint: "Used for the tel: link. e.g. 04942585858" },
  { key: "phoneAlt", label: "Secondary phone, as displayed", group: "Contact", hint: "e.g. 0494 258 58 59" },
  { key: "phoneAltDigits", label: "Secondary phone digits", group: "Contact", hint: "e.g. 04942585859" },
  { key: "whatsapp", label: "WhatsApp number", group: "Contact", hint: "Country code, no + and no spaces. e.g. 918086585859" },
  { key: "whatsappDisplay", label: "WhatsApp display", group: "Contact", hint: "e.g. +91 80865 85859" },
  { key: "emergency", label: "Emergency / casualty number", group: "Contact" },
  { key: "email", label: "Email", group: "Contact" },

  { key: "addressLine1", label: "Address line 1", group: "Address" },
  { key: "addressLine2", label: "Address line 2", group: "Address" },
  { key: "pincode", label: "PIN code", group: "Address" },
  { key: "mapEmbed", label: "Google Maps embed URL", group: "Address", hint: "Maps → Share → Embed a map → copy the src", multiline: true },
  { key: "mapLink", label: "Google Maps link", group: "Address", multiline: true },

  { key: "weekdayDays", label: "Weekday label", group: "Timings", hint: "e.g. Monday – Saturday" },
  { key: "weekdayMorning", label: "Weekday morning OP", group: "Timings" },
  { key: "weekdayEvening", label: "Weekday evening OP", group: "Timings" },
  { key: "sundayDays", label: "Sunday label", group: "Timings" },
  { key: "sundayMorning", label: "Sunday OP", group: "Timings" },
  { key: "sundayEvening", label: "Sunday evening", group: "Timings", hint: 'Write "Closed" if there is no evening session' },
  { key: "emergencyNote", label: "Round-the-clock note", group: "Timings" },
] as const;

export type EditableKey = (typeof EDITABLE)[number]["key"];

/** The defaults, read out of src/data/clinic.ts. */
export function defaults(): Record<EditableKey, string> {
  return {
    name: clinic.name,
    shortName: clinic.shortName,
    tagline: clinic.tagline,
    phone: clinic.phone,
    phoneDigits: clinic.phoneHref.replace("tel:", ""),
    phoneAlt: clinic.phoneAlt,
    phoneAltDigits: clinic.phoneAltHref.replace("tel:", ""),
    whatsapp: clinic.whatsapp,
    whatsappDisplay: clinic.whatsappDisplay,
    emergency: clinic.emergency,
    email: clinic.email,
    addressLine1: clinic.address.line1,
    addressLine2: clinic.address.line2,
    pincode: clinic.address.pincode,
    mapEmbed: clinic.mapEmbed,
    mapLink: clinic.mapLink,
    weekdayDays: clinic.hours[0].days,
    weekdayMorning: clinic.hours[0].morning,
    weekdayEvening: clinic.hours[0].evening,
    sundayDays: clinic.hours[1].days,
    sundayMorning: clinic.hours[1].morning,
    sundayEvening: clinic.hours[1].evening,
    emergencyNote: clinic.emergencyNote,
  };
}

/** What the site renders: the data files, with any saved edits laid over the top. */
export type SiteContent = {
  name: string;
  shortName: string;
  tagline: string;
  established: number;
  phone: string;
  phoneHref: string;
  phoneAlt: string;
  phoneAltHref: string;
  whatsapp: string;
  whatsappDisplay: string;
  emergency: string;
  email: string;
  investorEmail: string;
  address: { line1: string; line2: string; state: string; pincode: string };
  mapEmbed: string;
  mapLink: string;
  hours: { days: string; morning: string; evening: string }[];
  emergencyNote: string;
  schedule: [string, string][][];
  languages: string[];
  insurers: string[];
  heroImages: {
    src: string;
    alt: string;
    caption: string;
    headline: string;
    body: string;
  }[];
  facadeBays: string[];
};

export async function getSiteContent(): Promise<SiteContent> {
  const saved = await readOverrides();
  const v = { ...defaults(), ...saved } as Record<EditableKey, string>;

  return {
    name: v.name,
    shortName: v.shortName,
    tagline: v.tagline,
    established: clinic.established,
    phone: v.phone,
    phoneHref: `tel:${v.phoneDigits.replace(/[^\d+]/g, "")}`,
    phoneAlt: v.phoneAlt,
    phoneAltHref: `tel:${v.phoneAltDigits.replace(/[^\d+]/g, "")}`,
    whatsapp: v.whatsapp.replace(/\D/g, ""),
    whatsappDisplay: v.whatsappDisplay,
    emergency: v.emergency,
    email: v.email,
    investorEmail: clinic.investorEmail,
    address: {
      line1: v.addressLine1,
      line2: v.addressLine2,
      state: clinic.address.state,
      pincode: v.pincode,
    },
    mapEmbed: v.mapEmbed,
    mapLink: v.mapLink,
    hours: [
      { days: v.weekdayDays, morning: v.weekdayMorning, evening: v.weekdayEvening },
      { days: v.sundayDays, morning: v.sundayMorning, evening: v.sundayEvening },
    ],
    emergencyNote: v.emergencyNote,
    schedule: clinic.schedule.map((day) => day.map(([a, b]) => [a, b] as [string, string])),
    languages: [...clinic.languages],
    insurers: [...clinic.insurers],
    heroImages: [...clinic.heroImages],
    facadeBays: [...clinic.facadeBays],
  };
}
