import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Our Partners in Insurance — Shefa Hospital" },
      { name: "description", content: "Shefa Hospital partners with leading Saudi and global insurance providers to make quality healthcare accessible and seamless." },
      { property: "og:title", content: "Insurance Partners — Shefa Hospital" },
      { property: "og:description", content: "Approved insurance companies covered at Shefa Hospital in Makkah." },
    ],
    links: [{ rel: "canonical", href: "/insurance" }],
  }),
  component: InsurancePage,
});

type Insurer = { nameEn: string; nameAr: string; descEn: string; descAr: string };

const INSURERS: Insurer[] = [
  { nameEn: "Health Insurance Council", nameAr: "مجلس الضمان الصحي", descEn: "The regulatory body that ensures you and your family receive safe and reliable healthcare. The Council regulates health insurance and oversees companies and hospitals to safeguard quality and fairness.", descAr: "الجهة التنظيمية التي تضمن حصولك وعائلتك على رعاية صحية آمنة وموثوقة، وتشرف على شركات التأمين والمستشفيات لضمان جودة الخدمات وعدالتها." },
  { nameEn: "Social Insurance (GOSI)", nameAr: "التأمينات الاجتماعية", descEn: "Insurance protection provided for employees and retirees across the Kingdom.", descAr: "حماية تأمينية للموظفين والمتقاعدين في المملكة." },
  { nameEn: "Bupa Arabia", nameAr: "بوبا العربية", descEn: "A leading company specialized in health insurance with a wide provider network.", descAr: "شركة رائدة متخصصة في التأمين الصحي بشبكة واسعة." },
  { nameEn: "Total Care", nameAr: "توتال كير", descEn: "A company specialized in managing health insurance services.", descAr: "شركة متخصصة في إدارة خدمات التأمين الصحي." },
  { nameEn: "Al Rajhi Takaful", nameAr: "الراجحي تكافل", descEn: "Provides cooperative insurance solutions that include health coverage.", descAr: "يقدم حلول تأمين تعاوني تشمل التأمين الصحي." },
  { nameEn: "Tawuniya Insurance", nameAr: "التعاونية للتأمين", descEn: "One of the oldest and largest health and general insurance companies.", descAr: "من أقدم وأكبر شركات التأمين الصحي والعام." },
  { nameEn: "ACIG", nameAr: "أسيج", descEn: "Insurance products include health and vehicle insurance.", descAr: "منتجات تأمين تشمل التأمين الصحي وتأمين المركبات." },
  { nameEn: "Aletihad Insurance", nameAr: "الاتحاد للتأمين", descEn: "Offers a variety of health and commercial insurance services.", descAr: "يقدم مجموعة متنوعة من خدمات التأمين الصحي والتجاري." },
  { nameEn: "The Arab Shield (Al Dara' Al Arabi)", nameAr: "الدرع العربي", descEn: "A Saudi company providing health insurance and general insurance.", descAr: "شركة سعودية تقدم التأمين الصحي والتأمين العام." },
  { nameEn: "Alsagr Insurance", nameAr: "الصقر للتأمين", descEn: "Offers a variety of insurance packages for individuals and companies.", descAr: "يقدم باقات تأمين متنوعة للأفراد والشركات." },
  { nameEn: "Allianz Saudi Fransi", nameAr: "أليانز", descEn: "Branch of a global company providing health insurance in the Kingdom.", descAr: "فرع لشركة عالمية تقدم التأمين الصحي في المملكة." },
  { nameEn: "AMANA Insurance", nameAr: "أمانة للتأمين", descEn: "Provides accredited health and cooperative insurance products.", descAr: "يقدم منتجات تأمين صحي وتعاوني معتمدة." },
  { nameEn: "Brouj Insurance", nameAr: "بروج للتأمين", descEn: "Offers various health insurance and general insurance programs.", descAr: "يقدم برامج متنوعة للتأمين الصحي والتأمين العام." },
  { nameEn: "SAICO", nameAr: "سايكو", descEn: "Joint-stock company providing health insurance and various coverages.", descAr: "شركة مساهمة تقدم التأمين الصحي وتغطيات متنوعة." },
  { nameEn: "Saudi Enaya", nameAr: "العناية السعودية", descEn: "Specialized in providing medical insurance services.", descAr: "متخصصة في تقديم خدمات التأمين الطبي." },
  { nameEn: "GlobeMed", nameAr: "غلوب ميد", descEn: "Manages medical claims and provides healthcare solutions.", descAr: "تدير المطالبات الطبية وتقدم حلول الرعاية الصحية." },
  { nameEn: "Malath Insurance", nameAr: "ملاذ للتأمين", descEn: "Provides health insurance, vehicle insurance, and other types of insurance.", descAr: "يقدم تأمين صحي وتأمين مركبات وأنواع أخرى." },
  { nameEn: "MedGulf", nameAr: "ميدغلف", descEn: "One of the largest health insurance companies in the Kingdom with extensive experience.", descAr: "من أكبر شركات التأمين الصحي في المملكة بخبرة واسعة." },
  { nameEn: "NextCare", nameAr: "نكست كير", descEn: "Medical claims management company and health insurance services provider.", descAr: "شركة لإدارة المطالبات الطبية وخدمات التأمين الصحي." },
  { nameEn: "Walaa Cooperative Insurance", nameAr: "ولاء للتأمين التعاوني", descEn: "Cooperative insurance solutions including comprehensive health coverage.", descAr: "حلول تأمين تعاوني تشمل تغطية صحية شاملة." },
];

function InsurancePage() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20 md:py-28 hex-pattern">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-gold-foreground">
            <ShieldCheck className="h-3.5 w-3.5" /> {isAr ? "تأمين صحي معتمد" : "Approved Health Coverage"}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold">
            {isAr ? "شركاؤنا في خدمات التأمين" : "Our Partners in Insurance Services"}
          </h1>
          <p className="mt-5 text-lg opacity-90">
            {isAr
              ? "يعمل مستشفى الشفاء مع نخبة من شركات التأمين الصحي الرائدة لتقديم رعاية سلسة وموثوقة لمرضانا."
              : "Shefa Hospital partners with leading insurance providers to make quality care seamless and accessible for our patients."}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSURERS.map((i) => (
              <article
                key={i.nameEn}
                className="bg-card rounded-2xl p-6 shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-all border border-border/60"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-primary leading-tight">
                      {isAr ? i.nameAr : i.nameEn}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5" dir={isAr ? "ltr" : "rtl"}>
                      {isAr ? i.nameEn : i.nameAr}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {isAr ? i.descAr : i.descEn}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            {isAr
              ? "للاستفسار عن قبول بطاقة التأمين الخاصة بك أو الحصول على موافقات مسبقة، يرجى التواصل مع قسم التأمين لدينا."
              : "To confirm acceptance of your insurance card or arrange pre-approvals, please contact our insurance desk."}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
