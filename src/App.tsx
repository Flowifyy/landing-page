import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { FrictionFlow } from './components/FrictionFlow';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { VideoReviews } from './components/VideoReviews';
import { Calculator } from './components/Calculator';
import { SpecBuilder } from './components/SpecBuilder';
import { Footer } from './components/Footer';
import { AuditDialog } from './components/AuditDialog';
import { RevealSection } from './components/RevealSection';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [computedLeak, setComputedLeak] = useState('₹5,40,000/yr');

  const handleOpenAudit = (leakVal?: string) => {
    if (leakVal && typeof leakVal === 'string') {
      setComputedLeak(leakVal);
    }
    setIsAuditOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditOpen(false);
  };

  // Submit Lead Form
  const handleSubmitAuditForm = (name: string, email: string, company: string, bottleneck: string) => {
    alert(
      `DIAGNOSTIC LEAK REPORT LOGGED\n` +
      `---------------------------------------\n` +
      `Org Contact: ${name}\n` +
      `Organization: ${company || 'Unspecified Corp'}\n` +
      `Business Node: ${email}\n` +
      `Flagged Annual Leak: ${computedLeak}\n\n` +
      `Worst Bottleneck: "${bottleneck}"\n\n` +
      `STATUS: SUCCESSFULLY INGESTED. Our systems operations team will compile your customized operational repair blueprint and follow up within 12 hours.`
    );
  };

  // Submit Spec Builder Form
  const handleSpecSubmit = (name: string, email: string, modules: string[], bottleneck: string) => {
    alert(
      `SYSTEM SPECIFICATION COMPILED & DEPLOYED\n` +
      `---------------------------------------\n` +
      `Config Subject: ${name}\n` +
      `Business Node: ${email}\n` +
      `Modules Selected:\n- ${modules.join('\n- ')}\n\n` +
      `Bottleneck Description: "${bottleneck}"\n\n` +
      `STATUS: SPEC DEPLOYED. Our workflow architects will review your schematic selections and deliver a custom blueprint configuration within 12 hours.`
    );
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      {/* Shrinking Navigation Header */}
      <Header onOpenAudit={() => handleOpenAudit()} />

      {/* Main Container Chassis */}
      <main style={{ flexGrow: 1 }}>
        
        {/* Hero Section containing the Automation Cockpit */}
        <Hero onOpenAudit={() => handleOpenAudit()} />

        {/* Integration partners infinite scrolling marquee */}
        <LogoMarquee />

        {/* Friction versus Flow side-by-side card blocks */}
        <RevealSection>
          <FrictionFlow />
        </RevealSection>

        {/* Services engines cards */}
        <RevealSection delay={0.05}>
          <Services />
        </RevealSection>

        {/* Autoplay on scroll high-trust Video reviews grid */}
        <RevealSection delay={0.05}>
          <VideoReviews />
        </RevealSection>

        {/* Systems diagnostics process timeline */}
        <RevealSection delay={0.05}>
          <Process />
        </RevealSection>

        {/* Revenue Leak calculator and SVG circular gauge */}
        <RevealSection delay={0.05}>
          <Calculator onOpenAudit={handleOpenAudit} />
        </RevealSection>

        {/* Interactive custom systems configurator form */}
        <RevealSection delay={0.05}>
          <SpecBuilder onSubmitInquiry={handleSpecSubmit} />
        </RevealSection>
      </main>

      {/* System specifications footer */}
      <Footer />

      {/* Accessible modal dialog request for Friction Audits */}
      <AuditDialog 
        isOpen={isAuditOpen} 
        onClose={handleCloseAudit} 
        computedLeak={computedLeak}
        onSubmitAudit={handleSubmitAuditForm}
      />
    </div>
  );
}
