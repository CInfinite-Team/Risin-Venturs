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
          <div className="text-center mb-20">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Our Path</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase">VENTURE EVOLUTION</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "01",
                title: "Pre-Acceleration",
                desc: "Validating core technology and refining the fundamental business thesis for deep tech innovators."
              },
              {
                phase: "02",
                title: "Acceleration",
                desc: "High-intensity 12-week program focusing on rapid prototyping, market entry, and seed readiness."
              },
              {
                phase: "03",
                title: "Post-Acceleration",
                desc: "Long-term scaling support, international expansion strategies, and series B/C fundraising."
              }
            ].map((program, i) => (
              <div 
                key={i}
                className="relative p-12 bg-white border border-slate-100 shadow-sm"
              >
                <div className="text-[#8b68f6] text-sm font-bold mb-6 flex items-center gap-2 uppercase tracking-widest">
                  PHASE {program.phase}
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#2b204c] mb-6 uppercase tracking-tight">
                  {program.title}
                </h3>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  {program.desc}
                </p>
                <Button variant="outline" className="w-full border-[#2b204c] text-[#2b204c] hover:bg-slate-50 rounded-sm uppercase tracking-widest font-bold h-12">
                  Learn More
                </Button>
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
              { name: "NeuroStream", focus: "AI & Neural Interfaces", desc: "Next-gen brain-computer interface for cognitive enhancement." },
              { name: "BlockScale", focus: "L2 Blockchain", desc: "Hyper-scalable infrastructure for the decentralized web." },
              { name: "QuantumLink", focus: "Quantum Computing", desc: "Securing communications with quantum protocols." },
              { name: "GeoThermal AI", focus: "Energy & IoT", desc: "AI-driven thermal management for industrial cooling." }
            ].map((startup, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-slate-100 bg-[#F9FAFB] shadow-sm hover:border-[#8b68f6] transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center mb-8 font-heading font-bold text-xl text-[#2b204c]">
                  {startup.name.charAt(0)}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-2 uppercase">
                  {startup.name}
                </h3>
                <p className="text-xs font-bold text-[#8b68f6] uppercase tracking-widest mb-4">
                  {startup.focus}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {startup.desc}
                </p>
                <Button variant="link" className="p-0 h-auto text-[#2b204c] font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Case Study <ArrowRight size={12} className="ml-1 inline" />
                </Button>
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
                date: "Oct 24, 2025",
                tag: "Funding",
                title: "NeuroStream Secures $15M Series A to Advance Research"
              },
              {
                date: "Oct 12, 2025",
                tag: "Partnership",
                title: "Risin Ventures Strategic Collaboration with Tech Council"
              },
              {
                date: "Sep 28, 2025",
                tag: "Launch",
                title: "Applications Open for 2026 Deep Tech Cohort"
              },
              {
                date: "Sep 15, 2025",
                tag: "Insight",
                title: "The Future of Decentralized Energy Systems"
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
                <Link href="#">
                  <a className="text-[10px] uppercase tracking-widest font-bold text-[#2b204c] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight size={12} />
                  </a>
                </Link>
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
