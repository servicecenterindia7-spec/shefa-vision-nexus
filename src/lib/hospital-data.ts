export const HOSPITAL = {
  nameEn: "Shefa Hospital",
  nameAr: "مستشفى الشفاء",
  phone: "+966125333555",
  phoneDisplay: "+966 012 533 3555",
  whatsapp: "966125333555",
  addressEn: "Shara Mansur, Makkah 24232, Saudi Arabia",
  addressAr: "شارع المنصور، مكة المكرمة 24232، المملكة العربية السعودية",
  reviews: 761,
  mapsEmbed:
    "https://www.google.com/maps?q=Shara+Mansur+Makkah+24232+Saudi+Arabia&output=embed",
};

export const telHref = `tel:${HOSPITAL.phone}`;
export const waHref = `https://wa.me/${HOSPITAL.whatsapp}?text=${encodeURIComponent(
  "Hello Shefa Hospital, I would like to book an appointment.",
)}`;

export type Department = {
  id: string;
  icon: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  image: string;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

export const DEPARTMENTS: Department[] = [
  { id: "emergency", icon: "Ambulance", nameEn: "Emergency Department", nameAr: "قسم الطوارئ", descEn: "Rapid response trauma and critical care, 24/7.", descAr: "استجابة سريعة للحالات الحرجة على مدار الساعة.", image: img("photo-1587351021759-3e566b6af7cc") },
  { id: "icu", icon: "Activity", nameEn: "Intensive Care Unit", nameAr: "العناية المركزة", descEn: "Advanced monitoring and life-saving interventions.", descAr: "مراقبة متقدمة وتدخلات لإنقاذ الحياة.", image: img("photo-1631815588090-d4bfec5b1ccb") },
  { id: "obgyn", icon: "Baby", nameEn: "Obstetrics & Gynecology", nameAr: "النساء والولادة", descEn: "Compassionate maternal and women's health.", descAr: "رعاية رحيمة لصحة المرأة والأمومة.", image: img("photo-1519494026892-80bbd2d6fd0d") },
  { id: "cardiology", icon: "HeartPulse", nameEn: "Cardiology", nameAr: "أمراض القلب", descEn: "Heart diagnostics, interventions and prevention.", descAr: "تشخيص القلب والتدخلات والوقاية.", image: img("photo-1628348068343-c6a848d2b6dd") },
  { id: "urology", icon: "Droplets", nameEn: "Urology", nameAr: "المسالك البولية", descEn: "Comprehensive urinary and reproductive care.", descAr: "رعاية شاملة للمسالك والتناسلية.", image: img("photo-1530026405186-ed1f139313f8") },
  { id: "dental", icon: "Smile", nameEn: "Dental Clinic", nameAr: "عيادة الأسنان", descEn: "Modern dentistry from prevention to cosmetics.", descAr: "طب أسنان حديث من الوقاية إلى التجميل.", image: img("photo-1606811971618-4486d14f3f99") },
  { id: "internal", icon: "Stethoscope", nameEn: "Internal Medicine", nameAr: "الباطنة", descEn: "Adult diagnosis and chronic disease management.", descAr: "تشخيص البالغين وإدارة الأمراض المزمنة.", image: img("photo-1666214280557-f1b5022eb634") },
  { id: "ent", icon: "Ear", nameEn: "ENT", nameAr: "الأنف والأذن والحنجرة", descEn: "Ear, nose, throat and sleep disorders.", descAr: "علاج الأذن والأنف والحنجرة واضطرابات النوم.", image: img("photo-1588776814546-1ffcf47267a5") },
  { id: "ortho", icon: "Bone", nameEn: "Orthopedics", nameAr: "العظام", descEn: "Joint, spine and sports injury specialists.", descAr: "متخصصون في المفاصل والعمود الفقري وإصابات الرياضة.", image: img("photo-1530497610245-94d3c16cda28") },
  { id: "surgery", icon: "Scissors", nameEn: "General Surgery", nameAr: "الجراحة العامة", descEn: "Minimally invasive and complex procedures.", descAr: "إجراءات بالحد الأدنى من التدخل وأخرى معقدة.", image: img("photo-1551601651-2a8555f1a136") },
  { id: "pediatrics", icon: "Baby", nameEn: "Pediatrics", nameAr: "طب الأطفال", descEn: "Child-friendly care from newborn to teen.", descAr: "رعاية ودودة من الولادة إلى المراهقة.", image: img("photo-1632053002430-91d7ee19a4f1") },
  { id: "lab", icon: "FlaskConical", nameEn: "Laboratory", nameAr: "المختبر", descEn: "Accurate diagnostics with fast turnaround.", descAr: "تشخيص دقيق ونتائج سريعة.", image: img("photo-1582719471384-894fbb16e074") },
  { id: "rad", icon: "ScanLine", nameEn: "Radiology Center", nameAr: "مركز الأشعة", descEn: "MRI, CT, ultrasound and digital X-ray.", descAr: "رنين مغناطيسي، أشعة مقطعية، موجات وأشعة رقمية.", image: img("photo-1516069677018-378515003435") },
  { id: "screening", icon: "ClipboardCheck", nameEn: "Pre-Employment Screening", nameAr: "الفحص الطبي للتوظيف", descEn: "Certified medical screening for employers.", descAr: "فحوصات طبية معتمدة لأصحاب العمل.", image: img("photo-1576091160550-2173dba999ef") },
];

import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

export const DOCTORS = [
  { id: "1", img: d1, nameEn: "Dr. Abdulrahman Al-Harbi", nameAr: "د. عبدالرحمن الحربي", specEn: "Cardiology Consultant", specAr: "استشاري أمراض القلب", years: 18, langs: "Arabic, English" },
  { id: "2", img: d2, nameEn: "Dr. Layla Al-Qahtani", nameAr: "د. ليلى القحطاني", specEn: "Obstetrics & Gynecology", specAr: "النساء والولادة", years: 14, langs: "Arabic, English" },
  { id: "3", img: d3, nameEn: "Dr. Faisal Al-Otaibi", nameAr: "د. فيصل العتيبي", specEn: "General Surgery Consultant", specAr: "استشاري جراحة عامة", years: 22, langs: "Arabic, English, French" },
];
