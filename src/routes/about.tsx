import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useLang } from "@/lib/i18n";
import interior from "@/assets/hospital-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shefa Hospital — Makkah's Trusted Multispecialty Hospital" },
      { name: "description", content: "Learn about Shefa Hospital in Makkah — CBAHI accredited multispecialty care, expert specialists, and patient-centered values." },
      { property: "og:title", content: "About Shefa Hospital" },
      { property: "og:description", content: "Our mission, values and commitment to healthcare excellence in Makkah." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useLang();
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground py-20 hex-pattern">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">{lang === "ar" ? "عن مستشفى الشفاء" : "About Shefa Hospital"}</h1>
          <p className="mt-4 max-w-2xl opacity-90">{lang === "ar" ? "إرث من الرعاية الرحيمة في قلب مكة المكرمة" : "A legacy of compassionate care in the heart of Makkah."}</p>
        </div>
      </section>
      <section className="py-20 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <img src={interior} alt="Hospital" loading="lazy" width={1280} height={800} className="rounded-3xl shadow-elegant" />
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <h2 className="text-3xl font-bold text-primary">{lang === "ar" ? "رسالتنا" : "Our Mission"}</h2>
          <p>{lang === "ar"
            ? "نقدم رعاية صحية شاملة عالية الجودة لمجتمع مكة المكرمة من خلال أحدث التقنيات الطبية وفريق متخصص ملتزم بالتميز."
            : "We deliver comprehensive, high-quality healthcare to the Makkah community through state-of-the-art technology and a specialist team committed to excellence."}</p>
          <h2 className="text-3xl font-bold text-primary mt-6">{lang === "ar" ? "قيمنا" : "Our Values"}</h2>
          <ul className="list-disc ps-6 space-y-2">
            <li>{lang === "ar" ? "تميز إكلينيكي" : "Clinical excellence"}</li>
            <li>{lang === "ar" ? "رعاية متمحورة حول المريض" : "Patient-centered care"}</li>
            <li>{lang === "ar" ? "ابتكار وتقنية حديثة" : "Innovation and technology"}</li>
            <li>{lang === "ar" ? "النزاهة والشفافية" : "Integrity and transparency"}</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
