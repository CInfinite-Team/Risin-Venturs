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

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-8 uppercase leading-none tracking-tighter">
            Ready to <br/><span className="text-primary">Ascend?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            We are always looking for the next outlier. If you are building something that looks like science fiction, let's talk.
          </p>
          <Button className="bg-primary text-black hover:bg-primary/90 rounded-none h-16 px-12 text-xl font-bold uppercase tracking-widest">
            Submit Your Pitch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-sm leading-none">
                R
              </div>
              <span className="font-heading font-bold tracking-tight">RISIN.VENTURES</span>
            </div>
            
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">AngelList</a>
            </div>

            <div className="text-xs text-muted-foreground">
              © 2024 Risin Ventures. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
