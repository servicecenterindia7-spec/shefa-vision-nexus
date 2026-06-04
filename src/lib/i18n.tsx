import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const dict = {
  // nav
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "عن المستشفى" },
  "nav.departments": { en: "Departments", ar: "الأقسام" },
  "nav.doctors": { en: "Doctors", ar: "الأطباء" },
  "nav.emergency": { en: "Emergency", ar: "الطوارئ" },
  "nav.insurance": { en: "Insurance", ar: "التأمين" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.book": { en: "Book Appointment", ar: "احجز موعد" },

  // hero
  "hero.tag": { en: "CBAHI Accredited Hospital", ar: "معتمد من الهيئة السعودية CBAHI" },
  "hero.title": {
    en: "Trusted Healthcare Excellence in Makkah",
    ar: "رعاية صحية موثوقة ومتميزة في مكة المكرمة",
  },
  "hero.sub": {
    en: "Comprehensive medical services with experienced specialists, advanced facilities and 24/7 emergency care — designed around the patient.",
    ar: "خدمات طبية شاملة مع نخبة من الاستشاريين، ومرافق متطورة، وطوارئ على مدار الساعة — رعاية متمحورة حول المريض.",
  },
  "hero.book": { en: "Book Appointment", ar: "احجز موعد" },
  "hero.emergency": { en: "Emergency Care", ar: "الطوارئ" },
  "hero.call": { en: "Call Now", ar: "اتصل الآن" },
  "hero.badge.cbahi": { en: "CBAHI Accredited", ar: "اعتماد CBAHI" },
  "hero.badge.247": { en: "24/7 Emergency", ar: "طوارئ ٢٤/٧" },
  "hero.badge.amb": { en: "Ambulance Services", ar: "خدمات الإسعاف" },
  "hero.badge.spec": { en: "Expert Specialists", ar: "استشاريون خبراء" },

  // stats
  "stats.reviews": { en: "Patient Reviews", ar: "تقييم مريض" },
  "stats.specialties": { en: "Medical Specialties", ar: "تخصص طبي" },
  "stats.emergency": { en: "Emergency Care", ar: "طوارئ" },
  "stats.experience": { en: "Years of Care", ar: "سنوات من الرعاية" },

  // about
  "about.kicker": { en: "About Shefa Hospital", ar: "عن مستشفى الشفاء" },
  "about.title": {
    en: "A Legacy of Compassionate Care in the Heart of Makkah",
    ar: "إرث من الرعاية الرحيمة في قلب مكة المكرمة",
  },
  "about.p1": {
    en: "Shefa Hospital is a leading multispecialty healthcare provider serving the community of Makkah with quality, ethics and innovation. From routine consultations to complex critical care, our integrated departments deliver world-class outcomes.",
    ar: "مستشفى الشفاء هو مزود رعاية صحية متعدد التخصصات يخدم مجتمع مكة المكرمة بالجودة والأخلاق والابتكار. من الاستشارات الروتينية إلى الرعاية الحرجة المعقدة، تقدم أقسامنا المتكاملة نتائج عالمية المستوى.",
  },
  "about.p2": {
    en: "Backed by CBAHI accreditation, modern diagnostics and a passionate medical team, we deliver care that you can trust — for every life, every moment.",
    ar: "بفضل اعتماد CBAHI والتشخيص الحديث وفريق طبي متفاني، نقدم رعاية يمكنك الثقة بها — لكل حياة، في كل لحظة.",
  },
  "about.cta": { en: "Learn more about us", ar: "اعرف المزيد عنا" },

  // departments
  "dep.kicker": { en: "Centers of Excellence", ar: "مراكز التميز" },
  "dep.title": { en: "Our Medical Departments", ar: "أقسامنا الطبية" },
  "dep.sub": {
    en: "Specialized teams and modern technology across every major area of medicine.",
    ar: "فرق متخصصة وتقنية حديثة في جميع المجالات الطبية الرئيسية.",
  },
  "dep.learn": { en: "Learn more", ar: "اعرف المزيد" },

  // why
  "why.kicker": { en: "Why Shefa", ar: "لماذا الشفاء" },
  "why.title": { en: "Care that earns your trust", ar: "رعاية تستحق ثقتك" },

  // doctors
  "doc.kicker": { en: "Meet Our Doctors", ar: "تعرف على أطبائنا" },
  "doc.title": { en: "Expert Specialists. Personal Care.", ar: "استشاريون خبراء. رعاية شخصية." },
  "doc.book": { en: "Book Appointment", ar: "احجز موعد" },
  "doc.exp": { en: "years experience", ar: "سنوات خبرة" },
  "doc.langs": { en: "Languages", ar: "اللغات" },

  // emergency
  "em.title": { en: "Emergency Services Available 24/7", ar: "خدمات الطوارئ متاحة على مدار الساعة" },
  "em.sub": {
    en: "Our emergency department and ambulance fleet are ready around the clock. Every second counts — we're here.",
    ar: "قسم الطوارئ وأسطول الإسعاف لدينا جاهز على مدار الساعة. كل ثانية مهمة — نحن هنا.",
  },
  "em.call": { en: "Call Emergency", ar: "اتصل بالطوارئ" },
  "em.amb": { en: "Request Ambulance", ar: "طلب إسعاف" },

  // vision
  "v.kicker": { en: "Saudi Vision 2030", ar: "رؤية المملكة 2030" },
  "v.title": {
    en: "Supporting the Kingdom's Healthcare Transformation",
    ar: "دعم التحول الصحي للمملكة",
  },
  "v.sub": {
    en: "Shefa Hospital aligns with Vision 2030 through quality healthcare, digital innovation, accessibility and community wellness.",
    ar: "يتماشى مستشفى الشفاء مع رؤية 2030 من خلال الرعاية الصحية الجيدة، والابتكار الرقمي، وسهولة الوصول، وصحة المجتمع.",
  },

  // testimonials
  "t.kicker": { en: "Patient Stories", ar: "قصص المرضى" },
  "t.title": { en: "Trusted by our community", ar: "محل ثقة مجتمعنا" },

  // contact
  "c.kicker": { en: "Get in Touch", ar: "تواصل معنا" },
  "c.title": { en: "We're here for you", ar: "نحن هنا من أجلك" },
  "c.address": { en: "Al Mansur, Makkah 24232, Saudi Arabia", ar: "المنصور، مكة المكرمة 24232، المملكة العربية السعودية" },
  "c.phone": { en: "Phone", ar: "الهاتف" },
  "c.hours": { en: "Working Hours", ar: "ساعات العمل" },
  "c.hoursVal": { en: "Open 24 hours — Emergency always available", ar: "مفتوح 24 ساعة — الطوارئ متاحة دائماً" },
  "c.name": { en: "Full name", ar: "الاسم الكامل" },
  "c.phoneField": { en: "Phone number", ar: "رقم الجوال" },
  "c.msg": { en: "Message", ar: "الرسالة" },
  "c.send": { en: "Send Message", ar: "إرسال الرسالة" },

  // footer
  "f.tag": { en: "Healthcare Excellence in Makkah", ar: "تميز رعاية صحية في مكة المكرمة" },
  "f.quick": { en: "Quick Links", ar: "روابط سريعة" },
  "f.services": { en: "Services", ar: "الخدمات" },
  "f.contact": { en: "Contact", ar: "تواصل" },
  "f.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
} satisfies Dict;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
  dir: "ltr" | "rtl";
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || "en";
    setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key][lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  return <LangContext.Provider value={{ lang, setLang, t, dir }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
