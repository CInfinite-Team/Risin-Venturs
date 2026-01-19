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

const portfolioData = [
  {
    id: 1,
    name: "BigTrader",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=BigTrader",
    desc: "B2B Marketplace that streamlines your business operations & unlocks growth opportunities. An all-in-one solution for B2B E-Commerce, Commodity Trade, & more.",
    sector: "E-Commerce",
    link: "#"
  },
  {
    id: 2,
    name: "Madad",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=MADAD",
    desc: "Madad is an invoice discounting platform in Qatar that provides instant cash for MSMEs. Sources and related content.",
    sector: "Fintech",
    link: "#"
  },
  {
    id: 3,
    name: "hashECM",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=hashECM",
    desc: "AI-driven document intelligence and management platform built for enterprise clients to do more with documents and content, and integrates AI capabilities to work and collaborate with documents.",
    sector: "AI & Enterprise",
    link: "#"
  },
  {
    id: 4,
    name: "Energygo",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=Energygo",
    desc: "Clean energy and sustainability-focused platform designed to accelerate the transition to renewable energy sources through innovative digital solutions and market access.",
    sector: "Energy & Sustainability",
    link: "#"
  },
  {
    id: 5,
    name: "Arisio",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=Arisio",
    desc: "Arisio is a cutting-edge platform designed to bridge the gaps in collaboration, funding access, and networking for startups and investors.",
    sector: "Fintech",
    link: "#"
  },
  {
    id: 6,
    name: "Nufin",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=NUFIN",
    desc: "Nufin is a new age financial services and banking solution provider. Currently in stealth mode, working on new fintech regulatory approval from the Central Bank of Qatar.",
    sector: "Fintech",
    link: "#"
  },
  {
    id: 7,
    name: "Urbano",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=Urbano",
    desc: "Urbano is an urban mobility platform delivering AI- and IoT-driven solutions including smart parking valet management, car wash, EV charging, and multimodal travel & ticketing.",
    sector: "Mobility",
    link: "#"
  },
  {
    id: 8,
    name: "Iprocure",
    logo: "https://placehold.co/200x80/transparent/2b204c?text=Iprocure",
    desc: "Advanced procurement automation platform simplifying supply chain management and vendor relationships for enterprise and government sectors.",
    sector: "SaaS",
    link: "#"
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#2b204c] to-[#1a1333] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link href="/about" className="text-white/60 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</Link>
              <span className="text-white/40">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 uppercase leading-none">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-cyan-400">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We build and back the next generation of deep tech giants. Explore the companies that are reshaping industries across the GCC and beyond.
            </p>
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
              <div key={i} className="text-center">
                <span className="block text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-1">{metric.value}</span>
                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setFilter(sector)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === sector 
                    ? "bg-[#8b68f6] text-white shadow-md" 
                    : "bg-white text-slate-500 border border-slate-200 hover:border-[#8b68f6] hover:text-[#8b68f6]"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredData.map((company) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={company.id}
                className="group bg-white rounded-lg border border-slate-100 p-6 md:p-8 hover:shadow-xl hover:border-[#8b68f6]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div className="h-16 mb-6 flex items-center justify-start">
                  <img src={company.logo} alt={`${company.name} Logo`} className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-[#F9FAFB] border border-slate-100 rounded text-[10px] font-bold text-[#8b68f6] uppercase tracking-wider mb-3">
                    {company.sector}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-3 group-hover:text-[#8b68f6] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-4">
                    {company.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold text-[#2b204c] uppercase tracking-widest">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-[#8b68f6]/10 flex items-center justify-center text-[#8b68f6]">
                    <ArrowRight size={14} />
                  </div>
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
          <Link href="/contact">
            <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
              Apply for Funding
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
