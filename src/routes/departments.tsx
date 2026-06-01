import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { DEPARTMENTS } from "@/lib/hospital-data";
import { useLang } from "@/lib/i18n";
import {
  Ambulance, Activity, Baby, HeartPulse, Droplets, Smile, Stethoscope, Ear,
  Bone, Scissors, FlaskConical, ScanLine, ClipboardCheck, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Medical Departments — Shefa Hospital Makkah" },
      { name: "description", content: "Explore 14+ specialized departments at Shefa Hospital: Emergency, ICU, Cardiology, OB/GYN, Pediatrics, Radiology and more." },
      { property: "og:title", content: "Medical Departments — Shefa Hospital" },
      { property: "og:url", content: "/departments" },
    ],
    links: [{ rel: "canonical", href: "/departments" }],
  }),
  component: DeptPage,
});

const ICONS: Record<string, typeof Activity> = {
  Ambulance, Activity, Baby, HeartPulse, Droplets, Smile, Stethoscope, Ear,
  Bone, Scissors, FlaskConical, ScanLine, ClipboardCheck,
};

function DeptPage() {
  const { lang } = useLang();
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20 hex-pattern">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">{lang === "ar" ? "الأقسام الطبية" : "Medical Departments"}</h1>
          <p className="mt-4 max-w-2xl opacity-90">{lang === "ar" ? "فرق متخصصة وتقنية حديثة في جميع المجالات الطبية." : "Specialized teams and modern technology across every major area of medicine."}</p>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((d) => {
            const Icon = ICONS[d.icon] ?? Stethoscope;
            return (
              <div key={d.id} className="group bg-card rounded-2xl p-7 shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-all border border-border/50">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary-gradient group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-bold text-xl text-foreground">{lang === "ar" ? d.nameAr : d.nameEn}</h3>
                <p className="mt-2 text-muted-foreground">{lang === "ar" ? d.descAr : d.descEn}</p>
                <Link to="/contact" className="mt-5 inline-block">
                  <Button variant="outline" className="border-primary/30">{lang === "ar" ? "احجز موعد" : "Book Appointment"} <ChevronRight className="ms-1 h-4 w-4" /></Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
