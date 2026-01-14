import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Twitter, Facebook, MessageSquare, Send, Building2, Lightbulb } from "lucide-react";
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

export default function CorporateVentureStudiosCaseStudy() {
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Venture Studios</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-tight">
              Corporate Venture Studios <br className="hidden md:block"/>
              <span className="text-stroke">Fueling Growing Economies</span>
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> August 2024</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Venture Building</span>
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
                  src="https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png" 
                  alt="Corporate Venture Studios Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <p className="text-slate-600 leading-relaxed mb-6">
                  In today’s fast-paced world, businesses need to stay ahead of the curve to survive and thrive. One powerful way to do this is through <strong>Corporate Venture Studios (CVS)</strong>. These studios combine the best of both worlds: the innovation of startups and the resources of big companies. This model is gaining popularity worldwide, with its focus on economic growth and innovation, is in a great position to benefit from this approach.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">What is a Corporate Venture Studio?</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A Corporate Venture Studio is like a startup factory inside a big company. Instead of only <a href="https://risin.ventures/pillars/#investment-programs" className="text-[#8b68f6] hover:underline">investing</a> in startups and maintaining an arm length distance like what a traditional VC firm does, the company actively creates and builds new businesses from scratch. This means they find opportunities, put together teams, provide funding, and guide these new ventures to success. The ventures created are from the problem statements which arises out of the value chain problems within the organization or from their peers.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/CVS_2-e1722323233622.jpg" 
                    alt="CVS Concept 1" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/CVS_1-e1722323324974.jpg" 
                    alt="CVS Concept 2" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Shift in Innovation from R&D to CVS</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Traditionally, innovation within large corporations has been driven by Research and Development (R&D) departments. These teams focus on enhancing existing products and technologies within the company’s core business. However, R&D processes can be slow and constrained by the company’s existing structures and goals. As the pace of technological change accelerates, many companies are finding that R&D alone is not enough to stay competitive.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  This is where Corporate Venture Studios come in. CVS represents a shift towards a more dynamic and entrepreneurial approach to innovation. By creating new ventures outside the core business, companies can explore radical new ideas and business models without being hindered by their existing processes. This flexibility allows quicker iteration and adaptation, making it easier to stay ahead of market trends and technological advancements.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Partners in the <a href="https://risin.ventures/pillars/#venture-builder" className="text-[#8b68f6] hover:underline">venture-building</a> space add significant value by offering deep expertise and experience in the startup ecosystem, providing access to skilled founders, marketers, and developers, and leveraging a robust network of mentors, partner companies, and potential investors. They help accelerate the growth of new businesses and facilitate risk sharing, allowing companies to spread the risks and rewards of new ventures, thereby reducing the burden on the corporate and enhancing the chances of success.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  <a href="https://risin.ventures/" className="text-[#8b68f6] hover:underline">Risin Ventures</a> offers a comprehensive suite of services designed to support every stage of venture creation and growth. Our offerings include ideation and validation, team scouting and matchmaking, <a href="https://risin.ventures/pillars/#mentoring-training" className="text-[#8b68f6] hover:underline">mentorship and support</a>, and access to capital. By leveraging these experience and resources, Risin Ventures can help companies navigate the intricacies of building new ventures and achieve greater success.
                </p>
                
                <img 
                  src="https://risin.ventures/wp-content/uploads/2024/07/Risin-Venture-Studio-V1.0-e1722175043886-1024x430.png" 
                  alt="Risin Venture Studio Model" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Conclusion</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Corporate Venture Studios offer a powerful way for companies to drive innovation and economic growth, especially in growing economies. By combining the strengths of big companies with the agility of startups, CVS can help companies stay competitive and contribute to the nation’s vision for a diversified and innovative economy. For mid to large corporations, now is the perfect time to explore the potential of Corporate Venture Studios and help shape the future of the country’s innovation landscape.
                </p>

                <div className="bg-[#2b204c] text-white p-8 rounded-sm text-center mb-16">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4">Start Your Venture Studio Journey</h3>
                  <p className="text-slate-300 mb-6">
                    To learn more, reach out to our team today!
                  </p>
                  <Link href="/contact">
                    <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 font-bold text-sm uppercase tracking-widest transition-all">
                      Contact Us
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
                    <Link href="/case-studies/ideas-to-impact">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2024/06/31-e1720361297587.jpeg" alt="Startup Ecosystem" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Qatar's Path to a Thriving Startup Ecosystem</h4>
                      </a>
                    </Link>
                    <Link href="/case-studies/sustainova-challenge">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png" alt="Sustainova" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Sustainova Challenge: Empowering Sustainability</h4>
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
              { title: "AI Hackathons for Enterprises", image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png", link: "/case-studies/ai-hackathons" },
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
