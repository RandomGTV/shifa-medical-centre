export type Service = {
  slug: string;
  name: string;
  icon: string; // lucide-react icon name, see src/components/Icon.tsx
  summary: string;
  details: string;
  includes: string[];
  price: string;
  featured?: boolean;
};

/**
 * These are the eight bays written across the front of the building, in the same
 * order as the signboard. Keep this list and the shopfront in step — a patient who
 * has stood outside should recognise the site immediately.
 */
export const services: Service[] = [
  {
    slug: "x-ray",
    name: "500 mA Digital X-Ray",
    icon: "FileScan",
    summary: "High-frequency 500 mA digital radiology unit delivering sharp bone and chest imaging.",
    details:
      "Equipped with an advanced 500 mA high-frequency digital X-Ray system delivering crystal-clear bone and chest detail with minimal radiation dose. Covers chest radiography, trauma orthopaedics, spine, abdomen and extremity views, with instant digital plates reviewed on the spot by our doctors.",
    includes: [
      "500 mA high-frequency digital radiography system",
      "Chest, spine, pelvis, joints & extremity examinations",
      "Low-radiation exposure digital plate acquisition",
      "Immediate on-site review by treating physicians",
      "High-resolution digital X-ray copy shared via WhatsApp",
    ],
    price: "From ₹350",
    featured: true,
  },
  {
    slug: "laboratory",
    name: "Diagnostic Laboratory",
    icon: "TestTube",
    summary: "Comprehensive in-house pathology: LFT, TFT, Lipid profile, Blood sugar, Urine & Hematology.",
    details:
      "Fully automated diagnostic laboratory operating from 7:00 AM. Comprehensive in-house blood investigations, biochemical assays, hormone analyses, and routine microscopy. All routine test reports are validated and delivered directly to your WhatsApp as a digital PDF the same evening.",
    includes: [
      "Liver Function Test (LFT) — Bilirubin, SGOT/SGPT, Alkaline Phosphatase",
      "Thyroid Function Test (TFT) — T3, T4, TSH assays",
      "Lipid Profile — Total Cholesterol, Triglycerides, HDL, LDL",
      "Blood Sugar Tests — Fasting (FBS), Post-Prandial (PPBS), RBS & HbA1c",
      "General Hematology — Complete Blood Count (CBC), ESR, Blood Grouping",
      "Vitamin Profiles — Vitamin D3 & Vitamin B12 quantitative tests",
      "Routine Urine Examination — Albumin, Sugar, Pus cells & Microscopic study",
      "Same-evening digital reports delivered directly to WhatsApp",
    ],
    price: "From ₹150",
    featured: true,
  },
  {
    slug: "pharmacy",
    name: "In-House Pharmacy",
    icon: "Pill",
    summary: "Fully stocked dispensary providing authentic prescription medicines, surgicals, and cold-chain care.",
    details:
      "Conveniently situated right next to the specialist consulting suites and reception lobby. Stocked with genuine, temperature-controlled prescription medications, paediatric formulations, dermatological creams, chronic disease maintenance drugs, and first-aid surgical supplies. Clear dosage instructions provided with every dispense.",
    includes: [
      "Instant prescription dispensing after specialist consultation",
      "Chronic therapy medications (Diabetes, Cardiac, Thyroid, Arthritis)",
      "Clinical dermatology creams, lotions, and targeted skincare",
      "Temperature-monitored refrigeration for insulins & biologics",
      "Paediatric suspensions, oral drops & measured dosage droppers",
      "First-aid, dressing materials, bandages & surgical consumables",
      "Computerised billing with transparent printed MRP rates",
    ],
    price: "MRP Billing",
    featured: true,
  },
  {
    slug: "orthopedic",
    name: "Orthopedic",
    icon: "Bone",
    summary: "Consultant orthopaedic care for bone fractures, joint pain, spine and arthritis.",
    details:
      "Specialist orthopaedic consultation for traumatic injuries, fractures, back and neck pain, ligament tears, and degenerative joint conditions. Supported immediately by our on-site 500 mA digital X-Ray for fast same-visit diagnosis and management.",
    includes: [
      "Bone fracture assessment, reduction and casting",
      "Osteoarthritis, rheumatoid joint & knee pain care",
      "Spine, lumbar disc & neck cervical pain management",
      "Sports injury diagnosis and rehabilitation guidance",
      "Direct on-site 500 mA digital X-Ray integration",
    ],
    price: "Consultation tariff",
    featured: true,
  },
  {
    slug: "dermatology",
    name: "Dermatologist",
    icon: "Sparkles",
    summary: "Clinical dermatologist consultations for skin, hair, nail and allergy disorders.",
    details:
      "Comprehensive medical dermatology for acute and chronic skin ailments. Focuses on honest, clinical evaluations and scientifically grounded treatments without commercial package pressure.",
    includes: [
      "Acne, eczema, dermatitis & psoriasis management",
      "Hair fall, alopecia, dandruff & scalp treatment",
      "Fungal, bacterial and viral skin infection therapy",
      "Chronic urticaria and skin allergy evaluations",
      "Written prescriptions with clear realistic timelines",
    ],
    price: "Consultation tariff",
    featured: true,
  },
  {
    slug: "neurology",
    name: "Neurologist",
    icon: "Brain",
    summary: "Super-specialist care for brain, spine, nerve and chronic headache disorders.",
    details:
      "Consultant neurological opinions for disorders of the central and peripheral nervous system. Timely local consultations so patients avoid tiring travel to tertiary hospitals in Kozhikode.",
    includes: [
      "Chronic headaches, severe migraines & facial neuralgia",
      "Peripheral neuropathy, numbness, tingling & burning feet",
      "Post-stroke follow-up & secondary prevention",
      "Tremors, Parkinsonian symptoms & movement disorders",
      "Epilepsy, seizure follow-up & memory concerns",
    ],
    price: "Specialist consultation",
    featured: true,
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    icon: "Dna",
    summary: "Hormone, diabetes, thyroid and metabolic disorder consultations.",
    details:
      "Dedicated management of endocrine diseases and metabolic disorders. Works closely with our diagnostic laboratory for same-day HbA1c, thyroid (TFT), and metabolic profiling.",
    includes: [
      "Type 1 and Type 2 diabetes comprehensive control",
      "Thyroid disease — Hypothyroidism, Hyperthyroidism, Goitre",
      "Metabolic syndrome, lipid disorders & obesity management",
      "Polycystic Ovarian Syndrome (PCOS) metabolic care",
      "Integrated with same-day in-house hormone tests",
    ],
    price: "Specialist consultation",
    featured: true,
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Droplets",
    summary: "Urinary tract, kidney stone, prostate and male reproductive health.",
    details:
      "Specialist urology care covering kidney stones, urinary tract infections, and male reproductive health (andrology). On-site diagnostic testing provides rapid answers for acute urinary symptoms.",
    includes: [
      "Kidney stones (calculus) diagnosis and medical management",
      "Prostate enlargement (BPH) & urinary flow evaluation",
      "Recurrent urinary tract infections (UTI) in men and women",
      "Andrology & male sexual health consultations",
      "Urinary incontinence and bladder dysfunction review",
    ],
    price: "Specialist consultation",
    featured: true,
  },
  {
    slug: "rheumatology",
    name: "Rheumatologist",
    icon: "Activity",
    summary: "Specialist care for arthritis, autoimmune conditions and joint inflammation.",
    details:
      "Expert rheumatology consultations for systemic autoimmune diseases and destructive arthritis. Accurate early diagnosis prevents permanent joint erosion and restores quality of life.",
    includes: [
      "Rheumatoid arthritis (RA) & Ankylosing Spondylitis",
      "Systemic Lupus Erythematosus (SLE) & connective tissue disorders",
      "Gout, hyperuricemia & crystal arthropathies",
      "Fibromyalgia and chronic widespread musculoskeletal pain",
      "Targeted disease-modifying antirheumatic therapy (DMARDs)",
    ],
    price: "Specialist consultation",
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);
