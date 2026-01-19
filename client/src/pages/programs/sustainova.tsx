import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Leaf, Globe, Handshake, Award, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

import image1 from "@assets/DSC_0570_1768830927689.jpg";
import image2 from "@assets/DSC_0559_1768830927689.jpg";
import image3 from "@assets/1-(87_of_88)_(1)_1768830927690.jpg";

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

const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Visibility",
    description: "Showcase your vision to sustainability activists, experts, enterprise stakeholders, and the VC community"
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Networking",
    description: "Meet industry experts, investors, and visionary entrepreneurs to create powerful partnerships"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Investment",
    description: "Pitch innovative solutions to investors and secure funding opportunities"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Recognition",
    description: "Gain recognition for groundbreaking sustainability solutions across the GCC"
  }
];

const stats = [
  { value: "6", label: "GCC Countries" },
  { value: "500+", label: "Applications" },
  { value: "15", label: "Finalists" },
  { value: "50+", label: "Speakers" }
];

const countries = ["Bahrain", "Qatar", "Kuwait", "UAE", "KSA", "Oman"];

export default function Sustainova() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-300 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-emerald-300/70 text-sm font-bold uppercase tracking-widest">Programs</span>
              <span className="text-emerald-500/50">/</span>
              <span className="text-emerald-300 text-sm font-bold uppercase tracking-widest">Sustainova Challenge</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase leading-none">
              Sustainova <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Challenge</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/80 leading-relaxed max-w-2xl mb-8">
              Empowering innovations for a sustainable tomorrow. A platform for sustainability-focused startups across the Middle East to showcase technology and solutions that drive positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://sustainovachallenge.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-500 hover:bg-white hover:text-emerald-900 text-white rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Visit Program Website <ExternalLink size={16} className="ml-2 inline" />
                </Button>
              </a>
              <Link href="/contact?from=partner">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-emerald-600 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Placeholder - Full Width Event */}
      <section className="py-16 bg-white pb-0">
        <div className="container mx-auto px-6">
          <div className="w-full h-[500px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image1} 
              alt="Sustainova Summit Audience" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3 block">About Sustainova</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-6 uppercase">
                Driving Sustainable Development
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Sustainova Challenge provides a platform for sustainability-focused startups in the Middle East to showcase their technology and solutions, enabling enterprises to contribute to sustainable development.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The platform empowers sustainable innovation by recognizing groundbreaking startups, facilitating deals and enterprise connections, building awareness, and supporting the UN Sustainable Development Goals (SDGs). Through these efforts, Sustainova fosters a collaborative ecosystem that drives positive change.
              </p>
              <div className="flex items-center gap-3">
                <Leaf className="text-emerald-600" size={20} />
                <span className="text-slate-600 text-sm">Aligned with UN SDGs</span>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-sm p-8 border border-emerald-100">
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-6 uppercase">Coverage Across GCC</h3>
                <div className="flex flex-wrap gap-3">
                  {countries.map((country, i) => (
                    <span key={i} className="px-4 py-2 bg-white rounded-sm text-sm font-bold text-emerald-700 border border-emerald-200">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Placeholder - Split Layout (Innovation Showcase) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Showcasing Impact</h3>
               <p className="text-slate-600 leading-relaxed">
                 From renewable energy solutions to waste management innovations, our finalists present tangible technologies that address the region's most pressing environmental challenges.
               </p>
             </div>
             <div className="h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
               <img 
                 src={image2} 
                 alt="Startup Exhibition / Demo" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <motion.section 
        className="py-16 md:py-24 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3 block">Why Apply</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Benefits for Startups</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-emerald-300 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-sm flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">How It Works</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { step: "01", title: "Apply", desc: "Submit your sustainability-focused startup application" },
                { step: "02", title: "Pitch", desc: "Present your ideas to industry veterans and experts" },
                { step: "03", title: "Compete", desc: "Compete against the best startups from across the region" },
                { step: "04", title: "Win", desc: "Gain recognition, funding, and partnership opportunities" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 bg-[#F9FAFB] rounded-sm border border-slate-100">
                  <div className="text-4xl font-heading font-bold text-emerald-200">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#2b204c] uppercase mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Placeholder - Awards Moment */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image3} 
              alt="Finalists on Stage" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-20 bg-gradient-to-br from-emerald-900 to-teal-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <Globe className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">
            Ready to Make an Impact?
          </h2>
          <p className="text-emerald-100/80 max-w-xl mx-auto mb-8">
            Join the movement towards a sustainable future. Apply to the Sustainova Challenge and showcase your innovation.
          </p>
          <a href="https://sustainovachallenge.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-emerald-500 hover:bg-white hover:text-emerald-900 text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
              Explore the Challenge <ExternalLink size={16} className="ml-2 inline" />
            </Button>
          </a>
        </div>
      </motion.section>

      {/* Related Content */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Continue Your Journey</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">Case Studies</h3>
              <p className="text-slate-600 text-sm mb-4">See the impact of our programs in action</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                View Stories <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/build-with-us" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">Venture Studio</h3>
              <p className="text-slate-600 text-sm mb-4">Build your startup with our support</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/partners" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">Our Partners</h3>
              <p className="text-slate-600 text-sm mb-4">Meet our ecosystem partners</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                View Partners <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
