"use client";

import React from 'react';
import { useReveal } from '../hooks/useReveal';

/**
 * Wraps children in a scroll-reveal container that fades in
 * and slides up when scrolled into view.
 */
export const RevealSection = ({ 
  children, 
  className = '', 
  style = {},
  delay = 0 
}) => {
  const [ref, isVisible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};
