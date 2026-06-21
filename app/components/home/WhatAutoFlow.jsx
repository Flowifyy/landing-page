"use client";

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const WhatAutoFlow = () => {
  const [revealRef, isVisible] = useReveal(0.1);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
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

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleProgressClick = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * video.duration;
    video.currentTime = newTime;
    setProgress((newTime / video.duration) * 100);
  };

  const handleFullscreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
  };

  // Format time (seconds to MM:SS)
  const formatTime = (secs) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section
      id="workflow-section"
      ref={revealRef}
      className={`reveal ${isVisible ? 'visible' : ''} mobile-workflow-section`}
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
          {/* Video Player (Left on Desktop) */}
          <div
            className="workflow-video-container"
            style={{
              width: '100%',
              margin: '0 auto',
            }}
          >
            <div
              className="card-premium workflow-video-card"
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
                className="workflow-video-header"
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
                  <span>what-Workflow.mp4</span>
                </div>
              </div>

              {/* Video Wrapper */}
              <div
                className="video-player-container"
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
                  src="/video-asset/workflow-section-video.mp4"
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Big Center Play Button (Visible when paused) */}
                {!isPlaying && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0.35)',
                      zIndex: 2,
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <div
                      className="big-play-btn"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                        border: '2px solid var(--color-text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        transform: 'scale(1)',
                        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Play size={28} fill="#070709" stroke="#070709" style={{ marginLeft: '4px' }} />
                    </div>
                  </div>
                )}

                {/* Custom Bottom Control Bar */}
                <div
                  className="video-controls-bar mobile-controls-bar"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
                    padding: 'var(--space-3)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    zIndex: 3,
                    opacity: isPlaying ? 0 : 1,
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Progress bar container */}
                  <div
                    className="progress-bar-container"
                    style={{
                      height: '6px',
                      width: '100%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      position: 'relative',
                      borderRadius: '3px'
                    }}
                    onClick={handleProgressClick}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${progress}%`,
                        backgroundColor: 'var(--color-accent)',
                        borderRadius: '3px',
                        transition: 'width 0.1s linear'
                      }}
                    />
                  </div>

                  {/* Control buttons and times */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={togglePlay}
                        style={{
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        {isPlaying ? <Pause size={18} fill="#FFFFFF" /> : <Play size={18} fill="#FFFFFF" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        style={{
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                      </button>

                      <span style={{ color: '#E4E4E7', fontSize: 'var(--font-size-xs)', fontFamily: 'var(--font-heading-mono)' }}>
                        {formatTime(videoRef.current ? videoRef.current.currentTime : 0)} / {formatTime(duration)}
                      </span>
                    </div>

                    <button
                      onClick={handleFullscreen}
                      style={{
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <Maximize size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Heading Area (Right on Desktop) */}
          <div 
            className="workflow-text-container"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}
          >
            <span className="section-tag" style={{ marginBottom: 'var(--space-3)' }}>
              Operational Engine
            </span>

            <h2
              style={{
                fontSize: 'var(--font-size-h2)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-text-primary)'
              }}
            >
              See what
              <br />
              <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>a workflow is</span>
              <br />
              before knowing
              <br />
              <img
                src="/in-line-flowify.svg"
                alt="Flowify"
                style={{
                  height: '0.95em',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginTop: '0.1em'
                }}
              />
            </h2>

            <div style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-4)' }} />
          </div>
        </div>
      </div>

      <style>{`
        .video-player-container:hover .video-controls-bar {
          opacity: 1 !important;
        }
        
        @media (max-width: 767px) {
          .mobile-workflow-section {
            padding-top: var(--space-6) !important;
            padding-bottom: var(--space-6) !important;
          }
          .workflow-text-container {
            order: 1 !important;
          }
          .workflow-text-container h2 {
            font-size: 2.2rem !important;
          }
          .workflow-video-container {
            order: 2 !important;
            width: calc(100% + (2 * var(--space-4))) !important;
            margin-left: calc(-1 * var(--space-4)) !important;
            margin-right: calc(-1 * var(--space-4)) !important;
          }
          .workflow-video-card {
            border-left: none !important;
            border-right: none !important;
            border-radius: 0px !important;
            box-shadow: none !important;
            margin-top: var(--space-3) !important;
          }
          .workflow-video-header {
            padding: var(--space-2) var(--space-2) !important;
            font-size: 10px !important;
            border-radius: 0px !important;
          }
          /* Big center play button smaller */
          .big-play-btn {
            width: 48px !important;
            height: 48px !important;
          }
          .big-play-btn svg {
            width: 18px !important;
            height: 18px !important;
            margin-left: 2px !important;
          }
          /* Bottom controls bar smaller */
          .mobile-controls-bar {
            padding: var(--space-2) !important;
            gap: var(--space-1) !important;
          }
          .mobile-controls-bar button svg {
            width: 14px !important;
            height: 14px !important;
          }
          .mobile-controls-bar span {
            font-size: 10px !important;
          }
          /* Progress bar container height */
          .progress-bar-container {
            height: 4px !important;
          }
        }
      `}</style>
    </section>
  );
};
