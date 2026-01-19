import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Lightbulb, Zap, Users, Shield, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

import image1 from "@assets/4_1768828797237.JPG";
import image2 from "@assets/31_1768828797240.JPG";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const InnovationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[#2b204c] mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-6">Here is your link to the Innovation Playbook.</p>
        <Button className="bg-[#2b204c] text-white w-full uppercase tracking-widest font-bold">
          Download PDF
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-4 py-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Work Email</Label>
        <Input id="email" type="email" placeholder="john@company.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" placeholder="Acme Corp" required />
      </div>
      <Button type="submit" className="w-full bg-[#8b68f6] hover:bg-[#7a5bd6] text-white font-bold py-6 uppercase tracking-widest mt-4">
        Get the Playbook
      </Button>
      <p className="text-[10px] text-slate-400 text-center">
        We respect your privacy. No spam, just value.
      </p>
    </form>
  );
};

export default function Innovation() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Editorial Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-0.5 bg-[#8b68f6]"></span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Venture Studio / Innovation</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-8 uppercase leading-none">
              The Engine of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b68f6] to-cyan-400">Future Growth</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#8b68f6]/20 pl-6">
              Innovation isn't just about ideas—it's about survival. In a rapidly evolving deep tech landscape, organizations that fail to adapt, stagnate. We bridge the gap between corporate ambition and startup agility.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Image Placeholder - Contextual */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image1} 
              alt="Hackathon Teams Collaborating" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-[#F9FAFB] border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            <div className="md:w-1/3">
              <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest mb-4 block">Our Approach</span>
              <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-6">
                Innovation <br/>Architecture
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                We design and execute programs that extract value from the ecosystem, transforming external talent and internal challenges into tangible outcomes.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="border-[#2b204c] text-[#2b204c] hover:bg-[#2b204c] hover:text-white rounded-sm font-bold uppercase tracking-widest text-xs">
                  Talk to us about Innovation
                </Button>
              </Link>
            </div>
            
            <div className="md:w-2/3 grid gap-6">
              {[
                {
                  title: "Open Innovation",
                  icon: <Lightbulb className="w-6 h-6 text-[#8b68f6]" />,
                  desc: "Sourcing breakthrough solutions from global startups to solve critical organizational challenges."
                },
                {
                  title: "Corporate Innovation",
                  icon: <Shield className="w-6 h-6 text-[#8b68f6]" />,
                  desc: "Building internal capabilities and intrapreneurship programs to drive culture change and efficiency."
                },
                {
                  title: "Enterprise Hackathons",
                  icon: <Zap className="w-6 h-6 text-[#8b68f6]" />,
                  desc: "High-intensity, ROI-focused events like the AIX Summit that prototype real-world AI solutions in days, not months."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="bg-[#8b68f6]/10 p-3 rounded-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#2b204c] uppercase mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Placeholder - Split Layout Alternate */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 h-[300px] bg-slate-100 rounded-sm relative overflow-hidden group">
               <img 
                 src={image2} 
                 alt="Workshop Session" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Hands-On Execution</h3>
              <p className="text-slate-500 leading-relaxed">
                Theory is fine, but we prefer action. Our innovation programs are designed to get teams out of the meeting room and into the field, prototyping solutions with real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works (Stats/Impact) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-6">Why It Works</h2>
            <p className="text-slate-500">
              Traditional R&D is slow. Our model accelerates discovery and validation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Talent Discovery", value: "Global", desc: "Access to untapped developer & founder pools." },
              { label: "Speed to Market", value: "10x", desc: "Rapid prototyping reduces cycles from months to days." },
              { label: "Adoption Rate", value: "High", desc: "Solutions built on actual enterprise data & needs." }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-[#F9FAFB] border border-slate-100 rounded-sm text-center group hover:border-[#8b68f6]/30 transition-colors">
                <div className="text-4xl font-heading font-bold text-[#8b68f6] mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-[#2b204c] uppercase tracking-widest mb-4">{stat.label}</div>
                <p className="text-slate-400 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points & Playbook */}
      <section className="py-20 bg-[#2b204c] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Proven Impact</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase">
                See Innovation <br/> in Action
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                From the AIX Summit to corporate challenges, we've delivered measurable results for leading entities.
              </p>
              
              <div className="flex flex-col gap-4">
                <Link href="/case-studies/ai-hackathons">
                  <a className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                    <div className="bg-[#8b68f6] p-2 rounded-full">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-sm">Case Study: AI Hackathons</h4>
                      <p className="text-xs text-slate-400">How we mobilized 100+ devs for rapid AI prototyping.</p>
                    </div>
                  </a>
                </Link>
                <Link href="/case-studies/empowering-innovation">
                  <a className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors">
                    <div className="bg-[#8b68f6] p-2 rounded-full">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white uppercase text-sm">Case Study: Empowering Innovation</h4>
                      <p className="text-xs text-slate-400">Driving digital transformation through open innovation.</p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="bg-white text-[#2b204c] p-8 md:p-10 rounded-sm shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Download className="text-[#8b68f6]" />
                <h3 className="text-xl font-heading font-bold uppercase">Innovation Playbook</h3>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Download our comprehensive guide on structuring high-impact corporate innovation programs and hackathons.
              </p>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#2b204c] text-white hover:bg-[#8b68f6] font-bold uppercase tracking-widest py-6">
                    Download Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-[#2b204c] uppercase font-bold text-xl">Get the Playbook</DialogTitle>
                    <DialogDescription>
                      Enter your details to receive the download link.
                    </DialogDescription>
                  </DialogHeader>
                  <InnovationForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <JourneyNav 
        title="Incubation"
        description="Innovation needs nurturing. See how we turn validated ideas into structured ventures through our incubation programs."
        link="/venture-studio/incubation"
        cta="Explore Incubation"
        accentColor="#952828"
      />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
