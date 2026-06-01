import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import { HOSPITAL, telHref, waHref } from "@/lib/hospital-data";
import { Ambulance, Phone, MessageCircle, Clock, ShieldCheck, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import emergencyImg from "@/assets/emergency.jpg";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Services — Shefa Hospital Makkah" },
      { name: "description", content: "24/7 emergency department and ambulance services at Shefa Hospital, Makkah. Call now for immediate medical attention." },
      { property: "og:title", content: "Emergency Services — Shefa Hospital" },
      { property: "og:url", content: "/emergency" },
    ],
    links: [{ rel: "canonical", href: "/emergency" }],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  const { lang } = useLang();
  return (
    <SiteLayout>
      <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
        <img src={emergencyImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" width={1280} height={800}/>
        <div className="absolute inset-0 bg-primary-gradient opacity-90" />
        <div className="relative container mx-auto px-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-xs font-bold uppercase">
            <Ambulance className="h-4 w-4" /> {lang === "ar" ? "طوارئ" : "Emergency"}
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold">{lang === "ar" ? "خدمات الطوارئ ٢٤/٧" : "24/7 Emergency Services"}</h1>
          <p className="mt-4 max-w-2xl opacity-90 text-lg">{lang === "ar" ? "قسم الطوارئ وأسطول الإسعاف جاهز على مدار الساعة." : "Our emergency team and ambulance fleet are ready around the clock."}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telHref}><Button size="lg" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground"><Phone className="me-2 h-5 w-5" /> {HOSPITAL.phoneDisplay}</Button></a>
            <a href={waHref} target="_blank" rel="noopener"><Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20"><MessageCircle className="me-2 h-5 w-5" /> WhatsApp</Button></a>
          </div>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {[
          { i: Clock, en: "Round-the-clock care", ar: "رعاية على مدار الساعة" },
          { i: Ambulance, en: "Own ambulance fleet", ar: "أسطول إسعاف خاص" },
          { i: ShieldCheck, en: "CBAHI accredited", ar: "اعتماد CBAHI" },
          { i: HeartPulse, en: "Cardiac & trauma ready", ar: "جاهز للقلب والصدمات" },
          { i: ShieldCheck, en: "Rapid triage protocols", ar: "بروتوكولات فرز سريعة" },
          { i: Clock, en: "On-site lab & radiology", ar: "مختبر وأشعة في الموقع" },
        ].map((f) => (
          <div key={f.en} className="rounded-2xl p-7 bg-soft-gradient border border-border/60">
            <f.i className="h-7 w-7 text-primary" />
            <h3 className="mt-4 font-semibold">{lang === "ar" ? f.ar : f.en}</h3>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
