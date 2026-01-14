import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Target, Zap, Share2, Linkedin, Twitter, Facebook, MessageSquare, Send } from "lucide-react";
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

const stats = [
  { label: "Community Pulse", value: "80+ Teams", desc: "Over 300 innovators and AI experts from 20+ countries." },
  { label: "Reach", value: "6.1M+", desc: "Impressions with a massive digital footprint." },
  { label: "Dedication", value: "100+ Hours", desc: "Mentoring hours from 25+ industry experts." },
  { label: "Rigorous Vetting", value: "100 Pitches", desc: "Competitive funnel from 536 applications." },
  { label: "Incentive", value: "$20,000", desc: "Prize pool awarded to 4 winning teams." },
  { label: "Summit Gravity", value: "150+ CXOs", desc: "C-suite leaders engaged in roundtables." },
];

export default function AIXSummitCaseStudy() {
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link href="/case-studies" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">Case Studies</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">AIX Summit</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-[#2b204c] mb-8 uppercase leading-tight">
              Bridging Ambition and Intelligence <br className="hidden md:block"/>
              <span className="text-stroke">Inside the AIX Summit</span>
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> December 2025</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Innovation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 bg-white">
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
                  src="https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png" 
                  alt="AIX Summit Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Overview: The New Era of AI Hackathons</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  The air at the GE Advanced Technology & Research Center (QSTP) was electric this past October. It wasn’t just the humming of high-end servers; it was the collective energy of over 300+ innovators, designers, and AI experts who gathered for the <strong>AIX Summit & Hackathon 2025</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Hosted from October 24th to 26th, this flagship initiative by <strong className="text-[#2b204c]">Risin Ventures</strong> and <strong className="text-[#2b204c]">HyperThink Systems</strong> set out to do more than just showcase technology – it aimed to bridge the gap between abstract AI potential and real-world industrial impact in Qatar.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  Gone are the days when hackathons were just for hobbyists. Today, they are the crucibles where the next generation of enterprise solutions is forged. The AIX Hackathon was designed as a high-pressure, high-reward environment where 81 teams worked around the clock to transform raw ideas into viable prototypes within just 48 hours.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Qatar’s AI Frontier: Why This Matters Now</h3>
                <p className="text-slate-600 leading-relaxed mb-12">
                  As Qatar positions itself as a regional hub for innovation, events like the AIX Summit & Hackathon are vital. Supported by heavyweights like Qatar Science & Technology Park (QSTP), Qatar Development Bank (QDB), and Ooredoo, the event demonstrated that the local ecosystem is not just ready for AI – it is actively building it. This wasn’t just a competition; it was a statement of intent for the nation’s digital future.
                </p>

                {/* Stats Grid */}
                <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-8 mb-12">
                  <h4 className="text-lg font-heading font-bold text-[#2b204c] uppercase mb-6 border-b border-slate-200 pb-4">By the Numbers: Impact at Scale</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {stats.map((stat, i) => (
                      <div key={i} className="bg-white p-4 rounded-sm border border-slate-50">
                        <span className="text-[#8b68f6] text-xs font-bold uppercase tracking-widest block mb-1">{stat.label}</span>
                        <div className="text-2xl font-heading font-bold text-[#2b204c] mb-1">{stat.value}</div>
                        <p className="text-slate-500 text-xs leading-relaxed">{stat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image 1: After Stats */}
                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/elementor/thumbs/1.JPG-scaled-rgwznmemk9y78vjp3f325wlygy6ggjodbozgba5he4.jpg" 
                    alt="AIX Summit Participants" 
                    className="w-full rounded-sm shadow-md"
                  />
                  <p className="text-xs text-slate-400 mt-2 text-center italic">Participants collaborating during the 48-hour hackathon sprint.</p>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Program Design: Themes That Matter</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The hackathon wasn’t a “build-anything” free-for-all. It was anchored in three high-impact themes:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b68f6] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-slate-600"><strong>Fintech AI:</strong> Tackling the “Regulatory Navigator & Readiness Evaluator” use case with QDB.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b68f6] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-slate-600"><strong>Enterprise AI:</strong> Automating “Contract Lifecycle Management (CLM)” and AI-Powered Customer Support for SMEs (Ooredoo).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#8b68f6] rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-slate-600"><strong>Investment AI:</strong> Developing an “Investment Analyst AI Agent” to revolutionize how data drives capital by QDB.</span>
                  </li>
                </ul>

                {/* Image 2: After Themes */}
                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/elementor/thumbs/7-rgx0eyjfrwyhb9fbn28zfrrrzv9i9dk1405i6old9g.jpg" 
                    alt="AIX Summit Mentorship" 
                    className="w-full rounded-sm shadow-md"
                  />
                  <p className="text-xs text-slate-400 mt-2 text-center italic">Mentors guiding teams through technical challenges.</p>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">The Summit Side: Where Builders Meet Believers</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  While the hackathon hummed downstairs, the AIX Summit brought together over 150 CXOs to discuss the “Future of Enterprise AI Integration”. Keynote speaker Dr. Pascal Dutru (Advisor to MCIT Qatar) emphasized that AI’s true value lies in its seamless integration into business processes and public services.
                </p>

                {/* Image 3: After Summit */}
                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-10-27-at-4.08.47-PM-2-rgx10cdbxpixqphqs0hda27nr7bczg6kzdpeaebecw.jpeg" 
                    alt="AIX Summit Panel Discussion" 
                    className="w-full rounded-sm shadow-md"
                  />
                  <p className="text-xs text-slate-400 mt-2 text-center italic">Industry leaders discussing the future of AI in Qatar.</p>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Ecosystem Transformation</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The impact of this three-day event ripples far beyond the award ceremony.
                </p>
                <div className="grid gap-6 mb-8">
                  <div className="border-l-4 border-[#8b68f6] pl-6 py-2">
                    <h5 className="font-bold text-[#2b204c] mb-1">Creation of a “Pipeline”</h5>
                    <p className="text-slate-600 text-sm">The hackathon identified a “top 12” tier of AI teams now ready for acceleration or corporate integration.</p>
                  </div>
                  <div className="border-l-4 border-[#8b68f6] pl-6 py-2">
                    <h5 className="font-bold text-[#2b204c] mb-1">Shift in Corporate Mindset</h5>
                    <p className="text-slate-600 text-sm">Hosting 8 high-level roundtables for CXOs sparked a shift from “viewing AI as a tool” to “integrating AI as a core business driver”.</p>
                  </div>
                  <div className="border-l-4 border-[#8b68f6] pl-6 py-2">
                    <h5 className="font-bold text-[#2b204c] mb-1">Startup Momentum</h5>
                    <p className="text-slate-600 text-sm">The event solidified Qatar’s position as a regional hub for AI entrepreneurship, attracting innovators from over 20 countries.</p>
                  </div>
                </div>

                 {/* Image 4: After Ecosystem */}
                <div className="mb-12">
                  <img 
                    src="https://risin.ventures/wp-content/uploads/elementor/thumbs/11-scaled-rgx190frg8x5tq1de6nxxzo1p518gdgp9sixp6vk80.jpg" 
                    alt="AIX Summit Closing Ceremony" 
                    className="w-full rounded-sm shadow-md"
                  />
                  <p className="text-xs text-slate-400 mt-2 text-center italic">Closing ceremony celebrating the winners and participants.</p>
                </div>

                <div className="bg-[#2b204c] text-white p-8 rounded-sm text-center mb-16">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4">Risin Ventures: Powering Enterprise Open Innovation</h3>
                  <p className="text-slate-300 mb-6">
                    At Risin Ventures, we believe that the biggest breakthroughs happen at the intersection of enterprise scale and startup agility. We work with enterprises to co-create AI products that are secure, scalable, and strategically aligned.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 font-bold text-sm uppercase tracking-widest transition-all">
                      Partner With Us
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
                      <Link href="/programs/aix">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">AIX Summit & Hackathon</h4>
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
                    <Link href="https://risin.ventures/ai-hackathons-for-enterprises-beyond-buzzwords-to-real-roi/">
                      <a target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-3">
                          <img src="https://risin.ventures/wp-content/uploads/2025/05/a-1.png" alt="AI Hackathons" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">AI Hackathons for Enterprises: Beyond Buzzwords</h4>
                      </a>
                    </Link>
                    <Link href="https://risin.ventures/sustainova-challenge-empowering-startups-sustainability-stream-in-the-gcc/">
                      <a target="_blank" rel="noopener noreferrer" className="group block">
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
              { title: "Corporate Venture Studios Explained", image: "https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png", link: "https://risin.ventures/why-corporate-venture-studios-are-important-for-qatars-economy/" },
              { title: "Empowering Innovation via Hackathons", image: "https://risin.ventures/wp-content/uploads/2024/07/hk1-e1720358238143.jpg", link: "https://risin.ventures/empowering-innovation-through-corporate-hackathons-a-story-of-code-camp-hackathon/" },
              { title: "Qatar's Startup Ecosystem Path", image: "https://risin.ventures/wp-content/uploads/2024/06/31-e1720361297587.jpeg", link: "https://risin.ventures/ideacamp_casestudy/" }
            ].map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group bg-white border border-slate-100 rounded-sm overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-[2/1] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-[#2b204c] text-sm uppercase leading-tight group-hover:text-[#8b68f6] transition-colors">{item.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
