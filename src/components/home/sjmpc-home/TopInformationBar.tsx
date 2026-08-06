import { Facebook } from "lucide-react";

const phone = "+63 917-308-1505";
const email = "sanjosempc@yahoo.com";
const socialUrl = "https://facebook.com/sanjoseempc";

export default function TopInformationBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-brand-dark text-white" style={{ backgroundColor: "var(--brand-dark)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-11 flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3 font-semibold tracking-wide min-w-0">
            <span className="inline-flex w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-gold shadow-[0_0_18px_rgba(212,175,55,0.45)] flex-shrink-0" aria-hidden="true" />
            <span className="truncate text-[10px] sm:text-sm">Serving Antiqueños since 1964</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-6 flex-shrink-0">
            <a
              href={`tel:${phone.replace(/\s+/g, "").replace(/\+/g, "")}`}
              className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark rounded text-[10px] sm:text-sm whitespace-nowrap"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span className="hidden xs:inline">{phone}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="hidden sm:inline-flex text-white/90 hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark rounded text-[10px] sm:text-sm"
            >
              {email}
            </a>
          </div>

          <a
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark flex-shrink-0"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

