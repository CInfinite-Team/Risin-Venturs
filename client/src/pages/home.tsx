import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, Menu, X, Rocket, Cpu, Network, Building2 } from "lucide-react";
import heroBg from "@assets/generated_images/sleek_dark_tech_background_with_animated-style_gradients.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold font-heading tracking-tighter uppercase flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-black flex items-center justify-center font-bold text-xl leading-none">
                R
              </div>
              Risin.Ventures
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Programs", href: "#programs" },
              { label: "Venture Studio", href: "#philosophy" },
              { label: "Portfolio", href: "#portfolio" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-linear-to-r from-primary to-primary/80 text-black hover:scale-105 transition-transform uppercase tracking-widest text-xs font-bold rounded-none px-6 h-10 border-0 shadow-lg shadow-primary/20">
              Build With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {[
                { label: "About", href: "#about" },
                { label: "Programs", href: "#programs" },
                { label: "Venture Studio", href: "#philosophy" },
                { label: "Portfolio", href: "#portfolio" }
              ].map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-lg font-medium hover:text-primary uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-linear-to-r from-primary to-primary/80 text-black uppercase tracking-widest text-sm font-bold rounded-none w-full h-12 mt-2">
                Build With Us
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
          <img 
            src={heroBg} 
            alt="Abstract geometric background" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="container relative z-20 px-6">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight tracking-tighter mb-8 uppercase"
            >
              Building the Next <br />
              Generation of <br />
              <span className="text-primary">Deep Tech Ventures</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light"
            >
              Risin Ventures specializes in scaling disruptive innovations across 
              <span className="text-white font-medium"> AI, IoT, and Blockchain</span>. 
              We bridge the gap between breakthrough science and global markets.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-bold uppercase tracking-widest">
                Explore Our Programs
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg font-bold uppercase tracking-widest">
                Pitch Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Stats / Ticker Section */}
      <section className="border-y border-white/10 bg-black/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Assets Under Management", value: "$450M+" },
            { label: "Portfolio Companies", value: "85+" },
            { label: "Unicorns Backed", value: "12" },
            { label: "Global Offices", value: "4" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-heading font-bold text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-none">
              TRANSFORMING IDEAS INTO <br/>
              <span className="text-stroke text-white">GLOBAL GIANTS</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded at the intersection of capital and engineering, Risin Ventures was born from a simple realization: the brightest minds in deep tech often lack the infrastructure to scale. We don't just invest; we co-build. Our mission is to accelerate the transition to a sustainable, hyper-connected future by backing the pioneers of AI, IoT, and Blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Building2 className="w-8 h-8" />, 
                title: "Venture Building", 
                desc: "We provide the blueprint and resources to turn groundbreaking research into market-ready companies." 
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                title: "Startup Acceleration", 
                desc: "Intensive programs designed to help early-stage ventures find product-market fit and achieve orbital velocity." 
              },
              { 
                icon: <Network className="w-8 h-8" />, 
                title: "Industry Connections", 
                desc: "Access to an exclusive network of Fortune 500 partners, government agencies, and fellow visionaries." 
              },
              { 
                icon: <Cpu className="w-8 h-8" />, 
                title: "Deep Tech Expertise", 
                desc: "Our team of Ph.D. engineers and technical founders speak your language and solve your hardest problems." 
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, borderColor: "rgba(132, 255, 94, 0.5)" }}
                className="p-8 border border-white/10 bg-card group transition-all duration-300"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Our Path</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">VENTURE EVOLUTION</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We guide founders through every critical stage of growth, from the first line of code to global market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                phase: "01",
                title: "Pre-Acceleration",
                desc: "Validating core technology and refining the fundamental business thesis for deep tech innovators.",
                color: "border-blue-500/20 hover:border-blue-500/50",
                accent: "text-blue-400"
              },
              {
                phase: "02",
                title: "Acceleration",
                desc: "High-intensity 12-week program focusing on rapid prototyping, market entry, and series seed readiness.",
                color: "border-primary/20 hover:border-primary/50",
                accent: "text-primary"
              },
              {
                phase: "03",
                title: "Post-Acceleration",
                desc: "Long-term scaling support, international expansion strategies, and series B/C fundraising infrastructure.",
                color: "border-purple-500/20 hover:border-purple-500/50",
                accent: "text-purple-400"
              }
            ].map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 bg-card border ${program.color} group transition-all duration-500 overflow-hidden`}
              >
                {/* Background Accent */}
                <div className={`absolute -right-8 -top-8 text-8xl font-heading font-bold opacity-5 group-hover:opacity-10 transition-opacity`}>
                  {program.phase}
                </div>
                
                <div className={`${program.accent} text-sm font-mono mb-6 flex items-center gap-2`}>
                  <div className={`w-2 h-2 rounded-full bg-current animate-pulse`} />
                  PHASE {program.phase}
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground mb-10 leading-relaxed min-h-[80px]">
                  {program.desc}
                </p>

                <Button variant="outline" className="w-full border-white/10 hover:border-white/40 text-white rounded-none uppercase tracking-widest font-bold h-12">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 relative bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Proof of Concept</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold leading-none uppercase">
                SUCCESS <br/><span className="text-stroke text-white">MANIFOLD</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm uppercase tracking-widest leading-loose">
              Tangible results from the frontier of deep tech innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                startup: "NeuroStream",
                problem: "BCI hardware lacked high-fidelity signal processing in mobile environments.",
                solution: "Developed an edge-AI chip that filters neural noise in real-time with <10ms latency.",
                outcome: "$15M Series A Raised",
                tag: "AI & Hardware"
              },
              {
                startup: "BlockScale",
                problem: "Ethereum L2s faced severe liquidity fragmentation and high bridging costs.",
                solution: "Implemented a cross-rollup messaging protocol that unified liquidity pools.",
                outcome: "50,000+ Active Nodes",
                tag: "Blockchain"
              },
              {
                startup: "GeoThermal AI",
                problem: "Industrial cooling systems were operating at only 65% thermodynamic efficiency.",
                solution: "Integrated IoT sensors with predictive ML to optimize cooling cycles dynamically.",
                outcome: "30% Energy Reduction",
                tag: "Clean Tech"
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="bg-card border border-white/10 p-10 relative group transition-all duration-500 flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-primary rotate-[-45deg]" />
                </div>
                
                <div className="mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary px-2 py-1 border border-primary/20 bg-primary/5">
                    {study.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors">
                  {study.startup}
                </h3>

                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Challenge</h4>
                    <p className="text-sm text-white/80 leading-relaxed font-light italic">"{study.problem}"</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-white/5">
                  <div className="flex flex-col gap-1 mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Measurable Outcome</span>
                    <span className="text-2xl font-heading font-bold text-primary tracking-tighter">{study.outcome}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-white hover:text-primary uppercase tracking-[0.2em] text-[10px] font-bold gap-2">
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">BUILDING TOMORROW</h2>
            </div>
            <Button variant="link" className="text-white hover:text-primary gap-2 p-0 h-auto font-bold uppercase tracking-widest">
              View All Companies <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "NeuroStream", focus: "AI & Neural Interfaces", metric: "2M+ Nodes", desc: "Next-gen brain-computer interface for cognitive enhancement." },
              { name: "BlockScale", focus: "L2 Blockchain", metric: "50k TPS", desc: "Hyper-scalable infrastructure for the decentralized web." },
              { name: "QuantumLink", focus: "Quantum Computing", metric: "128 Qubits", desc: "Securing communications with quantum entanglement protocols." },
              { name: "GeoThermal AI", focus: "Energy & IoT", metric: "30% Savings", desc: "AI-driven thermal management for sustainable industrial cooling." },
              { name: "SynthoBio", focus: "BioTech", metric: "4.2x Yield", desc: "Computational platform for synthetic protein design." },
              { name: "OrbitOps", focus: "SpaceTech", metric: "15 Satellites", desc: "Edge computing for autonomous satellite constellations." },
              { name: "CyberNode", focus: "Cybersecurity", metric: "Zero Breach", desc: "Autonomous threat detection using predictive AI models." },
              { name: "FluxGrid", focus: "Smart City", metric: "1.2M Homes", desc: "Decentralized energy distribution for future urban centers." }
            ].map((startup, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] bg-card border border-white/5 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] blur-2xl" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <span className="font-heading font-bold text-xl text-primary">
                        {startup.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-1 uppercase">
                      {startup.name}
                    </h3>
                    <p className="text-xs font-mono text-primary uppercase tracking-widest">
                      {startup.focus}
                    </p>
                  </div>

                  {/* Hover Content */}
                  <div className="relative z-10">
                    <div className="h-px w-full bg-white/10 mb-6" />
                    <div className="space-y-4">
                      <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {startup.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground uppercase tracking-widest">Metric</span>
                          <span className="text-sm font-bold text-white">{startup.metric}</span>
                        </div>
                      </div>
                      <div className="group-hover:opacity-0 transition-opacity">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground uppercase tracking-widest">Performance</span>
                          <span className="text-sm font-bold text-primary">OUTPERFORM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Founders' Voice</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">TRUSTED BY VISIONARIES</h2>
          </div>

          <div className="flex overflow-hidden gap-6 pb-8">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 min-w-full"
            >
              {[
                {
                  quote: "Risin Ventures didn't just give us capital; they gave us a technical edge that our competitors couldn't match. Their engineering team is elite.",
                  author: "Dr. Sarah Chen",
                  role: "CEO, NeuroStream",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                },
                {
                  quote: "The acceleration program was intense but transformative. We found product-market fit in record time and secured our Series A within 4 months.",
                  author: "Marcus Thorne",
                  role: "Founder, BlockScale",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
                },
                {
                  quote: "Access to their network of industry partners opened doors that were previously locked. A truly strategic partner for deep tech startups.",
                  author: "Elena Rodriguez",
                  role: "CTO, GeoThermal AI",
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
                },
                {
                  quote: "Their deep tech expertise is unparalleled. They understood our quantum physics thesis when no other VC could.",
                  author: "James Wilson",
                  role: "CEO, QuantumLink",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
                }
              ].concat([
                {
                  quote: "Risin Ventures didn't just give us capital; they gave us a technical edge that our competitors couldn't match. Their engineering team is elite.",
                  author: "Dr. Sarah Chen",
                  role: "CEO, NeuroStream",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                },
                {
                  quote: "The acceleration program was intense but transformative. We found product-market fit in record time and secured our Series A within 4 months.",
                  author: "Marcus Thorne",
                  role: "Founder, BlockScale",
                  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
                },
                {
                  quote: "Access to their network of industry partners opened doors that were previously locked. A truly strategic partner for deep tech startups.",
                  author: "Elena Rodriguez",
                  role: "CTO, GeoThermal AI",
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200"
                },
                {
                  quote: "Their deep tech expertise is unparalleled. They understood our quantum physics thesis when no other VC could.",
                  author: "James Wilson",
                  role: "CEO, QuantumLink",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
                }
              ]).map((t, i) => (
                <div 
                  key={i} 
                  className="min-w-[400px] max-w-[450px] bg-card p-8 border border-white/5 shadow-2xl relative group"
                  style={{ borderRadius: "24px" }}
                >
                  <div className="text-primary mb-6">
                    <Zap className="w-8 h-8 fill-primary/20" />
                  </div>
                  <p className="text-lg text-muted-foreground italic mb-8 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.img} 
                      alt={t.author} 
                      className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div>
                      <h4 className="text-white font-bold">{t.author}</h4>
                      <p className="text-xs text-primary uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Insights Section */}
      <section id="news" className="py-32 bg-background border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Intelligence</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase">NEWS & INSIGHTS</h2>
            </div>
            <Button variant="link" className="text-white hover:text-primary gap-2 p-0 h-auto font-bold uppercase tracking-widest text-xs">
              All Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                date: "Oct 24, 2025",
                tag: "Funding",
                title: "NeuroStream Secures $15M Series A to Advance Neural Interface Research",
                link: "#"
              },
              {
                date: "Oct 12, 2025",
                tag: "Partnership",
                title: "Risin Ventures Announces Strategic Collaboration with Global Tech Council",
                link: "#"
              },
              {
                date: "Sep 28, 2025",
                tag: "Program Launch",
                title: "Applications Open for 2026 Deep Tech Acceleration Cohort",
                link: "#"
              },
              {
                date: "Sep 15, 2025",
                tag: "Insight",
                title: "The Future of Decentralized Energy: A Thesis on Urban Flux Grids",
                link: "#"
              }
            ].map((news, i) => (
              <motion.a
                key={i}
                href={news.link}
                whileHover={{ y: -5 }}
                className="group block border-b border-white/10 pb-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                    {news.tag}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {news.date}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                  {news.title}
                </h3>
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground group-hover:text-white transition-colors">
                  Read Article <ArrowRight className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--primary)_0%,_transparent_40%)] opacity-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_var(--card)_100%)] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 uppercase leading-none tracking-tighter">
                Ready to <br/><span className="text-primary italic">Ascend?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-md mb-12">
                Join our network of elite founders and industry partners. Let's build the future of deep tech together.
              </p>
              
              <div className="flex gap-6">
                {["Twitter", "LinkedIn", "AngelList", "Discord"].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-xl border border-white/10 p-10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 h-12 px-4 text-white placeholder:text-white/20 focus:border-primary transition-colors outline-hidden"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@startup.io" 
                    className="w-full bg-white/5 border border-white/10 h-12 px-4 text-white placeholder:text-white/20 focus:border-primary transition-colors outline-hidden"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Project Details</label>
                  <textarea 
                    placeholder="Tell us about your venture..." 
                    className="w-full bg-white/5 border border-white/10 min-h-[120px] p-4 text-white placeholder:text-white/20 focus:border-primary transition-colors outline-hidden resize-none"
                  />
                </div>
                <Button className="w-full bg-primary text-black hover:bg-primary/90 rounded-none h-14 text-lg font-bold uppercase tracking-widest shadow-lg shadow-primary/10">
                  Join Our Network
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary text-black flex items-center justify-center font-bold text-xl leading-none">
                  R
                </div>
                <span className="font-heading font-bold text-2xl tracking-tighter uppercase">RISIN.VENTURES</span>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                Backing the outliers and engineering the ascent of the world's most disruptive deep tech startups.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["About", "Programs", "Venture Studio", "Portfolio", "News"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Connect</h4>
              <ul className="space-y-4">
                {["Twitter", "LinkedIn", "AngelList", "Medium", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              © 2026 Risin Ventures. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
