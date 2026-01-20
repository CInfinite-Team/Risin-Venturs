import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Rocket, Globe, Zap, Database, Leaf, HeartPulse, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Acceleration() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Editorial Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-0.5 bg-[#0ea5e9]"></span>
              <span className="text-[#0ea5e9] text-sm font-bold uppercase tracking-widest">Venture Studio / Acceleration</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-8 uppercase leading-none">
              Scaling for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-blue-600">Global Impact</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#0ea5e9]/20 pl-6">
              Growth is the only metric that matters. Our acceleration programs are designed for market-ready startups looking to secure funding, enter new markets, and achieve industrial adoption.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Image Placeholder - Context */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-sm bg-white/50 px-4 py-2 rounded-sm backdrop-blur-sm border border-slate-200">
                Actual program image to be uploaded: Startup Founder Meeting
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Sectors */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest mb-3 block">Where We Focus</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">
              Precision Acceleration
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fintech", icon: <Wallet className="text-[#0ea5e9]" />, desc: "Next-gen banking, payments, and regtech." },
              { title: "MedTech", icon: <HeartPulse className="text-[#0ea5e9]" />, desc: "Precision healthcare and digital diagnostics." },
              { title: "Sustainability", icon: <Leaf className="text-[#0ea5e9]" />, desc: "Environment, water, and circular economy." },
              { title: "Smart Cities", icon: <Globe className="text-[#0ea5e9]" />, desc: "Transport, logistics, and urban mobility." },
              { title: "Energy", icon: <Zap className="text-[#0ea5e9]" />, desc: "Industrial intelligence and clean energy." },
              { title: "Deep Tech", icon: <Database className="text-[#0ea5e9]" />, desc: "AI, IoT, and foundational technologies." }
            ].map((sector, i) => (
              <div key={i} className="bg-white p-8 rounded-sm border border-slate-100 hover:border-[#0ea5e9]/50 transition-colors group">
                <div className="mb-4 bg-[#0ea5e9]/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {sector.icon}
                </div>
                <h3 className="font-heading font-bold text-[#2b204c] uppercase mb-2">{sector.title}</h3>
                <p className="text-sm text-slate-500">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Placeholder - Enterprise Context */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
               <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Industrial Access</h3>
               <p className="text-slate-500 leading-relaxed mb-6">
                 We connect our portfolio companies directly with decision-makers in major industrial conglomerates for pilots and commercial agreements.
               </p>
            </div>
            <div className="h-[300px] bg-slate-100 rounded-sm relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs bg-white/50 px-4 py-2 rounded-sm backdrop-blur-sm border border-slate-200 text-center">
                  Actual program image to be uploaded: <br/> Enterprise Pilot Signing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-6">
                The Growth Engine
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We don't do "tourism acceleration." We provide tangible, operational support to help you close deals and raise capital. From cloud credits to regulatory sandboxes, we remove the friction of scaling.
              </p>
              <div className="space-y-4">
                {[
                  "Industrial Proof-of-Concepts (POCs)",
                  "Go-To-Market Strategy & Execution",
                  "Access to Venture Funding",
                  "Intellectual Property & Legal Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Rocket size={16} className="text-[#0ea5e9]" />
                    <span className="font-bold text-[#2b204c] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-[#0ea5e9] p-10 text-white rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <span className="bg-white/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4 inline-block">Partner Spotlight</span>
                <h3 className="text-2xl font-bold uppercase mb-4">Qatar FinTech Hub (QFTH)</h3>
                <p className="text-white/80 text-sm mb-8 leading-relaxed">
                  We work closely with QFTH to accelerate the best fintech startups from around the world, providing them with access to the Qatari market and beyond.
                </p>
                <a href="https://fintech.qa" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-[#0ea5e9] hover:bg-white/90 font-bold uppercase tracking-widest">
                    Explore QFTH
                  </Button>
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            </div>
          </div>
        </div>
      </section>

      <JourneyNav 
        title="Venture Builder"
        description="Innovation and acceleration are just parts of the puzzle. The ultimate expression of our work is building entire companies from scratch."
        link="/venture-studio/venture-builder"
        cta="Enter Venture Builder"
        accentColor="#2b204c"
      />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
