import { motion } from "framer-motion";
import { ArrowRight, Heart, Rocket, Users, Globe, Lightbulb, Target, Briefcase } from "lucide-react";
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

export default function Careers() {
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
              <Link href="/about" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Careers</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-none">
              Build the Future <br className="hidden md:block"/>
              <span className="text-stroke">With Us</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Join a team of passionate innovators, builders, and dreamers who are transforming the deep tech landscape across MENA and India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Risin */}
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Why Risin</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase leading-tight">
                More Than Just a Job
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 leading-relaxed">
                At Risin Ventures, you'll work alongside brilliant minds to build companies that matter. We offer an environment where innovation thrives and impact is measured in real-world change.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Rocket className="w-6 h-6" />, title: "High-Impact Work", desc: "Work on ventures that address real challenges in AI, IoT, and sustainability across emerging markets." },
              { icon: <Users className="w-6 h-6" />, title: "Collaborative Culture", desc: "Join a tight-knit team where everyone's voice matters and collaboration drives success." },
              { icon: <Globe className="w-6 h-6" />, title: "Global Exposure", desc: "Work with startups, investors, and partners across the GCC, India, and beyond." }
            ].map((item, i) => (
              <div key={i} className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100">
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

      {/* Culture Section */}
      <motion.section 
        className="py-16 md:py-20 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">How We Work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Move Fast", desc: "We bias toward action and iterate quickly to learn and adapt." },
              { title: "Think Big", desc: "We tackle ambitious challenges and aim for outsized impact." },
              { title: "Stay Humble", desc: "We listen, learn, and grow together as a team." },
              { title: "Own It", desc: "We take responsibility and see things through to completion." }
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 border-2 border-[#8b68f6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-bold text-white">{i + 1}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2 uppercase">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation", desc: "We embrace new ideas and push the boundaries of what's possible in deep tech.", color: "bg-[#8b68f6]" },
              { icon: <Target className="w-8 h-8" />, title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do.", color: "bg-[#2b204c]" },
              { icon: <Heart className="w-8 h-8" />, title: "Impact", desc: "We measure success by the positive change we create in the world.", color: "bg-[#952828]" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-20 h-20 ${item.color} rounded-sm flex items-center justify-center mx-auto mb-6 text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Current Openings</h2>
          </div>
          
          {/* Jobs Table */}
          <div className="bg-white rounded-sm border border-slate-100 overflow-hidden max-w-4xl mx-auto">
            <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-[#2b204c] text-white text-xs font-bold uppercase tracking-widest">
              <span>Position</span>
              <span>Department</span>
              <span>Location</span>
              <span>Type</span>
            </div>
            
            {/* Empty State */}
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-3 uppercase">No Open Positions</h3>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">
                We don't have any open positions at the moment, but we're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a href="mailto:careers@risin.ventures">
                <Button className="bg-[#8b68f6] hover:bg-[#2b204c] text-white rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all">
                  Send Your Resume
                </Button>
              </a>
            </div>
          </div>
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
            <Link href="/team">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Previous</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Meet the Team</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] rotate-180 transition-colors" />
              </a>
            </Link>
            <Link href="/partners">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Next</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Our Partners</h3>
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
