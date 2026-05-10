// HoloCare — Integrated Virtual Clinic
// js/data/specialties.js — Medical Specialties Data

window.HoloCareSpecialties = [
  {
    id: "emergency",
    name: "Emergency Medicine",
    icon: "siren",
    color: "#EF4444",
    bgColor: "#FEF2F2",
    description: "Life-threatening & urgent care",
    commonConditions: ["chest-pain", "severe-allergic-reaction", "stroke-symptoms"],
    isEmergency: true,
    conditionCount: 5
  },
  {
    id: "general",
    name: "General Practice",
    icon: "stethoscope",
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    description: "Everyday health concerns & checkups",
    commonConditions: ["fever-cough", "fatigue", "cold-flu"],
    isEmergency: false,
    conditionCount: 6
  },
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "heart-pulse",
    color: "#EF4444",
    bgColor: "#FEF2F2",
    description: "Heart & cardiovascular system",
    commonConditions: ["chest-pain", "palpitations", "hypertension"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "brain",
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    description: "Brain, spine & nervous system",
    commonConditions: ["dizziness", "severe-headache", "migraine"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "shield",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    description: "Skin, hair & nail conditions",
    commonConditions: ["skin-rash", "acne", "eczema"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    icon: "bone",
    color: "#6366F1",
    bgColor: "#EEF2FF",
    description: "Bones, joints & musculoskeletal",
    commonConditions: ["back-pain", "joint-pain", "sports-injury"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "baby",
    color: "#10B981",
    bgColor: "#ECFDF5",
    description: "Children's health & development",
    commonConditions: ["fever-cough", "ear-pain", "rash-child"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: "eye",
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    description: "Eyes & vision care",
    commonConditions: ["eye-redness", "blurred-vision", "eye-pain"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "ent",
    name: "ENT",
    icon: "ear",
    color: "#EC4899",
    bgColor: "#FDF2F8",
    description: "Ear, nose & throat",
    commonConditions: ["ear-pain", "sore-throat", "nasal-congestion"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: "activity",
    color: "#F97316",
    bgColor: "#FFF7ED",
    description: "Digestive system & gut health",
    commonConditions: ["abdominal-pain", "nausea", "heartburn"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    icon: "wind",
    color: "#14B8A6",
    bgColor: "#F0FDFA",
    description: "Lungs & respiratory system",
    commonConditions: ["shortness-of-breath", "chronic-cough", "asthma"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    icon: "zap",
    color: "#EAB308",
    bgColor: "#FEFCE8",
    description: "Hormones & metabolic disorders",
    commonConditions: ["diabetes-symptoms", "thyroid-issues", "fatigue"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "nephrology",
    name: "Nephrology",
    icon: "droplets",
    color: "#06B6D4",
    bgColor: "#ECFEFF",
    description: "Kidney health & urinary system",
    commonConditions: ["kidney-pain", "urinary-issues", "swelling"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "urology",
    name: "Urology",
    icon: "flask-conical",
    color: "#84CC16",
    bgColor: "#F7FEE7",
    description: "Urinary tract & reproductive health",
    commonConditions: ["urinary-issues", "pelvic-pain", "kidney-stones"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "gynecology",
    name: "Gynecology",
    icon: "heart",
    color: "#EC4899",
    bgColor: "#FDF2F8",
    description: "Women's reproductive health",
    commonConditions: ["pelvic-pain", "menstrual-issues", "vaginal-discomfort"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "obstetrics",
    name: "Obstetrics",
    icon: "baby",
    color: "#F472B6",
    bgColor: "#FFF1F5",
    description: "Pregnancy & childbirth care",
    commonConditions: ["morning-sickness", "pregnancy-pain", "prenatal-concerns"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    icon: "brain-circuit",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    description: "Mental health & psychiatric disorders",
    commonConditions: ["anxiety-attack", "depression", "insomnia"],
    isEmergency: false,
    conditionCount: 4
  },
  {
    id: "psychology",
    name: "Psychology",
    icon: "smile",
    color: "#A78BFA",
    bgColor: "#F5F3FF",
    description: "Behavioral health & counseling",
    commonConditions: ["pre-exam-anxiety", "stress", "phobia"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "oncology",
    name: "Oncology",
    icon: "microscope",
    color: "#64748B",
    bgColor: "#F8FAFC",
    description: "Cancer screening & treatment guidance",
    commonConditions: ["unexplained-lump", "unexplained-weight-loss", "fatigue"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "hematology",
    name: "Hematology",
    icon: "droplet",
    color: "#DC2626",
    bgColor: "#FEF2F2",
    description: "Blood disorders & conditions",
    commonConditions: ["anemia", "bruising", "fatigue"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "rheumatology",
    name: "Rheumatology",
    icon: "hand",
    color: "#059669",
    bgColor: "#ECFDF5",
    description: "Autoimmune & joint inflammation",
    commonConditions: ["joint-swelling", "morning-stiffness", "lupus-symptoms"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "infectious",
    name: "Infectious Disease",
    icon: "virus",
    color: "#65A30D",
    bgColor: "#F7FEE7",
    description: "Infections, viruses & bacteria",
    commonConditions: ["fever-cough", "skin-infection", "flu"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "allergy",
    name: "Allergy & Immunology",
    icon: "shield-alert",
    color: "#D97706",
    bgColor: "#FFFBEB",
    description: "Allergies & immune system disorders",
    commonConditions: ["allergic-reaction", "food-allergy", "seasonal-allergy"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "dentistry",
    name: "Dentistry",
    icon: "smile",
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    description: "Oral & dental health",
    commonConditions: ["toothache", "gum-pain", "tooth-sensitivity"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "nutrition",
    name: "Nutrition & Dietetics",
    icon: "salad",
    color: "#22C55E",
    bgColor: "#F0FDF4",
    description: "Diet, nutrition & metabolic health",
    commonConditions: ["weight-issues", "digestive-health", "nutritional-deficiency"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    icon: "dumbbell",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
    description: "Physical rehabilitation & mobility",
    commonConditions: ["back-pain", "sports-injury", "post-surgery-rehab"],
    isEmergency: false,
    conditionCount: 3
  },
  {
    id: "sports",
    name: "Sports Medicine",
    icon: "trophy",
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    description: "Athletic injuries & performance",
    commonConditions: ["sports-injury", "muscle-strain", "overuse-injury"],
    isEmergency: false,
    conditionCount: 3
  }
];
