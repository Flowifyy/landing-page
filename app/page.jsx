"use client";

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkflowSection } from './components/WorkflowSection';
import { Services } from './components/Services';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { Footer } from './components/Footer';
import { AuditDialog } from './components/AuditDialog';

export default function Home() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [computedLeak, setComputedLeak] = useState('₹5,40,000/yr');

  const handleOpenAudit = (leakVal) => {
    if (leakVal && typeof leakVal === 'string') {
      setComputedLeak(leakVal);
    }
    setIsAuditOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditOpen(false);
  };

  // Submit Lead Form
  const handleSubmitAuditForm = (name, email, company, bottleneck) => {
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

        {/* Workflow Section */}
        <WorkflowSection />

        {/* What We Do Services Accordion */}
        <Services />

        {/* What We Do Mission & Features Section */}
        <WhatWeDoSection />

        {/* Philosophy Section */}
        <PhilosophySection />

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
