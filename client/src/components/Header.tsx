import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const NavDropdown = ({ title, items, isPrimary }: { title: string, items: { label: string, href: string, isExternal?: boolean }[], isPrimary?: boolean }) => {
  return (
    <div className="relative group py-4">
      <button className={`text-sm font-bold ${isPrimary ? 'text-[#8b68f6]' : 'text-[#2b204c]'} hover:text-[#8b68f6] transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer outline-none ${isPrimary ? 'after:content-[""] after:absolute after:bottom-3 after:left-0 after:w-full after:h-0.5 after:bg-[#8b68f6]' : ''}`}>
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-white border border-slate-100 shadow-xl p-4 min-w-[240px] flex flex-col gap-3 rounded-sm">
          {items.map((item) => (
            item.isExternal ? (
              <a 
                key={item.label} 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors whitespace-nowrap px-2 py-1.5"
              >
                {item.label}
              </a>
            ) : (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors whitespace-nowrap px-2 py-1.5"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutItems = [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Career", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "News & Insights", href: "/news" },
    { label: "Get in Touch", href: "/contact" }
  ];

  const programsItems = [
    { label: "AIX Summit & Hackathon", href: "/programs/aix" },
    { label: "Sustainova Challenge", href: "/programs/sustainova" },
    { label: "Entrepreneurship Awards", href: "/programs/entrepreneurship-awards" },
    { label: "Go-To-Market (GTM)", href: "/programs/gtm" }
  ];

  const ventureStudioItems = [
    { label: "Build With Us", href: "/build-with-us" },
    { label: "Innovation", href: "/#philosophy" },
    { label: "Incubation", href: "/#philosophy" },
    { label: "Acceleration", href: "/#programs" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 h-20 md:h-24 flex items-center ${isScrolled ? "bg-white shadow-md border-b border-slate-100" : "bg-white border-b border-slate-50"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-[110]">
          <img 
            src="/attached_assets/RISIN_LOGO_1767787710766.png" 
            alt="Risin Ventures Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavDropdown title="About" items={aboutItems} />
          <NavDropdown title="Programs" isPrimary items={programsItems} />
          <NavDropdown title="Venture Studio" items={ventureStudioItems} />
          <Link href="/build-with-us" className="bg-[#2b204c] text-white hover:bg-[#8b68f6] transition-all uppercase tracking-widest text-xs font-bold rounded-sm px-6 h-12 border-0 shadow-lg inline-flex items-center justify-center">
            Build With Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#2b204c] z-[110]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col p-8 pt-24 overflow-y-auto"
        >
          <div className="flex flex-col gap-8">
            {[
              { title: "About", items: aboutItems },
              { title: "Programs", items: programsItems },
              { title: "Venture Studio", items: ventureStudioItems }
            ].map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest border-b border-slate-100 pb-2">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    item.isExternal ? (
                      <a 
                        key={item.label} 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-[#2b204c] capitalize"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-lg font-bold text-[#2b204c] capitalize text-left"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/build-with-us"
              className="bg-[#2b204c] text-white uppercase tracking-widest text-sm font-bold rounded-sm w-full h-14 mt-4 shadow-lg inline-flex items-center justify-center"
            >
              Build With Us
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
