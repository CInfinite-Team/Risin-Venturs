import { Link } from "wouter";
import { Linkedin, Facebook, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import Logo from "../assets/Icon files/SVG/Basic 1.svg";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { isSubmitting: nlSubmitting, isSuccess: nlSuccess, submit: nlSubmit } = useFormSubmit();
  const aboutLinks = [
    { label: "About Us", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Career", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "News & Insights", href: "/news" }
  ];

  const mainPrograms = [
    { label: "Innovation", href: "/venture-studio/innovation" },
    { label: "Incubation", href: "/venture-studio/incubation" },
    { label: "Acceleration", href: "/venture-studio/acceleration" }
  ];

  const otherPrograms = [
    { label: "AIX Summit & Hackathon", href: "/programs/aix" },
    { label: "Sustainova Challenge", href: "/programs/sustainova" },
    { label: "Entrepreneurship Awards", href: "/programs/entrepreneurship-awards" },
    { label: "Go-To-Market (GTM)", href: "/programs/gtm" }
  ];

  return (
    <footer className="bg-white border-t border-slate-100 py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <img 
                src={Logo} 
                alt="Risin Ventures Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
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

          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 md:mb-8 text-[#8b68f6]">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 md:mb-8 text-[#8b68f6]">Programs</h4>
            <ul className="space-y-3 mb-6">
              {mainPrograms.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">{item.label}</Link>
                </li>
              ))}
            </ul>
            
            <h5 className="font-bold uppercase tracking-widest text-[9px] mb-4 text-slate-400">Our Programs</h5>
            <ul className="space-y-3 pl-2 border-l border-slate-100">
              {otherPrograms.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider block">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 md:mb-8 text-[#8b68f6]">Venture Builder</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/venture-studio/venture-builder" className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">
                  Venture Builder
                </Link>
              </li>
              <li>
                <Link href="/build-with-us" className="text-[#2b204c] hover:text-[#8b68f6] transition-colors text-xs font-bold capitalize tracking-wider">
                  Build With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Get in Touch CTA Banner */}
        <div className="bg-[#F9FAFB] border border-slate-200 rounded-sm p-8 md:p-10 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#8b68f6]/10 rounded-sm flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#8b68f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-[#2b204c] uppercase mb-1">Ready to Build Something Great?</h3>
              <p className="text-slate-500 text-sm">Let's discuss how we can help bring your vision to life.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 border-2 border-[#2b204c] text-[#2b204c] hover:bg-[#2b204c] hover:text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all whitespace-nowrap">
              Get in Touch
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#2b204c] rounded-sm p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 uppercase">Subscribe to our newsletter</h3>
            <p className="text-slate-300 text-sm">Get the latest insights on deep tech and venture building.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto relative z-10 gap-2 sm:gap-0">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input 
              id="newsletter-email"
              type="email" 
              placeholder="Email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="bg-white/10 border border-white/20 sm:rounded-l-sm sm:rounded-r-none rounded-sm px-6 py-4 text-sm text-white placeholder:text-slate-400 focus:ring-1 focus:ring-[#8b68f6] w-full md:min-w-[300px] outline-none transition-all min-w-0"
            />
            <Button
              disabled={nlSubmitting || nlSuccess}
              onClick={async () => {
                if (!newsletterEmail) return;
                await nlSubmit({ formType: "Newsletter", email: newsletterEmail });
                setNewsletterEmail("");
              }}
              className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white sm:rounded-l-none sm:rounded-r-sm rounded-sm h-auto py-4 sm:py-0 px-8 border-0 font-bold uppercase tracking-widest transition-all whitespace-nowrap"
            >
              {nlSuccess ? "Subscribed!" : nlSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Risin Ventures. All rights reserved.
          </p>
          <div className="hidden md:block w-1 h-1 rounded-full bg-slate-200"></div>
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            Designed and Developed by{" "}
            <a 
              href="https://www.luxury-method.com" 
              className="text-[#8b68f6] hover:text-[#2b204c] transition-colors"
              target="_blank"
            >
              Luxury Method
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
