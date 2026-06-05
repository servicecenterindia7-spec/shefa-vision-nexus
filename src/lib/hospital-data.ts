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
};

export const DEPARTMENTS: Department[] = [
  { id: "emergency", icon: "Ambulance", nameEn: "Emergency Department", nameAr: "قسم الطوارئ", descEn: "Rapid response trauma and critical care, 24/7.", descAr: "استجابة سريعة للحالات الحرجة على مدار الساعة." },
  { id: "icu", icon: "Activity", nameEn: "Intensive Care Unit", nameAr: "العناية المركزة", descEn: "Advanced monitoring and life-saving interventions.", descAr: "مراقبة متقدمة وتدخلات لإنقاذ الحياة." },
  { id: "obgyn", icon: "Baby", nameEn: "Obstetrics & Gynecology", nameAr: "النساء والولادة", descEn: "Compassionate maternal and women's health.", descAr: "رعاية رحيمة لصحة المرأة والأمومة." },
  { id: "cardiology", icon: "HeartPulse", nameEn: "Cardiology", nameAr: "أمراض القلب", descEn: "Heart diagnostics, interventions and prevention.", descAr: "تشخيص القلب والتدخلات والوقاية." },
  { id: "urology", icon: "Droplets", nameEn: "Urology", nameAr: "المسالك البولية", descEn: "Comprehensive urinary and reproductive care.", descAr: "رعاية شاملة للمسالك والتناسلية." },
  { id: "dental", icon: "Smile", nameEn: "Dental Clinic", nameAr: "عيادة الأسنان", descEn: "Modern dentistry from prevention to cosmetics.", descAr: "طب أسنان حديث من الوقاية إلى التجميل." },
  { id: "internal", icon: "Stethoscope", nameEn: "Internal Medicine", nameAr: "الباطنة", descEn: "Adult diagnosis and chronic disease management.", descAr: "تشخيص البالغين وإدارة الأمراض المزمنة." },
  { id: "ent", icon: "Ear", nameEn: "ENT", nameAr: "الأنف والأذن والحنجرة", descEn: "Ear, nose, throat and sleep disorders.", descAr: "علاج الأذن والأنف والحنجرة واضطرابات النوم." },
  { id: "ortho", icon: "Bone", nameEn: "Orthopedics", nameAr: "العظام", descEn: "Joint, spine and sports injury specialists.", descAr: "متخصصون في المفاصل والعمود الفقري وإصابات الرياضة." },
  { id: "surgery", icon: "Scissors", nameEn: "General Surgery", nameAr: "الجراحة العامة", descEn: "Minimally invasive and complex procedures.", descAr: "إجراءات بالحد الأدنى من التدخل وأخرى معقدة." },
  { id: "pediatrics", icon: "Baby", nameEn: "Pediatrics", nameAr: "طب الأطفال", descEn: "Child-friendly care from newborn to teen.", descAr: "رعاية ودودة من الولادة إلى المراهقة." },
  { id: "lab", icon: "FlaskConical", nameEn: "Laboratory", nameAr: "المختبر", descEn: "Accurate diagnostics with fast turnaround.", descAr: "تشخيص دقيق ونتائج سريعة." },
  { id: "rad", icon: "ScanLine", nameEn: "Radiology Center", nameAr: "مركز الأشعة", descEn: "MRI, CT, ultrasound and digital X-ray.", descAr: "رنين مغناطيسي، أشعة مقطعية، موجات وأشعة رقمية." },
  { id: "screening", icon: "ClipboardCheck", nameEn: "Pre-Employment Screening", nameAr: "الفحص الطبي للتوظيف", descEn: "Certified medical screening for employers.", descAr: "فحوصات طبية معتمدة لأصحاب العمل." },
];

import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";

export const DOCTORS = [
  { id: "1", img: d1, nameEn: "Dr. Abdulrahman Al-Harbi", nameAr: "د. عبدالرحمن الحربي", specEn: "Cardiology Consultant", specAr: "استشاري أمراض القلب", years: 18, langs: "Arabic, English" },
  { id: "2", img: d2, nameEn: "Dr. Layla Al-Qahtani", nameAr: "د. ليلى القحطاني", specEn: "Obstetrics & Gynecology", specAr: "النساء والولادة", years: 14, langs: "Arabic, English" },
  { id: "3", img: d3, nameEn: "Dr. Faisal Al-Otaibi", nameAr: "د. فيصل العتيبي", specEn: "General Surgery Consultant", specAr: "استشاري جراحة عامة", years: 22, langs: "Arabic, English, French" },
];
