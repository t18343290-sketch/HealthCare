// HoloCare — Integrated Virtual Clinic
// js/data/conditions.js — Health Conditions with Symptom Trees

window.HoloCareConditions = [

  // ─── EMERGENCY MEDICINE ────────────────────────────────────────
  {
    id: "chest-pain",
    specialtyId: ["emergency", "cardiology"],
    name: "Chest Pain",
    severity: "emergency",
    icon: "heart-crack",
    description: "Pressure, tightness or pain in the chest area",
    questions: [
      { id: "q1", question: "How would you describe the chest pain?", type: "single", options: ["Sharp/stabbing", "Pressure/squeezing", "Burning/heartburn", "Dull ache"], emergencyTrigger: ["Pressure/squeezing"] },
      { id: "q2", question: "Do you have any of these symptoms with the pain?", type: "multiple", options: ["Left arm pain", "Jaw pain", "Shortness of breath", "Cold sweats", "Nausea"], emergencyTrigger: ["Left arm pain", "Jaw pain", "Cold sweats"] },
      { id: "q3", question: "How long have you had this pain?", type: "single", options: ["Just started (< 5 min)", "Less than 30 minutes", "30 min – 2 hours", "More than 2 hours"], emergencyTrigger: ["Just started (< 5 min)", "Less than 30 minutes"] },
      { id: "q4", question: "Rate the pain severity (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 7 }
    ],
    recommendationTemplate: {
      low: "Monitor your symptoms. If chest discomfort persists or worsens, seek medical care promptly. Avoid strenuous activity.",
      moderate: "Seek urgent medical attention within the next few hours. Do not drive yourself. Rest and avoid exertion.",
      high: "Go to the emergency room immediately or call emergency services. Do not delay.",
      emergency: "CALL EMERGENCY SERVICES NOW — This may be a heart attack."
    },
    firstAidSteps: [
      "Stop all physical activity and rest immediately",
      "Loosen tight clothing around chest and neck",
      "If prescribed, take nitroglycerin as directed",
      "Chew one aspirin (325mg) if not allergic",
      "Call emergency services or have someone drive you to the ER"
    ],
    redFlags: ["Radiating arm/jaw pain", "Cold sweats", "Shortness of breath", "Nausea with chest pain"],
    didYouKnow: "Heart attacks can present differently in women — burning sensation, jaw pain, and fatigue are common without classic chest pressure.",
    prevention: ["Maintain a healthy weight", "Exercise regularly", "Avoid smoking", "Manage stress", "Regular blood pressure checks"]
  },
  {
    id: "severe-allergic-reaction",
    specialtyId: ["emergency", "allergy"],
    name: "Severe Allergic Reaction",
    severity: "emergency",
    icon: "shield-x",
    description: "Anaphylaxis or severe allergic response",
    questions: [
      { id: "q1", question: "What symptoms are you experiencing?", type: "multiple", options: ["Throat swelling", "Difficulty breathing", "Hives/rash", "Rapid heartbeat", "Dizziness/fainting"], emergencyTrigger: ["Throat swelling", "Difficulty breathing", "Fainting"] },
      { id: "q2", question: "Did you eat or touch something new recently?", type: "single", options: ["Yes – food", "Yes – medication", "Yes – insect sting", "No known trigger"] },
      { id: "q3", question: "Do you have an EpiPen available?", type: "single", options: ["Yes, and I've used it", "Yes, not yet used", "No EpiPen"] }
    ],
    recommendationTemplate: {
      low: "Take an antihistamine and monitor carefully. If symptoms worsen, seek emergency care immediately.",
      moderate: "Seek emergency care now. Allergic reactions can escalate rapidly.",
      high: "Use EpiPen if available and call emergency services immediately.",
      emergency: "USE EPIPEN NOW AND CALL EMERGENCY SERVICES — Anaphylaxis is life-threatening."
    },
    firstAidSteps: [
      "Use EpiPen (epinephrine auto-injector) if available — inject into outer thigh",
      "Call emergency services immediately",
      "Lie down with legs elevated unless breathing is difficult",
      "If breathing is difficult, sit upright",
      "Be prepared to administer CPR",
      "A second EpiPen dose may be needed after 5-15 minutes"
    ],
    redFlags: ["Throat/tongue swelling", "Cannot swallow", "Blue lips", "Loss of consciousness"],
    didYouKnow: "Anaphylaxis can occur within minutes of exposure and even trace amounts of an allergen can trigger a severe reaction.",
    prevention: ["Always carry an EpiPen if you have known severe allergies", "Wear a medical alert bracelet", "Read all food labels carefully"]
  },
  {
    id: "stroke-symptoms",
    specialtyId: ["emergency", "neurology"],
    name: "Stroke Symptoms",
    severity: "emergency",
    icon: "brain",
    description: "Sudden neurological changes – possible stroke",
    questions: [
      { id: "q1", question: "Do you have any of these sudden symptoms?", type: "multiple", options: ["Face drooping (one side)", "Arm weakness", "Speech difficulty", "Severe sudden headache", "Vision loss"], emergencyTrigger: ["Face drooping (one side)", "Arm weakness", "Speech difficulty"] },
      { id: "q2", question: "When did symptoms start?", type: "single", options: ["Right now", "Within the hour", "1–3 hours ago", "More than 3 hours ago"], emergencyTrigger: ["Right now", "Within the hour", "1–3 hours ago"] },
      { id: "q3", question: "Any history of stroke or TIA?", type: "single", options: ["Yes, previous stroke", "Yes, TIA (mini stroke)", "No history"] }
    ],
    recommendationTemplate: {
      low: "Even if symptoms have resolved, see a doctor today — this could be a TIA (warning stroke).",
      moderate: "Go to the ER immediately. Time is brain — every minute matters with stroke.",
      high: "Call emergency services NOW. Do not drive. Stroke treatment is time-critical.",
      emergency: "CALL EMERGENCY SERVICES IMMEDIATELY — FAST: Face drooping, Arm weakness, Speech trouble, Time to call."
    },
    firstAidSteps: [
      "Call emergency services immediately — time is critical",
      "Note the exact time symptoms started",
      "Keep the person calm and still",
      "Do not give food or water (swallowing may be impaired)",
      "Do not give aspirin — strokes can be hemorrhagic"
    ],
    redFlags: ["Sudden facial drooping", "Sudden arm/leg weakness", "Sudden speech problems", "Sudden vision changes"],
    didYouKnow: "Using the FAST acronym (Face, Arms, Speech, Time), bystanders can identify strokes and call for help before permanent damage occurs.",
    prevention: ["Control blood pressure", "Don't smoke", "Maintain healthy weight", "Treat atrial fibrillation"]
  },

  // ─── GENERAL PRACTICE ──────────────────────────────────────────
  {
    id: "fever-cough",
    specialtyId: ["general", "pulmonology", "pediatrics", "infectious"],
    name: "Fever & Cough",
    severity: "moderate",
    icon: "thermometer",
    description: "Elevated temperature with respiratory symptoms",
    questions: [
      { id: "q1", question: "What is your current temperature?", type: "single", options: ["Normal (below 38°C/100.4°F)", "Mild (38–38.9°C / 100.4–102°F)", "High (39–39.9°C / 102–103.9°F)", "Very high (40°C+ / 104°F+)"], emergencyTrigger: ["Very high (40°C+ / 104°F+)"] },
      { id: "q2", question: "How long have you had these symptoms?", type: "single", options: ["Less than 24 hours", "1–3 days", "4–7 days", "More than a week"] },
      { id: "q3", question: "Describe your cough:", type: "single", options: ["Dry/tickling", "Productive with clear mucus", "Productive with yellow/green mucus", "Coughing blood"] , emergencyTrigger: ["Coughing blood"] },
      { id: "q4", question: "Additional symptoms?", type: "multiple", options: ["Body aches", "Sore throat", "Runny nose", "Shortness of breath", "Chest pain", "Confusion"], emergencyTrigger: ["Shortness of breath", "Chest pain", "Confusion"] },
      { id: "q5", question: "Rate your overall discomfort (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "Rest, stay hydrated, and monitor your temperature. Most viral illnesses resolve in 5–7 days with supportive care.",
      moderate: "Rest at home, take paracetamol/ibuprofen for fever, drink plenty of fluids. See a doctor if no improvement in 48 hours.",
      high: "See a doctor today — high fever lasting more than 2 days, productive cough with colored mucus, or worsening symptoms need evaluation.",
      emergency: "Seek emergency care — very high fever with breathing difficulty or confusion is a medical emergency."
    },
    firstAidSteps: [
      "Take paracetamol (acetaminophen) or ibuprofen for fever as per dosage instructions",
      "Stay hydrated — drink water, clear broth, herbal tea",
      "Rest and avoid strenuous activity",
      "Use a cool, damp cloth on forehead for comfort",
      "Monitor temperature every 4 hours"
    ],
    redFlags: ["Difficulty breathing", "Coughing blood", "Temperature over 40°C (104°F)", "Confusion or disorientation", "Stiff neck with fever"],
    didYouKnow: "Fever is a natural immune response — it makes the body less hospitable to pathogens. A mild fever often doesn't need suppression unless it causes significant discomfort.",
    prevention: ["Wash hands frequently", "Get annual flu vaccination", "Avoid close contact with sick individuals", "Maintain a strong immune system through good nutrition and sleep"]
  },
  {
    id: "fatigue",
    specialtyId: ["general", "endocrinology", "hematology", "oncology"],
    name: "Chronic Fatigue",
    severity: "low",
    icon: "battery-low",
    description: "Persistent tiredness not relieved by rest",
    questions: [
      { id: "q1", question: "How long have you been experiencing fatigue?", type: "single", options: ["Less than a week", "1–4 weeks", "1–3 months", "More than 3 months"] },
      { id: "q2", question: "When is fatigue worst?", type: "single", options: ["Morning (hard to wake up)", "Afternoon energy crash", "All day", "After activity"] },
      { id: "q3", question: "Associated symptoms?", type: "multiple", options: ["Brain fog/poor concentration", "Muscle aches", "Poor sleep", "Weight change", "Low mood", "Hair loss"] },
      { id: "q4", question: "Rate your energy level (1=exhausted, 10=normal)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Focus on sleep hygiene, regular exercise, balanced nutrition, and stress management. Most fatigue resolves with lifestyle adjustments.",
      moderate: "Consult a doctor for blood work to check thyroid, iron, B12, and vitamin D levels. Keep a symptom diary.",
      high: "Schedule a medical appointment — persistent fatigue lasting 3+ months with associated symptoms warrants thorough investigation.",
      emergency: "Sudden severe fatigue with chest pain or shortness of breath — seek emergency care."
    },
    firstAidSteps: [
      "Establish a consistent sleep schedule (7–9 hours)",
      "Eat regular, balanced meals — avoid skipping breakfast",
      "Stay hydrated throughout the day",
      "Light exercise (a 20-min walk) can paradoxically boost energy",
      "Limit caffeine after 2pm"
    ],
    redFlags: ["Fatigue with unexplained weight loss", "Night sweats", "Swollen lymph nodes", "Chest pain with fatigue"],
    didYouKnow: "Iron deficiency is the world's most common nutritional deficiency and one of the leading causes of fatigue, especially in women of childbearing age.",
    prevention: ["Regular sleep schedule", "Balanced diet rich in iron and B vitamins", "Regular moderate exercise", "Stress management techniques"]
  },
  {
    id: "cold-flu",
    specialtyId: ["general", "infectious"],
    name: "Cold & Flu",
    severity: "low",
    icon: "wind",
    description: "Upper respiratory viral infection",
    questions: [
      { id: "q1", question: "How sudden did symptoms appear?", type: "single", options: ["Gradual onset (cold)", "Sudden onset (flu)", "Overnight"] },
      { id: "q2", question: "Which symptoms do you have?", type: "multiple", options: ["Runny nose", "Sneezing", "Sore throat", "Body aches", "Headache", "Fatigue"] },
      { id: "q3", question: "Any high-risk factors?", type: "multiple", options: ["Over 65 years", "Pregnant", "Chronic illness", "Immunocompromised", "None"] },
      { id: "q4", question: "How many days have you been sick?", type: "single", options: ["Day 1", "Days 2–3", "Days 4–5", "More than 5 days"] }
    ],
    recommendationTemplate: {
      low: "Rest, hydrate, and let your immune system do its work. Cold typically resolves in 7–10 days.",
      moderate: "Symptomatic treatment with decongestants, throat lozenges, and adequate hydration. See a doctor if not improving.",
      high: "If you have risk factors (elderly, pregnant, immunocompromised), consult a doctor — antiviral medication may be appropriate.",
      emergency: "High fever with confusion, severe chest pain, or breathing difficulty — seek emergency care immediately."
    },
    firstAidSteps: ["Rest and hydrate", "Honey and lemon in warm water for sore throat", "Steam inhalation for congestion", "Saline nasal spray", "Paracetamol for fever/body aches"],
    redFlags: ["Difficulty breathing", "Symptoms worsening after day 5", "Very high fever", "Severe headache"],
    didYouKnow: "Adults get 2–4 colds per year on average. Vitamin C doesn't prevent colds but may shorten their duration slightly.",
    prevention: ["Annual flu vaccine", "Regular handwashing", "Avoid touching face", "Adequate sleep boosts immunity"]
  },

  // ─── NEUROLOGY ─────────────────────────────────────────────────
  {
    id: "dizziness",
    specialtyId: ["neurology", "general"],
    name: "Dizziness / Vertigo",
    severity: "low",
    icon: "rotate-3d",
    description: "Feeling lightheaded, unsteady, or spinning",
    questions: [
      { id: "q1", question: "How would you describe the sensation?", type: "single", options: ["Room spinning (vertigo)", "Lightheaded/faint", "Unsteady/imbalance", "All of these"] },
      { id: "q2", question: "When did it start?", type: "single", options: ["Just now", "Few hours ago", "Few days ago", "Recurring for weeks"] },
      { id: "q3", question: "Associated symptoms?", type: "multiple", options: ["Nausea", "Vomiting", "Headache", "Ringing in ears", "Hearing loss", "Chest pain", "Blurred vision"], emergencyTrigger: ["Chest pain"] },
      { id: "q4", question: "What triggers it?", type: "single", options: ["Head movements", "Standing up", "Random/no trigger", "After exercise"] },
      { id: "q5", question: "Rate severity (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "BPPV (benign positional vertigo) is common and treatable. Try the Epley maneuver for spinning vertigo. Rest and avoid sudden movements.",
      moderate: "Consult a doctor if vertigo is persistent. Vestibular physiotherapy is highly effective for most inner ear causes.",
      high: "See a doctor promptly — recurrent or severe vertigo with hearing changes or neurological symptoms needs investigation.",
      emergency: "Sudden severe vertigo with headache, double vision, or speech difficulty — call emergency services (possible stroke)."
    },
    firstAidSteps: ["Sit or lie down immediately", "Focus on a fixed point to reduce spinning", "Avoid sudden movements", "Drink water", "Use a walking aid if unsteady"],
    redFlags: ["Sudden onset severe headache", "Chest pain", "Double vision", "Facial numbness", "Loss of balance falling to one side"],
    didYouKnow: "BPPV (Benign Paroxysmal Positional Vertigo) is the most common cause of vertigo and can be treated with specific head repositioning exercises (Epley maneuver).",
    prevention: ["Stay hydrated", "Get up slowly from lying/sitting", "Reduce salt intake if Menière's disease suspected", "Regular exercise improves balance"]
  },
  {
    id: "severe-headache",
    specialtyId: ["neurology", "emergency"],
    name: "Severe Headache",
    severity: "high",
    icon: "zap",
    description: "Intense head pain, possibly thunderclap headache",
    questions: [
      { id: "q1", question: "How did the headache start?", type: "single", options: ["Gradually built up", "Sudden onset (thunderclap)", "After head injury", "Woke up with it"], emergencyTrigger: ["Sudden onset (thunderclap)", "After head injury"] },
      { id: "q2", question: "Where is the pain?", type: "single", options: ["One side (temple/eye)", "Both sides", "Back of head/neck", "Forehead", "All over"] },
      { id: "q3", question: "Other symptoms?", type: "multiple", options: ["Light sensitivity", "Sound sensitivity", "Nausea/vomiting", "Stiff neck", "Fever", "Confusion", "Vision changes"], emergencyTrigger: ["Stiff neck", "Fever", "Confusion"] },
      { id: "q4", question: "Pain severity (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "Rest in a dark, quiet room. Take OTC pain relief (ibuprofen or paracetamol). Stay hydrated. Track headache triggers.",
      moderate: "If this is a recurring pattern, consult a doctor. Migraine-preventive treatment may be needed.",
      high: "See a doctor — frequent severe headaches or new headache patterns need evaluation to rule out serious causes.",
      emergency: "EMERGENCY — Thunderclap headache (worst of your life) or headache with fever + stiff neck may indicate subarachnoid hemorrhage or meningitis. Call emergency services."
    },
    firstAidSteps: ["Rest in a quiet, dark room", "Apply cold pack to forehead or back of neck", "Take ibuprofen or paracetamol", "Stay hydrated", "Avoid screen time"],
    redFlags: ["Worst headache of your life", "Sudden onset thunderclap", "Fever + stiff neck", "After head trauma", "With confusion or weakness"],
    didYouKnow: "Migraines affect 1 in 7 people worldwide and are 3x more common in women. They're caused by abnormal brain activity affecting nerve signals, not blood vessels as once thought.",
    prevention: ["Identify and avoid triggers (stress, sleep changes, certain foods)", "Regular sleep schedule", "Stay hydrated", "Limit caffeine"]
  },
  {
    id: "migraine",
    specialtyId: ["neurology"],
    name: "Migraine",
    severity: "moderate",
    icon: "activity",
    description: "Recurring severe headache often with aura",
    questions: [
      { id: "q1", question: "Do you experience visual aura before the headache?", type: "single", options: ["Yes – flashing lights/zigzags", "Yes – vision loss/blind spots", "No aura", "Not sure"] },
      { id: "q2", question: "How long does a migraine typically last?", type: "single", options: ["Less than 4 hours", "4–24 hours", "1–2 days", "More than 2 days"] },
      { id: "q3", question: "Known triggers?", type: "multiple", options: ["Stress", "Hormonal changes", "Certain foods", "Bright lights/noise", "Sleep changes", "Weather changes", "Unknown"] },
      { id: "q4", question: "Pain level (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Rest in a dark room, apply cold compress. OTC migraine medication (ibuprofen, naproxen, paracetamol) taken early works best.",
      moderate: "Consider seeing a neurologist for prescription triptans which are far more effective than OTC medications.",
      high: "Frequent migraines (>4/month) qualify for preventive medication — this can significantly reduce frequency and severity.",
      emergency: "New severe headache unlike previous migraines, with fever or neurological symptoms — seek emergency evaluation."
    },
    firstAidSteps: ["Take medication at first sign of headache", "Move to a dark, quiet room", "Apply ice pack to head/neck", "Try pressure on temples", "Sleep if possible"],
    redFlags: ["New type of headache", "Aura lasting more than 1 hour", "Weakness or numbness during aura", "First-ever severe headache"],
    didYouKnow: "The most effective migraine medications (triptans) work by constricting blood vessels in the brain and blocking pain pathways. They work best when taken at the very first sign of migraine.",
    prevention: ["Magnesium supplementation may reduce frequency", "Regular sleep", "Stress management", "Identify and avoid food triggers", "Adequate hydration"]
  },

  // ─── DERMATOLOGY ───────────────────────────────────────────────
  {
    id: "skin-rash",
    specialtyId: ["dermatology", "allergy", "infectious"],
    name: "Skin Rash",
    severity: "low",
    icon: "scan",
    description: "Skin changes including redness, bumps or spots",
    questions: [
      { id: "q1", question: "How does the rash look?", type: "single", options: ["Red flat patches", "Raised bumps/hives", "Blisters/vesicles", "Scaly/flaky patches", "Purplish spots (non-blanching)"], emergencyTrigger: ["Purplish spots (non-blanching)"] },
      { id: "q2", question: "Where is the rash?", type: "single", options: ["Face", "Arms/legs", "Trunk/back", "Widespread (whole body)", "Genital area"] },
      { id: "q3", question: "Is the rash spreading?", type: "single", options: ["No, staying same", "Slowly spreading", "Rapidly spreading"] },
      { id: "q4", question: "Associated symptoms?", type: "multiple", options: ["Itching", "Burning/pain", "Fever", "Throat swelling", "Difficulty breathing"], emergencyTrigger: ["Throat swelling", "Difficulty breathing"] },
      { id: "q5", question: "Any recent new soaps/products/medications?", type: "single", options: ["Yes – new soap/detergent", "Yes – new medication", "Yes – ate something new", "No changes"] }
    ],
    recommendationTemplate: {
      low: "Keep the area clean and dry. Try hydrocortisone cream for mild itch. Avoid scratching. Track what might have caused it.",
      moderate: "An antihistamine may help if allergic. Avoid potential triggers. See a doctor if rash persists beyond a week or spreads.",
      high: "See a dermatologist — persistent, spreading, or painful rashes need diagnosis for proper treatment.",
      emergency: "Rapidly spreading rash with fever, or non-blanching purple spots (meningococcal rash) — CALL EMERGENCY SERVICES."
    },
    firstAidSteps: ["Cool compress for relief", "Apply fragrance-free moisturizer or hydrocortisone cream", "Take an antihistamine for itching", "Avoid scratching", "Wear loose, cotton clothing"],
    redFlags: ["Purplish non-blanching spots", "Rash with high fever", "Throat swelling", "Rapidly spreading"],
    didYouKnow: "The meningococcal rash is distinctive — it appears as small, dark red or purple spots that DO NOT fade when pressed with a glass (the 'glass test').",
    prevention: ["Use fragrance-free products if sensitive skin", "Wear sunscreen", "Identify and avoid allergens", "Keep skin moisturized"]
  },
  {
    id: "acne",
    specialtyId: ["dermatology"],
    name: "Acne",
    severity: "low",
    icon: "circle-dot",
    description: "Pimples, blackheads or cystic skin lesions",
    questions: [
      { id: "q1", question: "What type of acne?", type: "single", options: ["Blackheads/whiteheads", "Red pimples", "Cystic/nodular (large, painful)", "Mixed"] },
      { id: "q2", question: "Where is acne most prominent?", type: "multiple", options: ["Face (forehead/nose/chin)", "Cheeks", "Back", "Chest", "Shoulders"] },
      { id: "q3", question: "Duration of acne?", type: "single", options: ["Recent onset (< 1 month)", "Few months", "Years", "Teenage acne now adult"] },
      { id: "q4", question: "Severity impact on daily life?", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Gentle cleanser twice daily, non-comedogenic moisturizer, and SPF. Avoid touching face. OTC salicylic acid or benzoyl peroxide.",
      moderate: "Consider topical retinoids (adapalene available OTC in many countries). Consistent routine is key — give products 8–12 weeks.",
      high: "Cystic acne needs medical treatment. Oral antibiotics, prescription retinoids, or hormonal therapy (in women) can be highly effective.",
      emergency: "Not an emergency. Consult a dermatologist for persistent severe acne to prevent permanent scarring."
    },
    firstAidSteps: ["Cleanse gently twice daily", "Apply ice to reduce painful cysts", "Don't pop or squeeze pimples", "Use non-comedogenic products", "Change pillowcases frequently"],
    redFlags: ["Sudden severe acne with other symptoms", "Acne with signs of hormonal disorder", "Acne leaving significant scars"],
    didYouKnow: "Isotretinoin (Accutane) remains the most effective acne treatment — it can achieve permanent remission in up to 80% of patients with severe cystic acne.",
    prevention: ["Regular cleansing", "Non-comedogenic skincare", "Avoid excessive dairy and high-glycemic foods", "Manage stress levels"]
  },
  {
    id: "eczema",
    specialtyId: ["dermatology", "allergy"],
    name: "Eczema / Dermatitis",
    severity: "low",
    icon: "layers",
    description: "Itchy, inflamed and dry skin patches",
    questions: [
      { id: "q1", question: "How severe is the itch?", type: "scale", min: 1, max: 10 },
      { id: "q2", question: "Where are the patches?", type: "multiple", options: ["Inside elbows/knees", "Hands/feet", "Neck", "Face", "Widespread"] },
      { id: "q3", question: "Any known triggers?", type: "multiple", options: ["Soap/detergent", "Wool/synthetic fabrics", "Stress", "Sweat", "Pet dander", "Unknown"] },
      { id: "q4", question: "Any signs of infection?", type: "single", options: ["No – skin is just itchy/dry", "Yellow crusting (possible infection)", "Red, warm, swollen areas"], emergencyTrigger: [] }
    ],
    recommendationTemplate: {
      low: "Moisturize liberally after bathing. Use fragrance-free products. Apply mild steroid cream (hydrocortisone) for flares.",
      moderate: "See a dermatologist for prescription topical corticosteroids. Antihistamines help with itch at night.",
      high: "Widespread or severe eczema may need systemic treatment. Biologics (dupilumab) have revolutionized moderate-severe eczema treatment.",
      emergency: "Infected eczema (yellow crusting, warmth, fever) needs antibiotic treatment — see a doctor today."
    },
    firstAidSteps: ["Apply thick moisturizer immediately after bathing", "Use lukewarm (not hot) water", "Wear cotton clothing", "Cool compress for relief", "Avoid scratching — trim nails short"],
    redFlags: ["Yellow crusting suggesting infection", "Spreading redness/warmth", "Fever with skin flare"],
    didYouKnow: "Eczema affects over 230 million people worldwide. The skin barrier in eczema allows moisture to escape and irritants to enter, explaining why consistent moisturizing is the foundation of treatment.",
    prevention: ["Moisturize daily", "Avoid known triggers", "Use gentle, fragrance-free products", "Manage stress"]
  },

  // ─── ORTHOPEDICS ───────────────────────────────────────────────
  {
    id: "back-pain",
    specialtyId: ["orthopedics", "physiotherapy", "general"],
    name: "Back Pain",
    severity: "low",
    icon: "move-vertical",
    description: "Lower, middle, or upper back discomfort",
    questions: [
      { id: "q1", question: "Where is the pain located?", type: "single", options: ["Lower back", "Middle back", "Upper back/neck", "All of the back"] },
      { id: "q2", question: "How did it start?", type: "single", options: ["After lifting/bending", "After sitting long time", "Gradually without cause", "After trauma/injury", "Just woke up with it"] },
      { id: "q3", question: "Does the pain radiate anywhere?", type: "single", options: ["No, stays in back", "Down one leg (sciatica)", "Down both legs", "Into abdomen"] , emergencyTrigger: ["Into abdomen"] },
      { id: "q4", question: "Any of these with the pain?", type: "multiple", options: ["Numbness/tingling in legs", "Bladder/bowel changes", "Weakness in legs", "Fever"], emergencyTrigger: ["Bladder/bowel changes"] },
      { id: "q5", question: "Pain severity (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Most acute back pain resolves in 2–6 weeks. Stay active (avoid bed rest), apply heat/ice, take OTC pain relief.",
      moderate: "Physiotherapy is the most evidence-based treatment for back pain. An assessment within 1–2 weeks is recommended.",
      high: "Chronic or severe back pain needs proper diagnosis — rule out disc herniation, spinal stenosis, or other structural causes.",
      emergency: "Back pain with bladder/bowel changes or progressive leg weakness is a medical emergency (cauda equina syndrome) — go to ER now."
    },
    firstAidSteps: ["Apply ice first 48–72 hours, then switch to heat", "Take ibuprofen/naproxen (anti-inflammatory)", "Stay active — gentle walking helps", "Avoid prolonged bed rest", "Try gentle stretches"],
    redFlags: ["Bladder or bowel incontinence", "Saddle area numbness", "Progressive leg weakness", "Back pain with unexplained weight loss", "Night pain unrelieved by rest"],
    didYouKnow: "Back pain is the leading cause of disability worldwide. Staying active and continuing normal activities (modified if painful) leads to faster recovery than rest.",
    prevention: ["Regular core strengthening exercises", "Good posture when sitting/standing", "Proper lifting technique", "Ergonomic workspace setup", "Healthy weight maintenance"]
  },
  {
    id: "joint-pain",
    specialtyId: ["orthopedics", "rheumatology", "sports"],
    name: "Joint Pain",
    severity: "low",
    icon: "link",
    description: "Pain, stiffness, or swelling in joints",
    questions: [
      { id: "q1", question: "Which joint(s) are affected?", type: "multiple", options: ["Knee", "Hip", "Shoulder", "Elbow", "Wrist/hand", "Ankle/foot", "Multiple joints"] },
      { id: "q2", question: "How did it start?", type: "single", options: ["After injury/fall", "Gradual onset", "After overuse/sports", "Woke up with it"] },
      { id: "q3", question: "Is there swelling or redness?", type: "single", options: ["No swelling", "Mild swelling", "Significant swelling + warmth + redness"] },
      { id: "q4", question: "Morning stiffness?", type: "single", options: ["No stiffness", "Less than 30 minutes", "More than 30 minutes", "All day stiffness"] },
      { id: "q5", question: "Pain severity (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Rest the joint, apply ice for 20 minutes several times daily. Elevate if swollen. RICE method (Rest, Ice, Compression, Elevation).",
      moderate: "If pain persists more than 2 weeks or significantly limits movement, see a doctor or physiotherapist for assessment.",
      high: "Joint with severe swelling, warmth, and redness may indicate infection or gout — needs urgent medical evaluation.",
      emergency: "Hot, severely swollen joint with fever (septic arthritis) — seek emergency care immediately."
    },
    firstAidSteps: ["Rest the affected joint", "Apply ice 20 min on/20 min off", "Compress gently with bandage", "Elevate above heart level", "Take anti-inflammatory medication"],
    redFlags: ["Joint that is hot, red, and very swollen (may be infected)", "Fever with joint pain", "Joint cannot bear weight", "Rapidly worsening symptoms"],
    didYouKnow: "Osteoarthritis affects over 500 million people globally. Regular low-impact exercise (swimming, cycling) is one of the most effective treatments for maintaining joint function.",
    prevention: ["Maintain healthy weight (reduces knee load by 4× for each pound)", "Regular low-impact exercise", "Proper warm-up before activity", "Good posture and joint alignment"]
  },
  {
    id: "sports-injury",
    specialtyId: ["sports", "orthopedics", "physiotherapy"],
    name: "Sports Injury",
    severity: "moderate",
    icon: "zap",
    description: "Sprains, strains, or overuse injuries from activity",
    questions: [
      { id: "q1", question: "What type of injury?", type: "single", options: ["Ankle sprain", "Muscle strain/pull", "Knee injury", "Shoulder injury", "Overuse/repetitive strain"] },
      { id: "q2", question: "Did you hear a pop or feel a snap?", type: "single", options: ["Yes – heard a pop", "Yes – felt something snap", "No unusual sound/feeling"] },
      { id: "q3", question: "Can you weight-bear on the injury?", type: "single", options: ["Yes, fully", "Partially, with pain", "No – cannot bear weight"] },
      { id: "q4", question: "Pain level (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Apply RICE (Rest, Ice, Compression, Elevation). Most mild sprains improve in 1–2 weeks.",
      moderate: "See a sports physiotherapist for assessment and rehabilitation program. Returning to sport too early risks re-injury.",
      high: "Significant mechanism of injury or inability to bear weight needs imaging to rule out fracture or ligament tear.",
      emergency: "Obvious deformity, bone through skin, or severe neurovascular compromise — seek emergency care immediately."
    },
    firstAidSteps: ["Stop activity immediately", "Apply ice wrapped in cloth (20 min on/20 off)", "Compress with elastic bandage", "Elevate the injured limb", "Take anti-inflammatory medication"],
    redFlags: ["Visible deformity", "Complete inability to move joint", "Numbness or tingling distal to injury", "Severe/worsening pain"],
    didYouKnow: "The old RICE method has been updated to POLICE: Protection, Optimal Loading, Ice, Compression, Elevation. Complete rest is no longer recommended — some movement aids recovery.",
    prevention: ["Proper warm-up and cool-down", "Gradually increase training intensity", "Use proper technique", "Adequate rest between sessions", "Core strength training"]
  },

  // ─── PSYCHIATRY / PSYCHOLOGY ───────────────────────────────────
  {
    id: "anxiety-attack",
    specialtyId: ["psychiatry", "psychology", "general"],
    name: "Anxiety / Panic Attack",
    severity: "moderate",
    icon: "waves",
    description: "Intense anxiety, panic, or overwhelming fear",
    questions: [
      { id: "q1", question: "What symptoms are you experiencing?", type: "multiple", options: ["Rapid heartbeat", "Shortness of breath", "Chest tightness", "Trembling/shaking", "Dizziness", "Feeling of doom", "Numbness/tingling"] },
      { id: "q2", question: "How long does a typical episode last?", type: "single", options: ["Seconds to minutes", "10–30 minutes", "More than 30 minutes", "Hours/days of anxiety"] },
      { id: "q3", question: "How often does this happen?", type: "single", options: ["First time ever", "Occasional", "Weekly", "Almost daily"] },
      { id: "q4", question: "Does it prevent you from normal activities?", type: "single", options: ["No significant impact", "Mild impact", "Significant impact", "Completely avoidant"] },
      { id: "q5", question: "Impact on daily functioning (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "In the moment: 4-7-8 breathing (inhale 4s, hold 7s, exhale 8s). Grounding technique: name 5 things you see, 4 you hear, 3 you touch.",
      moderate: "Cognitive behavioral therapy (CBT) is the gold standard for anxiety and panic. A short course can be transformative.",
      high: "Frequent panic attacks significantly impacting life need professional treatment — combination of CBT + medication is very effective.",
      emergency: "If unsure whether symptoms are panic or cardiac — seek medical evaluation. Panic disorder is not life-threatening, but rule out heart issues."
    },
    firstAidSteps: [
      "Remember: panic attacks are temporary and will pass",
      "Breathe slowly — inhale 4 counts, hold 4, exhale 6",
      "Ground yourself: feel feet on floor, hold something cold",
      "Name 5 things you can see in the room",
      "Remind yourself: 'This is anxiety, not danger — it will pass'"
    ],
    redFlags: ["New-onset chest pain needs cardiac evaluation", "Panic attacks triggered by specific trauma may indicate PTSD", "Panic with thoughts of self-harm"],
    didYouKnow: "Panic attacks activate the same physiological response as genuine danger. The physical symptoms are real — but the trigger is a misfiring alarm system, not actual threat.",
    prevention: ["Regular exercise reduces anxiety significantly", "Limit caffeine and alcohol", "Mindfulness and meditation practice", "Regular CBT or therapy", "Adequate sleep"]
  },
  {
    id: "insomnia",
    specialtyId: ["psychiatry", "psychology", "general"],
    name: "Insomnia",
    severity: "low",
    icon: "moon",
    description: "Difficulty falling or staying asleep",
    questions: [
      { id: "q1", question: "What is your main sleep problem?", type: "single", options: ["Can't fall asleep", "Wake up during night", "Wake up too early", "All of these"] },
      { id: "q2", question: "How long have you had this problem?", type: "single", options: ["Less than a month", "1–3 months", "3–6 months", "More than 6 months"] },
      { id: "q3", question: "What do you think causes it?", type: "multiple", options: ["Stress/worry", "Screen use at night", "Irregular schedule", "Pain/discomfort", "Medications", "Unknown"] },
      { id: "q4", question: "How does poor sleep affect your day?", type: "multiple", options: ["Fatigue", "Poor concentration", "Mood changes", "Reduced performance", "Minimal impact"] },
      { id: "q5", question: "Sleep quality rating (1=terrible, 10=great)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Practice good sleep hygiene: consistent schedule, dark/cool room, no screens 1 hour before bed, avoid caffeine after 2pm.",
      moderate: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is more effective than sleeping pills. Many digital CBT-I programs are available.",
      high: "Chronic insomnia (3+ months) affecting quality of life needs professional assessment to rule out sleep apnea or underlying conditions.",
      emergency: "Not typically an emergency. If you are having thoughts of self-harm due to sleep deprivation, seek help immediately."
    },
    firstAidSteps: ["Keep a consistent wake time even after poor sleep", "Get out of bed if awake >20 min — don't lie in frustration", "Progressive muscle relaxation for tension", "Reserve bedroom only for sleep (no phones/TV)", "Cool room temperature (16–18°C / 60–65°F)"],
    redFlags: ["Insomnia with depression or suicidal thoughts", "Loud snoring or gasping (may be sleep apnea)", "Sleep deprivation causing safety issues (e.g., driving)"],
    didYouKnow: "CBT-I (Cognitive Behavioral Therapy for Insomnia) has a 70–80% success rate and produces better long-term outcomes than sleep medication, without dependency.",
    prevention: ["Consistent sleep/wake schedule", "Regular daytime exercise", "Morning sunlight exposure", "Limit naps to 20 minutes max"]
  },
  {
    id: "depression",
    specialtyId: ["psychiatry", "psychology"],
    name: "Depression Symptoms",
    severity: "moderate",
    icon: "cloud-rain",
    description: "Persistent low mood, hopelessness or loss of interest",
    questions: [
      { id: "q1", question: "How long have you felt this way?", type: "single", options: ["Less than 2 weeks", "2–4 weeks", "1–3 months", "More than 3 months"] },
      { id: "q2", question: "Which symptoms resonate with you?", type: "multiple", options: ["Persistent sadness", "Loss of interest in things I used to enjoy", "Fatigue or no energy", "Changes in appetite/weight", "Difficulty concentrating", "Feeling worthless/guilty", "Thoughts of self-harm"] },
      { id: "q3", question: "Impact on daily life?", type: "single", options: ["Mild – coping okay", "Moderate – struggling but functioning", "Severe – barely functioning", "Crisis – cannot cope"] },
      { id: "q4", question: "Overall wellbeing (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Talk to someone you trust. Physical exercise has strong evidence for improving mild depression. Practice self-compassion.",
      moderate: "Talking therapy (CBT, counseling) is very effective. Your GP can refer you or you can self-refer in many countries.",
      high: "Moderate-severe depression with significant functional impact needs professional help — therapy and/or antidepressants are effective.",
      emergency: "If you have thoughts of self-harm or suicide — please reach out to a crisis helpline immediately. You are not alone."
    },
    firstAidSteps: ["Reach out to one trusted person today", "Try to maintain basic routines (sleep, meals, movement)", "Limit alcohol which worsens depression", "Get outside for a short walk", "Be kind to yourself — depression is an illness, not a choice"],
    redFlags: ["Thoughts of self-harm or suicide — seek immediate help", "Unable to care for self", "Psychotic symptoms"],
    didYouKnow: "Depression affects 280 million people globally. It's a real medical condition with effective treatments. Most people with depression who receive treatment see significant improvement.",
    prevention: ["Regular exercise (30 min/day reduces depression risk by 26%)", "Social connection", "Good sleep", "Limiting alcohol", "Purposeful activity and meaning"]
  },
  {
    id: "pre-exam-anxiety",
    specialtyId: ["psychology", "general"],
    name: "Pre-Exam / Performance Anxiety",
    severity: "low",
    icon: "book-open",
    description: "Anxiety related to tests, exams, or performance",
    questions: [
      { id: "q1", question: "How far away is your exam/event?", type: "single", options: ["Today/tomorrow", "This week", "Next week", "More than a week"] },
      { id: "q2", question: "Physical symptoms?", type: "multiple", options: ["Stomach upset", "Headache", "Can't sleep", "Rapid heartbeat", "Blank mind when studying"] },
      { id: "q3", question: "Preparation level?", type: "single", options: ["Well-prepared", "Mostly prepared", "Somewhat prepared", "Underprepared"] },
      { id: "q4", question: "Anxiety level (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Use active recall study techniques. Plan short study sessions with breaks (Pomodoro). Deep breathing before and during the exam.",
      moderate: "Your anxiety is your body preparing you for performance. Reframe it as excitement. Visualization and deep breathing help.",
      high: "If exam anxiety significantly impairs performance, consider talking to a counselor about specific anxiety management strategies.",
      emergency: "Panic attack during exam — use grounding: breathe slowly, name 5 things you see, it will pass within minutes."
    },
    firstAidSteps: ["Deep breathing: 4 counts in, 4 hold, 6 out", "Box breathing for acute anxiety", "Light exercise or walk", "Healthy meal and adequate sleep", "Positive self-talk: 'I am prepared'"],
    redFlags: ["Panic attack that impairs ability to complete exam", "Anxiety causing complete avoidance", "Physical symptoms needing medical attention"],
    didYouKnow: "A moderate amount of anxiety actually improves performance — this is the Yerkes-Dodson curve. The goal isn't to eliminate anxiety but to optimize it.",
    prevention: ["Start studying early to build genuine confidence", "Practice mindfulness daily", "Exercise regularly", "Get adequate sleep — especially night before exam"]
  },

  // ─── EYE / ENT ─────────────────────────────────────────────────
  {
    id: "eye-redness",
    specialtyId: ["ophthalmology"],
    name: "Eye Redness / Pink Eye",
    severity: "low",
    icon: "eye",
    description: "Red, irritated, or inflamed eye",
    questions: [
      { id: "q1", question: "Which eye is affected?", type: "single", options: ["Right eye only", "Left eye only", "Both eyes"] },
      { id: "q2", question: "What type of discharge?", type: "single", options: ["None", "Watery", "White/yellow pus"] },
      { id: "q3", question: "Other symptoms?", type: "multiple", options: ["Itching", "Burning", "Blurred vision", "Sensitivity to light", "Eye pain", "Foreign body feeling"], emergencyTrigger: [] },
      { id: "q4", question: "Did it start after contact with a sick person?", type: "single", options: ["Yes", "No", "Not sure"] }
    ],
    recommendationTemplate: {
      low: "Viral conjunctivitis is contagious — wash hands, don't share towels. Cold compress for comfort. Usually resolves in 1–2 weeks.",
      moderate: "Bacterial conjunctivitis with yellow pus needs antibiotic eye drops from a doctor.",
      high: "Red eye with significant pain, light sensitivity, and blurred vision needs urgent ophthalmology assessment (may be iritis or keratitis).",
      emergency: "Sudden vision loss or severe eye pain — seek emergency ophthalmology care immediately."
    },
    firstAidSteps: ["Gently clean eye with clean, damp cloth", "Wash hands frequently", "Don't touch or rub eyes", "Remove contact lenses", "Cold compress for comfort"],
    redFlags: ["Sudden vision loss", "Severe eye pain", "Foreign object in eye", "Chemical splash"],
    didYouKnow: "Viral pink eye (most common type) is highly contagious for up to 2 weeks. Antibiotics don't help — it must run its course. Strict handwashing prevents spread.",
    prevention: ["Regular handwashing", "Don't share personal items", "Protect eyes from chemicals and UV", "Regular eye exams"]
  },
  {
    id: "ear-pain",
    specialtyId: ["ent", "pediatrics"],
    name: "Ear Pain",
    severity: "low",
    icon: "ear",
    description: "Pain, pressure, or discomfort in the ear",
    questions: [
      { id: "q1", question: "Location of ear pain?", type: "single", options: ["Inside ear", "Behind/below ear", "In front of ear", "Outer ear"] },
      { id: "q2", question: "Any discharge from ear?", type: "single", options: ["No discharge", "Clear fluid", "Yellow/brown wax", "Pus or bloody discharge"] },
      { id: "q3", question: "Any hearing changes?", type: "single", options: ["No change", "Muffled hearing", "Significant hearing loss"] },
      { id: "q4", question: "Other symptoms?", type: "multiple", options: ["Fever", "Sore throat", "Dizziness", "Jaw pain", "Toothache nearby"] },
      { id: "q5", question: "Pain level (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Outer ear pain (swimmer's ear) — keep ear dry, tilt ear to drain, OTC pain relief. Most ear infections improve within a week.",
      moderate: "Middle ear infections (otitis media) may need antibiotics — consult a doctor, especially in children.",
      high: "Ear pain with significant hearing loss, discharge, or pain behind ear needs prompt medical evaluation.",
      emergency: "Severe pain behind the ear with swelling, redness (mastoiditis) — seek emergency care."
    },
    firstAidSteps: ["Warm compress over ear for pain relief", "Keep ear dry", "OTC pain medication (ibuprofen)", "Don't insert objects in ear", "Elevate head when sleeping"],
    redFlags: ["Sudden complete hearing loss", "Discharge with blood", "Swelling/redness behind ear", "High fever with severe ear pain"],
    didYouKnow: "Middle ear infections are the second most common childhood illness. Most resolve on their own within 2–3 days — antibiotics are not always needed.",
    prevention: ["Dry ears after swimming", "Don't insert cotton swabs in ear canal", "Vaccinate against pneumococcal bacteria", "Breastfeed infants if possible (reduces ear infection risk)"]
  },
  {
    id: "sore-throat",
    specialtyId: ["ent", "general"],
    name: "Sore Throat",
    severity: "low",
    icon: "mic-off",
    description: "Throat pain, scratchiness, or difficulty swallowing",
    questions: [
      { id: "q1", question: "Severity of throat pain?", type: "scale", min: 1, max: 10 },
      { id: "q2", question: "Can you swallow?", type: "single", options: ["Yes, normally", "Painful but can swallow", "Very difficult to swallow", "Cannot swallow"], emergencyTrigger: ["Cannot swallow"] },
      { id: "q3", question: "Do you have fever?", type: "single", options: ["No fever", "Mild fever (below 38.5°C)", "High fever (above 38.5°C)"] },
      { id: "q4", question: "Any white patches in throat?", type: "single", options: ["No", "Yes – white spots/patches", "Not sure"] }
    ],
    recommendationTemplate: {
      low: "Viral sore throat: honey in warm water, throat lozenges, salt water gargle, OTC pain relief. Usually resolves in 5–7 days.",
      moderate: "If fever + white patches — possible strep throat. Strep needs antibiotics to prevent complications. See a doctor.",
      high: "Persistent sore throat > 2 weeks without improvement, or recurrent strep episodes, needs ENT evaluation.",
      emergency: "Cannot swallow own saliva, severe neck swelling, or voice change with fever (peritonsillar abscess) — ER immediately."
    },
    firstAidSteps: ["Gargle warm salt water (1/4 tsp salt in 240ml water)", "Honey in warm water or herbal tea", "Throat lozenges with benzocaine", "Stay hydrated", "Rest voice"],
    redFlags: ["Cannot swallow saliva", "Severe neck swelling", "Drooling due to inability to swallow", "Voice muffled/hot potato voice"],
    didYouKnow: "Only about 10% of adult sore throats are caused by strep bacteria (higher in children at 30%). Streptococcal pharyngitis needs antibiotics to prevent rheumatic fever.",
    prevention: ["Handwashing", "Avoid sharing drinks/utensils", "Stay hydrated", "Avoid smoking"]
  },

  // ─── GASTROENTEROLOGY ──────────────────────────────────────────
  {
    id: "abdominal-pain",
    specialtyId: ["gastroenterology", "general"],
    name: "Abdominal Pain",
    severity: "moderate",
    icon: "activity",
    description: "Pain or discomfort in the stomach or abdomen",
    questions: [
      { id: "q1", question: "Where is the pain located?", type: "single", options: ["Upper middle (stomach)", "Upper right (liver area)", "Upper left", "Lower right", "Lower left", "Around belly button", "Diffuse/everywhere"] },
      { id: "q2", question: "How would you describe it?", type: "single", options: ["Crampy/colicky (comes and goes)", "Constant pressure/ache", "Sharp stabbing", "Burning"] },
      { id: "q3", question: "Duration?", type: "single", options: ["Just started (< 1 hour)", "Few hours", "1–3 days", "More than 3 days"] },
      { id: "q4", question: "Associated symptoms?", type: "multiple", options: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Fever", "Blood in stool", "Loss of appetite"], emergencyTrigger: ["Blood in stool"] },
      { id: "q5", question: "Pain severity (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "Mild abdominal cramps: rest, stay hydrated, try peppermint tea or warm compress. Avoid solid food initially.",
      moderate: "If pain persists more than 48 hours, or with fever and vomiting, see a doctor.",
      high: "Severe constant abdominal pain needs urgent evaluation — could be appendicitis, gallstones, or other serious condition.",
      emergency: "Severe pain with rigid abdomen, fever, or blood in stool — seek emergency care immediately (possible peritonitis or appendicitis)."
    },
    firstAidSteps: ["Rest comfortably", "Small sips of clear fluids", "Avoid solid food if nauseous", "Warm compress on abdomen", "OTC antacids if burning/reflux type"],
    redFlags: ["Severe constant pain", "Board-like rigid abdomen", "Pain with high fever", "Blood in stool or vomit", "Pain moving to right lower quadrant (appendix)"],
    didYouKnow: "Appendicitis classically starts as pain around the belly button, then moves to the right lower abdomen. The pain worsens over hours — don't ignore this pattern.",
    prevention: ["High-fiber diet", "Adequate hydration", "Regular exercise", "Food safety practices"]
  },
  {
    id: "heartburn",
    specialtyId: ["gastroenterology", "general"],
    name: "Heartburn / GERD",
    severity: "low",
    icon: "flame",
    description: "Burning sensation in chest or throat after eating",
    questions: [
      { id: "q1", question: "How often do you experience heartburn?", type: "single", options: ["Rarely (< once a week)", "1–2 times per week", "Most days", "Multiple times daily"] },
      { id: "q2", question: "When does it occur?", type: "multiple", options: ["After large meals", "When lying down", "When bending forward", "During exercise", "At night"] },
      { id: "q3", question: "Associated symptoms?", type: "multiple", options: ["Regurgitation of food", "Difficulty swallowing", "Chronic cough", "Hoarse voice", "Chest pain"] },
      { id: "q4", question: "Discomfort level (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Avoid triggers (spicy/fatty food, caffeine, alcohol). Eat smaller meals. Don't lie down for 2 hours after eating. Elevate head of bed.",
      moderate: "OTC antacids or proton pump inhibitors (PPIs) provide relief. Consider H2 blockers. Lifestyle changes are essential.",
      high: "Frequent GERD needs investigation — persistent reflux can cause Barrett's esophagus. See a gastroenterologist.",
      emergency: "Severe chest pain with heartburn: if cardiac cause cannot be excluded, seek emergency evaluation."
    },
    firstAidSteps: ["Take antacid (Tums/Gaviscon)", "Drink a glass of milk or water", "Stand or sit upright", "Chew gum (stimulates saliva neutralizing acid)", "Loose clothing around waist"],
    redFlags: ["Difficulty swallowing", "Unintentional weight loss", "Vomiting blood", "Black/tarry stools"],
    didYouKnow: "GERD affects ~20% of the Western population. Long-term untreated GERD can cause Barrett's esophagus, a pre-cancerous condition — regular monitoring is important for frequent sufferers.",
    prevention: ["Maintain healthy weight", "Avoid late-night eating", "Limit alcohol and caffeine", "Quit smoking", "Elevate head of bed by 6-8 inches"]
  },

  // ─── DENTISTRY ─────────────────────────────────────────────────
  {
    id: "toothache",
    specialtyId: ["dentistry"],
    name: "Toothache",
    severity: "moderate",
    icon: "smile",
    description: "Dental pain, sensitivity, or jaw discomfort",
    questions: [
      { id: "q1", question: "Type of tooth pain?", type: "single", options: ["Sharp when eating/drinking", "Constant throbbing", "Sensitivity to cold/hot only", "Pressure/pain when biting"] },
      { id: "q2", question: "Any swelling?", type: "single", options: ["No swelling", "Slight gum swelling near tooth", "Significant face/cheek swelling"] },
      { id: "q3", question: "Any of these present?", type: "multiple", options: ["Visible cavity or broken tooth", "Gum bleeding", "Bad taste/pus", "Fever", "Difficulty opening mouth"] , emergencyTrigger: [] },
      { id: "q4", question: "Pain severity (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Dental sensitivity: use sensitive toothpaste (potassium nitrate). OTC clove oil on cotton ball for immediate pain relief.",
      moderate: "See a dentist within the week. In the meantime: ibuprofen, clove oil, avoid extreme temperatures.",
      high: "Constant throbbing pain or visible cavity needs dental care within 24–48 hours — may indicate pulpitis or abscess.",
      emergency: "Dental abscess with facial swelling or fever is a serious infection — seek emergency dental or medical care today."
    },
    firstAidSteps: ["Apply clove oil (eugenol) to affected tooth on cotton ball", "Take ibuprofen for pain and inflammation", "Rinse with warm salt water", "Avoid very hot/cold foods", "Don't apply aspirin directly to gum"],
    redFlags: ["Facial or neck swelling with tooth pain", "Fever with toothache (abscess)", "Difficulty swallowing/breathing", "Trismus (cannot open mouth)"],
    didYouKnow: "Dental abscesses can spread to the neck and throat (Ludwig's angina), potentially threatening the airway. Severe tooth pain with facial swelling and fever needs emergency dental care.",
    prevention: ["Brush twice daily with fluoride toothpaste", "Floss daily", "Limit sugar and acidic drinks", "Regular dental checkups every 6 months"]
  },

  // ─── MINOR BURNS ───────────────────────────────────────────────
  {
    id: "minor-burn",
    specialtyId: ["general", "emergency"],
    name: "Burn Injury",
    severity: "moderate",
    icon: "flame",
    description: "Thermal, chemical, or electrical burn",
    questions: [
      { id: "q1", question: "What caused the burn?", type: "single", options: ["Hot liquid/steam", "Hot surface", "Chemical", "Electrical", "Sunburn"], emergencyTrigger: ["Electrical"] },
      { id: "q2", question: "How much body surface is affected?", type: "single", options: ["Small spot (< palm size)", "Palm-sized area", "Large area (arm/leg)", "Extensive (> 10% body)"], emergencyTrigger: ["Large area (arm/leg)", "Extensive (> 10% body)"] },
      { id: "q3", question: "Burn depth?", type: "single", options: ["Red/painful (1st degree)", "Blistering/wet (2nd degree)", "Dry/waxy/white or black (3rd degree)"], emergencyTrigger: ["Dry/waxy/white or black (3rd degree)"] },
      { id: "q4", question: "Location of burn?", type: "single", options: ["Arm/leg", "Face/hands/feet/genitals", "Trunk", "Inhalation/airway"], emergencyTrigger: ["Face/hands/feet/genitals", "Inhalation/airway"] }
    ],
    recommendationTemplate: {
      low: "First-degree burn: cool running water for 10–20 minutes, apply aloe vera or burn gel, cover loosely. Heals in 3–5 days.",
      moderate: "Second-degree burn: cool water for 20 minutes, do NOT break blisters, see a doctor. May need professional wound care.",
      high: "Large or deep burns need emergency treatment — burn injuries can be deceptive in severity.",
      emergency: "Electrical burns, burns to face/airway, or extensive burns — CALL EMERGENCY SERVICES immediately."
    },
    firstAidSteps: [
      "Cool the burn under running cool water for at least 10–20 minutes",
      "Remove jewelry/clothing near the burn (before swelling)",
      "Do NOT use ice, butter, or toothpaste",
      "Do NOT break blisters",
      "Cover with clean, non-fluffy dressing or cling film",
      "Take pain relief (ibuprofen/paracetamol)"
    ],
    redFlags: ["Burns to face, hands, feet, joints, or genitals", "Burns > 3cm or full thickness", "Electrical or chemical burns", "Burns with inhalation injury"],
    didYouKnow: "The Rule of Nines is used by paramedics to estimate burn area: each arm=9%, each leg=18%, front torso=18%, back=18%, head=9%. This guides treatment decisions.",
    prevention: ["Smoke detectors and fire extinguishers at home", "Safe handling of hot liquids", "Sunscreen use", "Safe storage of chemicals"]
  },

  // ─── ALLERGY ───────────────────────────────────────────────────
  {
    id: "food-allergy",
    specialtyId: ["allergy", "general"],
    name: "Food Allergy Reaction",
    severity: "moderate",
    icon: "utensils-crossed",
    description: "Immune reaction to food allergen",
    questions: [
      { id: "q1", question: "What symptoms appeared after eating?", type: "multiple", options: ["Hives/itching", "Lip/tongue swelling", "Throat tightness", "Nausea/vomiting", "Stomach cramps", "Difficulty breathing", "Dizziness"], emergencyTrigger: ["Throat tightness", "Difficulty breathing"] },
      { id: "q2", question: "How quickly after eating?", type: "single", options: ["Within 15 minutes", "15–30 minutes", "30–60 minutes", "More than 1 hour"] },
      { id: "q3", question: "Known food allergy?", type: "single", options: ["Yes – this food", "Yes – different food", "No known allergy (first reaction)"] },
      { id: "q4", question: "Do you have epinephrine (EpiPen)?", type: "single", options: ["Yes, have used it", "Yes, not used yet", "No"] }
    ],
    recommendationTemplate: {
      low: "Mild food reaction: antihistamine. Identify the culprit food. See an allergist for formal allergy testing.",
      moderate: "Food allergy reactions can escalate rapidly. Take antihistamine, monitor closely, and seek medical evaluation today.",
      high: "Any reaction with throat tightness or breathing difficulty needs emergency treatment — use EpiPen if available.",
      emergency: "ANAPHYLAXIS — USE EPIPEN AND CALL EMERGENCY SERVICES NOW."
    },
    firstAidSteps: ["Use EpiPen if throat tightness or breathing difficulty", "Take antihistamine (cetirizine/loratadine) for mild reactions", "Stay upright unless dizzy", "Call emergency services", "Second EpiPen dose after 5–15 min if no improvement"],
    redFlags: ["Any throat or tongue swelling", "Difficulty breathing", "Rapid pulse with dizziness"],
    didYouKnow: "The 8 most common food allergens account for 90% of allergic reactions: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, and soybeans.",
    prevention: ["Carry an EpiPen if prescribed", "Read all food labels carefully", "Inform restaurants about allergies", "Wear medical alert ID"]
  },

  // ─── CARDIOLOGY ────────────────────────────────────────────────
  {
    id: "palpitations",
    specialtyId: ["cardiology", "general"],
    name: "Heart Palpitations",
    severity: "moderate",
    icon: "heart-pulse",
    description: "Rapid, pounding, or irregular heartbeat",
    questions: [
      { id: "q1", question: "How would you describe the sensation?", type: "single", options: ["Racing/fast heartbeat", "Pounding/strong beats", "Skipped beats/fluttering", "Irregular rhythm"] },
      { id: "q2", question: "When does it occur?", type: "single", options: ["At rest", "During exercise", "After coffee/energy drinks", "When anxious/stressed", "Random"] },
      { id: "q3", question: "Associated symptoms?", type: "multiple", options: ["Chest pain/pressure", "Shortness of breath", "Dizziness", "Fainting", "Sweating"], emergencyTrigger: ["Fainting", "Chest pain/pressure"] },
      { id: "q4", question: "How long do episodes last?", type: "single", options: ["Seconds", "Minutes", "Hours", "Constant"] }
    ],
    recommendationTemplate: {
      low: "Most palpitations are benign and related to caffeine, dehydration, or stress. Reduce caffeine, stay hydrated.",
      moderate: "Recurrent palpitations warrant an ECG. See your doctor for cardiac evaluation.",
      high: "Palpitations with dizziness or shortness of breath need prompt cardiac evaluation — Holter monitor may be needed.",
      emergency: "Palpitations with fainting, chest pain, or lasting more than 30 minutes — seek emergency care."
    },
    firstAidSteps: ["Sit down and rest", "Try vagal maneuvers: hold breath and strain, or splash cold water on face", "Avoid caffeine/stimulants", "Stay hydrated", "Document episode duration and feeling"],
    redFlags: ["Palpitations with fainting", "Palpitations with chest pain", "Very fast or very slow rate (< 40 or > 150)"],
    didYouKnow: "Vagal maneuvers (Valsalva maneuver or diving reflex) can terminate SVT (supraventricular tachycardia) by stimulating the vagus nerve to slow the heart.",
    prevention: ["Limit caffeine and alcohol", "Stay hydrated", "Manage stress", "Regular aerobic exercise", "Adequate sleep"]
  },
  {
    id: "hypertension",
    specialtyId: ["cardiology", "general"],
    name: "High Blood Pressure",
    severity: "moderate",
    icon: "gauge",
    description: "Elevated blood pressure reading or symptoms",
    questions: [
      { id: "q1", question: "What is your blood pressure reading (if known)?", type: "single", options: ["Normal (< 120/80)", "Elevated (120-129/< 80)", "Stage 1 (130-139/80-89)", "Stage 2 (>= 140/90)", "Very high (> 180/120)", "Don't know"] },
      { id: "q2", question: "Current symptoms?", type: "multiple", options: ["Severe headache", "Vision changes", "Chest pain", "Shortness of breath", "Nose bleed", "No symptoms"], emergencyTrigger: ["Severe headache", "Vision changes", "Chest pain"] },
      { id: "q3", question: "Are you currently on blood pressure medication?", type: "single", options: ["Yes, taking as prescribed", "Yes, but missed doses", "No medication", "Not diagnosed before"] },
      { id: "q4", question: "Any risk factors?", type: "multiple", options: ["Family history", "Overweight", "High salt diet", "Smoking", "Physically inactive", "Diabetic"] }
    ],
    recommendationTemplate: {
      low: "Normal or elevated — focus on lifestyle: DASH diet, regular exercise, reduce salt/alcohol/stress. Monitor regularly.",
      moderate: "Stage 1–2 hypertension: medical treatment plus lifestyle changes. See your doctor for assessment and medication if indicated.",
      high: "Consistently high readings (>140/90) need medical management — uncontrolled hypertension is the leading risk factor for stroke.",
      emergency: "BP > 180/120 with symptoms = hypertensive crisis. Seek emergency care immediately."
    },
    firstAidSteps: ["Sit quietly and rest", "Take medication if prescribed and missed", "Slow deep breathing reduces BP temporarily", "Avoid salt, caffeine, stimulants", "Seek medical care if persistent or symptomatic"],
    redFlags: ["BP > 180/120 (hypertensive crisis)", "Severe headache", "Vision changes", "Chest pain", "Sudden neurological symptoms"],
    didYouKnow: "Hypertension affects 1.28 billion adults globally. It's called the 'silent killer' because it rarely causes symptoms until it causes a stroke or heart attack.",
    prevention: ["DASH diet (fruits, vegetables, low sodium)", "30+ min exercise most days", "Limit alcohol", "Quit smoking", "Stress management", "Maintain healthy weight"]
  },

  // ─── FAINTING ──────────────────────────────────────────────────
  {
    id: "fainting",
    specialtyId: ["general", "cardiology", "neurology"],
    name: "Fainting / Syncope",
    severity: "high",
    icon: "user-x",
    description: "Brief loss of consciousness or feeling like fainting",
    questions: [
      { id: "q1", question: "What happened just before?", type: "single", options: ["Standing up quickly", "Prolonged standing in heat", "Emotional distress/pain", "During exercise", "No warning", "After coughing/straining"] },
      { id: "q2", question: "Was there loss of consciousness?", type: "single", options: ["Yes – actual blackout", "Almost fainted – nearly lost consciousness", "Just felt very dizzy"] },
      { id: "q3", question: "Any of these during/after the episode?", type: "multiple", options: ["Chest pain", "Palpitations before fainting", "Confusion/disorientation afterward", "Tongue biting", "Jerking movements"], emergencyTrigger: ["Tongue biting", "Jerking movements", "Chest pain"] },
      { id: "q4", question: "Any injuries from falling?", type: "single", options: ["No injury", "Minor bruise", "Head injury", "Significant injury"], emergencyTrigger: ["Head injury"] }
    ],
    recommendationTemplate: {
      low: "Vasovagal syncope (from standing, heat, emotion) is common and benign. Lie down with legs elevated. Stay hydrated.",
      moderate: "First episode of syncope needs medical evaluation to identify cause — many are benign but some require investigation.",
      high: "Fainting during exercise, with palpitations, or recurring syncope needs urgent cardiac evaluation.",
      emergency: "Fainting with seizure activity, chest pain, or head injury — seek emergency care immediately."
    },
    firstAidSteps: ["Lie down immediately, elevate legs 12 inches", "Loosen tight clothing", "Cool environment/fresh air", "Sip water when fully conscious", "Don't get up quickly afterward"],
    redFlags: ["Fainting during exercise", "Multiple episodes", "Family history of sudden cardiac death", "No warning before fainting", "Head injury from fall"],
    didYouKnow: "Vasovagal syncope (triggered by stress, pain, or prolonged standing) accounts for ~50% of all fainting episodes. It's caused by a sudden drop in blood pressure and is generally harmless.",
    prevention: ["Stay hydrated", "Avoid prolonged standing", "Rise slowly from lying position", "Recognize and sit down at first warning signs"]
  }

];
// HoloCare — Integrated Virtual Clinic
// js/data/conditions.js — Health Conditions with Symptom Trees

window.HoloCareConditions = [

  // ─── EMERGENCY MEDICINE ────────────────────────────────────────
  {
    id: "chest-pain",
    specialtyId: ["emergency", "cardiology"],
    name: "Chest Pain",
    nameAr: "ألم الصدر",
    severity: "emergency",
    icon: "heart-crack",
    description: "Pressure, tightness or pain in the chest area",
    descriptionAr: "ضغط أو شد أو ألم في منطقة الصدر",
    questions: [
      { id: "q1", question: "How would you describe the chest pain?", questionAr: "كيف تصف ألم الصدر؟", type: "single", options: ["Sharp/stabbing", "Pressure/squeezing", "Burning/heartburn", "Dull ache"], optionsAr: ["حاد/طعني", "ضغط/شد", "حرقة/حموضة", "ألم خفيف"], emergencyTrigger: ["Pressure/squeezing"] },
      { id: "q2", question: "Do you have any of these symptoms with the pain?", questionAr: "هل لديك أي من هذه الأعراض مع الألم؟", type: "multiple", options: ["Left arm pain", "Jaw pain", "Shortness of breath", "Cold sweats", "Nausea"], optionsAr: ["ألم في الذراع الأيسر", "ألم في الفك", "ضيق في التنفس", "تعرق بارد", "غثيان"], emergencyTrigger: ["Left arm pain", "Jaw pain", "Cold sweats"] },
      { id: "q3", question: "How long have you had this pain?", questionAr: "منذ متى لديك هذا الألم؟", type: "single", options: ["Just started (< 5 min)", "Less than 30 minutes", "30 min – 2 hours", "More than 2 hours"], optionsAr: ["بدأ للتو (< 5 دقائق)", "أقل من 30 دقيقة", "30 دقيقة – ساعتان", "أكثر من ساعتين"], emergencyTrigger: ["Just started (< 5 min)", "Less than 30 minutes"] },
      { id: "q4", question: "Rate the pain severity (1-10)", questionAr: "قيّد شدة الألم (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 7 }
    ],
    recommendationTemplate: {
      low: "Monitor your symptoms. If chest discomfort persists or worsens, seek medical care promptly. Avoid strenuous activity.",
      moderate: "Seek urgent medical attention within the next few hours. Do not drive yourself. Rest and avoid exertion.",
      high: "Go to the emergency room immediately or call emergency services. Do not delay.",
      emergency: "CALL EMERGENCY SERVICES NOW — This may be a heart attack.",
      lowAr: "راقب أعراضك. إذا استمر الانزعاج في الصدر أو ساء، اطلب الرعاية الطبية على الفور. تجنب المجهود البدني.",
      moderateAr: "اطلب الرعاية الطبية العاجلة في غضون الساعات القليلة القادمة. لا تقود بنفسك. استرح وتجنب المجهود.",
      highAr: "اذهب إلى قسم الطوارئ فوراً أو اتصل بخدمات الطوارئ. لا تتأخر.",
      emergencyAr: "اتصل بخدمات الطوارئ الآن — قد يكون هذا نوبة قلبية."
    },
    firstAidSteps: [
      "Stop all physical activity and rest immediately",
      "Loosen tight clothing around chest and neck",
      "If prescribed, take nitroglycerin as directed",
      "Chew one aspirin (325mg) if not allergic",
      "Call emergency services or have someone drive you to the ER"
    ],
    firstAidStepsAr: [
      "أوقف كل النشاط البدني واسترح فوراً",
      "فكّ الملابس الضيقة حول الصدر والرقبة",
      "إذا كان موصوفاً لك، خذ النيتروغليسرين حسب التوجيهات",
      "امضغ أسبرين واحد (325 ملغ) إذا لم يكن لديك حساسية",
      "اتصل بخدمات الطوارئ أو اطلب من شخص أن يوصلك إلى الطوارئ"
    ],
    redFlags: ["Radiating arm/jaw pain", "Cold sweats", "Shortness of breath", "Nausea with chest pain"],
    redFlagsAr: ["ألم مشع في الذراع/الفك", "تعرق بارد", "ضيق في التنفس", "غثيان مع ألم صدر"],
    didYouKnow: "Heart attacks can present differently in women — burning sensation, jaw pain, and fatigue are common without classic chest pressure.",
    didYouKnowAr: "قد تظهر النوبات القلبية بشكل مختلف لدى النساء — الإحساس بالحرقة، ألم الفك، والتعب الشديد شائعة دون الضغط الكلاسيكي على الصدر.",
    prevention: ["Maintain a healthy weight", "Exercise regularly", "Avoid smoking", "Manage stress", "Regular blood pressure checks"],
    preventionAr: ["حافظ على وزن صحي", "مارس الرياضة بانتظام", "تجنب التدخين", "إدارة التوتر", "فحوصات ضغط الدم المنتظمة"]
  },
  {
    id: "severe-allergic-reaction",
    specialtyId: ["emergency", "allergy"],
    name: "Severe Allergic Reaction",
    nameAr: "رد فعل تحسسي شديد",
    severity: "emergency",
    icon: "shield-x",
    description: "Anaphylaxis or severe allergic response",
    descriptionAr: "الحساسية المفرطة أو رد الفعل التحسسي الشديد",
    questions: [
      { id: "q1", question: "What symptoms are you experiencing?", questionAr: "ما الأعراض التي تشعر بها؟", type: "multiple", options: ["Throat swelling", "Difficulty breathing", "Hives/rash", "Rapid heartbeat", "Dizziness/fainting"], optionsAr: ["تورم الحلق", "صعوبة في التنفس", "شرى/طفح", "نبض سريع", "دوار/إغماء"], emergencyTrigger: ["Throat swelling", "Difficulty breathing", "Dizziness/fainting"] },
      { id: "q2", question: "Did you eat or touch something new recently?", questionAr: "هل أكلت أو لمست شيئاً جديداً مؤخراً؟", type: "single", options: ["Yes – food", "Yes – medication", "Yes – insect sting", "No known trigger"], optionsAr: ["نعم – طعام", "نعم – دواء", "نعم – لدغة حشرة", "لا يوجد محفز معروف"] },
      { id: "q3", question: "Do you have an EpiPen available?", questionAr: "هل لديك حقنة إيبي بن متوفرة؟", type: "single", options: ["Yes, and I've used it", "Yes, not yet used", "No EpiPen"], optionsAr: ["نعم، وقد استخدمتها", "نعم، لم تُستخدم بعد", "لا يوجد إيبي بن"] }
    ],
    recommendationTemplate: {
      low: "Take an antihistamine and monitor carefully. If symptoms worsen, seek emergency care immediately.",
      moderate: "Seek emergency care now. Allergic reactions can escalate rapidly.",
      high: "Use EpiPen if available and call emergency services immediately.",
      emergency: "USE EPIPEN NOW AND CALL EMERGENCY SERVICES — Anaphylaxis is life-threatening.",
      lowAr: "خذ مضاد الهيستامين وراقب بحذر. إذا ساءت الأعراض، اطلب الرعاية الطارئة فوراً.",
      moderateAr: "اطلب الرعاية الطارئة الآن. ردود الفعل التحسسية قد تتفاقم بسرعة.",
      highAr: "استخدم إيبي بن إذا كانت متوفرة واتصل بخدمات الطوارئ فوراً.",
      emergencyAr: "استخدم إيبي بن الآن واتصل بخدمات الطوارئ — الحساسية المفرطة تهدد الحياة."
    },
    firstAidSteps: [
      "Use EpiPen (epinephrine auto-injector) if available — inject into outer thigh",
      "Call emergency services immediately",
      "Lie down with legs elevated unless breathing is difficult",
      "If breathing is difficult, sit upright",
      "Be prepared to administer CPR",
      "A second EpiPen dose may be needed after 5-15 minutes"
    ],
    firstAidStepsAr: [
      "استخدم حقنة إيبي بن (حقن الأدرينالين الذاتية) إذا كانت متوفرة — حقن في الفخذ الخارجي",
      "اتصل بخدمات الطوارئ فوراً",
      "استلقِ مع رفع الساقين ما لم يكن التنفس صعباً",
      "إذا كان التنفس صعباً، اجلس مستقيماً",
      "كن مستعداً لإجراء الإنعاش القلبي الرئوي",
      "قد تكون هناك حاجة لجرعة ثانية من إيبي بن بعد 5-15 دقيقة"
    ],
    redFlags: ["Throat/tongue swelling", "Cannot swallow", "Blue lips", "Loss of consciousness"],
    redFlagsAr: ["تورم الحلق/اللسان", "عدم القدرة على البلع", "شفاه زرقاء", "فقدان الوعي"],
    didYouKnow: "Anaphylaxis can occur within minutes of exposure and even trace amounts of an allergen can trigger a severe reaction.",
    didYouKnowAr: "يمكن أن تحدث الحساسية المفرطة في غضون دقائق من التعرض، وحتى كميات ضئيلة من مسبب الحساسية يمكن أن تؤدي إلى رد فعل شديد.",
    prevention: ["Always carry an EpiPen if you have known severe allergies", "Wear a medical alert bracelet", "Read all food labels carefully"],
    preventionAr: ["احمل دائماً حقنة إيبي بن إذا كنت تعاني من حساسية شديدة معروفة", "ارتدِ سوار التنبيه الطبي", "اقرأ جميع ملصقات الأغذية بعناية"]
  },
  {
    id: "stroke-symptoms",
    specialtyId: ["emergency", "neurology"],
    name: "Stroke Symptoms",
    nameAr: "أعراض السكتة الدماغية",
    severity: "emergency",
    icon: "brain",
    description: "Sudden neurological changes – possible stroke",
    descriptionAr: "تغيرات عصبية مفاجئة — احتمال سكتة دماغية",
    questions: [
      { id: "q1", question: "Do you have any of these sudden symptoms?", questionAr: "هل لديك أي من هذه الأعراض المفاجئة؟", type: "multiple", options: ["Face drooping (one side)", "Arm weakness", "Speech difficulty", "Severe sudden headache", "Vision loss"], optionsAr: ["تدلي الوجه (جهة واحدة)", "ضعف في الذراع", "صعوبة في الكلام", "صداع شديد مفاجئ", "فقدان البصر"], emergencyTrigger: ["Face drooping (one side)", "Arm weakness", "Speech difficulty"] },
      { id: "q2", question: "When did symptoms start?", questionAr: "متى بدأت الأعراض؟", type: "single", options: ["Right now", "Within the hour", "1–3 hours ago", "More than 3 hours ago"], optionsAr: ["الآن", "خلال الساعة", "من 1–3 ساعات", "أكثر من 3 ساعات"], emergencyTrigger: ["Right now", "Within the hour", "1–3 hours ago"] },
      { id: "q3", question: "Any history of stroke or TIA?", questionAr: "هل لديك تاريخ من السكتة الدماغية أو النوبة الإقفارية العابرة؟", type: "single", options: ["Yes, previous stroke", "Yes, TIA (mini stroke)", "No history"], optionsAr: ["نعم، سكتة سابقة", "نعم، نوبة إقفارية عابرة (سكتة صغرى)", "لا يوجد تاريخ"] }
    ],
    recommendationTemplate: {
      low: "Even if symptoms have resolved, see a doctor today — this could be a TIA (warning stroke).",
      moderate: "Go to the ER immediately. Time is brain — every minute matters with stroke.",
      high: "Call emergency services NOW. Do not drive. Stroke treatment is time-critical.",
      emergency: "CALL EMERGENCY SERVICES IMMEDIATELY — FAST: Face drooping, Arm weakness, Speech trouble, Time to call.",
      lowAr: "حتى لو اختفت الأعراض، استشر طبيباً اليوم — قد تكون هذه نوبة إقفارية عابرة (تحذير من سكتة).",
      moderateAr: "اذهب إلى الطوارئ فوراً. الوقت هو الدماغ — كل دقيقة تهم في السكتة الدماغية.",
      highAr: "اتصل بخدمات الطوارئ الآن. لا تقود. علاج السكتة الدماغية حساس للوقت.",
      emergencyAr: "اتصل بخدمات الطوارئ فوراً — FAST: تدلي الوجه، ضعف الذراع، صعوبة الكلام، حان وقت الاتصال."
    },
    firstAidSteps: [
      "Call emergency services immediately — time is critical",
      "Note the exact time symptoms started",
      "Keep the person calm and still",
      "Do not give food or water (swallowing may be impaired)",
      "Do not give aspirin — strokes can be hemorrhagic"
    ],
    firstAidStepsAr: [
      "اتصل بخدمات الطوارئ فوراً — الوقت حرج",
      "دوّن الوقت الدقيق لبدء الأعراض",
      "حافظ على هدوء الشخص وثباته",
      "لا تعطِ طعاماً أو ماء (قد يكون البلع متأثراً)",
      "لا تعطِ أسبرين — السكتة قد تكون نزفية"
    ],
    redFlags: ["Sudden facial drooping", "Sudden arm/leg weakness", "Sudden speech problems", "Sudden vision changes"],
    redFlagsAr: ["تدلي الوجه المفاجئ", "ضعف مفاجئ في الذراع/الساق", "مشاكل مفاجئة في الكلام", "تغيرات مفاجئة في البصر"],
    didYouKnow: "Using the FAST acronym (Face, Arms, Speech, Time), bystanders can identify strokes and call for help before permanent damage occurs.",
    didYouKnowAr: "باستخدام اختصار FAST (الوجه، الذراعين، الكلام، الوقت)، يمكن للمارة تحديد السكتات الدماغية وطلب المساعدة قبل حدوث ضرر دائم.",
    prevention: ["Control blood pressure", "Don't smoke", "Maintain healthy weight", "Treat atrial fibrillation"],
    preventionAr: ["تحكم في ضغط الدم", "لا تدخن", "حافظ على وزن صحي", "عالج الرجفان الأذيني"]
  },

  // ─── GENERAL PRACTICE ──────────────────────────────────────────
  {
    id: "fever-cough",
    specialtyId: ["general", "pulmonology", "pediatrics", "infectious"],
    name: "Fever & Cough",
    nameAr: "الحمى والسعال",
    severity: "moderate",
    icon: "thermometer",
    description: "Elevated temperature with respiratory symptoms",
    descriptionAr: "ارتفاع درجة الحرارة مع أعراض تنفسية",
    questions: [
      { id: "q1", question: "What is your current temperature?", questionAr: "ما درجة حرارتك الحالية؟", type: "single", options: ["Normal (below 38°C/100.4°F)", "Mild (38–38.9°C / 100.4–102°F)", "High (39–39.9°C / 102–103.9°F)", "Very high (40°C+ / 104°F+)"], optionsAr: ["طبيعية (أقل من 38°م/100.4°ف)", "خفيفة (38–38.9°م / 100.4–102°ف)", "عالية (39–39.9°م / 102–103.9°ف)", "عالية جداً (40°م+ / 104°ف+)"], emergencyTrigger: ["Very high (40°C+ / 104°F+)"] },
      { id: "q2", question: "How long have you had these symptoms?", questionAr: "منذ متى لديك هذه الأعراض؟", type: "single", options: ["Less than 24 hours", "1–3 days", "4–7 days", "More than a week"], optionsAr: ["أقل من 24 ساعة", "1–3 أيام", "4–7 أيام", "أكثر من أسبوع"] },
      { id: "q3", question: "Describe your cough:", questionAr: "صف سعالك:", type: "single", options: ["Dry/tickling", "Productive with clear mucus", "Productive with yellow/green mucus", "Coughing blood"], optionsAr: ["جاف/محرش", "منتج ببلغم شفاف", "منتج ببلغم أصفر/أخضر", "سعال مصحوب بدم"], emergencyTrigger: ["Coughing blood"] },
      { id: "q4", question: "Additional symptoms?", questionAr: "أعراض إضافية؟", type: "multiple", options: ["Body aches", "Sore throat", "Runny nose", "Shortness of breath", "Chest pain", "Confusion"], optionsAr: ["آلام في الجسم", "التهاب الحلق", "سيلان الأنف", "ضيق في التنفس", "ألم صدر", "ارتباك"], emergencyTrigger: ["Shortness of breath", "Chest pain", "Confusion"] },
      { id: "q5", question: "Rate your overall discomfort (1-10)", questionAr: "قيّد مستوى الانزعاج العام (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "Rest, stay hydrated, and monitor your temperature. Most viral illnesses resolve in 5–7 days with supportive care.",
      moderate: "Rest at home, take paracetamol/ibuprofen for fever, drink plenty of fluids. See a doctor if no improvement in 48 hours.",
      high: "See a doctor today — high fever lasting more than 2 days, productive cough with colored mucus, or worsening symptoms need evaluation.",
      emergency: "Seek emergency care — very high fever with breathing difficulty or confusion is a medical emergency.",
      lowAr: "استرح، حافظ على الترطيب، وراقب درجة حرارتك. معظم الأمراض الفيروسية تزول في 5–7 أيام بالرعاية الداعمة.",
      moderateAr: "استرح في المنزل، خذ باراسيتامول/إيبوبروفين للحمى، اشرب الكثير من السوائل. استشر طبيباً إذا لم يحدث تحسن في 48 ساعة.",
      highAr: "استشر طبيباً اليوم — الحمى العالية المستمرة لأكثر من يومين، السعال المنتج ببلغم ملون، أو تفاقم الأعراض يحتاج تقييماً.",
      emergencyAr: "اطلب الرعاية الطارئة — الحمى العالية جداً مع صعوبة في التنفس أو الارتباك هي حالة طارئة."
    },
    firstAidSteps: [
      "Take paracetamol (acetaminophen) or ibuprofen for fever as per dosage instructions",
      "Stay hydrated — drink water, clear broth, herbal tea",
      "Rest and avoid strenuous activity",
      "Use a cool, damp cloth on forehead for comfort",
      "Monitor temperature every 4 hours"
    ],
    firstAidStepsAr: [
      "خذ باراسيتامول (أسيتامينوفين) أو إيبوبروفين للحمى حسب تعليمات الجرعة",
      "حافظ على الترطيب — اشرب الماء، المرق الصافي، الشاي العشبي",
      "استرح وتجنب النشاط البدني الشاق",
      "استخدم قطعة قماش باردة ورطبة على الجبهة للراحة",
      "راقب درجة الحرارة كل 4 ساعات"
    ],
    redFlags: ["Difficulty breathing", "Coughing blood", "Temperature over 40°C (104°F)", "Confusion or disorientation", "Stiff neck with fever"],
    redFlagsAr: ["صعوبة في التنفس", "سعال مصحوب بدم", "درجة حرارة فوق 40°م (104°ف)", "ارتباك أو فقدان التوجيه", "شد في الرقبة مع حمى"],
    didYouKnow: "Fever is a natural immune response — it makes the body less hospitable to pathogens. A mild fever often doesn't need suppression unless it causes significant discomfort.",
    didYouKnowAr: "الحمى هي استجابة مناعية طبيعية — تجعل الجسم أقل ملاءمة للممرضات. الحمى الخفيفة غالباً لا تحتاج إلى كبت ما لم تسبب انزعاجاً كبيراً.",
    prevention: ["Wash hands frequently", "Get annual flu vaccination", "Avoid close contact with sick individuals", "Maintain a strong immune system through good nutrition and sleep"],
    preventionAr: ["اغسل يديك باستمرار", "احصل على لقاح الإنفلونزا السنوي", "تجنب الاتصال الوثيق بالأشخاص المرضى", "حافظ على جهاز مناعي قوي من خلال التغذية الجيدة والنوم"]
  },
  {
    id: "fatigue",
    specialtyId: ["general", "endocrinology", "hematology", "oncology"],
    name: "Chronic Fatigue",
    nameAr: "التعب المزمن",
    severity: "low",
    icon: "battery-low",
    description: "Persistent tiredness not relieved by rest",
    descriptionAr: "تعب مستمر لا يزول بالراحة",
    questions: [
      { id: "q1", question: "How long have you been experiencing fatigue?", questionAr: "منذ متى تعاني من التعب؟", type: "single", options: ["Less than a week", "1–4 weeks", "1–3 months", "More than 3 months"], optionsAr: ["أقل من أسبوع", "1–4 أسابيع", "1–3 أشهر", "أكثر من 3 أشهر"] },
      { id: "q2", question: "When is fatigue worst?", questionAr: "متى يكون التعب في أسوأ حالاته؟", type: "single", options: ["Morning (hard to wake up)", "Afternoon energy crash", "All day", "After activity"], optionsAr: ["الصباح (صعوبة في الاستيقاظ)", "انهيار الطاقة بعد الظهر", "طوال اليوم", "بعد النشاط"] },
      { id: "q3", question: "Associated symptoms?", questionAr: "أعراض مصاحبة؟", type: "multiple", options: ["Brain fog/poor concentration", "Muscle aches", "Poor sleep", "Weight change", "Low mood", "Hair loss"], optionsAr: ["ضبابية الدماغ/صعوبة التركيز", "آلام عضلية", "نوم سيء", "تغير الوزن", "مزاج منخفض", "تساقط الشعر"] },
      { id: "q4", question: "Rate your energy level (1=exhausted, 10=normal)", questionAr: "قيّد مستوى طاقتك (1=منهك، 10=طبيعي)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Focus on sleep hygiene, regular exercise, balanced nutrition, and stress management. Most fatigue resolves with lifestyle adjustments.",
      moderate: "Consult a doctor for blood work to check thyroid, iron, B12, and vitamin D levels. Keep a symptom diary.",
      high: "Schedule a medical appointment — persistent fatigue lasting 3+ months with associated symptoms warrants thorough investigation.",
      emergency: "Sudden severe fatigue with chest pain or shortness of breath — seek emergency care.",
      lowAr: "ركّز على نظافة النوم، التمارين المنتظمة، التغذية المتوازنة، وإدارة التوتر. معظم حالات التعب تزول بتعديلات نمط الحياة.",
      moderateAr: "استشر طبيباً لإجراء تحاليل دم لفحص الغدة الدرقية، الحديد، B12، وفيتامين د. احتفظ بيومية للأعراض.",
      highAr: "حدد موعداً طبياً — التعب المستمر لأكثر من 3 أشهر مع أعراض مصاحبة يستدعي التحقيق الشامل.",
      emergencyAr: "تعب شديد مفاجئ مع ألم صدر أو ضيق في التنفس — اطلب الرعاية الطارئة."
    },
    firstAidSteps: [
      "Establish a consistent sleep schedule (7–9 hours)",
      "Eat regular, balanced meals — avoid skipping breakfast",
      "Stay hydrated throughout the day",
      "Light exercise (a 20-min walk) can paradoxically boost energy",
      "Limit caffeine after 2pm"
    ],
    firstAidStepsAr: [
      "ضع جدول نوم منتظم (7–9 ساعات)",
      "تناول وجبات منتظمة ومتوازنة — تجنب تخطي الفطور",
      "حافظ على الترطيب طوال اليوم",
      "التمارين الخفيفة (مشي 20 دقيقة) يمكن أن تزيد الطاقة بشكل متناقض",
      "حدد الكافيين بعد الساعة 2 ظهراً"
    ],
    redFlags: ["Fatigue with unexplained weight loss", "Night sweats", "Swollen lymph nodes", "Chest pain with fatigue"],
    redFlagsAr: ["تعب مع فقدان وزن غير مبرر", "تعرق ليلي", "تورم الغدد اللمفاوية", "ألم صدر مع تعب"],
    didYouKnow: "Iron deficiency is the world's most common nutritional deficiency and one of the leading causes of fatigue, especially in women of childbearing age.",
    didYouKnowAr: "نقص الحديد هو أكثر نقص غذائي شيوعاً في العالم وأحد الأسباب الرئيسية للتعب، خاصة لدى النساء في سن الإنجاب.",
    prevention: ["Regular sleep schedule", "Balanced diet rich in iron and B vitamins", "Regular moderate exercise", "Stress management techniques"],
    preventionAr: ["جدول نوم منتظم", "نظام غذائي متوازن غني بالحديد وفيتامينات ب", "تمارين معتدلة منتظمة", "تقنيات إدارة التوتر"]
  },
  {
    id: "cold-flu",
    specialtyId: ["general", "infectious"],
    name: "Cold & Flu",
    nameAr: "البرد والإنفلونزا",
    severity: "low",
    icon: "wind",
    description: "Upper respiratory viral infection",
    descriptionAr: "عدوى فيروسية في الجهاز التنفسي العلوي",
    questions: [
      { id: "q1", question: "How sudden did symptoms appear?", questionAr: "كيف ظهرت الأعراض فجأة؟", type: "single", options: ["Gradual onset (cold)", "Sudden onset (flu)", "Overnight"], optionsAr: ["بداية تدريجية (برد)", "بداية مفاجئة (إنفلونزا)", "بين ليلة وضحاها"] },
      { id: "q2", question: "Which symptoms do you have?", questionAr: "ما الأعراض التي لديك؟", type: "multiple", options: ["Runny nose", "Sneezing", "Sore throat", "Body aches", "Headache", "Fatigue"], optionsAr: ["سيلان الأنف", "عطس", "التهاب الحلق", "آلام في الجسم", "صداع", "تعب"] },
      { id: "q3", question: "Any high-risk factors?", questionAr: "هل هناك عوامل خطورة عالية؟", type: "multiple", options: ["Over 65 years", "Pregnant", "Chronic illness", "Immunocompromised", "None"], optionsAr: ["أكبر من 65 عاماً", "حامل", "مرض مزمن", "ضعف المناعة", "لا شيء"] },
      { id: "q4", question: "How many days have you been sick?", questionAr: "منذ كم يوم وأنت مريض؟", type: "single", options: ["Day 1", "Days 2–3", "Days 4–5", "More than 5 days"], optionsAr: ["اليوم 1", "الأيام 2–3", "الأيام 4–5", "أكثر من 5 أيام"] }
    ],
    recommendationTemplate: {
      low: "Rest, hydrate, and let your immune system do its work. Cold typically resolves in 7–10 days.",
      moderate: "Symptomatic treatment with decongestants, throat lozenges, and adequate hydration. See a doctor if not improving.",
      high: "If you have risk factors (elderly, pregnant, immunocompromised), consult a doctor — antiviral medication may be appropriate.",
      emergency: "High fever with confusion, severe chest pain, or breathing difficulty — seek emergency care immediately.",
      lowAr: "استرح، رطّب جسمك، ودع جهازك المناعي يقوم بعمله. البرد يزول عادةً في 7–10 أيام.",
      moderateAr: "العلاج الأعراضي بمزيلات الاحتقان، حلقات الحلق، والترطيب الكافي. استشر طبيباً إذا لم يحدث تحسن.",
      highAr: "إذا كان لديك عوامل خطورة (كبار السن، الحمل، ضعف المناعة)، استشر طبيباً — قد يكون الدواء المضاد للفيروسات مناسباً.",
      emergencyAr: "حمى عالية مع ارتباك، ألم صدر شديد، أو صعوبة في التنفس — اطلب الرعاية الطارئة فوراً."
    },
    firstAidSteps: ["Rest and hydrate", "Honey and lemon in warm water for sore throat", "Steam inhalation for congestion", "Saline nasal spray", "Paracetamol for fever/body aches"],
    firstAidStepsAr: ["استرح ورطّب جسمك", "عسل وليمون في ماء دافئ لالتهاب الحلق", "استنشاق البخار للاحتقان", "بخاخ أنفي ملحي", "باراسيتامول للحمى/آلام الجسم"],
    redFlags: ["Difficulty breathing", "Symptoms worsening after day 5", "Very high fever", "Severe headache"],
    redFlagsAr: ["صعوبة في التنفس", "تفاقم الأعراض بعد اليوم 5", "حمى عالية جداً", "صداع شديد"],
    didYouKnow: "Adults get 2–4 colds per year on average. Vitamin C doesn't prevent colds but may shorten their duration slightly.",
    didYouKnowAr: "يصاب البالغون بـ 2–4 نزلات برد سنوياً في المتوسط. فيتامين سي لا يمنع البرد لكنه قد يقصر مدته قليلاً.",
    prevention: ["Annual flu vaccine", "Regular handwashing", "Avoid touching face", "Adequate sleep boosts immunity"],
    preventionAr: ["لقاح الإنفلونزا السنوي", "غسل اليدين بانتظام", "تجنب لمس الوجه", "النوم الكافي يعزز المناعة"]
  },

  // ─── NEUROLOGY ─────────────────────────────────────────────────
  {
    id: "dizziness",
    specialtyId: ["neurology", "general"],
    name: "Dizziness / Vertigo",
    nameAr: "الدوار / الدوار الوضعي",
    severity: "low",
    icon: "rotate-3d",
    description: "Feeling lightheaded, unsteady, or spinning",
    descriptionAr: "الشعور بالدوار الخفيف، عدم الثبات، أو الدوران",
    questions: [
      { id: "q1", question: "How would you describe the sensation?", questionAr: "كيف تصف الإحساس؟", type: "single", options: ["Room spinning (vertigo)", "Lightheaded/faint", "Unsteady/imbalance", "All of these"], optionsAr: ["الغرفة تدور (دوار)", "دوار خفيف/إغماء", "عدم ثبات/اختلال", "كل ما سبق"] },
      { id: "q2", question: "When did it start?", questionAr: "متى بدأ؟", type: "single", options: ["Just now", "Few hours ago", "Few days ago", "Recurring for weeks"], optionsAr: ["الآن للتو", "منذ ساعات قليلة", "منذ أيام قليلة", "متكرر لأسابيع"] },
      { id: "q3", question: "Associated symptoms?", questionAr: "أعراض مصاحبة؟", type: "multiple", options: ["Nausea", "Vomiting", "Headache", "Ringing in ears", "Hearing loss", "Chest pain", "Blurred vision"], optionsAr: ["غثيان", "قيء", "صداع", "طنين في الأذنين", "فقدان السمع", "ألم صدر", "رؤية ضبابية"], emergencyTrigger: ["Chest pain"] },
      { id: "q4", question: "What triggers it?", questionAr: "ما الذي يحفزه؟", type: "single", options: ["Head movements", "Standing up", "Random/no trigger", "After exercise"], optionsAr: ["حركات الرأس", "الوقوف", "عشوائي/لا يوجد محفز", "بعد التمرين"] },
      { id: "q5", question: "Rate severity (1-10)", questionAr: "قيّد الشدة (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "BPPV (benign positional vertigo) is common and treatable. Try the Epley maneuver for spinning vertigo. Rest and avoid sudden movements.",
      moderate: "Consult a doctor if vertigo is persistent. Vestibular physiotherapy is highly effective for most inner ear causes.",
      high: "See a doctor promptly — recurrent or severe vertigo with hearing changes or neurological symptoms needs investigation.",
      emergency: "Sudden severe vertigo with headache, double vision, or speech difficulty — call emergency services (possible stroke).",
      lowAr: "الدوار الوضعي الحميد (BPPV) شائع وقابل للعلاج. جرب مناورة إيبلي للدوار الدوار. استرح وتجنب الحركات المفاجئة.",
      moderateAr: "استشر طبيباً إذا كان الدوار مستمراً. العلاج الطبيعي الدهليزي فعال جداً لمعظم أسباب الأذن الداخلية.",
      highAr: "استشر طبيباً فوراً — الدوار المتكرر أو الشديد مع تغيرات في السمع أو أعراض عصبية يحتاج إلى التحقيق.",
      emergencyAr: "دوار شديد مفاجئ مع صداع، رؤية مزدوجة، أو صعوبة في الكلام — اتصل بخدمات الطوارئ (احتمال سكتة دماغية)."
    },
    firstAidSteps: ["Sit or lie down immediately", "Focus on a fixed point to reduce spinning", "Avoid sudden movements", "Drink water", "Use a walking aid if unsteady"],
    firstAidStepsAr: ["اجلس أو استلقِ فوراً", "ركّز على نقطة ثابتة لتقليل الدوران", "تجنب الحركات المفاجئة", "اشرب ماء", "استخدم عكازاً إذا كنت غير ثابت"],
    redFlags: ["Sudden onset severe headache", "Chest pain", "Double vision", "Facial numbness", "Loss of balance falling to one side"],
    redFlagsAr: ["صداع شديد مفاجئ", "ألم صدر", "رؤية مزدوجة", "خدر في الوجه", "فقدان التوازن والسقوط لجهة واحدة"],
    didYouKnow: "BPPV (Benign Paroxysmal Positional Vertigo) is the most common cause of vertigo and can be treated with specific head repositioning exercises (Epley maneuver).",
    didYouKnowAr: "الدوار الوضعي الحميد (BPPV) هو أكثر أسباب الدوار شيوعاً ويمكن علاجه بتمارين إعادة تموضع الرأس المحددة (مناورة إيبلي).",
    prevention: ["Stay hydrated", "Get up slowly from lying/sitting", "Reduce salt intake if Menière's disease suspected", "Regular exercise improves balance"],
    preventionAr: ["حافظ على الترطيب", "قم ببطء من الاستلقاء/الجلوس", "قلل من تناول الملح إذا كان هناك اشتباه بمرض مينيير", "التمارين المنتظمة تحسن التوازن"]
  },
  {
    id: "severe-headache",
    specialtyId: ["neurology", "emergency"],
    name: "Severe Headache",
    nameAr: "صداع شديد",
    severity: "high",
    icon: "zap",
    description: "Intense head pain, possibly thunderclap headache",
    descriptionAr: "ألم شديد في الرأس، ربما صداع الرعد",
    questions: [
      { id: "q1", question: "How did the headache start?", questionAr: "كيف بدأ الصداع؟", type: "single", options: ["Gradually built up", "Sudden onset (thunderclap)", "After head injury", "Woke up with it"], optionsAr: ["تصاعد تدريجياً", "بداية مفاجئة (رعدية)", "بعد إصابة في الرأس", "استيقظت وأنت تشعر به"], emergencyTrigger: ["Sudden onset (thunderclap)", "After head injury"] },
      { id: "q2", question: "Where is the pain?", questionAr: "أين يقع الألم؟", type: "single", options: ["One side (temple/eye)", "Both sides", "Back of head/neck", "Forehead", "All over"], optionsAr: ["جهة واحدة (الصدغ/العين)", "الجهتين", "خلف الرأس/الرقبة", "الجبهة", "في كل مكان"] },
      { id: "q3", question: "Other symptoms?", questionAr: "أعراض أخرى؟", type: "multiple", options: ["Light sensitivity", "Sound sensitivity", "Nausea/vomiting", "Stiff neck", "Fever", "Confusion", "Vision changes"], optionsAr: ["حساسية للضوء", "حساسية للصوت", "غثيان/قيء", "شد في الرقبة", "حمى", "ارتباك", "تغيرات في البصر"], emergencyTrigger: ["Stiff neck", "Fever", "Confusion"] },
      { id: "q4", question: "Pain severity (1-10)", questionAr: "شدة الألم (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "Rest in a dark, quiet room. Take OTC pain relief (ibuprofen or paracetamol). Stay hydrated. Track headache triggers.",
      moderate: "If this is a recurring pattern, consult a doctor. Migraine-preventive treatment may be needed.",
      high: "See a doctor — frequent severe headaches or new headache patterns need evaluation to rule out serious causes.",
      emergency: "EMERGENCY — Thunderclap headache (worst of your life) or headache with fever + stiff neck may indicate subarachnoid hemorrhage or meningitis. Call emergency services.",
      lowAr: "استرح في غرفة مظلمة وهادئة. خذ مسكنات الألم المتاحة دون وصفة (إيبوبروفين أو باراسيتامول). حافظ على الترطيب. تتبع محفزات الصداع.",
      moderateAr: "إذا كان هذا نمطاً متكرراً، استشر طبيباً. قد يكون هناك حاجة لعلاج وقائي للصداع النصفي.",
      highAr: "استشر طبيباً — الصداع الشديد المتكرر أو أنماط الصداع الجديدة تحتاج إلى تقييم لاستبعاد الأسباب الخطيرة.",
      emergencyAr: "طوارئ — صداع الرعد (أسوأ صداع في حياتك) أو صداع مع حمى + شد في الرقبة قد يشير إلى نزيف تحت العنكبوتية أو التهاب السحايا. اتصل بخدمات الطوارئ."
    },
    firstAidSteps: ["Rest in a quiet, dark room", "Apply cold pack to forehead or back of neck", "Take ibuprofen or paracetamol", "Stay hydrated", "Avoid screen time"],
    firstAidStepsAr: ["استرح في غرفة هادئة ومظلمة", "ضع كمادات باردة على الجبهة أو خلف الرقبة", "خذ إيبوبروفين أو باراسيتامول", "حافظ على الترطيب", "تجنب شاشات الأجهزة"],
    redFlags: ["Worst headache of your life", "Sudden onset thunderclap", "Fever + stiff neck", "After head trauma", "With confusion or weakness"],
    redFlagsAr: ["أسوأ صداع في حياتك", "بداية مفاجئة رعدية", "حمى + شد في الرقبة", "بعد صدمة في الرأس", "مع ارتباك أو ضعف"],
    didYouKnow: "Migraines affect 1 in 7 people worldwide and are 3x more common in women. They're caused by abnormal brain activity affecting nerve signals, not blood vessels as once thought.",
    didYouKnowAr: "يصيب الصداع النصفي 1 من كل 7 أشخاص حول العالم ويكون أكثر شيوعاً 3 مرات لدى النساء. يسببه نشاط دماغي غير طبيعي يؤثر على إشارات الأعصاب، وليس الأوعية الدموية كما كان يُعتقد سابقاً.",
    prevention: ["Identify and avoid triggers (stress, sleep changes, certain foods)", "Regular sleep schedule", "Stay hydrated", "Limit caffeine"],
    preventionAr: ["حدد وتجنب المحفزات (التوتر، تغيرات النوم، أطعمة معينة)", "جدول نوم منتظم", "حافظ على الترطيب", "حدد الكافيين"]
  },
  {
    id: "migraine",
    specialtyId: ["neurology"],
    name: "Migraine",
    nameAr: "الصداع النصفي",
    severity: "moderate",
    icon: "activity",
    description: "Recurring severe headache often with aura",
    descriptionAr: "صداع شديد متكرر غالباً مع هالة",
    questions: [
      { id: "q1", question: "Do you experience visual aura before the headache?", questionAr: "هل تشعر بهالة بصرية قبل الصداع؟", type: "single", options: ["Yes – flashing lights/zigzags", "Yes – vision loss/blind spots", "No aura", "Not sure"], optionsAr: ["نعم – أضواء وميضة/خطوط متعرجة", "نعم – فقدان بصر/بقع عمياء", "لا يوجد هالة", "غير متأكد"] },
      { id: "q2", question: "How long does a migraine typically last?", questionAr: "كم يستمر الصداع النصفي عادةً؟", type: "single", options: ["Less than 4 hours", "4–24 hours", "1–2 days", "More than 2 days"], optionsAr: ["أقل من 4 ساعات", "4–24 ساعة", "1–2 يوم", "أكثر من يومين"] },
      { id: "q3", question: "Known triggers?", questionAr: "محفزات معروفة؟", type: "multiple", options: ["Stress", "Hormonal changes", "Certain foods", "Bright lights/noise", "Sleep changes", "Weather changes", "Unknown"], optionsAr: ["التوتر", "تغيرات هرمونية", "أطعمة معينة", "أضواء ساطعة/ضجيج", "تغيرات النوم", "تغيرات الطقس", "غير معروف"] },
      { id: "q4", question: "Pain level (1-10)", questionAr: "مستوى الألم (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Rest in a dark room, apply cold compress. OTC migraine medication (ibuprofen, naproxen, paracetamol) taken early works best.",
      moderate: "Consider seeing a neurologist for prescription triptans which are far more effective than OTC medications.",
      high: "Frequent migraines (>4/month) qualify for preventive medication — this can significantly reduce frequency and severity.",
      emergency: "New severe headache unlike previous migraines, with fever or neurological symptoms — seek emergency evaluation.",
      lowAr: "استرح في غرفة مظلمة، ضع كمادات باردة. أدوية الصداع النصفي المتاحة دون وصفة (إيبوبروفين، نابروكسين، باراسيتامول) تكون أكثر فعالية عند أخذها مبكراً.",
      moderateAr: "فكر في زيارة أخصائي أعصاب للحصول على وصفة طبية للتريبتانات التي هي أكثر فعالية بكثير من الأدوية المتاحة دون وصفة.",
      highAr: "الصداع النصفي المتكرر (>4/شهر) يستحق دواء وقائياً — يمكن أن يقلل بشكل كبير من التكرار والشدة.",
      emergencyAr: "صداع شديد جديد غير مثل الصداع النصفي السابق، مع حمى أو أعراض عصبية — اطلب تقييماً طارئاً."
    },
    firstAidSteps: ["Take medication at first sign of headache", "Move to a dark, quiet room", "Apply ice pack to head/neck", "Try pressure on temples", "Sleep if possible"],
    firstAidStepsAr: ["خذ الدواء عند أول علامة للصداع", "انتقل إلى غرفة مظلمة وهادئة", "ضع كمادات ثلج على الرأس/الرقبة", "جرب الضغط على الصدغين", "نام إن أمكن"],
    redFlags: ["New type of headache", "Aura lasting more than 1 hour", "Weakness or numbness during aura", "First-ever severe headache"],
    redFlagsAr: ["نوع جديد من الصداع", "هالة تستمر أكثر من ساعة", "ضعف أو خدر أثناء الهالة", "أول صداع شديد على الإطلاق"],
    didYouKnow: "The most effective migraine medications (triptans) work by constricting blood vessels in the brain and blocking pain pathways. They work best when taken at the very first sign of migraine.",
    didYouKnowAr: "أكثر أدوية الصداع النصفي فعالية (التريبتانات) تعمل عن طريق تضييق الأوعية الدموية في الدماغ وسد مسارات الألم. تعمل بشكل أفضل عند أخذها عند أول علامة للصداع النصفي.",
    prevention: ["Magnesium supplementation may reduce frequency", "Regular sleep", "Stress management", "Identify and avoid food triggers", "Adequate hydration"],
    preventionAr: ["تناول المكملات الغذائية من المغنيسيوم قد يقلل التكرار", "نوم منتظم", "إدارة التوتر", "حدد وتجنب المحفزات الغذائية", "ترطيب كافٍ"]
  },

  // ─── DERMATOLOGY ───────────────────────────────────────────────
  {
    id: "skin-rash",
    specialtyId: ["dermatology", "allergy", "infectious"],
    name: "Skin Rash",
    nameAr: "طفح جلدي",
    severity: "low",
    icon: "scan",
    description: "Skin changes including redness, bumps or spots",
    descriptionAr: "تغيرات جلدية تشمل الاحمرار والنتوءات أو البقع",
    questions: [
      { id: "q1", question: "How does the rash look?", questionAr: "كيف يبدو الطفح؟", type: "single", options: ["Red flat patches", "Raised bumps/hives", "Blisters/vesicles", "Scaly/flaky patches", "Purplish spots (non-blanching)"], optionsAr: ["بقع حمراء مسطحة", "نتوءات بارزة/شرى", "بثور/فقاعات", "بقع متقشرة/قشرية", "بقع بنفسجية (لا تتلاشى عند الضغط)"], emergencyTrigger: ["Purplish spots (non-blanching)"] },
      { id: "q2", question: "Where is the rash?", questionAr: "أين يقع الطفح؟", type: "single", options: ["Face", "Arms/legs", "Trunk/back", "Widespread (whole body)", "Genital area"], optionsAr: ["الوجه", "الذراعين/الساقين", "الجذع/الظهر", "منتشر (كامل الجسم)", "منطقة الأعضاء التناسلية"] },
      { id: "q3", question: "Is the rash spreading?", questionAr: "هل الطفح منتشر؟", type: "single", options: ["No, staying same", "Slowly spreading", "Rapidly spreading"], optionsAr: ["لا، يبقى كما هو", "ينتشر ببطء", "ينتشر بسرعة"] },
      { id: "q4", question: "Associated symptoms?", questionAr: "أعراض مصاحبة؟", type: "multiple", options: ["Itching", "Burning/pain", "Fever", "Throat swelling", "Difficulty breathing"], optionsAr: ["حكة", "حرقة/ألم", "حمى", "تورم الحلق", "صعوبة في التنفس"], emergencyTrigger: ["Throat swelling", "Difficulty breathing"] },
      { id: "q5", question: "Any recent new soaps/products/medications?", questionAr: "هل استخدمت صابون/منتجات/أدوية جديدة مؤخراً؟", type: "single", options: ["Yes – new soap/detergent", "Yes – new medication", "Yes – ate something new", "No changes"], optionsAr: ["نعم – صابون/منظف جديد", "نعم – دواء جديد", "نعم – أكلت شيئاً جديداً", "لا توجد تغييرات"] }
    ],
    recommendationTemplate: {
      low: "Keep the area clean and dry. Try hydrocortisone cream for mild itch. Avoid scratching. Track what might have caused it.",
      moderate: "An antihistamine may help if allergic. Avoid potential triggers. See a doctor if rash persists beyond a week or spreads.",
      high: "See a dermatologist — persistent, spreading, or painful rashes need diagnosis for proper treatment.",
      emergency: "Rapidly spreading rash with fever, or non-blanching purple spots (meningococcal rash) — CALL EMERGENCY SERVICES.",
      lowAr: "حافظ على المنطقة نظيفة وجافة. جرب كريم الهيدروكورتيزون للحكة الخفيفة. تجنب الحك. تتبع ما قد يكون سببه.",
      moderateAr: "مضاد الهيستامين قد يساعد إذا كان تحسسياً. تجنب المحفزات المحتملة. استشر طبيباً إذا استمر الطفح لأكثر من أسبوع أو انتشر.",
      highAr: "استشر أخصائي جلدية — الطفح المستمر أو المنتشر أو المؤلم يحتاج إلى تشخيص للعلاج المناسب.",
      emergencyAr: "طفح ينتشر بسرعة مع حمى، أو بقع بنفسجية لا تتلاشى عند الضغط (طفح المكورات السحائية) — اتصل بخدمات الطوارئ."
    },
    firstAidSteps: ["Cool compress for relief", "Apply fragrance-free moisturizer or hydrocortisone cream", "Take an antihistamine for itching", "Avoid scratching", "Wear loose, cotton clothing"],
    firstAidStepsAr: ["كمادات باردة للراحة", "ضع مرطب خالٍ من العطور أو كريم الهيدروكورتيزون", "خذ مضاد الهيستامين للحكة", "تجنب الحك", "ارتدِ ملابس قطنية فضفاضة"],
    redFlags: ["Purplish non-blanching spots", "Rash with high fever", "Throat swelling", "Rapidly spreading"],
    redFlagsAr: ["بقع بنفسجية لا تتلاشى عند الضغط", "طفح مع حمى عالية", "تورم الحلق", "انتشار سريع"],
    didYouKnow: "The meningococcal rash is distinctive — it appears as small, dark red or purple spots that DO NOT fade when pressed with a glass (the 'glass test').",
    didYouKnowAr: "طفح المكورات السحائية مميز — يظهر على شكل بقع صغيرة حمراء داكنة أو بنفسجية لا تتلاشى عند الضغط بزجاج (اختبار الزجاج).",
    prevention: ["Use fragrance-free products if sensitive skin", "Wear sunscreen", "Identify and avoid allergens", "Keep skin moisturized"],
    preventionAr: ["استخدم منتجات خالية من العطور إذا كان لديك بشرة حساسة", "ضع واقي الشمس", "حدد وتجنب مسببات الحساسية", "حافظ على ترطيب البشرة"]
  },
  {
    id: "acne",
    specialtyId: ["dermatology"],
    name: "Acne",
    nameAr: "حب الشباب",
    severity: "low",
    icon: "circle-dot",
    description: "Pimples, blackheads or cystic skin lesions",
    descriptionAr: "بثور، رؤوس سوداء أو آفات جلدية كيسية",
    questions: [
      { id: "q1", question: "What type of acne?", questionAr: "ما نوع حب الشباب؟", type: "single", options: ["Blackheads/whiteheads", "Red pimples", "Cystic/nodular (large, painful)", "Mixed"], optionsAr: ["رؤوس سوداء/بيضاء", "بثور حمراء", "كيسية/عقدية (كبيرة، مؤلمة)", "مختلطة"] },
      { id: "q2", question: "Where is acne most prominent?", questionAr: "أين يظهر حب الشباب بشكل بارز؟", type: "multiple", options: ["Face (forehead/nose/chin)", "Cheeks", "Back", "Chest", "Shoulders"], optionsAr: ["الوجه (الجبهة/الأنف/الذقن)", "الخدود", "الظهر", "الصدر", "الأكتاف"] },
      { id: "q3", question: "Duration of acne?", questionAr: "مدة حب الشباب؟", type: "single", options: ["Recent onset (< 1 month)", "Few months", "Years", "Teenage acne now adult"], optionsAr: ["بداية حديثة (< شهر)", "بضعة أشهر", "سنوات", "حب شباب مراهقة الآن بالغ"] },
      { id: "q4", question: "Severity impact on daily life?", questionAr: "تأثير الشدة على الحياة اليومية؟", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Gentle cleanser twice daily, non-comedogenic moisturizer, and SPF. Avoid touching face. OTC salicylic acid or benzoyl peroxide.",
      moderate: "Consider topical retinoids (adapalene available OTC in many countries). Consistent routine is key — give products 8–12 weeks.",
      high: "Cystic acne needs medical treatment. Oral antibiotics, prescription retinoids, or hormonal therapy (in women) can be highly effective.",
      emergency: "Not an emergency. Consult a dermatologist for persistent severe acne to prevent permanent scarring.",
      lowAr: "منظف لطيف مرتين يومياً، مرطب غير مسد للمسام، وواقي شمس. تجنب لمس الوجه. حمض الساليسيليك أو بيروكسيد البنزويل المتاح دون وصفة.",
      moderateAr: "فكر في الريتينويدات الموضعية (أدابالين متاح دون وصفة في العديد من البلدان). الروتين المنتظم هو المفتاح — امنح المنتجات 8–12 أسبوعاً.",
      highAr: "حب الشباب الكيسي يحتاج إلى علاج طبي. المضادات الحيوية الفموية، الريتينويدات الموصوفة، أو العلاج الهرموني (للنساء) يمكن أن تكون فعالة للغاية.",
      emergencyAr: "ليس حالة طارئة. استشر أخصائي جلدية لحب الشباب الشديد المستمر لمنع التندب الدائم."
    },
    firstAidSteps: ["Cleanse gently twice daily", "Apply ice to reduce painful cysts", "Don't pop or squeeze pimples", "Use non-comedogenic products", "Change pillowcases frequently"],
    firstAidStepsAr: ["نظف بلطف مرتين يومياً", "ضع ثلجاً لتقليل الأكياس المؤلمة", "لا تفرقع أو تعصر البثور", "استخدم منتجات غير مسددة للمسام", "غيّر أكياس الوسادة باستمرار"],
    redFlags: ["Sudden severe acne with other symptoms", "Acne with signs of hormonal disorder", "Acne leaving significant scars"],
    redFlagsAr: ["حب شباب شديد مفاجئ مع أعراض أخرى", "حب شباب مع علامات اضطراب هرموني", "حب شباب يترك ندوباً كبيرة"],
    didYouKnow: "Isotretinoin (Accutane) remains the most effective acne treatment — it can achieve permanent remission in up to 80% of patients with severe cystic acne.",
    didYouKnowAr: "يظل الإيزوتريتينوين (أكوتان) أكثر علاجات حب الشباب فعالية — يمكنه تحقيق remission دائم في ما يصل إلى 80% من المرضى المصابين بحب الشباب الكيسي الشديد.",
    prevention: ["Regular cleansing", "Non-comedogenic skincare", "Avoid excessive dairy and high-glycemic foods", "Manage stress levels"],
    preventionAr: ["تنظيف منتظم", "عناية بالبشرة غير مسددة للمسام", "تجنب الإفراط في منتجات الألبان والأطعمة عالية السكر في الدم", "إدارة مستويات التوتر"]
  },
  {
    id: "eczema",
    specialtyId: ["dermatology", "allergy"],
    name: "Eczema / Dermatitis",
    nameAr: "الأكزيما / التهاب الجلد",
    severity: "low",
    icon: "layers",
    description: "Itchy, inflamed and dry skin patches",
    descriptionAr: "بقع جلدية حاكة، ملتهبة وجافة",
    questions: [
      { id: "q1", question: "How severe is the itch?", questionAr: "ما شدة الحكة؟", type: "scale", min: 1, max: 10 },
      { id: "q2", question: "Where are the patches?", questionAr: "أين توجد البقع؟", type: "multiple", options: ["Inside elbows/knees", "Hands/feet", "Neck", "Face", "Widespread"], optionsAr: ["داخل المرفقين/الركبتين", "اليدين/القدمين", "الرقبة", "الوجه", "منتشرة"] },
      { id: "q3", question: "Any known triggers?", questionAr: "هل هناك محفزات معروفة؟", type: "multiple", options: ["Soap/detergent", "Wool/synthetic fabrics", "Stress", "Sweat", "Pet dander", "Unknown"], optionsAr: ["صابون/منظف", "صوف/أقمشة صناعية", "التوتر", "العرق", "وبر الحيوانات الأليفة", "غير معروف"] },
      { id: "q4", question: "Any signs of infection?", questionAr: "هل هناك علامات للعدوى؟", type: "single", options: ["No – skin is just itchy/dry", "Yellow crusting (possible infection)", "Red, warm, swollen areas"], optionsAr: ["لا — الجلد حاكة/جاف فقط", "قشرة صفراء (احتمال عدوى)", "مناطق حمراء دافئة متورمة"] }
    ],
    recommendationTemplate: {
      low: "Moisturize liberally after bathing. Use fragrance-free products. Apply mild steroid cream (hydrocortisone) for flares.",
      moderate: "See a dermatologist for prescription topical corticosteroids. Antihistamines help with itch at night.",
      high: "Widespread or severe eczema may need systemic treatment. Biologics (dupilumab) have revolutionized moderate-severe eczema treatment.",
      emergency: "Infected eczema (yellow crusting, warmth, fever) needs antibiotic treatment — see a doctor today.",
      lowAr: "رطّب بسخاء بعد الاستحمام. استخدم منتجات خالية من العطور. ضع كريم ستيرويد خفيف (هيدروكورتيزون) للنوبات.",
      moderateAr: "استشر أخصائي جلدية للحصول على الكورتيكوستيرويدات الموضعية الموصوفة. مضادات الهيستامين تساعد في الحكة ليلاً.",
      highAr: "الأكزيما الواسعة أو الشديدة قد تحتاج إلى علاج全身ي. الأدوية البيولوجية (دوبيلوماب) قد ثورة في علاج الأكزيما المتوسطة إلى الشديدة.",
      emergencyAr: "الأكزيما المصابة (قشرة صفراء، دفء، حمى) تحتاج إلى علاج بالمضادات الحيوية — استشر طبيباً اليوم."
    },
    firstAidSteps: ["Apply thick moisturizer immediately after bathing", "Use lukewarm (not hot) water", "Wear cotton clothing", "Cool compress for relief", "Avoid scratching — trim nails short"],
    firstAidStepsAr: ["ضع مرطباً سميكاً فوراً بعد الاستحمام", "استخدم ماء فاتراً (وليس ساخناً)", "ارتدِ ملابس قطنية", "كمادات باردة للراحة", "تجنب الحك — قص الأظافر قصيرة"],
    redFlags: ["Yellow crusting suggesting infection", "Spreading redness/warmth", "Fever with skin flare"],
    redFlagsAr: ["قشرة صفراء تشير إلى عدوى", "احمرار/دفء منتشر", "حمى مع نوبة جلدية"],
    didYouKnow: "Eczema affects over 230 million people worldwide. The skin barrier in eczema allows moisture to escape and irritants to enter, explaining why consistent moisturizing is the foundation of treatment.",
    didYouKnowAr: "تصيب الأكزيما أكثر من 230 مليون شخص حول العالم. الحاجز الجلدي في الأكزيما يسمح بفقدان الرطوبة ودخول المهيجات، مما يفسر لماذا الترطيب المنتظم هو أساس العلاج.",
    prevention: ["Moisturize daily", "Avoid known triggers", "Use gentle, fragrance-free products", "Manage stress"],
    preventionAr: ["رطّب يومياً", "تجنب المحفزات المعروفة", "استخدم منتجات لطيفة خالية من العطور", "إدارة التوتر"]
  },

  // ─── ORTHOPEDICS ───────────────────────────────────────────────
  {
    id: "back-pain",
    specialtyId: ["orthopedics", "physiotherapy", "general"],
    name: "Back Pain",
    nameAr: "ألم الظهر",
    severity: "low",
    icon: "move-vertical",
    description: "Lower, middle, or upper back discomfort",
    descriptionAr: "انزعاج في أسفل أو منتصف أو أعلى الظهر",
    questions: [
      { id: "q1", question: "Where is the pain located?", questionAr: "أين يقع الألم؟", type: "single", options: ["Lower back", "Middle back", "Upper back/neck", "All of the back"], optionsAr: ["أسفل الظهر", "منتصف الظهر", "أعلى الظهر/الرقبة", "كل الظهر"] },
      { id: "q2", question: "How did it start?", questionAr: "كيف بدأ؟", type: "single", options: ["After lifting/bending", "After sitting long time", "Gradually without cause", "After trauma/injury", "Just woke up with it"], optionsAr: ["بعد رفع/انحناء", "بعد الجلوس لفترة طويلة", "تدريجياً بدون سبب", "بعد صدمة/إصابة", "استيقظت وأنت تشعر به"] },
      { id: "q3", question: "Does the pain radiate anywhere?", questionAr: "هل الألم يشع إلى أي مكان؟", type: "single", options: ["No, stays in back", "Down one leg (sciatica)", "Down both legs", "Into abdomen"], optionsAr: ["لا، يبقى في الظهر", "إلى ساق واحدة (عرق النسا)", "إلى الساقين", "إلى البطن"], emergencyTrigger: ["Into abdomen"] },
      { id: "q4", question: "Any of these with the pain?", questionAr: "هل يوجد أي من هذه مع الألم؟", type: "multiple", options: ["Numbness/tingling in legs", "Bladder/bowel changes", "Weakness in legs", "Fever"], optionsAr: ["خدر/وخز في الساقين", "تغيرات في المثانة/الأمعاء", "ضعف في الساقين", "حمى"], emergencyTrigger: ["Bladder/bowel changes"] },
      { id: "q5", question: "Pain severity (1-10)", questionAr: "شدة الألم (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Most acute back pain resolves in 2–6 weeks. Stay active (avoid bed rest), apply heat/ice, take OTC pain relief.",
      moderate: "Physiotherapy is the most evidence-based treatment for back pain. An assessment within 1–2 weeks is recommended.",
      high: "Chronic or severe back pain needs proper diagnosis — rule out disc herniation, spinal stenosis, or other structural causes.",
      emergency: "Back pain with bladder/bowel changes or progressive leg weakness is a medical emergency (cauda equina syndrome) — go to ER now.",
      lowAr: "معظم آلام الظهر الحادة تزول في 2–6 أسابيع. حافظ على النشاط (تجنب الراحة في الفراش)، ضع حرارة/ثلج، خذ مسكنات الألم المتاحة دون وصفة.",
      moderateAr: "العلاج الطبيعي هو العلاج الأكثر اعتماداً على الأدلة لألم الظهر. يُنصح بالتقييم خلال 1–2 أسابيع.",
      highAr: "ألم الظهر المزمن أو الشديد يحتاج إلى تشخيص صحيح — استبعد الفتق الغضروفي، تضيق العمود الفقري، أو أسباب هيكلية أخرى.",
      emergencyAr: "ألم الظهر مع تغيرات في المثانة/الأمعاء أو ضعف تقدمي في الساقين هو حالة طارئة (متلازمة ذنب الفرس) — اذهب إلى الطوارئ الآن."
    },
    firstAidSteps: ["Apply ice first 48–72 hours, then switch to heat", "Take ibuprofen/naproxen (anti-inflammatory)", "Stay active — gentle walking helps", "Avoid prolonged bed rest", "Try gentle stretches"],
    firstAidStepsAr: ["ضع ثلجاً أول 48–72 ساعة، ثم حول إلى حرارة", "خذ إيبوبروفين/نابروكسين (مضاد للالتهاب)", "حافظ على النشاط — المشي اللطيف يساعد", "تجنب الراحة الطويلة في الفراش", "جرب تمارين مطولة لطيفة"],
    redFlags: ["Bladder or bowel incontinence", "Saddle area numbness", "Progressive leg weakness", "Back pain with unexplained weight loss", "Night pain unrelieved by rest"],
    redFlagsAr: ["سلس المثانة أو الأمعاء", "خدر في منطقة الدراجة", "ضعف تقدمي في الساقين", "ألم ظهر مع فقدان وزن غير مبرر", "ألم ليلي لا تخففه الراحة"],
    didYouKnow: "Back pain is the leading cause of disability worldwide. Staying active and continuing normal activities (modified if painful) leads to faster recovery than rest.",
    didYouKnowAr: "ألم الظهر هو السبب الرئيسي للإعاقة في جميع أنحاء العالم. البقاء نشطاً ومواصلة الأنشطة الطبيعية (معدلة إذا كانت مؤلمة) يؤدي إلى تعافٍ أسرع من الراحة.",
    prevention: ["Regular core strengthening exercises", "Good posture when sitting/standing", "Proper lifting technique", "Ergonomic workspace setup", "Healthy weight maintenance"],
    preventionAr: ["تمارين منتظمة لتقوية العضلات الأساسية", "وضعية جيدة عند الجلوس/الوقوف", "تقنية رفع صحيحة", "إعداد مساحة عمل مريحة", "الحفاظ على وزن صحي"]
  },
  {
    id: "joint-pain",
    specialtyId: ["orthopedics", "rheumatology", "sports"],
    name: "Joint Pain",
    nameAr: "ألم المفاصل",
    severity: "low",
    icon: "link",
    description: "Pain, stiffness, or swelling in joints",
    descriptionAr: "ألم، تصلب، أو تورم في المفاصل",
    questions: [
      { id: "q1", question: "Which joint(s) are affected?", questionAr: "أي المفاصل متأثرة؟", type: "multiple", options: ["Knee", "Hip", "Shoulder", "Elbow", "Wrist/hand", "Ankle/foot", "Multiple joints"], optionsAr: ["الركبة", "الورك", "الكتف", "الكوع", "المعصم/اليد", "الكاحل/القدم", "مفاصل متعددة"] },
      { id: "q2", question: "How did it start?", questionAr: "كيف بدأ؟", type: "single", options: ["After injury/fall", "Gradual onset", "After overuse/sports", "Woke up with it"], optionsAr: ["بعد إصابة/سقوط", "بداية تدريجية", "بعد الإفراط/رياضة", "استيقظت وأنت تشعر به"] },
      { id: "q3", question: "Is there swelling or redness?", questionAr: "هل هناك تورم أو احمرار؟", type: "single", options: ["No swelling", "Mild swelling", "Significant swelling + warmth + redness"], optionsAr: ["لا يوجد تورم", "تورم خفيف", "تورم كبير + دفء + احمرار"] },
      { id: "q4", question: "Morning stiffness?", questionAr: "تصلب صباحي؟", type: "single", options: ["No stiffness", "Less than 30 minutes", "More than 30 minutes", "All day stiffness"], optionsAr: ["لا يوجد تصلب", "أقل من 30 دقيقة", "أكثر من 30 دقيقة", "تصلب طوال اليوم"] },
      { id: "q5", question: "Pain severity (1-10)", questionAr: "شدة الألم (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Rest the joint, apply ice for 20 minutes several times daily. Elevate if swollen. RICE method (Rest, Ice, Compression, Elevation).",
      moderate: "If pain persists more than 2 weeks or significantly limits movement, see a doctor or physiotherapist for assessment.",
      high: "Joint with severe swelling, warmth, and redness may indicate infection or gout — needs urgent medical evaluation.",
      emergency: "Hot, severely swollen joint with fever (septic arthritis) — seek emergency care immediately.",
      lowAr: "ارح المفصل، ضع ثلجاً لمدة 20 دقيقة عدة مرات يومياً. ارفعه إذا كان متورماً. طريقة RICE (راحة، ثلج، ضغط، رفع).",
      moderateAr: "إذا استمر الألم لأكثر من أسبوعين أو حد الحركة بشكل كبير، استشر طبيباً أو أخصائي علاج طبيعي للتقييم.",
      highAr: "المفصل الشديد التورم والدفء والاحمرار قد يشير إلى عدوى أو النقرس — يحتاج إلى تقييم طبي عاجل.",
      emergencyAr: "مفصل ساخن وشديد التورم مع حمى (التهاب المفاصل الصديدي) — اطلب الرعاية الطارئة فوراً."
    },
    firstAidSteps: ["Rest the affected joint", "Apply ice 20 min on/20 min off", "Compress gently with bandage", "Elevate above heart level", "Take anti-inflammatory medication"],
    firstAidStepsAr: ["ارح المفصل المتأثر", "ضع ثلجاً 20 دقيقة تشغيل/20 دقيقة إيقاف", "اضغط بلطف بضمادة", "ارفع فوق مستوى القلب", "خذ دواء مضاد للالتهاب"],
    redFlags: ["Joint that is hot, red, and very swollen (may be infected)", "Fever with joint pain", "Joint cannot bear weight", "Rapidly worsening symptoms"],
    redFlagsAr: ["مفصل ساخن، أحمر، وشديد التورم (قد يكون مصاباً)", "حمى مع ألم مفصل", "المفصل لا يتحمل الوزن", "أعراض تتفاقم بسرعة"],
    didYouKnow: "Osteoarthritis affects over 500 million people globally. Regular low-impact exercise (swimming, cycling) is one of the most effective treatments for maintaining joint function.",
    didYouKnowAr: "يصيب الفصال العظمي أكثر من 500 مليون شخص حول العالم. التمارين المنخفضة التأثير المنتظمة (السباحة، ركوب الدراجات) هي واحدة من أكثر العلاجات فعالية للحفاظ على وظيفة المفصل.",
    prevention: ["Maintain healthy weight (reduces knee load by 4× for each pound)", "Regular low-impact exercise", "Proper warm-up before activity", "Good posture and joint alignment"],
    preventionAr: ["حافظ على وزن صحي (يقلل حمل الركبة 4 أضعاف لكل كيلو)", "تمارين منخفضة التأثير منتظمة", "إحماء مناسب قبل النشاط", "وضعية جيدة ومحاذاة المفاصل"]
  },
  {
    id: "sports-injury",
    specialtyId: ["sports", "orthopedics", "physiotherapy"],
    name: "Sports Injury",
    nameAr: "إصابة رياضية",
    severity: "moderate",
    icon: "zap",
    description: "Sprains, strains, or overuse injuries from activity",
    descriptionAr: "الالتواءات، والشد، أو إصابات الإفراط الناتجة عن النشاط",
    questions: [
      { id: "q1", question: "What type of injury?", questionAr: "ما نوع الإصابة؟", type: "single", options: ["Ankle sprain", "Muscle strain/pull", "Knee injury", "Shoulder injury", "Overuse/repetitive strain"], optionsAr: ["التواء الكاحل", "شد/تمزق عضلي", "إصابة الركبة", "إصابة الكتف", "إفراط/إجهاد متكرر"] },
      { id: "q2", question: "Did you hear a pop or feel a snap?", questionAr: "هل سمعت فرقعة أو شعرت بانفجار؟", type: "single", options: ["Yes – heard a pop", "Yes – felt something snap", "No unusual sound/feeling"], optionsAr: ["نعم — سمعت فرقعة", "نعم — شعرت بشيء ينفجر", "لا يوجد صوت/إحساس غير عادي"] },
      { id: "q3", question: "Can you weight-bear on the injury?", questionAr: "هل يمكنك تحمل الوزن على الإصابة؟", type: "single", options: ["Yes, fully", "Partially, with pain", "No – cannot bear weight"], optionsAr: ["نعم، بشكل كامل", "جزئياً، مع ألم", "لا — لا يمكن تحمل الوزن"] },
      { id: "q4", question: "Pain level (1-10)", questionAr: "مستوى الألم (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Apply RICE (Rest, Ice, Compression, Elevation). Most mild sprains improve in 1–2 weeks.",
      moderate: "See a sports physiotherapist for assessment and rehabilitation program. Returning to sport too early risks re-injury.",
      high: "Significant mechanism of injury or inability to bear weight needs imaging to rule out fracture or ligament tear.",
      emergency: "Obvious deformity, bone through skin, or severe neurovascular compromise — seek emergency care immediately.",
      lowAr: "طبق RICE (راحة، ثلج، ضغط، رفع). معظم الالتواءات الخفيفة تتحسن في 1–2 أسابيع.",
      moderateAr: "استشر أخصائي علاج طبيعي رياضي للتقييم وبرنامج إعادة التأهيل. العودة المبكرة للرياضة تعرضك لخطر الإصابة مرة أخرى.",
      highAr: "آلية إصابة كبيرة أو عدم القدرة على تحمل الوزن تحتاج إلى تصوير لاستبعاد الكسر أو تمزق الرباط.",
      emergencyAr: "تشوه واضح، عظم يخرج من الجلد، أو ضرر عصبي/وعائي شديد — اطلب الرعاية الطارئة فوراً."
    },
    firstAidSteps: ["Stop activity immediately", "Apply ice wrapped in cloth (20 min on/20 off)", "Compress with elastic bandage", "Elevate the injured limb", "Take anti-inflammatory medication"],
    firstAidStepsAr: ["أوقف النشاط فوراً", "ضع ثلجاً ملفوفاً بقماش (20 دقيقة تشغيل/20 إيقاف)", "اضغط بضمادة مرنة", "ارفع الطرف المصاب", "خذ دواء مضاد للالتهاب"],
    redFlags: ["Visible deformity", "Complete inability to move joint", "Numbness or tingling distal to injury", "Severe/worsening pain"],
    redFlagsAr: ["تشوه واضح", "عدم القدرة الكاملة على تحريك المفصل", "خدر أو وخز أسفل الإصابة", "ألم شديد/متفاقم"],
    didYouKnow: "The old RICE method has been updated to POLICE: Protection, Optimal Loading, Ice, Compression, Elevation. Complete rest is no longer recommended — some movement aids recovery.",
    didYouKnowAr: "تم تحديث طريقة RICE القديمة إلى POLICE: الحماية، التحميل الأمثل، الثلج، الضغط، الرفع. لم يعد الراحة التامة موصى بها — بعض الحركة تساعد في التعافي.",
    prevention: ["Proper warm-up and cool-down", "Gradually increase training intensity", "Use proper technique", "Adequate rest between sessions", "Core strength training"],
    preventionAr: ["إحماء وتبريد مناسبين", "زيادة شدة التدريج تدريجياً", "استخدم تقنية صحيحة", "راحة كافية بين الجلسات", "تدريب قوة العضلات الأساسية"]
  },

  // ─── PSYCHIATRY / PSYCHOLOGY ───────────────────────────────────
  {
    id: "anxiety-attack",
    specialtyId: ["psychiatry", "psychology", "general"],
    name: "Anxiety / Panic Attack",
    nameAr: "القلق / نوبة الهلع",
    severity: "moderate",
    icon: "waves",
    description: "Intense anxiety, panic, or overwhelming fear",
    descriptionAr: "قلق شديد، هلع، أو خوف ساحق",
    questions: [
      { id: "q1", question: "What symptoms are you experiencing?", questionAr: "ما الأعراض التي تشعر بها؟", type: "multiple", options: ["Rapid heartbeat", "Shortness of breath", "Chest tightness", "Trembling/shaking", "Dizziness", "Feeling of doom", "Numbness/tingling"], optionsAr: ["نبض سريع", "ضيق في التنفس", "شد في الصدر", "رجفة/ارتعاش", "دوار", "إحساس بالهلاك", "خدر/وخز"] },
      { id: "q2", question: "How long does a typical episode last?", questionAr: "كم تستمر النوبة النموذجية؟", type: "single", options: ["Seconds to minutes", "10–30 minutes", "More than 30 minutes", "Hours/days of anxiety"], optionsAr: ["ثوانٍ إلى دقائق", "10–30 دقيقة", "أكثر من 30 دقيقة", "ساعات/أيام من القلق"] },
      { id: "q3", question: "How often does this happen?", questionAr: "كم يحدث هذا؟", type: "single", options: ["First time ever", "Occasional", "Weekly", "Almost daily"], optionsAr: ["أول مرة على الإطلاق", "من حين لآخر", "أسبوعياً", "تقريباً يومياً"] },
      { id: "q4", question: "Does it prevent you from normal activities?", questionAr: "هل يمنعك من الأنشطة الطبيعية؟", type: "single", options: ["No significant impact", "Mild impact", "Significant impact", "Completely avoidant"], optionsAr: ["لا يوجد تأثير كبير", "تأثير خفيف", "تأثير كبير", "تجنب تام"] },
      { id: "q5", question: "Impact on daily functioning (1-10)", questionAr: "التأثير على الأداء اليومي (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "In the moment: 4-7-8 breathing (inhale 4s, hold 7s, exhale 8s). Grounding technique: name 5 things you see, 4 you hear, 3 you touch.",
      moderate: "Cognitive behavioral therapy (CBT) is the gold standard for anxiety and panic. A short course can be transformative.",
      high: "Frequent panic attacks significantly impacting life need professional treatment — combination of CBT + medication is very effective.",
      emergency: "If unsure whether symptoms are panic or cardiac — seek medical evaluation. Panic disorder is not life-threatening, but rule out heart issues.",
      lowAr: "في اللحظة: تنفس 4-7-8 (شهيق 4 ثوانٍ، حبس 7 ثوانٍ، زفير 8 ثوانٍ). تقنية التأريض: سمّ 5 أشياء تراها، 4 تسمعها، 3 تلمسها.",
      moderateAr: "العلاج السلوكي المعرفي (CBT) هو المعيار الذهبي للقلق والهلع. دورة قصيرة يمكن أن تكون محوّلة.",
      highAr: "نوبات الهلع المتكررة التي تؤثر بشكل كبير على الحياة تحتاج إلى علاج مهني — الجمع بين CBT + الدواء فعال للغاية.",
      emergencyAr: "إذا لم تكن متأكداً مما إذا كانت الأعراض هلعاً أو قلبياً — اطلب تقييماً طبياً. اضطراب الهلع لا يهدد الحياة، لكن استبعد مشاكل القلب."
    },
    firstAidSteps: [
      "Remember: panic attacks are temporary and will pass",
      "Breathe slowly — inhale 4 counts, hold 4, exhale 6",
      "Ground yourself: feel feet on floor, hold something cold",
      "Name 5 things you can see in the room",
      "Remind yourself: 'This is anxiety, not danger — it will pass'"
    ],
    firstAidStepsAr: [
      "تذكر: نوبات الهلع مؤقتة وستمر",
      "تنفس ببطء — شهيق 4 عدات، حبس 4، زفير 6",
      "أرضِ نفسك: اشعر بقدميك على الأرض، امسك شيئاً بارداً",
      "سمّ 5 أشياء تراها في الغرفة",
      "ذكّر نفسك: 'هذا قلق، وليس خطراً — سيممر'"
    ],
    redFlags: ["New-onset chest pain needs cardiac evaluation", "Panic attacks triggered by specific trauma may indicate PTSD", "Panic with thoughts of self-harm"],
    redFlagsAr: ["ألم صدر جديد يحتاج تقييماً قلبياً", "نوبات الهلع المحفزة بصدمة محددة قد تشير إلى اضطراب ما بعد الصدمة", "هلع مع أفكار إيذاء النفس"],
    didYouKnow: "Panic attacks activate the same physiological response as genuine danger. The physical symptoms are real — but the trigger is a misfiring alarm system, not actual threat.",
    didYouKnowAr: "تنشط نوبات الهلع نفس الاستجابة الفسيولوجية للخطر الحقيقي. الأعراض الجسدية حقيقية — لكن المحفز هو نظام إنذار خاطئ، وليس تهديداً فعلياً.",
    prevention: ["Regular exercise reduces anxiety significantly", "Limit caffeine and alcohol", "Mindfulness and meditation practice", "Regular CBT or therapy", "Adequate sleep"],
    preventionAr: ["التمارين المنتظمة تقلل القلق بشكل كبير", "حدد الكافيين والكحول", "ممارسة اليقظة الذهنية والتأمل", "CBT أو علاج منتظم", "نوم كافٍ"]
  },
  {
    id: "insomnia",
    specialtyId: ["psychiatry", "psychology", "general"],
    name: "Insomnia",
    nameAr: "الأرق",
    severity: "low",
    icon: "moon",
    description: "Difficulty falling or staying asleep",
    descriptionAr: "صعوبة في النوم أو البقاء نائماً",
    questions: [
      { id: "q1", question: "What is your main sleep problem?", questionAr: "ما مشكلة النوم الرئيسية لديك؟", type: "single", options: ["Can't fall asleep", "Wake up during night", "Wake up too early", "All of these"], optionsAr: ["لا أستطيع النوم", "أستيقظ أثناء الليل", "أستيقظ مبكراً جداً", "كل ما سبق"] },
      { id: "q2", question: "How long have you had this problem?", questionAr: "منذ متى لديك هذه المشكلة؟", type: "single", options: ["Less than a month", "1–3 months", "3–6 months", "More than 6 months"], optionsAr: ["أقل من شهر", "1–3 أشهر", "3–6 أشهر", "أكثر من 6 أشهر"] },
      { id: "q3", question: "What do you think causes it?", questionAr: "ما الذي تعتقد أنه يسببه؟", type: "multiple", options: ["Stress/worry", "Screen use at night", "Irregular schedule", "Pain/discomfort", "Medications", "Unknown"], optionsAr: ["التوتر/القلق", "استخدام الشاشات ليلاً", "جدول غير منتظم", "ألم/انزعاج", "أدوية", "غير معروف"] },
      { id: "q4", question: "How does poor sleep affect your day?", questionAr: "كيف يؤثر النوم السيء على يومك؟", type: "multiple", options: ["Fatigue", "Poor concentration", "Mood changes", "Reduced performance", "Minimal impact"], optionsAr: ["تعب", "صعوبة في التركيز", "تغيرات المزاج", "أداء مخفض", "تأثير طفيف"] },
      { id: "q5", question: "Sleep quality rating (1=terrible, 10=great)", questionAr: "تقييم جودة النوم (1=سيء جداً، 10=ممتاز)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Practice good sleep hygiene: consistent schedule, dark/cool room, no screens 1 hour before bed, avoid caffeine after 2pm.",
      moderate: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is more effective than sleeping pills. Many digital CBT-I programs are available.",
      high: "Chronic insomnia (3+ months) affecting quality of life needs professional assessment to rule out sleep apnea or underlying conditions.",
      emergency: "Not typically an emergency. If you are having thoughts of self-harm due to sleep deprivation, seek help immediately.",
      lowAr: "مارس نظافة النوم الجيدة: جدول منتظم، غرفة مظلمة/باردة، لا شاشات قبل ساعة من النوم، تجنب الكافيين بعد الساعة 2 ظهراً.",
      moderateAr: "العلاج السلوكي المعرفي للأرق (CBT-I) أكثر فعالية من حبوب النوم. العديد من برامج CBT-I الرقمية متاحة.",
      highAr: "الأرق المزمن (3+ أشهر) الذي يؤثر على جودة الحياة يحتاج إلى تقييم مهني لاستبعاد انقطاع النفس أثناء النوم أو الحالات الكامنة.",
      emergencyAr: "ليس عادةً حالة طارئة. إذا كنت تفكر في إيذاء النفس بسبب الحرمان من النوم، اطلب المساعدة فوراً."
    },
    firstAidSteps: ["Keep a consistent wake time even after poor sleep", "Get out of bed if awake >20 min — don't lie in frustration", "Progressive muscle relaxation for tension", "Reserve bedroom only for sleep (no phones/TV)", "Cool room temperature (16–18°C / 60–65°F)"],
    firstAidStepsAr: ["حافظ على وقت استيقاظ منتظم حتى بعد نوم سيء", "اخرج من السرير إذا كنت مستيقظاً >20 دقيقة — لا تستلقِ محبطاً", "الاسترخاء العضلي التدريجي للتوتر", "احتفظ بالغرفة للنوم فقط (لا هواتف/تلفاز)", "درجة حرارة الغرفة باردة (16–18°م / 60–65°ف)"],
    redFlags: ["Insomnia with depression or suicidal thoughts", "Loud snoring or gasping (may be sleep apnea)", "Sleep deprivation causing safety issues (e.g., driving)"],
    redFlagsAr: ["أرق مع اكتئاب أو أفكار انتحارية", "شخير بصوت عالٍ أو جهد في التنفس (قد يكون انقطاع النفس أثناء النوم)", "حرمان من النوم يسبب مشاكل سلامة (مثل القيادة)"],
    didYouKnow: "CBT-I (Cognitive Behavioral Therapy for Insomnia) has a 70–80% success rate and produces better long-term outcomes than sleep medication, without dependency.",
    didYouKnowAr: "يبلغ معدل نجاح CBT-I (العلاج السلوكي المعرفي للأرق) 70–80% وينتج نتائج طويلة المدى أفضل من أدوية النوم، دون إدمان.",
    prevention: ["Consistent sleep/wake schedule", "Regular daytime exercise", "Morning sunlight exposure", "Limit naps to 20 minutes max"],
    preventionAr: ["جدول نوم/استيقاظ منتظم", "تمارين نهارية منتظمة", "التعرض لأشعة الشمس الصباحية", "حدد القيلولة إلى 20 دقيقة كحد أقصى"]
  },
  {
    id: "depression",
    specialtyId: ["psychiatry", "psychology"],
    name: "Depression Symptoms",
    nameAr: "أعراض الاكتئاب",
    severity: "moderate",
    icon: "cloud-rain",
    description: "Persistent low mood, hopelessness or loss of interest",
    descriptionAr: "مزاج منخفض مستمر، يأس أو فقدان الاهتمام",
    questions: [
      { id: "q1", question: "How long have you felt this way?", questionAr: "منذ متى تشعر بهذا الشكل؟", type: "single", options: ["Less than 2 weeks", "2–4 weeks", "1–3 months", "More than 3 months"], optionsAr: ["أقل من أسبوعين", "2–4 أسابيع", "1–3 أشهر", "أكثر من 3 أشهر"] },
      { id: "q2", question: "Which symptoms resonate with you?", questionAr: "ما الأعراض التي تشعر بها؟", type: "multiple", options: ["Persistent sadness", "Loss of interest in things I used to enjoy", "Fatigue or no energy", "Changes in appetite/weight", "Difficulty concentrating", "Feeling worthless/guilty", "Thoughts of self-harm"], optionsAr: ["حزن مستمر", "فقدان الاهتمام بأشياء كنت أستمتع بها", "تعب أو عدم طاقة", "تغيرات في الشهية/الوزن", "صعوبة في التركيز", "الشعور بعدم القيمة/الذنب", "أفكار إيذاء النفس"] },
      { id: "q3", question: "Impact on daily life?", questionAr: "التأثير على الحياة اليومية؟", type: "single", options: ["Mild – coping okay", "Moderate – struggling but functioning", "Severe – barely functioning", "Crisis – cannot cope"], optionsAr: ["خفيف — أتأقلم بشكل جيد", "متوسط — أعاني لكن أعمل", "شديد — بالكاد أعمل", "أزمة — لا أستطيع التأقلم"] },
      { id: "q4", question: "Overall wellbeing (1-10)", questionAr: "الصحة العامة (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Talk to someone you trust. Physical exercise has strong evidence for improving mild depression. Practice self-compassion.",
      moderate: "Talking therapy (CBT, counseling) is very effective. Your GP can refer you or you can self-refer in many countries.",
      high: "Moderate-severe depression with significant functional impact needs professional help — therapy and/or antidepressants are effective.",
      emergency: "If you have thoughts of self-harm or suicide — please reach out to a crisis helpline immediately. You are not alone.",
      lowAr: "تحدث إلى شخص تثق به. التمارين البدنية لديها أدلة قوية على تحسين الاكتئاب الخفيف. مارس الرحمة الذاتية.",
      moderateAr: "العلاج بالحديث (CBT، الاستشارة) فعال للغاية. يمكن لطبيبك أن يحيلك أو يمكنك الإحالة الذاتية في العديد من البلدان.",
      highAr: "الاكتئاب المتوسط إلى الشديد مع تأثير كبير على الأداء الوظيفي يحتاج إلى مساعدة مهنية — العلاج و/أو مضادات الاكتئاب فعالة.",
      emergencyAr: "إذا كنت تفكر في إيذاء نفسك أو الانتحار — يرجى الاتصال بخط أزمة فوراً. أنت لست وحيداً."
    },
    firstAidSteps: ["Reach out to one trusted person today", "Try to maintain basic routines (sleep, meals, movement)", "Limit alcohol which worsens depression", "Get outside for a short walk", "Be kind to yourself — depression is an illness, not a choice"],
    firstAidStepsAr: ["تواصل مع شخص تثق به اليوم", "حاول الحفاظ على روتين أساسي (نوم، وجبات، حركة)", "حدد الكحول الذي يزيد الاكتئاب", "اخرج للخارج في نزهة قصيرة", "كن لطيفاً مع نفسك — الاكتئاب مرض، وليس اختياراً"],
    redFlags: ["Thoughts of self-harm or suicide — seek immediate help", "Unable to care for self", "Psychotic symptoms"],
    redFlagsAr: ["أفكار إيذاء النفس أو الانتحار — اطلب المساعدة فوراً", "غير قادر على الاعتناء بنفسه", "أعراض ذهانية"],
    didYouKnow: "Depression affects 280 million people globally. It's a real medical condition with effective treatments. Most people with depression who receive treatment see significant improvement.",
    didYouKnowAr: "يصيب الاكتئاب 280 مليون شخص حول العالم. إنه حالة طبية حقيقية لها علاجات فعالة. معظم الأشخاص المصابين بالاكتئاب الذين يتلقون علاجاً يرون تحسناً كبيراً.",
    prevention: ["Regular exercise (30 min/day reduces depression risk by 26%)", "Social connection", "Good sleep", "Limiting alcohol", "Purposeful activity and meaning"],
    preventionAr: ["تمارين منتظمة (30 دقيقة/يوم تقلل خطر الاكتئاب بنسبة 26%)", "التواصل الاجتماعي", "نوم جيد", "تحديد الكحول", "نشاط هادف ومعنى"]
  },
  {
    id: "pre-exam-anxiety",
    specialtyId: ["psychology", "general"],
    name: "Pre-Exam / Performance Anxiety",
    nameAr: "قلق ما قبل الامتحان / القلق الأدائي",
    severity: "low",
    icon: "book-open",
    description: "Anxiety related to tests, exams, or performance",
    descriptionAr: "قلق مرتبط بالاختبارات أو الأداء",
    questions: [
      { id: "q1", question: "How far away is your exam/event?", questionAr: "كم يبعد امتحانك/حدثك؟", type: "single", options: ["Today/tomorrow", "This week", "Next week", "More than a week"], optionsAr: ["اليوم/غداً", "هذا الأسبوع", "الأسبوع القادم", "أكثر من أسبوع"] },
      { id: "q2", question: "Physical symptoms?", questionAr: "أعراض جسدية؟", type: "multiple", options: ["Stomach upset", "Headache", "Can't sleep", "Rapid heartbeat", "Blank mind when studying"], optionsAr: ["اضطراب المعدة", "صداع", "لا أستطيع النوم", "نبض سريع", "عقل فارغ عند الدراسة"] },
      { id: "q3", question: "Preparation level?", questionAr: "مستوى الاستعداد؟", type: "single", options: ["Well-prepared", "Mostly prepared", "Somewhat prepared", "Underprepared"], optionsAr: ["مستعد جيداً", "مستعد إلى حد كبير", "مستعد إلى حد ما", "غير مستعد"] },
      { id: "q4", question: "Anxiety level (1-10)", questionAr: "مستوى القلق (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Use active recall study techniques. Plan short study sessions with breaks (Pomodoro). Deep breathing before and during the exam.",
      moderate: "Your anxiety is your body preparing you for performance. Reframe it as excitement. Visualization and deep breathing help.",
      high: "If exam anxiety significantly impairs performance, consider talking to a counselor about specific anxiety management strategies.",
      emergency: "Panic attack during exam — use grounding: breathe slowly, name 5 things you see, it will pass within minutes.",
      lowAr: "استخدم تقنيات الاستذكار النشط. خطط لجلسات دراسية قصيرة مع فواصل (بومودورو). تنفس عميق قبل وأثناء الامتحان.",
      moderateAr: "قلقك هو جسمك يجهزك للأداء. أعد إطاره كإثارة. التصور والتنفس العميق يساعدان.",
      highAr: "إذا كان قلق الامتحان يضعف الأداء بشكل كبير، فكر في التحدث إلى مستشار حول استراتيجيات إدارة القلق المحددة.",
      emergencyAr: "نوبة هلع أثناء الامتحان — استخدم التأريض: تنفس ببطء، سمّ 5 أشياء تراها، ستمر خلال دقائق."
    },
    firstAidSteps: ["Deep breathing: 4 counts in, 4 hold, 6 out", "Box breathing for acute anxiety", "Light exercise or walk", "Healthy meal and adequate sleep", "Positive self-talk: 'I am prepared'"],
    firstAidStepsAr: ["تنفس عميق: شهيق 4 عدات، حبس 4، زفير 6", "تنفس الصندوق للقلق الحاد", "تمارين خفيفة أو نزهة", "وجبة صحية ونوم كافٍ", "حديث إيجابي مع النفس: 'أنا مستعد'"],
    redFlags: ["Panic attack that impairs ability to complete exam", "Anxiety causing complete avoidance", "Physical symptoms needing medical attention"],
    redFlagsAr: ["نوبة هلع تعيق القدرة على إكمال الامتحان", "قلق يسبب تجنباً تاماً", "أعراض جسدية تحتاج إلى عناية طبية"],
    didYouKnow: "A moderate amount of anxiety actually improves performance — this is the Yerkes-Dodson curve. The goal isn't to eliminate anxiety but to optimize it.",
    didYouKnowAr: "كمية معتدلة من القلق تحسن الأداء فعلياً — هذا هو منحنى يركس-دودسون. الهدف ليس إزالة القلق بل تحسينه.",
    prevention: ["Start studying early to build genuine confidence", "Practice mindfulness daily", "Exercise regularly", "Get adequate sleep — especially night before exam"],
    preventionAr: ["ابدأ الدراسة مبكراً لبناء ثقة حقيقية", "مارس اليقظة الذهنية يومياً", "تمارين منتظمة", "احصل على نوم كافٍ — خاصة ليلة الامتحان"]
  },

  // ─── EYE / ENT ─────────────────────────────────────────────────
  {
    id: "eye-redness",
    specialtyId: ["ophthalmology"],
    name: "Eye Redness / Pink Eye",
    nameAr: "احمرار العين / التهاب الملتحمة",
    severity: "low",
    icon: "eye",
    description: "Red, irritated, or inflamed eye",
    descriptionAr: "عين حمراء، مهيجة أو ملتهبة",
    questions: [
      { id: "q1", question: "Which eye is affected?", questionAr: "أي عين متأثرة؟", type: "single", options: ["Right eye only", "Left eye only", "Both eyes"], optionsAr: ["العين اليمنى فقط", "العين اليسرى فقط", "العينين"] },
      { id: "q2", question: "What type of discharge?", questionAr: "ما نوع الإفرازات؟", type: "single", options: ["None", "Watery", "White/yellow pus"], optionsAr: ["لا يوجد", "مائي", "صديد أبيض/أصفر"] },
      { id: "q3", question: "Other symptoms?", questionAr: "أعراض أخرى؟", type: "multiple", options: ["Itching", "Burning", "Blurred vision", "Sensitivity to light", "Eye pain", "Foreign body feeling"], optionsAr: ["حكة", "حرقة", "رؤية ضبابية", "حساسية للضوء", "ألم في العين", "إحساس بجسم غريب"] },
      { id: "q4", question: "Did it start after contact with a sick person?", questionAr: "هل بدأ بعد الاتصال بشخص مريض؟", type: "single", options: ["Yes", "No", "Not sure"], optionsAr: ["نعم", "لا", "غير متأكد"] }
    ],
    recommendationTemplate: {
      low: "Viral conjunctivitis is contagious — wash hands, don't share towels. Cold compress for comfort. Usually resolves in 1–2 weeks.",
      moderate: "Bacterial conjunctivitis with yellow pus needs antibiotic eye drops from a doctor.",
      high: "Red eye with significant pain, light sensitivity, and blurred vision needs urgent ophthalmology assessment (may be iritis or keratitis).",
      emergency: "Sudden vision loss or severe eye pain — seek emergency ophthalmology care immediately.",
      lowAr: "التهاب الملتحمة الفيروسي معدٍ — اغسل يديك، لا تشارك المناشف. كمادات باردة للراحة. يزول عادةً في 1–2 أسابيع.",
      moderateAr: "التهاب الملتحمة البكتيري مع صديد أصفر يحتاج إلى قطرات مضادات حيوية من طبيب.",
      highAr: "العين الحمراء مع ألم كبير، حساسية للضوء، ورؤية ضبابية تحتاج إلى تقييم طبي عاجل (قد يكون التهاب القزحية أو القرنية).",
      emergencyAr: "فقدان بصر مفاجئ أو ألم شديد في العين — اطلب رعاية طبية عاجلة للعيون فوراً."
    },
    firstAidSteps: ["Gently clean eye with clean, damp cloth", "Wash hands frequently", "Don't touch or rub eyes", "Remove contact lenses", "Cold compress for comfort"],
    firstAidStepsAr: ["نظف العين بلطف بقطعة قماش نظيفة ورطبة", "اغسل يديك باستمرار", "لا تلمس أو تدعك عينيك", "أزل العدسات اللاصقة", "كمادات باردة للراحة"],
    redFlags: ["Sudden vision loss", "Severe eye pain", "Foreign object in eye", "Chemical splash"],
    redFlagsAr: ["فقدان بصر مفاجئ", "ألم شديد في العين", "جسم غريب في العين", "سائل كيميائي"],
    didYouKnow: "Viral pink eye (most common type) is highly contagious for up to 2 weeks. Antibiotics don't help — it must run its course. Strict handwashing prevents spread.",
    didYouKnowAr: "التهاب الملتحمة الفيروسي (الأكثر شيوعاً) معدٍ للغاية لمدة تصل إلى أسبوعين. المضادات الحيوية لا تساعد — يجب أن يمر بمساره. غسل اليدين الصارم يمنع الانتشار.",
    prevention: ["Regular handwashing", "Don't share personal items", "Protect eyes from chemicals and UV", "Regular eye exams"],
    preventionAr: ["غسل اليدين بانتظام", "لا تشارك الأغراض الشخصية", "احمِ عينيك من المواد الكيميائية والأشعة فوق البنفسجية", "فحوصات عينية منتظمة"]
  },
  {
    id: "ear-pain",
    specialtyId: ["ent", "pediatrics"],
    name: "Ear Pain",
    nameAr: "ألم الأذن",
    severity: "low",
    icon: "ear",
    description: "Pain, pressure, or discomfort in the ear",
    descriptionAr: "ألم، ضغط، أو انزعاج في الأذن",
    questions: [
      { id: "q1", question: "Location of ear pain?", questionAr: "موقع ألم الأذن؟", type: "single", options: ["Inside ear", "Behind/below ear", "In front of ear", "Outer ear"], optionsAr: ["داخل الأذن", "خلف/تحت الأذن", "أمام الأذن", "الأذن الخارجية"] },
      { id: "q2", question: "Any discharge from ear?", questionAr: "هل هناك إفرازات من الأذن؟", type: "single", options: ["No discharge", "Clear fluid", "Yellow/brown wax", "Pus or bloody discharge"], optionsAr: ["لا يوجد إفرازات", "سائل شفاف", "شمع أصفر/بني", "صديد أو إفرازات دموية"] },
      { id: "q3", question: "Any hearing changes?", questionAr: "هل هناك تغيرات في السمع؟", type: "single", options: ["No change", "Muffled hearing", "Significant hearing loss"], optionsAr: ["لا يوجد تغيير", "سمع مختنق", "فقدان سمع كبير"] },
      { id: "q4", question: "Other symptoms?", questionAr: "أعراض أخرى؟", type: "multiple", options: ["Fever", "Sore throat", "Dizziness", "Jaw pain", "Toothache nearby"], optionsAr: ["حمى", "التهاب الحلق", "دوار", "ألم في الفك", "ألم أسنان قريب"] },
      { id: "q5", question: "Pain level (1-10)", questionAr: "مستوى الألم (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Outer ear pain (swimmer's ear) — keep ear dry, tilt ear to drain, OTC pain relief. Most ear infections improve within a week.",
      moderate: "Middle ear infections (otitis media) may need antibiotics — consult a doctor, especially in children.",
      high: "Ear pain with significant hearing loss, discharge, or pain behind ear needs prompt medical evaluation.",
      emergency: "Severe pain behind the ear with swelling, redness (mastoiditis) — seek emergency care.",
      lowAr: "ألم الأذن الخارجية (أذن السباح) — حافظ على جفاف الأذن، ميل الأذن للتصريف، مسكنات الألم المتاحة دون وصفة. معظم التهابات الأذن تتحسن خلال أسبوع.",
      moderateAr: "التهابات الأذن الوسطى (التهاب الأذن الوسطى) قد تحتاج إلى مضادات حيوية — استشر طبيباً، خاصة في الأطفال.",
      highAr: "ألم الأذن مع فقدان سمع كبير، إفرازات، أو ألم خلف الأذن يحتاج إلى تقييم طبي فوري.",
      emergencyAr: "ألم شديد خلف الأذن مع تورم واحمرار (التهاب العظم الخشائي) — اطلب الرعاية الطارئة."
    },
    firstAidSteps: ["Warm compress over ear for pain relief", "Keep ear dry", "OTC pain medication (ibuprofen)", "Don't insert objects in ear", "Elevate head when sleeping"],
    firstAidStepsAr: ["كمادات دافئة على الأذن لتخفيف الألم", "حافظ على جفاف الأذن", "مسكن ألم متاح دون وصفة (إيبوبروفين)", "لا تدخل أجساماً في الأذن", "ارفع رأسك عند النوم"],
    redFlags: ["Sudden complete hearing loss", "Discharge with blood", "Swelling/redness behind ear", "High fever with severe ear pain"],
    redFlagsAr: ["فقدان سمع كامل مفاجئ", "إفرازات مع دم", "تورم/احمرار خلف الأذن", "حمى عالية مع ألم شديد في الأذن"],
    didYouKnow: "Middle ear infections are the second most common childhood illness. Most resolve on their own within 2–3 days — antibiotics are not always needed.",
    didYouKnowAr: "التهابات الأذن الوسطى هي ثاني أكثر أمراض الطفولة شيوعاً. معظمها يزول من تلقاء نفسها خلال 2–3 أيام — المضادات الحيوية ليست دائماً ضرورية.",
    prevention: ["Dry ears after swimming", "Don't insert cotton swabs in ear canal", "Vaccinate against pneumococcal bacteria", "Breastfeed infants if possible (reduces ear infection risk)"],
    preventionAr: ["جفف الأذنين بعد السباحة", "لا تدخل أعواد القطن في قناة الأذن", "لقح ضد بكتيريا المكورات الرئوية", "أرضعي الأطفال رضاعة طبيعية إن أمكن (يقلل خطر التهاب الأذن)"]
  },
  {
    id: "sore-throat",
    specialtyId: ["ent", "general"],
    name: "Sore Throat",
    nameAr: "التهاب الحلق",
    severity: "low",
    icon: "mic-off",
    description: "Throat pain, scratchiness, or difficulty swallowing",
    descriptionAr: "ألم في الحلق، خشونة، أو صعوبة في البلع",
    questions: [
      { id: "q1", question: "Severity of throat pain?", questionAr: "شدة ألم الحلق؟", type: "scale", min: 1, max: 10 },
      { id: "q2", question: "Can you swallow?", questionAr: "هل تستطيع البلع؟", type: "single", options: ["Yes, normally", "Painful but can swallow", "Very difficult to swallow", "Cannot swallow"], optionsAr: ["نعم، بشكل طبيعي", "مؤلم لكن يمكن البلع", "صعوبة كبيرة في البلع", "لا أستطيع البلع"], emergencyTrigger: ["Cannot swallow"] },
      { id: "q3", question: "Do you have fever?", questionAr: "هل لديك حمى؟", type: "single", options: ["No fever", "Mild fever (below 38.5°C)", "High fever (above 38.5°C)"], optionsAr: ["لا يوجد حمى", "حمى خفيفة (أقل من 38.5°م)", "حمى عالية (أعلى من 38.5°م)"] },
      { id: "q4", question: "Any white patches in throat?", questionAr: "هل هناك بقع بيضاء في الحلق؟", type: "single", options: ["No", "Yes – white spots/patches", "Not sure"], optionsAr: ["لا", "نعم — بقع/بقع بيضاء", "غير متأكد"] }
    ],
    recommendationTemplate: {
      low: "Viral sore throat: honey in warm water, throat lozenges, salt water gargle, OTC pain relief. Usually resolves in 5–7 days.",
      moderate: "If fever + white patches — possible strep throat. Strep needs antibiotics to prevent complications. See a doctor.",
      high: "Persistent sore throat > 2 weeks without improvement, or recurrent strep episodes, needs ENT evaluation.",
      emergency: "Cannot swallow own saliva, severe neck swelling, or voice change with fever (peritonsillar abscess) — ER immediately.",
      lowAr: "التهاب الحلق الفيروسي: عسل في ماء دافئ، حلقات الحلق، غرغرة بماء مالح، مسكن ألم متاح دون وصفة. يزول عادةً في 5–7 أيام.",
      moderateAr: "إذا كانت هناك حمى + بقع بيضاء — احتمال التهاب الحلق بال strep. يحتاج strep إلى مضادات حيوية لمنع المضاعفات. استشر طبيباً.",
      highAr: "التهاب الحلق المستمر > 2 أسابيع دون تحسن، أو نوبات متكررة من strep، يحتاج إلى تقييم ENT.",
      emergencyAr: "عدم القدرة على بلع اللعاب، تورم شديد في الرقبة، أو تغير في الصوت مع حمى (خراج حول اللوزتين) — الطوارئ فوراً."
    },
    firstAidSteps: ["Gargle warm salt water (1/4 tsp salt in 240ml water)", "Honey in warm water or herbal tea", "Throat lozenges with benzocaine", "Stay hydrated", "Rest voice"],
    firstAidStepsAr: ["غرغر بماء مالح دافئ (1/4 ملعقة صغيرة ملح في 240 مل ماء)", "عسل في ماء دافئ أو شاي عشبي", "حلقات الحلق تحتوي على بنزوكايين", "حافظ على الترطيب", "ارح صوتك"],
    redFlags: ["Cannot swallow saliva", "Severe neck swelling", "Drooling due to inability to swallow", "Voice muffled/hot potato voice"],
    redFlagsAr: ["عدم القدرة على بلع اللعاب", "تورم شديد في الرقبة", "سيلان اللعاب بسبب عدم القدرة على البلع", "صوت مكتوم/صوت البطاطا الساخنة"],
    didYouKnow: "Only about 10% of adult sore throats are caused by strep bacteria (higher in children at 30%). Streptococcal pharyngitis needs antibiotics to prevent rheumatic fever.",
    didYouKnowAr: "حوالي 10% فقط من التهابات الحلق لدى البالغين تسببها بكتيريا strep (أعلى في الأطفال بنسبة 30%). التهاب الحلق بال streptococcus يحتاج إلى مضادات حيوية لمنع الحمى الروماتيزمية.",
    prevention: ["Handwashing", "Avoid sharing drinks/utensils", "Stay hydrated", "Avoid smoking"],
    preventionAr: ["غسل اليدين", "تجنب مشاركة المشروبات/الأدوات", "حافظ على الترطيب", "تجنب التدخين"]
  },

  // ─── GASTROENTEROLOGY ──────────────────────────────────────────
  {
    id: "abdominal-pain",
    specialtyId: ["gastroenterology", "general"],
    name: "Abdominal Pain",
    nameAr: "ألم البطن",
    severity: "moderate",
    icon: "activity",
    description: "Pain or discomfort in the stomach or abdomen",
    descriptionAr: "ألم أو انزعاج في المعدة أو البطن",
    questions: [
      { id: "q1", question: "Where is the pain located?", questionAr: "أين يقع الألم؟", type: "single", options: ["Upper middle (stomach)", "Upper right (liver area)", "Upper left", "Lower right", "Lower left", "Around belly button", "Diffuse/everywhere"], optionsAr: ["أعلى الوسط (المعدة)", "أعلى اليمين (منطقة الكبد)", "أعلى اليسار", "أسفل اليمين", "أسفل اليسار", "حول السرة", "منتشر/في كل مكان"] },
      { id: "q2", question: "How would you describe it?", questionAr: "كيف تصفه؟", type: "single", options: ["Crampy/colicky (comes and goes)", "Constant pressure/ache", "Sharp stabbing", "Burning"], optionsAr: ["تشنجي/مغصي (يأتي ويذهب)", "ضغط/ألم مستمر", "حاد طعني", "حرقة"] },
      { id: "q3", question: "Duration?", questionAr: "المدة؟", type: "single", options: ["Just started (< 1 hour)", "Few hours", "1–3 days", "More than 3 days"], optionsAr: ["بدأ للتو (< ساعة)", "بضع ساعات", "1–3 أيام", "أكثر من 3 أيام"] },
      { id: "q4", question: "Associated symptoms?", questionAr: "أعراض مصاحبة؟", type: "multiple", options: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Fever", "Blood in stool", "Loss of appetite"], optionsAr: ["غثيان", "قيء", "إسهال", "إمساك", "حمى", "دم في البراز", "فقدان الشهية"], emergencyTrigger: ["Blood in stool"] },
      { id: "q5", question: "Pain severity (1-10)", questionAr: "شدة الألم (1-10)", type: "scale", min: 1, max: 10, emergencyScale: 9 }
    ],
    recommendationTemplate: {
      low: "Mild abdominal cramps: rest, stay hydrated, try peppermint tea or warm compress. Avoid solid food initially.",
      moderate: "If pain persists more than 48 hours, or with fever and vomiting, see a doctor.",
      high: "Severe constant abdominal pain needs urgent evaluation — could be appendicitis, gallstones, or other serious condition.",
      emergency: "Severe pain with rigid abdomen, fever, or blood in stool — seek emergency care immediately (possible peritonitis or appendicitis).",
      lowAr: "تشنجات بطنية خفيفة: استرح، حافظ على الترطيب، جرب شاي النعناع أو كمادات دافئة. تجنب الطعام الصلب في البداية.",
      moderateAr: "إذا استمر الألم لأكثر من 48 ساعة، أو مع حمى وقيء، استشر طبيباً.",
      highAr: "ألم بطني شديد مستمر يحتاج إلى تقييم عاجل — قد يكون التهاب الزائدة الدودية، الحصى في المرارة، أو حالة خطيرة أخرى.",
      emergencyAr: "ألم شديد مع بطن متصلب، حمى، أو دم في البراز — اطلب الرعاية الطارئة فوراً (احتمال التهاب الصفاق أو الزائدة الدودية)."
    },
    firstAidSteps: ["Rest comfortably", "Small sips of clear fluids", "Avoid solid food if nauseous", "Warm compress on abdomen", "OTC antacids if burning/reflux type"],
    firstAidStepsAr: ["استرح بشكل مريح", "رشفات صغيرة من السوائل الصافية", "تجنب الطعام الصلب إذا كان هناك غثيان", "كمادات دافئة على البطن", "مضادات حموضة متاحة دون وصفة إذا كان نوع حرقة/ارتجاع"],
    redFlags: ["Severe constant pain", "Board-like rigid abdomen", "Pain with high fever", "Blood in stool or vomit", "Pain moving to right lower quadrant (appendix)"],
    redFlagsAr: ["ألم شديد مستمر", "بطن متصلب مثل اللوح", "ألم مع حمى عالية", "دم في البراز أو القيء", "ألم ينتقل إلى الربع السفلي الأيمن (الزائدة الدودية)"],
    didYouKnow: "Appendicitis classically starts as pain around the belly button, then moves to the right lower abdomen. The pain worsens over hours — don't ignore this pattern.",
    didYouKnowAr: "التهاب الزائدة الدودية يبدأ كلاسيكياً كألم حول السرة، ثم ينتقل إلى الجزء السفلي الأيمن من البطن. الألم يزداد سوءاً على مدى الساعات — لا تهمل هذا النمط.",
    prevention: ["High-fiber diet", "Adequate hydration", "Regular exercise", "Food safety practices"],
    preventionAr: ["نظام غذائي غني بالألياف", "ترطيب كافٍ", "تمارين منتظمة", "ممارسات سلامة الغذاء"]
  },
  {
    id: "heartburn",
    specialtyId: ["gastroenterology", "general"],
    name: "Heartburn / GERD",
    nameAr: "الحرقة / ارتجاع المريء",
    severity: "low",
    icon: "flame",
    description: "Burning sensation in chest or throat after eating",
    descriptionAr: "إحساس بالحرقة في الصدر أو الحلق بعد الأكل",
    questions: [
      { id: "q1", question: "How often do you experience heartburn?", questionAr: "كم مرة تشعر بالحرقة؟", type: "single", options: ["Rarely (< once a week)", "1–2 times per week", "Most days", "Multiple times daily"], optionsAr: ["نادراً (< مرة في الأسبوع)", "1–2 مرة في الأسبوع", "معظم الأيام", "عدة مرات يومياً"] },
      { id: "q2", question: "When does it occur?", questionAr: "متى يحدث؟", type: "multiple", options: ["After large meals", "When lying down", "When bending forward", "During exercise", "At night"], optionsAr: ["بعد وجبات كبيرة", "عند الاستلقاء", "عند الانحناء للأمام", "أثناء التمرين", "ليلاً"] },
      { id: "q3", question: "Associated symptoms?", questionAr: "أعراض مصاحبة؟", type: "multiple", options: ["Regurgitation of food", "Difficulty swallowing", "Chronic cough", "Hoarse voice", "Chest pain"], optionsAr: ["ارتجاع الطعام", "صعوبة في البلع", "سعال مزمن", "صوت أجش", "ألم صدر"] },
      { id: "q4", question: "Discomfort level (1-10)", questionAr: "مستوى الانزعاج (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Avoid triggers (spicy/fatty food, caffeine, alcohol). Eat smaller meals. Don't lie down for 2 hours after eating. Elevate head of bed.",
      moderate: "OTC antacids or proton pump inhibitors (PPIs) provide relief. Consider H2 blockers. Lifestyle changes are essential.",
      high: "Frequent GERD needs investigation — persistent reflux can cause Barrett's esophagus. See a gastroenterologist.",
      emergency: "Severe chest pain with heartburn: if cardiac cause cannot be excluded, seek emergency evaluation.",
      lowAr: "تجنب المحفزات (الطعام الحار/الدهني، الكافيين، الكحول). تناول وجبات أصغر. لا تستلقِ لمدة ساعتين بعد الأكل. ارفع رأس السرير.",
      moderateAr: "مضادات الحموضة المتاحة دون وصفة أو مثبطات مضخة البروتون (PPIs) توفر الراحة. فكر في حاصرات H2. تغيير نمط الحياة ضروري.",
      highAr: "ارتجاع المريء المتكرر يحتاج إلى التحقيق — الارتجاع المستمر يمكن أن يسبب مريء باريت. استشر أخصائي جهاز هضمي.",
      emergencyAr: "ألم صدر شديد مع حرقة: إذا لم يمكن استبعاد سبب قلبي، اطلب تقييماً طارئاً."
    },
    firstAidSteps: ["Take antacid (Tums/Gaviscon)", "Drink a glass of milk or water", "Stand or sit upright", "Chew gum (stimulates saliva neutralizing acid)", "Loose clothing around waist"],
    firstAidStepsAr: ["خذ مضاد حموضة (تامز/جافيسكون)", "اشرب كوباً من الحليب أو الماء", "قف أو اجلس مستقيماً", "امضغ علكة (تحفز اللعاب لتحييد الحمض)", "ملابس فضفاضة حول الخصر"],
    redFlags: ["Difficulty swallowing", "Unintentional weight loss", "Vomiting blood", "Black/tarry stools"],
    redFlagsAr: ["صعوبة في البلع", "فقدان وزن غير مقصود", "قيء دم", "براز أسود/قطراني"],
    didYouKnow: "GERD affects ~20% of the Western population. Long-term untreated GERD can cause Barrett's esophagus, a pre-cancerous condition — regular monitoring is important for frequent sufferers.",
    didYouKnowAr: "يصيب ارتجاع المريء ~20% من السكان في الغرب. ارتجاع المريء طويل الأمد غير المعالج يمكن أن يسبب مريء باريت، حالة ما قبل السرطان — المراقبة المنتظمة مهمة للمصابين المتكررين.",
    prevention: ["Maintain healthy weight", "Avoid late-night eating", "Limit alcohol and caffeine", "Quit smoking", "Elevate head of bed by 6-8 inches"],
    preventionAr: ["حافظ على وزن صحي", "تجنب الأكل ليلاً", "حدد الكحول والكافيين", "أقلع عن التدخين", "ارفع رأس السرير 6-8 بوصات"]
  },

  // ─── DENTISTRY ─────────────────────────────────────────────────
  {
    id: "toothache",
    specialtyId: ["dentistry"],
    name: "Toothache",
    nameAr: "ألم الأسنان",
    severity: "moderate",
    icon: "smile",
    description: "Dental pain, sensitivity, or jaw discomfort",
    descriptionAr: "ألم أسنان، حساسية، أو انزعاج في الفك",
    questions: [
      { id: "q1", question: "Type of tooth pain?", questionAr: "نوع ألم الأسنان؟", type: "single", options: ["Sharp when eating/drinking", "Constant throbbing", "Sensitivity to cold/hot only", "Pressure/pain when biting"], optionsAr: ["حاد عند الأكل/الشرب", "نبض مستمر", "حساسية للبرد/الحر فقط", "ضغط/ألم عند العض"] },
      { id: "q2", question: "Any swelling?", questionAr: "هل هناك تورم؟", type: "single", options: ["No swelling", "Slight gum swelling near tooth", "Significant face/cheek swelling"], optionsAr: ["لا يوجد تورم", "تورم خفيف في اللثة بالقرب من السن", "تورم كبير في الوجه/الخد"] },
      { id: "q3", question: "Any of these present?", questionAr: "هل يوجد أي من هذه؟", type: "multiple", options: ["Visible cavity or broken tooth", "Gum bleeding", "Bad taste/pus", "Fever", "Difficulty opening mouth"], optionsAr: ["تسوس مرئي أو سن مكسور", "نزيف اللثة", "طعم سيء/صديد", "حمى", "صعوبة في فتح الفم"] },
      { id: "q4", question: "Pain severity (1-10)", questionAr: "شدة الألم (1-10)", type: "scale", min: 1, max: 10 }
    ],
    recommendationTemplate: {
      low: "Dental sensitivity: use sensitive toothpaste (potassium nitrate). OTC clove oil on cotton ball for immediate pain relief.",
      moderate: "See a dentist within the week. In the meantime: ibuprofen, clove oil, avoid extreme temperatures.",
      high: "Constant throbbing pain or visible cavity needs dental care within 24–48 hours — may indicate pulpitis or abscess.",
      emergency: "Dental abscess with facial swelling or fever is a serious infection — seek emergency dental or medical care today.",
      lowAr: "حساسية الأسنان: استخدم معجون أسنان للحساسية (نترات البوتاسيوم). زيت القرنفل المتاح دون وصفة على قطعة قطن لتخفيف الألم الفوري.",
      moderateAr: "استشر طبيب أسنان خلال الأسبوع. في غضون ذلك: إيبوبروفين، زيت القرنفل، تجنب درجات الحرارة القصوى.",
      highAr: "ألم نبض مستمر أو تسوس مرئي يحتاج إلى رعاية أسنان خلال 24–48 ساعة — قد يشير إلى التهاب اللب أو خراج.",
      emergencyAr: "خراج أسنان مع تورم في الوجه أو حمى هو عدوى خطيرة — اطلب رعاية أسنان طارئة أو طبية اليوم."
    },
    firstAidSteps: ["Apply clove oil (eugenol) to affected tooth on cotton ball", "Take ibuprofen for pain and inflammation", "Rinse with warm salt water", "Avoid very hot/cold foods", "Don't apply aspirin directly to gum"],
    firstAidStepsAr: ["ضع زيت القرنفل (أوجينول) على السن المتأثرة بقطعة قطن", "خذ إيبوبروفين للألم والالتهاب", "اغسل بماء مالح دافئ", "تجنب الأطعمة الساخنة جداً/الباردة جداً", "لا تضع أسبرين مباشرة على اللثة"],
    redFlags: ["Facial or neck swelling with tooth pain", "Fever with toothache (abscess)", "Difficulty swallowing/breathing", "Trismus (cannot open mouth)"],
    redFlagsAr: ["تورم في الوجه أو الرقبة مع ألم الأسنان", "حمى مع ألم الأسنان (خراج)", "صعوبة في البلع/التنفس", "تشنج الفك (لا يمكن فتح الفم)"],
    didYouKnow: "Dental abscesses can spread to the neck and throat (Ludwig's angina), potentially threatening the airway. Severe tooth pain with facial swelling and fever needs emergency dental care.",
    didYouKnowAr: "يمكن أن تنتشر خراجات الأسنان إلى الرقبة والحلق (زاوية لودفيغ)، مما يهدد المجرى الهوائي. ألم أسنان شديد مع تورم في الوجه وحمى يحتاج إلى رعاية أسنان طارئة.",
    prevention: ["Brush twice daily with fluoride toothpaste", "Floss daily", "Limit sugar and acidic drinks", "Regular dental checkups every 6 months"],
    preventionAr: ["فرشاة الأسنان مرتين يومياً بمعجون فلوريد", "استخدم الخيط يومياً", "حدد السكر والمشروبات الحمضية", "فحوصات أسنان منتظمة كل 6 أشهر"]
  },

  // ─── MINOR BURNS ───────────────────────────────────────────────
  {
    id: "minor-burn",
    specialtyId: ["general", "emergency"],
    name: "Burn Injury",
    nameAr: "حروق",
    severity: "moderate",
    icon: "flame",
    description: "Thermal, chemical, or electrical burn",
    descriptionAr: "حروق حرارية أو كيميائية أو كهربائية",
    questions: [
      { id: "q1", question: "What caused the burn?", questionAr: "ما سبب الحرق؟", type: "single", options: ["Hot liquid/steam", "Hot surface", "Chemical", "Electrical", "Sunburn"], optionsAr: ["سائل ساخن/بخار", "سطح ساخن", "مادة كيميائية", "كهرباء", "حروق الشمس"], emergencyTrigger: ["Electrical"] },
      { id: "q2", question: "How much body surface is affected?", questionAr: "كم سطح الجسم المتأثر؟", type: "single", options: ["Small spot (< palm size)", "Palm-sized area", "Large area (arm/leg)", "Extensive (> 10% body)"], optionsAr: ["بقعة صغيرة (< حجم الكف)", "منطقة بحجم الكف", "منطقة كبيرة (ذراع/ساق)", "واسعة (> 10% من الجسم)"], emergencyTrigger: ["Large area (arm/leg)", "Extensive (> 10% body)"] },
      { id: "q3", question: "Burn depth?", questionAr: "عمق الحرق؟", type: "single", options: ["Red/painful (1st degree)", "Blistering/wet (2nd degree)", "Dry/waxy/white or black (3rd degree)"], optionsAr: ["أحمر/مؤلم (درجة أولى)", "تفقير/رطب (درجة ثانية)", "جاف/شمعي/أبيض أو أسود (درجة ثالثة)"], emergencyTrigger: ["Dry/waxy/white or black (3rd degree)"] },
      { id: "q4", question: "Location of burn?", questionAr: "موقع الحرق؟", type: "single", options: ["Arm/leg", "Face/hands/feet/genitals", "Trunk", "Inhalation/airway"], optionsAr: ["ذراع/ساق", "وجه/يدين/قدمين/أعضاء تناسلية", "جذع", "استنشاق/مجرى هوائي"], emergencyTrigger: ["Face/hands/feet/genitals", "Inhalation/airway"] }
    ],
    recommendationTemplate: {
      low: "First-degree burn: cool running water for 10–20 minutes, apply aloe vera or burn gel, cover loosely. Heals in 3–5 days.",
      moderate: "Second-degree burn: cool water for 20 minutes, do NOT break blisters, see a doctor. May need professional wound care.",
      high: "Large or deep burns need emergency treatment — burn injuries can be deceptive in severity.",
      emergency: "Electrical burns, burns to face/airway, or extensive burns — CALL EMERGENCY SERVICES immediately.",
      lowAr: "حرق من الدرجة الأولى: ماء جاري بارد لمدة 10–20 دقيقة، ضع ألوفيرا أو جل الحروق، غطِ بشكل فضفاض. يشفى في 3–5 أيام.",
      moderateAr: "حرق من الدرجة الثانية: ماء بارد لمدة 20 دقيقة، لا تكسر الفقاعات، استشر طبيباً. قد يحتاج إلى رعاية جروح مهنية.",
      highAr: "الحروق الكبيرة أو العميقة تحتاج إلى علاج طارئ — إصابات الحروق يمكن أن تكون خادعة في شدتها.",
      emergencyAr: "حروق كهربائية، حروق في الوجه/المجرى الهوائي، أو حروق واسعة — اتصل بخدمات الطوارئ فوراً."
    },
    firstAidSteps: [
      "Cool the burn under running cool water for at least 10–20 minutes",
      "Remove jewelry/clothing near the burn (before swelling)",
      "Do NOT use ice, butter, or toothpaste",
      "Do NOT break blisters",
      "Cover with clean, non-fluffy dressing or cling film",
      "Take pain relief (ibuprofen/paracetamol)"
    ],
    firstAidStepsAr: [
      "برد الحرق تحت ماء بارد جاري لمدة 10–20 دقيقة على الأقل",
      "أزل المجوهرات/الملابس بالقرب من الحرق (قبل التورم)",
      "لا تستخدم الثلج أو الزبدة أو معجون الأسنان",
      "لا تكسر الفقاعات",
      "غطِ بضمادة نظيفة غير قطنية أو غشاء بلاستيكي",
      "خذ مسكن ألم (إيبوبروفين/باراسيتامول)"
    ],
    redFlags: ["Burns to face, hands, feet, joints, or genitals", "Burns > 3cm or full thickness", "Electrical or chemical burns", "Burns with inhalation injury"],
    redFlagsAr: ["حروق في الوجه أو اليدين أو القدمين أو المفاصل أو الأعضاء التناسلية", "حروق > 3 سم أو بكامل السماكة", "حروق كهربائية أو كيميائية", "حروق مع إصابة استنشاق"],
    didYouKnow: "The Rule of Nines is used by paramedics to estimate burn area: each arm=9%, each leg=18%, front torso=18%, back=18%, head=9%. This guides treatment decisions.",
    didYouKnowAr: "يستخدم مسعفون قاعدة التسعات لتقدير مساحة الحرق: كل ذراع=9%، كل ساق=18%، جذع أمامي=18%، ظهر=18%، رأس=9%. هذا يوجه قرارات العلاج.",
    prevention: ["Smoke detectors and fire extinguishers at home", "Safe handling of hot liquids", "Sunscreen use", "Safe storage of chemicals"],
    preventionAr: ["أجهزة كشف الدخان وطفايات الحريق في المنزل", "التعامل الآمن مع السوائل الساخنة", "استخدام واقي الشمس", "التخزين الآمن للمواد الكيميائية"]
  },

  // ─── ALLERGY ───────────────────────────────────────────────────
  {
    id: "food-allergy",
    specialtyId: ["allergy", "general"],
    name: "Food Allergy Reaction",
    nameAr: "رد فعل حساسية غذائية",
    severity: "moderate",
    icon: "utensils-crossed",
    description: "Immune reaction to food allergen",
    descriptionAr: "رد فعل مناعي لمسبب حساسية غذائية",
    questions: [
      { id: "q1", question: "What symptoms appeared after eating?", questionAr: "ما الأعراض التي ظهرت بعد الأكل؟", type: "multiple", options: ["Hives/itching", "Lip/tongue swelling", "Throat tightness", "Nausea/vomiting", "Stomach cramps", "Difficulty breathing", "Dizziness"], optionsAr: ["شرى/حكة", "تورم الشفة/اللسان", "شد في الحلق", "غثيان/قيء", "تشنجات معدية", "صعوبة في التنفس", "دوار"], emergencyTrigger: ["Throat tightness", "Difficulty breathing"] },
      { id: "q2", question: "How quickly after eating?", questionAr: "بعد الأكل بكم؟", type: "single", options: ["Within 15 minutes", "15–30 minutes", "30–60 minutes", "More than 1 hour"], optionsAr: ["خلال 15 دقيقة", "15–30 دقيقة", "30–60 دقيقة", "أكثر من ساعة"] },
      { id: "q3", question: "Known food allergy?", questionAr: "حساسية غذائية معروفة؟", type: "single", options: ["Yes – this food", "Yes – different food", "No known allergy (first reaction)"], optionsAr: ["نعم — هذا الطعام", "نعم — طعام مختلف", "لا يوجد حساسية معروفة (رد فعل أول)"] },
      { id: "q4", question: "Do you have epinephrine (EpiPen)?", questionAr: "هل لديك إيبينفرين (إيبي بن)؟", type: "single", options: ["Yes, have used it", "Yes, not used yet", "No"], optionsAr: ["نعم، استخدمته", "نعم، لم يُستخدم بعد", "لا"] }
    ],
    recommendationTemplate: {
      low: "Mild food reaction: antihistamine. Identify the culprit food. See an allergist for formal allergy testing.",
      moderate: "Food allergy reactions can escalate rapidly. Take antihistamine, monitor closely, and seek medical evaluation today.",
      high: "Any reaction with throat tightness or breathing difficulty needs emergency treatment — use EpiPen if available.",
      emergency: "ANAPHYLAXIS — USE EPIPEN AND CALL EMERGENCY SERVICES NOW.",
      lowAr: "رد فعل غذائي خفيف: مضاد الهيستامين. حدد الطعام المسبب. استجرحساسية رسمية.",
      moderateAr: "ردود الفعل التحسسية الغذائية يمكن أن تتفاقم بسرعة. خذ مضاد الهيستامين، راقب عن كثب، واطلب تقييماً طبياً اليوم.",
      highAr: "أي رد فعل مع شد في الحلق أو صعوبة في التنفس يحتاج إلى علاج طارئ — استخدم إيبي بن إذا كانت متوفرة.",
      emergencyAr: "الحساسية المفرطة — استخدم إيبي بن واتصل بخدمات الطوارئ الآن."
    },
    firstAidSteps: ["Use EpiPen if throat tightness or breathing difficulty", "Take antihistamine (cetirizine/loratadine) for mild reactions", "Stay upright unless dizzy", "Call emergency services", "Second EpiPen dose after 5–15 min if no improvement"],
    firstAidStepsAr: ["استخدم إيبي بن إذا كان هناك شد في الحلق أو صعوبة في التنفس", "خذ مضاد الهيستامين (سيتريزين/لوراتادين) للردود الفعل الخفيفة", "ابقَ مستقيماً ما لم تشعر بالدوار", "اتصل بخدمات الطوارئ", "جرعة ثانية من إيبي بن بعد 5–15 دقيقة إذا لم يحدث تحسن"],
    redFlags: ["Any throat or tongue swelling", "Difficulty breathing", "Rapid pulse with dizziness"],
    redFlagsAr: ["أي تورم في الحلق أو اللسان", "صعوبة في التنفس", "نبض سريع مع دوار"],
    didYouKnow: "The 8 most common food allergens account for 90% of allergic reactions: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, and soybeans.",
    didYouKnowAr: "أكثر 8 مسببات حساسية غذائية شيوعاً تمثل 90% من ردود الفعل التحسسية: الحليب، البيض، السمك، المحار، المكسرات، الفول السوداني، القمح، وفول الصويا.",
    prevention: ["Carry an EpiPen if prescribed", "Read all food labels carefully", "Inform restaurants about allergies", "Wear medical alert ID"],
    preventionAr: ["احمل إيبي بن إذا كانت موصوفة", "اقرأ جميع ملصقات الأغذية بعناية", "أبلغ المطاعم عن الحساسية", "ارتدِ بطاقة تنبيه طبي"]
  },

  // ─── CARDIOLOGY ────────────────────────────────────────────────
  {
    id: "palpitations",
    specialtyId: ["cardiology", "general"],
    name: "Heart Palpitations",
    nameAr: "خفقان القلب",
    severity: "moderate",
    icon: "heart-pulse",
    description: "Rapid, pounding, or irregular heartbeat",
    descriptionAr: "نبض سريع، قوي، أو غير منتظم",
    questions: [
      { id: "q1", question: "How would you describe the sensation?", questionAr: "كيف تصف الإحساس؟", type: "single", options: ["Racing/fast heartbeat", "Pounding/strong beats", "Skipped beats/fluttering", "Irregular rhythm"], optionsAr: ["نبض سريع/متسابق", "نبض قوي/ثقيل", "نبضات متخطاة/رفرفة", "إيقاع غير منتظم"] },
      { id: "q2", question: "When does it occur?", questionAr: "متى يحدث؟", type: "single", options: ["At rest", "During exercise", "After coffee/energy drinks", "When anxious/stressed", "Random"], optionsAr: ["في الراحة", "أثناء التمرين", "بعد القهوة/مشروبات الطاقة", "عند القلق/التوتر", "عشوائي"] },
      { id: "q3", question: "Associated symptoms?", questionAr: "أعراض مصاحبة؟", type: "multiple", options: ["Chest pain/pressure", "Shortness of breath", "Dizziness", "Fainting", "Sweating"], optionsAr: ["ألم/ضغط في الصدر", "ضيق في التنفس", "دوار", "إغماء", "تعرق"], emergencyTrigger: ["Fainting", "Chest pain/pressure"] },
      { id: "q4", question: "How long do episodes last?", questionAr: "كم تستمر النوبات؟", type: "single", options: ["Seconds", "Minutes", "Hours", "Constant"], optionsAr: ["ثوانٍ", "دقائق", "ساعات", "مستمر"] }
    ],
    recommendationTemplate: {
      low: "Most palpitations are benign and related to caffeine, dehydration, or stress. Reduce caffeine, stay hydrated.",
      moderate: "Recurrent palpitations warrant an ECG. See your doctor for cardiac evaluation.",
      high: "Palpitations with dizziness or shortness of breath need prompt cardiac evaluation — Holter monitor may be needed.",
      emergency: "Palpitations with fainting, chest pain, or lasting more than 30 minutes — seek emergency care.",
      lowAr: "معظم خفقان القلب حميدة ومرتبطة بالكافيين، الجفاف، أو التوتر. قلل الكافيين، حافظ على الترطيب.",
      moderateAr: "الخفقان المتكرر يستدعي تخطيط القلب. استشر طبيبك للتقييم القلبي.",
      highAr: "الخفقان مع الدوار أو ضيق التنفس يحتاج إلى تقييم قلبي فوري — قد يكون هناك حاجة لمراقبة هولتر.",
      emergencyAr: "خفقان مع إغماء، ألم صدر، أو استمرار لأكثر من 30 دقيقة — اطلب الرعاية الطارئة."
    },
    firstAidSteps: ["Sit down and rest", "Try vagal maneuvers: hold breath and strain, or splash cold water on face", "Avoid caffeine/stimulants", "Stay hydrated", "Document episode duration and feeling"],
    firstAidStepsAr: ["اجلس واسترح", "جرب مناورات العصب الحائر: احبس أنفاسك واجهد، أو رش ماء بارد على وجهك", "تجنب الكافيين/المنبهات", "حافظ على الترطيب", "دوّن مدة النوبة والإحساس"],
    redFlags: ["Palpitations with fainting", "Palpitations with chest pain", "Very fast or very slow rate (< 40 or > 150)"],
    redFlagsAr: ["خفقان مع إغماء", "خفقان مع ألم صدر", "معدل نبض سريع جداً أو بطيء جداً (< 40 أو > 150)"],
    didYouKnow: "Vagal maneuvers (Valsalva maneuver or diving reflex) can terminate SVT (supraventricular tachycardia) by stimulating the vagus nerve to slow the heart.",
    didYouKnowAr: "يمكن للمناورات العصبية (مناورة فالسالفا أو رد فعل الغوص) إنهاء التسرع فوق البطيني (SVT) عن طريق تحفيز العصب الحائر لإبطاء القلب.",
    prevention: ["Limit caffeine and alcohol", "Stay hydrated", "Manage stress", "Regular aerobic exercise", "Adequate sleep"],
    preventionAr: ["حدد الكافيين والكحول", "حافظ على الترطيب", "إدارة التوتر", "تمارين هوائية منتظمة", "نوم كافٍ"]
  },
  {
    id: "hypertension",
    specialtyId: ["cardiology", "general"],
    name: "High Blood Pressure",
    nameAr: "ارتفاع ضغط الدم",
    severity: "moderate",
    icon: "gauge",
    description: "Elevated blood pressure reading or symptoms",
    descriptionAr: "قراءة ضغط دم مرتفعة أو أعراض",
    questions: [
      { id: "q1", question: "What is your blood pressure reading (if known)?", questionAr: "ما قراءة ضغط دمك (إذا كنت تعرفها)؟", type: "single", options: ["Normal (< 120/80)", "Elevated (120-129/< 80)", "Stage 1 (130-139/80-89)", "Stage 2 (>= 140/90)", "Very high (> 180/120)", "Don't know"], optionsAr: ["طبيعي (< 120/80)", "مرتفع (120-129/< 80)", "المرحلة 1 (130-139/80-89)", "المرحلة 2 (>= 140/90)", "عالي جداً (> 180/120)", "لا أعرف"] },
      { id: "q2", question: "Current symptoms?", questionAr: "الأعراض الحالية؟", type: "multiple", options: ["Severe headache", "Vision changes", "Chest pain", "Shortness of breath", "Nose bleed", "No symptoms"], optionsAr: ["صداع شديد", "تغيرات في البصر", "ألم صدر", "ضيق في التنفس", "نزيف أنفي", "لا توجد أعراض"], emergencyTrigger: ["Severe headache", "Vision changes", "Chest pain"] },
      { id: "q3", question: "Are you currently on blood pressure medication?", questionAr: "هل تتناول حالياً دواء لضغط الدم؟", type: "single", options: ["Yes, taking as prescribed", "Yes, but missed doses", "No medication", "Not diagnosed before"], optionsAr: ["نعم، أتناول حسب الوصفة", "نعم، لكن فاتتني جرعات", "لا يوجد دواء", "لم يتم تشخيصه من قبل"] },
      { id: "q4", question: "Any risk factors?", questionAr: "هل هناك عوامل خطورة؟", type: "multiple", options: ["Family history", "Overweight", "High salt diet", "Smoking", "Physically inactive", "Diabetic"], optionsAr: ["تاريخ عائلي", "زيادة الوزن", "نظام غذائي عالي الملح", "التدخين", "خمول بدني", "سكري"] }
    ],
    recommendationTemplate: {
      low: "Normal or elevated — focus on lifestyle: DASH diet, regular exercise, reduce salt/alcohol/stress. Monitor regularly.",
      moderate: "Stage 1–2 hypertension: medical treatment plus lifestyle changes. See your doctor for assessment and medication if indicated.",
      high: "Consistently high readings (>140/90) need medical management — uncontrolled hypertension is the leading risk factor for stroke.",
      emergency: "BP > 180/120 with symptoms = hypertensive crisis. Seek emergency care immediately.",
      lowAr: "طبيعي أو مرتفع — ركّز على نمط الحياة: نظام DASH، تمارين منتظمة، تقليل الملح/الكحول/التوتر. راقب بانتظام.",
      moderateAr: "ارتفاع ضغط الدم المرحلة 1–2: علاج طبي بالإضافة إلى تغييرات نمط الحياة. استشر طبيبك للتقييم والدواء إذا لزم الأمر.",
      highAr: "القراءات المرتفعة باستمرار (>140/90) تحتاج إلى إدارة طبية — ارتفاع ضغط الدم غير المنضبط هو السبب الرئيسي للسكتة الدماغية.",
      emergencyAr: "ضغط دم > 180/120 مع أعراض = أزمة ارتفاع ضغط الدم. اطلب الرعاية الطارئة فوراً."
    },
    firstAidSteps: ["Sit quietly and rest", "Take medication if prescribed and missed", "Slow deep breathing reduces BP temporarily", "Avoid salt, caffeine, stimulants", "Seek medical care if persistent or symptomatic"],
    firstAidStepsAr: ["اجلس بهدوء واسترح", "خذ الدواء إذا كان موصوفاً وفاتتك جرعة", "التنفس العميق البطيء يقلل ضغط الدم مؤقتاً", "تجنب الملح والكافيين والمنبهات", "اطلب الرعاية الطبية إذا كان مستمراً أو مصحوباً بأعراض"],
    redFlags: ["BP > 180/120 (hypertensive crisis)", "Severe headache", "Vision changes", "Chest pain", "Sudden neurological symptoms"],
    redFlagsAr: ["ضغط دم > 180/120 (أزمة ارتفاع ضغط الدم)", "صداع شديد", "تغيرات في البصر", "ألم صدر", "أعراض عصبية مفاجئة"],
    didYouKnow: "Hypertension affects 1.28 billion adults globally. It's called the 'silent killer' because it rarely causes symptoms until it causes a stroke or heart attack.",
    didYouKnowAr: "يصيب ارتفاع ضغط الدم 1.28 مليار بالغ حول العالم. يُسمى 'القاتل الصامت' لأنه نادراً ما يسبب أعراضاً حتى يسبب سكتة دماغية أو نوبة قلبية.",
    prevention: ["DASH diet (fruits, vegetables, low sodium)", "30+ min exercise most days", "Limit alcohol", "Quit smoking", "Stress management", "Maintain healthy weight"],
    preventionAr: ["نظام DASH (فواكه، خضروات، صوديوم منخفض)", "30+ دقيقة تمارين معظم الأيام", "حدد الكحول", "أقلع عن التدخين", "إدارة التوتر", "حافظ على وزن صحي"]
  },

  // ─── FAINTING ──────────────────────────────────────────────────
  {
    id: "fainting",
    specialtyId: ["general", "cardiology", "neurology"],
    name: "Fainting / Syncope",
    nameAr: "الإغماء / السقوط",
    severity: "high",
    icon: "user-x",
    description: "Brief loss of consciousness or feeling like fainting",
    descriptionAr: "فقدان مؤقت للوعي أو الشعور بالإغماء",
    questions: [
      { id: "q1", question: "What happened just before?", questionAr: "ماذا حدث للتو قبل ذلك؟", type: "single", options: ["Standing up quickly", "Prolonged standing in heat", "Emotional distress/pain", "During exercise", "No warning", "After coughing/straining"], optionsAr: ["الوقوف بسرعة", "الوقوف لفترة طويلة في الحر", "ضائقة عاطفية/ألم", "أثناء التمرين", "بدون تحذير", "بعد السعال/الجهد"] },
      { id: "q2", question: "Was there loss of consciousness?", questionAr: "هل كان هناك فقدان للوعي؟", type: "single", options: ["Yes – actual blackout", "Almost fainted – nearly lost consciousness", "Just felt very dizzy"], optionsAr: ["نعم — إغماء فعلي", "كدت تغمى عليك — فقدان الوعي شبه كامل", "شعرت بالدوار الشديد فقط"] },
      { id: "q3", question: "Any of these during/after the episode?", questionAr: "أي من هذه أثناء/بعد النوبة؟", type: "multiple", options: ["Chest pain", "Palpitations before fainting", "Confusion/disorientation afterward", "Tongue biting", "Jerking movements"], optionsAr: ["ألم صدر", "خفقان قبل الإغماء", "ارتباك/فقدان التوجيه بعد ذلك", "عض اللسان", "حركات ارتعاشية"], emergencyTrigger: ["Tongue biting", "Jerking movements", "Chest pain"] },
      { id: "q4", question: "Any injuries from falling?", questionAr: "أي إصابات من السقوط؟", type: "single", options: ["No injury", "Minor bruise", "Head injury", "Significant injury"], optionsAr: ["لا يوجد إصابة", "كدمة طفيفة", "إصابة في الرأس", "إصابة كبيرة"], emergencyTrigger: ["Head injury"] }
    ],
    recommendationTemplate: {
      low: "Vasovagal syncope (from standing, heat, emotion) is common and benign. Lie down with legs elevated. Stay hydrated.",
      moderate: "First episode of syncope needs medical evaluation to identify cause — many are benign but some require investigation.",
      high: "Fainting during exercise, with palpitations, or recurring syncope needs urgent cardiac evaluation.",
      emergency: "Fainting with seizure activity, chest pain, or head injury — seek emergency care immediately.",
      lowAr: "الإغماء الوعائي الواطئ (من الوقوف، الحرارة، العاطفة) شائع وحميد. استلقِ مع رفع الساقين. حافظ على الترطيب.",
      moderateAr: "النوبة الأولى من الإغماء تحتاج إلى تقييم طبي لتحديد السبب — كثير منها حميد لكن بعضها يحتاج إلى التحقيق.",
      highAr: "الإغماء أثناء التمرين، مع خفقان، أو إغماء متكرر يحتاج إلى تقييم قلبي عاجل.",
      emergencyAr: "إغماء مع نشاط نوبة صرع، ألم صدر، أو إصابة في الرأس — اطلب الرعاية الطارئة فوراً."
    },
    firstAidSteps: ["Lie down immediately, elevate legs 12 inches", "Loosen tight clothing", "Cool environment/fresh air", "Sip water when fully conscious", "Don't get up quickly afterward"],
    firstAidStepsAr: ["استلقِ فوراً، ارفع الساقين 12 بوصة", "فكّ الملابس الضيقة", "بيئة باردة/هواء نقي", "رشف ماء عند استعادة الوعي الكامل", "لا تقم بسرعة بعد ذلك"],
    redFlags: ["Fainting during exercise", "Multiple episodes", "Family history of sudden cardiac death", "No warning before fainting", "Head injury from fall"],
    redFlagsAr: ["إغماء أثناء التمرين", "نوبات متعددة", "تاريخ عائلي للوفاة القلبية المفاجئة", "بدون تحذير قبل الإغماء", "إصابة في الرأس من السقوط"],
    didYouKnow: "Vasovagal syncope (triggered by stress, pain, or prolonged standing) accounts for ~50% of all fainting episodes. It's caused by a sudden drop in blood pressure and is generally harmless.",
    didYouKnowAr: "الإغماء الوعائي الواطئ (المحفز بالتوتر، الألم، أو الوقوف لفترة طويلة) يمثل ~50% من جميع نوبات الإغماء. يسببه انخفاض مفاجئ في ضغط الدم وعادةً ما يكون غير ضار.",
    prevention: ["Stay hydrated", "Avoid prolonged standing", "Rise slowly from lying position", "Recognize and sit down at first warning signs"],
    preventionAr: ["حافظ على الترطيب", "تجنب الوقوف لفترة طويلة", "قم ببطء من وضعية الاستلقاء", "تعرف على علامات التحذير الأولى واجلس"]
  }

];