"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const Section5 = ({ playingVideoId, setPlayingVideoId }) => {
  const [revealRef, isVisible] = useReveal(0.1);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playingVideoId !== 'philosophy' && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [playingVideoId, isPlaying]);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
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
          if (setPlayingVideoId) setPlayingVideoId('philosophy');
        })
        .catch((err) => console.log("Playback failed:", err));
    }
  };

  return (
    <section
      id="philosophy-section"
      ref={revealRef}
      className={`reveal ${isVisible ? 'visible' : ''} mobile-philosophy-section`}
      style={{
        paddingTop: 'calc(var(--space-8) * 1.5)',
        paddingBottom: 'calc(var(--space-8) * 1.5)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)'
      }}
    >
      <div className="container">
        <div className="grid-layout">
          
          {/* Philosophy Left: Editorial Copy */}
          <div 
            className="philosophy-text-container"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}
          >
            <span className="section-tag" style={{ marginBottom: 'var(--space-3)' }}>
              Core Philosophy
            </span>

            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: 1.25,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-text-primary)'
              }}
            >
              Automation isn't about{" "}
              <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>
                replacing people
              </span>
              ; it's about{" "}
              <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>
                freeing time
              </span>{" "}
              for more productive tasks.
            </h2>

            <div style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-4)' }} />
          </div>

          {/* Philosophy Right: Mockup Window Video Player */}
          <div 
            className="philosophy-video-container"
            style={{ width: '100%', margin: '0 auto' }}
          >
            <div
              className="card-premium philosophy-video-card"
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
                className="philosophy-video-header"
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
                  <span>automation-isnt-about-replacing-humans.mp4</span>
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
                  src="/video-asset/automation-isn't-about-repressing-people.mp4"
                  playsInline
                  onEnded={() => {
                    setIsPlaying(false);
                    if (playingVideoId === 'philosophy' && setPlayingVideoId) {
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
                      className="philosophy-btn-play"
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
        @media (max-width: 767px) {
          .mobile-philosophy-section {
            padding-top: var(--space-6) !important;
            padding-bottom: var(--space-6) !important;
          }
          .philosophy-text-container {
            order: 1 !important;
          }
          .philosophy-text-container h2 {
            font-size: 2.0rem !important;
          }
          .philosophy-video-container {
            order: 2 !important;
            width: calc(100% + (2 * var(--space-4))) !important;
            margin-left: calc(-1 * var(--space-4)) !important;
            margin-right: calc(-1 * var(--space-4)) !important;
          }
          .philosophy-video-card {
            border-left: none !important;
            border-right: none !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            margin-top: var(--space-3) !important;
          }
          .philosophy-video-header {
            padding: var(--space-2) var(--space-2) !important;
            font-size: 10px !important;
            border-radius: 0px !important;
          }
          .philosophy-btn-play {
            width: 28px !important;
            height: 28px !important;
          }
          .philosophy-btn-play svg {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};
