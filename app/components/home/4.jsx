"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Eye, GitMerge, MessageSquare, Zap } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import Strands from '../animation/Strands';

const steps = [
  {
    num: '01',
    title: 'Inspect',
    subtitle: 'Observation Phase',
    description: "We see, we absorb how you work, what's your running operations.",
    color: '#10B981', // Emerald green
    icon: Eye
  },
  {
    num: '02',
    title: 'Understand',
    subtitle: 'Analysis Phase',
    description: 'We understand your current workflow, where you have problems.',
    color: '#06B6D4', // Cyan
    icon: GitMerge
  },
  {
    num: '03',
    title: 'Discuss',
    subtitle: 'Alignment Phase',
    description: 'We discuss with you and your team what will work for you, what will not.',
    color: '#6366F1', // Indigo
    icon: MessageSquare
  },
  {
    num: '04',
    title: 'Implement',
    subtitle: 'Collaboration & Launch',
    description: 'Your team and our team will have a meeting for implementing the new workflow from our side with new tools that are going to create new margins and new possibilities for your business.',
    icon: Zap
  }
];

const getPathInfo = (x) => {
  if (x <= 700) {
    const t = x / 700;
    const y = 70 - 80 * t + 80 * t * t;
    const slope = (-80 + 160 * t) / 700;
    const angle = Math.atan(slope) * (180 / Math.PI);
    return { y, angle };
  } else {
    const t = (x - 700) / 700;
    const y = 70 + 80 * t - 80 * t * t;
    const slope = (80 - 160 * t) / 700;
    const angle = Math.atan(slope) * (180 / Math.PI);
    return { y, angle };
  }
};

export const Section4 = () => {
  const [revealRef, isVisible] = useReveal(0.1);
  const containerRef = useRef(null);
  const [pulseIndex, setPulseIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : pulseIndex;

  const pulseRef1 = useRef(null);
  const pulseRef2 = useRef(null);
  const currentOffsetRef = useRef(0);
  const hoveredIndexRef = useRef(null);

  // Keep hoveredIndexRef synced for access in stable loop
  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  useEffect(() => {
    let frameId;
    const speed = 2.33; // 1400px / (10s * 60fps) = ~2.33px per frame
    const hoverOffsets = [-180, -500, -820, -1140]; // Center the 80px pulse under the steps

    const getClosestOffset = (current, baseTarget) => {
      const diff = baseTarget - current;
      const k = Math.round(-diff / 1400);
      return baseTarget + k * 1400;
    };

    const tick = () => {
      if (hoveredIndexRef.current !== null) {
        const baseTarget = hoverOffsets[hoveredIndexRef.current];
        const targetOffset = getClosestOffset(currentOffsetRef.current, baseTarget);
        // Smooth LERP towards the target offset
        currentOffsetRef.current += (targetOffset - currentOffsetRef.current) * 0.08;
      } else {
        // Standard forward progression at full speed
        currentOffsetRef.current -= speed;
        if (currentOffsetRef.current < -1400) {
          currentOffsetRef.current += 1400;
        }
      }

      // Direct DOM mutation for high-performance 60fps updates
      if (pulseRef1.current) {
        pulseRef1.current.style.strokeDashoffset = currentOffsetRef.current;
      }
      if (pulseRef2.current) {
        pulseRef2.current.style.strokeDashoffset = currentOffsetRef.current;
      }

      // Synchronize active description index from current visual coordinate position
      let normOffset = (-(currentOffsetRef.current - 40)) % 1400;
      if (normOffset < 0) normOffset += 1400;
      const currentIdx = Math.floor(normOffset / 350);

      setPulseIndex((prev) => {
        if (prev !== currentIdx) return currentIdx;
        return prev;
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

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

      <div 
        className="container" 
        ref={containerRef} 
        style={{ position: 'relative', zIndex: 1 }}
      >
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
            4-step Process
          </span>
          <h2
            className="section4-heading"
            style={{
              fontSize: 'var(--font-size-h2)',
              lineHeight: 1.15,
              letterSpacing: '-0.04em',
              marginBottom: 'var(--space-4)',
              color: '#FFFFFF',
              fontWeight: 800
            }}
          >
            The steps to make you have a{" "}
            <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)', background: 'linear-gradient(to right, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              new productive workflow.
            </span>
          </h2>
        </div>

        {/* Full-width Wave Connecting Line with SVG Text */}
        <div className="pipeline-wrapper">
          <svg
            width="100%"
            height="140"
            viewBox="0 0 1400 140"
            preserveAspectRatio="none"
            fill="none"
            style={{ overflow: 'visible', display: 'block', width: '100%', height: '100%' }}
          >
            <defs>
              <marker
                id="brand-arrow-head"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path 
                  d="M 0 1.5 L 8 5 L 0 8.5 Z" 
                  fill="color-mix(in srgb, var(--color-accent) 60%, black 40%)" 
                />
              </marker>

              {/* SVG Glow Filter */}
              <filter id="svg-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Outer Glow Gradient Fade */}
              <linearGradient id="glow-fade-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity="0.9" />
                <stop offset="92%" stopColor="var(--color-accent)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </linearGradient>

              {/* Inner Core Gradient Fade */}
              <linearGradient id="core-fade-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="8%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="90%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Static Background Path */}
            <path
              d="M 0,70 Q 350,30 700,70 T 1400,70"
              stroke="color-mix(in srgb, var(--color-accent) 60%, black 40%)"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#brand-arrow-head)"
            />

            {/* Glowing Energy Pulse Path (Outer glow) */}
            <path
              ref={pulseRef1}
              d="M 0,70 Q 350,30 700,70 T 1400,70"
              stroke="url(#glow-fade-gradient)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              filter="url(#svg-neon-glow)"
              strokeDasharray="80 1320"
              className="energy-pulse-path"
            />

            {/* Glowing Energy Pulse Path (Inner core) */}
            <path
              ref={pulseRef2}
              d="M 0,70 Q 350,30 700,70 T 1400,70"
              stroke="url(#core-fade-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="80 1320"
              className="energy-pulse-path"
            />

            {/* SVG Step Labels placed directly along the curve */}
            {steps.map((step, idx) => {
              const isActive = activeIndex === idx;
              
              // Distribute step labels evenly along the 1400px horizontal span
              const xPos = 220 + idx * 320;
              // Align vertical height and rotation angle with the wave Q curve
              const { y: yPath, angle } = getPathInfo(xPos);
              const yPos = yPath - 18; // Sit 18px above the path center to hug the curve

              return (
                <text
                  key={step.num}
                  textAnchor="middle"
                  transform={`translate(${xPos}, ${yPos}) rotate(${angle})`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setHoveredIndex(hoveredIndex === idx ? null : idx)}
                  className={`pipeline-text-label ${isActive ? 'active' : ''}`}
                  style={{
                    fill: isActive ? '#FFFFFF' : 'var(--color-text-muted)',
                    filter: isActive ? 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.45))' : 'none',
                    transition: 'fill 0.35s ease, filter 0.35s ease',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase'
                  }}
                >
                  {step.title}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Dynamic Description Display below pipeline */}
        <div className="pipeline-description-display">
          {steps.map((step, idx) => {
            const isActive = activeIndex === idx;
            
            let tx = 0;
            let opacity = 0;
            if (activeIndex === null) {
              tx = 24;
              opacity = 0;
            } else if (isActive) {
              tx = 0;
              opacity = 1;
            } else {
              const isLeft = idx === (activeIndex - 1 + 4) % 4;
              tx = isLeft ? -24 : 24;
              opacity = 0;
            }

            return (
              <div
                key={step.num}
                className="step-desc-wrapper"
                style={{
                  opacity: opacity,
                  transform: `translateX(${tx}px)`,
                  position: isActive ? 'relative' : 'absolute',
                  left: 0,
                  right: 0,
                  margin: 'auto',
                  pointerEvents: isActive ? 'auto' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <span 
                  style={{ 
                    fontFamily: 'var(--font-heading-mono)', 
                    fontSize: '0.85rem', 
                    fontWeight: 700, 
                    color: '#FFFFFF',
                    letterSpacing: '0.12em',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase'
                  }}
                >
                  Phase {step.num} — {step.subtitle}
                </span>
                <p 
                  style={{ 
                    fontSize: 'var(--font-size-body)', 
                    lineHeight: '1.65', 
                    color: 'var(--color-text-secondary)',
                    fontWeight: 500,
                    maxWidth: '720px'
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stylesheet specifically calibrated for the pipeline visualizer */}
      <style>{`
        .pipeline-wrapper {
          position: relative;
          width: 100vw;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          height: 140px;
          margin-bottom: var(--space-6);
          z-index: 2;
          overflow: visible;
        }

        .pipeline-text-label {
          cursor: pointer;
          pointer-events: all;
        }

        .pipeline-description-display {
          margin-top: var(--space-6);
          min-height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 800px;
          margin-inline: auto;
          position: relative;
        }

        .step-desc-wrapper {
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
        }

        @media (max-width: 767px) {
          /* Responsive styling for mobile: identical to desktop */
          .section4-heading {
            font-size: 1.8rem !important;
          }

          .pipeline-wrapper {
            display: block !important;
            height: 80px !important;
            margin-bottom: var(--space-4) !important;
          }

          .pipeline-text-label {
            font-size: 32px !important;
          }

          .pipeline-description-display {
            min-height: 80px !important;
            gap: 0 !important;
            margin-top: var(--space-4) !important;
          }

          .step-desc-wrapper {
            position: absolute !important;
            padding: 0 var(--space-4) !important;
            border: none !important;
            background-color: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            margin-bottom: 0 !important;
          }

          .step-desc-wrapper span {
            font-size: 9px !important;
            margin-bottom: 4px !important;
          }

          .step-desc-wrapper p {
            font-size: 11px !important;
            line-height: 1.4 !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  );
};
