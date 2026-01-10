import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

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
    name: "Jenita Robert",
    role: "Project Specialist",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Photo-Jenita-Robert-1.jpg",
    bio: "Project management professional with over 5 years of experience, demonstrating a commitment to excellence. Proven track record in successfully managing projects.",
    linkedin: "https://www.linkedin.com/in/jenitarobert/"
  },
  {
    name: "Saja Abdelwahab",
    role: "Startups Specialist",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Saja-1.jpg",
    bio: "Results-driven Business Development Consultant with extensive experience in legal, startup, and social enterprise sectors. Proven success in fostering entrepreneurial development.",
    linkedin: "https://www.linkedin.com/in/saja-abdelwahab/"
  },
  {
    name: "Janasri Reshika",
    role: "Startups Coordinator",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Janasri-1.jpg",
    bio: "Instrumental in organizing a GCC-based challenge for tech startups. Specialized in market research, startup feasibility, and relationship building.",
    linkedin: "https://www.linkedin.com/in/janasri-reshika-484031141/"
  },
  {
    name: "Samruddhi Gharpure",
    role: "PMO Innovation Consultant",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Photo-Samruddhi-1.jpg",
    bio: "Dynamic project management professional, with a proven record of leading teams. Recognized for implementing effective communication strategies and risk management.",
    linkedin: "https://www.linkedin.com/in/samruddhigharpure/"
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
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/about"><a className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</a></Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-none">
              The People Behind <br className="hidden md:block"/>
              <span className="text-stroke">Risin Ventures</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              A diverse team of entrepreneurs, engineers, and ecosystem builders dedicated to transforming ideas into impactful ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
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

      {/* Join the Team CTA */}
      <motion.section 
        className="py-16 md:py-20 bg-[#2b204c]"
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
        className="py-16 md:py-20 bg-white"
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
    </div>
  );
}
