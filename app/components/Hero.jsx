"use client";

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

export const Hero = ({ onOpenAudit: _onOpenAudit }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback failed:", err));
    }
  };

  return (
    <section 
      id="hero" 
      style={{
        paddingTop: 'calc(var(--space-8) * 1.8)',
        paddingBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="grid-layout">
          {/* Hero Left: Editorial Heading Copy */}
          <div className="fade-in-staged" style={{ animationDelay: '0.1s' }}>
            
            <h1 
              style={{
                fontSize: 'var(--font-size-hero)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-3)',
                color: 'var(--color-text-primary)'
              }}
            >
              We automate your <span className="editorial-serif" style={{ color: 'var(--color-accent)' }}>business workflows</span> so you can focus on <span className="editorial-serif">growth</span>.
            </h1>

            <div style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-3)' }} />
          </div>

          {/* Hero Right: Premium Video Player */}
          <div className="fade-in-staged" style={{ animationDelay: '0.3s' }}>
            <div 
              className="card-premium"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                overflow: 'hidden',
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-text-primary)',
                borderWidth: '2px',
                boxShadow: '8px 8px 0px var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              {/* Window Header */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'var(--space-2) var(--space-3)',
                  backgroundColor: 'var(--color-surface-subtle)',
                  borderBottom: '2px solid var(--color-text-primary)',
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-danger)' }}></span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-warning)' }}></span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
                  </div>
                  <span>flowily.mp4</span>
                </div>
              </div>

              {/* Video Wrapper */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  backgroundColor: '#000000',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={togglePlay}
              >
                <video 
                  ref={videoRef}
                  src="/home/hero-video.mp4"
                  playsInline
                  muted={false}
                  onEnded={() => setIsPlaying(false)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Overlays */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 60%)',
                    pointerEvents: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3)',
                    zIndex: 2
                  }}
                >
                  {/* Top Bar inside Video */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', pointerEvents: 'auto' }}>
                  </div>

                  {/* Bottom Bar inside Video */}
                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      pointerEvents: 'auto',
                      width: '100%' 
                    }}
                  >
                    <button
                      onClick={togglePlay}
                      style={{
                        backgroundColor: 'rgba(7, 7, 9, 0.75)',
                        border: '1.5px solid var(--color-text-primary)',
                        borderRadius: '0px',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'transform var(--transition-fast)'
                      }}
                    >
                      {isPlaying ? <Pause size={16} fill="#FFFFFF" /> : <Play size={16} fill="#FFFFFF" style={{ marginLeft: '2px' }} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes recordingBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};
