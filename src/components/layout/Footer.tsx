import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandFacebookFilled,
  IconBrandYoutubeFilled,
  IconBrandX,
  IconMail,
  IconPhone
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-0 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Card Wrapper with absolute plane */}
        <div className="relative w-full pt-10">

          {/* Animated Airplane flying on the top border of the card */}
          <div className="absolute z-20 pointer-events-none overflow-visible"
            style={{
              top: '40px', // sits exactly on the card top border
              left: '50%',
              width: '100vw',
              marginLeft: '-50vw', // full-bleed: span the whole viewport so the plane wraps fully off-screen
            }}>
            <style>{`
              @keyframes fly-plane {
                0% {
                  transform: translate(-100%, -72%);
                }
                100% {
                  transform: translate(100vw, -72%);
                }
              }
            `}</style>
            <div className="absolute left-0 z-20 flex justify-center items-center"
              style={{
                animation: 'fly-plane 16s linear infinite',
              }}>
              <img
                src="/assets/images/Plane PNG.png"
                alt="Airplane"
                className="h-[120px] md:h-[155px] w-auto select-none"
              />
            </div>
          </div>

          {/* Main Card Wrapper */}
          <div className="relative w-full border border-[#e8dfff] bg-gradient-to-b from-[#FAF6FF] to-[#F2E8FF] rounded-[40px] px-6 md:px-12 lg:px-16 py-12 md:py-16 pb-28 overflow-hidden shadow-[0_8px_32px_rgba(110,0,224,0.04)]">

            {/* Absolute Backgrounds */}

            {/* Dotted World Map Background */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.06] pointer-events-none z-0"
              style={{ backgroundImage: "url('/assets/images/Map.png')" }}
            />

            {/* Skyline Silhouette bottom-left */}
            <img
              src="/assets/images/All Components.png"
              alt="Skyline Silhouette"
              className="absolute bottom-0 left-0 h-[100px] md:h-[130px] lg:h-[160px] w-auto object-contain object-left-bottom pointer-events-none z-0 select-none opacity-80 mix-blend-multiply"
            />

            {/* Grid Layout inside container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 text-[#2b0e63]">

              {/* Column 1 (Brand info & Social & Contact) */}
              <div className="lg:col-span-4 flex flex-col gap-6">

                {/* Logo Section */}
                <div>
                  <img
                    src="/assets/images/header-logo.png"
                    alt="Student's Choice"
                    className="h-20 w-auto object-contain"
                  />
                </div>

                {/* Tagline / Description */}
                <p className="text-[14px] text-[#6b5b95] leading-relaxed max-w-[340px]">
                  Your trusted partner for studying abroad. Students Choice helps students explore top universities, secure education funding, navigate visa processes, and confidently begin their international education journey with expert guidance at every step.
                </p>

                {/* Socials */}
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-[14px] text-[#2b0e63]">Follow us on social media</span>
                  <div className="flex items-center gap-2.5">
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all hover:scale-110 hover:shadow-md">
                      <IconBrandInstagram size={18} className="text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-[#007AB9] transition-all hover:scale-110 hover:shadow-md">
                      <IconBrandLinkedinFilled size={16} className="text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0866FF] transition-all hover:scale-110 hover:shadow-md">
                      <IconBrandFacebookFilled size={18} className="text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FF0000] transition-all hover:scale-110 hover:shadow-md">
                      <IconBrandYoutubeFilled size={18} className="text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-black transition-all hover:scale-110 hover:shadow-md">
                      <IconBrandX size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col gap-3 mt-2">
                  <span className="font-bold text-[15px] text-[#2b0e63]">Contact Us</span>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:info@studentschoice.in" className="flex items-center gap-3 text-[#2b0e63] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">
                      <IconMail size={20} className="text-[#2b0e63]" />
                      <span className="font-medium">info@studentschoice.in</span>
                    </a>
                    <a href="tel:+919801821680" className="flex items-center gap-3 text-[#2b0e63] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">
                      <IconPhone size={20} className="text-[#2b0e63]" />
                      <span className="font-bold">+91 98018 21680</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Column 2 (Company Links) */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <h3 className="font-bold text-[16px] text-[#2b0e63]">Company</h3>
                <div className="flex flex-col gap-2.5">
                  <Link href="/about-us" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">About Us</Link>
                  <Link href="/contact-us" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Contact Us</Link>
                  <Link href="/partner" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Become a Partner</Link>
                  <Link href="/faqs" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">FAQs</Link>
                  <Link href="/media" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Media</Link>
                  <Link href="/team" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Our Team</Link>
                  <Link href="/terms" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Terms & Conditions</Link>
                  <Link href="/privacy" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Privacy Policy</Link>
                </div>
              </div>

              {/* Column 3 (Study Abroad Links) */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <h3 className="font-bold text-[16px] text-[#2b0e63]">Study Abroad</h3>
                <div className="flex flex-col gap-2.5">
                  <Link href="/study-abroad/usa" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in USA</Link>
                  <Link href="/study-abroad/uk" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in UK</Link>
                  <Link href="/study-abroad/canada" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Canada</Link>
                  <Link href="/study-abroad/australia" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Australia</Link>
                  <Link href="/study-abroad/germany" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Germany</Link>
                  <Link href="/study-abroad/france" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in France</Link>
                  <Link href="/study-abroad/ireland" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Ireland</Link>
                  <Link href="/study-abroad/italy" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Italy</Link>
                  <Link href="/study-abroad/spain" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Spain</Link>
                  <Link href="/study-abroad/switzerland" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in Switzerland</Link>
                  <Link href="/study-abroad/uae" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in UAE</Link>
                  <Link href="/study-abroad/new-zealand" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Study in New Zealand</Link>
                </div>
              </div>

              {/* Column 4 (Education Loan Links) */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <h3 className="font-bold text-[16px] text-[#2b0e63]">Education Loan</h3>
                <div className="flex flex-col gap-2.5">
                  <Link href="/loans/icici" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Icici Education Loan</Link>
                  <Link href="/loans/axis" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Axis Education Loan</Link>
                  <Link href="/loans/credila" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Credila Education Loan</Link>
                  <Link href="/loans/avanse" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Avanse Education Loan</Link>
                  <Link href="/loans/incred" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Incred Education Loan</Link>
                  <Link href="/loans/auxilo" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Auxilo Education Loan</Link>
                  <Link href="/loans/tata" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Tata Education Loan</Link>
                  <Link href="/loans/poonawalla" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Poonawalla Education Loan</Link>
                  <Link href="/loans/avanse-global" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Avanse Global Education Loan</Link>
                  <Link href="/loans/idfc" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">IDFC Education Loan</Link>
                  <Link href="/loans/prodigy" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Prodigy Education Loan</Link>
                  <Link href="/loans/union" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Union Education Loan</Link>
                  <Link href="/loans/pnb" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">PNB Education Loan</Link>
                  <Link href="/loans/yes" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">YES Education Loan</Link>
                  <Link href="/loans/edgro" className="text-[#554a70] hover:text-[#6E00E0] transition-colors text-[14px] w-fit">Edgro Education Loan</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );}
