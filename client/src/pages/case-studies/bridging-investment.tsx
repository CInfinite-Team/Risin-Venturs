import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Twitter, Facebook, MessageSquare, Send, TrendingUp, Handshake } from "lucide-react";
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

export default function BridgingInvestmentCaseStudy() {
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Investment</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-tight">
              Bridging the Investment Gap <br className="hidden md:block"/>
              <span className="text-stroke">Impact of Angel Investors Bootcamp</span>
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> May 2024</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Angel Investment</span>
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
                  src="https://risin.ventures/wp-content/uploads/2024/07/aib3.jpg" 
                  alt="Angel Investors Bootcamp Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <p className="text-slate-600 leading-relaxed mb-8">
                  Since we began empowering entrepreneurs in 2017, we have observed that Qatar’s ecosystem has grown. Innovative startups have continually emerged, contributing to a booming business environment. However, the funding landscape has not kept pace, especially in the areas of startups and innovation. This gap in investment has created significant challenges for both startups seeking capital and investors looking for promising opportunities.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  To better address the needs of the entrepreneurial ecosystem, we conducted an in-depth market analysis. We found that both startups and investors were missing critical components necessary for their growth. Startups often lack a clear understanding of how High Net Worth Individuals (HNIs) invest, while many investors are unfamiliar with the innovation ecosystem.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Qatar’s Investment Landscape</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The investment opportunities in Qatar are vast and diverse, yet traditional investment approaches have not fully embraced the startup market. Qatar’s investment landscape includes its abundant natural resources and extends to strategic initiatives in infrastructure, education, healthcare, and technology.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  By bridging this gap, we can unlock new opportunities for both startups and investors, fostering a more robust and dynamic entrepreneurial ecosystem in Qatar.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/aib2.jpg" 
                    alt="Bootcamp Session" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/aib4.jpg" 
                    alt="Networking" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">The Solution: AIB & SIRP</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The first pivotal step in this journey was receiving a mandate from MCIT. This mandate empowered us to structure the Angels Investment program effectively and align it with national economic goals.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our <strong>AIB (Angel Investment Bootcamp)</strong> and <strong>SIRP (Startup Investment Readiness Program)</strong> are unique initiatives in Qatar, addressing the lack of comprehensive support in a market with a limited number of angel investors.
                </p>

                <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-8 mb-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-[#8b68f6] mb-2 uppercase text-xs tracking-widest">Angel Investment Bootcamp (AIB)</h5>
                      <p className="text-sm text-slate-600">Equips investors with foundational knowledge of startup dynamics, investment strategies, and due diligence.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#8b68f6] mb-2 uppercase text-xs tracking-widest">Startup Investment Readiness (SIRP)</h5>
                      <p className="text-sm text-slate-600">Prepares startups to navigate the funding landscape, craft compelling pitches, and understand term sheets.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/DSC05292-1024x683.jpg" 
                    alt="Pitch Day" 
                    className="w-full rounded-sm shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Impact & Results</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Over the course of four days, both investors and startups received extensive training. Out of 30+ startups from the DIC incubation, the top 8 were selected to pitch on demo day.
                </p>
                <div className="grid gap-6 mb-8">
                  <div className="border-l-4 border-[#8b68f6] pl-6 py-2">
                    <h5 className="font-bold text-[#2b204c] mb-1">30+ Investors</h5>
                    <p className="text-slate-600 text-sm">Selected from more than 50 applicants, showing keen interest in the program.</p>
                  </div>
                  <div className="border-l-4 border-[#8b68f6] pl-6 py-2">
                    <h5 className="font-bold text-[#2b204c] mb-1">QAR 7 Million+</h5>
                    <p className="text-slate-600 text-sm">Funding announced for three startups from the AIB/SIRP program within 2 months.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Conclusion</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  By emphasizing education and readiness, we aim to unlock the full potential of Qatar’s entrepreneurial and investment landscapes. We have successfully designed this model for future executions, and a playbook has been well established with potentials of resulting in numerous deals between startups and investors.
                </p>

                <div className="bg-[#2b204c] text-white p-8 rounded-sm text-center mb-16">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4">Looking for Investment?</h3>
                  <p className="text-slate-300 mb-6">
                    We’re always interested in meeting exceptional entrepreneurs. Send us your pitch deck and let’s start a conversation.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 font-bold text-sm uppercase tracking-widest transition-all">
                      Submit Pitch Deck
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
                    <button className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center transition-all">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all">
                      <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#8b68f6] hover:text-white flex items-center justify-center transition-all">
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
                      <Link href="/programs/entrepreneurship-awards">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">Entrepreneurship Awards</h4>
                          <span className="text-xs text-slate-500">Celebrating excellence in innovation</span>
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
                    <Link href="/case-studies/corporate-venture-studios">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png" alt="Corporate Venture Studios" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Why Corporate Venture Studios are Important</h4>
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
              { title: "Empowering Innovation via Hackathons", image: "https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg", link: "/case-studies/empowering-innovation" },
              { title: "Sustainova Challenge", image: "https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png", link: "/case-studies/sustainova-challenge" },
              { title: "AI Hackathons for Enterprises", image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png", link: "/case-studies/ai-hackathons" }
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
