import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ExternalLink, Award, Star, Users, Briefcase, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import image1 from "@assets/Hussein_Sayed_(10)_1768830815435.JPG";
import image2 from "@assets/Hussein_Sayed_(28)_1768830815439.JPG";
import image3 from "@assets/26_1768830447184.jpg";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const awardCategories = [
  { title: "Startup of the Year", icon: <Trophy className="w-5 h-5" /> },
  { title: "Entrepreneur of the Year", icon: <Star className="w-5 h-5" /> },
  { title: "Women Entrepreneur", icon: <Sparkles className="w-5 h-5" /> },
  { title: "Deep-Tech Startup", icon: <Briefcase className="w-5 h-5" /> },
  { title: "FinTech Startup", icon: <Award className="w-5 h-5" /> },
  { title: "Health-Tech Startup", icon: <Users className="w-5 h-5" /> },
  { title: "Edu-Tech Startup", icon: <Star className="w-5 h-5" /> },
  { title: "Green-Tech Startup", icon: <Sparkles className="w-5 h-5" /> },
  { title: "E-commerce/Delivery", icon: <Briefcase className="w-5 h-5" /> },
  { title: "Social Entrepreneur", icon: <Users className="w-5 h-5" /> }
];

const winners2024 = [
  {
    category: "Startup of the Year",
    winner: "PayLater Qatar",
    description: "A pioneering Buy Now, Pay Later fintech platform offering Sharia-compliant, interest-free installment plans."
  },
  {
    category: "Entrepreneur of the Year",
    winner: "Abdullah Thamer Al Hemeidi",
    description: "Founder of Rafeeq, Qatar's first homegrown delivery platform bridging urban and rural areas."
  },
  {
    category: "Women Entrepreneur",
    winner: "Reema Alkuwari",
    description: "Visionary social entrepreneur driving impact since age 15, founder & CEO of Adeer."
  },
  {
    category: "Deep-Tech Startup",
    winner: "EMMA",
    description: "Aviation innovators redefining operational management with an open and flexible system."
  },
  {
    category: "Green-Tech Startup",
    winner: "AlgaQ",
    description: "Pioneer in algae-powered solutions that capture CO2 and drive sustainability."
  },
  {
    category: "Health-Tech Startup",
    winner: "M Care Technology",
    description: "Leveraging AI to transform clinical, administrative, and operational workflows."
  }
];

export default function EntrepreneurshipAwards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 relative overflow-hidden">
        {/* ... existing hero content ... */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-300 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-300/70 text-sm font-bold uppercase tracking-widest">Programs</span>
              <span className="text-amber-500/50">/</span>
              <span className="text-amber-300 text-sm font-bold uppercase tracking-widest">Entrepreneurship Awards</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase leading-none">
              Qatar <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">Entrepreneurship Awards</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-100/80 leading-relaxed max-w-2xl mb-8">
              A national platform recognizing and celebrating excellence and innovation in ICT and digital entrepreneurship in Qatar and the wider region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://qatarentrepreneurshipawards.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-amber-500 hover:bg-white hover:text-amber-900 text-white rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Apply Now <ExternalLink size={16} className="ml-2 inline" />
                </Button>
              </a>
              <Link href="/contact?from=partner">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Placeholder - Full Width Ceremony */}
      <section className="py-16 bg-white pb-0">
        <div className="container mx-auto px-6">
          <div className="w-full h-[500px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image1} 
              alt="Awards Gala Night Atmosphere" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3 block">About the Award</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-6 uppercase">
                Celebrating Excellence in Entrepreneurship
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                The Qatar Entrepreneurship Awards is a national platform that recognizes and celebrates excellence and innovation in the field of ICT/Digital in Qatar and the wider region. It serves as an initiative to promote entrepreneurship and support the growth of digital startups.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Hosted by Qatar University's Center for Entrepreneurship & Organizational Excellence (CEOE) in partnership with HyperThink Systems, the QEA ceremony aims to recognize the growing startup ecosystem in Qatar and honor prominent local entrepreneurs and promising startups.
              </p>
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-sm border border-amber-100">
                <Award className="text-amber-600 w-8 h-8" />
                <div>
                  <div className="font-bold text-[#2b204c]">Applications Open</div>
                  <div className="text-sm text-slate-600">Submit your startup for consideration</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-sm p-8 md:p-12 text-white">
                <Trophy className="w-16 h-16 mb-6 text-amber-200" />
                <h3 className="text-2xl font-heading font-bold mb-4 text-white uppercase">Recognition Awaits</h3>
                <p className="text-white/80 mb-6">Join Qatar's most prestigious entrepreneurship awards and gain recognition for your innovation.</p>
                <a href="https://qatarentrepreneurshipawards.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold hover:text-amber-200 transition-colors bg-white/10 px-6 py-3 rounded-sm">
                  Apply Today <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Image Placeholder - Split Layout (Networking) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
               <img 
                 src={image2} 
                 alt="Networking at the Gala" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
             </div>
             <div className="order-1 md:order-2">
               <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-4">Connect with the Best</h3>
               <p className="text-slate-600 leading-relaxed">
                 The awards ceremony isn't just about trophies—it's about gathering the entire ecosystem in one room. From ministers to angel investors, this is the premier networking event of the year.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <motion.section 
        className="py-16 md:py-24 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3 block">Categories</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Award Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {awardCategories.map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-sm border border-slate-100 hover:shadow-lg hover:border-amber-300 transition-all text-center group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold text-[#2b204c] uppercase">{category.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Image Placeholder - Winners Group Shot */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full h-[400px] bg-slate-100 rounded-sm relative overflow-hidden group">
            <img 
              src={image3} 
              alt="Winners Group Photo" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
          </div>
        </div>
      </section>

      {/* 2024 Winners */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3 block">2024 Recap</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Featured Winners</h2>
          </div>
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winners2024.map((winner, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">{winner.category}</div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-3">{winner.winner}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{winner.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Embla Carousel */}
          <div className="md:hidden mt-8 relative">
            <div className="overflow-hidden w-[calc(100%+3rem)] -ml-6 px-6" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {winners2024.map((winner, i) => (
                  <div key={i} className="flex-[0_0_85%] min-w-[300px] pr-4 pl-1 pb-4 snap-center">
                    <div className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] h-full">
                      <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">{winner.category}</div>
                      <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-3">{winner.winner}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{winner.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center gap-2 mt-4 pb-2">
              {winners2024.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? 'bg-amber-500 w-6' : 'bg-slate-200 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-10 md:py-16 bg-gradient-to-br from-amber-900 to-orange-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <Award className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">
            Ready to Be Recognized?
          </h2>
          <p className="text-amber-100/80 max-w-xl mx-auto mb-8">
            Applications are open for the next Qatar Entrepreneurship Awards. Submit your startup and join the ranks of Qatar's most innovative entrepreneurs.
          </p>
          <a href="https://qatarentrepreneurshipawards.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-amber-500 hover:bg-white hover:text-amber-900 text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
              Submit Your Application <ExternalLink size={16} className="ml-2 inline" />
            </Button>
          </a>
        </div>
      </motion.section>

      {/* Related Content */}
      <motion.section 
        className="py-10 md:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Continue Your Journey</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">Case Studies</h3>
              <p className="text-slate-600 text-sm mb-4">See the impact of our programs in action</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                View Stories <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/build-with-us" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">Venture Studio</h3>
              <p className="text-slate-600 text-sm mb-4">Build your startup with our support</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/news" className="group p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all block">
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">News & Events</h3>
              <p className="text-slate-600 text-sm mb-4">Stay updated with latest developments</p>
              <span className="text-[#8b68f6] text-sm font-bold inline-flex items-center gap-2">
                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
