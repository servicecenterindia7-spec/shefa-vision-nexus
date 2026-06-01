import { MessageCircle, Phone, AmbulanceIcon } from "lucide-react";
import { HOSPITAL, telHref, waHref } from "@/lib/hospital-data";
import { useLang } from "@/lib/i18n";

export function FloatingActions() {
  const { lang } = useLang();
  return (
    <div className="fixed bottom-5 end-5 z-40 flex flex-col gap-3">
      <a
        href={telHref}
        aria-label="Emergency call"
        className="group flex items-center gap-2 bg-emergency text-emergency-foreground rounded-full pl-4 pr-5 py-3 shadow-elegant hover:scale-105 transition-transform animate-float"
      >
        <AmbulanceIcon className="h-5 w-5" />
        <span className="text-sm font-bold hidden sm:inline">{lang === "ar" ? "طوارئ" : "Emergency"}</span>
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={telHref}
        aria-label={`Call ${HOSPITAL.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant hover:scale-110 transition-transform lg:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
