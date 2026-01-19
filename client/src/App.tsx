import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Team from "@/pages/team";
import Careers from "@/pages/careers";
import Partners from "@/pages/partners";
import CaseStudies from "@/pages/case-studies";
import News from "@/pages/news";
import BuildWithUs from "@/pages/build-with-us";
import Contact from "@/pages/contact";
import AIX from "@/pages/programs/aix";
import Sustainova from "@/pages/programs/sustainova";
import EntrepreneurshipAwards from "@/pages/programs/entrepreneurship-awards";
import GTM from "@/pages/programs/gtm";
import Portfolio from "@/pages/portfolio";
import Innovation from "@/pages/venture-studio/innovation";
import Incubation from "@/pages/venture-studio/incubation";
import Acceleration from "@/pages/venture-studio/acceleration";
import VentureStudio from "@/pages/venture-studio/studio";
import AIXSummitCaseStudy from "@/pages/case-studies/aix-summit";
import AIHackathonsCaseStudy from "@/pages/case-studies/ai-hackathons";
import SustainovaChallengeCaseStudy from "@/pages/case-studies/sustainova-challenge";
import CorporateVentureStudiosCaseStudy from "@/pages/case-studies/corporate-venture-studios";
import EmpoweringInnovationCaseStudy from "@/pages/case-studies/empowering-innovation";
import IdeasToImpactCaseStudy from "@/pages/case-studies/ideas-to-impact";
import BridgingInvestmentCaseStudy from "@/pages/case-studies/bridging-investment";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/careers" component={Careers} />
      <Route path="/partners" component={Partners} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/venture-studio/innovation" component={Innovation} />
      <Route path="/venture-studio/incubation" component={Incubation} />
      <Route path="/venture-studio/acceleration" component={Acceleration} />
      <Route path="/venture-studio/studio" component={VentureStudio} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/news" component={News} />
      <Route path="/build-with-us" component={BuildWithUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/programs/aix" component={AIX} />
      <Route path="/programs/sustainova" component={Sustainova} />
      <Route path="/programs/entrepreneurship-awards" component={EntrepreneurshipAwards} />
      <Route path="/programs/gtm" component={GTM} />
      <Route path="/case-studies/aix-summit" component={AIXSummitCaseStudy} />
      <Route path="/case-studies/ai-hackathons" component={AIHackathonsCaseStudy} />
      <Route path="/case-studies/sustainova-challenge" component={SustainovaChallengeCaseStudy} />
      <Route path="/case-studies/corporate-venture-studios" component={CorporateVentureStudiosCaseStudy} />
      <Route path="/case-studies/empowering-innovation" component={EmpoweringInnovationCaseStudy} />
      <Route path="/case-studies/ideas-to-impact" component={IdeasToImpactCaseStudy} />
      <Route path="/case-studies/bridging-investment" component={BridgingInvestmentCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
