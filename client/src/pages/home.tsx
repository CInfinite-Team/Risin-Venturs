import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, Menu, X, Rocket, Cpu, Network, Building2, ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_deep-tech_network_visualization_background.png";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";

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
              className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest transition-colors whitespace-nowrap px-2 py-1.5"
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
        ease: [0.21, 0.47, 0.32, 0.98] 
      } 
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 h-20 md:h-24 flex items-center ${isScrolled ? "bg-white shadow-md border-b border-slate-100" : "bg-white border-b border-slate-50"}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl md:text-2xl font-bold font-heading tracking-tighter uppercase flex items-center gap-2 group z-[110]">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#2b204c] text-white flex items-center justify-center font-bold text-lg md:text-xl leading-none rounded-sm">
                R
              </div>
              <span className="text-[#2b204c]">Risin.Ventures</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavDropdown 
              title="About" 
              items={[
                { label: "Team", href: "#about" },
                { label: "Career", href: "#contact" },
                { label: "Partners", href: "#about" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "News & Insights", href: "#news" }
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
                { label: "Venture Building", href: "#philosophy" },
                { label: "Acceleration", href: "#programs" },
                { label: "Platform", href: "#portfolio" },
                { label: "Portfolio", href: "#portfolio" }
              ]} 
            />
            <NavDropdown 
              title="Connect" 
              items={[
                { label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
                { label: "YouTube", href: "https://youtube.com", isExternal: true },
                { label: "Facebook", href: "https://facebook.com", isExternal: true },
                { label: "Instagram", href: "https://instagram.com", isExternal: true }
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
            className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col justify-center items-center gap-8"
          >
            {[
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Venture Studio", href: "#philosophy" },
              { label: "Portfolio", href: "#portfolio" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-2xl font-bold text-[#2b204c] uppercase tracking-tighter"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-[#2b204c] text-white uppercase tracking-widest text-sm font-bold rounded-sm w-64 h-14 mt-4">
              Build With Us
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-0 bg-[#F9FAFB] border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/60 z-10" />
          <img 
            src={heroBg} 
            alt="Abstract tech background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container relative z-20 px-6">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] tracking-tighter mb-6 md:mb-8 uppercase text-[#2b204c]"
            >
              The Venture Studio <br className="hidden md:block" />
              for <span className="text-[#8b68f6]">Deep Tech</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-2xl text-slate-600 max-w-2xl mb-10 md:mb-14 font-light leading-relaxed"
            >
              We co-build, fund, and scale the next generation of disruptive enterprises. By merging institutional discipline with breakthrough science, we transform bold ideas into global industry leaders.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
              <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] transition-all rounded-sm h-14 md:h-16 px-10 text-base md:text-lg font-bold uppercase tracking-widest shadow-xl border-0">
                Build With Us
              </Button>
              <Button variant="outline" className="border-2 border-[#2b204c] text-[#2b204c] hover:bg-slate-50 transition-all rounded-sm h-14 md:h-16 px-10 text-base md:text-lg font-bold uppercase tracking-widest bg-transparent">
                Our Programs
              </Button>
            </motion.div>
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
        className="py-24 md:py-32 relative bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-6xl font-heading font-bold mb-8 leading-none uppercase">
              TRANSFORMING IDEAS INTO <br/>
              <span className="text-stroke text-[#2b204c]">GLOBAL GIANTS</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Founded at the intersection of capital and engineering, Risin Ventures was born from a simple realization: the brightest minds in deep tech often lack the infrastructure to scale. We don't just invest; we co-build. Our mission is to accelerate the transition to a sustainable future by backing the pioneers of AI, IoT, and Blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Innovation", 
                desc: "We identify high-impact problems and apply deep tech, data, and emerging technologies to design innovative, market-relevant solutions.",
                link: "#about"
              },
              { 
                icon: <Building2 className="w-8 h-8" />, 
                title: "Venture Building", 
                desc: "From idea to execution, we co-build startups by assembling teams, shaping products, and embedding execution discipline from day one.",
                link: "#philosophy"
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Acceleration", 
                desc: "We accelerate startups through structured programs, mentorship, regulatory readiness, and access to enterprise and investor networks.",
                link: "#programs"
              },
              { 
                icon: <Network className="w-8 h-8" />, 
                title: "Platform", 
                desc: "Our platform connects founders with capital, industry partners, regulators, and talent to enable scalable and sustainable growth.",
                link: "#portfolio"
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
                    <div className="bg-[#8b68f6] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-bl-sm">
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
                <Link href={value.link}>
                  <a className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 transition-colors">
                    Know More <ArrowRight size={10} />
                  </a>
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
        className="py-24 md:py-32 bg-[#F9FAFB] border-y border-slate-100"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Our Path</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Showcasing flagship initiatives that drive innovation and celebrate entrepreneurship across the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AIX",
                logo: "/attached_assets/WhatsApp_Image_2026-01-06_at_12.39.35_PM_1767692519206.jpeg", 
                desc: "A global AI-focused summit and hackathon bringing founders, enterprises, and innovators together to build real-world AI solutions.",
                link: "https://www.aixsummithack.com/"
              },
              {
                title: "Sustainova",
                logo: "/attached_assets/Risin_Sustainova-Icon_(2)_1767692205938.png",
                desc: "An innovation challenge focused on sustainability, climate tech, and impact-driven solutions for real-world environmental problems.",
                link: "https://sustainovachallenge.com/"
              },
              {
                title: "Entrepreneurship Awards",
                logo: "https://qatarentrepreneurshipawards.com/wp-content/uploads/2023/08/withoutyear-logo.png",
                desc: "A national platform recognizing and celebrating high-potential entrepreneurs, startups, and innovation-led businesses.",
                link: "https://qatarentrepreneurshipawards.com/"
              },
              {
                title: "GCC GTM",
                logo: null,
                desc: "Accelerating global deep-tech ventures' entry into the GCC markets through strategic partnerships and localized scaling.",
                link: "#programs"
              }
            ].map((program, i) => (
              <div 
                key={i}
                className="flex flex-col p-12 bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#8b68f6]/30 transition-all duration-300 h-full"
              >
                {program.logo && (
                  <div className="mb-8 h-8 md:h-10 w-auto flex items-start">
                    <img 
                      src={program.logo} 
                      alt={`${program.title} logo`} 
                      className="h-full w-auto object-contain object-left filter brightness-90 hover:brightness-100 transition-all"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-heading font-bold text-[#2b204c] mb-6 uppercase tracking-tight">
                  {program.title}
                </h3>
                <p className="text-slate-500 mb-10 leading-relaxed flex-1">
                  {program.desc}
                </p>
                <a 
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 transition-colors group"
                >
                  Know More <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section 
        id="portfolio" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 md:py-32 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-2 block">Our Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase">BUILDING TOMORROW</h2>
            </div>
            <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest">
              View All <ArrowRight size={16} />
            </Button>
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

      {/* Case Studies Section */}
      <motion.section 
        id="case-studies"
        className="py-24 bg-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2b204c] mb-2 uppercase">
                Case Studies
              </h2>
              <p className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-6">How we build and scale real ventures</p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Discover how we transform high-potential ideas into high-impact enterprises from ground zero.
              </p>
            </div>
            <a 
              href="https://risin.ventures/case-studies/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest">
                View All Blogs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="relative group">
            <div className="flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0 md:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Bridging Ambition and Intelligence – AIX Summit & Hackathon",
                  image: "https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png",
                  summary: "Inside the high-stakes AI summit that brought together founders and enterprises to build real AI solutions.",
                  link: "https://risin.ventures/inside-the-aix-summit-hackathon-qatar-edition/"
                },
                {
                  title: "AI Hackathons for Enterprises: Beyond Buzzwords to Real ROI",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
                  summary: "How enterprises are leveraging structured hackathons to build production-ready AI tools in weeks.",
                  link: "https://risin.ventures/ai-hackathons-for-enterprises-beyond-buzzwords-to-real-roi/"
                },
                {
                  title: "The Rise of Venture Studios in the GCC landscape",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/v-1.png",
                  summary: "Analyzing the shift from traditional VC to hands-on venture building for high-barrier technology.",
                  link: "https://risin.ventures/the-rise-of-venture-studios-in-the-gcc-deep-tech-landscape/"
                },
                {
                  title: "Scaling Sustainability: The Sustainova 2025 Impact",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/s-1.png",
                  summary: "Measuring the real-world carbon reduction and circular economy impact generated by our latest cohort.",
                  link: "https://risin.ventures/scaling-sustainability-the-sustainova-2025-impact-report/"
                }
              ].map((caseStudy, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex-shrink-0 w-[280px] md:w-auto flex flex-col bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 snap-center"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b204c]/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 group-hover:text-[#8b68f6] transition-colors line-clamp-2 uppercase">
                      {caseStudy.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                      {caseStudy.summary}
                    </p>
                    <a 
                      href={caseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group/btn"
                    >
                      Read Story <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
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

      {/* News & Insights Section */}
      <motion.section 
        id="news"
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-2 block">Newsroom</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#2b204c] mb-4 uppercase">
                News & Insights
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Stay updated with the latest activity, strategic partnerships, and momentum from within our deep-tech ecosystem.
              </p>
            </div>
            <a 
              href="https://risin.ventures/news-and-events/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest">
                View All News <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="relative group">
            <div className="flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0 md:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Risin Ventures and Msheireb Properties Partner for AIX Summit",
                  date: "Dec 2025",
                  image: "https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png",
                  summary: "A landmark partnership to host the AIX Summit, fostering a new era of AI-driven innovation in the heart of Doha.",
                  link: "https://risin.ventures/news-and-events/"
                },
                {
                  title: "Bridging the Gap: Deep Tech Innovation in the GCC landscape",
                  date: "Nov 2025",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/v-1.png",
                  summary: "Exploring how venture building is accelerating the adoption of high-barrier technologies across the region.",
                  link: "https://risin.ventures/news-and-events/"
                },
                {
                  title: "Sustainova 2025: Empowering the Next Wave of Climate Tech",
                  date: "Oct 2025",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/s-1.png",
                  summary: "The latest cohort of startups tackling global environmental challenges through breakthrough scientific innovation.",
                  link: "https://risin.ventures/news-and-events/"
                },
                {
                  title: "Scaling Fintech: Madad's Strategic Expansion Plans",
                  date: "Sept 2025",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
                  summary: "How our portfolio company Madad is redefining Shariah-compliant digital financial services globally.",
                  link: "https://risin.ventures/news-and-events/"
                }
              ].map((news, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex-shrink-0 w-[280px] md:w-auto flex flex-col bg-[#F9FAFB] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 snap-center rounded-sm overflow-hidden"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#8b68f6] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg">
                        Latest • {news.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-4 group-hover:text-[#8b68f6] transition-colors line-clamp-2 uppercase leading-tight">
                      {news.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                      {news.summary}
                    </p>
                    <a 
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group/btn"
                    >
                      Read More <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
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

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <div className="lg:col-span-2">
              <Link href="/">
                <a className="text-2xl font-bold font-heading tracking-tighter uppercase flex items-center gap-2 mb-8">
                  <div className="w-10 h-10 bg-[#2b204c] text-white flex items-center justify-center font-bold text-xl leading-none rounded-sm">
                    R
                  </div>
                  <span className="text-[#2b204c]">Risin.Ventures</span>
                </a>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
                Risin Ventures is a boutique venture studio and investment firm specializing in deep technology. We bridge the gap between breakthrough scientific innovation and global market scale by co-building enterprises with institutional discipline and execution excellence.
              </p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "YouTube", "Instagram"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 border border-slate-100 rounded-sm flex items-center justify-center text-slate-400 hover:text-[#8b68f6] hover:border-[#8b68f6] transition-all bg-[#F9FAFB]">
                    <span className="sr-only">{social}</span>
                    <Globe size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-[#8b68f6]">About</h4>
              <ul className="space-y-4">
                {[
                  { label: "Team", href: "#about" },
                  { label: "Career", href: "#contact" },
                  { label: "Partners", href: "#about" },
                  { label: "Case Studies", href: "#case-studies" },
                  { label: "News & Insights", href: "#news" }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold uppercase tracking-wider">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-[#8b68f6]">Programs</h4>
              <ul className="space-y-4">
                {[
                  { label: "AIX", href: "https://www.aixsummithack.com/" },
                  { label: "Sustainova", href: "https://sustainovachallenge.com/" },
                  { label: "Entrepreneurship Awards", href: "https://qatarentrepreneurshipawards.com/" },
                  { label: "GCC GTM", href: "#programs" }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold uppercase tracking-wider">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-[#8b68f6]">Venture Studio</h4>
              <ul className="space-y-4">
                {[
                  { label: "Innovation", href: "#about" },
                  { label: "Venture Building", href: "#philosophy" },
                  { label: "Acceleration", href: "#programs" },
                  { label: "Platform", href: "#portfolio" },
                  { label: "Portfolio", href: "#portfolio" }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold uppercase tracking-wider">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#2b204c] rounded-sm p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 uppercase">Subscribe to our newsletter</h3>
              <p className="text-slate-300 text-sm">Get the latest insights on deep tech and venture building.</p>
            </div>
            <div className="flex w-full md:w-auto relative z-10">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 rounded-l-sm px-6 py-4 text-sm text-white placeholder:text-slate-400 focus:ring-1 focus:ring-[#8b68f6] w-full md:min-w-[300px] outline-none transition-all"
              />
              <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-l-none rounded-r-sm h-auto px-8 border-0 font-bold uppercase tracking-widest transition-all">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              © 2026 Risin Ventures. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-[#2b204c] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-[#2b204c] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
