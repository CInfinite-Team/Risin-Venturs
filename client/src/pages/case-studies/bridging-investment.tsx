import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Instagram, MessageSquare, Link2, Send, TrendingUp, Handshake } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useFormSubmit } from "@/hooks/useFormSubmit";
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
  const { submit, isSubmitting } = useFormSubmit();
  const [commentForm, setCommentForm] = useState({ name: "", email: "", website: "", message: "" });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submit({ 
      formType: "Case Study Comment",
      caseStudy: "Bridging the Investment Gap",
      ...commentForm 
    });
    
    if (success) {
      toast({
        title: "Comment Submitted",
        description: "Thank you for sharing your thoughts! Your comment is awaiting moderation.",
      });
      setCommentForm({ name: "", email: "", website: "", message: "" });
    } else {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-4 md:pt-32 md:pb-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mr-auto text-left"
          >
            <div className="flex items-center justify-start gap-2 mb-4">
              <Link href="/case-studies" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">Case Studies</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Investment</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6 uppercase leading-tight">
              Bridging the Investment Gap <br className="hidden md:block"/>
              <span>Impact of Angel Investors Bootcamp</span>
            </h1>
            <div className="flex items-center justify-start gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> May 2024</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Angel Investment</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pt-4 md:pt-8 pb-8 md:pb-16 bg-white">
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

                <p className="text-slate-600 leading-relaxed mb-6">
                  Since we began empowering entrepreneurs in 2017, we have observed that Qatar’s grow. Innovative startups have continually emerged, contributing to a booming business environment. However, the funding landscape has not kept pace, especially in the areas of startups and innovation. This gap in investment has created significant challenges for both startups seeking capital and investors looking for promising opportunities.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  To better address the needs of the entrepreneurial ecosystem, we conducted an in-depth market analysis. We found that both startups and investors were missing critical components necessary for their growth. Startups often lack a clear understanding of how High Net Worth Individuals (HNIs) invest and manage their portfolios, leaving them in the dark about securing funding. Conversely, many investors are unfamiliar with the innovation ecosystem and the startup world, where the tech landscape and its potential are not well understood.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The investment opportunities in Qatar are vast and diverse, yet traditional investment approaches have not fully embraced the startup market. Qatar’s investment landscape includes its abundant natural resources, particularly in natural gas, and extends to strategic initiatives in infrastructure, education, healthcare, and technology. However, these sectors have yet to fully integrate with the startup ecosystem.
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
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  For example, despite Qatar’s significant advancements in technology and infrastructure, there remains a gap in venture capital and angel investments dedicated to nurturing tech startups. This has limited the growth potential of innovative enterprises that could otherwise contribute substantially to the economy. By bridging this gap, we can unlock new opportunities for both <a href="https://risin.ventures/join-us/#startups" className="text-[#8b68f6] hover:underline">startups</a> and <a href="https://risin.ventures/join-us/#investors" className="text-[#8b68f6] hover:underline">investors</a>, fostering a more robust and dynamic entrepreneurial ecosystem in Qatar.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Through our efforts, we aim to facilitate a better understanding between startups and investors, providing the necessary support and knowledge to bridge this divide. Our goal is to create an environment where startups can thrive with adequate funding and investors can confidently explore the innovative landscape, driving mutual growth and success.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                   However, the current funding landscape does not fully leverage these opportunities. With a limited number of angel investors, startups struggle to access the capital needed to scale and innovate.
                </p>
                
                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">The Solution: AIB & SIRP</h3>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   After thoroughly analyzing and identifying the gaps in the ecosystem, we developed a comprehensive strategy and roadmap to improve the funding scene in the country. This plan was proposed and discussed with our principal, the Ministry of Communications, and Information Technology (MCIT). With their vision alignment and sponsorship, the design of the program was finalized and the launch was announced immediately.
                 </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The first pivotal step in this journey was receiving a mandate from MCIT. This mandate empowered us to structure the Angels Investment program effectively and align it with national economic goals. At the core, the program offered HNIs in-house training to become well-versed in local market dynamics while simultaneously preparing startups to attract investments. This dual approach led to the creation of the AIB/SIRP program, designed to foster a robust investment ecosystem within Qatar.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                   <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/aib1.png" 
                    alt="AIB Model" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                   <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/DSC05292-1024x683.jpg" 
                    alt="Bootcamp Session" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our AIB (Angel Investment Bootcamp) and SIRP (Startup Investment Readiness Program) are unique initiatives in Qatar, addressing the lack of comprehensive support in a market with a limited number of angel investors. By offering specialized <a href="https://risin.ventures/pillars/#mentoring-training" className="text-[#8b68f6] hover:underline">training</a> and fostering critical connections, <a href="https://risin.ventures/" className="text-[#8b68f6] hover:underline">Risin Ventures</a> is pivotal in enhancing Qatar’s investment ecosystem and promoting a more dynamic entrepreneurial environment.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                   The AIB is a four-day intensive training program designed to educate investors about their roles, teach them how to identify promising startups, and maximize their investment returns. Meanwhile, the SIRP equips startups with the knowledge to select suitable investors and understand term sheets, ultimately helping them scale and grow.
                </p>

                <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-8 mb-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-[#8b68f6] mb-2 uppercase text-xs tracking-widest">Angel Investment Bootcamp (AIB)</h5>
                      <p className="text-sm text-slate-600">Equips investors with foundational knowledge of startup dynamics, personalized investment strategies, and techniques for generating deal flow and managing portfolios, enhancing their decision-making and maximizing returns. It covers valuation methods and overcoming valuation gaps, providing tools for accurate valuation and smoother negotiations. AIB also focuses on due diligence, investment documentation, and understanding various funding instruments, ensuring comprehensive risk assessment and proper governance.</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#8b68f6] mb-2 uppercase text-xs tracking-widest">Startup Investment Readiness (SIRP)</h5>
                      <p className="text-sm text-slate-600">Prepares startups to navigate the funding landscape, craft compelling pitches, understand term sheets, and practice pitching, thereby increasing their chances of securing investments and building confidence in their presentations.</p>
                    </div>
                  </div>
                </div>


                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Impact & Results</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Over the course of four days, both investors and startups received extensive training, providing them with the knowledge and skills to collaborate effectively. Out of 30+ startups from the DIC incubation trained in the program, the top 8 were selected to pitch on demo day. This merit-based selection focused on traction, product-market fit (PMF), and readiness to raise funds.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The final demo day attracted not only the trained angel investors but also many other local investors, VCs, and institutions. Over 30 investors, selected from more than 50 applicants, showed keen interest in the program. This enthusiasm highlighted the investors’ eagerness to learn about the entrepreneurial ecosystem and contribute to it.
                </p>
                
                 <div className="grid md:grid-cols-2 gap-6 mb-12">
                   <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/Dan-e1720362221378.png" 
                    alt="Demo Day" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                   <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/DSC01044-1024x683.jpg" 
                    alt="Investors" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The program also created a substantial network of experienced individuals who trained participants and facilitated connections between investors and startups. Post-program, we continued to nurture these connections, leading to potential investments. Notably, three startups from the AIB/SIRP program announced funding of over QAR 7 million – amounts from major entities and private investors within DIC/MCIT program which was held 2 months later “MTD” Make the deal program.
                </p>
                 <p className="text-slate-600 leading-relaxed mb-12">
                  This initiative underscores the significant impact of well-structured training and networking in fostering a thriving investment ecosystem and supporting the growth of innovative startups in Qatar.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Conclusion</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  By emphasizing education and readiness, we aim to unlock the full potential of Qatar’s entrepreneurial and <a href="https://risin.ventures/pillars/#investment-programs" className="text-[#8b68f6] hover:underline">investment</a> landscapes, ensuring that both startups and investors can thrive and contribute to the country’s journey towards becoming a knowledge-based economy and a global hub for innovation. We have successfully designed this model for the future executions, and a playbook has been well established with potentials of its resulting in numerous deals between startups and investors.
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="bg-[#2b204c] text-white hover:bg-[#8b68f6] rounded-sm px-8 py-3 font-bold text-sm uppercase tracking-widest transition-all w-full md:w-auto">
                      {isSubmitting ? "Submitting..." : "Post Comment"} <Send size={16} className="ml-2" />
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
                      className="w-10 h-10 cursor-pointer rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={18} />
                    </button>
                    <button 
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 cursor-pointer rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-black hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share on X"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799">
                        <path fill="currentColor" fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.instagram.com/risin.ventures/`, '_blank')}
                      className="w-10 h-10 cursor-pointer rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#E1306C] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Share on Instagram"
                    >
                      <Instagram size={18} />
                    </button>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast({ title: "Link copied", description: "The link has been copied to your clipboard." });
                      }}
                      className="w-10 h-10 cursor-pointer rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#8b68f6] hover:text-white flex items-center justify-center transition-all"
                      aria-label="Copy Link"
                      title="Copy Link"
                    >
                      <Link2 size={18} />
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
                    <Link href="/case-studies/aix-summit">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2025/05/a-e1720361139454.png" alt="AIX Summit" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">AIX Summit: Leading the AI Revolution</h4>
                      </a>
                    </Link>
                    <Link href="/case-studies/ai-hackathons">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2025/05/a-1.png" alt="AI Hackathons" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">AI Hackathons for Enterprises</h4>
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
              { title: "AIX Summit: Leading the AI Revolution", image: "https://risin.ventures/wp-content/uploads/2025/05/a-e1720361139454.png", link: "/case-studies/aix-summit" },
              { title: "AI Hackathons for Enterprises", image: "https://risin.ventures/wp-content/uploads/2025/05/a-1.png", link: "/case-studies/ai-hackathons" },
              { title: "Sustainova Challenge", image: "https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png", link: "/case-studies/sustainova-challenge" }
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
