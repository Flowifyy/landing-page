import React from 'react';
import { Search, PenTool, Cpu, Radio } from 'lucide-react';

const phases = [
  {
    num: '01',
    title: 'System Diagnostics',
    icon: Search,
    desc: 'We audit your checkout flows, inventory channels, and shipping logs to pinpoint exactly where order leaks, overselling, and support bottlenecks occur.',
    deliverables: ['Checkout Leak Map', 'Integration Roadmap']
  },
  {
    num: '02',
    title: 'Architecture Blueprint',
    icon: PenTool,
    desc: 'We map out custom database schemas and API sync charts, visualizing exactly how stock updates, shipping triggers, and support bots will coordinate.',
    deliverables: ['API Schema Diagram', 'WhatsApp Flow Schematics']
  },
  {
    num: '03',
    title: 'API Integration',
    icon: Cpu,
    desc: 'We connect your stack. Our team builds custom sync engines and WhatsApp AI bots integrated directly to Shopify and logistics APIs with zero store downtime.',
    deliverables: ['Custom Stock Sync Engine', 'Live AI WhatsApp Bot']
  },
  {
    num: '04',
    title: 'Live Hand-off & Support',
    icon: Radio,
    desc: 'We push the integrations live, train your fulfillment and customer service teams, and set up 24/7 monitoring to track API health and sync logs.',
    deliverables: ['24/7 API Monitoring', 'Operations Team Training']
  }
];

const phaseAccents = ['#F59E0B', 'var(--color-accent)', '#0A84FF', '#EF4444'];

export const Process = () => {
  return (
    <section id="process" style={{ paddingBlock: 'var(--space-8)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-7)' }}>
          <h2
            style={{
              fontSize: 'var(--font-size-h2)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-2)'
            }}
          >
            Four steps to <span className="editorial-serif">automate your brand</span>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            We work with your team to replace manual spreadsheet errors and shipping delays with self-running sync engines and support bots.
          </p>
        </div>

        {/* Schematic Flow Pipeline Chassis */}
        <div className="schematic-pipeline">
          {/* Main SVG Pipeline Line running across/under */}
          <div className="pipeline-track-svg-container">
            <svg className="pipeline-svg" viewBox="0 0 1200 8" width="100%" height="8" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="pipeline-segment-grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="33%" stopColor="var(--color-accent)" />
                  <stop offset="66%" stopColor="#0A84FF" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              {/* Static background segments line */}
              <line x1="0" y1="4" x2="1200" y2="4" stroke="url(#pipeline-segment-grad)" strokeWidth="2" opacity="0.35" />
              {/* Animated pulsing segment line */}
              <line className="pulse-line" x1="0" y1="4" x2="1200" y2="4" stroke="url(#pipeline-segment-grad)" strokeWidth="3" />
            </svg>
          </div>

          <div className="pipeline-grid">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const accentColor = phaseAccents[index];
              return (
                <div key={phase.num} className="pipeline-step-node">
                  {/* Vertical connector line between nodes on mobile */}
                  {index < phases.length - 1 && (
                    <div className="pipeline-connector-vertical">
                      <svg className="connector-svg-vertical" width="4" height="100%" preserveAspectRatio="none" fill="none">
                        <defs>
                          <linearGradient id={`vertical-grad-${index}`} x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor={accentColor} />
                            <stop offset="100%" stopColor={phaseAccents[index + 1]} />
                          </linearGradient>
                        </defs>
                        <line x1="2" y1="0" x2="2" y2="100%" stroke={`url(#vertical-grad-${index})`} strokeWidth="2" opacity="0.35" />
                        <line className="pulse-line-vertical" x1="2" y1="0" x2="2" y2="100%" stroke={`url(#vertical-grad-${index})`} strokeWidth="2.5" />
                      </svg>
                    </div>
                  )}

                  {/* Glowing Node Joint */}
                  <div className="node-joint-outer" style={{ borderColor: accentColor }}>
                    <div className="node-joint-inner" style={{ backgroundColor: accentColor }} />
                  </div>

                  {/* Card Panel */}
                  <div 
                    className="card-premium pipeline-card"
                    style={{
                      borderTop: `3px solid ${accentColor}`,
                      position: 'relative',
                    }}
                  >
                    <span 
                      className="phase-number-tag" 
                      style={{ 
                        color: accentColor,
                        fontFamily: 'var(--font-heading-mono)'
                      }}
                    >
                      PHASE // {phase.num}
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-3)' }}>
                      <Icon size={18} style={{ color: accentColor, flexShrink: 0 }} />
                      <h3 style={{ fontSize: '1.15rem', letterSpacing: '-0.02em', margin: 0 }}>
                        {phase.title}
                      </h3>
                    </div>

                    <p style={{
                      fontSize: '0.84rem',
                      lineHeight: 1.6,
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {phase.desc}
                    </p>

                    <div style={{
                      display: 'flex',
                      gap: 'var(--space-2)',
                      flexDirection: 'column',
                      borderTop: '1px solid var(--color-border)',
                      paddingTop: 'var(--space-3)'
                    }}>
                      <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.55rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>WHAT YOU GET:</span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {phase.deliverables.map((d, i) => (
                          <span
                            key={i}
                            style={{
                              fontFamily: 'var(--font-heading-mono)',
                              fontSize: '0.62rem',
                              color: 'var(--color-text-primary)',
                              backgroundColor: 'var(--color-surface-subtle)',
                              border: '1px solid var(--color-border)',
                              padding: '2px 8px',
                              borderRadius: '2px'
                            }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .schematic-pipeline {
          position: relative;
          width: 100%;
          padding-top: var(--space-4);
        }

        .pipeline-track-svg-container {
          display: none;
          position: absolute;
          top: 32px;
          left: 0;
          width: 100%;
          z-index: 1;
        }

        .pipeline-connector-vertical {
          position: absolute;
          top: 50%;
          height: calc(100% + var(--space-5));
          left: 20px;
          width: 4px;
          z-index: 1;
          display: block;
        }

        .connector-svg-vertical {
          display: block;
          overflow: visible;
        }

        .pulse-line-vertical {
          stroke-dasharray: 30 150;
          animation: travelVertical 3s linear infinite;
        }

        @keyframes travelVertical {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -180;
          }
        }

        .pipeline-svg {
          display: block;
          overflow: visible;
        }

        .pulse-line {
          stroke-dasharray: 40 1200;
          animation: travel 5s linear infinite;
        }

        @keyframes travel {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -1240;
          }
        }

        .pipeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-5);
          position: relative;
          z-index: 2;
        }

        .pipeline-step-node {
          position: relative;
          display: flex;
          flex-direction: column;
          padding-left: 44px;
        }

        .node-joint-outer {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background-color: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .node-joint-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulseNode 2s infinite alternate;
        }

        @keyframes pulseNode {
          0% { transform: scale(0.95); opacity: 0.8; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        .pipeline-card {
          flex-grow: 1;
        }

        .phase-number-tag {
          display: block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-2);
        }

        /* Desktop specific alignments and pipelines */
        @media (min-width: 768px) {
          .pipeline-connector-vertical {
            display: none;
          }

          .pipeline-track-svg-container {
            display: block;
          }

          .pipeline-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-4);
          }

          .pipeline-step-node {
            align-items: center;
            padding-left: 0;
          }

          .node-joint-outer {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            margin-left: 0;
            margin-bottom: var(--space-5);
          }

          .pipeline-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
