// HoloCare — Integrated Virtual Clinic
// js/app.js — Core Logic, State Management, SPA Routing, Recommendation Engine

'use strict';

// ══════════════════════════════════════════════════
// GLOBAL STATE
// ══════════════════════════════════════════════════

window.HoloCareState = {
  currentStep: 'hero',
  selectedSpecialty: null,
  selectedCondition: null,
  answers: [],
  currentQuestionIndex: 0,
  recommendations: null,
  isEmergency: false,
  language: 'en',
  darkMode: false,
  history: ['hero']
};

// ══════════════════════════════════════════════════
// LOCALIZATION HELPERS
// ══════════════════════════════════════════════════

function l10n(obj, field) {
  const lang = window.HoloCareState.language;
  if (lang === 'en') return obj ? obj[field] : undefined;
  const key = field + lang.charAt(0).toUpperCase() + lang.slice(1);
  return (obj && obj[key] !== undefined) ? obj[key] : obj[field];
}

function l10nArray(obj, field) {
  const lang = window.HoloCareState.language;
  if (lang === 'en') return (obj && obj[field]) ? obj[field] : [];
  const key = field + lang.charAt(0).toUpperCase() + lang.slice(1);
  return (obj && obj[key] !== undefined) ? obj[key] : (obj[field] || []);
}

// ══════════════════════════════════════════════════
// i18n TRANSLATIONS
// ══════════════════════════════════════════════════

window.HoloCareI18n = {
  en: {
    tagline: "Your Smart Virtual Clinic",
    subtitle: "Evidence-based health guidance at your fingertips. Select a specialty to begin your assessment.",
    startBtn: "Start Assessment",
    chooseSpecialty: "Choose a Specialty",
    specialtySubtitle: "Select the medical area that best matches your concern",
    searchPlaceholder: "Search specialties...",
    chooseCondition: "Select Your Condition",
    conditionSubtitle: "Choose the condition or symptom that best describes what you're experiencing",
    backToSpecialties: "Back to Specialties",
    back: "Back",
    assessment: "Symptom Assessment",
    stepOf: "Step {0} of {1}",
    next: "Next",
    previous: "Previous",
    analyzing: "Analyzing your symptoms...",
    analyzingSubtitle: "Generating personalized health guidance",
    submit: "Submit",
    selectAnswerToContinue: "Please select an answer to continue",
    question: "Question",
    selectAllThatApply: "Select all that apply",
    minimal: "Minimal",
    severe: "Severe",
    yes: "Yes",
    no: "No",
    yourResults: "Your Health Assessment",
    startOver: "Start New Assessment",
    newAssessment: "New Assessment",
    downloadReport: "Download Report",
    consultSpecialist: "Find a Specialist",
    emergency: "EMERGENCY",
    callNow: "CALL EMERGENCY SERVICES NOW",
    iCalledHelp: "I Have Called for Help",
    disclaimer: "This is not a medical diagnosis. HoloCare provides educational health information only. Always consult a qualified healthcare professional for medical advice.",
    severity: { low: "Self-Care", moderate: "See a Doctor", high: "Urgent Care", emergency: "Emergency" },
    conditions: "conditions",
    redFlags: "⚠️ Red Flags — When to Seek Emergency Care",
    firstAid: "First Aid Guide",
    prevention: "Prevention Tips",
    didYouKnow: "Did You Know?",
    immediateActions: "Immediate Actions",
    medications: "Medication Guidance",
    monitoring: "What to Monitor",
    whenToSeeDoctor: "When to See a Doctor",
    assessmentSummary: "Assessment Summary",
    recommendedActions: "Recommended Actions",
    monitor: "Monitor: {0}",
    worseningSymptoms: "worsening symptoms",
    seeDoctor24h: "See a doctor within 24 hours",
    seeDoctorThisWeek: "Schedule a doctor's appointment this week",
    medicationGuidance: "Follow only prescribed or recommended OTC medications. Do not self-medicate beyond guidelines.",
    readDosage: "Always read dosage instructions",
    seekEmergencyCare: "Seek emergency care if symptoms escalate.",
    consultIfNotImproved: "If symptoms don't improve in {0}, consult a healthcare provider.",
    days5to7: "5–7 days",
    hours24to48: "24–48 hours",
    basedOn: "Based on:",
    heroBadge: "Evidence-Based Health Guidance",
    heroTitle: "Your Smart",
    heroTitleAccent: "Virtual Clinic",
    heroSubtitle: "Answer a short symptom assessment and receive personalized, educational health recommendations — powered by structured medical knowledge.",
    viewSpecialties: "View Specialties",
    statSpecialties: "Specialties",
    statConditions: "Conditions",
    statFree: "Free & Private",
    featInstant: "Instant Results",
    featSafe: "Safe & Secure",
    featMultilang: "Multi-language",
    featOffline: "Works Offline",
    featPrint: "Printable Report",
    showingConditions: "Showing conditions for",
    footerEmergency: "In an emergency, always call your local emergency services immediately.",
    footerDisclaimer: "HoloCare provides educational health information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.",
    footerCopy: "© 2025 HoloCare. All rights reserved."
  },
  ar: {
    tagline: "عيادتك الافتراضية الذكية",
    subtitle: "إرشادات صحية مبنية على الأدلة في متناول يدك",
    startBtn: "ابدأ التقييم",
    chooseSpecialty: "اختر التخصص",
    specialtySubtitle: "حدد المجال الطبي الأكثر صلة بحالتك",
    searchPlaceholder: "ابحث عن التخصصات...",
    chooseCondition: "اختر الحالة",
    conditionSubtitle: "اختر الحالة أو العرض الذي يصف ما تشعر به",
    backToSpecialties: "العودة إلى التخصصات",
    back: "رجوع",
    assessment: "تقييم الأعراض",
    stepOf: "خطوة {0} من {1}",
    next: "التالي",
    previous: "السابق",
    analyzing: "جارٍ تحليل أعراضك...",
    analyzingSubtitle: "جارٍ إنشاء إرشادات صحية مخصصة",
    submit: "إرسال",
    selectAnswerToContinue: "الرجاء اختيار إجابة للمتابعة",
    question: "سؤال",
    selectAllThatApply: "اختر كل ما ينطبق",
    minimal: "طفيف",
    severe: "شديد",
    yes: "نعم",
    no: "لا",
    yourResults: "تقييمك الصحي",
    startOver: "بدء تقييم جديد",
    newAssessment: "تقييم جديد",
    downloadReport: "تحميل التقرير",
    consultSpecialist: "ابحث عن متخصص",
    emergency: "طوارئ",
    callNow: "اتصل بخدمات الطوارئ الآن",
    iCalledHelp: "لقد طلبت المساعدة",
    disclaimer: "هذا ليس تشخيصاً طبياً. يوفر HoloCare معلومات صحية تثقيفية فقط. استشر دائماً مختصاً طبياً مؤهلاً للحصول على المشورة الطبية.",
    severity: { low: "رعاية ذاتية", moderate: "استشر طبيباً", high: "رعاية عاجلة", emergency: "طوارئ" },
    conditions: "حالة",
    redFlags: "⚠️ علامات تحذيرية — متى تطلب رعاية طارئة",
    firstAid: "دليل الإسعافات الأولية",
    prevention: "نصائح الوقاية",
    didYouKnow: "هل تعلم؟",
    immediateActions: "الإجراءات الفورية",
    medications: "إرشادات الأدوية",
    monitoring: "ما يجب مراقبته",
    whenToSeeDoctor: "متى تزور الطبيب",
    assessmentSummary: "ملخص التقييم",
    recommendedActions: "الإجراءات الموصى بها",
    monitor: "راقب: {0}",
    worseningSymptoms: "تفاقم الأعراض",
    seeDoctor24h: "استشر طبيباً خلال 24 ساعة",
    seeDoctorThisWeek: "حدد موعداً مع الطبيب هذا الأسبوع",
    medicationGuidance: "اتبع فقط الأدوية الموصوفة أو المسكنات الموصى بها. لا تتداوَ بنفسك بما يتجاوز الإرشادات.",
    readDosage: "اقرأ دائماً تعليمات الجرعة",
    seekEmergencyCare: "اطلب الرعاية الطارئة إذا تفاقمت الأعراض.",
    consultIfNotImproved: "إذا لم تتحسن الأعراض خلال {0}، استشر مقدم الرعاية الصحية.",
    days5to7: "5–7 أيام",
    hours24to48: "24–48 ساعة",
    basedOn: "استناداً إلى:",
    heroBadge: "إرشادات صحية مبنية على الأدلة",
    heroTitle: "عيادتك",
    heroTitleAccent: "الافتراضية الذكية",
    heroSubtitle: "أجب على تقييم قصير للأعراض واحصل على توصيات صحية شخصية وتعليمية — مدعومة بمعرفة طبية منظمة.",
    viewSpecialties: "عرض التخصصات",
    statSpecialties: "تخصصاً",
    statConditions: "حالة",
    statFree: "مجاني وخاص",
    featInstant: "نتائج فورية",
    featSafe: "آمن وموثوق",
    featMultilang: "متعدد اللغات",
    featOffline: "يعمل بدون إنترنت",
    featPrint: "تقرير قابل للطباعة",
    showingConditions: "عرض حالات",
    footerEmergency: "في حالات الطوارئ، اتصل دائماً بخدمات الطوارئ المحلية فوراً.",
    footerDisclaimer: "يوفر HoloCare معلومات صحية تثقيفية فقط وليس بديلاً عن المشورة الطبية أو التشخيص أو العلاج المهني. استشر دائماً مقدم الرعاية الصحية المؤهل.",
    footerCopy: "© 2025 HoloCare. جميع الحقوق محفوظة."
  },
  fr: {
    tagline: "Votre Clinique Virtuelle Intelligente",
    subtitle: "Des conseils de santé fondés sur des preuves à portée de main",
    startBtn: "Commencer l'évaluation",
    chooseSpecialty: "Choisir une spécialité",
    specialtySubtitle: "Sélectionnez le domaine médical correspondant à votre préoccupation",
    searchPlaceholder: "Rechercher des spécialités...",
    chooseCondition: "Sélectionner votre condition",
    conditionSubtitle: "Choisissez la condition ou le symptôme qui décrit le mieux ce que vous ressentez",
    backToSpecialties: "Retour aux spécialités",
    back: "Retour",
    assessment: "Évaluation des symptômes",
    stepOf: "Étape {0} sur {1}",
    next: "Suivant",
    previous: "Précédent",
    analyzing: "Analyse de vos symptômes...",
    analyzingSubtitle: "Génération de conseils de santé personnalisés",
    submit: "Soumettre",
    selectAnswerToContinue: "Veuillez sélectionner une réponse pour continuer",
    question: "Question",
    selectAllThatApply: "Sélectionnez tout ce qui s'applique",
    minimal: "Minimal",
    severe: "Sévère",
    yes: "Oui",
    no: "Non",
    yourResults: "Votre bilan de santé",
    startOver: "Nouvelle évaluation",
    newAssessment: "Nouvelle évaluation",
    downloadReport: "Télécharger le rapport",
    consultSpecialist: "Trouver un spécialiste",
    emergency: "URGENCE",
    callNow: "APPELEZ LES SERVICES D'URGENCE MAINTENANT",
    iCalledHelp: "J'ai appelé à l'aide",
    disclaimer: "Ceci n'est pas un diagnostic médical. HoloCare fournit des informations éducatives uniquement. Consultez toujours un professionnel de santé qualifié.",
    severity: { low: "Soins personnels", moderate: "Consulter un médecin", high: "Soins urgents", emergency: "Urgence" },
    conditions: "conditions",
    redFlags: "⚠️ Signaux d'alarme — Quand consulter en urgence",
    firstAid: "Guide de premiers secours",
    prevention: "Conseils de prévention",
    didYouKnow: "Le saviez-vous ?",
    immediateActions: "Actions immédiates",
    medications: "Conseils médicamenteux",
    monitoring: "Quoi surveiller",
    whenToSeeDoctor: "Quand consulter un médecin",
    assessmentSummary: "Résumé de l'évaluation",
    recommendedActions: "Actions recommandées",
    monitor: "Surveiller : {0}",
    worseningSymptoms: "symptômes aggravants",
    seeDoctor24h: "Consultez un médecin dans les 24 heures",
    seeDoctorThisWeek: "Prenez rendez-vous cette semaine",
    medicationGuidance: "Suivez uniquement les médicaments prescrits ou recommandés en vente libre. Ne vous automédiquez pas au-delà des directives.",
    readDosage: "Lisez toujours les instructions de dosage",
    seekEmergencyCare: "Consultez les urgences si les symptômes s'aggravent.",
    consultIfNotImproved: "Si les symptômes ne s'améliorent pas dans {0}, consultez un professionnel de santé.",
    days5to7: "5–7 jours",
    hours24to48: "24–48 heures",
    basedOn: "Basé sur :",
    heroBadge: "Conseils de santé fondés sur des preuves",
    heroTitle: "Votre",
    heroTitleAccent: "Clinique Virtuelle",
    heroSubtitle: "Répondez à une courte évaluation des symptômes et recevez des recommandations de santé personnalisées.",
    viewSpecialties: "Voir les spécialités",
    statSpecialties: "Spécialités",
    statConditions: "Conditions",
    statFree: "Gratuit et privé",
    featInstant: "Résultats instantanés",
    featSafe: "Sûr et sécurisé",
    featMultilang: "Multilingue",
    featOffline: "Fonctionne hors ligne",
    featPrint: "Rapport imprimable",
    showingConditions: "Conditions pour",
    footerEmergency: "En cas d'urgence, appelez toujours les services d'urgence locaux immédiatement.",
    footerDisclaimer: "HoloCare fournit des informations de santé éducatives uniquement et ne remplace pas les conseils médicaux professionnels.",
    footerCopy: "© 2025 HoloCare. Tous droits réservés."
  },
  es: {
    tagline: "Tu Clínica Virtual Inteligente",
    subtitle: "Orientación de salud basada en evidencia al alcance de tu mano",
    startBtn: "Iniciar evaluación",
    chooseSpecialty: "Elegir especialidad",
    specialtySubtitle: "Selecciona el área médica que mejor corresponda a tu preocupación",
    searchPlaceholder: "Buscar especialidades...",
    chooseCondition: "Seleccionar condición",
    conditionSubtitle: "Elige la condición o síntoma que mejor describe lo que estás experimentando",
    backToSpecialties: "Volver a especialidades",
    back: "Volver",
    assessment: "Evaluación de síntomas",
    stepOf: "Paso {0} de {1}",
    next: "Siguiente",
    previous: "Anterior",
    analyzing: "Analizando tus síntomas...",
    analyzingSubtitle: "Generando orientación de salud personalizada",
    submit: "Enviar",
    selectAnswerToContinue: "Por favor selecciona una respuesta para continuar",
    question: "Pregunta",
    selectAllThatApply: "Selecciona todas las que apliquen",
    minimal: "Mínimo",
    severe: "Severo",
    yes: "Sí",
    no: "No",
    yourResults: "Tu evaluación de salud",
    startOver: "Nueva evaluación",
    newAssessment: "Nueva evaluación",
    downloadReport: "Descargar informe",
    consultSpecialist: "Encontrar especialista",
    emergency: "EMERGENCIA",
    callNow: "LLAME A LOS SERVICIOS DE EMERGENCIA AHORA",
    iCalledHelp: "He llamado para pedir ayuda",
    disclaimer: "Esto no es un diagnóstico médico. HoloCare proporciona información educativa únicamente. Siempre consulte a un profesional de salud calificado.",
    severity: { low: "Autocuidado", moderate: "Ver a un médico", high: "Atención urgente", emergency: "Emergencia" },
    conditions: "condiciones",
    redFlags: "⚠️ Señales de alerta — Cuándo buscar atención de emergencia",
    firstAid: "Guía de primeros auxilios",
    prevention: "Consejos de prevención",
    didYouKnow: "¿Sabías que?",
    immediateActions: "Acciones inmediatas",
    medications: "Orientación sobre medicamentos",
    monitoring: "Qué monitorear",
    whenToSeeDoctor: "Cuándo ver a un médico",
    assessmentSummary: "Resumen de la evaluación",
    recommendedActions: "Acciones recomendadas",
    monitor: "Monitorear: {0}",
    worseningSymptoms: "síntomas empeorando",
    seeDoctor24h: "Ve a un médico dentro de 24 horas",
    seeDoctorThisWeek: "Programa una cita médica esta semana",
    medicationGuidance: "Siga solo medicamentos recetados o OTC recomendados. No se automedique más allá de las pautas.",
    readDosage: "Lea siempre las instrucciones de dosificación",
    seekEmergencyCare: "Busque atención de emergencia si los síntomas empeoran.",
    consultIfNotImproved: "Si los síntomas no mejoran en {0}, consulte a un proveedor de salud.",
    days5to7: "5–7 días",
    hours24to48: "24–48 horas",
    basedOn: "Basado en:",
    heroBadge: "Orientación de salud basada en evidencia",
    heroTitle: "Tu",
    heroTitleAccent: "Clínica Virtual",
    heroSubtitle: "Responde una breve evaluación de síntomas y recibe recomendaciones de salud personalizadas.",
    viewSpecialties: "Ver especialidades",
    statSpecialties: "Especialidades",
    statConditions: "Condiciones",
    statFree: "Gratis y privado",
    featInstant: "Resultados instantáneos",
    featSafe: "Seguro y protegido",
    featMultilang: "Multiidioma",
    featOffline: "Funciona sin conexión",
    featPrint: "Informe imprimible",
    showingConditions: "Condiciones para",
    footerEmergency: "En caso de emergencia, siempre llame a los servicios de emergencia locales de inmediato.",
    footerDisclaimer: "HoloCare proporciona información de salud educativa únicamente y no es un sustituto del consejo médico profesional.",
    footerCopy: "© 2025 HoloCare. Todos los derechos reservados."
  }
};

function t(key, ...args) {
  const lang = window.HoloCareState.language;
  const translations = window.HoloCareI18n[lang] || window.HoloCareI18n.en;
  const base = window.HoloCareI18n.en;
  let str = translations[key] || base[key] || key;
  args.forEach((arg, i) => { str = str.replace(`{${i}}`, arg); });
  return str;
}

// ══════════════════════════════════════════════════
// EMERGENCY NUMBERS BY COUNTRY
// ══════════════════════════════════════════════════

const EMERGENCY_NUMBERS = {
  US: { number: '911', name: 'Emergency Services' },
  GB: { number: '999', name: 'Emergency Services' },
  AU: { number: '000', name: 'Emergency Services' },
  CA: { number: '911', name: 'Emergency Services' },
  DEFAULT: { number: '112', name: 'Emergency Services (International)' }
};

function getEmergencyNumber() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (tz.includes('America')) return EMERGENCY_NUMBERS.US;
  if (tz.includes('London') || tz.includes('Europe/London')) return EMERGENCY_NUMBERS.GB;
  if (tz.includes('Australia')) return EMERGENCY_NUMBERS.AU;
  if (tz.includes('Canada')) return EMERGENCY_NUMBERS.CA;
  return EMERGENCY_NUMBERS.DEFAULT;
}

// ══════════════════════════════════════════════════
// SPA NAVIGATION
// ══════════════════════════════════════════════════

function navigateTo(step, pushHistory = true) {
  const prevStep = window.HoloCareState.currentStep;
  window.HoloCareState.currentStep = step;

  if (pushHistory) {
    window.HoloCareState.history.push(step);
    history.pushState({ step }, '', `#${step}`);
  }

  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    s.classList.remove('section--active', 'section--entering');
    s.setAttribute('aria-hidden', 'true');
  });

  const target = document.getElementById(`section-${step}`);
  if (target) {
    target.classList.add('section--active');
    target.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => {
      target.classList.add('section--entering');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const announcer = document.getElementById('aria-announcer');
  if (announcer) {
    const labels = { hero: 'Home', specialties: 'Specialty Selection', conditions: 'Condition Selection', assessment: 'Symptom Assessment', recommendation: 'Your Results', emergency: 'Emergency Protocol' };
    announcer.textContent = `Navigated to: ${labels[step] || step}`;
  }
}

window.addEventListener('popstate', (e) => {
  const step = e.state?.step || 'hero';
  navigateTo(step, false);
  renderCurrentStep();
});

// ══════════════════════════════════════════════════
// RECOMMENDATION ENGINE
// ══════════════════════════════════════════════════

function generateRecommendation() {
  const { selectedCondition, answers } = window.HoloCareState;
  if (!selectedCondition) return null;

  let isEmergency = false;
  let emergencyReason = '';

  answers.forEach((answer, qi) => {
    const q = selectedCondition.questions[qi];
    if (!q) return;
    const selected = Array.isArray(answer) ? answer : [answer];

    if (q.emergencyTrigger && q.emergencyTrigger.length > 0) {
      const hit = selected.find(a => q.emergencyTrigger.includes(a));
      if (hit) {
        isEmergency = true;
        emergencyReason = hit;
      }
    }
    if (q.type === 'scale' && q.emergencyScale && Number(answer) >= q.emergencyScale) {
      isEmergency = true;
      emergencyReason = `Pain/severity scale: ${answer}/10`;
    }
  });

  if (isEmergency) {
    window.HoloCareState.isEmergency = true;
    return {
      severityLevel: 'emergency',
      title: t('severity.emergency') + ' — ' + t('callNow'),
      icon: 'siren',
      color: '#EF4444',
      summary: t('seekEmergencyCare'),
      actions: [
        { type: 'immediate', text: t('callNow'), icon: 'phone-call' },
        { type: 'immediate', text: 'Do not eat or drink anything', icon: 'x-circle' },
        { type: 'immediate', text: 'Stay calm and stay still if possible', icon: 'heart' }
      ],
      redFlags: l10nArray(selectedCondition, 'redFlags'),
      firstAidSteps: l10nArray(selectedCondition, 'firstAidSteps'),
      followUp: t('seekEmergencyCare'),
      disclaimer: t('disclaimer'),
      emergencyReason
    };
  }

  let score = 0;
  let maxScore = 0;
  const totalQuestions = selectedCondition.questions.length;

  answers.forEach((answer, qi) => {
    const q = selectedCondition.questions[qi];
    if (!q) return;

    if (q.type === 'scale') {
      const val = Number(answer) || 0;
      score += val;
      maxScore += 10;
    } else if (q.type === 'single') {
      const optIdx = q.options ? q.options.indexOf(answer) : -1;
      if (optIdx >= 0) {
        score += (optIdx / Math.max(q.options.length - 1, 1)) * 10;
        maxScore += 10;
      }
    } else if (q.type === 'multiple') {
      const selected = Array.isArray(answer) ? answer : [];
      const optCount = q.options ? q.options.length : 1;
      score += (selected.length / optCount) * 10;
      maxScore += 10;
    }
  });

  const ratio = maxScore > 0 ? score / maxScore : 0;
  let severityLevel = 'low';
  if (ratio >= 0.75) severityLevel = 'high';
  else if (ratio >= 0.45) severityLevel = 'moderate';
  else severityLevel = 'low';

  const baseSeverityOrder = { low: 0, moderate: 1, high: 2, emergency: 3 };
  const calcSeverityOrder = { low: 0, moderate: 1, high: 2 };
  if (baseSeverityOrder[selectedCondition.severity] > calcSeverityOrder[severityLevel]) {
    if (selectedCondition.severity !== 'emergency') severityLevel = selectedCondition.severity;
  }

  const severityConfig = {
    low: { title: t('severity.low'), icon: 'check-circle', color: '#10B981', gradient: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)' },
    moderate: { title: t('severity.moderate'), icon: 'stethoscope', color: '#F59E0B', gradient: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' },
    high: { title: t('severity.high'), icon: 'alert-circle', color: '#EF4444', gradient: 'linear-gradient(135deg, #FEF2F2, #FEE2E2)' },
    emergency: { title: t('severity.emergency'), icon: 'siren', color: '#7F1D1D', gradient: 'linear-gradient(135deg, #FEF2F2, #FCA5A5)' }
  };

  const cfg = severityConfig[severityLevel];
  const template = l10n(selectedCondition.recommendationTemplate, severityLevel) || '';

  const actions = [];
  const firstAid = l10nArray(selectedCondition, 'firstAidSteps');
  if (firstAid.length > 0) {
    actions.push({ type: 'immediate', text: firstAid[0], icon: 'zap' });
  }
  const redFlags = l10nArray(selectedCondition, 'redFlags');
  actions.push({ type: 'monitor', text: t('monitor', redFlags.slice(0, 2).join(', ') || t('worseningSymptoms')), icon: 'activity' });
  if (severityLevel !== 'low') {
    actions.push({ type: 'whenToSeeDoctor', text: severityLevel === 'high' ? t('seeDoctor24h') : t('seeDoctorThisWeek'), icon: 'calendar' });
  }
  actions.push({ type: 'medication', text: t('medicationGuidance'), icon: 'pill', warning: t('readDosage') });

  const followUpTime = severityLevel === 'low' ? t('days5to7') : t('hours24to48');
  const followUp = selectedCondition.severity === 'emergency'
    ? t('seekEmergencyCare')
    : t('consultIfNotImproved', followUpTime);

  return {
    severityLevel,
    title: cfg.title,
    icon: cfg.icon,
    color: cfg.color,
    gradient: cfg.gradient,
    summary: template,
    actions,
    redFlags,
    firstAidSteps: firstAid,
    followUp,
    disclaimer: t('disclaimer'),
    didYouKnow: l10n(selectedCondition, 'didYouKnow'),
    prevention: l10nArray(selectedCondition, 'prevention'),
    conditionName: l10n(selectedCondition, 'name'),
    specialtyName: window.HoloCareState.selectedSpecialty ? l10n(window.HoloCareState.selectedSpecialty, 'name') : ''
  };
}

// ══════════════════════════════════════════════════
// RENDER FUNCTIONS
// ══════════════════════════════════════════════════

function renderSpecialties(filter = '') {
  const container = document.getElementById('specialties-grid');
  if (!container) return;

  const specialties = window.HoloCareSpecialties || [];
  const filtered = filter
    ? specialties.filter(s => l10n(s, 'name').toLowerCase().includes(filter.toLowerCase()) || l10n(s, 'description').toLowerCase().includes(filter.toLowerCase()))
    : specialties;

  const emergency = filtered.filter(s => s.isEmergency);
  const regular = filtered.filter(s => !s.isEmergency);
  const sorted = [...emergency, ...regular];

  container.innerHTML = sorted.map(spec => {
    const conditions = (window.HoloCareConditions || []).filter(c => {
      const ids = Array.isArray(c.specialtyId) ? c.specialtyId : [c.specialtyId];
      return ids.includes(spec.id);
    });
    const count = conditions.length || spec.conditionCount || 3;

    return `
      <div class="specialty-card ${spec.isEmergency ? 'specialty-card--emergency' : ''}"
           data-specialty-id="${spec.id}"
           role="button"
           tabindex="0"
           aria-label="${l10n(spec, 'name')}: ${l10n(spec, 'description')}, ${count} ${t('conditions')}"
           style="--card-color: ${spec.color}; --card-bg: ${spec.bgColor}">
        <div class="specialty-card__icon" style="color: ${spec.color}; background: ${spec.bgColor}">
          <i data-lucide="${spec.icon}" aria-hidden="true"></i>
        </div>
        <div class="specialty-card__content">
          <h3 class="specialty-card__name">${l10n(spec, 'name')}</h3>
          <p class="specialty-card__desc">${l10n(spec, 'description')}</p>
        </div>
        <div class="specialty-card__badge" style="background: ${spec.color}20; color: ${spec.color}">
          ${count} ${t('conditions')}
        </div>
        ${spec.isEmergency ? '<div class="emergency-pulse"></div>' : ''}
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();

  container.querySelectorAll('.specialty-card').forEach(card => {
    const handler = () => selectSpecialty(card.dataset.specialtyId);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });
}

function selectSpecialty(specialtyId) {
  const specialty = (window.HoloCareSpecialties || []).find(s => s.id === specialtyId);
  if (!specialty) return;
  window.HoloCareState.selectedSpecialty = specialty;
  window.HoloCareState.selectedCondition = null;
  window.HoloCareState.answers = [];
  window.HoloCareState.currentQuestionIndex = 0;
  renderConditions();
  navigateTo('conditions');
}

function renderConditions() {
  const container = document.getElementById('conditions-grid');
  const subtitle = document.getElementById('conditions-specialty-name');
  if (!container) return;

  const spec = window.HoloCareState.selectedSpecialty;
  if (subtitle) subtitle.textContent = l10n(spec, 'name') || '';

  const allConditions = window.HoloCareConditions || [];
  const conditions = allConditions.filter(c => {
    const ids = Array.isArray(c.specialtyId) ? c.specialtyId : [c.specialtyId];
    return ids.includes(spec?.id);
  });

  const severityOrder = { emergency: 0, high: 1, moderate: 2, low: 3 };
  conditions.sort((a, b) => (severityOrder[a.severity] || 3) - (severityOrder[b.severity] || 3));

  const severityConfig = {
    low: { label: t('severity.low'), color: '#10B981', bg: '#ECFDF5' },
    moderate: { label: t('severity.moderate'), color: '#F59E0B', bg: '#FFFBEB' },
    high: { label: t('severity.high'), color: '#EF4444', bg: '#FEF2F2' },
    emergency: { label: t('severity.emergency'), color: '#7F1D1D', bg: '#FEE2E2' }
  };

  container.innerHTML = conditions.map(cond => {
    const sev = severityConfig[cond.severity] || severityConfig.low;
    return `
      <div class="condition-card ${cond.severity === 'emergency' ? 'condition-card--emergency' : ''}"
           data-condition-id="${cond.id}"
           role="button"
           tabindex="0"
           aria-label="${l10n(cond, 'name')}: ${l10n(cond, 'description')}. Severity: ${sev.label}"
           style="--sev-color: ${sev.color}">
        <div class="condition-card__header">
          <div class="condition-card__icon" style="color: ${sev.color}; background: ${sev.bg}">
            <i data-lucide="${cond.icon}" aria-hidden="true"></i>
          </div>
          <span class="condition-card__severity" style="background: ${sev.bg}; color: ${sev.color}">${sev.label}</span>
        </div>
        <h3 class="condition-card__name">${l10n(cond, 'name')}</h3>
        <p class="condition-card__desc">${l10n(cond, 'description')}</p>
        ${cond.severity === 'emergency' ? '<div class="emergency-pulse"></div>' : ''}
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();

  container.querySelectorAll('.condition-card').forEach(card => {
    const handler = () => selectCondition(card.dataset.conditionId);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });
}

function selectCondition(conditionId) {
  const condition = (window.HoloCareConditions || []).find(c => c.id === conditionId);
  if (!condition) return;
  window.HoloCareState.selectedCondition = condition;
  window.HoloCareState.answers = [];
  window.HoloCareState.currentQuestionIndex = 0;
  renderQuestion(0);
  navigateTo('assessment');
}

function renderQuestion(index) {
  const condition = window.HoloCareState.selectedCondition;
  if (!condition) return;

  const questions = condition.questions;
  if (index >= questions.length) {
    finishAssessment();
    return;
  }

  const q = questions[index];
  const total = questions.length;
  const progress = Math.round(((index) / total) * 100);

  const progressEl = document.getElementById('assessment-progress-bar');
  const stepEl = document.getElementById('assessment-step-text');
  const condNameEl = document.getElementById('assessment-condition-name');

  if (progressEl) progressEl.style.width = `${progress}%`;
  if (stepEl) stepEl.textContent = t('stepOf', index + 1, total);
  if (condNameEl) condNameEl.textContent = l10n(condition, 'name');

  const container = document.getElementById('question-container');
  if (!container) return;

  let inputHTML = '';
  const savedAnswer = window.HoloCareState.answers[index];
  const opts = q.options || [];
  const optsAr = q.optionsAr || opts;
  const optsFr = q.optionsFr || opts;
  const optsEs = q.optionsEs || opts;

  function getOptionLabel(i) {
    const lang = window.HoloCareState.language;
    if (lang === 'ar' && optsAr[i]) return optsAr[i];
    if (lang === 'fr' && optsFr[i]) return optsFr[i];
    if (lang === 'es' && optsEs[i]) return optsEs[i];
    return opts[i];
  }

  if (q.type === 'single' || !q.type) {
    inputHTML = `<div class="options-grid" role="radiogroup" aria-labelledby="question-text">
      ${opts.map((opt, i) => `
        <label class="option-card ${savedAnswer === opt ? 'option-card--selected' : ''}" 
               role="radio" aria-checked="${savedAnswer === opt}" tabindex="0" data-value="${opt}">
          <span class="option-card__radio"></span>
          <span class="option-card__text">${getOptionLabel(i)}</span>
        </label>
      `).join('')}
    </div>`;
  } else if (q.type === 'multiple') {
    const saved = Array.isArray(savedAnswer) ? savedAnswer : [];
    inputHTML = `<div class="options-pills" role="group" aria-labelledby="question-text">
      ${opts.map((opt, i) => `
        <label class="option-pill ${saved.includes(opt) ? 'option-pill--selected' : ''}" 
               role="checkbox" aria-checked="${saved.includes(opt)}" tabindex="0" data-value="${opt}">
          <i data-lucide="check" aria-hidden="true"></i> ${getOptionLabel(i)}
        </label>
      `).join('')}
    </div>
    <p class="hint-text">${t('selectAllThatApply')}</p>`;
  } else if (q.type === 'scale') {
    const val = savedAnswer || q.min || 1;
    const emojis = ['😊', '🙂', '😐', '😟', '😰'];
    const emojiIdx = Math.min(Math.floor(((val - q.min) / (q.max - q.min)) * emojis.length), emojis.length - 1);
    inputHTML = `
      <div class="scale-container">
        <div class="scale-emoji" id="scale-emoji" aria-live="polite">${emojis[emojiIdx]}</div>
        <input type="range" class="scale-input" id="scale-input"
               min="${q.min}" max="${q.max}" value="${val}"
               aria-label="Pain scale from ${q.min} to ${q.max}"
               aria-valuemin="${q.min}" aria-valuemax="${q.max}" aria-valuenow="${val}">
        <div class="scale-labels">
          <span>${q.min} (${t('minimal')})</span>
          <span id="scale-value-display" class="scale-value-big">${val}</span>
          <span>${q.max} (${t('severe')})</span>
        </div>
      </div>`;
  } else if (q.type === 'yesno') {
    inputHTML = `<div class="yesno-container">
      <button class="yesno-btn ${savedAnswer === 'Yes' ? 'yesno-btn--yes-active' : ''}" data-value="Yes">
        <i data-lucide="check" aria-hidden="true"></i> ${t('yes')}
      </button>
      <button class="yesno-btn ${savedAnswer === 'No' ? 'yesno-btn--no-active' : ''}" data-value="No">
        <i data-lucide="x" aria-hidden="true"></i> ${t('no')}
      </button>
    </div>`;
  }

  container.innerHTML = `
    <div class="question-card" role="group">
      <p class="question-number">${t('question')} ${index + 1}</p>
      <h2 class="question-text" id="question-text">${l10n(q, 'question')}</h2>
      <div class="question-input" id="question-input">
        ${inputHTML}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  if (q.type === 'single' || !q.type) {
    container.querySelectorAll('.option-card').forEach(card => {
      const selectHandler = () => {
        container.querySelectorAll('.option-card').forEach(c => { c.classList.remove('option-card--selected'); c.setAttribute('aria-checked', 'false'); });
        card.classList.add('option-card--selected');
        card.setAttribute('aria-checked', 'true');
        window.HoloCareState.answers[index] = card.dataset.value;
        checkEmergencyTrigger(q, [card.dataset.value]);
      };
      card.addEventListener('click', selectHandler);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectHandler(); } });
    });
  } else if (q.type === 'multiple') {
    if (!Array.isArray(window.HoloCareState.answers[index])) window.HoloCareState.answers[index] = [];
    container.querySelectorAll('.option-pill').forEach(pill => {
      const toggleHandler = () => {
        const arr = window.HoloCareState.answers[index] || [];
        const val = pill.dataset.value;
        const idx = arr.indexOf(val);
        if (idx >= 0) { arr.splice(idx, 1); pill.classList.remove('option-pill--selected'); pill.setAttribute('aria-checked', 'false'); }
        else { arr.push(val); pill.classList.add('option-pill--selected'); pill.setAttribute('aria-checked', 'true'); }
        window.HoloCareState.answers[index] = arr;
        checkEmergencyTrigger(q, arr);
      };
      pill.addEventListener('click', toggleHandler);
      pill.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleHandler(); } });
    });
  } else if (q.type === 'scale') {
    const slider = container.querySelector('#scale-input');
    const emoji = container.querySelector('#scale-emoji');
    const display = container.querySelector('#scale-value-display');
    const emojis = ['😊', '🙂', '😐', '😟', '😰'];
    if (slider) {
      slider.addEventListener('input', () => {
        const v = Number(slider.value);
        window.HoloCareState.answers[index] = v;
        slider.setAttribute('aria-valuenow', v);
        if (display) display.textContent = v;
        const ei = Math.min(Math.floor(((v - q.min) / (q.max - q.min)) * emojis.length), emojis.length - 1);
        if (emoji) emoji.textContent = emojis[ei];
      });
      window.HoloCareState.answers[index] = Number(slider.value);
    }
  } else if (q.type === 'yesno') {
    container.querySelectorAll('.yesno-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.yesno-btn').forEach(b => b.className = 'yesno-btn');
        btn.classList.add(btn.dataset.value === 'Yes' ? 'yesno-btn--yes-active' : 'yesno-btn--no-active');
        window.HoloCareState.answers[index] = btn.dataset.value;
      });
    });
  }

  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');

  if (prevBtn) {
    prevBtn.disabled = index === 0;
    prevBtn.onclick = () => {
      window.HoloCareState.currentQuestionIndex = index - 1;
      renderQuestion(index - 1);
    };
  }
  if (nextBtn) {
    nextBtn.innerHTML = (index === total - 1 ? `<span>${t('submit')}</span>` : `<span>${t('next')}</span>`) + `<i data-lucide="arrow-right" aria-hidden="true"></i>`;
    if (window.lucide) lucide.createIcons();
    nextBtn.onclick = () => {
      const ans = window.HoloCareState.answers[index];
      const hasAnswer = q.type === 'multiple' ? (Array.isArray(ans) && ans.length > 0) :
                        q.type === 'scale' ? ans !== undefined :
                        ans !== undefined && ans !== null && ans !== '';
      if (!hasAnswer && q.type !== 'scale') {
        showToast(t('selectAnswerToContinue'), 'warning');
        return;
      }
      window.HoloCareState.currentQuestionIndex = index + 1;
      if (index + 1 >= total) { finishAssessment(); return; }
      renderQuestion(index + 1);
    };
  }
}

function checkEmergencyTrigger(q, selectedValues) {
  if (!q.emergencyTrigger || q.emergencyTrigger.length === 0) return;
  const hit = selectedValues.find(v => q.emergencyTrigger.includes(v));
  if (hit) {
    setTimeout(() => showEmergencyProtocol(hit), 300);
  }
}

function finishAssessment() {
  showAnalyzing();
  setTimeout(() => {
    const rec = generateRecommendation();
    window.HoloCareState.recommendations = rec;
    if (window.HoloCareState.isEmergency) {
      showEmergencyProtocol();
    } else {
      renderRecommendation(rec);
      navigateTo('recommendation');
    }
  }, 1800);
}

function showAnalyzing() {
  const container = document.getElementById('question-container');
  if (!container) return;
  const icons = ['stethoscope', 'heart-pulse', 'activity', 'brain', 'pill'];
  container.innerHTML = `
    <div class="analyzing-screen" role="status" aria-live="polite">
      <div class="analyzing-icons">
        ${icons.map(ic => `<div class="analyzing-icon"><i data-lucide="${ic}"></i></div>`).join('')}
      </div>
      <h2>${t('analyzing')}</h2>
      <p>${t('analyzingSubtitle')}</p>
      <div class="analyzing-bar"><div class="analyzing-bar__fill"></div></div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function renderRecommendation(rec) {
  if (!rec) return;
  const container = document.getElementById('recommendation-content');
  if (!container) return;

  const actionIcons = { immediate: 'zap', medication: 'pill', monitor: 'activity', whenToSeeDoctor: 'stethoscope', calendar: 'calendar' };
  const actionLabels = { immediate: t('immediateActions'), medication: t('medications'), monitor: t('monitoring'), whenToSeeDoctor: t('whenToSeeDoctor') };

  container.innerHTML = `
    <div class="rec-hero" style="background: ${rec.gradient || 'linear-gradient(135deg,#ECFDF5,#D1FAE5)'}">
      <div class="rec-hero__icon" style="color: ${rec.color}">
        <i data-lucide="${rec.icon}" aria-hidden="true"></i>
      </div>
      <div class="rec-hero__text">
        <div class="rec-severity-badge" style="background: ${rec.color}20; color: ${rec.color}; border: 1.5px solid ${rec.color}40">
          ${t('severity.' + rec.severityLevel) || rec.severityLevel}
        </div>
        <h2 class="rec-title">${rec.title}</h2>
        <p class="rec-condition">${t('basedOn')} <strong>${rec.conditionName}</strong>${rec.specialtyName ? ' · ' + rec.specialtyName : ''}</p>
      </div>
    </div>

    <div class="rec-summary glass-card">
      <h3><i data-lucide="file-text" aria-hidden="true"></i> ${t('assessmentSummary')}</h3>
      <p id="rec-summary-text" class="rec-summary-text">${rec.summary}</p>
    </div>

    <div class="rec-actions">
      <h3 class="rec-section-title">${t('recommendedActions')}</h3>
      <div class="rec-actions-grid">
        ${(rec.actions || []).map(action => `
          <div class="action-card action-card--${action.type}">
            <div class="action-card__icon"><i data-lucide="${action.icon || 'circle'}" aria-hidden="true"></i></div>
            <div class="action-card__content">
              <span class="action-card__label">${actionLabels[action.type] || action.type}</span>
              <p class="action-card__text">${action.text}</p>
              ${action.warning ? `<p class="action-card__warning"><i data-lucide="alert-triangle"></i> ${action.warning}</p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${rec.redFlags && rec.redFlags.length > 0 ? `
      <div class="rec-redflags glass-card">
        <h3 class="redflags-title"><i data-lucide="alert-triangle" aria-hidden="true"></i> ${t('redFlags')}</h3>
        <ul class="redflags-list">
          ${rec.redFlags.map(flag => `<li><i data-lucide="chevron-right" aria-hidden="true"></i> ${flag}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    ${rec.firstAidSteps && rec.firstAidSteps.length > 0 ? `
      <details class="rec-accordion glass-card">
        <summary class="rec-accordion__summary">
          <i data-lucide="heart-handshake" aria-hidden="true"></i>
          <span>${t('firstAid')}</span>
          <i data-lucide="chevron-down" class="accordion-chevron" aria-hidden="true"></i>
        </summary>
        <div class="rec-accordion__content">
          <ol class="firstaid-list">
            ${rec.firstAidSteps.map((step, i) => `<li><span class="step-number">${i + 1}</span>${step}</li>`).join('')}
          </ol>
        </div>
      </details>
    ` : ''}

    ${rec.didYouKnow ? `
      <div class="rec-didyouknow glass-card">
        <div class="didyouknow-header">
          <i data-lucide="lightbulb" aria-hidden="true"></i>
          <h3>${t('didYouKnow')}</h3>
        </div>
        <p>${rec.didYouKnow}</p>
      </div>
    ` : ''}

    ${rec.prevention && rec.prevention.length > 0 ? `
      <details class="rec-accordion glass-card">
        <summary class="rec-accordion__summary">
          <i data-lucide="shield-check" aria-hidden="true"></i>
          <span>${t('prevention')}</span>
          <i data-lucide="chevron-down" class="accordion-chevron" aria-hidden="true"></i>
        </summary>
        <div class="rec-accordion__content">
          <ul class="prevention-list">
            ${rec.prevention.map(tip => `<li><i data-lucide="check-circle-2" aria-hidden="true"></i> ${tip}</li>`).join('')}
          </ul>
        </div>
      </details>
    ` : ''}

    <div class="rec-followup glass-card">
      <i data-lucide="calendar-check" aria-hidden="true"></i>
      <p>${rec.followUp}</p>
    </div>

    <div class="rec-disclaimer">
      <i data-lucide="info" aria-hidden="true"></i>
      <p>${rec.disclaimer}</p>
    </div>
  `;

  if (window.lucide) lucide.createIcons();

  const summaryEl = document.getElementById('rec-summary-text');
  if (summaryEl && rec.summary) {
    typewriterEffect(summaryEl, rec.summary, 20);
  }
}

function showEmergencyProtocol(reason) {
  window.HoloCareState.isEmergency = true;
  const overlay = document.getElementById('emergency-overlay');
  if (!overlay) return;

  const condition = window.HoloCareState.selectedCondition;
  const emergencyNum = getEmergencyNumber();
  const firstAidSteps = l10nArray(condition, 'firstAidSteps') || [];

  const stepsHTML = firstAidSteps.slice(0, 5).map((step, i) => `
    <div class="em-step">
      <span class="em-step__num">${i + 1}</span>
      <span>${step}</span>
    </div>
  `).join('');

  overlay.innerHTML = `
    <div class="emergency-content" role="alertdialog" aria-modal="true" aria-labelledby="em-title" aria-describedby="em-desc">
      <div class="emergency-pulse-bg"></div>
      <div class="em-icon"><i data-lucide="siren" aria-hidden="true"></i></div>
      <h1 id="em-title" class="em-title">${t('emergency')}</h1>
      <p id="em-desc" class="em-subtitle">${t('callNow')}</p>
      ${reason ? `<p class="em-reason">Triggered by: <strong>${reason}</strong></p>` : ''}

      <a href="tel:${emergencyNum.number}" class="em-call-btn" aria-label="Call ${emergencyNum.number}">
        <i data-lucide="phone-call" aria-hidden="true"></i>
        <span>CALL ${emergencyNum.number}</span>
      </a>
      <p class="em-number-label">${emergencyNum.name}</p>

      ${stepsHTML ? `
        <div class="em-firstaid">
          <h3>${t('firstAid')}:</h3>
          ${stepsHTML}
        </div>
      ` : ''}

      <div class="em-actions">
        <button class="em-confirm-btn" id="em-confirm" onclick="confirmEmergencyCall()">
          <i data-lucide="check-circle" aria-hidden="true"></i>
          ${t('iCalledHelp')}
        </button>
      </div>
      <p class="em-disclaimer">${t('disclaimer')}</p>
    </div>
  `;

  overlay.classList.add('emergency-overlay--active');
  overlay.setAttribute('aria-hidden', 'false');
  if (window.lucide) lucide.createIcons();

  const focusable = overlay.querySelectorAll('a, button, [tabindex]');
  if (focusable.length > 0) focusable[0].focus();

  overlay.addEventListener('keydown', function trapFocus(e) {
    if (e.key === 'Escape') return;
    if (e.key === 'Tab') {
      const els = Array.from(overlay.querySelectorAll('a, button, [tabindex="0"]'));
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last?.focus(); } }
      else { if (document.activeElement === last) { e.preventDefault(); first?.focus(); } }
    }
  });
}

window.confirmEmergencyCall = function() {
  const overlay = document.getElementById('emergency-overlay');
  if (overlay) {
    overlay.classList.remove('emergency-overlay--active');
    overlay.setAttribute('aria-hidden', 'true');
  }
  const rec = window.HoloCareState.recommendations || generateRecommendation();
  if (rec) {
    renderRecommendation(rec);
    navigateTo('recommendation');
  } else {
    navigateTo('hero');
  }
};

// ══════════════════════════════════════════════════
// UTILITIES
// ══════════════════════════════════════════════════

function typewriterEffect(el, text, speed = 25) {
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

function showToast(msg, type = 'info') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast toast--${type}`;
  toast.textContent = msg;
  toast.setAttribute('role', 'alert');
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
  }, 3000);
}

function resetState() {
  window.HoloCareState.selectedSpecialty = null;
  window.HoloCareState.selectedCondition = null;
  window.HoloCareState.answers = [];
  window.HoloCareState.currentQuestionIndex = 0;
  window.HoloCareState.recommendations = null;
  window.HoloCareState.isEmergency = false;
  window.HoloCareState.history = ['hero'];
}

// ══════════════════════════════════════════════════
// DARK MODE
// ══════════════════════════════════════════════════

function toggleDarkMode() {
  window.HoloCareState.darkMode = !window.HoloCareState.darkMode;
  document.documentElement.classList.toggle('dark', window.HoloCareState.darkMode);
  localStorage.setItem('holocare-dark', window.HoloCareState.darkMode ? '1' : '0');
  const btn = document.getElementById('dark-mode-toggle');
  if (btn) {
    btn.setAttribute('aria-label', window.HoloCareState.darkMode ? 'Switch to light mode' : 'Switch to dark mode');
    btn.innerHTML = window.HoloCareState.darkMode
      ? '<i data-lucide="sun" aria-hidden="true"></i>'
      : '<i data-lucide="moon" aria-hidden="true"></i>';
    if (window.lucide) lucide.createIcons();
  }
}

function initDarkMode() {
  const saved = localStorage.getItem('holocare-dark');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === '1' || (saved === null && prefersDark)) {
    window.HoloCareState.darkMode = true;
    document.documentElement.classList.add('dark');
  }
}

function applyTranslations() {
  const lang = window.HoloCareState.language;
  const translations = window.HoloCareI18n[lang] || window.HoloCareI18n.en;
  const base = window.HoloCareI18n.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[key] || base[key];
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = translations[key] || base[key];
    if (text !== undefined) el.setAttribute('placeholder', text);
  });

  const step = window.HoloCareState.currentStep;
  if (step === 'specialties') renderSpecialties();
  if (step === 'conditions') renderConditions();
  if (step === 'assessment') renderQuestion(window.HoloCareState.currentQuestionIndex || 0);
  if (step === 'recommendation' && window.HoloCareState.recommendations) {
    renderRecommendation(window.HoloCareState.recommendations);
  }

  if (window.lucide) lucide.createIcons();
}

// ══════════════════════════════════════════════════
// LANGUAGE TOGGLE
// ══════════════════════════════════════════════════

function setLanguage(lang) {
  window.HoloCareState.language = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('holocare-lang', lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('lang-active', el.dataset.lang === lang);
  });
  applyTranslations();
}

// ══════════════════════════════════════════════════
// PRINT / DOWNLOAD REPORT
// ══════════════════════════════════════════════════

function downloadReport() {
  const rec = window.HoloCareState.recommendations;
  const condition = window.HoloCareState.selectedCondition;
  if (!rec || !condition) { showToast(t('selectAnswerToContinue'), 'warning'); return; }

  const now = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
  const printWin = window.open('', '_blank');
  printWin.document.write(`
    <!DOCTYPE html><html><head>
    <title>HoloCare Health Report — ${l10n(condition, 'name')}</title>
    <style>
      body { font-family: Georgia, serif; max-width: 800px; margin: 40px auto; color: #1e293b; line-height: 1.6; }
      h1 { color: #0EA5E9; border-bottom: 2px solid #0EA5E9; padding-bottom: 10px; }
      h2 { color: #334155; margin-top: 24px; }
      .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 14px; font-weight: 600; background: ${rec.color}20; color: ${rec.color}; }
      ul, ol { padding-left: 24px; }
      li { margin: 6px 0; }
      .disclaimer { margin-top: 32px; padding: 16px; background: #f1f5f9; border-left: 4px solid #94a3b8; font-size: 13px; color: #64748b; }
      .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #94a3b8; }
      @media print { body { margin: 20px; } }
    </style></head><body>
    <h1>🏥 HoloCare Health Assessment Report</h1>
    <p><strong>Date:</strong> ${now}</p>
    <p><strong>Condition:</strong> ${l10n(condition, 'name')}</p>
    <p><strong>Specialty:</strong> ${window.HoloCareState.selectedSpecialty ? l10n(window.HoloCareState.selectedSpecialty, 'name') : 'N/A'}</p>
    <h2>Assessment Result <span class="badge">${rec.title}</span></h2>
    <p>${rec.summary}</p>
    <h2>Recommended Actions</h2>
    <ul>${(rec.actions || []).map(a => `<li>${a.text}</li>`).join('')}</ul>
    ${rec.redFlags?.length ? `<h2>⚠️ Red Flags</h2><ul>${rec.redFlags.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
    ${rec.firstAidSteps?.length ? `<h2>First Aid Steps</h2><ol>${rec.firstAidSteps.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
    ${rec.prevention?.length ? `<h2>Prevention</h2><ul>${rec.prevention.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
    <div class="disclaimer">${rec.disclaimer}</div>
    <div class="footer">Generated by HoloCare Virtual Clinic · Not a substitute for professional medical advice</div>
    </body></html>
  `);
  printWin.document.close();
  printWin.print();
}

// ══════════════════════════════════════════════════
// INTERSECTION OBSERVER — SCROLL REVEALS
// ══════════════════════════════════════════════════

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// ══════════════════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════════════════

function init() {
  initDarkMode();

  const savedLang = localStorage.getItem('holocare-lang') || 'en';
  setLanguage(savedLang);

  const hash = location.hash.replace('#', '');
  const validSteps = ['hero', 'specialties', 'conditions', 'assessment', 'recommendation'];
  const startStep = validSteps.includes(hash) ? hash : 'hero';
  navigateTo(startStep, false);

  if (startStep !== 'hero') { resetState(); navigateTo('hero', false); }

  const dmBtn = document.getElementById('dark-mode-toggle');
  if (dmBtn) dmBtn.addEventListener('click', toggleDarkMode);

  const ctaBtn = document.getElementById('hero-cta');
  if (ctaBtn) ctaBtn.addEventListener('click', () => {
    renderSpecialties();
    navigateTo('specialties');
  });

  const searchInput = document.getElementById('specialty-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => renderSpecialties(e.target.value));
  }

  document.getElementById('back-to-specialties')?.addEventListener('click', () => {
    renderSpecialties();
    navigateTo('specialties');
  });
  document.getElementById('back-to-specialties-2')?.addEventListener('click', () => {
    renderSpecialties();
    navigateTo('specialties');
  });

  document.querySelectorAll('[data-action="start-over"]').forEach(btn => {
    btn.addEventListener('click', () => {
      resetState();
      renderSpecialties();
      navigateTo('specialties');
    });
  });

  document.getElementById('btn-download-report')?.addEventListener('click', downloadReport);

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  document.getElementById('nav-logo')?.addEventListener('click', () => {
    resetState();
    navigateTo('hero');
  });

  document.getElementById('skip-to-content')?.addEventListener('click', e => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) { main.setAttribute('tabindex', '-1'); main.focus(); }
  });

  initScrollReveal();

  if (window.lucide) lucide.createIcons();

  window.addEventListener('beforeunload', () => {
    try {
      const s = window.HoloCareState;
      localStorage.setItem('holocare-progress', JSON.stringify({
        currentStep: s.currentStep,
        selectedSpecialty: s.selectedSpecialty?.id,
        selectedCondition: s.selectedCondition?.id,
        answers: s.answers,
        questionIndex: s.currentQuestionIndex
      }));
    } catch (e) {}
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}