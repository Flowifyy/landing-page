import React from 'react';
import { Search, PenTool, Radio } from 'lucide-react';

interface Phase {
  num: string;
  title: string;
  icon: React.ComponentType<{ size: number; className?: string; style?: React.CSSProperties }>;
  desc: string;
  deliverables: string[];
}

const phases: Phase[] = [
  {
    num: '01',
    title: 'Audit',
    icon: Search,
    desc: 'We map every manual handoff, siloed spreadsheet, and copy-paste loop across your daily operations. Every friction point is logged and costed.',
    deliverables: ['Friction Leak Map', 'API Convergence Blueprint']
  },
  {
    num: '02',
    title: 'Build',
    icon: PenTool,
    desc: 'We code custom webhook bridges, admin portals, and self-healing API relays. Your Tally, Zoho, WhatsApp, and Razorpay systems get wired together.',
    deliverables: ['Custom Admin Dashboard', 'Beta API Pipeline']
  },
  {
    num: '03',
    title: 'Launch',
    icon: Radio,
    desc: 'Production deployment with staff training, 24/7 telemetry logs, and automatic fail-safes. Your team gains back 20+ hours per week permanently.',
    deliverables: ['Live Operations Flow', '20+ hrs/wk Recovered']
  }
];

const phaseAccents = ['#F59E0B', 'var(--color-accent)', '#0A84FF'];

export const Process: React.FC = () => {
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
            How we engineer <span className="editorial-serif">flow</span>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Three phases. No ambiguity. We replace chaotic manual processes with automated infrastructure using a transparent deployment pipeline.
          </p>
        </div>

        {/* Schematic Flow Pipeline Chassis */}
        <div className="schematic-pipeline">
          {/* Main SVG Pipeline Line running across/under */}
          <div className="pipeline-track-svg-container">
            <svg className="pipeline-svg" viewBox="0 0 1200 8" width="100%" height="8" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="pipeline-segment-grad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                  {/* Before Point 1: White/Neutral */}
                  <stop offset="0%" stopColor="var(--color-border-high)" />
                  <stop offset="16.66%" stopColor="var(--color-border-high)" />
                  
                  {/* Node 1 center transition */}
                  <stop offset="16.66%" stopColor="#F59E0B" />
                  
                  {/* Between Point 1 and 2: Yellow/Orange */}
                  <stop offset="50%" stopColor="#F59E0B" />
                  
                  {/* Node 2 center transition */}
                  <stop offset="50%" stopColor="#10B981" />
                  
                  {/* Between Point 2 and 3: Emerald Green */}
                  <stop offset="83.33%" stopColor="#10B981" />
                  
                  {/* Node 3 center transition */}
                  <stop offset="83.33%" stopColor="#0A84FF" />
                  
                  {/* After Point 3: Royal Blue */}
                  <stop offset="100%" stopColor="#0A84FF" />
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
                      <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.55rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>DELIVERABLES:</span>
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
          top: 32px; /* Perfect center alignment (padding-top 24px + half height 12px - half SVG height 4px) */
          left: 0;
          width: 100%;
          z-index: 1;
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
        }

        .node-joint-outer {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background-color: var(--color-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-3);
          margin-left: 20px;
          position: relative;
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
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-2);
        }

        /* Desktop specific alignments and pipelines */
        @media (min-width: 768px) {
          .pipeline-track-svg-container {
            display: block;
          }

          .pipeline-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-4);
          }

          .pipeline-step-node {
            align-items: center;
          }

          .node-joint-outer {
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
