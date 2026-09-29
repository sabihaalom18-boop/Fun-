import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import TrustSection from '@/components/landing/TrustSection';
import FeatureGrid from '@/components/landing/FeatureGrid';
import WorkflowSection from '@/components/landing/WorkflowSection';
import LiveChatDemo from '@/components/landing/LiveChatDemo';
import HumanHandoffSection from '@/components/landing/HumanHandoffSection';
import ObservabilitySection from '@/components/landing/ObservabilitySection';
import AnalyticsSection from '@/components/landing/AnalyticsSection';
import SecuritySection from '@/components/landing/SecuritySection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
import PricingSection from '@/components/landing/PricingSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B14] text-white selection:bg-violet-600 selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <TrustSection />
      <FeatureGrid />
      <WorkflowSection />
      <LiveChatDemo />
      <HumanHandoffSection />
      <AnalyticsSection />
      <ObservabilitySection />
      <SecuritySection />
      <PricingSection />
      <IntegrationsSection />
      <Footer />
    </main>
  );
}
