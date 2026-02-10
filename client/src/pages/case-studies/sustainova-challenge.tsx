import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Twitter, Facebook, MessageSquare, Send, Award, Users } from "lucide-react";
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

export default function SustainovaChallengeCaseStudy() {
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Sustainova</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6 uppercase leading-tight">
              Sustainova Challenge <br className="hidden md:block"/>
              <span>Empowering Sustainability in GCC</span>
            </h1>
            <div className="flex items-center justify-start gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> November 2024</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Climate Tech</span>
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
                  src="https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png" 
                  alt="Sustainova Challenge Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <p className="text-slate-600 leading-relaxed mb-6">
                  The <a href="https://sustainovachallenge.com/" target="_blank" rel="noopener noreferrer" className="text-[#8b68f6] font-bold hover:underline">Sustainova Challenge</a>, powered by Risin Ventures, is establishing itself as a transformative platform for sustainability-focused startups in the GCC region. Recently, two impactful editions were held in Riyadh and Dubai, bringing together innovators, investors, and enterprises committed to creating a sustainable future.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  With over <strong>300 applications</strong>, the challenge underscored the growing momentum in sustainability entrepreneurship. Ten promising startups pitched their ideas in each edition, showcasing innovative solutions to tackle pressing environmental challenges while driving economic growth.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Spotlight on Winners</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  From the <strong>150+</strong> application received from each country, organizers had a hard time choosing the top 10 startups who will go on the stage. A few of the startups that were dropped out of pitching were extremely good however a fair evaluation based on traction, impact, scalability and founders profile ensured top 10 startups from each country pitching for country challenge. The competitions culminated in the recognition of standout startups in each edition:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-6">
                    <h4 className="font-heading font-bold text-[#2b204c] uppercase mb-4 flex items-center gap-2">
                      <Award className="text-[#8b68f6]" size={20} /> Dubai Edition Winners
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-600 font-bold">
                      <li>FORTYGUARD</li>
                      <li>OLIVEGAEA</li>
                      <li>MRUNA</li>
                    </ol>
                  </div>
                  <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-6">
                    <h4 className="font-heading font-bold text-[#2b204c] uppercase mb-4 flex items-center gap-2">
                      <Award className="text-[#8b68f6]" size={20} /> Riyadh Edition Winners
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-600 font-bold">
                      <li>VEROFAX</li>
                      <li>WAJAD</li>
                      <li>NETZERO</li>
                    </ol>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png.png" 
                    alt="Riyadh Pitching" 
                    className="w-full rounded-sm shadow-md"
                  />
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-1.png" 
                    alt="Dubai Pitching" 
                    className="w-full rounded-sm shadow-md"
                  />
                </div>
                <p className="text-slate-600 leading-relaxed mb-12 italic text-sm text-center">
                    These startups impressed the judges and investors with their scalable solutions across climate tech, SaaS platforms, and sustainable agriculture, reflecting the region’s commitment to driving environmental change.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Key Trends and Insights</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The Sustainova Challenge unveiled key trends shaping the sustainability ecosystem in the GCC:
                </p>
                <ol className="list-decimal pl-6 space-y-4 mb-12 text-slate-600">
                    <li>
                        <strong>Emergence of Climate Tech</strong>
                        <br/>
                        Many startups showcased innovative climate tech solutions, particularly <strong>SaaS-based platforms</strong> that enable enterprises to measure and reduce their carbon footprints. This highlights the growing interest and commitment of large organizations to environmental sustainability.
                    </li>
                    <li>
                        <strong>Collaborative Solutions</strong>
                        <br/>
                        Startups in <strong>carbon offsetting through forestation</strong> and <strong>measuring emission reductions</strong> demonstrated how partnerships with governments, NGOs, and private enterprises are creating new opportunities for impact.
                    </li>
                    <li>
                        <strong>Rise of Agripreneurs</strong>
                        <br/>
                        The event also spotlighted <strong>technology agriculturists (Agripreneurs)</strong>—innovative entrepreneurs leveraging technology like:
                         <ul className="list-disc pl-6 mt-2 space-y-1">
                             <li><strong>AI-driven pest detection</strong>,</li>
                             <li><strong>Sensor-based irrigation</strong>,</li>
                             <li><strong>Vertical farming, aquaponics, and hydroponics</strong>. These solutions not only optimize crop production but also empower other farmers to adopt efficient and sustainable practices.</li>
                         </ul>
                    </li>
                </ol>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Real Impact</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The Sustainova Challenge proved to be more than just a competition; it became a launchpad for startups to connect with stakeholders and unlock growth opportunities:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-12 text-slate-600">
                  <li><strong>Global Recognition</strong>: 25+ startups gained international visibility.</li>
                  <li><strong>One-on-One Connections</strong>: Over 50 tailored meetings with investors, enterprise partners, and government entities directly contributed to startups securing acceleration program placements, investment interests, and business deals.</li>
                  <li><strong>Sector-wide Influence</strong>: Startups are inspiring a new wave of entrepreneurs to jump into sustainability-driven ventures, driving long-term impact.</li>
                </ul>

                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/11/1-38-of-88-min-scaled-1.jpeg" 
                    alt="Sustainova Event Photo" 
                    className="w-full rounded-sm shadow-md mb-4"
                  />
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/11/1-18-of-88-min-scaled-1.jpeg" 
                    alt="Sustainova Networking" 
                    className="w-full rounded-sm shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Partners and Collaborators</h3>
                <p className="text-slate-600 leading-relaxed mb-12">
                  The success of the Sustainova Challenge was augmented by its visionary partners, including <strong>CODE of MCIT</strong>, <strong>MEWA</strong>, <strong>Icon Training</strong>, <strong>Roland Berger, and Phoenix Ventures</strong>. Their support in resources, mentorship, and network access played a vital role in empowering startups to refine and scale their solutions.
                </p>


                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">A Vision for the Future</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The inaugural editions of the Sustainova Challenge mark a significant milestone in building a thriving ecosystem for sustainability-led ventures in the GCC. With plans to conduct more regional editions and a <strong>grand finale to identify the GCC’s top three startups</strong>, the program is paving the way for the emergence of unicorns in the sustainability space.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                    By fostering innovation and supporting entrepreneurs, Sustainova aims to enable impactful solutions that reduce carbon emissions, contribute to the circular economy, and address critical challenges like food security and resource efficiency.
                </p>
                <p className="text-slate-600 leading-relaxed font-bold mb-6">
                  Together, we are shaping a more sustainable and prosperous future for the GCC and beyond.
                </p>

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
                      <Link href="/programs/sustainova">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">Sustainova Challenge</h4>
                          <span className="text-xs text-slate-500">Sustainability innovation stream</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/build-with-us">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">Venture Studio</h4>
                          <span className="text-xs text-slate-500">Build your next venture with us</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Related Case Studies Sidebar */}
                <div className="bg-white border border-slate-100 p-6 rounded-sm">
                  <span className="text-[#2b204c] text-xs font-bold uppercase tracking-widest block mb-4">More Case Studies</span>
                  <div className="space-y-6">
                    <Link href="/case-studies/corporate-venture-studios">
                      <a className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png" alt="Corporate Venture Studios" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Why Corporate Venture Studios are Important</h4>
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
              { title: "Empowering Innovation via Hackathons", image: "https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg", link: "/case-studies/empowering-innovation" },
              { title: "Qatar's Startup Ecosystem Path", image: "https://risin.ventures/wp-content/uploads/2024/06/31-e1720361297587.jpeg", link: "/case-studies/ideas-to-impact" },
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
