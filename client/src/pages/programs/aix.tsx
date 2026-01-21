import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Cpu, Lightbulb, Users, Trophy, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import image1 from "@assets/38_1768830312329.JPG";
import image2 from "@assets/2_1768830312328.JPG";
import image3 from "@assets/11_1768830312327.jpg";

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

const highlights = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Innovation",
    description: "Cutting-edge artificial intelligence solutions from the region's brightest minds"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Hackathon",
    description: "48-hour intensive building sprints with mentorship from industry experts"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Summit",
    description: "Connect with AI leaders, investors, and innovators from across MENA"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Awards",
    description: "Recognition and prizes for breakthrough AI solutions"
  }
];

const stats = [
  { value: "500+", label: "Participants" },
  { value: "50+", label: "AI Startups" },
  { value: "$100K+", label: "In Prizes" },
  { value: "30+", label: "Expert Mentors" }
];

export default function AIX() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-[#2b204c] via-[#1a1432] to-[#0f0a1f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8b68f6] rounded-full blur-[150px] opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">AIX Summit & Hackathon</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase leading-none">
              AIX Summit <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-cyan-400">&amp; Hackathon</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              The premier AI innovation event in the MENA region. Where breakthrough ideas meet world-class mentorship, funding, and the opportunity to shape the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.aixsummithack.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Visit Program Website <ExternalLink size={16} className="ml-2 inline" />
                </Button>
              </a>
              <Link href="/build-with-us">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Apply to Build
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#8b68f6] py-8">
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

      {/* Image Placeholder - Event Atmosphere */}
      <section className="py-16 bg-white pb-0">
        <div className="container mx-auto px-6">
          <div className="w-full h-[500px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image1} 
              alt="Main Summit Hall Atmosphere" 
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">About AIX</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-6 uppercase">
                Where AI Innovation Meets Opportunity
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                AIX Summit & Hackathon is the region's flagship AI innovation event, bringing together the brightest minds in artificial intelligence, machine learning, and deep tech. The event combines an intensive hackathon experience with a high-impact summit featuring thought leaders, investors, and industry pioneers.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you're a founder building the next breakthrough AI solution, an engineer looking to push boundaries, or an investor seeking the next big opportunity—AIX is where transformative connections happen.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar size={16} className="text-[#8b68f6]" />
                  <span>Annual Event</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="text-[#8b68f6]" />
                  <span>Qatar & MENA Region</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2b204c] to-[#8b68f6] rounded-sm p-8 md:p-12">
                <div className="text-white">
                  <h3 className="text-2xl font-heading font-bold mb-4 uppercase">Join the Movement</h3>
                  <p className="text-white/80 mb-6">Be part of the AI revolution. Apply now to participate in the next AIX Summit & Hackathon.</p>
                  <a href="https://www.aixsummithack.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#8b68f6] transition-colors bg-white/10 px-6 py-3 rounded-sm">
                    Learn More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Placeholder - Split Layout (Hackathon Vibe) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
               <img 
                 src={image2} 
                 alt="Hackathon Teams Coding" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
             </div>
             <div>
               <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">48 Hours of Creation</h3>
               <p className="text-slate-600 leading-relaxed">
                 Experience the energy of hundreds of developers, data scientists, and innovators building the future in real-time. Our hackathons are intense, collaborative, and designed to produce viable prototypes.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <motion.section 
        className="py-16 md:py-24 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">What to Expect</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Program Highlights</h2>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
            {highlights.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all group min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0"
              >
                <div className="w-14 h-14 bg-[#8b68f6]/10 rounded-sm flex items-center justify-center mb-6 text-[#8b68f6] group-hover:bg-[#8b68f6] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 uppercase">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Placeholder - Awards/Closing */}
      <section className="pb-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-white border border-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image3} 
              alt="Awards Ceremony & Winners" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
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
          <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Ready to Innovate?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">
            Join AIX Summit & Hackathon
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Whether you're building, investing, or exploring—AIX is your gateway to the future of AI in the MENA region.
          </p>
          <a href="https://www.aixsummithack.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
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
            <Link href="/news" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">News & Events</h3>
              <p className="text-slate-600 text-sm mb-4">Stay updated with latest developments</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
