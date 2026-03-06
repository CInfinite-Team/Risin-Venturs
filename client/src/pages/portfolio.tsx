import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

import BigtraderLogo from '@/assets/Portfolio Page/Bigtrader.jpeg';
import MadadLogo from '@/assets/Portfolio Page/Madad.jpg';
import HashECMLogo from '@/assets/Portfolio Page/hashECM.png';
import EnergygoLogo from '@/assets/Portfolio Page/EngerGO.png';
import ArisioLogo from '@/assets/Portfolio Page/Arisio.png';
import NufinLogo from '@/assets/Portfolio Page/Nuffin.png';
import UrbanoLogo from '@/assets/Portfolio Page/Urbango.png';
import IprocureLogo from '@/assets/Portfolio Page/Iprocure.jpg';

const portfolioData = [
  {
    id: 1,
    name: "BigTrader",
    logo: BigtraderLogo,
    desc: "B2B Marketplace that streamlines your business operations & unlocks growth opportunities. An all-in-one solution for B2B E-Commerce, Commodity Trade, & more.",
    sector: "E-Commerce",
    link: "https://www.bigtrader.biz/"
  },
  {
    id: 2,
    name: "Madad",
    logo: MadadLogo,
    desc: "Madad is an invoice discounting platform in Qatar that provides instant cash for MSMEs. Sources and related content.",
    sector: "Fintech",
    link: "https://www.madadfintech.com/"
  },
  {
    id: 3,
    name: "hashECM",
    logo: HashECMLogo,
    desc: "AI-driven document intelligence and management platform built for enterprise clients to do more with documents and content, and integrates AI capabilities to work and collaborate with documents.",
    sector: "AI & Enterprise",
    link: "https://hyperthinksys.com/hashecm-pistaceo/"
  },
  {
    id: 4,
    name: "Energygo",
    logo: EnergygoLogo,
    desc: "Clean energy and sustainability-focused platform designed to accelerate the transition to renewable energy sources through innovative digital solutions and market access.",
    sector: "Energy & Sustainability",
    link: "https://myenergygo.com/"
  },
  {
    id: 5,
    name: "Arisio",
    logo: ArisioLogo,
    desc: "Arisio is a cutting-edge platform designed to bridge the gaps in collaboration, funding access, and networking for startups and investors.",
    sector: "Fintech",
    link: "https://arisio.io/"
  },
  {
    id: 6,
    name: "Nufin",
    logo: NufinLogo,
    desc: "Nufin is a new age financial services and banking solution provider. Currently in stealth mode, working on new fintech regulatory approval from the Central Bank of Qatar.",
    sector: "Fintech",
    link: "https://nufintech.com/"
  },
  {
    id: 7,
    name: "Urbano",
    logo: UrbanoLogo,
    desc: "Urbano is an urban mobility platform delivering AI- and IoT-driven solutions including smart parking valet management, car wash, EV charging, and multimodal travel & ticketing.",
    sector: "Mobility",
    link: "https://urbano.io/"
  },
  {
    id: 8,
    name: "Iprocure",
    logo: IprocureLogo,
    desc: "Advanced procurement automation platform simplifying supply chain management and vendor relationships for enterprise and government sectors.",
    sector: "SaaS",
    link: "https://iprocure.ai/"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  
  const sectors = ["All", ...Array.from(new Set(portfolioData.map(item => item.sector)))];
  
  const filteredData = filter === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.sector === filter);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/about" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Portfolio</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold text-[#111827] uppercase leading-none">
                BUILDING TOMORROW'S <br className="hidden md:block"/>
                <span className="text-[#2b204c]">LEADERS</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-[#8b68f6]/20 pl-6 lg:mt-4">
                We build and back the next generation of deep tech giants. Explore the companies that are reshaping industries across the GCC and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "500+", label: "Startups Supported" },
              { value: "$100M+", label: "Capital Enabled" },
              { value: "10+", label: "Markets Reached" },
              { value: "8", label: "Venture Companies" }
            ].map((metric, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="block text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-1">{metric.value}</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Ventures</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase leading-tight">
                Portfolio Companies
              </h2>
            </div>
            
            {/* Filters - Align Right */}
            <div className="flex flex-wrap gap-2 md:justify-end">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setFilter(sector)}
                  className={`px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all border ${
                    filter === sector 
                      ? "bg-[#2b204c] text-white border-[#2b204c]" 
                      : "bg-white text-slate-500 border-slate-200 hover:border-[#8b68f6] hover:text-[#8b68f6]"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredData.map((company) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={company.id}
                className="group bg-[#F9FAFB] rounded-sm border border-slate-100 p-8 hover:border-[#8b68f6]/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div className="h-12 w-12 bg-[#8b68f6]/10 rounded-sm flex items-center justify-center mb-6 text-[#8b68f6]">
                  {/* Replaced Image with Icon Placeholder style if needed or keep image but styled consistently */}
                   <img src={company.logo} alt={`${company.name} Logo`} className="h-8 w-auto object-contain mix-blend-multiply" />
                </div>
                
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">
                    {company.sector}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-3 uppercase group-hover:text-[#8b68f6] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {company.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-[#2b204c] transition-colors">View Details</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-[#8b68f6] transition-colors" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2b204c] text-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase">
            Join Our Portfolio
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Are you building a deep tech venture in the GCC? Let's discuss how we can help you scale.
          </p>
          <Link href="/build-with-us">
            <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
              Build with us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
