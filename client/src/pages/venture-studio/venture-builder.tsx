import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Hammer, Briefcase, TrendingUp, Layers, Cpu, Cloud, Database, Code, Zap, Shield, Server, Box, Globe, Smartphone, CreditCard, Sparkles, Car, CheckCircle, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import image1 from "@assets/stock_images/modern_tech_office_t_5c1f97f1.jpg";
import image2 from "@assets/stock_images/modern_tech_office_t_9bd36b12.jpg";

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
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Alteryx", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alteryx_Logo.png" }, 
  { name: "Dataiku", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dataiku_Logo.svg" } 
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

export default function VentureBuilder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<string>("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openApplyModal = (ventureId: string) => {
    setSelectedVenture(ventureId);
    setFormData(prev => ({ ...prev, selectedIdea: ventureId }));
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

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
              <span className="w-8 h-0.5 bg-[#2b204c]"></span>
              <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest">Venture Builder</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-8 uppercase leading-none">
              Engineering <br/>
              <span className="text-stroke text-[#2b204c]">Success</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#2b204c] pl-6">
              We are a hands-on execution engine. We combine capital, elite talent, robust platforms, and enterprise technology to build market-defining companies from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholder - Contextual */}
      <section className="pb-16 bg-white">
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
      
      {/* Execution Focus (Existing) */}
      <section className="py-20 bg-[#F9FAFB] border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* In-House Studio */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                 <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-4">In-House Studio</h2>
                 <p className="text-slate-500 leading-relaxed">
                   Our internal factory for deep tech startups. We identify white spaces in the market and deploy our own resources to capture them.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-sm border border-slate-100 flex-1 relative overflow-hidden group hover:border-[#2b204c]/30 transition-colors">
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
              <div className="bg-[#2b204c] p-8 rounded-sm text-white flex-1 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold uppercase mb-6">Why Corporate Venturing?</h3>
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

      {/* Technology Enablement (NEW) */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCapabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#F9FAFB] border border-slate-100 rounded-sm hover:border-[#8b68f6]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-sm border border-slate-100 flex items-center justify-center mb-6 text-[#2b204c] group-hover:text-[#8b68f6] transition-colors shadow-sm">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2b204c] uppercase mb-3">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM & Tech Partners (NEW) */}
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
                   <div key={i} className="h-24 bg-[#F9FAFB] border border-slate-100 rounded-sm flex items-center justify-center p-6 hover:shadow-md transition-shadow">
                     <div className="text-slate-400 font-bold text-xl uppercase">{partner.name}</div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Current Builds (NEW) */}
      <section className="py-20 bg-[#F9FAFB] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest mb-3 block">Portfolio Spotlight</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Currently Building</h2>
          </div>

          {/* New Section Image for Context */}
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

      {/* Primary CTA - Join a Venture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-6">
            Have an idea or want to build with us?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10 text-lg">
            We are always looking for visionary founders and exceptional talent to join our next venture.
          </p>
          <Link href="/build-with-us">
            <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] rounded-sm px-12 py-6 font-bold uppercase tracking-widest text-sm shadow-lg hover:shadow-xl transition-all">
              Join a Venture <ArrowRight size={16} className="ml-2" />
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
