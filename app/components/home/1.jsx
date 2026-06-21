"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import SideRays from '../animation/SideRays';

export const Section1 = ({ onOpenAudit: _onOpenAudit, playingVideoId, setPlayingVideoId }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playingVideoId !== 'hero' && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [playingVideoId, isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      if (setPlayingVideoId) setPlayingVideoId(null);
    } else {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play()
        .then(() => {
          setIsPlaying(true);
          if (setPlayingVideoId) setPlayingVideoId('hero');
        })
        .catch((err) => console.log("Playback failed:", err));
    }
  };

  return (
    <section
      id="hero"
      className="mobile-hero-section"
      style={{
        paddingTop: 'calc(var(--space-8) * 1.8)',
        paddingBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* SideRays bottom-right animation */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          pointerEvents: 'none',
          opacity: 0.7
        }}
      >
        <SideRays
          speed={2.5}
          rayColor1="#047857"
          rayColor2="#047857"
          intensity={2.4}
          spread={2}
          origin="bottom-right"
          tilt={60}
          saturation={1.5}
          blend={0.75}
          falloff={2.3}
          opacity={1.0}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="grid-layout">
          {/* Hero Left: Editorial Heading Copy */}
          <div className="fade-in-staged hero-text-container" style={{ animationDelay: '0.1s' }}>

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
          <div className="fade-in-staged hero-video-container" style={{ animationDelay: '0.3s' }}>
            <div
              className="card-premium mobile-video-card"
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
                className="mobile-video-header"
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
                  <span>hero.mp4</span>
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
                  src="/video-asset/hero-wala-video.mp4"
                  playsInline
                  muted={false}
                  onEnded={() => {
                    setIsPlaying(false);
                    if (playingVideoId === 'hero' && setPlayingVideoId) {
                      setPlayingVideoId(null);
                    }
                  }}
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
                      className="mobile-play-button"
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
                      {isPlaying ? <Pause size={16} className="play-icon-svg" fill="#FFFFFF" /> : <Play size={16} className="play-icon-svg" fill="#FFFFFF" style={{ marginLeft: '2px' }} />}
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
        
        @media (max-width: 767px) {
          .mobile-hero-section {
            padding-top: 100px !important;
            padding-bottom: var(--space-6) !important;
            min-height: auto !important;
          }
          .hero-text-container {
            order: 2 !important;
          }
          .hero-video-container {
            order: 1 !important;
            width: calc(100% + (2 * var(--space-4))) !important;
            margin-left: calc(-1 * var(--space-4)) !important;
            margin-right: calc(-1 * var(--space-4)) !important;
          }
          .mobile-video-card {
            border-left: none !important;
            border-right: none !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            margin-top: 0px !important;
            margin-bottom: var(--space-4) !important;
          }
          .mobile-video-header {
            padding: var(--space-2) var(--space-2) !important;
            font-size: 10px !important;
            border-radius: 0px !important;
          }
          .mobile-play-button {
            width: 28px !important;
            height: 28px !important;
          }
          .mobile-play-button .play-icon-svg {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};
