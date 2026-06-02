import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import { DEPARTMENTS, DOCTORS, HOSPITAL, telHref, waHref } from "@/lib/hospital-data";
import { Button } from "@/components/ui/button";
import {
  Ambulance, Activity, Baby, HeartPulse, Droplets, Smile, Stethoscope, Ear, Bone,
  Scissors, FlaskConical, ScanLine, ClipboardCheck, Phone, MessageCircle, Star,
  ShieldCheck, Users, Award, Clock, Sparkles, ChevronRight, MapPin, Mail,
} from "lucide-react";
import hero from "@/assets/hero-hospital.jpg";
import interior from "@/assets/hospital-interior.jpg";
import emergencyImg from "@/assets/emergency.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shefa Hospital — Trusted Healthcare in Makkah | CBAHI Accredited" },
      { name: "description", content: "Premium multispecialty hospital in Al Mansur, Makkah. 24/7 emergency, ICU, expert specialists, lab and radiology. CBAHI accredited." },
      { property: "og:title", content: "Shefa Hospital — Trusted Healthcare in Makkah" },
      { property: "og:description", content: "24/7 emergency care, expert specialists, modern facilities — Shefa Hospital in Makkah." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const ICONS: Record<string, typeof Activity> = {
  Ambulance, Activity, Baby, HeartPulse, Droplets, Smile, Stethoscope, Ear,
  Bone, Scissors, FlaskConical, ScanLine, ClipboardCheck,
};

function Index() {
  const { t, lang } = useLang();

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary-gradient">
        <div className="absolute inset-0">
          <img src={hero} alt="Shefa Hospital building" className="h-full w-full object-cover opacity-30" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary-gradient opacity-80" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-gold ring-1 ring-gold/40">
              <Award className="h-3.5 w-3.5" /> {t("hero.tag")}
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl">{t("hero.sub")}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-gold-gradient text-gold-foreground hover:opacity-90 shadow-gold">
                  {t("hero.book")} <ChevronRight className="ms-1 h-4 w-4" />
                </Button>
              </Link>
              <a href={telHref}>
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20">
                  <Phone className="me-2 h-4 w-4" /> {t("hero.call")}
                </Button>
              </a>
              <a href={waHref} target="_blank" rel="noopener">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20">
                  <MessageCircle className="me-2 h-4 w-4" /> WhatsApp
                </Button>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
              {[
                { label: t("hero.badge.cbahi"), icon: ShieldCheck },
                { label: t("hero.badge.247"), icon: Clock },
                { label: t("hero.badge.amb"), icon: Ambulance },
                { label: t("hero.badge.spec"), icon: Stethoscope },
              ].map((b) => (
                <div key={b.label} className="glass-card rounded-xl px-3 py-2.5 flex items-center gap-2 text-sm">
                  <b.icon className="h-4 w-4 text-gold" />
                  <span className="text-white/95">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-soft-gradient py-14">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: `${HOSPITAL.reviews}+`, l: t("stats.reviews"), i: Star },
            { v: "14+", l: t("stats.specialties"), i: Stethoscope },
            { v: "24/7", l: t("stats.emergency"), i: Ambulance },
            { v: "20+", l: t("stats.experience"), i: Award },
          ].map((s) => (
            <div key={s.l} className="bg-card rounded-2xl shadow-card-elegant p-6 text-center">
              <s.i className="mx-auto h-7 w-7 text-gold" />
              <div className="mt-3 text-3xl md:text-4xl font-bold text-primary font-display">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 hex-pattern opacity-50 rounded-3xl" />
            <img src={interior} alt="Hospital interior" loading="lazy" width={1280} height={800}
              className="relative rounded-3xl shadow-elegant w-full object-cover" />
            <div className="absolute -bottom-6 -end-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-elegant hidden md:block">
              <div className="text-3xl font-bold font-display">CBAHI</div>
              <div className="text-xs opacity-80">{lang === "ar" ? "اعتماد" : "Accredited"}</div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("about.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("about.title")}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{t("about.p1")}</p>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.p2")}</p>
            <Link to="/about" className="inline-block mt-6">
              <Button className="bg-primary-gradient shadow-elegant">{t("about.cta")} <ChevronRight className="ms-1 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="py-20 md:py-28 bg-secondary/40 hex-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("dep.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("dep.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("dep.sub")}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DEPARTMENTS.map((d) => {
              const Icon = ICONS[d.icon] ?? Stethoscope;
              return (
                <div key={d.id} className="group bg-card rounded-2xl p-6 shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-all border border-border/50">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-lg text-foreground">{lang === "ar" ? d.nameAr : d.nameEn}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{lang === "ar" ? d.descAr : d.descEn}</p>
                  <Link to="/departments" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-gold">
                    {t("dep.learn")} <ChevronRight className="ms-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("why.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("why.title")}</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: Clock, en: "24/7 Emergency", ar: "طوارئ ٢٤/٧" },
              { i: Users, en: "Qualified Specialists", ar: "استشاريون مؤهلون" },
              { i: ScanLine, en: "Advanced Diagnostics", ar: "تشخيص متقدم" },
              { i: FlaskConical, en: "Modern Laboratory", ar: "مختبر حديث" },
              { i: Ambulance, en: "Ambulance Support", ar: "دعم الإسعاف" },
              { i: HeartPulse, en: "Patient-Centered Care", ar: "رعاية متمحورة حول المريض" },
              { i: ShieldCheck, en: "CBAHI Standards", ar: "معايير CBAHI" },
              { i: Sparkles, en: "Modern Facilities", ar: "مرافق حديثة" },
            ].map((f) => (
              <div key={f.en} className="rounded-2xl p-6 bg-soft-gradient border border-border/60 hover:border-primary/30 transition-colors">
                <f.i className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold">{lang === "ar" ? f.ar : f.en}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("doc.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("doc.title")}</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((d) => (
              <div key={d.id} className="bg-card rounded-3xl overflow-hidden shadow-card-elegant hover:shadow-elegant transition-shadow">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={d.img} alt={d.nameEn} loading="lazy" width={640} height={800}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
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
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-primary text-primary-foreground">
        <img src={emergencyImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" width={1280} height={800}/>
        <div className="absolute inset-0 bg-primary-gradient opacity-90" />
        <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              <Ambulance className="h-4 w-4" /> {lang === "ar" ? "طوارئ" : "Emergency"}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">{t("em.title")}</h2>
            <p className="mt-4 text-lg opacity-90">{t("em.sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref}>
                <Button size="lg" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground shadow-elegant">
                  <Phone className="me-2 h-5 w-5" /> {t("em.call")}
                </Button>
              </a>
              <a href={waHref} target="_blank" rel="noopener">
                <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                  <Ambulance className="me-2 h-5 w-5" /> {t("em.amb")}
                </Button>
              </a>
            </div>
          </div>
          <div className="text-center md:text-end">
            <div className="text-xs uppercase tracking-widest opacity-70">{lang === "ar" ? "اتصل الآن" : "Call Now"}</div>
            <a href={telHref} className="block mt-2 text-4xl md:text-6xl font-display font-bold text-gold hover:opacity-90" dir="ltr">
              {HOSPITAL.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* VISION 2030 */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("v.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("v.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("v.sub")}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: HeartPulse, en: "Healthcare Excellence", ar: "تميز صحي" },
              { i: Sparkles, en: "Innovation", ar: "ابتكار" },
              { i: ScanLine, en: "Digital Healthcare", ar: "رعاية رقمية" },
              { i: Users, en: "Community Wellness", ar: "صحة المجتمع" },
            ].map((v) => (
              <div key={v.en} className="text-center p-6 rounded-2xl bg-soft-gradient border border-border/60">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center">
                  <v.i className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold text-primary">{lang === "ar" ? v.ar : v.en}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("t.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("t.title")}</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { en: "Outstanding emergency response. The team was caring and incredibly professional from arrival.", ar: "استجابة طوارئ متميزة. كان الفريق رحيماً ومحترفاً منذ الوصول.", name: "Ahmed S." },
              { en: "Modern facilities and a doctor who really listened. My family's go-to hospital in Makkah.", ar: "مرافق حديثة وطبيب أصغى لي حقاً. مستشفى عائلتي في مكة.", name: "Fatima R." },
              { en: "Clean, efficient, and the staff speak both Arabic and English. Highly recommend.", ar: "نظيف وفعال، والطاقم يتحدث العربية والإنجليزية. أوصي به بشدة.", name: "Mohammed A." },
            ].map((r, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 shadow-card-elegant">
                <div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-foreground/90 italic">"{lang === "ar" ? r.ar : r.en}"</p>
                <div className="mt-5 font-semibold text-primary">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-gold">{t("c.kicker")}</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">{t("c.title")}</h2>
            <div className="mt-8 space-y-5 text-sm">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" /><div>{lang === "ar" ? HOSPITAL.addressAr : HOSPITAL.addressEn}</div></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" /><a href={telHref} className="hover:text-primary">{HOSPITAL.phoneDisplay}</a></div>
              <div className="flex gap-3"><Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" /> info@shefahospital.sa</div>
              <div className="flex gap-3"><Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" /> {t("c.hoursVal")}</div>
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
              <textarea rows={4} placeholder={t("c.msg")} className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
              <Button type="submit" size="lg" className="w-full bg-primary-gradient shadow-elegant">{t("c.send")}</Button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
