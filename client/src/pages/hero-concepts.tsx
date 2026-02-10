import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated concept images
import option1 from "@/assets/hero-concepts/option1-network.png";
import option2 from "@/assets/hero-concepts/option2-impact.png";
import option3 from "@/assets/hero-concepts/option3-minimal.png";
import option4 from "@/assets/hero-concepts/option4-horizon.png";
import option5 from "@/assets/hero-concepts/option5-nexus.png";
import option6 from "@/assets/hero-concepts/option6-core.png";

const concepts = [
  {
    id: 4,
    title: "Option 4: Deep Tech Horizon",
    description: "Futuristic landscape merging physical and digital worlds with clean architectural lines.",
    emotion: "Visionary. Limitless. Structural.",
    image: option4,
  },
  {
    id: 5,
    title: "Option 5: Global Nexus",
    description: "Stylized global map with connecting nodes representing international venture scaling.",
    emotion: "Connected. Expansive. Strategic.",
    image: option5,
  },
  {
    id: 6,
    title: "Option 6: Innovation Core",
    description: "Abstract geometric core glowing with energy, representing the heart of deep tech creation.",
    emotion: "Central. Powerful. Dynamic.",
    image: option6,
  },
  {
    id: 3,
    title: "Option 3: Venture Builder Signature (Current)",
    description: "Minimalist geometric design currently implemented on the homepage.",
    emotion: "Confident. Institutional. Global.",
    image: option3,
  },
  {
    id: 1,
    title: "Option 1: Living Venture Ecosystem",
    description: "Abstract network of nodes representing startups, capital, and markets.",
    emotion: "This is where ventures are born.",
    image: option1,
  },
  {
    id: 2,
    title: "Option 2: From Idea to Impact",
    description: "Cinematic art showing the transition from abstract blueprint to global industry.",
    emotion: "We turn breakthrough ideas into real companies.",
    image: option2,
  }
];

export default function HeroConcepts() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#2b204c] font-sans pb-20">
      <div className="bg-[#2b204c] text-white py-12 px-6 mb-12">
        <div className="container mx-auto">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 text-sm font-bold uppercase tracking-widest transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </a>
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">New Hero Banner Concepts</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Review the 3 new design options (4-6) along with previous concepts. 
            Select a visual direction to refresh the homepage hero section.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {concepts.map((concept) => (
            <motion.div 
              key={concept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`bg-white rounded-sm overflow-hidden shadow-lg border-2 transition-all ${selected === concept.id ? 'border-[#8b68f6] ring-4 ring-[#8b68f6]/20' : 'border-slate-100'}`}
              onClick={() => setSelected(concept.id)}
            >
              <div className="relative aspect-video bg-slate-100">
                <img 
                  src={concept.image} 
                  alt={concept.title} 
                  className="w-full h-full object-cover"
                />
                {selected === concept.id && (
                  <div className="absolute top-4 right-4 bg-[#8b68f6] text-white p-2 rounded-full shadow-lg">
                    <Check size={24} />
                  </div>
                )}
                {concept.id <= 3 && concept.id !== 3 && (
                  <div className="absolute top-4 left-4 bg-slate-800/80 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Previous Option
                  </div>
                )}
                {concept.id === 3 && (
                  <div className="absolute top-4 left-4 bg-[#2b204c]/90 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Current Active
                  </div>
                )}
                {concept.id > 3 && (
                  <div className="absolute top-4 left-4 bg-[#952828] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-md">
                    New Option
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-2">{concept.title}</h3>
                <p className="text-[#8b68f6] font-bold text-xs uppercase tracking-widest mb-4">{concept.emotion}</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed h-10">
                  {concept.description}
                </p>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(concept.id);
                  }}
                  className={`w-full px-8 py-6 uppercase tracking-widest font-bold text-sm ${selected === concept.id ? 'bg-[#8b68f6] hover:bg-[#7a5bd6]' : 'bg-[#2b204c] hover:bg-[#3d2e6b]'}`}
                >
                  {selected === concept.id ? 'Selected' : 'Select This Concept'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {selected && (
          <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-6 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Current Selection</span>
                <span className="text-xl font-heading font-bold text-[#2b204c]">
                  {concepts.find(c => c.id === selected)?.title}
                </span>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setSelected(null)} className="border-slate-300 text-slate-500">
                  Cancel
                </Button>
                <Button className="bg-[#8b68f6] hover:bg-[#7a5bd6] text-white px-8 uppercase tracking-widest font-bold text-sm">
                  Implement Choice
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
