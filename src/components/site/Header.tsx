import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { HOSPITAL, telHref } from "@/lib/hospital-data";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const NAV: Array<{ to: string; key: Parameters<ReturnType<typeof useLang>["t"]>[0] }> = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/departments", key: "nav.departments" },
  { to: "/doctors", key: "nav.doctors" },
  { to: "/emergency", key: "nav.emergency" },
  { to: "/contact", key: "nav.contact" },
];

export function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full text-primary-foreground bg-primary-gradient transition-all duration-300 ${
        scrolled ? "shadow-elegant" : ""
      }`}
    >
      <div className="hidden md:flex items-center justify-between border-b border-white/10 px-6 py-2 text-xs text-primary-foreground/80">
        <span>{lang === "ar" ? HOSPITAL.addressAr : HOSPITAL.addressEn}</span>
        <a href={telHref} className="flex items-center gap-2 hover:text-gold transition-colors">
          <Phone className="h-3.5 w-3.5" /> {HOSPITAL.phoneDisplay}
        </a>
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shefa Hospital" className="h-12 w-12 object-contain bg-white rounded-lg p-1" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-white">Shefa Hospital</div>
            <div className="text-xs text-primary-foreground/70" dir="rtl">مستشفى الشفاء</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/85 hover:text-gold transition-colors rounded-md"
              activeProps={{ className: "text-gold font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1.5 rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-white/10 transition-colors"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {lang === "en" ? "العربية" : "English"}
          </button>
          <Link to="/contact" className="hidden md:block">
            <Button variant="default" className="bg-gold-gradient text-gold-foreground hover:opacity-90 shadow-gold">
              {t("nav.book")}
            </Button>
          </Link>
          <button className="lg:hidden p-2 text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary/95 backdrop-blur-xl">
          <nav className="container mx-auto flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-primary-foreground border-b border-white/10 last:border-0"
              >
                {t(n.key)}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3">
              <Button className="w-full bg-gold-gradient text-gold-foreground">{t("nav.book")}</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
