import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Instagram, MessageSquare, Link2, Send, Code, Lightbulb, Users } from "lucide-react";
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

export default function EmpoweringInnovationCaseStudy() {
  const { submit, isSubmitting } = useFormSubmit();
  const [commentForm, setCommentForm] = useState({ name: "", email: "", website: "", message: "" });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submit({ 
      formType: "Case Study Comment",
      caseStudy: "Empowering Innovation",
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Hackathons</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6 uppercase leading-tight">
              Empowering Innovation <br className="hidden md:block"/>
              <span>Through Corporate Hackathons</span>
            </h1>
            <div className="flex items-center justify-start gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> July 2024</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Corporate Innovation</span>
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
                  src="https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg" 
                  alt="Corporate Hackathons Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <p className="text-slate-600 leading-relaxed mb-6">
                  Incubation programs and startups have always thrived on their close association with enterprises or corporates. The development of the innovation ecosystem is significantly accelerated when coders and techies are matched with real-time use cases or problem statements from enterprises. The ideal platform for this collaboration is the <a href="https://risin.ventures/pillars/#corporate-programs" className="text-[#8b68f6] hover:underline">enterprise-focused hackathon</a>, a format that has gained immense popularity across the globe. These hackathons not only solve pressing corporate issues but also foster a symbiotic relationship between companies and the tech community.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  Recognizing the value of this approach, the Digital Incubation Centre, an arm of the Ministry of Communications and Information Technology (MCIT) in Qatar, mandated <a href="https://hyperthinksys.com/" className="text-[#8b68f6] hover:underline">Hyperthink Systems</a>/ <a href="https://risin.ventures/" className="text-[#8b68f6] hover:underline">Risin Ventures</a> to encourage the local ecosystem through such programs.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">2019: Laying the Foundation at QITCOM</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Qatar IT Conference and Exhibition (QITCOM), the largest showcase in Qatar for innovative and new technologies until 2019, provided the platform for the first edition of the hackathon. On one side, we have the national vision of Qatar and on the other, the MOTC strategy to build the ecosystem. When these two intersected, the themes that emerged were Smart Cities, Smart Industry, Healthcare, Transport, and Solutions for the Abled. Surprisingly, many enterprises matched these themes and came forward.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A new set of challenges arose when a government-sponsored program gained traction to steer the digital transformation of corporations. The team was flooded with use cases – a good problem to have, but we could only pick five to fit the program design. After carefully vetting and selecting the <a href="https://acute-avocado-8f4.notion.site/Use-cases-of-Hackathons-426c7b590ff24db39afee32df82aa3b6" className="text-[#8b68f6] hover:underline">five use cases</a>, the corporations also came forward to award QAR 25,000 to the winner of each challenge.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Hackathon <a href="https://risin.ventures/partners/" className="text-[#8b68f6] hover:underline">Partners</a> of 2019 QITCOM: Ooredoo, the Supreme Committee, Qatar Airways, Hamad International Airport, Mada Assistive Technology, and Hamad Medical Corporation.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/96A3125-1-1024x683.jpg" 
                    alt="QITCOM Hackathon 1" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/DSC09757-1024x683.jpg" 
                    alt="QITCOM Hackathon 2" 
                    className="w-full rounded-sm shadow-md h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">2022: The Rise of Codecamp</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The success of the 2019 edition was paused due to the pandemic, which impacted the entire world and especially programs involving in-person events. However, after the pandemic fears settled, the 2022 edition kicked off with a new name and branding called “Codecamp.” The name resonates with the community of coders camping at a place to bring out solutions to the problems or challenges posed by enterprises.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Although the program is still under DIC, the sponsor changed from MOTC to MCIT. The format, strategy, and execution remained the same for the 2022 edition, but the themes were updated. The themes selected for the 2022 Codecamp were Smart Banking, Healthcare, and Assistive Technologies, all coinciding with MCIT strategy and QNV 2030. The two partners from the previous editions – Mada Assistive Technology and Hamad Medical Corporation – participated again. The third partner, from the banking industry, was a well-known organization across the Middle East – Qatar National Bank. All three partners furnished use cases pertaining to the selected themes, which were later taken to the challenge (Codecamp).
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  It is worth noting that in both editions, the technologies remained the same. Participants utilized Mobile Applications, AI/ML, Mobility, IoT, NLP, and Cloud Computing technologies provided by partners including Microsoft, Google, and the Tasmu Platform, or openly sourced.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">2023: Expanding Horizons</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The most recent edition in 2023 highlighted Human Development, Environmental Development, and Digital Transformation. Collaborating with Snoonu, KPMG, and Milaha, the hackathon leveraged AI/ML, Data Analytics, NLP, Web Development, and Geospatial Data and Mapping Services. Five use cases were tackled, with the total award amount returning to QAR 125,000.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  What made these hackathons particularly thrilling was the announcement of challenges on the day of the event, ensuring a fair and exciting competition for all participants. Across the three editions, over 1,000 coders, designers, and hustlers participated, with many flying in from neighboring countries and beyond.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To enhance the experience, over 50 mentors from various domains and industries were involved, broadening the participants’ perspectives and guiding them through their challenges. Workshops on delivering the perfect pitch, introductions to different tools, design thinking, and prototype building were conducted, directly contributing to enhancing the delivery of solutions to the enterprises.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  A rigorous two-tier judging process ensured the elimination and selection of the right team. Initially, the enterprise use case owners evaluated the solutions, followed by a pool of judges from the ecosystem and industry. This ensured that multiple teams working on each use case were thoroughly assessed, identifying the top 2-3 teams who then presented their solutions to the final judging panel. The final judging panel picked the team and solution that best fit the use case/problem statement posed by enterprises.
                </p>

                <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-8 mb-12">
                  <h4 className="text-lg font-heading font-bold text-[#2b204c] uppercase mb-6 border-b border-slate-200 pb-4">Impact Over 3 Editions</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-heading font-bold text-[#2b204c] mb-1">1,000+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Participants</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-[#2b204c] mb-1">50+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Mentors</div>
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-[#2b204c] mb-1">QAR 350k</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Prize Pool</div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/2024/07/2W1A0743-1-scaled-e1720702764447-1024x584.jpg" 
                    alt="Hackathon Winners" 
                    className="w-full rounded-sm shadow-md"
                  />
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Conclusion</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Over the three editions, 14 teams emerged as winners, receiving cash prizes worth QAR 350,000. The true success of these hackathons lay in the opportunities they provided to the tech community. The innovative solutions developed during the events often spun off into offerings or products for startups, further fueling the local innovation ecosystem.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The Codecamp or Hackathon series has not only fostered innovation but also created a vibrant community of tech enthusiasts, enterprises, and mentors, all working together to solve real-world problems. This collaborative spirit and the tangible outcomes achieved underscore the immense value of enterprise-driven hackathons in driving meaningful change and development.
                </p>

                <div className="bg-[#2b204c] text-white p-8 rounded-sm text-center mb-16">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4">Want to Host a Corporate Hackathon?</h3>
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
                      <Link href="/programs/aix">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">AIX Summit</h4>
                          <span className="text-xs text-slate-500">Flagship AI innovation program</span>
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
