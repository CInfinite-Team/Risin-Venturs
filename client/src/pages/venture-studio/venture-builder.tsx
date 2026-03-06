import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Hammer, Briefcase, TrendingUp, Layers, Cpu, Cloud, Database, Code, Zap, Shield, Server, Box, Globe, Smartphone, CreditCard, Sparkles, Car, CheckCircle, Upload, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useFormSubmit } from "@/hooks/useFormSubmit";

import image1 from "@assets/20231119_125834_(2)_1768914492428.jpg";
import image2 from "@assets/7RV04162_1768914492429.JPG";

import awsLogo from "../../assets/PoweredByBest/AWS.png";
import dataikuLogo from "../../assets/PoweredByBest/Dataiku.png";
import googleCloudLogo from "../../assets/PoweredByBest/GoogleCloud.png";
import ibmLogo from "../../assets/PoweredByBest/IBM.png";
import microsoftLogo from "../../assets/PoweredByBest/MicroSoft.png";
import alteryxLogo from "../../assets/PoweredByBest/alteryx.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const techCapabilities = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Product Engineering",
    desc: "Full-cycle software development from MVP to enterprise-scale platforms."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI-First Architecture",
    desc: "Native integration of LLMs and machine learning models into core products."
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud-Native Systems",
    desc: "Scalable, resilient infrastructure built on AWS/Azure for global reach."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Intelligence",
    desc: "Advanced analytics and data pipelining for actionable insights."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "IoT Integration",
    desc: "Hardware-software bridging for connected smart city solutions."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    desc: "Bank-grade security and compliance implementation from day one."
  }
];

const partners = [
  { name: "AWS", logo: awsLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Google Cloud", logo: googleCloudLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Alteryx", logo: alteryxLogo },
  { name: "Dataiku", logo: dataikuLogo }
];

const currentBuilds = [
  {
    id: "hashecm",
    name: "hashECM",
    status: "Scaling",
    desc: "AI-driven document intelligence and enterprise content platform automating workflows for large organizations.",
    icon: <Server className="w-8 h-8 text-[#8b68f6]" />
  },
  {
    id: "nufin",
    name: "Nufin",
    status: "Stealth",
    desc: "New-age fintech and banking solution pursuing regulatory approval to redefine digital banking.",
    icon: <CreditCardIcon />
  },
  {
    id: "urbano",
    name: "Urbano",
    status: "In Build",
    desc: "AI & IoT-driven urban mobility platform connecting parking, EV charging, and multimodal travel.",
    icon: <Smartphone className="w-8 h-8 text-[#8b68f6]" />
  }
];

function CreditCardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b68f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
  )
}

// --- Application Form Logic (Simplified from BuildWithUs) ---

const ideaOptions = [
  {
    id: "hashecm",
    name: "Hashecm",
    tagline: "AI-Driven Document Intelligence",
    description: "Enterprise content collaboration platform with AI-powered document processing, intelligent search, and workflow automation.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-[#8b68f6]"
  },
  {
    id: "nufin",
    name: "Nufin",
    tagline: "Next-Gen Fintech Solutions",
    description: "Banking and financial services platform currently in stealth mode, pursuing CBO Qatar regulatory approval for innovative payment solutions.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-[#2b204c]"
  },
  {
    id: "urbano",
    name: "Urbano",
    tagline: "AI & IoT Urban Mobility",
    description: "Smart parking, valet services, car wash, EV charging, and multimodal ticketing—all powered by AI and IoT technology.",
    icon: <Car className="w-6 h-6" />,
    color: "bg-[#952828]"
  }
];

interface FormData {
  fullName: string;
  email: string;
  linkedin: string;
  selectedIdea?: string;
  role: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  linkedin: "",
  selectedIdea: "",
  role: "",
  message: ""
};

function ApplicationForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  isSubmitting,
  selectedVentureId
}: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
  onSubmit: () => void;
  isSubmitting: boolean;
  selectedVentureId?: string;
}) {
  const selectedVenture = ideaOptions.find(opt => opt.id === selectedVentureId);

  return (
    <div className="space-y-6 py-4">
      {selectedVenture && (
        <div className="bg-[#F9FAFB] p-4 rounded-sm border border-slate-100 flex items-start gap-4 mb-6">
          <div className={`w-10 h-10 ${selectedVenture.color} rounded-sm flex items-center justify-center text-white shrink-0`}>
            {selectedVenture.icon}
          </div>
          <div>
            <h4 className="font-bold text-[#2b204c] text-sm uppercase tracking-wider">Applying for: {selectedVenture.name}</h4>
            <p className="text-xs text-slate-500">{selectedVenture.tagline}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Full Name <span className="text-[#952828]">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Email <span className="text-[#952828]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            LinkedIn Profile <span className="text-[#952828]">*</span>
          </label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="linkedin.com/in/yourprofile"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Role Interest <span className="text-[#952828]">*</span>
          </label>
          <select
             value={formData.role}
             onChange={(e) => setFormData({ ...formData, role: e.target.value })}
             className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm bg-white"
          >
            <option value="">Select a role</option>
            <option value="engineering">Engineering / Tech</option>
            <option value="product">Product Management</option>
            <option value="growth">Growth / Marketing</option>
            <option value="operations">Operations</option>
            <option value="founder">Co-Founder</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Why this venture?
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly tell us why you're a good fit..."
            rows={3}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm resize-none"
          />
        </div>
      </div>

      <Button
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full bg-[#8b68f6] hover:bg-[#2b204c] text-white rounded-sm py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Submit Application"}
      </Button>
    </div>
  );
}

// LP Form Component
function LPInterestForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    investmentRange: "",
    geography: "",
    note: ""
  });
  const { isSubmitting: lpSubmitting, isSuccess: isSuccess, submit: lpSubmit } = useFormSubmit();

  const handleSubmit = async () => {
    await lpSubmit({
      formType: "LP Interest",
      fullName: formData.fullName,
      organization: formData.organization,
      email: formData.email,
      investmentRange: formData.investmentRange,
      geography: formData.geography,
      note: formData.note,
    });
  };

  if (isSuccess) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-[#2b204c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[#2b204c] mb-2">Interest Registered</h3>
        <p className="text-slate-600 mb-6">Thank you for expressing interest in partnering with Risin Venture Builder. Our Investment Relations team will review your profile and contact you regarding relevant allocation opportunities.</p>
        <Button onClick={onClose} className="bg-[#2b204c] text-white w-full uppercase tracking-widest font-bold">
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 py-2">
      <div className="bg-[#F9FAFB] p-4 border border-slate-100 rounded-sm mb-4">
        <p className="text-xs text-slate-500 italic">
          <span className="font-bold text-[#2b204c]">Disclaimer:</span> This inquiry form is for informational purposes only. It does not constitute an offer to sell or a solicitation of an offer to buy any securities. Access to investment opportunities is strictly limited to accredited investors and qualified purchasers.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Full Name <span className="text-[#952828]">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#2b204c] outline-none transition-all text-sm"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Organization / Fund <span className="text-[#952828]">*</span>
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#2b204c] outline-none transition-all text-sm"
            placeholder="e.g. Family Office, VC, Angel"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Business Email <span className="text-[#952828]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#2b204c] outline-none transition-all text-sm"
            placeholder="name@organization.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Geography <span className="text-[#952828]">*</span>
          </label>
          <input
            type="text"
            value={formData.geography}
            onChange={(e) => setFormData({ ...formData, geography: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#2b204c] outline-none transition-all text-sm"
            placeholder="Primary Region"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
          Target Allocation / Interest Range <span className="text-[#952828]">*</span>
        </label>
        <select
          value={formData.investmentRange}
          onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
          className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#2b204c] outline-none transition-all text-sm bg-white"
        >
          <option value="">Select Range</option>
          <option value="<500k">Under $500k</option>
          <option value="500k-1m">$500k - $1M</option>
          <option value="1m-5m">$1M - $5M</option>
          <option value="5m+">$5M+</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
          Inquiry Context (Optional)
        </label>
        <textarea
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          rows={2}
          className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#2b204c] outline-none transition-all text-sm resize-none"
          placeholder="Please specify if you are a strategic partner, family office, or institutional investor."
        />
      </div>

      <div className="pt-2">
        <Button 
          onClick={handleSubmit} 
          disabled={isSubmitting}
          className="w-full bg-[#2b204c] hover:bg-[#8b68f6] text-white rounded-sm py-4 font-bold uppercase tracking-widest text-xs transition-all"
        >
          {isSubmitting ? "Processing..." : "Submit Expression of Interest"}
        </Button>
        <p className="text-[10px] text-center text-slate-400 mt-3">
          By submitting this form, you certify that you are an accredited investor or qualified purchaser.
        </p>
      </div>
    </div>
  );
}

export default function VentureBuilder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLPModalOpen, setIsLPModalOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<string>("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { isSubmitting, isSuccess, submit } = useFormSubmit();

  // Slider refs and state
  const [activeTechCap, setActiveTechCap] = useState(0);
  const techCapSliderRef = useRef<HTMLDivElement>(null);
  const [activePlatform, setActivePlatform] = useState(0);
  const platformSliderRef = useRef<HTMLDivElement>(null);

  const openApplyModal = (ventureId: string) => {
    setSelectedVenture(ventureId);
    setFormData(prev => ({ ...prev, selectedIdea: ventureId }));
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    await submit({
      formType: "Venture Builder",
      fullName: formData.fullName,
      email: formData.email,
      linkedin: formData.linkedin,
      selectedIdea: formData.selectedIdea || "",
      role: formData.role,
      message: formData.message,
    });
    if (isSuccess) setIsModalOpen(false);
  };

  const handleTechCapScroll = () => {
    if (!techCapSliderRef.current) return;
    const scrollLeft = techCapSliderRef.current.scrollLeft;
    const cardWidth = techCapSliderRef.current.children[0]?.clientWidth || 0;
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / cardWidth);
      setActiveTechCap(index);
    }
  };

  const handlePlatformScroll = () => {
    if (!platformSliderRef.current) return;
    const scrollLeft = platformSliderRef.current.scrollLeft;
    const cardWidth = platformSliderRef.current.children[0]?.clientWidth || 0;
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / cardWidth);
      setActivePlatform(index);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* 1. New Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#2b204c] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-xl"
            >
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Venture Builder</span>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold text-white uppercase leading-none mb-6">
                Co-Building and <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-cyan-400">Scaling Ventures</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
                We combine capital, elite talent, and enterprise-grade execution to build the next generation of deep tech giants.
              </p>

              <Link href="/build-with-us">
                <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-10 py-6 h-auto font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
            </motion.div>

            {/* Venture Builder Network Graphic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex justify-center items-center h-[400px]"
            >
              <div className="relative w-full max-w-[320px] aspect-square flex justify-center items-center">
                {/* Background glow matrix */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b68f6]/20 to-cyan-400/10 rounded-full blur-3xl"></div>
                
                {/* Connecting lines SVG background */}
                <svg className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] opacity-20" viewBox="0 0 100 100">
                  <path d="M50 50 L15 25 M50 50 L85 25 M50 50 L50 90 M50 50 L15 75 M50 50 L85 75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-white" />
                </svg>

                {/* Outer rotating solid ring with glowing dots */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute w-80 h-80 border border-white/10 rounded-full"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                  <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 bg-[#8b68f6] rounded-full shadow-[0_0_10px_#8b68f6]"></div>
                </motion.div>

                {/* Outer rotating dashed ring */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 border border-cyan-400/20 rounded-full border-dashed"
                />

                {/* Central animated node */}
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.9, 1.05, 0.9] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-20 w-28 h-28 bg-gradient-to-br from-[#8b68f6] to-[#2b204c] rounded-2xl shadow-[0_0_30px_rgba(139,104,246,0.4)] border border-[#8b68f6]/50 flex items-center justify-center backdrop-blur-md"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1.5px] border-white/20 border-dashed rounded-2xl"
                  />
                  <Layers className="w-12 h-12 text-white drop-shadow-md z-10" />
                </motion.div>

                {/* Floating Tech Badges (Satellites) */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 left-0 p-3.5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl"
                >
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-10 -right-8 p-3.5 bg-white/5 backdrop-blur-md rounded-xl border border-[#8b68f6]/30 shadow-xl"
                >
                  <Code className="w-6 h-6 text-[#8b68f6]" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-8 -left-6 p-3.5 bg-[#8b68f6]/10 backdrop-blur-md rounded-xl border border-[#8b68f6]/20 shadow-xl"
                >
                  <Cpu className="w-6 h-6 text-purple-300" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute -bottom-8 right-10 p-3.5 bg-cyan-400/5 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-xl"
                >
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b68f6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      </section>

      {/* 2. Risin Ventures Fund Section (New) */}
      <section className="py-20 bg-[#F9FAFB] border-y border-slate-100">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-6">Risin Ventures Fund</h2>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        Bridging the gap between early-stage innovation and institutional scale. We don't just invest; we co-build, de-risk, and accelerate deep tech ventures through our integrated studio model.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Our fund provides the capital fuel while our studio provides the execution engine, creating a unique advantage for founders and investors alike.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { value: "8", label: "Startups Built" },
                        { value: "10+", label: "Markets Reached" },
                        { value: "85%", label: "Follow-on Success" },
                        { value: "$100M+", label: "Capital Enabled" }
                    ].map((metric, i) => (
                        <div key={i} className="bg-white p-4 md:p-6 rounded-sm border border-slate-100 shadow-sm">
                            <div className="text-2xl font-heading font-bold text-[#8b68f6] mb-2">{metric.value}</div>
                            <div className="text-xs font-bold text-[#2b204c] uppercase tracking-widest">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 3. In-House & Corporate Studio (Existing) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* In-House Studio */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                 <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-4">In-House Studio</h2>
                 <p className="text-slate-500 md:text-base text-sm leading-relaxed">
                   Our internal factory for deep tech startups. We identify white spaces in the market and deploy our own resources to capture them.
                 </p>
              </div>
              <div className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 flex-1 relative overflow-hidden group hover:border-[#2b204c]/30 transition-colors">
                <div className="relative z-10 space-y-8">
                  {[
                    { title: "Ideation", desc: "Rigorous validation of market problems." },
                    { title: "Build", desc: "MVP development with internal engineering teams." },
                    { title: "Scale", desc: "Capital injection and GTM execution." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-2xl font-bold text-[#2b204c]/20">0{i+1}</div>
                      <div>
                        <h4 className="font-bold text-[#2b204c] uppercase text-sm">{step.title}</h4>
                        <p className="text-xs text-slate-500">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Venture Studio */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                 <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-4">Corporate Studio</h2>
                 <p className="text-slate-500 leading-relaxed">
                   We help large enterprises build new revenue engines outside their core business, minimizing risk and maximizing agility.
                 </p>
              </div>
              <div className="bg-[#2b204c] p-4 md:p-8 rounded-sm text-white flex-1 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white uppercase mb-6">Why Corporate Venturing?</h3>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-[#8b68f6] mb-1">5x</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70">Faster GTM</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#8b68f6] mb-1">40%</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70">Lower Cost</div>
                    </div>
                  </div>
                  <Link href="/case-studies/corporate-venture-studios">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2b204c] uppercase tracking-widest font-bold text-xs w-full">
                      View Corporate Case Study
                    </Button>
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Domains We Actively Build (Moved & Updated) */}
      <section className="py-16 bg-[#F9FAFB] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h3 className="text-sm font-bold text-[#2b204c] uppercase tracking-widest mb-6">Domains we actively build and scale ventures in</h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Deep Tech",
                "AI (B2B)",
                "SaaS",
                "Smart City",
                "Climate Tech",
                "Sustainability",
                "IoT",
                "AIoT",
                "Mobility"
              ].map((domain, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full border border-[#8b68f6]/20 bg-white text-[#2b204c] font-medium text-sm hover:border-[#8b68f6] hover:bg-[#8b68f6]/5 hover:text-[#8b68f6] transition-all cursor-default shadow-sm"
                >
                  {domain}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Placeholder - Contextual (Moved here as separator) */}
      <section className="bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image1} 
              alt="Venture Building Team" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Technology Enablement (Existing) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Technology Enablement</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-6">
              Beyond Capital: <br/> Deep Technical Execution
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We provide deep technical support that goes far beyond mentorship. Our dedicated engineering and product teams build enterprise-grade infrastructure, ensuring your startup is scalable, secure, and ready for growth from day one.
            </p>
          </div>
          
          <div 
            ref={techCapSliderRef}
            onScroll={handleTechCapScroll}
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          >
            {techCapabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#F9FAFB] border border-slate-100 rounded-sm hover:border-[#8b68f6]/30 hover:shadow-lg transition-all group w-[85vw] sm:w-[320px] md:w-auto snap-center md:snap-align-none flex-shrink-0 md:flex-shrink"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-slate-100 flex items-center justify-center mb-6 text-[#2b204c] group-hover:text-[#8b68f6] transition-colors shadow-sm">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2b204c] uppercase mb-3">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-2 md:hidden mt-4">
            {techCapabilities.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (techCapSliderRef.current) {
                    const cardWidth = techCapSliderRef.current.children[0]?.clientWidth || 0;
                    techCapSliderRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTechCap === i ? "bg-[#8b68f6] w-6" : "bg-slate-200 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proprietary Platforms (NEW) */}
      <section className="py-20 scrollbar-hide bg-[#F9FAFB] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Product Acceleration</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-6">
              In-House Platforms
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our proprietary platforms and products dramatically accelerate development cycles, allowing our ventures to skip months of groundwork and focus on value creation from day one.
            </p>
          </div>

          <div 
            ref={platformSliderRef}
            onScroll={handlePlatformScroll}
            className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory md:snap-none"
          >
            {[
              {
                title: "Knower AI",
                desc: "An advanced AI platform that accelerates intelligent automation and data processing capabilities for our startups.",
                link: "https://hyperthinksys.com/knower-ai-platform/",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                title: "HyperThings IoT",
                desc: "A robust IoT platform enabling rapid deployment of connected devices and smart city solutions at scale.",
                link: "https://hyperthinksys.com/hyperthings-iot-platform/",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "LLM Applications",
                desc: "Enterprise-ready LLM frameworks that allow our ventures to integrate generative AI features securely and quickly.",
                link: "https://hyperthinksys.com/news-llm-application/",
                icon: <Sparkles className="w-8 h-8" />
              }
            ].map((platform, i) => (
              <motion.a 
                key={i}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm border border-slate-100 hover:shadow-xl hover:border-[#8b68f6]/30 transition-all group flex flex-col h-full w-[85vw] sm:w-[320px] md:w-auto snap-center md:snap-align-none flex-shrink-0 md:flex-shrink"
              >
                <div className="w-14 h-14 bg-[#F9FAFB] rounded-sm flex items-center justify-center text-[#2b204c] group-hover:text-[#8b68f6] group-hover:bg-[#8b68f6]/10 transition-colors mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2b204c] mb-3 group-hover:text-[#8b68f6] transition-colors">{platform.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {platform.desc}
                </p>
                <div className="flex items-center text-[#2b204c] text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform mt-auto">
                  Learn More <ArrowRight size={14} className="ml-2" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-2 md:hidden mt-4">
            {[0, 1, 2].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (platformSliderRef.current) {
                    const cardWidth = platformSliderRef.current.children[0]?.clientWidth || 0;
                    platformSliderRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activePlatform === i ? "bg-[#8b68f6] w-6" : "bg-slate-200 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OEM & Tech Partners (Existing) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/3">
               <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Powered by the Best</h3>
               <p className="text-slate-600 leading-relaxed mb-6">
                 Our OEM partnerships reduce build time, enable enterprise-grade scalability, and ensure security and compliance. We leverage the world's best tech stacks to give our ventures an unfair advantage.
               </p>
             </div>
             <div className="md:w-2/3">
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {partners.map((partner, i) => (
                   <div key={i} className="h-24 bg-[#F9FAFB] border border-slate-100 rounded-sm flex items-center justify-center p-4 hover:shadow-md hover:border-[#8b68f6]/30 transition-all">
                     <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Current Builds (Existing) */}
      <section className="py-20 bg-[#F9FAFB] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest mb-3 block">Portfolio Spotlight</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Currently Building</h2>
          </div>

          {/* Section Image for Context */}
          <div className="w-full h-[350px] bg-slate-100 rounded-sm relative overflow-hidden group mb-12">
            <img 
              src={image2} 
              alt="Team Collaborating" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
               <h3 className="text-white text-2xl md:text-3xl font-heading font-bold uppercase mb-2">From Stealth to Scale</h3>
               <p className="text-slate-200 max-w-xl">
                 Our portfolio companies are solving critical challenges in finance, urban mobility, and enterprise intelligence.
               </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentBuilds.map((build, i) => (
              <div key={i} className="bg-white p-8 rounded-sm border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group flex flex-col h-full">
                <div className="flex-1 flex flex-col">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8b68f6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-50 p-3 rounded-sm border border-slate-100">
                      {build.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      build.status === 'Scaling' ? 'bg-green-100 text-green-700' : 
                      build.status === 'Stealth' ? 'bg-slate-100 text-slate-700' : 
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {build.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2b204c] mb-3">{build.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {build.desc}
                  </p>
                  
                  <div 
                    onClick={() => openApplyModal(build.id)}
                    className="pt-6 border-t border-slate-50 flex items-center text-[#8b68f6] font-bold text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    Join Venture <ArrowRight size={14} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LP Allocation Section (Existing) */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="bg-[#2b204c]/5 border border-[#2b204c]/10 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#2b204c] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">Currently Raising</span>
                <span className="text-[#952828] text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#952828] rounded-full animate-pulse"></span>
                  Limited LP Allocation
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] mb-3 uppercase">
                Partner With the Venture Builder Shaping the Next Wave of Deep Tech
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-0">
                Gain early access to our high-growth portfolio. We offer limited allocation for strategic LPs and institutional partners seeking active deal flow and proven execution.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-3 shrink-0">
              <Dialog open={isLPModalOpen} onOpenChange={setIsLPModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] rounded-sm px-8 py-6 h-auto font-bold uppercase tracking-widest text-sm shadow-md transition-all whitespace-nowrap w-full md:w-auto">
                    Request LP Information
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-[#2b204c] font-heading font-bold text-xl uppercase">
                      Investment Interest
                    </DialogTitle>
                    <DialogDescription>
                      Complete the form below to receive information about our current fund allocation and LP opportunities.
                    </DialogDescription>
                  </DialogHeader>
                  <LPInterestForm onClose={() => setIsLPModalOpen(false)} />
                </DialogContent>
              </Dialog>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                By Invitation & Referral Only
              </p>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Primary CTA - Join a Venture */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-6">
            Have an idea or want to build with us?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10 text-lg">
            We are always looking for visionary founders and exceptional talent to join our next venture.
          </p>
          <Link href="/build-with-us">
            <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] rounded-sm px-12 py-6 font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transition-all">
              Build with us <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <JourneyNav 
        title="Our Portfolio"
        description="The proof is in the pudding. See the companies we've built, backed, and scaled across the region."
        link="/portfolio"
        cta="View Portfolio"
        accentColor="#8b68f6"
      />
      
      <Footer />
      <ScrollToTop />

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#2b204c] font-heading font-bold text-2xl uppercase">
              Join the Team
            </DialogTitle>
            <DialogDescription>
              We're looking for exceptional talent to build the future with us.
            </DialogDescription>
          </DialogHeader>

          {isSuccess ? (
             <div className="text-center py-10">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle size={32} />
               </div>
               <h3 className="text-2xl font-bold text-[#2b204c] mb-2">Application Received!</h3>
               <p className="text-slate-600 mb-6">Thanks for your interest in {ideaOptions.find(o => o.id === selectedVenture)?.name || "Risin Ventures"}. We'll review your profile and get back to you shortly.</p>
               <Button onClick={() => setIsModalOpen(false)} className="bg-[#2b204c] text-white w-full uppercase tracking-widest font-bold">
                 Close
               </Button>
             </div>
          ) : (
            <ApplicationForm 
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              selectedVentureId={selectedVenture}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
