import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
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

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "",
  message: ""
};

const inquiryTypes = [
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "investment", label: "Investment Inquiry" },
  { value: "founder", label: "Founder Application" },
  { value: "program", label: "Program Information" },
  { value: "media", label: "Media & Press" },
  { value: "general", label: "General Inquiry" }
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const source = params.get("from");

  const getContextualIntro = () => {
    switch (source) {
      case "partner":
        return {
          title: "Partner With Us",
          subtitle: "We're always looking to collaborate with like-minded organizations. Tell us about your vision and let's explore how we can work together."
        };
      case "founder":
        return {
          title: "Start the Conversation",
          subtitle: "Whether you're exploring options or ready to build, we're here to listen. Share your idea and let's see how we can help."
        };
      case "careers":
        return {
          title: "Join Our Team",
          subtitle: "Interested in building the future with us? Reach out and tell us about yourself."
        };
      case "media":
        return {
          title: "Media Inquiries",
          subtitle: "For press and media requests, please get in touch with our communications team."
        };
      default:
        return {
          title: "We'd Love to Hear From You",
          subtitle: "Whether you're a founder, partner, or just curious about what we do—we're always open to a conversation."
        };
    }
  };

  const contextual = getContextualIntro();

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData(initialFormData);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-[#2b204c] text-white px-8 py-4 rounded-sm shadow-2xl flex items-center gap-3"
        >
          <CheckCircle size={20} className="text-[#8b68f6]" />
          <span className="font-medium">Message sent! We'll be in touch within 2 business days.</span>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Link href="/about" className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-[#8b68f6] transition-colors">About</Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-none">
              {contextual.title.split(" ").slice(0, -1).join(" ")} <br className="hidden md:block"/>
              <span className="text-stroke">{contextual.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {contextual.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
              <div className="w-14 h-14 bg-[#8b68f6] rounded-sm flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase">Email Us</h3>
              <a href="mailto:info@risin.ventures" className="text-[#8b68f6] hover:text-[#2b204c] transition-colors font-medium">
                info@risin.ventures
              </a>
              <p className="text-slate-500 text-sm mt-2">We typically respond within 24-48 hours</p>
            </div>
            
            <div className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
              <div className="w-14 h-14 bg-[#2b204c] rounded-sm flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase">Call Us</h3>
              <a href="tel:+97444654622" className="text-[#8b68f6] hover:text-[#2b204c] transition-colors font-medium">
                +974 4465 4622
              </a>
              <p className="text-slate-500 text-sm mt-2">Sunday–Thursday, 9AM–5PM GST</p>
            </div>
            
            <div className="bg-[#F9FAFB] p-8 rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all">
              <div className="w-14 h-14 bg-[#952828] rounded-sm flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase">Visit Us</h3>
              <p className="text-slate-600 font-medium">
                Al Reem Tower, Office No.12<br/>
                3rd Floor, West Bay<br/>
                Doha, Qatar
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        id="contact-form"
        className="py-16 md:py-24 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <div className="bg-white p-8 md:p-10 rounded-sm border border-slate-100 shadow-lg">
              <div className="mb-8">
                <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Write to Us</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] mb-3 uppercase">Send a Message</h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible. No pressure, no obligations—just a conversation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#2b204c] mb-2">
                      Your Name <span className="text-[#952828]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#2b204c] mb-2">
                      Email Address <span className="text-[#952828]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#2b204c] mb-2">
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+974 XXXX XXXX"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#2b204c] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#2b204c] mb-2">
                    What brings you here?
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
                    data-testid="select-inquiry"
                  >
                    <option value="">Select an option</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#2b204c] mb-2">
                    Your Message <span className="text-[#952828]">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind. We're here to help."
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#8b68f6] hover:bg-[#2b204c] text-white rounded-sm px-10 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-50"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} className="ml-2 inline" />
                </Button>

                <p className="text-xs text-slate-400">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="bg-white p-8 rounded-sm border border-slate-100">
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-6 uppercase">Looking for Something Specific?</h3>
                <div className="space-y-4">
                  <Link href="/build-with-us" className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-sm hover:bg-[#8b68f6]/5 hover:border-[#8b68f6]/30 border border-transparent transition-all group">
                    <div>
                      <h4 className="font-bold text-[#2b204c] group-hover:text-[#8b68f6] transition-colors">Apply as a Founder</h4>
                      <p className="text-sm text-slate-500">Submit your idea to our venture builder</p>
                    </div>
                    <ArrowRight size={18} className="text-slate-400 group-hover:text-[#8b68f6] group-hover:translate-x-1 transition-all" />
                  </Link>
                  
                  <Link href="/partners" className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-sm hover:bg-[#8b68f6]/5 hover:border-[#8b68f6]/30 border border-transparent transition-all group">
                    <div>
                      <h4 className="font-bold text-[#2b204c] group-hover:text-[#8b68f6] transition-colors">Become a Partner</h4>
                      <p className="text-sm text-slate-500">Explore partnership opportunities</p>
                    </div>
                    <ArrowRight size={18} className="text-slate-400 group-hover:text-[#8b68f6] group-hover:translate-x-1 transition-all" />
                  </Link>
                  
                  <Link href="/careers" className="flex items-center justify-between p-4 bg-[#F9FAFB] rounded-sm hover:bg-[#8b68f6]/5 hover:border-[#8b68f6]/30 border border-transparent transition-all group">
                    <div>
                      <h4 className="font-bold text-[#2b204c] group-hover:text-[#8b68f6] transition-colors">Join Our Team</h4>
                      <p className="text-sm text-slate-500">View open positions</p>
                    </div>
                    <ArrowRight size={18} className="text-slate-400 group-hover:text-[#8b68f6] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-[#2b204c] to-[#1a1432] p-8 rounded-sm text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#8b68f6] rounded-sm flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase">Response Time</h3>
                    <p className="text-slate-300 text-sm">What to expect</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  We review every message personally. Expect a response within <span className="text-white font-bold">1-2 business days</span>. For urgent matters, please call us directly.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300">Currently accepting inquiries</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-8 rounded-sm border border-slate-100">
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-4 uppercase">Connect With Us</h3>
                <p className="text-slate-600 text-sm mb-6">Follow us for the latest updates on deep tech, venture building, and startup ecosystem news.</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/risin-ventures/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#F9FAFB] rounded-sm flex items-center justify-center hover:bg-[#8b68f6] hover:text-white transition-all text-[#2b204c]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/risin.ventures/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#F9FAFB] rounded-sm flex items-center justify-center hover:bg-[#8b68f6] hover:text-white transition-all text-[#2b204c]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100064025261207" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#F9FAFB] rounded-sm flex items-center justify-center hover:bg-[#8b68f6] hover:text-white transition-all text-[#2b204c]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UC2PZRHE-2nvkqRZPTPK9wNQ/featured" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#F9FAFB] rounded-sm flex items-center justify-center hover:bg-[#8b68f6] hover:text-white transition-all text-[#2b204c]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map / Location Visual */}
      <motion.section 
        className="py-16 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Location</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              Based in Doha, Qatar
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Strategically located in the heart of West Bay, we're at the center of Qatar's thriving business ecosystem.
            </p>
          </div>
          
          <div className="relative rounded-sm overflow-hidden h-[400px] bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.6!2d51.52!3d25.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWest%20Bay%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-sm shadow-lg max-w-sm">
              <h3 className="font-heading font-bold text-[#2b204c] mb-2 uppercase">Risin Ventures</h3>
              <p className="text-slate-600 text-sm">
                Al Reem Tower, Office No.12<br/>
                3rd Floor, West Bay<br/>
                Doha, Qatar
              </p>
              <a 
                href="https://maps.google.com/?q=Al+Reem+Tower+West+Bay+Doha+Qatar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8b68f6] text-sm font-bold mt-3 inline-flex items-center gap-2 hover:text-[#2b204c] transition-colors"
              >
                Get Directions <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-16 bg-[#2b204c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 uppercase">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            If you're a founder with a vision, we'd love to hear from you.
          </p>
          <Link href="/build-with-us">
            <Button className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
              Apply to Build <ArrowRight size={16} className="ml-2 inline" />
            </Button>
          </Link>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
