import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Target, Zap, Share2, Linkedin, Instagram, MessageSquare, Link2, Send, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useFormSubmit } from "@/hooks/useFormSubmit";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AIHackathonsCaseStudy() {
  const { submit, isSubmitting } = useFormSubmit();
  const [commentForm, setCommentForm] = useState({ name: "", email: "", website: "", message: "" });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submit({ 
      formType: "Case Study Comment",
      caseStudy: "AI Hackathons for Enterprises",
      ...commentForm 
    });
    
    if (success) {
      setCommentForm({ name: "", email: "", website: "", message: "" });
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
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">AI Hackathons</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6 uppercase leading-tight">
              AI Hackathons for Enterprises <br className="hidden md:block"/>
              <span>Beyond Buzzwords to Real ROI</span>
            </h1>
            <div className="flex items-center justify-start gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={16} className="text-[#8b68f6]" /> May 2025</span>
              <span className="flex items-center gap-2"><Target size={16} className="text-[#8b68f6]" /> Enterprise Innovation</span>
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
                  src="https://risin.ventures/wp-content/uploads/2025/05/a-1.png" 
                  alt="AI Hackathons Banner" 
                  className="w-full rounded-sm mb-12 shadow-lg"
                />

                <p className="text-slate-600 leading-relaxed mb-6">
                  In today’s fast-moving innovation landscape, enterprises are increasingly turning to <strong>AI hackathons not just as tech experiments—but as strategic engines for open innovation</strong>. These short, high-impact sprints offer a powerful way to <strong>test new ideas, prototype fast, and seed a pipeline of commercial-ready solutions</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  For organizations considering setting up an <strong>in-house venture builder or innovation lab</strong>, an AI hackathon is the <strong>ideal starting point</strong>. It lets you:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8b68f6] mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Source and test <strong>real-world use cases from within the organization</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8b68f6] mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Validate solutions in a low-risk, high-speed environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8b68f6] mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Build a <strong>commercialization pipeline</strong> without long development cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#8b68f6] mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Identify <strong>internal champions and external collaborators</strong> for future ventures</span>
                  </li>
                </ul>

                <p className="text-slate-600 leading-relaxed mb-8">
                  As AI moves from experimentation to enterprise adoption, more organizations are exploring AI hackathons as a fast, cost-effective path to innovation. But is it worth the time, effort, and money? The answer lies in <strong>selecting the right use case, having clear goals</strong>, and treating the hackathon not as a one-off event, but as a <strong>launchpad for real solutions</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed mb-12">
                  Here’s how forward-thinking enterprises can make the most of AI hackathons.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">What Kind of Enterprises Should Consider AI Hackathons?</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  AI hackathons aren’t for everyone. They’re ideal for <strong>enterprises that have scale</strong>, complexity, and data at their core. Specifically:
                </p>
                <ul className="space-y-6 mb-8">
                    <li>
                        <strong className="text-[#2b204c] block mb-1">Data-Rich Companies</strong>
                        <span className="text-slate-600">If you’re sitting on a mountain of customer, operational, or transactional data, an AI hackathon is the perfect place to start extracting value from it.</span>
                    </li>
                    <li>
                        <strong className="text-[#2b204c] block mb-1">Process-Heavy Operations</strong>
                        <span className="text-slate-600">Organizations with <strong>complex but mature workflows</strong> (e.g., banking, telecom, logistics, utilities) are well positioned to see quick wins with AI automation.</span>
                    </li>
                    <li>
                        <strong className="text-[#2b204c] block mb-1">Customer-Facing Businesses</strong>
                        <span className="text-slate-600">High-volume customer support, onboarding, or personalization needs? AI can dramatically improve responsiveness and efficiency.</span>
                    </li>
                </ul>
                <p className="text-slate-600 leading-relaxed mb-12">
                    Industries like <strong>financial services, healthcare, manufacturing, government services</strong>, and <strong>e-commerce</strong> are particularly well-suited.
                </p>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Why Participate, and How to Choose the Right Use Case?</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Most enterprises join hackathons with two goals in mind:
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-6 text-slate-600 font-bold">
                  <li>To prototype AI solutions that solve internal pain points.</li>
                  <li>To tap into external talent and fresh thinking.</li>
                </ol>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To get the most out of it, <strong>don’t just bring ideas—bring problems</strong>. The best use cases are:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                    <li>Aligned with business impact (cost reduction, risk mitigation, or revenue growth)</li>
                    <li>Feasible within 48–72 hours (hackathon time frame)</li>
                    <li>Dependent on real-world data and internal systems (giving it enterprise relevance)</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Examples include:
                </p>
                 <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
                    <li>Automating compliance checks in finance</li>
                    <li>Intelligent ticket triaging in customer support</li>
                    <li>Document summarization and insight extraction for procurement teams</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Collaborate with internal stakeholders beforehand to <strong>prioritize one or two strategic pain points</strong> and prepare anonymized data if needed.
                </p>
                
                <img 
                  src="https://risin.ventures/wp-content/uploads/2025/05/Untitled-design-20.png" 
                  alt="AI Hackathon Strategy" 
                  className="w-full rounded-sm mb-12 shadow-md"
                />

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Is There an ROI? How Do You Measure It?</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The short answer: <strong>Yes—if approached strategically.</strong>
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Let’s look at the cost vs. return.
                </p>
                
                <div className="bg-[#F9FAFB] border border-slate-100 rounded-sm p-8 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-[#952828] mb-4 uppercase text-xs tracking-widest">What you invest</h5>
                      <ul className="space-y-3 text-sm text-slate-600 list-disc pl-4">
                        <li><strong>Sponsorship cost</strong> to participate or run the hackathon</li>
                        <li><strong>Time of internal stakeholders and tech teams</strong> during ideation and mentoring</li>
                      </ul>
                      <div className="mt-6">
                        <h5 className="font-bold text-[#952828] mb-2 uppercase text-xs tracking-widest">Cost outside the hackathon</h5>
                        <ul className="space-y-3 text-sm text-slate-600 list-disc pl-4">
                            <li>Building the same AI prototype externally could take <strong>8–12 weeks and $40,000–$60,000</strong></li>
                            <li>Scouting & hiring cost of a 3–4 AI Experts would cost <strong>$20,000–$30,000</strong></li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-[#8b68f6] mb-4 uppercase text-xs tracking-widest">What you get from the hackathon</h5>
                      <ul className="space-y-3 text-sm text-slate-600 list-disc pl-4">
                        <li>A <strong>tangible, deployable prototype</strong> in 2–3 days</li>
                        <li><strong>Access to pre-vetted talent and tech</strong></li>
                        <li>A starting point for internal productization or further co-development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200 text-center">
                    <p className="text-[#2b204c] font-bold text-lg">ROI = Cost Avoided + Acceleration Achieved</p>
                    <p className="text-slate-500 text-sm mt-2">Hackathons give you a working prototype at a fraction of the traditional development cost and time.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">What Happens After the Hackathon?</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The hackathon isn’t the finish line—it’s the starting point. Your post-hackathon path could be:
                </p>
                <ul className="list-disc pl-6 space-y-4 mb-8 text-slate-600">
                  <li><strong>Work with the winning team</strong> to polish and deploy the solution with real users</li>
                  <li><strong>Absorb the prototype internally</strong>, assign a product owner, and build out the production version</li>
                  <li>Partner with a venture studio or tech team to <strong>commercialize the product as a new internal tool</strong></li>
                  <li>Transfer the prototype to Internal Venture builder and let the team decide the commercialization and product development strategy.</li>
                </ul>
                
                <div className="bg-[#fff1f1] border-l-4 border-[#952828] p-6 mb-12">
                  <p className="text-[#952828] font-bold italic mb-2">
                    But here’s the golden rule:
                  </p>
                  <p className="text-[#952828] font-bold text-lg">
                    “Don’t enter a hackathon unless you have a commercialization strategy and a committed budget.”
                  </p>
                   <p className="text-[#952828] text-sm mt-2">
                    Winning prototypes often die due to lack of follow-through. To avoid this, make sure your leadership is aligned and that the <strong>business unit “owns” the next steps</strong>.
                  </p>
                </div>

                <h3 className="text-2xl font-heading font-bold text-[#2b204c] uppercase mb-6">Conclusion</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  An AI hackathon isn’t just about innovation theater. When done right, it can <strong>unlock real business value</strong>, surface top-tier AI talent, and reduce both cost and time to solution.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                    For enterprises serious about leveraging AI, <strong>a hackathon is not a gamble—it’s a strategic shortcut</strong>.
                </p>

                <div className="bg-[#2b204c] text-white p-8 rounded-sm text-center mb-16">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4">Ready to run an AI Hackathon?</h3>
                  <p className="text-slate-300 mb-6">
                    At Risin Ventures, we specialize in curating enterprise-grade AI challenges and guiding ideas all the way to commercialization.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 font-bold text-sm uppercase tracking-widest transition-all">
                      Let's Talk
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
                      className="w-10 h-10 rounded-sm cursor-pointer bg-[#F9FAFB] text-[#2b204c] hover:bg-black hover:text-white flex items-center justify-center transition-all"
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
                      className="w-10 cursor-pointer h-10 rounded-sm bg-[#F9FAFB] text-[#2b204c] hover:bg-[#8b68f6] hover:text-white flex items-center justify-center transition-all"
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
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">AIX Summit & Hackathon</h4>
                          <span className="text-xs text-slate-500">Flagship AI innovation program</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/sustainova">
                        <a className="group block">
                          <h4 className="font-bold text-[#2b204c] text-sm mb-1 group-hover:text-[#8b68f6] transition-colors">Sustainova Challenge</h4>
                          <span className="text-xs text-slate-500">Sustainability innovation stream</span>
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
                          <img src="https://risin.ventures/wp-content/uploads/2025/12/blog-banner-aix.png" alt="AIX Summit" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <h4 className="font-bold text-[#2b204c] text-sm leading-snug group-hover:text-[#8b68f6] transition-colors">Inside the AIX Summit & Hackathon Qatar Edition</h4>
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
                  <h4 className="font-bold uppercase mb-2 text-white">Have an Idea?</h4>
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
              { title: "Sustainova Challenge", image: "https://risin.ventures/wp-content/uploads/2024/11/photo-collage.png-2.png", link: "/case-studies/sustainova-challenge" },
              { title: "Why Corporate Venture Studios are Important", image: "https://risin.ventures/wp-content/uploads/2024/07/Untitled-design-3.png", link: "/case-studies/corporate-venture-studios" }
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
