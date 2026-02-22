import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Sprout, Users, School, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import image1 from "@assets/10_1768829196459.JPG";
import image2 from "@assets/8_Large_1768829455274.jpeg";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Incubation() {
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
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#952828] text-sm font-bold uppercase tracking-widest">Programs / Incubation</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] uppercase leading-none">
                Nurturing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#952828] to-orange-400">The Seeds of Impact</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-[#952828]/20 pl-6 lg:mt-4">
                Great ideas are fragile. Without the right structure, mentorship, and validation, even the most promising concepts fail. We provide the soil, sun, and water for early-stage ventures to take root.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Image Placeholder - Hero/Context */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image1} 
              alt="Cohort Mentoring Session" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* The Two Layers */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Pre-Incubation */}
            <div className="bg-white p-10 rounded-sm border-t-4 border-[#952828] shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#952828]/10 rounded-full flex items-center justify-center mb-6 text-[#952828]">
                <Sprout size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Pre-Incubation</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                The funnel for future unicorns. We work with universities, government bodies, and talent pools to validate raw ideas and turn students & researchers into founders.
              </p>
              <ul className="space-y-3 mb-8">
                {["Idea Sourcing & Hackathons", "Concept Validation", "Team Formation", "MVP Planning"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#2b204c]">
                    <span className="w-1.5 h-1.5 bg-[#952828] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Incubation */}
            <div className="bg-white p-10 rounded-sm border-t-4 border-[#2b204c] shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#2b204c]/10 rounded-full flex items-center justify-center mb-6 text-[#2b204c]">
                <School size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Incubation</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Structured, cohort-based programs for early-stage startups. We guide founders through the "Valley of Death" with intensive mentorship and resources.
              </p>
              <ul className="space-y-3 mb-8">
                {["Structured Curriculum", "Legal & Business Setup", "Product Development", "Investor Readiness"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-[#2b204c]">
                    <span className="w-1.5 h-1.5 bg-[#2b204c] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      
      {/* Image Placeholder - Mid Page */}
      <section className="bg-[#F9FAFB] pb-20">
        <div className="container mx-auto px-6">
           <div className="w-full h-[300px] bg-white border border-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image2} 
              alt="Demo Day Pitching" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-[#952828] text-sm font-bold uppercase tracking-widest mb-4 block">Our Methodology</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-6">
                Building on <br/> Solid Foundations
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We don't just give advice; we build alongside you. Our incubation model is derived from years of operating experience in the MENA region, adapted for the unique challenges of local founders.
              </p>
              <Link href="/contact">
                <Button className="bg-[#952828] text-white hover:bg-[#2b204c] rounded-sm font-bold uppercase tracking-widest px-8 py-4">
                  Partner with us on Incubation
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { label: "Mentors", icon: <Users className="text-[#952828]" />, desc: "Access to 50+ regional operators." },
                { label: "Government", icon: <Building2 className="text-[#952828]" />, desc: "Direct channels to regulators & zones." },
                { label: "Training", icon: <School className="text-[#952828]" />, desc: "Workshops on product, sales, and finance." },
                { label: "Community", icon: <Users className="text-[#952828]" />, desc: "A vibrant network of peer founders." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#F9FAFB] border border-slate-100 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-[#2b204c] uppercase text-sm mb-2">{item.label}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Strip */}
      <section className="py-16 bg-[#2b204c] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-heading text-white font-bold uppercase mb-2">From Idea to Impact</h3>
              <p className="text-slate-300 text-sm max-w-lg">
                See how we transformed raw concepts into viable businesses in our "Ideas to Impact" program.
              </p>
            </div>
            <Link href="/case-studies/ideas-to-impact">
               <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#2b204c] uppercase tracking-widest font-bold">
                 Read Case Study
               </Button>
            </Link>
          </div>
        </div>
      </section>

      <JourneyNav 
        title="Acceleration"
        description="Once a venture is born, it needs to run. Discover how we scale market-ready startups through high-octane acceleration."
        link="/venture-studio/acceleration"
        cta="Explore Acceleration"
        accentColor="#0ea5e9"
      />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
