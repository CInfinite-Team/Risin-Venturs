import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, Menu, X, Rocket, Cpu, Network, Building2 } from "lucide-react";
import heroBg from "@assets/generated_images/sleek_dark_tech_background_with_animated-style_gradients.png";
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
            {[
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Venture Studio", href: "#philosophy" },
              { label: "Portfolio", href: "#portfolio" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
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
      <section className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0 bg-[#F9FAFB] border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/40 z-10" />
          <img 
            src={heroBg} 
            alt="Abstract architecture" 
            className="w-full h-full object-cover opacity-20"
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
              className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tighter mb-6 md:mb-10 uppercase text-[#2b204c]"
            >
              Building the <br className="hidden md:block" />
              Next Generation <br className="hidden md:block" />
              of <span className="text-[#8b68f6]">Deep Tech</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-2xl text-slate-600 max-w-2xl mb-10 md:mb-16 font-light leading-relaxed"
            >
              Risin Ventures specializes in scaling disruptive innovations across 
              <span className="text-[#2b204c] font-semibold"> AI, IoT, and Blockchain</span>. 
              Bridging breakthrough science and global markets.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] transition-all rounded-sm h-14 md:h-16 px-10 text-base md:text-lg font-bold uppercase tracking-widest shadow-xl">
                Our Programs
              </Button>
              <Button variant="outline" className="border-[#2b204c] text-[#2b204c] hover:bg-slate-50 transition-all rounded-sm h-14 md:h-16 px-10 text-base md:text-lg font-bold uppercase tracking-widest">
                Pitch Us
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="group flex flex-col p-8 border border-slate-100 border-t-4 bg-[#F9FAFB] shadow-sm hover:shadow-md transition-all duration-500 h-full relative"
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
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#2b204c] mb-6 uppercase">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              How we build and scale real ventures. Discover how we transform high-potential ideas into high-impact enterprises from ground zero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                summary: "Strategic sprints transforming tech experiments into high-impact engines for corporate innovation.",
                link: "https://risin.ventures/ai-hackathons-for-enterprises-beyond-buzzwords-to-real-roi/"
              },
              {
                title: "Sustainova Challenge: Empowering Sustainability in the GCC",
                image: "https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png",
                summary: "A transformative platform bridging sustainability-focused startups with the resources to scale regionally.",
                link: "https://risin.ventures/sustainova-challenge-empowering-startups-sustainability-stream-in-the-gcc/"
              },
              {
                title: "Why Corporate Venture Studios are Important for Growing Economies",
                image: "https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png",
                summary: "How the CVS model combines corporate strength with startup agility to drive economic transformation.",
                link: "https://risin.ventures/why-corporate-venture-studios-are-important-for-qatars-economy/"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 line-clamp-2 leading-tight uppercase group-hover:text-[#8b68f6] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 flex-1 leading-relaxed">
                    {study.summary}
                  </p>
                  <a 
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[10px] font-bold text-[#2b204c] uppercase tracking-widest group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={12} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* News & Insights Section */}
      <motion.section 
        id="news" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 md:py-32 bg-[#F9FAFB] border-t border-slate-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-2 block">Intelligence</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase">NEWS & INSIGHTS</h2>
            </div>
            <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest">
              Full Archive <ArrowRight size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                date: "Jan 1, 2026",
                tag: "Event",
                title: "Register for the Biggest AI Summit & Hackathon in the Region",
                link: "https://risin.ventures/register-now-for-the-biggest-ai-summit-hackathon-in-the-region/"
              },
              {
                date: "Dec 18, 2025",
                tag: "Award",
                title: "Qatar Entrepreneurship Awards: Celebrating Innovation and Impact",
                link: "https://risin.ventures/celebrating-innovation-and-impact-a-recap-of-the-qatar-entrepreneurship-awards-2024/"
              },
              {
                date: "Dec 14, 2025",
                tag: "Event",
                title: "Join us for the AIX Summit & Hackathon - Qatar Edition",
                link: "https://risin.ventures/join-us-for-the-aix-summit-hackathon-qatar-edition/"
              },
              {
                date: "Dec 3, 2025",
                tag: "Program",
                title: "Applications Open for the 2025 Venture Building Cohort",
                link: "https://risin.ventures/apply-now-for-the-2025-venture-building-cohort/"
              }
            ].map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-slate-200 pb-10 hover:border-[#8b68f6] transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b68f6]">
                    {news.tag}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] group-hover:text-[#8b68f6] transition-colors leading-tight uppercase mb-6">
                  {news.title}
                </h3>
                <a 
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-widest font-bold text-[#2b204c] flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Read More <ArrowRight size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-24 md:py-32 relative bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 uppercase leading-none tracking-tighter text-[#2b204c]">
                Ready to <br/><span className="text-[#8b68f6] italic">Ascend?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-md mb-12">
                Join our network of elite founders and industry partners. Let's build the future of deep tech.
              </p>
              
              <div className="flex gap-8">
                {["Twitter", "LinkedIn", "AngelList"].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-[#2b204c] transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] border border-slate-100 p-8 md:p-12 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-slate-200 h-14 px-4 text-[#111827] focus:border-[#2b204c] transition-all outline-hidden"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-slate-200 h-14 px-4 text-[#111827] focus:border-[#2b204c] transition-all outline-hidden"
                  />
                </div>
                <Button className="w-full bg-[#952828] text-white hover:bg-[#b03030] transition-all rounded-sm h-16 text-lg font-bold uppercase tracking-widest shadow-lg">
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#2b204c] text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-white text-[#2b204c] flex items-center justify-center font-bold text-xl leading-none rounded-sm">
                  R
                </div>
                <span className="font-heading font-bold text-2xl tracking-tighter uppercase">RISIN.VENTURES</span>
              </div>
              <p className="text-slate-300 max-w-sm leading-relaxed text-sm">
                Backing the outliers and engineering the ascent of the world's most disruptive deep tech startups.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#8b68f6] font-bold uppercase tracking-widest text-xs mb-8">Company</h4>
              <ul className="space-y-4">
                {["About", "Team", "Careers", "Programs", "Venture Studio"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#8b68f6] font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
              <ul className="space-y-4">
                {["Twitter", "LinkedIn", "AngelList", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">
              © 2026 Risin Ventures. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[10px] text-slate-500 uppercase tracking-[0.2em] hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
