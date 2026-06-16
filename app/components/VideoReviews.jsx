"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

const reviewsList = [
  {
    id: 'dtc-stock-sync',
    name: 'Rajesh Mehta',
    role: 'Founder, Boldfit India — Bangalore',
    quote: '"We were losing up to 10% of our daily orders because stock numbers on Amazon, Myntra, and Shopify were disconnected. Flowily built a real-time inventory sync engine. Now stock adjustments happen down to the second across all channels. No more refunds for out-of-stock items."',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-woman-working-on-a-laptop-40050-large.mp4',
    avatar: 'RM'
  },
  {
    id: 'support-deflection',
    name: 'Dr. Priya Sharma',
    role: 'Brand Director, The Skin Pantry — Mumbai',
    quote: '"Our support team was drowned in hundreds of \'Where is my order?\' (WISMO) WhatsApp queries daily. Flowily designed an AI WhatsApp bot. It resolves 75% of customer support tickets instantly, saving us 80+ hours of manual support work every week."',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-woman-working-on-a-laptop-40050-large.mp4',
    avatar: 'PS'
  },
  {
    id: 'd2c-surat',
    name: 'Vikram Patel',
    role: 'Founder, ThreadCraft India — Surat',
    quote: '"We are a Surat-based D2C apparel brand. Shopify orders, payments, and Shiprocket dispatches were all disconnected. Flowily wired them together — now order entries auto-sync to our Tally ERP, and trigger automated WhatsApp tracking updates. Zero manual overhead."',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-at-a-sewing-machine-42410-large.mp4',
    avatar: 'VP'
  },
  {
    id: 'cart-recovery',
    name: 'Neha Gupta',
    role: 'Operations Head, Organic India — Delhi',
    quote: '"Checkout abandonment and payment drops were costing us lakhs of rupees. Flowily implemented an intelligent WhatsApp follow-up sequence. It triggers automated notifications for dropped carts and payment drops. Our checkout recovery rate jumped 18% in the first month."',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-woman-working-on-a-laptop-40050-large.mp4',
    avatar: 'NG'
  }
];

// Reusable Video Testimonial Card
const VideoCard = ({
  review,
  hasInteracted,
  setHasInteracted
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Global click registers document-wide interaction state
  useEffect(() => {
    const handleGlobalClick = () => {
      setHasInteracted();
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [setHasInteracted]);

  // Handle intersection scroll autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Play automatically
          if (hasInteracted) {
            // Can play unmuted because interaction requirements are met
            video.muted = false;
            setIsMuted(false);
          } else {
            // Must play muted first to avoid security throw
            video.muted = true;
            setIsMuted(true);
          }
          
          video.play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Fallback if browser still blocks unmuted
              video.muted = true;
              setIsMuted(true);
              video.play().then(() => setIsPlaying(true));
            });
        } else {
          // Pause when scrolling out of viewport to preserve resource bounds
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        root: null,
        threshold: 0.85 // Trigger when 85% of element is in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasInteracted]);

  // Click on video toggles mute state or plays
  const handleTogglePlayMute = (e) => {
    e.stopPropagation(); // Avoid triggering global triggers
    const video = videoRef.current;
    if (!video) return;

    if (!hasInteracted) {
      setHasInteracted();
      video.muted = false;
      setIsMuted(false);
      video.play().then(() => setIsPlaying(true));
      return;
    }

    // Toggle mute
    const nextMute = !video.muted;
    video.muted = nextMute;
    setIsMuted(nextMute);
  };

  return (
    <div 
      ref={containerRef}
      className="card-premium video-review-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        padding: 'var(--space-4)',
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Video Box */}
      <div 
        onClick={handleTogglePlayMute}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          backgroundColor: '#000000',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <video 
          ref={videoRef}
          src={review.videoUrl}
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Dynamic Controls Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '12px',
            zIndex: 4
          }}
        >
          {/* Status indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span 
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: isPlaying ? 'var(--color-accent)' : 'var(--color-text-muted)',
                animation: isPlaying ? 'recordingBlink 1.5s infinite steps(2)' : 'none'
              }}
            ></span>
            <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.55rem', color: '#FFFFFF', letterSpacing: '0.05em' }}>
              {isPlaying ? 'FEED: LIVE' : 'FEED: IDLE'}
            </span>
          </div>

          {/* Time indicator placeholder */}
          <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.7)' }}>
            00:15 / REC
          </span>
        </div>

        {/* Play Button Overlay (when no interaction has occurred) */}
        {!hasInteracted && (
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(7, 7, 9, 0.45)',
              backdropFilter: 'blur(3px)',
              zIndex: 3
            }}
          >
            <div 
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface)',
                border: '1.5px solid var(--color-text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                transform: 'scale(1)',
                transition: 'transform var(--transition-fast)'
              }}
              className="card-play-button"
            >
              <Play size={20} fill="var(--color-text-primary)" style={{ color: 'var(--color-text-primary)', marginLeft: '3px' }} />
            </div>
          </div>
        )}

        {/* Volume status button */}
        {hasInteracted && (
          <button
            onClick={handleTogglePlayMute}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(7, 7, 9, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
              color: '#FFFFFF'
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </div>

      {/* Quote text */}
      <blockquote 
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          lineHeight: 1.6,
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          flexGrow: 1
        }}
      >
        {review.quote}
      </blockquote>

      {/* Author chassis */}
      <div 
        style={{
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'center',
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-3)',
          marginTop: 'auto'
        }}
      >
        <div 
          style={{
            width: '36px',
            height: '36px',
            backgroundColor: 'var(--color-surface-subtle)',
            border: '1px solid var(--color-border-high)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading-mono)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 700,
            color: 'var(--color-text-primary)'
          }}
        >
          {review.avatar}
        </div>
        <div style={{ minWidth: 0 }}>
          <cite style={{ fontStyle: 'normal', fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-sm)', fontWeight: 800, color: 'var(--color-text-primary)', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {review.name}
          </cite>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {review.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export const VideoReviews = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <section id="reviews">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 
            style={{
              fontSize: 'var(--font-size-h2)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-2)'
            }}
          >
            Proof, not <span className="editorial-serif">promises</span>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Real brands. Real growth. Watch how DTC founders replaced manual fulfillment and support chaos with self-running sync engines.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div 
          className="reviews-grid-chassis"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-4)'
          }}
        >
          {reviewsList.map((review) => (
            <VideoCard 
              key={review.id} 
              review={review} 
              hasInteracted={hasInteracted}
              setHasInteracted={handleInteraction}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes recordingBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .video-review-card:hover .card-play-button {
          transform: scale(1.1) !important;
        }
        @media (min-width: 680px) {
          .reviews-grid-chassis {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
