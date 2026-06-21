"use client";

import { useState } from 'react';
import { Header } from './components/Header';
import { Section1 } from './components/home/1';
import { Section2 } from './components/home/2';
import { Section3 } from './components/home/3';
import { Section4 } from './components/home/4';
import { Section5 } from './components/home/5';
import { Section6 } from './components/home/6';
import { Footer } from './components/Footer';


export default function Home() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [computedLeak, setComputedLeak] = useState('₹5,40,000/yr');
  const [playingVideoId, setPlayingVideoId] = useState(null);

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
        <Section1 onOpenAudit={() => handleOpenAudit()} playingVideoId={playingVideoId} setPlayingVideoId={setPlayingVideoId} />

        {/* Workflow Section */}
        <Section2 playingVideoId={playingVideoId} setPlayingVideoId={setPlayingVideoId} />

        {/* What We Do Services Accordion */}
        <Section3 />

        {/* What We Do Mission & Features Section */}
        <Section4 />

        {/* Philosophy Section */}
        <Section5 playingVideoId={playingVideoId} setPlayingVideoId={setPlayingVideoId} />

        {/* Contact Section */}
        <Section6 />

      </main>


      {/* System specifications footer */}
      <Footer />


    </div>
  );
}
