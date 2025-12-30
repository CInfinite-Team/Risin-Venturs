import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield, Zap, Menu, X } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_tech_geometric_background_with_lime_accents.png";
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
            {["Philosophy", "Portfolio", "Team", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black uppercase tracking-widest text-xs font-bold rounded-none px-6">
              Pitch Us
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
              {["Philosophy", "Portfolio", "Team", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-primary uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
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
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.9] tracking-tighter mb-8"
            >
              FUTURE <br />
              <span className="text-stroke text-transparent">RISING</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light"
            >
              We back the visionaries who are rewriting the code of reality. 
              From deep tech to decentralized systems, we invest in the ascent.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button className="bg-primary text-black hover:bg-primary/90 rounded-none h-14 px-8 text-lg font-bold uppercase tracking-widest">
                Explore Portfolio
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg font-bold uppercase tracking-widest">
                Our Thesis
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

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-none">
                INVESTING IN <br/>
                <span className="text-primary">HYPER-GROWTH</span>
              </h2>
              <div className="h-1 w-24 bg-primary mb-8" />
            </div>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                The world isn't changing linearly; it's accelerating exponentially. 
                Legacy institutions can't keep up. That's where we come in.
              </p>
              <p>
                At Risin.Ventures, we don't just provide capital; we provide the 
                orbital velocity needed to escape the gravity of the status quo. 
                We are founders, engineers, and dreamers betting on the impossible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Scalability", desc: "Built for billions of users." },
                  { icon: <Shield className="w-6 h-6" />, title: "Resilience", desc: "Systems that thrive in chaos." },
                  { icon: <Zap className="w-6 h-6" />, title: "Velocity", desc: "Moving faster than the market." },
                  { icon: <Globe className="w-6 h-6" />, title: "Impact", desc: "Changing how the world works." }
                ].map((item, i) => (
                  <div key={i} className="border border-white/10 p-6 hover:border-primary/50 transition-colors group">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-white font-bold uppercase tracking-wide mb-2">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/3] bg-card border border-white/5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-lg">0{i}</span>
                    </div>
                    <div className="px-3 py-1 border border-white/20 text-xs font-mono uppercase rounded-full">
                      Series A
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Venture {i}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      Revolutionizing the way we think about digital infrastructure and AI deployment.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
