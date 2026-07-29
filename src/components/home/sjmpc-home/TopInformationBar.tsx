import { Facebook } from "lucide-react";

const phone = "+63 917-308-1505";
const email = "sanjosempc@yahoo.com";
const socialUrl = "https://facebook.com/sanjoseempc";

export default function TopInformationBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#006B3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-11 flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3 font-semibold tracking-wide">
            <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.45)]" aria-hidden="true" />
            <span className="truncate">Serving Antiqueños since 1964</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <a
              href={`tel:${phone.replace(/\s+/g, "").replace(/\+/g, "")}`}
              className="inline-flex items-center gap-1 sm:gap-2 hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#006B3F] rounded text-xs sm:text-sm"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="hidden sm:inline-flex text-white/90 hover:text-[#D4AF37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#006B3F] rounded"
            >
              {email}
            </a>
          </div>

          <a
            href={socialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#006B3F]"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

