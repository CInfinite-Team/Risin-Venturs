import { Link } from "wouter";
import { Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/">
              <a className="flex items-center gap-2 mb-8">
                <img 
                  src="/attached_assets/RISIN_LOGO_1767787710766.png" 
                  alt="Risin Ventures Logo" 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </a>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
              Risin Ventures is a boutique venture studio and investment firm specializing in deep technology. We bridge the gap between breakthrough scientific innovation and global market scale by co-building enterprises with institutional discipline and execution excellence.
            </p>
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/risin-ventures/" },
                { name: "Facebook", icon: <Facebook size={18} />, href: "https://www.facebook.com/profile.php?id=100064025261207" },
                { name: "YouTube", icon: <Youtube size={18} />, href: "https://www.youtube.com/channel/UC2PZRHE-2nvkqRZPTPK9wNQ/featured" },
                { name: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/risin.ventures/" }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-slate-100 rounded-sm flex items-center justify-center text-slate-400 hover:text-[#8b68f6] hover:border-[#8b68f6] transition-all bg-[#F9FAFB]"
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: 2-column grid for About & Programs, then Venture Studio below */}
          {/* Desktop: 3 separate columns */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-0">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 md:mb-8 text-[#8b68f6]">About</h4>
              <ul className="space-y-3 md:space-y-4">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Team", href: "/team" },
                  { label: "Career", href: "/careers" },
                  { label: "Partners", href: "/partners" },
                  { label: "Case Studies", href: "/case-studies" },
                  { label: "News & Insights", href: "/news" },
                  { label: "Get in Touch", href: "/contact" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}><a className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">{item.label}</a></Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:hidden">
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-[#8b68f6]">Programs</h4>
              <ul className="space-y-3">
                {[
                  { label: "AIX", href: "https://www.aixsummithack.com/" },
                  { label: "Sustainova", href: "https://sustainovachallenge.com/" },
                  { label: "Entrepreneurship Awards", href: "https://qatarentrepreneurshipawards.com/" },
                  { label: "GCC GTM", href: "/#programs" }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-8 text-[#8b68f6]">Programs</h4>
            <ul className="space-y-4">
              {[
                { label: "AIX", href: "https://www.aixsummithack.com/" },
                { label: "Sustainova", href: "https://sustainovachallenge.com/" },
                { label: "Entrepreneurship Awards", href: "https://qatarentrepreneurshipawards.com/" },
                { label: "GCC GTM", href: "/#programs" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 md:mb-8 text-[#8b68f6]">Venture Studio</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { label: "Innovation", href: "/#philosophy" },
                { label: "Incubation", href: "/#philosophy" },
                { label: "Acceleration", href: "/#programs" },
                { label: "Venture Building", href: "/#philosophy" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#2b204c] rounded-sm p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 uppercase">Subscribe to our newsletter</h3>
            <p className="text-slate-300 text-sm">Get the latest insights on deep tech and venture building.</p>
          </div>
          <div className="flex w-full md:w-auto relative z-10">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/10 border border-white/20 rounded-l-sm px-6 py-4 text-sm text-white placeholder:text-slate-400 focus:ring-1 focus:ring-[#8b68f6] w-full md:min-w-[300px] outline-none transition-all"
            />
            <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-l-none rounded-r-sm h-auto px-8 border-0 font-bold uppercase tracking-widest transition-all">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="pt-8 mb-8 text-center">
          <Link href="/contact">
            <a className="text-[#8b68f6] hover:text-[#2b204c] text-sm font-medium transition-colors inline-flex items-center gap-2">
              Get in Touch with Risin Ventures →
            </a>
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Risin Ventures. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-[#2b204c] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-[#2b204c] text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
