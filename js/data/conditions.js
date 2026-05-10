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
