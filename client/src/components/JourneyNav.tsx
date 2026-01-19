import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface JourneyNavProps {
  title: string;
  description: string;
  link: string;
  cta: string;
  accentColor?: string;
}

export default function JourneyNav({ 
  title, 
  description, 
  link, 
  cta,
  accentColor = "#8b68f6" 
}: JourneyNavProps) {
  return (
    <section className="py-12 border-t border-slate-100 bg-[#F9FAFB]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1">
            <span 
              className="text-[10px] font-bold uppercase tracking-widest block mb-2"
              style={{ color: accentColor }}
            >
              Where this leads next
            </span>
            <h3 className="text-2xl font-heading font-bold text-[#2b204c] mb-2 uppercase">
              {title}
            </h3>
            <p className="text-slate-500 text-sm max-w-xl">
              {description}
            </p>
          </div>
          
          <Link href={link}>
            <button 
              className="group flex items-center gap-3 px-8 py-4 bg-[#2b204c] text-white rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#8b68f6] transition-all whitespace-nowrap"
            >
              {cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
