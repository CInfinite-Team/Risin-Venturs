import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Lightbulb, Users, Globe, Zap, CheckCircle } from "lucide-react";
import { Link } from "wouter";
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

export default function About() {
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
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-none">
              Building the Future of <br className="hidden md:block"/>
              <span className="text-stroke">Deep Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Risin Ventures is a MENA & India-focused venture studio and investment firm. We help exceptional founders build category-defining companies in AI, IoT, and Blockchain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Company Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Company</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-6 uppercase">
                Where Capital Meets Engineering
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Risin Ventures Studio is a MENA-based private Venture Studio and Incubation support services firm. We help top-quality startups, investors, and global businesses discover and engage with each other, blending platforms, practices, and people.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We support entrepreneurship ventures through Startup Incubator/Accelerator Programs, funding, training, mentorship, and connection to the regional and global tech innovation ecosystem. We create an environment that fosters innovation and collaboration.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/team">
                  <a className="text-sm font-bold text-[#2b204c] hover:text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 transition-colors">
                    Meet the Team <ArrowRight size={14} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2b204c] to-[#8b68f6] rounded-sm overflow-hidden relative">
                <img 
                  src="https://risin.ventures/wp-content/uploads/2024/06/46-1024x768.jpeg" 
                  alt="Risin Ventures Team"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b204c]/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 md:p-10 rounded-sm border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-[#8b68f6]/10 rounded-sm flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#8b68f6]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 uppercase">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the leading catalyst for deep tech innovation in the MENA region and beyond, creating impactful solutions that drive sustainable growth and technological advancement.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-sm border border-slate-100 shadow-sm">
              <div className="w-12 h-12 bg-[#952828]/10 rounded-sm flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#952828]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 uppercase">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Fostering innovation, creating impactful solutions, and maintaining high standards of excellence. Through strategic collaborations and comprehensive support, we empower entrepreneurs to build a thriving tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Ecosystem Section */}
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Innovation Network</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase leading-tight">
                An Ecosystem of Innovation
              </h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-slate-600 leading-relaxed">
                We work with corporates and startups across verticals including Industrial, Manufacturing, Healthcare, Fintech, Deep Tech (IoT, AI), and more. Today, we look at this portfolio as an ecosystem of solutions.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Lightbulb className="w-6 h-6" />, label: "Innovation Labs" },
              { icon: <Users className="w-6 h-6" />, label: "Mentor Network" },
              { icon: <Globe className="w-6 h-6" />, label: "Global Reach" },
              { icon: <Zap className="w-6 h-6" />, label: "Deep Tech Focus" }
            ].map((item, i) => (
              <div key={i} className="bg-[#F9FAFB] p-6 rounded-sm text-center border border-slate-100 hover:border-[#8b68f6]/30 transition-colors">
                <div className="w-12 h-12 bg-[#2b204c] rounded-sm flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-[#2b204c] uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-16 md:py-20 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Advantage</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">Why Choose Risin Ventures</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Deep Industry Expertise", desc: "Decades of combined experience in building and scaling technology companies across MENA and India." },
              { title: "Hands-On Approach", desc: "We don't just invest—we co-build. Our team works alongside founders to navigate challenges and accelerate growth." },
              { title: "Strategic Network", desc: "Access to a curated network of investors, enterprises, and ecosystem partners across the GCC and beyond." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10">
                <CheckCircle className="w-8 h-8 text-[#8b68f6] mb-4" />
                <h3 className="text-lg font-heading font-bold text-white mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Cross-links Section */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Continue Your Journey</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Meet the Team", desc: "The people behind Risin Ventures", link: "/team", color: "bg-[#8b68f6]" },
              { title: "Our Partners", desc: "Strategic partners powering our ecosystem", link: "/partners", color: "bg-[#2b204c]" },
              { title: "Case Studies", desc: "See how we build ventures from the ground up", link: "/case-studies", color: "bg-[#952828]" }
            ].map((item, i) => (
              <Link key={i} href={item.link}>
                <a className="group block p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                  <div className={`w-2 h-12 ${item.color} rounded-sm mb-6`}></div>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                    Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
