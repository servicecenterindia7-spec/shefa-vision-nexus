import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { HOSPITAL, telHref } from "@/lib/hospital-data";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="hex-pattern">
        <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shefa" className="h-12 w-12 bg-white rounded-lg p-1" width={48} height={48} />
              <div>
                <div className="font-display font-bold text-lg">Shefa Hospital</div>
                <div className="text-xs opacity-80" dir="rtl">مستشفى الشفاء</div>
              </div>
            </div>
            <p className="text-sm opacity-80">{t("f.tag")}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/20 text-gold px-3 py-1 text-xs font-semibold">
              CBAHI Accredited
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">{t("f.quick")}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
              <li><Link to="/departments" className="hover:text-gold">{t("nav.departments")}</Link></li>
              <li><Link to="/doctors" className="hover:text-gold">{t("nav.doctors")}</Link></li>
              <li><Link to="/emergency" className="hover:text-gold">{t("nav.emergency")}</Link></li>
              <li><Link to="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">{t("f.services")}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>{lang === "ar" ? "الطوارئ ٢٤/٧" : "24/7 Emergency"}</li>
              <li>{lang === "ar" ? "العناية المركزة" : "Intensive Care"}</li>
              <li>{lang === "ar" ? "المختبر" : "Laboratory"}</li>
              <li>{lang === "ar" ? "الأشعة" : "Radiology"}</li>
              <li>{lang === "ar" ? "الإسعاف" : "Ambulance"}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-gold">{t("f.contact")}</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> {lang === "ar" ? HOSPITAL.addressAr : HOSPITAL.addressEn}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> <a href={telHref}>{HOSPITAL.phoneDisplay}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> info@shefahospital.sa</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold" /> {t("c.hoursVal")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Shefa Hospital. {t("f.rights")}
      </div>
    </footer>
  );
}
