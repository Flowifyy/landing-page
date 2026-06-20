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
      title: "ATTRACT",
      summary: "Get discovered through websites, SEO, and marketing.",
      details: [
        "High-performance custom web development",
        "Search Engine Optimization (SEO) campaigns",
        "Local search and Google Map optimization",
        "Targeted customer acquisition ads"
      ]
    },
    {
      index: "02",
      title: "CONVERT",
      summary: "Turn visitors into paying customers.",
      details: [
        "High-converting landing pages",
        "Automated booking & scheduling forms",
        "WhatsApp chat flows & query routing",
        "Interactive instant estimation engines"
      ]
    },
    {
      index: "03",
      title: "AUTOMATE",
      summary: "Remove repetitive work with smart workflows.",
      details: [
        "Automated invoicing & billing dispatches",
        "Real-time sync between apps and databases",
        "Auto-generated PDF document pipelines",
        "Real-time notifications and alerts"
      ]
    },
    {
      index: "04",
      title: "SCALE",
      summary: "Handle more customers without increasing complexity.",
      details: [
        "Legacy accounting integration (Tally Sync)",
        "Automated customer retention messaging",
        "Centralized CRM database infrastructure",
        "Scalable operations running 24/7 on autopilot"
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
        <div style={{ maxWidth: '880px', marginBottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <span 
            className="section-tag" 
            style={{ 
              marginBottom: 'var(--space-3)', 
              fontFamily: 'var(--font-heading-mono)',
              letterSpacing: '0.12em',
              fontSize: '0.75rem'
            }}
          >
            [ THE FLOWIFY METHODOLOGY ]
          </span>
          <h2
            style={{
              fontSize: 'var(--font-size-h2)',
              lineHeight: 1.15,
              letterSpacing: '-0.04em',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)',
              fontWeight: 800
            }}
          >
            Systems that help your business grow without{" "}
            <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>
              extra work.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
              maxWidth: '720px'
            }}
          >
            We build websites, automations, and business systems that help you attract customers, streamline operations, and scale faster.
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
              className="methodology-card-brutal"
              style={{
                padding: 'var(--space-4) var(--space-5) var(--space-5) var(--space-5)',
                border: '2px solid var(--color-text-primary)',
                backgroundColor: 'var(--color-surface)',
                boxShadow: '5px 5px 0px var(--color-text-primary)',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              {/* Card Index & Title */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'baseline', 
                  gap: '8px',
                  marginBottom: 'var(--space-2)',
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700
                }}
              >
                <span style={{ color: 'var(--color-accent)' }}>{step.index} /</span>
                <span style={{ color: 'var(--color-text-primary)', letterSpacing: '0.05em' }}>{step.title}</span>
              </div>

              {/* Step Summary */}
              <h3 
                style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 800, 
                  lineHeight: '1.3', 
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--space-3)'
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
                  gap: '8px', 
                  marginTop: 'auto',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: 'var(--space-3)'
                }}
              >
                {step.details.map((detail, dIdx) => (
                  <li 
                    key={dIdx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'start', 
                      gap: '8px', 
                      fontSize: '0.85rem', 
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.4'
                    }}
                  >
                    <CheckCircle2 size={14} style={{ color: 'var(--color-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .methodology-card-brutal {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .methodology-card-brutal:hover {
          transform: translate(-3px, -3px);
          box-shadow: 8px 8px 0px var(--color-text-primary) !important;
        }
      `}</style>
    </section>
  );
};
