/**
 * "Medical Fields" — the clinical specialities patients search for by name.
 * These sit under Speciality / Super Speciality Doctors on the signboard; the
 * bays themselves are in services.ts.
 */
export type Speciality = {
  slug: string;
  name: string;
  icon: string; // lucide-react name, see src/components/Icon.tsx
  body: string;
};

export const specialities: Speciality[] = [
  {
    slug: "dermatology",
    name: "Dermatologist",
    icon: "Sparkles",
    body: "Comprehensive clinical care for chronic skin diseases, acne, eczema, psoriasis, hair fall, fungal infections, and allergic dermatological conditions.",
  },
  {
    slug: "neurology",
    name: "Neurologist",
    icon: "Brain",
    body: "Super-specialist evaluation of brain, spine, and nervous system disorders — migraines, chronic headaches, neuropathy, tremors, and stroke rehabilitation.",
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    icon: "Dna",
    body: "Specialised management of hormone and metabolic disorders — complex diabetes control, thyroid conditions, metabolic syndrome, and pituitary health.",
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Droplets",
    body: "Expert care for urinary tract conditions, kidney stones, prostate health, recurrent infections, and male reproductive health (andrology).",
  },
  {
    slug: "rheumatology",
    name: "Rheumatologist",
    icon: "Activity",
    body: "Specialised diagnosis and therapy for arthritis, chronic joint pain, autoimmune diseases, lupus (SLE), gout, and musculoskeletal inflammation.",
  },
  {
    slug: "orthopedic",
    name: "Orthopedic",
    icon: "Bone",
    body: "Treatment for bone fractures, spine conditions, knee and back pain, sports injuries, and arthritis, with immediate on-site 500 mA digital X-Ray support.",
  },
];
