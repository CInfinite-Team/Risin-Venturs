import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, Menu, X, Rocket, Cpu, Network, Building2, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-concepts/option6-core.png";
import gccGtmLogo from "@assets/GCC_GTM_with_ascending_gradient_arrow_1771153840911.png";
import sustainovaLogo from "@assets/Sustain_Nova__1771154173735.png";
import aixLogo from "@assets/AIX_LOGO_1771154224181.png";
import qdbLogo from "@assets/image_1771155231377.png";
import qstpLogo from "@assets/image_1771155256224.png";
import mtcitLogo from "@assets/image_1771155334710.png";
import codeLogo from "@assets/image_1771155293821.png";
import quLogo from "@assets/image_1771155208266.png";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Helper Components for Navigation
const NavDropdown = ({ title, items, isPrimary }: { title: string, items: { label: string, href: string, isExternal?: boolean }[], isPrimary?: boolean }) => {
  return (
    <div className="relative group py-4">
      <button className={`text-sm font-bold ${isPrimary ? 'text-[#8b68f6]' : 'text-[#2b204c]'} hover:text-[#8b68f6] transition-colors uppercase tracking-widest flex items-center gap-1 cursor-pointer outline-none ${isPrimary ? 'after:content-[""] after:absolute after:bottom-3 after:left-0 after:w-full after:h-0.5 after:bg-[#8b68f6]' : ''}`}>
        {title} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-white border border-slate-100 shadow-xl p-4 min-w-[240px] flex flex-col gap-3 rounded-sm">
          {items.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] capitalize tracking-widest transition-colors whitespace-nowrap px-2 py-1.5"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] as const
      } 
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] overflow-x-hidden font-sans">
      {/* Navigation */}
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
            <NavDropdown 
              title="About" 
              items={[
                { label: "About Us", href: "/about" },
                { label: "Team", href: "/team" },
                { label: "Career", href: "/careers" },
                { label: "Partners", href: "/partners" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "News & Insights", href: "/news" }
              ]} 
            />
            <NavDropdown 
              title="Programs" 
              isPrimary
              items={[
                { label: "AIX", href: "https://www.aixsummithack.com/", isExternal: true },
                { label: "Sustainova", href: "https://sustainovachallenge.com/", isExternal: true },
                { label: "Entrepreneurship Awards", href: "https://qatarentrepreneurshipawards.com/", isExternal: true },
                { label: "GCC GTM", href: "#programs" }
              ]} 
            />
            <NavDropdown 
              title="Venture Studio" 
              items={[
                { label: "Innovation", href: "#about" },
                { label: "Incubation", href: "#about" },
                { label: "Acceleration", href: "#programs" },
                { label: "Venture Building", href: "#philosophy" }
              ]} 
            />
            <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] transition-all uppercase tracking-widest text-xs font-bold rounded-sm px-6 h-12 border-0 shadow-lg">
              Build With Us
            </Button>
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
                { 
                  title: "About", 
                  items: [
                    { label: "About Us", href: "/about" },
                    { label: "Team", href: "/team" },
                    { label: "Career", href: "/careers" },
                    { label: "Partners", href: "/partners" },
                    { label: "Case Studies", href: "/case-studies" },
                    { label: "News & Insights", href: "/news" }
                  ] 
                },
                { 
                  title: "Programs", 
                  items: [
                    { label: "AIX", href: "https://www.aixsummithack.com/", isExternal: true },
                    { label: "Sustainova", href: "https://sustainovachallenge.com/", isExternal: true },
                    { label: "Entrepreneurship Awards", href: "https://qatarentrepreneurshipawards.com/", isExternal: true },
                    { label: "GCC GTM", href: "#programs" }
                  ] 
                },
                { 
                  title: "Venture Studio", 
                  items: [
                    { label: "Innovation", href: "#about" },
                    { label: "Incubation", href: "#about" },
                    { label: "Acceleration", href: "#programs" },
                    { label: "Venture Building", href: "#philosophy" }
                  ] 
                }
              ].map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <h3 className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest border-b border-slate-100 pb-2">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {section.items.map((item) => (
                      <a 
                        key={item.label} 
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        className="text-lg font-bold text-[#2b204c] capitalize"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <Button className="bg-[#2b204c] text-white uppercase tracking-widest text-sm font-bold rounded-sm w-full h-14 mt-4 shadow-lg">
                Build With Us
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 md:pt-0 bg-[#2b204c] border-b border-slate-100">
        <div className="absolute inset-0 z-0">
           {/* Background gradient/overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b204c] via-[#2b204c] to-[#2b204c]/90 z-10" />
          <img 
            src={heroBg} 
            alt="Abstract tech background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="container relative z-20 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn} className="inline-block mb-4">
                <span className="bg-[#8b68f6]/10 text-[#8b68f6] border border-[#8b68f6]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  Venture Studio • Deep Tech • Ecosystem
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tighter mb-6 uppercase text-white"
              >
                Building the Next <br />
                Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-[#b39bfb]">Deep Tech</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg text-slate-300 max-w-xl mb-8 font-light leading-relaxed"
              >
                Co-building, funding, and scaling disruptive deep tech enterprises in AI, Climate, and SaaS. Transforming bold ideas into global industry leaders.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/build-with-us">
                  <Button className="bg-[#8b68f6] text-white hover:bg-[#7a5bd6] transition-all rounded-sm h-14 px-8 text-base font-bold uppercase tracking-widest shadow-xl border-0 w-full sm:w-auto">
                    Build With Us
                  </Button>
                </Link>
                <Link href="/partners">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#2b204c] transition-all rounded-sm h-14 px-8 text-base font-bold uppercase tracking-widest bg-white/5 w-full sm:w-auto backdrop-blur-sm">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative h-[600px] w-full"
            >
               {/* Abstract 3D/Tech Visual Representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8b68f6]/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={heroBg} 
                alt="Deep Tech Innovation" 
                className="w-full h-full object-contain drop-shadow-2xl relative z-10 mask-image-gradient"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
              
              {/* Floating Cards / Elements Animation */}
              <div className="absolute top-1/4 -right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm z-20 shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8b68f6] rounded-sm flex items-center justify-center text-white">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold uppercase">Venture Building</div>
                    <div className="text-slate-300 text-[10px]">From Zero to One</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm z-20 shadow-2xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2b204c] border border-white/20 rounded-sm flex items-center justify-center text-white">
                    <Network size={20} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold uppercase">Ecosystem</div>
                    <div className="text-slate-300 text-[10px]">Strategic Partnerships</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By / Collaboration Section */}
      <section className="py-8 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible items-center justify-start md:justify-center gap-8 md:gap-16 pb-4 md:pb-0 scrollbar-hide">
            {/* Logo Row */}
            <img src={qdbLogo} alt="Qatar Development Bank" className="h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" />
            <img src={qstpLogo} alt="Qatar Science & Technology Park" className="h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" />
            <img src={mtcitLogo} alt="Ministry of Transport, Communications and Information Technology" className="h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" />
            <img src={codeLogo} alt="Center of Digital Entrepreneurship" className="h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" />
            <img src={quLogo} alt="Qatar University" className="h-[32px] md:h-[40px] lg:h-[48px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Small spacing */}
      <section className="py-10 md:py-12 bg-white border-b border-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-5xl mb-8">
              {[
                { label: "Startups Supported", value: "500+" },
                { label: "Capital Enabled", value: "$100M+" },
                { label: "Markets Across GCC & Beyond", value: "10+" }
              ].map((metric, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="text-4xl md:text-6xl font-heading font-bold text-[#2b204c] mb-2 tracking-tighter">
                    {metric.value}
                  </span>
                  <span className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-widest">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs md:text-sm text-slate-400 font-light italic">
              Built through programs, venture studio initiatives, and ecosystem partnerships.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <span className="w-8 h-0.5 bg-[#8b68f6]"></span>
              <span className="w-8 h-0.5 bg-[#952828]"></span>
              <span className="w-8 h-0.5 bg-[#2b204c]"></span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 md:py-20 relative bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-none uppercase">
                TRANSFORMING IDEAS INTO <br className="hidden md:block"/>
                <span className="text-stroke text-[#2b204c]">GLOBAL GIANTS</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Founded at the intersection of capital and engineering, Risin Ventures was born from a simple realization: the brightest minds in deep tech often lack the infrastructure to scale. We don't just invest; we co-build. Our mission is to accelerate the transition to a sustainable future by backing the pioneers of AI, IoT, and Deeptech.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Innovation", 
                desc: "We identify high-impact problems and apply deep tech, data, and emerging technologies to design innovative, market-relevant solutions.",
                link: "/venture-studio/innovation"
              },
              { 
                icon: <Cpu className="w-8 h-8" />, 
                title: "Incubation", 
                desc: "We support early-stage founders from idea to validation, providing mentorship, resources, and structured guidance to prepare ventures for scale.",
                link: "/venture-studio/incubation"
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Acceleration", 
                desc: "We accelerate startups through structured programs, mentorship, regulatory readiness, and access to enterprise and investor networks.",
                link: "/venture-studio/acceleration"
              },
              { 
                icon: <Building2 className="w-8 h-8" />, 
                title: "Venture Building", 
                desc: "From idea to execution, we co-build startups by assembling teams, shaping products, and embedding execution discipline from day one.",
                link: "/venture-studio/venture-builder"
              }
            ].map((value, i) => (
              <div 
                key={i}
                className={`flex flex-col p-10 border transition-all duration-300 shadow-sm hover:shadow-md h-full relative overflow-hidden ${
                  value.title === "Venture Building" 
                    ? "border-[#8b68f6] bg-white ring-1 ring-[#8b68f6]/20" 
                    : "border-slate-100 bg-[#F9FAFB] hover:border-[#8b68f6]/30"
                }`}
              >
                {value.title === "Venture Building" && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#952828] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-bl-sm">
                      Core Differentiator
                    </div>
                  </div>
                )}
                <div className={`${value.title === "Venture Building" ? "text-[#8b68f6]" : "text-[#2b204c]"} mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {value.desc}
                </p>
                <Link href={value.link} className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer">
                    Know More <ArrowRight size={10} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        id="programs" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 md:py-20 bg-[#F9FAFB] border-y border-slate-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="md:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Path</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-none uppercase">Programs</h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 leading-relaxed">
                Showcasing flagship initiatives that drive innovation and celebrate entrepreneurship across the ecosystem.
              </p>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide">
            {[
              {
                title: "AIX",
                logo: aixLogo, 
                desc: "A global AI-focused summit and hackathon bringing founders, enterprises, and innovators together to build real-world AI solutions.",
                link: "/programs/aix",
                isExternal: false
              },
              {
                title: "Sustainova",
                logo: sustainovaLogo,
                desc: "An innovation challenge focused on sustainability, climate tech, and impact-driven solutions for real-world environmental problems.",
                link: "/programs/sustainova",
                isExternal: false
              },
              {
                title: "Entrepreneurship Awards",
                logo: "https://qatarentrepreneurshipawards.com/wp-content/uploads/2023/08/withoutyear-logo.png",
                desc: "A national platform recognizing and celebrating high-potential entrepreneurs, startups, and innovation-led businesses.",
                link: "/programs/entrepreneurship-awards",
                isExternal: false
              },
              {
                title: "GCC GTM",
                logo: gccGtmLogo,
                desc: "Accelerating global deep-tech ventures' entry into the GCC markets through strategic partnerships and localized scaling.",
                link: "/programs/gtm",
                isExternal: false
              }
            ].map((program, i) => (
              <div 
                key={i}
                className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center flex flex-col p-8 md:p-12 bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#8b68f6]/30 transition-all duration-300 h-full rounded-sm"
              >
                {program.logo && (
                  <div className="mb-6 md:mb-8 h-8 md:h-10 w-auto flex items-start">
                    <img 
                      src={program.logo} 
                      alt={`${program.title} logo`} 
                      className="h-full w-auto object-contain object-left filter brightness-90 hover:brightness-100 transition-all"
                    />
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-[#2b204c] mb-4 md:mb-6 uppercase tracking-tight">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 mb-8 md:mb-10 leading-relaxed flex-1">
                  {program.desc}
                </p>
                {program.isExternal ? (
                  <a 
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 transition-colors group mt-auto"
                  >
                    Know More <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    href={program.link}
                    className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 transition-colors group mt-auto"
                  >
                    Know More <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Swipe Indicator */}
          <div className="flex md:hidden justify-center gap-2 mt-2">
            <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest flex items-center gap-2 animate-pulse">
              Swipe to explore <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Events Strip - Featured Event */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-2 block">Don't Miss Out</span>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] uppercase">Upcoming Event</h3>
            </div>
            <div className="bg-[#2b204c] rounded-sm p-6 md:p-10 flex flex-col items-center text-center gap-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8b68f6] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <span className="bg-[#952828] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm">
                  Applications Open • National Platform
                </span>
                <h4 className="font-heading font-bold text-2xl md:text-3xl text-white uppercase">
                  Qatar Entrepreneurship Awards
                </h4>
                <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm">
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b68f6]"></span>
                    Celebrating Excellence
                  </span>
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b68f6]"></span>
                    Date: TBA
                  </span>
                  <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b68f6]"></span>
                    Time: TBA
                  </span>
                </div>
                <p className="text-slate-400 text-sm max-w-lg mt-2">
                  Recognizing and celebrating excellence and innovation in ICT and digital entrepreneurship across Qatar and the wider region.
                </p>
              </div>
              <a 
                href="https://qatarentrepreneurshipawards.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white transition-all px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-widest flex items-center gap-2 mt-2"
              >
                Apply Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <motion.section 
        id="portfolio" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-16 md:py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-2 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase">BUILDING TOMORROW</h2>
            </div>
            <Link href="/portfolio">
              <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="relative group">
            <div className="flex md:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0">
              {[
                { 
                  name: "Bigtrader", 
                  logo: "/attached_assets/image_1767693167455.png",
                  website: "https://www.bigtrader.biz/",
                  category: "Marketplace",
                  accent: "#952828", // Saffron Red from logo
                  desc: "A digital trading and supply chain platform enabling smarter procurement, visibility, and efficiency for commodity and goods trading businesses." 
                },
                { 
                  name: "Madad Fintech", 
                  logo: "https://www.madadfintech.com/home/hero.svg", 
                  website: "https://www.madadfintech.com/en",
                  category: "Fintech",
                  accent: "#2b204c", // Dark Indigo
                  desc: "A Shariah-compliant fintech platform providing ethical digital financial solutions for individuals and underserved communities." 
                },
                { 
                  name: "iProcure", 
                  logo: "https://iprocure.ai/datacard1.svg", 
                  website: "https://iprocure.ai/",
                  category: "AI",
                  accent: "#8b68f6", // Vivid Violet
                  desc: "An AI-powered procurement intelligence platform helping enterprises optimize sourcing, pricing, and supplier decisions." 
                },
                { 
                  name: "Arisio", 
                  logo: "https://arisio.io/Images/HomePage/whitelogo.png", 
                  website: "https://arisio.io/",
                  category: "AI / Marketplace",
                  accent: "#10b981", // Emerald/Startup green
                  desc: "An AI-driven matchmaking platform connecting startups, investors, and ecosystems through intelligent application screening and discovery." 
                }
              ].map((startup, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ borderTopColor: startup.accent }}
                  className="group flex-shrink-0 w-[280px] md:w-auto flex flex-col p-8 border border-slate-100 border-t-4 bg-[#F9FAFB] shadow-sm hover:shadow-md transition-all duration-500 h-full relative snap-center"
                >
                  <div className="absolute top-4 right-8">
                    <span 
                      style={{ color: startup.accent, borderColor: `${startup.accent}20` }}
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white border rounded-full"
                    >
                      {startup.category}
                    </span>
                  </div>
                  <div className="h-16 flex items-center justify-start mb-8">
                    {startup.logo ? (
                      <img 
                        src={startup.logo} 
                        alt={`${startup.name} logo`} 
                        className={`h-full w-auto object-contain object-left ${startup.name === "Arisio" ? "brightness-0 opacity-80" : ""}`}
                      />
                    ) : (
                      <div className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center font-heading font-bold text-xl text-[#2b204c]">
                        {startup.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-2 uppercase">
                    {startup.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                    {startup.desc}
                  </p>
                  <a 
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group/link"
                  >
                    Go to Website <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
            {/* Subtle Progress Dots for Mobile */}
            <div className="flex md:hidden justify-center gap-2 mt-6">
              {[0, 1, 2, 3].map((dot) => (
                <div key={dot} className={`w-2 h-2 rounded-full transition-all duration-300 ${dot === 0 ? 'bg-[#8b68f6] scale-125' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section - Impact in Action */}
      <motion.section 
        id="case-studies"
        className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-2 block">Impact in Action</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#2b204c] mb-3 uppercase">
                Case Studies
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                Discover how we transform high-potential ideas into high-impact enterprises.
              </p>
            </div>
            <a 
              href="https://risin.ventures/case-studies/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group shrink-0"
            >
              <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest text-xs">
                View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Desktop: Featured + Secondary Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* Featured Card - Large */}
            <motion.a 
              href="https://risin.ventures/inside-the-aix-summit-hackathon-qatar-edition/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm bg-[#2b204c] aspect-[4/3] flex flex-col justify-end cursor-pointer"
            >
              <img 
                src="https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png" 
                alt="AIX Summit"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b204c] via-[#2b204c]/60 to-transparent" />
              <div className="relative z-10 p-8">
                <span className="bg-[#952828] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm mb-4 inline-block">
                  Featured
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 uppercase leading-tight group-hover:text-[#8b68f6] transition-colors">
                  Bridging Ambition and Intelligence – AIX Summit & Hackathon
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  Inside the high-stakes AI summit that brought together founders and enterprises to build real AI solutions.
                </p>
                <span className="text-[10px] font-bold text-white group-hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors">
                  Read Case Study <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>

            {/* Secondary Cards - Stacked */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "AI Hackathons for Enterprises: Beyond Buzzwords to Real ROI",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
                  outcome: "Production-ready AI tools delivered in weeks, not months.",
                  link: "https://risin.ventures/ai-hackathons-for-enterprises-beyond-buzzwords-to-real-roi/"
                },
                {
                  title: "The Rise of Venture Studios in the GCC",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/v-1.png",
                  outcome: "Shifting from traditional VC to hands-on venture building.",
                  link: "https://risin.ventures/the-rise-of-venture-studios-in-the-gcc-deep-tech-landscape/"
                },
                {
                  title: "Scaling Sustainability: Sustainova 2025 Impact",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/s-1.png",
                  outcome: "Measurable carbon reduction through our latest cohort.",
                  link: "https://risin.ventures/scaling-sustainability-the-sustainova-2025-impact-report/"
                }
              ].map((study, i) => (
                <motion.a 
                  key={i}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-4 bg-white border border-slate-100 p-4 rounded-sm hover:shadow-lg hover:border-[#8b68f6]/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-24 h-20 shrink-0 overflow-hidden rounded-sm">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <h4 className="text-sm font-heading font-bold text-[#2b204c] group-hover:text-[#8b68f6] transition-colors uppercase leading-tight line-clamp-2 mb-1">
                      {study.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mb-2">{study.outcome}</p>
                    <span className="text-[9px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight size={10} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-6 -mx-6 gap-4">
              {[
                {
                  title: "Bridging Ambition and Intelligence – AIX Summit",
                  image: "https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png",
                  summary: "Inside the high-stakes AI summit that brought together founders and enterprises.",
                  link: "https://risin.ventures/inside-the-aix-summit-hackathon-qatar-edition/"
                },
                {
                  title: "AI Hackathons for Enterprises",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
                  summary: "How enterprises leverage hackathons to build production-ready AI tools.",
                  link: "https://risin.ventures/ai-hackathons-for-enterprises-beyond-buzzwords-to-real-roi/"
                },
                {
                  title: "The Rise of Venture Studios",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/v-1.png",
                  summary: "Analyzing the shift to hands-on venture building.",
                  link: "https://risin.ventures/the-rise-of-venture-studios-in-the-gcc-deep-tech-landscape/"
                },
                {
                  title: "Sustainova 2025 Impact",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/s-1.png",
                  summary: "Measuring real-world carbon reduction from our cohort.",
                  link: "https://risin.ventures/scaling-sustainability-the-sustainova-2025-impact-report/"
                }
              ].map((study, i) => (
                <a 
                  key={i}
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[260px] snap-center bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm"
                >
                  <div className="aspect-video relative">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b204c]/60 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-heading font-bold text-[#2b204c] uppercase mb-2 line-clamp-2">{study.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">{study.summary}</p>
                    <span className="text-[9px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-1">
                      Read Case Study <ArrowRight size={10} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((dot) => (
                <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot === 0 ? 'bg-[#8b68f6]' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
