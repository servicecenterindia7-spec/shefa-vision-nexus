import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import { HOSPITAL, telHref, waHref } from "@/lib/hospital-data";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Shefa Hospital Makkah" },
      { name: "description", content: "Book an appointment or contact Shefa Hospital in Shara Mansur, Makkah. Call, WhatsApp, or use our online form." },
      { property: "og:title", content: "Contact Shefa Hospital" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang, t } = useLang();
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20 hex-pattern">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">{lang === "ar" ? "تواصل معنا" : "Contact Us"}</h1>
          <p className="mt-4 max-w-2xl opacity-90">{lang === "ar" ? "نحن هنا من أجلك ٢٤/٧" : "We're here for you 24/7."}</p>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="space-y-5">
            <div className="flex gap-3"><MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" /><div>{lang === "ar" ? HOSPITAL.addressAr : HOSPITAL.addressEn}</div></div>
            <div className="flex gap-3"><Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" /><a href={telHref} className="hover:text-primary">{HOSPITAL.phoneDisplay}</a></div>
            <div className="flex gap-3"><Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" /> info@shefahospital.sa</div>
            <div className="flex gap-3"><Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" /> {t("c.hoursVal")}</div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={telHref}><Button className="bg-primary-gradient"><Phone className="me-2 h-4 w-4" /> {t("hero.call")}</Button></a>
            <a href={waHref} target="_blank" rel="noopener"><Button variant="outline"><MessageCircle className="me-2 h-4 w-4" /> WhatsApp</Button></a>
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-card-elegant aspect-video">
            <iframe src={HOSPITAL.mapsEmbed} title="Map" className="w-full h-full" loading="lazy" />
          </div>
        </div>
        <form className="bg-card rounded-3xl p-8 shadow-elegant border border-border/50" onSubmit={(e) => { e.preventDefault(); alert(lang === "ar" ? "شكراً، سنتواصل قريباً" : "Thank you, we'll be in touch"); }}>
          <h3 className="font-display text-2xl font-bold text-primary">{t("nav.book")}</h3>
          <div className="mt-6 space-y-4">
            <input required placeholder={t("c.name")} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            <input required type="tel" placeholder={t("c.phoneField")} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Email" className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            <textarea rows={5} placeholder={t("c.msg")} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
            <Button type="submit" size="lg" className="w-full bg-primary-gradient shadow-elegant">{t("c.send")}</Button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
