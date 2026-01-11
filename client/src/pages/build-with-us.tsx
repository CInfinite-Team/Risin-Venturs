import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Users, Rocket, CheckCircle, Cpu, Banknote, Leaf, Network, Target, Zap, Building2, ChevronRight } from "lucide-react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

export default function BuildWithUs() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#2b204c] to-[#1a1432] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b68f6] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#952828] rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Venture Builder</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase leading-none">
              Growing Potential Ideas Into <br className="hidden md:block"/>
              <span className="text-[#8b68f6]">Stellar Ventures</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Risin Ventures partners with visionary founders to co-create startups that are investor-ready—from ideation through validation to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://risin.ventures/venture-builder/#get-in-touch-form" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-8 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Apply to Build <ArrowRight size={16} className="ml-2 inline" />
                </Button>
              </a>
              <Link href="/case-studies">
                <a>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                    View Case Studies
                  </Button>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* What is Venture Builder */}
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-tight">
                Venture Builder at Risin Ventures
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our Venture Builder is a hands-on engine for turning bold ideas into scalable businesses. Centered around a thesis of deep-tech enablement, founder empowerment, and network-driven growth, we partner with visionary founders to co-create startups that are investor-ready.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We combine a structured venture-studio methodology with agile execution: we ideate and test multiple concepts in parallel, dedicate cross-functional teams, deploy smart capital, and leverage our ecosystem of mentors, domain experts, and investors to de-risk early-stage ventures.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-[#2b204c] font-bold">
                  <CheckCircle size={16} className="text-[#8b68f6]" />
                  <span>Shared Resources</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2b204c] font-bold">
                  <CheckCircle size={16} className="text-[#8b68f6]" />
                  <span>Proven Playbooks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2b204c] font-bold">
                  <CheckCircle size={16} className="text-[#8b68f6]" />
                  <span>High-Impact Network</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img 
                  src="https://risin.ventures/wp-content/uploads/2025/05/96A2947-768x512.jpg" 
                  alt="Venture Building Session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#2b204c] p-6 rounded-sm hidden md:block">
                <div className="text-4xl font-heading font-bold text-white mb-1">20+</div>
                <div className="text-xs text-slate-300 uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Approach - 3 Steps */}
      <motion.section 
        className="py-16 md:py-24 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              Our Venture Building Approach
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't just invest in companies—we build them from the ground up, combining our expertise with proven methodologies to create lasting impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Lightbulb className="w-8 h-8" />, 
                step: "01", 
                title: "Ideation", 
                desc: "We identify market opportunities and validate innovative solutions through deep research and analysis. Multiple concepts are tested in parallel to find the best fit.",
                color: "bg-[#8b68f6]"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                step: "02", 
                title: "Team Building", 
                desc: "We assemble world-class teams of entrepreneurs, operators, and domain experts to execute on the vision. Cross-functional support at every stage.",
                color: "bg-[#2b204c]"
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                step: "03", 
                title: "Execution", 
                desc: "We provide hands-on support, capital, and strategic guidance to scale companies from zero to market leaders. Access to investors and acquisition paths.",
                color: "bg-[#952828]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-sm border border-slate-100 hover:shadow-xl hover:border-[#8b68f6]/30 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-[120px] font-heading font-bold text-slate-50 leading-none -translate-y-4 translate-x-4 select-none">
                  {item.step}
                </div>
                <div className={`w-16 h-16 ${item.color} rounded-sm flex items-center justify-center mb-6 text-white relative z-10`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 uppercase relative z-10">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Connection line for desktop */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-20 h-0.5 bg-slate-200"></div>
              <ChevronRight size={20} />
              <div className="w-20 h-0.5 bg-slate-200"></div>
              <ChevronRight size={20} />
              <div className="w-20 h-0.5 bg-slate-200"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Investment Thesis */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#952828] text-sm font-bold uppercase tracking-widest mb-3 block">Investment Focus</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              Our Thesis
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Risin Ventures funds startups in the Middle East & India and builds products in AI, IoT, cloud and edge for B2B/enterprise—leveraging our deep tech team, 1000+ entrepreneurs network, and 20+ years of experience in building multi-million dollar technology ventures.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Cpu className="w-10 h-10" />, 
                title: "Deep Tech", 
                desc: "IoT and AI are transforming industries through automation, intelligent systems, and data-driven insights. We back foundational technologies that drive efficiency and innovation across sectors.",
                image: "https://risin.ventures/wp-content/uploads/2025/06/deeptech-300x300.webp"
              },
              { 
                icon: <Banknote className="w-10 h-10" />, 
                title: "Fintech", 
                desc: "Fintech is redefining access to capital and financial services, especially in emerging markets. Our focus is on ventures building inclusive, efficient, and scalable financial infrastructure.",
                image: "https://risin.ventures/wp-content/uploads/2025/06/fintech-300x300.png"
              },
              { 
                icon: <Leaf className="w-10 h-10" />, 
                title: "Sustainability", 
                desc: "With climate change and resource challenges accelerating, sustainability is both a market need and a global priority. We invest in solutions that promote clean energy and long-term resilience.",
                image: "https://risin.ventures/wp-content/uploads/2025/06/sustainability-300x300.png"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Build With Us */}
      <motion.section 
        className="py-16 md:py-24 bg-[#2b204c] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b68f6] opacity-10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase leading-tight">
                Why Build With Risin Ventures?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Shared Resources & Infrastructure", desc: "Access to technology, talent, and operational support without the overhead." },
                  { title: "Proven Playbooks", desc: "Battle-tested frameworks for product development, GTM, and fundraising." },
                  { title: "Flexible Team Support", desc: "Cross-functional experts who plug in when and where you need them." },
                  { title: "High-Impact Network", desc: "Direct access to mentors, domain experts, investors, and enterprise partners." },
                  { title: "Smart Capital", desc: "Strategic funding designed to accelerate product-market fit and prepare for scale." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#8b68f6] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">1000+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Entrepreneurs Network</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">$50M+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Ventures Built</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">20+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Portfolio Companies</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Founder Journey */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              The Founder Experience
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you're at ideation, MVP, or early revenue—we meet you where you are and help you get where you need to go.
            </p>
          </div>
          
          {/* Journey Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-0.5"></div>
            
            {[
              { stage: "Ideation", desc: "You have a bold idea but need validation, resources, and structure to get started.", side: "left" },
              { stage: "MVP", desc: "You've built something—now you need to refine, test, and prepare for market.", side: "right" },
              { stage: "Early Revenue", desc: "You're generating traction—time to scale, optimize, and attract serious capital.", side: "left" },
              { stage: "Growth", desc: "Ready to dominate your market with strategic expansion and Series A preparation.", side: "right" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 last:mb-0 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:pl-12' : 'md:pr-12'} pl-12 md:pl-0`}>
                  <div className="bg-[#F9FAFB] p-6 rounded-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest">Stage {i + 1}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase">{item.stage}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
                {/* Circle marker */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#8b68f6] rounded-full flex items-center justify-center md:-translate-x-1/2 border-4 border-white shadow-lg">
                  <span className="text-xs font-bold text-white">{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs Cross-link */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Our Flagship Programs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "AIX Summit & Hackathon", desc: "AI-focused innovation challenge for enterprises and startups", link: "https://www.aixsummithack.com/", external: true, color: "bg-[#8b68f6]" },
              { title: "Sustainova Challenge", desc: "Sustainability-focused startup acceleration program", link: "https://sustainovachallenge.com/", external: true, color: "bg-[#2b204c]" },
              { title: "Entrepreneurship Awards", desc: "Celebrating Qatar's most innovative founders", link: "https://qatarentrepreneurshipawards.com/", external: true, color: "bg-[#952828]" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group block p-8 bg-white rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all"
              >
                <div className={`w-2 h-12 ${item.color} rounded-sm mb-6`}></div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 md:py-28 bg-gradient-to-b from-[#2b204c] to-[#1a1432] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8b68f6] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Ready to Build?</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
              Let's Build Something <br className="hidden md:block"/>Extraordinary Together
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              If you're ready to build something impactful from scratch and want the structure, support, and ambition to grow fast—join our Venture Builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://risin.ventures/venture-builder/#get-in-touch-form" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto shadow-lg shadow-[#8b68f6]/30">
                  Apply Now <ArrowRight size={16} className="ml-2 inline" />
                </Button>
              </a>
              <a href="https://risin.ventures/contact/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-10 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </div>
            <p className="text-slate-500 text-xs mt-8 uppercase tracking-widest">
              Submit your pitch deck and let's start a conversation
            </p>
          </motion.div>
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
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies">
              <a className="group block p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <Target className="w-8 h-8 text-[#8b68f6] mb-4" />
                <h3 className="text-lg font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors mb-2">Case Studies</h3>
                <p className="text-slate-500 text-sm mb-4">See how we've helped founders build successful ventures.</p>
                <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                  Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Link>
            <Link href="/#portfolio">
              <a className="group block p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <Building2 className="w-8 h-8 text-[#2b204c] mb-4" />
                <h3 className="text-lg font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors mb-2">Portfolio</h3>
                <p className="text-slate-500 text-sm mb-4">Meet the companies in our portfolio.</p>
                <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                  Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Link>
            <Link href="/partners">
              <a className="group block p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <Network className="w-8 h-8 text-[#952828] mb-4" />
                <h3 className="text-lg font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors mb-2">Our Partners</h3>
                <p className="text-slate-500 text-sm mb-4">Strategic partners powering our ecosystem.</p>
                <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                  Explore <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
