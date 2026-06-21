"use client";

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import Strands from './animation/Strands';

export const WhatWeDoSection = () => {
  const [revealRef, isVisible] = useReveal(0.1);

  const steps = [
    {
      index: "01",
      title: "OBSERVE",
      summary: "We see how you operate in real-time.",
      details: [
        "On-site & remote shadowing of team actions",
        "Full audit of software, spreadsheets & manual steps",
        "Identification of costly friction points",
        "Operational bottleneck mapping"
      ]
    },
    {
      index: "02",
      title: "UNDERSTAND",
      summary: "We analyze operations and current workflows.",
      details: [
        "Deep-dive analysis of information handoffs",
        "Detailed documentation of queue structures",
        "Quantifying time & money lost to manual loops",
        "Root-cause identification of delays"
      ]
    },
    {
      index: "03",
      title: "COLLABORATE",
      summary: "Joint design meetings to plan improvements.",
      details: [
        "Interactive team alignment workshops",
        "Collaborative design of custom software relays",
        "Review of automation blueprints",
        "Setting target energy & margin metrics"
      ]
    },
    {
      index: "04",
      title: "IMPLEMENT",
      summary: "Deploy new workflow with new tools, energy, and margins.",
      details: [
        "Deployment of premium custom software & automations",
        "Legacy database & API integration (Tally, CRM)",
        "Comprehensive team training & onboarding",
        "Immediate optimization of operating margins"
      ]
    }
  ];

  return (
    <section
      id="what-we-do-section"
      ref={revealRef}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{
        paddingTop: 'calc(var(--space-8) * 1.5)',
        paddingBottom: 'calc(var(--space-8) * 1.5)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative',
        
        // Redefine variables locally to force Dark/Black Theme
        '--color-bg': '#070709',
        '--color-surface': '#0E0E12',
        '--color-surface-subtle': '#14141A',
        '--color-border': '#1E1E24',
        '--color-border-hover': '#2E2E38',
        '--color-border-high': '#3A3A46',
        '--color-text-primary': '#FFFFFF',
        '--color-text-secondary': '#9B9BA6',
        '--color-text-muted': '#5C5C66',
        '--color-accent': '#10B981',
        
        backgroundColor: '#070709',
        color: '#FFFFFF'
      }}
    >
      {/* Ambient Flowing Strands Background */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          opacity: 0.35, 
          pointerEvents: 'none' 
        }}
      >
        <Strands
          colors={["#059669", "#10B981", "#34D399"]}
          count={3}
          speed={0.25}
          amplitude={0.7}
          waviness={1.3}
          thickness={0.6}
          glow={2.2}
          taper={2.8}
          spread={0.95}
          intensity={0.45}
          saturation={1.3}
          opacity={1.0}
          scale={1.2}
          glass={false}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '880px', marginBottom: 'var(--space-7)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <span 
            className="section-tag" 
            style={{ 
              marginBottom: 'var(--space-3)', 
              fontFamily: 'var(--font-heading-mono)',
              letterSpacing: '0.12em',
              fontSize: '0.75rem',
              color: 'var(--color-accent)'
            }}
          >
            [ HOW WE HELP YOUR BUSINESS ]
          </span>
          <h2
            style={{
              fontSize: 'var(--font-size-h2)',
              lineHeight: 1.15,
              letterSpacing: '-0.04em',
              marginBottom: 'var(--space-4)',
              color: '#FFFFFF',
              fontWeight: 800
            }}
          >
            A collaborative process built to increase your{" "}
            <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)', background: 'linear-gradient(to right, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              operating margins.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
              maxWidth: '720px'
            }}
          >
            We study, analyze, and rebuild your business pipelines from the ground up to eliminate manual work and boost operational efficiency.
          </p>
        </div>

        {/* 4-Step Methodology Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: 'var(--space-4)', 
            width: '100%' 
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="methodology-card-premium"
            >
              {/* Card Index & Title */}
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  marginBottom: 'var(--space-3)',
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  border: '1px solid rgba(16, 185, 129, 0.15)',
                  alignSelf: 'start',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <span style={{ color: 'var(--color-accent)' }}>{step.index} /</span>
                <span style={{ color: '#E4E4E7', letterSpacing: '0.05em' }}>{step.title}</span>
              </div>

              {/* Step Summary */}
              <h3 
                style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 800, 
                  lineHeight: '1.3', 
                  color: '#FFFFFF',
                  marginBottom: 'var(--space-4)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {step.summary}
              </h3>

              {/* Concrete Examples Checklist */}
              <ul 
                style={{ 
                  listStyle: 'none', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px', 
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: 'var(--space-4)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {step.details.map((detail, dIdx) => (
                  <li 
                    key={dIdx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'start', 
                      gap: '10px', 
                      fontSize: '0.875rem', 
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.4'
                    }}
                  >
                    <CheckCircle2 size={15} className="check-icon" style={{ color: 'var(--color-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .methodology-card-premium {
          padding: var(--space-5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background-color: rgba(14, 14, 18, 0.45);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .methodology-card-premium::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 0;
        }
        .methodology-card-premium:hover {
          transform: translateY(-8px);
          border-color: rgba(16, 185, 129, 0.4);
          box-shadow: 0 20px 40px -15px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.1);
        }
        .methodology-card-premium:hover::before {
          opacity: 1;
        }
        .methodology-card-premium:hover .check-icon {
          transform: scale(1.15);
          color: #34D399 !important;
        }
        .check-icon {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }
      `}</style>
    </section>
  );
};
