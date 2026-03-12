import { motion, useInView } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, Rocket, Cpu, Network, Building2, Lightbulb, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import heroBg from "@/assets/hero-concepts/option6-core.png";
import gccGtmLogo from "../assets/GTM.png";
import sustainovaLogo from "@assets/Sustain_Nova__1771154173735.png";
import aixLogo from "@assets/AIX_LOGO_1771154224181.png";

import bigtraderLogo from "@/assets/HomePortfolio/Bigtrader.png";
import madadLogo from "@/assets/HomePortfolio/Madad.png";
import iprocureLogo from "@/assets/HomePortfolio/Iprocure.png";
import arisioLogo from "@/assets/HomePortfolio/Arisio.png";
import { PartnerLogoCarousel } from "@/pages/partners";

import RiseStudio from "@/assets/CaseStudy/rise of venture studio.png";
import Sustainovacasetudy from "@/assets/CaseStudy/Sustainova casetudy.png";
import Sustainovacasetudy2 from "@/assets/CaseStudy/Sustainova casetudy.jpeg";

import qdbLogo from "@/assets/Ecosystem Partners/QDB.png";
import qstpLogo from "@/assets/Ecosystem Partners/QSTP-Logo.png";
import mtcitLogo from "@/assets/Ecosystem Partners/MTCIT.png";
import codeLogo from "@/assets/Ecosystem Partners/CODE.jpg";
import qatarUniversityLogo from "@/assets/Ecosystem Partners/Qatar University.png";

const homeEcosystemLogos = [qdbLogo, qstpLogo, mtcitLogo, codeLogo, qatarUniversityLogo];

import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import useEmblaCarousel from "embla-carousel-react";

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



// Helper Component for Counting Animation
const CountUp = ({ from = 0, to, duration = 2, prefix = "", suffix = "", delay = 0 }: { from?: number, to: number, duration?: number, prefix?: string, suffix?: string, delay?: number }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease out quart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(from + (to - from) * easeOut));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      const timer = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [inView, from, to, duration, delay]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function Home() {

  const [servicesEmblaRef, servicesEmblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [servicesSelectedIndex, setServicesSelectedIndex] = useState(0);

  const [programsEmblaRef, programsEmblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [programsSelectedIndex, setProgramsSelectedIndex] = useState(0);

  const [portfolioEmblaRef, portfolioEmblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [portfolioSelectedIndex, setPortfolioSelectedIndex] = useState(0);

  const [caseStudiesEmblaRef, caseStudiesEmblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [caseStudiesSelectedIndex, setCaseStudiesSelectedIndex] = useState(0);

  const onSelectServices = useCallback(() => {
    if (!servicesEmblaApi) return;
    setServicesSelectedIndex(servicesEmblaApi.selectedScrollSnap());
  }, [servicesEmblaApi, setServicesSelectedIndex]);

  const onSelectPrograms = useCallback(() => {
    if (!programsEmblaApi) return;
    setProgramsSelectedIndex(programsEmblaApi.selectedScrollSnap());
  }, [programsEmblaApi, setProgramsSelectedIndex]);

  const onSelectPortfolio = useCallback(() => {
    if (!portfolioEmblaApi) return;
    setPortfolioSelectedIndex(portfolioEmblaApi.selectedScrollSnap());
  }, [portfolioEmblaApi, setPortfolioSelectedIndex]);

  const onSelectCaseStudies = useCallback(() => {
    if (!caseStudiesEmblaApi) return;
    setCaseStudiesSelectedIndex(caseStudiesEmblaApi.selectedScrollSnap());
  }, [caseStudiesEmblaApi, setCaseStudiesSelectedIndex]);

  useEffect(() => {
    if (!servicesEmblaApi) return;
    onSelectServices();
    servicesEmblaApi.on('select', onSelectServices);
    servicesEmblaApi.on('reInit', onSelectServices);
  }, [servicesEmblaApi, onSelectServices]);

  useEffect(() => {
    if (!programsEmblaApi) return;
    onSelectPrograms();
    programsEmblaApi.on('select', onSelectPrograms);
    programsEmblaApi.on('reInit', onSelectPrograms);
  }, [programsEmblaApi, onSelectPrograms]);

  useEffect(() => {
    if (!portfolioEmblaApi) return;
    onSelectPortfolio();
    portfolioEmblaApi.on('select', onSelectPortfolio);
    portfolioEmblaApi.on('reInit', onSelectPortfolio);
  }, [portfolioEmblaApi, onSelectPortfolio]);

  useEffect(() => {
    if (!caseStudiesEmblaApi) return;
    onSelectCaseStudies();
    caseStudiesEmblaApi.on('select', onSelectCaseStudies);
    caseStudiesEmblaApi.on('reInit', onSelectCaseStudies);
  }, [caseStudiesEmblaApi, onSelectCaseStudies]);

  const scrollToService = useCallback((index: number) => servicesEmblaApi?.scrollTo(index), [servicesEmblaApi]);
  const scrollToProgram = useCallback((index: number) => programsEmblaApi?.scrollTo(index), [programsEmblaApi]);
  const scrollToPortfolio = useCallback((index: number) => portfolioEmblaApi?.scrollTo(index), [portfolioEmblaApi]);
  const scrollToCaseStudy = useCallback((index: number) => caseStudiesEmblaApi?.scrollTo(index), [caseStudiesEmblaApi]);


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
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center pt-32  lg:pt-20 lg:pb-0  bg-[#2b204c] border-b border-slate-100 box-border">
        <div className="absolute inset-0 z-0">
           {/* Background gradient/overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b204c] via-[#2b204c] to-[#2b204c]/90 z-10" />
          <img 
            src={heroBg} 
            alt="Abstract tech background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="container relative z-20 px-6 xl:px-12 mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 pt-5  md:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-3xl w-full flex flex-col justify-center order-2 lg:order-1"
            >
              <motion.div variants={fadeIn} className="inline-block mb-5">
                <span className="bg-[#8b68f6]/10 whitespace-nowrap text-[#8b68f6] border border-[#8b68f6]/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm">
                  Venture Studio • Deep Tech • Ecosystem
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-6xl xl:text-7xl  font-heading font-bold leading-[1.1] tracking-tight mb-6 text-white"
              >
                Building the Next <br />
                Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-[#b39bfb]">Deep Tech</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg md:text-xl text-slate-300 max-w-xl mb-8 font-light leading-relaxed"
              >
                Co-building and funding disruptive startups in deep tech, IoT, AI & AIoT technology.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link href="/build-with-us">
                  <Button className="bg-[#8b68f6] text-white hover:bg-[#7a5bd6] transition-all rounded-sm h-14 px-8 text-base font-semibold tracking-wide shadow-lg hover:shadow-xl border-0 w-full sm:w-auto">
                    Build With Us
                  </Button>
                </Link>
                <Link href="/partners">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#2b204c] transition-all rounded-sm h-14 px-8 text-base font-semibold tracking-wide bg-white/5 w-full sm:w-auto backdrop-blur-sm">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual (New Animated Graphic) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center h-[280px] sm:h-[350px] lg:h-[500px] mb-8 lg:mb-0 w-full order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[480px] aspect-square flex justify-center items-center">
                
                {/* Center Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b68f6]/30 to-[#952828]/10 rounded-full blur-[80px] animate-pulse"></div>
                
                {/* Connecting Lines / Network Background */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                  <motion.path 
                    d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z" 
                    fill="none" 
                    stroke="#8b68f6" 
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M100 50 L150 75 L150 125 L100 150 L50 125 L50 75 Z" 
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", transformOrigin: "100px 100px" }}
                  />
                  {/* Internal connections */}
                  <line x1="100" y1="20" x2="100" y2="100" stroke="#8b68f6" strokeWidth="0.5" opacity="0.5" />
                  <line x1="180" y1="60" x2="100" y2="100" stroke="#8b68f6" strokeWidth="0.5" opacity="0.5" />
                  <line x1="180" y1="140" x2="100" y2="100" stroke="#8b68f6" strokeWidth="0.5" opacity="0.5" />
                  <line x1="100" y1="180" x2="100" y2="100" stroke="#8b68f6" strokeWidth="0.5" opacity="0.5" />
                  <line x1="20" y1="140" x2="100" y2="100" stroke="#8b68f6" strokeWidth="0.5" opacity="0.5" />
                  <line x1="20" y1="60" x2="100" y2="100" stroke="#8b68f6" strokeWidth="0.5" opacity="0.5" />
                </svg>

                {/* Central Core Element */}
                <motion.div 
                  className="absolute z-20 flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-[#8b68f6]/20 backdrop-blur-md shadow-[0_0_40px_rgba(139,104,246,0.3)]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Network className="w-10 h-10 lg:w-14 lg:h-14 text-white drop-shadow-lg" strokeWidth={1.5} />
                  
                  {/* Radar ping effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-[#8b68f6]"
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Satellite Nodes */}
                {[
                  { icon: Building2, delay: 0, position: "top-[30%] left-[90%] -ml-6 -mt-6 lg:-ml-8 lg:-mt-8", color: "text-white", bg: "bg-[#2b204c]" },
                  { icon: Cpu, delay: 1, position: "top-[70%] left-[90%] -ml-6 -mt-6 lg:-ml-8 lg:-mt-8", color: "text-[#8b68f6]", bg: "bg-white/10" },
                  { icon: Rocket, delay: 2, position: "top-[70%] left-[10%] -ml-6 -mt-6 lg:-ml-8 lg:-mt-8", color: "text-white", bg: "bg-[#952828]" },
                  { icon: Globe, delay: 1.5, position: "top-[30%] left-[10%] -ml-6 -mt-6 lg:-ml-8 lg:-mt-8", color: "text-white", bg: "bg-[#8b68f6]" }
                ].map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={i}
                      className={`absolute z-30 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-xl border border-white/20 backdrop-blur-md shadow-xl ${node.bg} ${node.position}`}
                      animate={{ 
                        y: [0, -12, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 5 + i, 
                        delay: node.delay, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${node.color}`} strokeWidth={1.5} />
                    </motion.div>
                  );
                })}

                {/* Data particles flowing */}
                <svg className="absolute inset-0 w-full h-full z-10 overflow-visible" viewBox="0 0 200 200">
                  <motion.circle 
                    cx="0" cy="0" r="2" fill="#fff" 
                    animate={{ 
                      cx: [100, 180, 150, 100], 
                      cy: [100, 60, 75, 50],
                      opacity: [0, 1, 1, 0]
                    }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
                  />
                  <motion.circle 
                    cx="0" cy="0" r="2" fill="#8b68f6" 
                    animate={{ 
                      cx: [20, 100, 150, 100], 
                      cy: [140, 100, 125, 150],
                      opacity: [0, 1, 1, 0]
                    }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }} 
                  />
                  <motion.circle 
                    cx="0" cy="0" r="1.5" fill="#952828" 
                    animate={{ 
                      cx: [100, 20, 50, 100], 
                      cy: [100, 60, 75, 50],
                      opacity: [0, 1, 1, 0]
                    }} 
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 2 }} 
                  />
                </svg>

              </div>
            </motion.div>
            
          </div>
        </div>
            {/* Stats Bar */}
      <section className="bg-[#8b68f6] w-full mt-5 py-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
            {[
              { value: "$100M+", label: "Capital Enabled" },
              { value: "8", label: "Active Ventures" },
              { value: "15+", label: "Gov't Partners" },
              { value: "500+", label: "Startups Supported" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-5xl font-heading font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </section>

  

      {/* Trusted By / Collaboration Section */}
      <section className="py-10 md:py-16 bg-[#F7F8FC] border-t border-slate-100/50 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#2b204c] mb-4 tracking-tight">
              Strategic Ecosystem Partners
            </h2>
            <div className="w-16 h-0.5 bg-[#2b204c]/10 mx-auto mb-4"></div>
            <p className="text-slate-500 text-base md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Working alongside leading institutions advancing innovation across Qatar and the GCC.
            </p>
          </motion.div>

          {/* Mobile: Marquee */}
          <div className="block md:hidden">
            <PartnerLogoCarousel logos={homeEcosystemLogos} marquee={true} direction="left" speed={8} noBox={true} />
          </div>

          {/* Desktop: Even-size card grid */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-5">
            {homeEcosystemLogos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-56 h-56 p-4 hover:scale-105 transition-transform shrink-0 mix-blend-multiply">
                <img
                  src={logo}
                  alt={`Ecosystem Partner ${i + 1}`}
                  className="w-full h-full object-contain aspect-[3/2] filter transition-all scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - REMOVED since metrics moved to hero */}
      
      {/* Venture Building Section (Core Differentiator) */}
      <motion.section 
        id="philosophy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-10 md:py-16 relative bg-[#F9FAFB] border-b border-slate-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Core Differentiator</span>
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold leading-none tracking-tight mb-6 text-[#2b204c]">
                Venture <br/>
                <span className="relative inline-block">
                  Building
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#8b68f6]/10 -z-10 transform -rotate-1"></span>
                </span>
              </h2>
              <p className="text-2xl text-[#2b204c] font-medium leading-relaxed mb-8 border-l-4 border-[#8b68f6] pl-6 py-1">
                We don't just invest; we build.
              </p>
              
              <div className="flex flex-col gap-4 mb-8">
                {[
                  "Co-Building",
                  "Capital + Execution",
                  "Market Access"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#8b68f6]/30 transition-colors">
                      <ArrowRight className="text-[#8b68f6] w-5 h-5" />
                    </div>
                    <span className="font-bold text-[#2b204c] text-lg tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/venture-studio/venture-builder">
                <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] transition-all text-sm font-bold rounded-sm px-10 h-14 shadow-lg hover:shadow-xl tracking-wide">
                  Explore Venture Building
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#8b68f6]/20 to-transparent rounded-full blur-3xl opacity-30"></div>
               <div className="relative bg-white border border-slate-100 p-8 md:p-10 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500">
                 <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-6">
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#2b204c] text-white flex items-center justify-center rounded-sm shadow-md">
                       <Building2 size={24} />
                     </div>
                     <div>
                       <h3 className="text-lg font-bold text-[#2b204c] tracking-tight">The Studio Model</h3>
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Systematic Innovation</p>
                     </div>
                   </div>
                   <div className="bg-[#F9FAFB] text-[#2b204c] border border-slate-100 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                     Proven Process
                   </div>
                 </div>
                 
                 <div className="space-y-6">
                   {[
                     { step: "01", title: "Ideation & Validation", desc: "Rigorous market testing" },
                     { step: "02", title: "Team Assembly", desc: "Recruiting technical & commercial co-founders" },
                     { step: "03", title: "Product Development", desc: "MVP build & iteration" },
                     { step: "04", title: "Go-to-Market", desc: "First customers & revenue" },
                     { step: "05", title: "Scale & Spin-out", desc: "Growth capital & independence" }
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                       <span className="text-xs font-bold text-slate-300 group-hover:text-[#8b68f6] transition-colors font-mono">{item.step}</span>
                       <div className="h-px bg-slate-100 flex-1 group-hover:bg-[#8b68f6]/30 transition-colors"></div>
                       <div className="text-right">
                         <h4 className="text-sm font-bold text-[#2b204c] tracking-tight mb-1">{item.title}</h4>
                         <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section (Acceleration, Incubation, Innovation) */}
      <motion.section 
        id="services" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-10 md:py-16 relative bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-none tracking-tight mb-6 text-[#2b204c]">
              Supporting the <br/>Full Lifecycle
            </h2>
            <div className="w-16 h-0.5 bg-[#8b68f6] mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Tailored support from initial spark to global scale.
            </p>
          </div>

          {/* Desktop Version */}
          <div  className="hidden md:grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Innovation", 
                desc: "Designing market-relevant solutions using deep tech.",
                link: "/venture-studio/innovation"
              },
              { 
                icon: <Cpu className="w-8 h-8" />, 
                title: "Incubation", 
                desc: "Guiding early-stage founders from idea to validation.",
                link: "/venture-studio/incubation"
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Acceleration", 
                desc: "Scaling startups through access to enterprise networks.",
                link: "/venture-studio/acceleration"
              }
            ].map((value, i) => (
              <div 
                key={i}
                className="flex flex-col p-10 border border-slate-100 bg-[#F9FAFB] transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:translate-y-[-2px] h-full relative overflow-hidden group rounded-sm"
              >
                <div className="text-[#2b204c] group-hover:text-[#8b68f6] transition-colors mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2b204c] mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1 font-light">
                  {value.desc}
                </p>
                <Link href={value.link} className="text-xs font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer mt-auto">
                    Know More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Version */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={servicesEmblaRef}>
              <div className="flex touch-pan-y">
                {[
                  { 
                    icon: <Zap className="w-8 h-8" />, 
                    title: "Innovation", 
                    desc: "Designing market-relevant solutions using deep tech.",
                    link: "/venture-studio/innovation"
                  },
                  { 
                    icon: <Cpu className="w-8 h-8" />, 
                    title: "Incubation", 
                    desc: "Guiding early-stage founders from idea to validation.",
                    link: "/venture-studio/incubation"
                  },
                  { 
                    icon: <Rocket className="w-8 h-8" />, 
                    title: "Acceleration", 
                    desc: "Scaling startups through access to enterprise networks.",
                    link: "/venture-studio/acceleration"
                  }
                ].map((value, i) => (
                  <div key={i} className="flex-[0_0_85%] min-w-0 pr-4 pl-1 pb-4 snap-center">
                    <div className="flex flex-col p-8 border border-slate-100 bg-[#F9FAFB] transition-all duration-300 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] h-full relative overflow-hidden group rounded-sm">
                      <div className="text-[#2b204c] group-hover:text-[#8b68f6] transition-colors mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#2b204c] mb-3 tracking-tight">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1 font-light">
                        {value.desc}
                      </p>
                      <Link href={value.link} className="text-xs font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer mt-auto">
                          Know More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Functional Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((dot) => (
                <button 
                  key={dot} 
                  onClick={() => scrollToService(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${servicesSelectedIndex === dot ? 'bg-[#8b68f6] scale-125' : 'bg-slate-300'}`} 
                />
              ))}
            </div>
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
        className="py-10 md:py-16 bg-[#F9FAFB] border-y border-slate-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Path</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-none tracking-tight text-[#2b204c]">Programs</h2>
            </div>
            <div className="md:w-1/2 md:text-right">
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Flagship initiatives driving innovation <br className="hidden md:block"/> across the ecosystem.
              </p>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AIX",
                logo: aixLogo, 
                desc: "Building real-world AI solutions.",
                link: "/programs/aix",
                isExternal: false
              },
              {
                title: "Sustainova",
                logo: sustainovaLogo,
                desc: "Innovation challenge for climate tech.",
                link: "/programs/sustainova",
                isExternal: false
              },
              {
                title: "Entrepreneurship Awards",
                logo: "https://qatarentrepreneurshipawards.com/wp-content/uploads/2023/08/withoutyear-logo.png",
                desc: "Celebrating high-potential entrepreneurs.",
                link: "/programs/entrepreneurship-awards",
                isExternal: false
              },
              {
                title: "GCC GTM",
                logo: gccGtmLogo,
                desc: "Accelerating global deep-tech ventures.",
                link: "/programs/gtm",
                isExternal: false
              }
            ].map((program, i) => (
              <div 
                key={i}
                className="flex flex-col p-8 bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#8b68f6]/20 transition-all duration-300 h-full rounded-sm group"
              >
                {program.logo && (
                  <div className="mb-6 h-10 w-auto flex items-start">
                    <img 
                      src={program.logo} 
                      alt={`${program.title} logo`} 
                      className="h-full w-auto object-contain object-left filter brightness-95 hover:brightness-100 transition-all"
                    />
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-[#2b204c] mb-3 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed flex-1 font-light">
                  {program.desc}
                </p>
                {program.isExternal ? (
                  <a 
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group mt-auto"
                  >
                    Know More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    href={program.link}
                    className="text-xs font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group mt-auto"
                  >
                    Know More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Carousel Version */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={programsEmblaRef}>
              <div className="flex touch-pan-y">
                {[
                  {
                    title: "AIX",
                    logo: aixLogo, 
                    desc: "Building real-world AI solutions.",
                    link: "/programs/aix",
                    isExternal: false
                  },
                  {
                    title: "Sustainova",
                    logo: sustainovaLogo,
                    desc: "Innovation challenge for climate tech.",
                    link: "/programs/sustainova",
                    isExternal: false
                  },
                  {
                    title: "Entrepreneurship Awards",
                    logo: "https://qatarentrepreneurshipawards.com/wp-content/uploads/2023/08/withoutyear-logo.png",
                    desc: "Celebrating high-potential entrepreneurs.",
                    link: "/programs/entrepreneurship-awards",
                    isExternal: false
                  },
                  {
                    title: "GCC GTM",
                    logo: gccGtmLogo,
                    desc: "Accelerating global deep-tech ventures.",
                    link: "/programs/gtm",
                    isExternal: false
                  }
                ].map((program, i) => (
                  <div key={i} className="flex-[0_0_85%] min-w-0 pr-4 pl-1 pb-4 snap-center">
                    <div className="flex flex-col p-8 bg-white border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] h-full rounded-sm group">
                      {program.logo && (
                        <div className="mb-6 h-10 w-auto flex items-start">
                          <img 
                            src={program.logo} 
                            alt={`${program.title} logo`} 
                            className="h-full w-auto object-contain object-left filter brightness-95"
                          />
                        </div>
                      )}
                      <h3 className="text-xl md:text-2xl font-bold text-[#2b204c] mb-3 tracking-tight">
                        {program.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed flex-1 font-light">
                        {program.desc}
                      </p>
                      {program.isExternal ? (
                        <a 
                          href={program.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group mt-auto"
                        >
                          Know More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <Link 
                          href={program.link}
                          className="text-xs font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group mt-auto"
                        >
                          Know More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Functional Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((dot) => (
                <button 
                  key={dot} 
                  onClick={() => scrollToProgram(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${programsSelectedIndex === dot ? 'bg-[#8b68f6] scale-125' : 'bg-slate-300'}`} 
                />
              ))}
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
                    Date: 8th April 2026
                  </span>
                  {/* <span className="text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8b68f6]"></span>
                    Time: TBA
                  </span> */}
                </div>
                <p className="text-slate-400 text-sm max-w-lg mt-2">
                  Recognizing and celebrating excellence in ICT and digital entrepreneurship.
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
        className="py-10 md:py-16 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-[#2b204c]">Building Tomorrow</h2>
            </div>
            <Link href="/portfolio">
              <Button variant="link" className="text-[#2b204c] hover:text-[#8b68f6] gap-2 p-0 h-auto font-bold uppercase tracking-widest text-xs">
                View All <ArrowRight size={14} />
              </Button>
            </Link>
          </div>

          <div className="relative group">
          {/* Desktop Version */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Bigtrader", 
                logo: bigtraderLogo,
                website: "https://www.bigtrader.biz/",
                category: "Marketplace",
                accent: "#952828", // Saffron Red from logo
                desc: "Smarter procurement and supply chain efficiency." 
              },
              { 
                name: "Madad Fintech", 
                logo: madadLogo, 
                website: "https://www.madadfintech.com/en",
                category: "Fintech",
                accent: "#2b204c", // Dark Indigo
                desc: "Ethical digital financial solutions for everyone." 
              },
              { 
                name: "iProcure", 
                logo: iprocureLogo, 
                website: "https://iprocure.ai/",
                category: "AI",
                accent: "#8b68f6", // Vivid Violet
                desc: "AI-powered procurement intelligence." 
              },
              { 
                name: "Arisio", 
                logo: arisioLogo, 
                website: "https://arisio.io/",
                category: "AI / Marketplace",
                accent: "#10b981", // Emerald/Startup green
                desc: "Connecting startups, investors, and ecosystems." 
              }
            ].map((startup, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ borderTopColor: startup.accent }}
                className="group flex flex-col p-8 border border-slate-100 border-t-4 bg-[#F9FAFB] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 h-full relative rounded-sm"
              >
            
                <div className="flex items-start justify-between gap-4 mb-8">
                  {startup.logo ? (
                    <img 
                      src={startup.logo} 
                      alt={`${startup.name} logo`} 
                      className={`h-12 w-auto object-contain object-left shrink`}
                    />
                  ) : (
                    <div className="w-12 h-12 shrink-0 bg-white border border-slate-100 flex items-center justify-center font-heading font-bold text-xl text-[#2b204c]">
                      {startup.name.charAt(0)}
                    </div>
                  )}
                    <span 
                    style={{ color: startup.accent, borderColor: `${startup.accent}20` }}
                    className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white border rounded-full shrink-0 whitespace-nowrap"
                  >
                    {startup.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2b204c] mb-3 tracking-tight">
                  {startup.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 font-light">
                  {startup.desc}
                </p>
                <a 
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group/link"
                >
                  Go to Website <ArrowRight size={10} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel Version */}
          <div className="md:hidden mt-8">
            <div className="overflow-hidden" ref={portfolioEmblaRef}>
              <div className="flex touch-pan-y">
                {[
                  { 
                    name: "Bigtrader", 
                    logo: bigtraderLogo,
                    website: "https://www.bigtrader.biz/",
                    category: "Marketplace",
                    accent: "#952828", // Saffron Red from logo
                    desc: "Smarter procurement and supply chain efficiency." 
                  },
                  { 
                    name: "Madad Fintech", 
                    logo: madadLogo, 
                    website: "https://www.madadfintech.com/en",
                    category: "Fintech",
                    accent: "#2b204c", // Dark Indigo
                    desc: "Ethical digital financial solutions for everyone." 
                  },
                  { 
                    name: "iProcure", 
                    logo: iprocureLogo, 
                    website: "https://iprocure.ai/",
                    category: "AI",
                    accent: "#8b68f6", // Vivid Violet
                    desc: "AI-powered procurement intelligence." 
                  },
                  { 
                    name: "Arisio", 
                    logo: arisioLogo, 
                    website: "https://arisio.io/",
                    category: "AI / Marketplace",
                    accent: "#10b981", // Emerald/Startup green
                    desc: "Connecting startups, investors, and ecosystems." 
                  }
                ].map((startup, i) => (
                  <div key={i} className="flex-[0_0_auto] w-[85vw] min-w-[300px] max-w-[95vw] pr-4 pl-1 pb-4 snap-center">
                    <div 
                      style={{ borderTopColor: startup.accent }}
                      className="flex flex-col p-8 border border-slate-100 border-t-4 bg-[#F9FAFB] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] h-full relative rounded-sm"
                    >
                      <div className="flex items-start justify-between gap-4 mb-8">
                        {startup.logo ? (
                          <img 
                            src={startup.logo} 
                            alt={`${startup.name} logo`} 
                            className={`h-12 w-auto object-contain object-left shrink`}
                          />
                        ) : (
                          <div className="w-12 h-12 shrink-0 bg-white border border-slate-100 flex items-center justify-center font-heading font-bold text-xl text-[#2b204c]">
                            {startup.name.charAt(0)}
                          </div>
                        )}
                        <span 
                          style={{ color: startup.accent, borderColor: `${startup.accent}20` }}
                          className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white border rounded-full shrink-0 whitespace-nowrap"
                        >
                          {startup.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2b204c] mb-3 tracking-tight">
                        {startup.name}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 font-light">
                        {startup.desc}
                      </p>
                      <a 
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors group/link"
                      >
                        Go to Website <ArrowRight size={10} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Functional Dots for Mobile */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((dot) => (
                <button 
                  key={dot} 
                  onClick={() => scrollToPortfolio(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${portfolioSelectedIndex === dot ? 'bg-[#8b68f6] scale-125' : 'bg-slate-300'}`} 
                />
              ))}
            </div>
          </div>
          </div>
        </div>
      </motion.section>

    

      {/* Case Studies Section - Impact in Action */}
      <motion.section 
        id="case-studies"
        className="py-10 md:py-16 bg-gradient-to-b from-slate-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Impact in Action</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#2b204c] mb-3 uppercase tracking-tight">
                Case Studies
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl font-light">
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
            <Link href="/case-studies/aix-summit">
              <a className="group relative overflow-hidden rounded-sm bg-[#2b204c] aspect-[4/3] flex flex-col justify-end cursor-pointer">
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
              </a>
            </Link>

            {/* Secondary Cards - Stacked */}
            <div className="flex flex-col gap-4 h-full">
              {[
                {
                  title: "AI Hackathons for Enterprises: Beyond Buzzwords to Real ROI",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
                  outcome: "Production-ready AI tools delivered in weeks, not months.",
                  link: "/case-studies/ai-hackathons"
                },
                {
                  title: "Sustainova Challenge: Empowering Sustainability",
                  image: Sustainovacasetudy,
                  outcome: "Transformative platform for sustainability-focused startups in the GCC.",
                  link: "/case-studies/sustainova-challenge"
                },
                {
                  title: "Why Corporate Venture Studios are Important",
                  image: RiseStudio,
                  outcome: "Combining the best of both worlds to stay ahead of the curve.",
                  link: "/case-studies/corporate-venture-studios"
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
                  className="group flex gap-4 bg-white border border-slate-100 p-4 rounded-sm hover:shadow-lg hover:border-[#8b68f6]/30 transition-all duration-300 cursor-pointer flex-1 items-center"
                >
                  <div className="w-24 md:w-32 h-20 md:h-24 shrink-0 overflow-hidden rounded-sm">
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
                    <p className="text-xs text-slate-500 line-clamp-2 mb-2">{study.outcome}</p>
                    <span className="text-[9px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight size={10} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Version */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={caseStudiesEmblaRef}>
              <div className="flex touch-pan-y">
              {[
                {
                  title: "Bridging Ambition and Intelligence – AIX Summit",
                  image: "https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png",
                  summary: "Inside the high-stakes AI summit that brought together founders and enterprises to build real AI solutions.",
                  link: "/case-studies/aix-summit"
                },
                {
                  title: "AI Hackathons for Enterprises",
                  image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
                  summary: "How enterprises leverage hackathons to build production-ready AI tools.",
                  link: "/case-studies/ai-hackathons"
                },
                {
                  title: "Sustainova Challenge",
                  image: Sustainovacasetudy,
                  summary: "Establishing itself as a transformative platform for sustainability-focused startups.",
                  link: "/case-studies/sustainova-challenge"
                },
                {
                  title: "Why Corporate Venture Studios are Important",
                  image: RiseStudio,
                  summary: "Helping businesses stay ahead of the curve.",
                  link: "/case-studies/corporate-venture-studios"
                }
              ].map((study, i) => (
                <div key={i} className="flex-[0_0_85%] min-w-0 pr-4 pl-1 pb-4 snap-center">
                  <a 
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-slate-100 rounded-sm overflow-hidden shadow-sm h-full"
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
                </div>
              ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((dot) => (
                <button 
                  key={dot} 
                  onClick={() => scrollToCaseStudy(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${caseStudiesSelectedIndex === dot ? 'bg-[#8b68f6] scale-125' : 'bg-slate-300'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

        {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-[#2b204c] relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-[#2b204c] to-[#2b204c]/90 z-10"></div>
         {/* Abstract background elements */}
         <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8b68f6] rounded-full blur-[100px] opacity-30 z-0"></div>
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#952828] rounded-full blur-[100px] opacity-20 z-0"></div>

         <div className="container mx-auto px-6 relative z-20 text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl mx-auto"
           >
             <h2 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold text-white mb-8 uppercase leading-none tracking-tighter">
               Ready to Build the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-[#b39bfb]">Future?</span>
             </h2>
             <p className="text-lg md:text-xl text-slate-300 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
               Whether you're a founder with a bold vision or an enterprise looking to innovate, we're your partner in building what's next.
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link href="/build-with-us">
                 <Button className="bg-[#8b68f6] text-white hover:bg-[#7a5bd6] transition-all rounded-sm h-16 px-10 text-lg font-bold uppercase tracking-widest shadow-2xl border-0 w-full sm:w-auto hover:scale-105 transform duration-300">
                   Build With Us
                 </Button>
               </Link>
               <Link href="/partners">
                 <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#2b204c] transition-all rounded-sm h-16 px-10 text-lg font-bold uppercase tracking-widest bg-white/5 w-full sm:w-auto backdrop-blur-sm hover:scale-105 transform duration-300">
                   Partner With Us
                 </Button>
               </Link>
             </div>
           </motion.div>
         </div>
      </section>



      <Footer />
      <ScrollToTop />
    </div>
  );
}
