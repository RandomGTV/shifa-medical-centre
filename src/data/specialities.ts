/**
 * "Medical Fields" — the clinical specialities patients search for by name.
 * These sit under Super Speciality Doctors on the signboard; the
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
    body: "Doctor consultations for acne, eczema, psoriasis, hair loss, fungal infections, and chronic skin allergies.",
  },
  {
    slug: "neurology",
    name: "Neurologist",
    icon: "Brain",
    body: "Super specialist care for migraines, persistent headaches, nerve pain, stroke recovery, and tremor disorders.",
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    icon: "Dna",
    body: "Consultant care for diabetes control, thyroid conditions, metabolic health, and hormonal imbalances.",
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Droplets",
    body: "Treatment for kidney stones, prostate health, recurrent urinary infections, and men's health concerns.",
  },
  {
    slug: "rheumatology",
    name: "Rheumatologist",
    icon: "Activity",
    body: "Medical care for rheumatoid arthritis, chronic joint pain, gout, lupus, and musculoskeletal inflammation.",
  },
  {
    slug: "orthopedic",
    name: "Orthopedic",
    icon: "Bone",
    body: "Treatment for fractures, joint pain, spine and knee conditions, backed by on-site 500 mA digital X-Ray imaging.",
  },
];
