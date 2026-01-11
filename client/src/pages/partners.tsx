import { motion } from "framer-motion";
import { ArrowRight, Handshake, TrendingUp, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const partnerLogos = {
  investors: [
    "https://risin.ventures/wp-content/uploads/2024/06/logo-23.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-24.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-25.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-26.png"
  ],
  ecosystem: [
    "https://risin.ventures/wp-content/uploads/2024/06/logo-1.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-2.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-3.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-4.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-5.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-6.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-7.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-8.png"
  ],
  gtm: [
    "https://risin.ventures/wp-content/uploads/2024/06/logo-9.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-10.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-11.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-12.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-13.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-14.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-15.png",
    "https://risin.ventures/wp-content/uploads/2024/06/logo-16.png"
  ]
};

export default function Partners() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/about"><a className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</a></Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Partners</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-none">
              Empowering & <br className="hidden md:block"/>
              <span className="text-stroke">Enabling</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Strategic partnerships that power our ecosystem. Together, we're building the future of deep tech innovation across the MENA region and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Partnership</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase leading-tight">
                Why Partner With Us?
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 leading-relaxed">
                We focus on finding synergies between emerging ideas and stellar teams. We fine-tune each innovation program to enable corporate/startup collaboration.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, title: "New Revenue Lines", desc: "Discover new business opportunities through cutting-edge startup innovations." },
              { icon: <Building2 className="w-6 h-6" />, title: "Customer Solutions", desc: "Provide innovative solutions for your customers through startup partnerships." },
              { icon: <Handshake className="w-6 h-6" />, title: "Innovation Insights", desc: "Stay ahead of competition by innovating faster with our ecosystem." }
            ].map((item, i) => (
              <div key={i} className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 hover:border-[#8b68f6]/30 transition-colors">
                <div className="w-12 h-12 bg-[#8b68f6]/10 rounded-sm flex items-center justify-center mb-6 text-[#8b68f6]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Investors */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#952828] text-sm font-bold uppercase tracking-widest mb-3 block">Capital Partners</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Our Investors</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerLogos.investors.map((logo, i) => (
              <div key={i} className="bg-white p-8 rounded-sm border border-slate-100 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow">
                <img src={logo} alt={`Investor ${i + 1}`} className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ecosystem Partners */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Innovation Network</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Ecosystem Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerLogos.ecosystem.map((logo, i) => (
              <div key={i} className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow">
                <img src={logo} alt={`Ecosystem Partner ${i + 1}`} className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* GTM Partners */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest mb-3 block">Market Access</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">GTM Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerLogos.gtm.map((logo, i) => (
              <div key={i} className="bg-white p-8 rounded-sm border border-slate-100 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow">
                <img src={logo} alt={`GTM Partner ${i + 1}`} className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partner CTA */}
      <motion.section 
        className="py-16 md:py-20 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Join Our Network</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">Interested in Partnering?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            We're always looking for strategic partners who share our vision for innovation. Let's explore how we can create value together.
          </p>
          <Link href="/contact?from=partner">
            <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all">
              Get in Touch <ArrowRight size={16} className="ml-2 inline" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Cross-links */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/careers">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Previous</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Careers</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] rotate-180 transition-colors" />
              </a>
            </Link>
            <Link href="/case-studies">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Next</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Case Studies</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] transition-colors" />
              </a>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
