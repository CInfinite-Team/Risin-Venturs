import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
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
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const advisors = [
  {
    name: "Dr. Amin Al-Yaqout",
    role: "Strategic Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Industry veteran with deep expertise in technology and venture building.",
    linkedin: "#"
  },
  {
    name: "Sarah Al-Mansoori",
    role: "Technical Advisor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in deep tech with extensive experience in AI and deeptech.",
    linkedin: "#"
  },
  {
    name: "Khalid Al-Thani",
    role: "Investment Advisor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Seasoned investor with a track record of successful exits in MENA region.",
    linkedin: "#"
  },
  {
    name: "Noura Al-Kaabi",
    role: "Ecosystem Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Ecosystem builder with connections across GCC startup communities.",
    linkedin: "#"
  }
];

const teamMembers = [
  {
    name: "Awdesh Chetal",
    role: "Chief Executive Officer",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Awdesh.jpg",
    bio: "Serial entrepreneur who has run and grown technology companies successfully. Currently CEO of Hyperthink, a 200+ strong Enterprise technology and IoT products firm.",
    linkedin: "https://www.linkedin.com/in/awdeshc/"
  },
  {
    name: "Rohith K R",
    role: "Programs Director",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Rohith.jpg",
    bio: "Engineer and entrepreneur with over 20 years of diverse experience in business strategy, operational excellence, and team leadership. Proven track record of 5 to 10X growth.",
    linkedin: "https://www.linkedin.com/in/rohith-kr/"
  },
  {
    name: "Mohammed Rabie",
    role: "Programs Manager",
    image: "https://risin.ventures/wp-content/uploads/2024/07/Rabie-e1720692818485-768x770.jpg",
    bio: "Experienced Business Consultant, Mentor, and Training Specialist with over 17 years in fostering entrepreneurship and managing incubation and acceleration programs.",
    linkedin: "https://www.linkedin.com/in/mohamed-rabie-69434a2a/"
  },
  {
    name: "Janasri Reshika",
    role: "Startups Coordinator",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Janasri-1.jpg",
    bio: "Instrumental in organizing a GCC-based challenge for tech startups. Specialized in market research, startup feasibility, and relationship building.",
    linkedin: "https://www.linkedin.com/in/janasri-reshika-484031141/"
  }
];

export default function Team() {
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
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/about" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Team</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-heading font-bold text-[#111827] uppercase leading-none">
                THE PEOPLE BUILDING <br className="hidden md:block"/>
                <span className="text-[#2b204c]">THE FUTURE</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-[#8b68f6]/20 pl-6 lg:mt-4">
                A diverse team of entrepreneurs, engineers, and ecosystem builders dedicated to transforming ideas into impactful ventures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Description */}
      <motion.section 
        className="py-12 md:py-16 bg-white border-b border-slate-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#8b68f6]/5 to-[#2b204c]/5 rounded-sm p-8 md:p-12 border border-[#8b68f6]/10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] mb-6 uppercase">
                We Complement Each Other
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                At Risin, we're more than colleagues—we're a team that genuinely enjoys working together. Our diverse backgrounds and complementary skills create a dynamic where strategy meets execution, and creativity meets discipline.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                We bring decades of combined experience solving real-world problems using innovation tools—from AI and IoT to deeptech and beyond. But what truly sets us apart is the fun we have while doing it.
              </p>
              <p className="text-[#2b204c] font-bold text-lg">
                We are builders of startups. We are builders of communities. <span className="text-[#8b68f6]">This is Risin.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Grid */}
      <motion.section 
        className="py-10 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#F9FAFB] rounded-sm overflow-hidden border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b204c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#2b204c] hover:bg-[#8b68f6] hover:text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-1 uppercase">{member.name}</h3>
                  <span className="text-[#8b68f6] text-xs font-bold uppercase tracking-widest block mb-3">{member.role}</span>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Advisors Section */}
      {/* <motion.section 
        className="py-10 md:py-16 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Guidance</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Our Advisors</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Industry leaders who guide our strategic direction and bring invaluable expertise to our ventures.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advisors.map((advisor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b204c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {advisor.linkedin !== "#" && (
                    <a 
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#2b204c] hover:bg-[#8b68f6] hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-1 uppercase">{advisor.name}</h3>
                  <span className="text-[#8b68f6] text-xs font-bold uppercase tracking-widest block mb-3">{advisor.role}</span>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{advisor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Join the Team CTA */}
      <motion.section 
        className="py-10 md:py-16 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">Want to Join Our Team?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            We're always looking for passionate individuals who want to make an impact in the deep tech ecosystem.
          </p>
          <Link href="/careers">
            <a>
              <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all">
                View Open Positions <ArrowRight size={16} className="ml-2 inline" />
              </Button>
            </a>
          </Link>
        </div>
      </motion.section>

      {/* Cross-links */}
      <motion.section 
        className="py-10 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/about">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Previous</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">About Us</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] rotate-180 transition-colors" />
              </a>
            </Link>
            <Link href="/careers">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Next</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Careers</h3>
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
