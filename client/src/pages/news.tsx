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

const newsItems = [
  {
    title: "Sustainova Startup KSA Challenge 2024: Catalyzing Innovation for Sustainable Development",
    image: "https://risin.ventures/wp-content/uploads/2024/07/11-e1720680474956.jpg",
    date: "May 2024",
    category: "Event",
    excerpt: "The Sustainova Startup Challenge conducted its highly successful edition in Riyadh, Saudi Arabia.",
    link: "https://risin.ventures/sustainova-startup-ksa-challenge-2024-catalyzing-innovation-for-sustainable-development/"
  },
  {
    title: "Hyperthink Systems and Qatar University Celebrate Innovators at the 2nd Entrepreneurship Awards",
    image: "https://risin.ventures/wp-content/uploads/2024/07/8-e1720681356719.jpg",
    date: "February 2024",
    category: "Partnership",
    excerpt: "Hyperthink Systems, in collaboration with Qatar University, hosted a ceremony to honor the winners.",
    link: "https://risin.ventures/hyperthink-systems-and-qatar-university-celebrate-innovators-at-the-2nd-entrepreneurship-and-innovation-excellence-awards/"
  },
  {
    title: "Deloitte Middle East Technology Fast 50 2nd Edition Announced",
    image: "https://risin.ventures/wp-content/uploads/2024/06/deleitte_2nd.jpg",
    date: "April 2023",
    category: "Recognition",
    excerpt: "Hyperthink Systems recognized as one of the Middle East's fastest-growing technology companies.",
    link: "https://risin.ventures/deloitte-middle-east-technology-fast-50-2nd-edition-announced/"
  },
  {
    title: "Qatar University and Hyperthink Announce Qatar Entrepreneurship Awards at CEED 2022",
    image: "https://risin.ventures/wp-content/uploads/2024/06/QEA4-website.png",
    date: "May 2022",
    category: "Event",
    excerpt: "As part of the 5th Conference on Entrepreneurship and Economic Development (CEED 2022).",
    link: "https://risin.ventures/qatar-university-and-hyperthink-announce-qatar-entrepreneurship-awards-at-ceed-2022/"
  },
  {
    title: "Deloitte Middle East Technology Fast 50 Results Announced",
    image: "https://risin.ventures/wp-content/uploads/2024/06/Deloitte-Middle-East-Technology.png",
    date: "May 2022",
    category: "Recognition",
    excerpt: "Hyperthink Systems recognized as one of the Middle East's fastest-growing technology companies.",
    link: "https://risin.ventures/deloitte-middle-east-technology-fast-50-results-announced/"
  },
  {
    title: "Globalization, Technology Among Growth Drivers for VCs, Says Industry Expert",
    image: "https://risin.ventures/wp-content/uploads/2024/06/rapid-blog.jpg",
    date: "January 2022",
    category: "Insight",
    excerpt: "Rapid globalisation and connectivity through technological advancements are among the factors contributing to increase in VCs.",
    link: "https://risin.ventures/globalisation-technology-among-growth-drivers-for-vcs-says-industry-expert/"
  },
  {
    title: "ETCO Launches 'Beyond' as the First Integrated Platform Using IoT Technology",
    image: "https://risin.ventures/wp-content/uploads/2024/06/1.jpg",
    date: "April 2021",
    category: "Partnership",
    excerpt: "The International Emerging Technology Company of Oman announces the launch of its IoT platform 'Beyond'.",
    link: "https://risin.ventures/etco-launches-beyond-as-the-first-integrated-platform-using-internet-of-things-iot-technology-in-the-sultanate/"
  },
  {
    title: "Hyperthink Booth at QITCOM 2019 (Doha)",
    image: "https://risin.ventures/wp-content/uploads/2024/06/2.jpg",
    date: "October 2019",
    category: "Event",
    excerpt: "Celebrating its latest milestone as a digital leader at Qatar's premier technology exhibition.",
    link: "https://risin.ventures/hyperthink-booth-at-qitcom-2019-doha/"
  }
];

export default function News() {
  const featured = newsItems[0];
  const others = newsItems.slice(1);

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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">News & Insights</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#111827] uppercase leading-none">
                INNOVATION <br className="hidden md:block"/>
                <span className="text-[#2b204c]">IN MOTION</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-[#8b68f6]/20 pl-6 lg:mt-4">
                Stay updated with the latest activity, strategic partnerships, and momentum from within our deep-tech ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
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
                  <span className="bg-[#8b68f6] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                    {featured.category}
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
                  Read More <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </a>
        </div>
      </motion.section>

      {/* News Grid */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] uppercase">All News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((news, i) => (
              <motion.a 
                key={i}
                href={news.link}
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
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#2b204c] text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-2">{news.date}</span>
                  <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 uppercase group-hover:text-[#8b68f6] transition-colors leading-tight line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{news.excerpt}</p>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                    Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs CTA */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="bg-[#2b204c] rounded-sm p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b68f6] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Explore More</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 uppercase">Discover Our Programs</h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                From AI summits to sustainability challenges, explore the flagship initiatives driving innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#programs">
                  <a>
                    <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                      View Programs
                    </Button>
                  </a>
                </Link>
                <Link href="/#portfolio">
                  <a>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#2b204c] rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto">
                      View Portfolio
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cross-links */}
      <motion.section 
        className="py-16 md:py-20 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/case-studies">
              <a className="group flex items-center justify-between p-8 bg-white rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Previous</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Case Studies</h3>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-[#8b68f6] rotate-180 transition-colors" />
              </a>
            </Link>
            <Link href="/">
              <a className="group flex items-center justify-between p-8 bg-white rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
                <div>
                  <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest block mb-2">Home</span>
                  <h3 className="text-xl font-heading font-bold text-[#2b204c] uppercase group-hover:text-[#8b68f6] transition-colors">Back to Homepage</h3>
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
