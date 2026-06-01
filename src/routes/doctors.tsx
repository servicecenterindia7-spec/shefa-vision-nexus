import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { DOCTORS } from "@/lib/hospital-data";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Meet Our Doctors — Shefa Hospital Makkah" },
      { name: "description", content: "Expert specialists at Shefa Hospital. Browse our doctors by specialty, experience and languages." },
      { property: "og:title", content: "Our Doctors — Shefa Hospital" },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const { lang, t } = useLang();
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20 hex-pattern">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">{lang === "ar" ? "تعرف على أطبائنا" : "Meet Our Doctors"}</h1>
          <p className="mt-4 max-w-2xl opacity-90">{lang === "ar" ? "استشاريون خبراء يقدمون رعاية شخصية." : "Expert specialists delivering personal care."}</p>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((d) => (
            <div key={d.id} className="bg-card rounded-3xl overflow-hidden shadow-card-elegant hover:shadow-elegant transition-shadow">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img src={d.img} alt={d.nameEn} loading="lazy" width={640} height={800} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-primary">{lang === "ar" ? d.nameAr : d.nameEn}</h3>
                <p className="text-sm text-gold font-semibold mt-1">{lang === "ar" ? d.specAr : d.specEn}</p>
                <div className="mt-3 text-xs text-muted-foreground flex justify-between">
                  <span>{d.years}+ {t("doc.exp")}</span>
                  <span>{d.langs}</span>
                </div>
                <Link to="/contact" className="block mt-4">
                  <Button className="w-full bg-primary-gradient">{t("doc.book")}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
