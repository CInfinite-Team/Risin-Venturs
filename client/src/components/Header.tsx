import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

const NavDropdown = ({ title, items, isPrimary }: { title: string, items: NavItem[], isPrimary?: boolean }) => {
  return (
    <div className="relative group py-4">
      <button className={`text-sm font-bold ${isPrimary ? 'text-[#8b68f6]' : 'text-[#2b204c]'} hover:text-[#8b68f6] transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer outline-none ${isPrimary ? 'after:content-[""] after:absolute after:bottom-3 after:left-0 after:w-full after:h-0.5 after:bg-[#8b68f6]' : ''}`}>
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-white border border-slate-100 shadow-xl p-4 min-w-[260px] flex flex-col gap-1 rounded-sm">
          {items.map((item) => (
            <div key={item.label} className="relative group/sub">
              {item.children ? (
                <div className="flex items-center justify-between w-full text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors px-2 py-2 cursor-pointer group-hover/sub:text-[#8b68f6]">
                  <span>{item.label}</span>
                  <ChevronRight size={14} className="text-slate-400 group-hover/sub:text-[#8b68f6]" />
                  
                  {/* Level 2 Dropdown */}
                  <div className="absolute left-full top-0 pl-2 opacity-0 translate-x-2 invisible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:visible transition-all duration-300 z-50">
                    <div className="bg-white border border-slate-100 shadow-xl p-4 min-w-[240px] flex flex-col gap-1 rounded-sm -mt-2">
                       {item.children.map((child) => (
                         <Link 
                           key={child.label} 
                           href={child.href}
                           className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors whitespace-nowrap px-2 py-2 block"
                         >
                           {child.label}
                         </Link>
                       ))}
                    </div>
                  </div>
                </div>
              ) : (
                item.isExternal ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors whitespace-nowrap px-2 py-2 block"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors whitespace-nowrap px-2 py-2 block"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile Accordion Item
const MobileNavItem = ({ item, depth = 0, setIsMenuOpen }: { item: NavItem, depth?: number, setIsMenuOpen: (val: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="flex flex-col">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between text-lg font-bold text-[#2b204c] capitalize py-2 ${depth > 0 ? 'text-base pl-4 text-slate-600' : ''}`}
        >
          {item.label}
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col gap-2 pl-4"
            >
              {item.children?.map(child => (
                <MobileNavItem key={child.label} item={child} depth={depth + 1} setIsMenuOpen={setIsMenuOpen} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    item.isExternal ? (
      <a 
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-lg font-bold text-[#2b204c] capitalize py-2 block ${depth > 0 ? 'text-base text-slate-600' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
      </a>
    ) : (
      <Link
        href={item.href}
        className={`text-lg font-bold text-[#2b204c] capitalize py-2 block ${depth > 0 ? 'text-base text-slate-600' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
      </Link>
    )
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

  const aboutItems: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Career", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "News & Insights", href: "/news" },
    { label: "Get in Touch", href: "/contact" }
  ];

  const programsItems: NavItem[] = [
    { label: "Innovation", href: "/venture-studio/innovation" },
    { label: "Incubation", href: "/venture-studio/incubation" },
    { label: "Acceleration", href: "/venture-studio/acceleration" },
    { 
      label: "Our Programs", 
      href: "#",
      children: [
        { label: "AIX Summit & Hackathon", href: "/programs/aix" },
        { label: "Sustainova Challenge", href: "/programs/sustainova" },
        { label: "Entrepreneurship Awards", href: "/programs/entrepreneurship-awards" },
        { label: "Go-To-Market (GTM)", href: "/programs/gtm" }
      ]
    }
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
          <Link href="/venture-studio/venture-builder" className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] transition-colors uppercase tracking-widest cursor-pointer outline-none">
            Venture Builder
          </Link>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col p-8 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {/* About Section */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest border-b border-slate-100 pb-2">
                  About
                </h3>
                <div className="flex flex-col">
                   {aboutItems.map(item => (
                     <MobileNavItem key={item.label} item={item} setIsMenuOpen={setIsMenuOpen} />
                   ))}
                </div>
              </div>

              {/* Programs Section */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest border-b border-slate-100 pb-2">
                  Programs
                </h3>
                <div className="flex flex-col">
                   {programsItems.map(item => (
                     <MobileNavItem key={item.label} item={item} setIsMenuOpen={setIsMenuOpen} />
                   ))}
                </div>
              </div>

              {/* Venture Builder Link */}
              <div className="flex flex-col gap-2">
                <Link 
                  href="/venture-studio/venture-builder"
                  className="text-lg font-bold text-[#2b204c] uppercase tracking-widest py-2 border-b border-slate-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Venture Builder
                </Link>
              </div>

              <Link
                href="/build-with-us"
                className="bg-[#2b204c] text-white uppercase tracking-widest text-sm font-bold rounded-sm w-full h-14 mt-4 shadow-lg inline-flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Build With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
