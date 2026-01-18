import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Globe, TrendingUp, Handshake, Users, Calendar, MapPin, Building2, Rocket, Zap, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const sectors = [
  "AI (B2B)", "Fintech", "SaaS", "Deep Tech", 
  "Climate Tech", "HealthTech", "IoT", "Smart Cities"
];

const highlights = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Ecosystem Engagement",
    description: "Deep dive into the Qatar & GCC innovation ecosystem with guided tours and intros."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "VC Pitch Sessions",
    description: "Exclusive opportunities to pitch to regional VCs and angel investors."
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "High-Impact Networking",
    description: "Curated networking events with key stakeholders and potential partners."
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Strategic Partnerships",
    description: "Connect with government entities and major enterprises for pilots and POCs."
  }
];

const partners = [
  "https://risin.ventures/wp-content/uploads/2024/06/logo-23.png",
  "https://risin.ventures/wp-content/uploads/2024/06/logo-1.png",
  "https://risin.ventures/wp-content/uploads/2024/06/logo-9.png", 
  "https://risin.ventures/wp-content/uploads/2024/06/logo-24.png",
  "https://risin.ventures/wp-content/uploads/2024/06/logo-2.png"
];

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[#2b204c] mb-2">Registration Received!</h3>
        <p className="text-slate-600">Thank you for your interest in the GCC GTM Program. Our team will review your application and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4 py-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Work Email</Label>
        <Input id="email" type="email" placeholder="john@company.com" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startupName">Startup Name</Label>
          <Input id="startupName" placeholder="Acme Inc." required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website URL</Label>
          <Input id="website" placeholder="https://..." required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sector">Sector</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select your primary sector" />
          </SelectTrigger>
          <SelectContent>
            {sectors.map(sector => (
              <SelectItem key={sector} value={sector.toLowerCase().replace(/\s/g, '-')}>{sector}</SelectItem>
            ))}
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pitchDeck">Link to Pitch Deck</Label>
        <Input id="pitchDeck" placeholder="Dropbox / Google Drive link" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Why are you interested in Qatar & GCC Market?</Label>
        <Textarea id="message" placeholder="Briefly describe your expansion goals..." className="min-h-[100px]" />
      </div>

      <Button type="submit" className="w-full bg-[#8b68f6] hover:bg-[#7a5bd6] text-white font-bold py-6 uppercase tracking-widest mt-4">
        Submit Application
      </Button>
    </form>
  );
};

export default function GTM() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8b68f6] rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-10"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Programs</span>
              <span className="text-slate-500">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Go-To-Market – Qatar & GCC</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase leading-none">
              Your Gateway to <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-cyan-400">Qatar & GCC Market Access</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              A specialized market access program designed to help high-growth tech companies expand into Qatar and the wider GCC region through strategic partnerships, investor connections, and expert guidance.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {sectors.map((sector, i) => (
                <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  {sector}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                    Apply for GTM Program <ArrowRight size={16} className="ml-2 inline" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#2b204c] uppercase">Apply for GTM Program</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to register your interest for the upcoming cohort.
                    </DialogDescription>
                  </DialogHeader>
                  <RegistrationForm />
                </DialogContent>
              </Dialog>
              
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Timeline Bar */}
      <section className="bg-[#8b68f6] py-6 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Calendar className="text-white w-6 h-6" />
              <div>
                <span className="block text-white/70 text-xs font-bold uppercase tracking-widest">Program Dates</span>
                <span className="text-white font-bold text-lg">1st - 4th Feb, 2026</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <MapPin className="text-white w-6 h-6" />
              <div>
                <span className="block text-white/70 text-xs font-bold uppercase tracking-widest">Location</span>
                <span className="text-white font-bold text-lg">Doha, Qatar</span>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <Rocket className="text-white w-6 h-6" />
              <div>
                <span className="block text-white/70 text-xs font-bold uppercase tracking-widest">Format</span>
                <span className="text-white font-bold text-lg">In-Person Immersion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Why Join?</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Program Value</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="bg-[#F9FAFB] p-8 md:p-10 rounded-sm border border-slate-100 hover:border-[#8b68f6]/30 transition-all">
              <h3 className="text-2xl font-heading font-bold text-[#2b204c] mb-6 uppercase flex items-center gap-3">
                <span className="w-10 h-10 bg-[#8b68f6]/10 text-[#8b68f6] rounded-full flex items-center justify-center text-sm">01</span>
                Selected Startups Gain
              </h3>
              <ul className="space-y-4">
                {[
                  "Direct access to key decision-makers & investors",
                  "Curated 1:1 B2B & B2G meetings",
                  "Exposure to VC funds aligned with GCC growth priorities",
                  "Market-entry insights tailored to Qatar & the GCC",
                  "Startup pod + 4 days access to Web Summit Qatar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#8b68f6] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Highlights */}
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#2b204c] text-white rounded-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#2b204c] mb-2 uppercase">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Partners Strip */}
      <section className="py-12 bg-[#F9FAFB] border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-[#2b204c] text-xs font-bold uppercase tracking-widest">Ecosystem & Partners</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((logo, i) => (
              <img key={i} src={logo} alt="Partner Logo" className="h-12 w-auto object-contain mix-blend-multiply" />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Program Strip */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#2b204c] rounded-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-start gap-2 text-left">
                <span className="bg-[#952828] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                  Ongoing Program
                </span>
                <h4 className="font-heading font-bold text-xl md:text-2xl text-white uppercase">
                  SustAInova Roadshow – Doha
                </h4>
                <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#8b68f6]" /> 21st Jan 2026</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#8b68f6]" /> QSTP, Doha</span>
                </div>
              </div>
              
              <a 
                href="https://sustainovachallenge.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white transition-all px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest flex items-center gap-2 whitespace-nowrap"
              >
                RSVP Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-20 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Take the Next Step</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">
            Ready to Expand to the GCC?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Don't miss this opportunity to accelerate your market entry and connect with the region's leading ecosystem players.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
                  Register Interest <ArrowRight size={16} className="ml-2 inline" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-[#2b204c] uppercase">Apply for GTM Program</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to register your interest for the upcoming cohort.
                  </DialogDescription>
                </DialogHeader>
                <RegistrationForm />
              </DialogContent>
            </Dialog>
            <Link href="/contact">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
