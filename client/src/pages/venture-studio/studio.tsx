import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import ScrollToTop from "@/components/ScrollToTop";
import { ArrowRight, Hammer, Briefcase, TrendingUp, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function VentureStudio() {
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
              <span className="w-8 h-0.5 bg-[#2b204c]"></span>
              <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest">Venture Studio / Build</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-8 uppercase leading-none">
              Co-Building <br/>
              <span className="text-stroke text-[#2b204c]">Unicorns</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#2b204c] pl-6">
              We don't just invest; we get our hands dirty. Our Venture Studio is the core engine where we originate ideas, assemble teams, and build companies from day zero.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Image Placeholder - Studio Context */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-sm bg-white/50 px-4 py-2 rounded-sm backdrop-blur-sm border border-slate-200">
                Actual program image to be uploaded: Studio Whiteboarding Session
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Two Engines */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* In-House Studio */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                 <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-4">In-House Studio</h2>
                 <p className="text-slate-500 leading-relaxed">
                   Our internal factory for deep tech startups. We identify white spaces in the market and deploy our own resources to capture them.
                 </p>
              </div>
              <div className="bg-white p-8 rounded-sm border border-slate-100 flex-1 relative overflow-hidden group hover:border-[#2b204c]/30 transition-colors">
                <div className="relative z-10 space-y-8">
                  {[
                    { title: "Ideation", desc: "Rigorous validation of market problems." },
                    { title: "Build", desc: "MVP development with internal engineering teams." },
                    { title: "Scale", desc: "Capital injection and GTM execution." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-2xl font-bold text-[#2b204c]/20">0{i+1}</div>
                      <div>
                        <h4 className="font-bold text-[#2b204c] uppercase text-sm">{step.title}</h4>
                        <p className="text-xs text-slate-500">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Venture Studio */}
            <div className="flex flex-col h-full">
              <div className="mb-6">
                 <h2 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-4">Corporate Studio</h2>
                 <p className="text-slate-500 leading-relaxed">
                   We help large enterprises build new revenue engines outside their core business, minimizing risk and maximizing agility.
                 </p>
              </div>
              <div className="bg-[#2b204c] p-8 rounded-sm text-white flex-1 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold uppercase mb-6">Why Corporate Venturing?</h3>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-[#8b68f6] mb-1">5x</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70">Faster GTM</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#8b68f6] mb-1">40%</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-70">Lower Cost</div>
                    </div>
                  </div>
                  <Link href="/case-studies/corporate-venture-studios">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2b204c] uppercase tracking-widest font-bold text-xs w-full">
                      View Corporate Case Study
                    </Button>
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Image Placeholder - Product Build */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="h-[350px] bg-slate-100 rounded-sm relative overflow-hidden order-2 md:order-1">
               <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs bg-white/50 px-4 py-2 rounded-sm backdrop-blur-sm border border-slate-200 text-center">
                  Actual program image to be uploaded: <br/> Product Team Building
                </span>
              </div>
             </div>
             <div className="order-1 md:order-2">
               <span className="text-[#2b204c] text-sm font-bold uppercase tracking-widest mb-3 block">Execution Focus</span>
               <h3 className="text-3xl font-heading font-bold text-[#2b204c] uppercase mb-4">Built for Scale</h3>
               <p className="text-slate-500 leading-relaxed">
                 We don't outsource the core. Our internal product, design, and engineering teams work side-by-side with founders to ensure technical excellence from the first line of code.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Founder in Residence */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Join the Team</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-8">
            Become a Founder in Residence
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Have the skills to lead but missing the idea? Or have the idea but need the machine? Our FIR program pairs exceptional talent with validated opportunities.
          </p>
          <Link href="/build-with-us">
            <Button className="bg-[#2b204c] text-white hover:bg-[#8b68f6] rounded-sm px-10 py-5 font-bold uppercase tracking-widest">
              Build With Us
            </Button>
          </Link>
        </div>
      </section>

      <JourneyNav 
        title="Our Portfolio"
        description="The proof is in the pudding. See the companies we've built, backed, and scaled across the region."
        link="/portfolio"
        cta="View Portfolio"
        accentColor="#8b68f6"
      />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
