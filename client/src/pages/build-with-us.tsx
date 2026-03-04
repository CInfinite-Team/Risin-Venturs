import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lightbulb, Users, Rocket, CheckCircle, Cpu, Banknote, Leaf, ChevronRight, X, Upload, Sparkles, Building2, Car, CreditCard } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const countries = [
  "Qatar", "UAE", "Saudi Arabia", "Oman", "Kuwait", "Bahrain", 
  "India", "United States", "United Kingdom", "Germany", "France", 
  "Canada", "Australia", "Singapore", "Other"
];

const ideaOptions = [
  {
    id: "hashecm",
    name: "Hashecm",
    tagline: "AI-Driven Document Intelligence",
    description: "Enterprise content collaboration platform with AI-powered document processing, intelligent search, and workflow automation.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-[#8b68f6]"
  },
  {
    id: "nufin",
    name: "Nufin",
    tagline: "Next-Gen Fintech Solutions",
    description: "Banking and financial services platform currently in stealth mode, pursuing CBO Qatar regulatory approval for innovative payment solutions.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-[#2b204c]"
  },
  {
    id: "urbano",
    name: "Urbano",
    tagline: "AI & IoT Urban Mobility",
    description: "Smart parking, valet services, car wash, EV charging, and multimodal ticketing—all powered by AI and IoT technology.",
    icon: <Car className="w-6 h-6" />,
    color: "bg-[#952828]"
  }
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  founderJourney: string;
  startupExperience: string;
  launchTimeline: string;
  thesisAlignment: string;
  howHeard: string;
  ideaDescription: string;
  teamDescription: string;
  referralName: string;
  pitchDeckLink?: string;
  selectedIdea?: string;
  role?: string;
  message?: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  location: "",
  founderJourney: "",
  startupExperience: "",
  launchTimeline: "",
  thesisAlignment: "",
  howHeard: "",
  ideaDescription: "",
  teamDescription: "",
  referralName: "",
  pitchDeckLink: "",
  selectedIdea: "",
  role: "",
  message: ""
};

const MobileCarousel = ({ items, renderItem, className = "" }: { items: any[], renderItem: (item: any, index: number) => React.ReactNode, className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.offsetWidth * 0.85; // Approximate item width based on 85vw
    const index = Math.round(scrollPosition / itemWidth);
    setActiveIndex(Math.min(Math.max(0, index), items.length - 1));
  };

  return (
    <div className={`md:hidden ${className}`}>
      <div 
        className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-[85vw] snap-center">
            {renderItem(item, i)}
          </div>
        ))}
        {/* Spacer to allow the last item to be fully viewed if needed, though snap-center usually handles this well with padding */}
        <div className="min-w-[4vw]" /> 
      </div>
      
      {/* Dotted Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {items.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-[#8b68f6] w-4" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

function SimpleApplicationForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  isSubmitting,
  showIdeaSelection = false,
  title = "Start the Conversation",
  subtitle = "Tell us about yourself and what you're building. We review every application personally."
}: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
  onSubmit: () => void;
  isSubmitting: boolean;
  showIdeaSelection?: boolean;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] mb-3 uppercase">{title}</h3>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      {showIdeaSelection && (
        <div className="mb-8">
          <label className="block text-sm font-bold text-[#2b204c] mb-4 uppercase tracking-wider">
            Select a Concept Track <span className="text-slate-400 font-normal normal-case">(optional)</span>
          </label>
          <div className="grid gap-4">
            {ideaOptions.map((idea) => (
              <button
                key={idea.id}
                type="button"
                onClick={() => setFormData({ ...formData, selectedIdea: formData.selectedIdea === idea.id ? "" : idea.id })}
                className={`p-5 rounded-sm border-2 transition-all text-left ${
                  formData.selectedIdea === idea.id 
                    ? "border-[#8b68f6] bg-[#8b68f6]/5 shadow-lg" 
                    : "border-slate-200 hover:border-[#8b68f6]/50 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${idea.color} rounded-sm flex items-center justify-center text-white flex-shrink-0`}>
                    {idea.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-[#2b204c]">{idea.name}</h4>
                      {formData.selectedIdea === idea.id && (
                        <CheckCircle size={18} className="text-[#8b68f6]" />
                      )}
                    </div>
                    <p className="text-sm text-[#8b68f6] font-medium mb-1">{idea.tagline}</p>
                    <p className="text-sm text-slate-500">{idea.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Interested in joining one of our active ventures? Select above, or leave blank to propose your own idea.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Full Name <span className="text-[#952828]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm"
            data-testid="input-simple-fullname"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Email <span className="text-[#952828]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm"
            data-testid="input-simple-email"
          />
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            LinkedIn Profile <span className="text-[#952828]">*</span>
          </label>
          <input
            id="linkedin"
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="linkedin.com/in/yourprofile"
            required
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm"
            data-testid="input-simple-linkedin"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Role Interest <span className="text-[#952828]">*</span>
          </label>
          <select
             id="role"
             value={formData.role || ""}
             onChange={(e) => setFormData({ ...formData, role: e.target.value })}
             className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm bg-white"
             data-testid="select-simple-role"
          >
            <option value="">Select a role</option>
            <option value="engineering">Engineering / Tech</option>
            <option value="product">Product Management</option>
            <option value="growth">Growth / Marketing</option>
            <option value="operations">Operations</option>
            <option value="founder">Co-Founder</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#2b204c] mb-1 uppercase tracking-wider">
            Why this venture?
          </label>
          <textarea
            id="message"
            value={formData.message || ""}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly tell us why you're a good fit..."
            rows={3}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all text-sm resize-none"
            data-testid="textarea-simple-message"
          />
        </div>
      </div>

      <Button
        onClick={onSubmit}
        disabled={isSubmitting}
        className="w-full bg-[#8b68f6] hover:bg-[#2b204c] text-white rounded-sm  py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-50"
        data-testid="button-simple-submit"
      >
        {isSubmitting ? "Sending..." : "Submit Application"}
      </Button>
    </div>
  );
}


function ApplicationForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  isSubmitting,
  showIdeaSelection = false,
  title = "Start the Conversation",
  subtitle = "Tell us about yourself and what you're building. We review every application personally."
}: { 
  formData: FormData; 
  setFormData: (data: FormData) => void; 
  onSubmit: () => void;
  isSubmitting: boolean;
  showIdeaSelection?: boolean;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#2b204c] mb-3 uppercase">{title}</h3>
        <p className="text-slate-600">{subtitle}</p>
      </div>

      {showIdeaSelection && (
        <div className="mb-8">
          <label className="block text-sm font-bold text-[#2b204c] mb-4 uppercase tracking-wider">
            Select a Concept Track <span className="text-slate-400 font-normal normal-case">(optional)</span>
          </label>
          <div className="grid gap-4">
            {ideaOptions.map((idea) => (
              <button
                key={idea.id}
                type="button"
                onClick={() => setFormData({ ...formData, selectedIdea: formData.selectedIdea === idea.id ? "" : idea.id })}
                className={`p-5 rounded-sm border-2 transition-all text-left ${
                  formData.selectedIdea === idea.id 
                    ? "border-[#8b68f6] bg-[#8b68f6]/5 shadow-lg" 
                    : "border-slate-200 hover:border-[#8b68f6]/50 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${idea.color} rounded-sm flex items-center justify-center text-white flex-shrink-0`}>
                    {idea.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-[#2b204c]">{idea.name}</h4>
                      {formData.selectedIdea === idea.id && (
                        <CheckCircle size={18} className="text-[#8b68f6]" />
                      )}
                    </div>
                    <p className="text-sm text-[#8b68f6] font-medium mb-1">{idea.tagline}</p>
                    <p className="text-sm text-slate-500">{idea.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">
            Interested in joining one of our active ventures? Select above, or leave blank to propose your own idea.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="app-fullname" className="block text-sm font-bold text-[#2b204c] mb-2">
            Full Name <span className="text-[#952828]">*</span>
          </label>
          <input
            id="app-fullname"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
            data-testid="input-fullname"
          />
        </div>
        <div>
          <label htmlFor="app-email" className="block text-sm font-bold text-[#2b204c] mb-2">
            Email <span className="text-[#952828]">*</span>
          </label>
          <input
            id="app-email"
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
          <label htmlFor="app-phone" className="block text-sm font-bold text-[#2b204c] mb-2">
            Phone Number
          </label>
          <input
            id="app-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+974 XXXX XXXX"
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
            data-testid="input-phone"
          />
        </div>
        <div>
          <label htmlFor="app-linkedin" className="block text-sm font-bold text-[#2b204c] mb-2">
            LinkedIn Profile <span className="text-[#952828]">*</span>
          </label>
          <input
            id="app-linkedin"
            type="url"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="linkedin.com/in/yourprofile"
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
            data-testid="input-linkedin"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="app-location" className="block text-sm font-bold text-[#2b204c] mb-2">
            Location <span className="text-[#952828]">*</span>
          </label>
          <select
            id="app-location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
            data-testid="select-location"
          >
            <option value="">Select your location</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="app-journey" className="block text-sm font-bold text-[#2b204c] mb-2">
            Founder Journey Stage <span className="text-[#952828]">*</span>
          </label>
          <select
            id="app-journey"
            value={formData.founderJourney}
            onChange={(e) => setFormData({ ...formData, founderJourney: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
            data-testid="select-journey"
          >
            <option value="">Where are you in your journey?</option>
            <option value="ideation">Ideation - I have an idea</option>
            <option value="mvp">MVP - Building or testing a product</option>
            <option value="early-revenue">Early Revenue - Generating traction</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="app-experience" className="block text-sm font-bold text-[#2b204c] mb-2">
            Startup Experience
          </label>
          <select
            id="app-experience"
            value={formData.startupExperience}
            onChange={(e) => setFormData({ ...formData, startupExperience: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
            data-testid="select-experience"
          >
            <option value="">Your startup experience</option>
            <option value="prior-founder">Prior Founder</option>
            <option value="team-member">Team member of an early-stage startup</option>
            <option value="new">New to startups</option>
          </select>
        </div>
        <div>
          <label htmlFor="app-timeline" className="block text-sm font-bold text-[#2b204c] mb-2">
            Launch Timeline <span className="text-[#952828]">*</span>
          </label>
          <select
            id="app-timeline"
            value={formData.launchTimeline}
            onChange={(e) => setFormData({ ...formData, launchTimeline: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
            data-testid="select-timeline"
          >
            <option value="">When do you want to launch?</option>
            <option value="now">Now - Ready to go</option>
            <option value="3-6-months">3-6 Months</option>
            <option value="6-plus-months">More than 6 months</option>
            <option value="other">Other / Flexible</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="app-thesis" className="block text-sm font-bold text-[#2b204c] mb-2">
            Thesis Alignment <span className="text-[#952828]">*</span>
          </label>
          <select
            id="app-thesis"
            value={formData.thesisAlignment}
            onChange={(e) => setFormData({ ...formData, thesisAlignment: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
            data-testid="select-thesis"
          >
            <option value="">Which thesis fits your idea?</option>
            <option value="deep-tech">Deep Tech (AI, IoT, Cloud)</option>
            <option value="fintech">Fintech</option>
            <option value="sustainability">Sustainability</option>
          </select>
        </div>
        <div>
          <label htmlFor="app-source" className="block text-sm font-bold text-[#2b204c] mb-2">
            How did you hear about us? <span className="text-[#952828]">*</span>
          </label>
          <select
            id="app-source"
            value={formData.howHeard}
            onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all bg-white"
            data-testid="select-source"
          >
            <option value="">Select an option</option>
            <option value="investor-vc">Investor / VC Firm</option>
            <option value="advisor-partner">Industry Advisor / Partner</option>
            <option value="linkedin">LinkedIn</option>
            <option value="press-media">Press / Media</option>
            <option value="website">Risin Ventures Website</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="app-idea" className="block text-sm font-bold text-[#2b204c] mb-2">
          Tell us about your idea
        </label>
        <textarea
          id="app-idea"
          value={formData.ideaDescription}
          onChange={(e) => setFormData({ ...formData, ideaDescription: e.target.value })}
          placeholder="Share your vision—the problem you're solving, your proposed solution, target market, and business model. We're genuinely curious about what excites you."
          rows={4}
          className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all resize-none"
          data-testid="textarea-idea"
        />
      </div>

      <div>
        <label htmlFor="app-team" className="block text-sm font-bold text-[#2b204c] mb-2">
          Tell us about yourself and your co-founders
        </label>
        <textarea
          id="app-team"
          value={formData.teamDescription}
          onChange={(e) => setFormData({ ...formData, teamDescription: e.target.value })}
          placeholder="Share your background, relevant experience, and links to your portfolio, GitHub, awards, or previous work. Who's on your team?"
          rows={3}
          className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all resize-none"
          data-testid="textarea-team"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="pitchDeckLink" className="block text-sm font-bold text-[#2b204c] mb-2">
            Link to Pitch Deck
          </label>
          <input
            id="pitchDeckLink"
            type="url"
            value={formData.pitchDeckLink || ""}
            onChange={(e) => setFormData({ ...formData, pitchDeckLink: e.target.value })}
            placeholder="Dropbox / Google Drive link"
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
          />
          <p className="text-xs text-slate-400 mt-2">Please ensure the link is publicly accessible.</p>
        </div>
        <div>
          <label htmlFor="app-referral" className="block text-sm font-bold text-[#2b204c] mb-2">
            Referral Name
          </label>
          <input
            id="app-referral"
            type="text"
            value={formData.referralName}
            onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
            placeholder="Were you referred by someone in our network?"
            className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-[#8b68f6] focus:ring-2 focus:ring-[#8b68f6]/20 outline-none transition-all"
            data-testid="input-referral"
          />
          <p className="text-xs text-slate-400 mt-2">If someone connected to Risin recommended you, let us know.</p>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="w-full md:w-auto bg-[#8b68f6] hover:bg-[#2b204c] text-white rounded-sm px-12 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all disabled:opacity-50"
          data-testid="button-submit"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
          <ArrowRight size={16} className="ml-2 inline" />
        </Button>
        <p className="text-xs text-slate-400 mt-4">
          By submitting, you agree to our review process. We aim to respond within 5-7 business days.
        </p>
      </div>
    </div>
  );
}

export default function BuildWithUs() {
  const [primaryFormData, setPrimaryFormData] = useState<FormData>(initialFormData);
  const [ideaFormData, setIdeaFormData] = useState<FormData>(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSubmitting, isSuccess: showSuccess, submit } = useFormSubmit();

  // Check for URL query params to pre-select venture
  useState(() => {
    const params = new URLSearchParams(window.location.search);
    const venture = params.get("venture");
    if (venture) {
      setIdeaFormData(prev => ({ ...prev, selectedIdea: venture }));
      setIsModalOpen(true);
    }
  });

  const handleSubmit = async (formType: "primary" | "idea") => {
    const data = formType === "primary" ? primaryFormData : ideaFormData;
    await submit({
      formType: "Build With Us",
      subType: formType,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      linkedin: data.linkedin,
      location: data.location,
      founderJourney: data.founderJourney,
      startupExperience: data.startupExperience,
      launchTimeline: data.launchTimeline,
      thesisAlignment: data.thesisAlignment,
      howHeard: data.howHeard,
      ideaDescription: data.ideaDescription,
      teamDescription: data.teamDescription,
      referralName: data.referralName,
      pitchDeckLink: data.pitchDeckLink || "",
      selectedIdea: data.selectedIdea || "",
      role: data.role || "",
      message: data.message || "",
    });
    if (formType === "idea") {
      setIsModalOpen(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-[#2b204c] text-white px-8 py-4 rounded-sm shadow-2xl flex items-center gap-3"
          >
            <CheckCircle size={20} className="text-[#8b68f6]" />
            <span className="font-medium">Application submitted successfully! We'll be in touch soon.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#2b204c] to-[#1a1432] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b68f6] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#952828] rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 uppercase leading-none">
                Growing Potential Ideas Into <br className="hidden md:block"/>
                <span className="text-[#8b68f6]">Stellar Ventures</span>
              </h1>
              <p className=" md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
                Risin Ventures partners with visionary founders to co-create startups that are investor-ready—from ideation through validation to scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToForm}
                  className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm md:px-8 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto"
                  data-testid="button-apply-hero"
                >
                  Start the Conversation <ArrowRight size={16} className="md:ml-2 inline" />
                </Button>
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-sm px-8 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto"
                  data-testid="button-join-venture"
                >
                  Join an Active Venture
                </Button>
              </div>
            </motion.div>

            {/* Clean Animated Graphic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex justify-center items-center h-[500px]"
            >
              <div className="relative w-full max-w-[450px] aspect-square flex justify-center items-center">
                {/* Background glow matrix */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8b68f6]/20 to-[#952828]/20 rounded-full blur-3xl"></div>
                
                {/* Orbital dots */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite] opacity-40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" className="text-[#8b68f6]" />
                  <circle cx="50" cy="5" r="1.5" className="fill-[#8b68f6]" />
                  <circle cx="95" cy="50" r="1" className="fill-[#952828]" />
                  <circle cx="50" cy="95" r="1.5" className="fill-[#8b68f6]" />
                  <circle cx="5" cy="50" r="1" className="fill-white" />
                </svg>

                <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] animate-[spin_40s_linear_infinite_reverse] opacity-30" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-white" />
                  <circle cx="15" cy="50" r="1.5" className="fill-[#8b68f6]" />
                  <circle cx="85" cy="50" r="1.5" className="fill-white" />
                </svg>

                {/* Main floating card */}
                <motion.div 
                  initial={{ y: 20 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-48 h-48 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8b68f6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Rocket className="w-20 h-20 text-white drop-shadow-lg relative z-20 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2" strokeWidth={1} />
                  
                  {/* Subtle shine effect */}
                  <motion.div 
                    className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-30"
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Floating Elements (Lightbulb, CPU, Stars) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 -left-6 top-16 shadow-xl"
                >
                  <Lightbulb className="w-6 h-6 text-[#8b68f6]" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 -right-6 bottom-20 shadow-xl"
                >
                  <Cpu className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-8 right-12"
                >
                  <Sparkles className="w-8 h-8 text-[#952828]" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-12 left-16"
                >
                  <Sparkles className="w-6 h-6 text-[#8b68f6]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Soft CTA Strip */}
      <div className="bg-[#8b68f6]/5 border-y border-[#8b68f6]/10 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#2b204c] text-center md:text-left">
              <span className="font-bold">Have a bold idea?</span> We'd love to hear it. Every application is reviewed by our founding team.
            </p>
            <button 
              onClick={scrollToForm}
              className="text-sm font-bold text-[#8b68f6] hover:text-[#2b204c] transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Tell us what you're building <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* What is Venture Builder */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] mb-6 uppercase leading-tight">
                Venture Builder at Risin Ventures
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our Venture Builder is a hands-on engine for turning bold ideas into scalable businesses. Centered around a thesis of deep-tech enablement, founder empowerment, and network-driven growth, we partner with visionary founders to co-create startups that are investor-ready.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We combine a structured venture-studio methodology with agile execution: we ideate and test multiple concepts in parallel, dedicate cross-functional teams, deploy smart capital, and leverage our ecosystem of mentors, domain experts, and investors to de-risk early-stage ventures.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-[#2b204c] font-bold">
                  <CheckCircle size={16} className="text-[#8b68f6]" />
                  <span>Shared Resources</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2b204c] font-bold">
                  <CheckCircle size={16} className="text-[#8b68f6]" />
                  <span>Proven Playbooks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#2b204c] font-bold">
                  <CheckCircle size={16} className="text-[#8b68f6]" />
                  <span>High-Impact Network</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img 
                  src="https://risin.ventures/wp-content/uploads/2025/05/96A2947-768x512.jpg" 
                  alt="Venture Building Session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#2b204c] p-6 rounded-sm hidden md:block">
                <div className="text-4xl font-heading font-bold text-white mb-1">20+</div>
                <div className="text-xs text-slate-300 uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Inline CTA Card */}
      <div className="container mx-auto px-6 -mt-6 mb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#2b204c] to-[#1a1432] rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">Interested in joining one of our active ventures?</h3>
            <p className="text-slate-300">Explore co-founder opportunities with Hashecm, Nufin, or Urbano.</p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#2b204c] hover:bg-[#8b68f6] hover:text-white rounded-sm px-8 py-4 h-auto font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap"
            data-testid="button-explore-ventures"
          >
            Explore Ventures
          </Button>
        </motion.div>
      </div>

      {/* Our Approach - 3 Steps */}
      <motion.section 
        className="py-16 md:py-24 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              Our Venture Building Approach
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We don't just invest in companies—we build them from the ground up, combining our expertise with proven methodologies to create lasting impact.
            </p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Lightbulb className="w-8 h-8" />, 
                step: "01", 
                title: "Ideation", 
                desc: "We identify market opportunities and validate innovative solutions through deep research and analysis. Multiple concepts are tested in parallel to find the best fit.",
                color: "bg-[#8b68f6]"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                step: "02", 
                title: "Team Building", 
                desc: "We assemble world-class teams of entrepreneurs, operators, and domain experts to execute on the vision. Cross-functional support at every stage.",
                color: "bg-[#2b204c]"
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                step: "03", 
                title: "Execution", 
                desc: "We provide hands-on support, capital, and strategic guidance to scale companies from zero to market leaders. Access to investors and acquisition paths.",
                color: "bg-[#952828]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-sm border border-slate-100 hover:shadow-xl hover:border-[#8b68f6]/30 transition-all relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 text-[120px] font-heading font-bold text-slate-50 leading-none -translate-y-4 translate-x-4 select-none">
                  {item.step}
                </div>
                <div className={`w-16 h-16 ${item.color} rounded-sm flex items-center justify-center mb-6 text-white relative z-10`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-4 uppercase relative z-10">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <MobileCarousel 
            items={[
              { 
                icon: <Lightbulb className="w-8 h-8" />, 
                step: "01", 
                title: "Ideation", 
                desc: "We identify market opportunities and validate innovative solutions through deep research and analysis. Multiple concepts are tested in parallel to find the best fit.",
                color: "bg-[#8b68f6]"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                step: "02", 
                title: "Team Building", 
                desc: "We assemble world-class teams of entrepreneurs, operators, and domain experts to execute on the vision. Cross-functional support at every stage.",
                color: "bg-[#2b204c]"
              },
              { 
                icon: <Rocket className="w-8 h-8" />, 
                step: "03", 
                title: "Execution", 
                desc: "We provide hands-on support, capital, and strategic guidance to scale companies from zero to market leaders. Access to investors and acquisition paths.",
                color: "bg-[#952828]"
              }
            ]}
            renderItem={(item, i) => (
              <div className="group bg-white p-8 rounded-sm border border-slate-100 shadow-sm h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[100px] font-heading font-bold text-slate-50 leading-none -translate-y-2 translate-x-2 select-none">
                  {item.step}
                </div>
                <div className={`w-14 h-14 ${item.color} rounded-sm flex items-center justify-center mb-6 text-white relative z-10`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-3 uppercase relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            )}
          />
          
          {/* Connection line for desktop */}
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-20 h-0.5 bg-slate-200"></div>
              <ChevronRight size={20} />
              <div className="w-20 h-0.5 bg-slate-200"></div>
              <ChevronRight size={20} />
              <div className="w-20 h-0.5 bg-slate-200"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Investment Thesis */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#952828] text-sm font-bold uppercase tracking-widest mb-3 block">Investment Focus</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              Our Thesis
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Risin Ventures funds startups in the Middle East & India and builds products in AI, IoT, cloud and edge for B2B/enterprise—leveraging our deep tech team, 1000+ entrepreneurs network, and 20+ years of experience in building multi-million dollar technology ventures.
            </p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Cpu className="w-6 h-6" />, 
                title: "Deep Tech", 
                desc: "IoT and AI are transforming industries through automation, intelligent systems, and data-driven insights. We back foundational technologies that drive efficiency and innovation across sectors.",
                color: "text-[#2b204c]",
                borderColor: "border-[#2b204c]"
              },
              { 
                icon: <Banknote className="w-6 h-6" />, 
                title: "Fintech", 
                desc: "Fintech is redefining access to capital and financial services, especially in emerging markets. Our focus is on ventures building inclusive, efficient, and scalable financial infrastructure.",
                color: "text-[#8b68f6]",
                borderColor: "border-[#8b68f6]"
              },
              { 
                icon: <Leaf className="w-6 h-6" />, 
                title: "Sustainability", 
                desc: "With climate change and resource challenges accelerating, sustainability is both a market need and a global priority. We invest in solutions that promote clean energy and long-term resilience.",
                color: "text-[#952828]",
                borderColor: "border-[#952828]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-sm border border-slate-100 hover:shadow-lg transition-all text-left flex flex-col items-start h-full"
              >
                <div className={`p-3 rounded-sm bg-slate-50 mb-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-heading font-bold mb-4 uppercase ${item.color} border-l-4 pl-3 ${item.borderColor}`}>{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <MobileCarousel 
            items={[
              { 
                icon: <Cpu className="w-6 h-6" />, 
                title: "Deep Tech", 
                desc: "IoT and AI are transforming industries through automation, intelligent systems, and data-driven insights. We back foundational technologies that drive efficiency and innovation across sectors.",
                color: "text-[#2b204c]",
                borderColor: "border-[#2b204c]"
              },
              { 
                icon: <Banknote className="w-6 h-6" />, 
                title: "Fintech", 
                desc: "Fintech is redefining access to capital and financial services, especially in emerging markets. Our focus is on ventures building inclusive, efficient, and scalable financial infrastructure.",
                color: "text-[#8b68f6]",
                borderColor: "border-[#8b68f6]"
              },
              { 
                icon: <Leaf className="w-6 h-6" />, 
                title: "Sustainability", 
                desc: "With climate change and resource challenges accelerating, sustainability is both a market need and a global priority. We invest in solutions that promote clean energy and long-term resilience.",
                color: "text-[#952828]",
                borderColor: "border-[#952828]"
              }
            ]}
            renderItem={(item, i) => (
              <div className="group bg-white p-8 rounded-sm border border-slate-100 shadow-sm text-left flex flex-col items-start h-full">
                <div className={`p-3 rounded-sm bg-slate-50 mb-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-heading font-bold mb-4 uppercase ${item.color} border-l-4 pl-3 ${item.borderColor}`}>{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )}
          />
        </div>
      </motion.section>

      {/* Primary Application Form - Inline */}
      <motion.section 
        id="application-form"
        className="py-16 md:py-24 bg-[#F9FAFB] scroll-mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-2 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Apply Now</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600">
                Ready to partner with us? We'd love to hear from you. Reach out to discuss investment opportunities or learn more about how we can support your vision.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-sm border border-slate-100 shadow-lg">
              <ApplicationForm
                formData={primaryFormData}
                setFormData={setPrimaryFormData}
                onSubmit={() => handleSubmit("primary")}
                isSubmitting={isSubmitting}
                title="Tell us what you're building"
                subtitle="Share your vision. We read every application personally and respond within a week."
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Build With Us */}
      <motion.section 
        className="py-16 md:py-24 bg-[#2b204c] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b68f6] opacity-10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase leading-tight">
                Why Build With Risin Ventures?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Shared Resources & Infrastructure", desc: "Access to technology, talent, and operational support without the overhead." },
                  { title: "Proven Playbooks", desc: "Battle-tested frameworks for product development, GTM, and fundraising." },
                  { title: "Flexible Team Support", desc: "Cross-functional experts who plug in when and where you need them." },
                  { title: "High-Impact Network", desc: "Direct access to mentors, domain experts, investors, and enterprise partners." },
                  { title: "Smart Capital", desc: "Strategic funding designed to accelerate product-market fit and prepare for scale." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#8b68f6] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-4 md:p-6 text-center">
                <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">1000+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Entrepreneurs Network</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-4 md:p-6 text-center">
                <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">$50M+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Ventures Built</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-4 md:p-6 text-center">
                <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">20+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-4 md:p-6 text-center">
                <div className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">8+</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Portfolio Companies</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Founder Journey */}
      <motion.section 
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase mb-4">
              The Founder Experience
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you're at ideation, MVP, or early revenue—we meet you where you are and help you get where you need to go.
            </p>
          </div>
          
          {/* Journey Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-0.5"></div>
            
            {[
              { stage: "Ideation", desc: "You have a bold idea but need validation, resources, and structure to get started.", side: "left" },
              { stage: "MVP", desc: "You've built something—now you need to refine, test, and prepare for market.", side: "right" },
              { stage: "Early Revenue", desc: "You're generating traction—time to scale, optimize, and attract serious capital.", side: "left" },
              { stage: "Growth", desc: "Ready to dominate your market with strategic expansion and Series A preparation.", side: "right" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 last:mb-0 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:pl-12' : 'md:pr-12'} pl-12 md:pl-0`}>
                  <div className="bg-[#F9FAFB] p-6 rounded-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest">Stage {i + 1}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase">{item.stage}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
                {/* Circle marker */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#8b68f6] rounded-full flex items-center justify-center md:-translate-x-1/2 border-4 border-white shadow-lg">
                  <span className="text-xs font-bold text-white">{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Programs Cross-link */}
      <motion.section 
        className="py-10 md:py-16 bg-[#F9FAFB]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-3 block">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2b204c] uppercase">Our Flagship Programs</h2>
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[
              { title: "AIX Summit & Hackathon", desc: "AI-focused innovation challenge for enterprises and startups", link: "https://www.aixsummithack.com/", external: true, color: "bg-[#8b68f6]" },
              { title: "Sustainova Challenge", desc: "Sustainability-focused startup acceleration program", link: "https://sustainovachallenge.com/", external: true, color: "bg-[#2b204c]" },
              { title: "Entrepreneurship Awards", desc: "Celebrating Qatar's most innovative founders", link: "https://qatarentrepreneurshipawards.com/", external: true, color: "bg-[#952828]" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group block p-8 bg-white rounded-sm border border-slate-100 hover:shadow-lg hover:border-[#8b68f6]/30 transition-all h-full"
              >
                <div className={`w-2 h-12 ${item.color} rounded-sm mb-6`}></div>
                <h3 className="text-xl font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Carousel */}
          <MobileCarousel 
            items={[
              { title: "AIX Summit & Hackathon", desc: "AI-focused innovation challenge for enterprises and startups", link: "https://www.aixsummithack.com/", external: true, color: "bg-[#8b68f6]" },
              { title: "Sustainova Challenge", desc: "Sustainability-focused startup acceleration program", link: "https://sustainovachallenge.com/", external: true, color: "bg-[#2b204c]" },
              { title: "Entrepreneurship Awards", desc: "Celebrating Qatar's most innovative founders", link: "https://qatarentrepreneurshipawards.com/", external: true, color: "bg-[#952828]" }
            ]}
            renderItem={(item, i) => (
              <a 
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group block p-8 bg-white rounded-sm border border-slate-100 shadow-sm transition-all h-full"
              >
                <div className={`w-2 h-12 ${item.color} rounded-sm mb-6`}></div>
                <h3 className="text-lg font-heading font-bold text-[#2b204c] mb-2 uppercase group-hover:text-[#8b68f6] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                <span className="text-[10px] font-bold text-[#8b68f6] uppercase tracking-widest flex items-center gap-2">
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            )}
          />
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 md:py-28 bg-gradient-to-b from-[#2b204c] to-[#1a1432] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8b68f6] rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#8b68f6] text-sm font-bold uppercase tracking-widest mb-4 block">Ready to Build?</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
              Let's Build Something <br className="hidden md:block"/>Extraordinary Together
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
              Whether you're ready to apply or just want to explore—we're here to help ambitious founders turn their visions into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToForm}
                className="bg-[#8b68f6] hover:bg-white hover:text-[#2b204c] text-white rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all"
                data-testid="button-apply-bottom"
              >
                Apply Now <ArrowRight size={16} className="ml-2 inline" />
              </Button>
              <Link href="/contact?from=partner">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm px-10 py-5 h-auto font-bold text-sm uppercase tracking-widest transition-all">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cross-links */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/case-studies" className="text-[#2b204c] hover:text-[#8b68f6] transition-colors font-medium">
              View Case Studies →
            </Link>
            <Link href="/about" className="text-[#2b204c] hover:text-[#8b68f6] transition-colors font-medium">
              Learn About Us →
            </Link>
            <Link href="/team" className="text-[#2b204c] hover:text-[#8b68f6] transition-colors font-medium">
              Meet Our Team →
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Idea-Based Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-sm w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between z-10">
                <div>
                  <span className="text-[#8b68f6] text-xs font-bold uppercase tracking-widest mb-1 block">Join a Venture</span>
                  <h2 className="text-xl font-heading font-bold text-[#2b204c] uppercase">Co-Founder Opportunities</h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  data-testid="button-close-modal"
                >
                  <X size={20} className="text-slate-600" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8">
                <p className="text-slate-600 mb-8">
                  We're actively building three ventures and looking for exceptional co-founders. Select one that aligns with your expertise and passion, or apply with your own idea.
                </p>

                <SimpleApplicationForm
                  formData={ideaFormData}
                  setFormData={setIdeaFormData}
                  onSubmit={() => handleSubmit("idea")}
                  isSubmitting={isSubmitting}
                  showIdeaSelection={true}
                  title="Join Our Active Ventures"
                  subtitle="Select a concept track below, or leave blank to propose your own idea."
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollToTop />
    </div>
  );
}
