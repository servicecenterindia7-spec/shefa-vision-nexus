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
              <div key={d.id} className="group bg-card rounded-2xl overflow-hidden shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-all border border-border/50 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={d.image} alt={lang === "ar" ? d.nameAr : d.nameEn} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 h-12 w-12 rounded-xl bg-white/95 text-primary flex items-center justify-center shadow-card-elegant">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-foreground">{lang === "ar" ? d.nameAr : d.nameEn}</h3>
                  <p className="mt-2 text-muted-foreground flex-1">{lang === "ar" ? d.descAr : d.descEn}</p>
                  <Link to="/contact" className="mt-5 inline-block">
                    <Button variant="outline" className="border-primary/30">{lang === "ar" ? "احجز موعد" : "Book Appointment"} <ChevronRight className="ms-1 h-4 w-4" /></Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
