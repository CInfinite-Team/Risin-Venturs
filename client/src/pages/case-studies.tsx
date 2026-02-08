import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const caseStudies = [
  {
    title: "Bridging Ambition and Intelligence – Inside the AIX Summit & Hackathon Qatar Edition",
    image: "https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png",
    date: "December 2025",
    excerpt: "Inside the high-stakes AI summit that brought together founders and enterprises to build real AI solutions.",
    link: "/case-studies/aix-summit",
    featured: true
  },
  {
    title: "AI Hackathons for Enterprises: Beyond Buzzwords to Real ROI",
    image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png",
    date: "May 2025",
    excerpt: "How enterprises are leveraging structured hackathons to build production-ready AI tools in weeks, not months.",
    link: "/case-studies/ai-hackathons",
    featured: false
  },
  {
    title: "Sustainova Challenge: Empowering Startups Sustainability Stream in the GCC",
    image: "https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png",
    date: "November 2024",
    excerpt: "The Sustainova Challenge is establishing itself as a transformative platform for sustainability-focused startups in the GCC.",
    link: "/case-studies/sustainova-challenge",
    featured: false
  },
  {
    title: "Why Corporate Venture Studios are Important for Growing Economies",
    image: "https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png",
    date: "August 2024",
    excerpt: "Corporate Venture Studios combine the best of both worlds to help businesses stay ahead of the curve.",
    link: "/case-studies/corporate-venture-studios",
    featured: false
  },
  {
    title: "Empowering Innovation through Corporate Hackathons",
    image: "https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg",
    date: "July 2024",
    excerpt: "The development of the innovation ecosystem is accelerated when coders and techies are matched with real-time use cases.",
    link: "/case-studies/empowering-innovation",
    featured: false
  },
  {
    title: "From Ideas to Impact: Qatar's Path to a Thriving Startup Ecosystem",
    image: "https://risin.ventures/wp-content/uploads/2024/06/31-e1720361297587.jpeg",
    date: "June 2024",
    excerpt: "An intake program acts as a launchpad, providing new businesses with the resources, mentorship, and guidance needed to succeed.",
    link: "/case-studies/ideas-to-impact",
    featured: false
  },
  {
    title: "Bridging the Investment: The Impact of the Angel Investors Bootcamp",
    image: "https://risin.ventures/wp-content/uploads/2024/07/aib3.jpg",
    date: "May 2024",
    excerpt: "Qatar's innovative startups have continually emerged, but the funding landscape has not kept pace.",
    link: "/case-studies/bridging-investment",
    featured: false
  }
];

export default function CaseStudies() {
  const featured = caseStudies.find(c => c.featured);
  const others = caseStudies.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/about" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Case Studies</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] uppercase leading-none">
                Impact in <br className="hidden md:block"/>
                <span className="text-stroke">Action</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-[#8b68f6]/20 pl-6 lg:mt-4">
                Discover how we transform high-potential ideas into high-impact enterprises. Real stories of venture building from the ground up.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featured && (
        <motion.section 
          className="py-16 md:py-20 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="container mx-auto px-6">
            <a 
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video md:aspect-[4/3] relative overflow-hidden rounded-sm">
                  <img 
                    src={featured.image} 
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#952828] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-3">{featured.date}</span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] mb-4 uppercase group-hover:text-[#8b68f6] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="text-sm font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </motion.section>
      )}

      {/* Case Studies Grid */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] uppercase">More Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((study, i) => (
              <motion.a 
                key={i}
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-2">{study.date}</span>
                  <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 uppercase group-hover:text-[#8b68f6] transition-colors leading-tight line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{study.excerpt}</p>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                    Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-20 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Ready to Build?</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">Want Your Story Featured?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Join our portfolio of successful ventures and let us help you build the next great deep tech company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#portfolio">
              <a>
                <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                  View Portfolio
                </Button>
              </a>
            </Link>
            <a href="https://risin.ventures/contact/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2b204c] rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                Submit Your Pitch
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Cross-links */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/partners">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Previous</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Our Partners</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] rotate-180 transition-colors" />
              </a>
            </Link>
            <Link href="/news">
              <a className="group flex items-center justify-between p-8 bg-[#F9FAFB] rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Next</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">News & Insights</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] transition-colors" />
              </a>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
