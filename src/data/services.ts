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
    summary: "High-frequency 500 mA digital radiology unit providing clear bone and chest imaging.",
    details:
      "Our 500 mA high-frequency digital X-Ray unit provides clear bone and chest detail with low radiation exposure. We capture chest, orthopedic trauma, spine, and joint views, with digital images reviewed immediately by our doctors.",
    includes: [
      "500 mA high-frequency digital radiography system",
      "Chest, spine, pelvis, joints & extremity views",
      "Low-radiation digital plate acquisition",
      "Immediate on-site review by consulting doctors",
      "High-resolution digital X-ray copy shared via WhatsApp",
    ],
    price: "From ₹350",
    featured: true,
  },
  {
    slug: "laboratory",
    name: "Diagnostic Laboratory",
    icon: "TestTube",
    summary: "In-house pathology: LFT, TFT, lipid profile, blood sugar, urine, and hematology.",
    details:
      "Fully equipped diagnostic laboratory operating from 7:00 AM. We run routine blood investigations, biochemical assays, and hormone profiles in-house. All routine test reports are verified and sent directly to your WhatsApp as a digital PDF by evening.",
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
    summary: "Fully stocked dispensary with genuine prescription medicines, paediatric syrups, and medical supplies.",
    details:
      "Located next to the consulting rooms and reception lobby. We stock authentic prescription medications, temperature-controlled insulins, paediatric drops, and first-aid surgical supplies, with clear dosage instructions printed on every bill.",
    includes: [
      "Prompt prescription dispensing after doctor consultation",
      "Maintenance medications (Diabetes, Cardiac, Thyroid, Arthritis)",
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
    summary: "Consultant orthopaedic care for bone fractures, joint pain, spine conditions, and arthritis.",
    details:
      "Consultations for traumatic injuries, fractures, back and neck pain, ligament injuries, and joint degeneration. Supported by our on-site 500 mA digital X-Ray for immediate diagnosis and treatment.",
    includes: [
      "Bone fracture assessment, reduction and casting",
      "Osteoarthritis, rheumatoid joint & knee pain care",
      "Spine, lumbar disc & neck cervical pain management",
      "Sports injury evaluation and recovery guidance",
      "Direct on-site 500 mA digital X-Ray integration",
    ],
    price: "Consultation tariff",
    featured: true,
  },
  {
    slug: "dermatology",
    name: "Dermatologist",
    icon: "Sparkles",
    summary: "Doctor consultations for skin, hair, nail, and allergy conditions.",
    details:
      "Medical dermatology care for acute and chronic skin conditions. We focus on careful clinical examination and proven medical treatments.",
    includes: [
      "Acne, eczema, dermatitis & psoriasis care",
      "Hair fall, alopecia, dandruff & scalp treatments",
      "Fungal, bacterial and viral skin infection therapy",
      "Chronic urticaria and skin allergy evaluations",
      "Written prescriptions with clear usage instructions",
    ],
    price: "Consultation tariff",
    featured: true,
  },
  {
    slug: "neurology",
    name: "Neurologist",
    icon: "Brain",
    summary: "Super specialist care for brain, spine, nerve, and chronic headache conditions.",
    details:
      "Consultant neurological care for disorders of the nervous system, providing timely specialist consultations in Vailathur, Tirur without the need to travel to distant hospitals.",
    includes: [
      "Chronic headaches, severe migraines & facial neuralgia",
      "Peripheral neuropathy, numbness, tingling & burning sensations",
      "Post-stroke follow-up & preventive care",
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
    summary: "Doctor consultations for diabetes, thyroid, and hormonal conditions.",
    details:
      "Care for endocrine and metabolic conditions, working closely with our diagnostic laboratory for same-day HbA1c, thyroid (TFT), and blood sugar testing.",
    includes: [
      "Type 1 and Type 2 diabetes comprehensive control",
      "Thyroid conditions — Hypothyroidism, Hyperthyroidism, Goitre",
      "Metabolic health, lipid disorders & weight management",
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
    summary: "Care for urinary tract conditions, kidney stones, prostate health, and men's health.",
    details:
      "Consultant urology care covering kidney stones, urinary tract infections, prostate enlargement, and men's health. On-site diagnostic testing helps evaluate acute urinary symptoms promptly.",
    includes: [
      "Kidney stones (calculus) diagnosis and medical management",
      "Prostate enlargement (BPH) & urinary flow evaluation",
      "Recurrent urinary tract infections (UTI) in men and women",
      "Andrology & male health consultations",
      "Urinary incontinence and bladder evaluation",
    ],
    price: "Specialist consultation",
    featured: true,
  },
  {
    slug: "rheumatology",
    name: "Rheumatologist",
    icon: "Activity",
    summary: "Specialist care for arthritis, autoimmune diseases, and joint inflammation.",
    details:
      "Consultations for systemic autoimmune conditions and inflammatory arthritis. Early diagnosis and careful medical therapy help relieve pain and protect joint mobility.",
    includes: [
      "Rheumatoid arthritis (RA) & Ankylosing Spondylitis",
      "Systemic Lupus Erythematosus (SLE) & connective tissue disorders",
      "Gout, hyperuricemia & crystal arthropathies",
      "Fibromyalgia and chronic musculoskeletal pain",
      "Targeted disease-modifying antirheumatic therapy (DMARDs)",
    ],
    price: "Specialist consultation",
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);
