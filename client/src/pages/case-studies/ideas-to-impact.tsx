import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Twitter, Facebook, MessageSquare, Send, Rocket, Globe, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
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

export default function IdeasToImpactCaseStudy() {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", website: "", message: "" });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Comment Submitted",
      description: "Thank you for sharing your thoughts! Your comment is awaiting moderation.",
    });
    setCommentForm({ name: "", email: "", website: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Link href="/case-studies" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">Case Studies</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Startup Ecosystem</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-tight">
              From Ideas to Impact <br className="hidden md:block"/>
              <span className="text-stroke">Qatar's Path to a Thriving Ecosystem</span>
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> June 2024</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Incubation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
            {/* Left Column: Narrative Content */}
            <div className="lg:col-span-2">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="prose prose-lg prose-slate max-w-none"
              >
                <img 
                  src="https://risin.ventures/wp-content/uploads/2024/06/31-e1720361297587.jpeg" 
                  alt="Startup Ecosystem Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <p className="text-slate-600 leading-relaxed mb-8">
                  In the world of startups, an intake program acts as a launchpad, providing new businesses with the resources, <a href="https://risin.ventures/pillars/#mentoring-training" className="text-[#8b68f6] hover:underline">mentorship</a>, and guidance needed to turn their ideas into successful ventures. Globally, these programs are often seen as pre-incubation programs that offer essential support to early-stage startups; they tailor their support to the unique needs of each startup, helping them achieve key milestones and prepare for successful incubation and scaling.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  As <a href="https://hyperthinksys.com/" className="text-[#8b68f6] hover:underline">Hyperthink Systems</a> and <a href="https://risin.ventures/" className="text-[#8b68f6] hover:underline">Risin Ventures</a>, along with the Ministry of Communications and Information Technology’s startup arm, the Digital Incubation Center (DIC), we identified the immense potential to boost Qatar’s startup space. We’ve been committed to finding and supporting the right startups and talented individuals, helping to build a vibrant entrepreneurial community.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/2W7A3496-1024x683.jpg" 
                    alt="Training Session" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/DSC09365-1024x683.jpg" 
                    alt="Startups Pitching" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  In recent years, Qatar’s startup ecosystem has grown significantly, becoming a lively and dynamic hub in the Middle East. Key initiatives, strategic investments, and major events like the Web Summit Qatar 2024 have attracted global attention and positioned Qatar as a top destination for tech innovation and startups.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  DIC along with HTS organized eight successful editions, but the previous editions primarily focused on local talent and resources, supporting several promising startups. However, a recurring challenge we faced was the repetition of ideas and solutions, which limited the diversity of innovation. We realized the need for a fresh approach. To bring in unique ideas and perspectives, we decided to accept applications from startups at different stages and outside the country as well.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">The 9th Edition: Transforming the Landscape</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  With this momentum, we launched the 9th edition of the <a href="https://risin.ventures/pillars/#startup-incubator" className="text-[#8b68f6] hover:underline">Startup Intake Program</a> with a clear goal: to transform Qatar’s startup landscape. This program was carefully designed to meet the needs of startups at different stages of their development. We used a dual-cohort approach, targeting both early-stage startups with new ideas and more advanced startups looking to grow.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Out of the numerous of applications from over 30 countries, we selected 150 promising startups through a thorough screening process. These startups, came from various sectors like Fintech, Edtech, Healthtech, Logitech, etc, bringing a diverse mix of ideas and innovations.
                </p>
                 <p className="text-slate-600 leading-relaxed mb-12">
                  The program began with six in-depth training modules for each track separately, covering essential topics like product development, market validation, and scaling strategies. These sessions helped entrepreneurs gain the skills and knowledge they needed to refine their business models and prepare for growth.
                </p>
                
                 <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/ic99.png" 
                    alt="Intake Program Sectors" 
                    className="w-full rounded-sm shadow-md mb-4"
                  />
                   <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/WhatsApp-Image-2024-05-15-at-10.45.05-AM-1024x768.jpeg" 
                    alt="Mentor Mania Mentorship Intake Program" 
                    className="w-full rounded-sm shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Mentorship and Growth</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  <a href="https://risin.ventures/pillars/#mentoring-training" className="text-[#8b68f6] hover:underline">Mentorship</a> was one of the highlights of our program, started during the training period and spread over six weeks. With the participation of over 20 mentors who provided more than 250 hours of expert guidance, startups received personalized support and invaluable feedback. We also organized ‘Mentor Mania’, a dedicated networking event to facilitate networking and collaboration between mentors and startups, providing the new cohort of startups with access to experienced mentors and valuable guidance. The startups also attended other networking events and sessions, where they connected with key stakeholders, potential investors, and industry leaders.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  The startups were finely vetted by the mentors, the internal team and finally by a panel of judges for each track. The program concluded with a closing ceremony where 25 startups were awarded with incubation services worth over 500 thousand Qatari riyal each out of which 5 winners from growth track and idea track were also awarded cash prizes of five hundred and fifty thousand Qatari riyals. We celebrated the startups’ achievements and showcased their potential to investors and industry leaders. Many startups moved from the idea stage to product development, achieving significant milestones and gaining market traction.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  The program attracted investor interest, with some startups securing <a href="https://risin.ventures/partners/" className="text-[#8b68f6] hover:underline">partnerships</a> and potential fundings. The Startup Intake Program had a big impact beyond the immediate success of its participants entering the incubation program. It helped foster collaboration, innovation, and strategic partnerships, contributing to the growth and diversity of Qatar’s startup ecosystem. This positioned Qatar as a leading hub for entrepreneurship and innovation.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Conclusion</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We are set out to incubating these promising startups across different phases of their growth journey. Our <a href="https://risin.ventures/pillars/#startup-incubator" className="text-[#8b68f6] hover:underline">incubation program</a> offers curated training, mentorship, go to market access, funding, co working space and not to mention industry connections and vibrant community access. We hope to raise unicorns from this cohort and inspire the future entrepreneurs to become change makers.
                </p>
                 <p className="text-slate-600 leading-relaxed mb-6">
                  While there is still much ground to cover, we remain committed in our journey to shape the future of Qatar’s startup ecosystem, driving innovation and prosperity for years to come.
                </p>

                <div className="bg-[#2b204c] text-white p-8 rounded-sm text-center mb-16">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4">Join Our Next Cohort</h3>
                  <p className="text-slate-300 mb-6">
                    To learn more, reach out to our team today!
                  </p>
                  <Link href="/contact">
                    <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 font-bold text-sm uppercase tracking-widest transition-all">
                      Apply Now
                    </Button>
                  </Link>
                </div>

                {/* Comment Section */}
                <div id="comments" className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="text-[#8b68f6]" size={24} />
                    <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase">Leave a Comment</h3>
                  </div>
                  <p className="text-slate-500 text-sm mb-8">
                    Your email address will not be published. Required fields are marked *
                  </p>
                  <form onSubmit={handleCommentSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#2b204c]">Name *</label>
                        <Input 
                          id="name" 
                          value={commentForm.name}
                          onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                          required 
                          placeholder="Your Name" 
                          className="bg-white border-slate-200 focus:border-[#8b68f6] rounded-sm" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#2b204c]">Email *</label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={commentForm.email}
                          onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                          required 
                          placeholder="your@email.com" 
                          className="bg-white border-slate-200 focus:border-[#8b68f6] rounded-sm" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="website" className="text-xs font-bold uppercase tracking-widest text-[#2b204c]">Website</label>
                      <Input 
                        id="website" 
                        type="url" 
                        value={commentForm.website}
                        onChange={(e) => setCommentForm({...commentForm, website: e.target.value})}
                        placeholder="https://yourwebsite.com" 
                        className="bg-white border-slate-200 focus:border-[#8b68f6] rounded-sm" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#2b204c]">Message *</label>
                      <Textarea 
                        id="message" 
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({...commentForm, message: e.target.value})}
                        required 
                        placeholder="Type your comment here..." 
                        className="bg-white border-slate-200 focus:border-[#8b68f6] rounded-sm min-h-[150px]" 
                      />
                    </div>
                    <Button type="submit" className="bg-[#2b204c] text-white hover:bg-[#8b68f6] rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all w-full md:w-auto">
                      Post Comment <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                </div>

              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Share Card */}
                <div className="bg-white border border-slate-100 p-6 rounded-sm shadow-sm">
                  <span className="text-[#8b68f6] text-xs font-bold uppercase tracking-widest block mb-4">Share This Story</span>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </button>
                    <button 
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={18} />
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={18} />
                    </button>
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: document.title,
                            url: window.location.href
                          }).catch(console.error);
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          toast({ title: "Link copied", description: "The link has been copied to your clipboard." });
                        }
                      }}
                      className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#8b68f6] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share Link"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Related Programs */}
                <div className="bg-[#F9FAFB] border border-slate-100 p-6 rounded-sm">
                  <span className="text-[#8b68f6] text-xs font-bold uppercase tracking-widest block mb-4">Related Programs</span>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/build-with-us">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">Venture Studio</h4>
                          <span className="text-xs text-slate-500">Build your next venture with us</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/aix">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">AIX Summit</h4>
                          <span className="text-xs text-slate-500">Flagship AI innovation program</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Related Case Studies Sidebar */}
                <div className="bg-white border border-slate-100 p-6 rounded-sm">
                  <span className="text-[#2b204c] text-xs font-bold uppercase tracking-widest block mb-4">More Case Studies</span>
                  <div className="space-y-6">
                    <Link href="/case-studies/bridging-investment">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2024/07/aib3.jpg" alt="Angel Investment" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Bridging the Investment Gap</h4>
                      </a>
                    </Link>
                    <Link href="/case-studies/empowering-innovation">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg" alt="Corporate Hackathons" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Empowering Innovation through Hackathons</h4>
                      </a>
                    </Link>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-[#2b204c] to-[#1a1333] p-6 rounded-sm text-white text-center">
                  <Zap size={32} className="text-[#8b68f6] mx-auto mb-4" />
                  <h4 className="font-bold uppercase mb-2">Have an Idea?</h4>
                  <p className="text-xs text-slate-300 mb-6">We help founders transform ideas into scalable ventures.</p>
                  <Link href="/contact">
                    <Button className="w-full bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white font-bold text-xs uppercase tracking-widest transition-all">
                      Get In Touch
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section: Related Content Bottom */}
      <section className="py-16 bg-[#F9FAFB] border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-[#2b204c] uppercase">Discover More</h2>
            <Link href="/case-studies" className="text-sm font-bold text-[#8b68f6] uppercase tracking-widest hover:text-[#2b204c] transition-colors flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Corporate Venture Studios Explained", image: "https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png", link: "/case-studies/corporate-venture-studios" },
              { title: "Empowering Innovation via Hackathons", image: "https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg", link: "/case-studies/empowering-innovation" },
              { title: "Bridging the Investment Gap", image: "https://risin.ventures/wp-content/uploads/2024/07/aib3.jpg", link: "/case-studies/bridging-investment" }
            ].map((item, i) => (
              <Link key={i} href={item.link}>
                <a className="group bg-white border border-slate-100 rounded-sm overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-[#2b204c] text-sm uppercase leading-tight group-hover:text-[#8b68f6] transition-colors">{item.title}</h4>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
