import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

/**
 * Wraps children in a scroll-reveal container that fades in
 * and slides up when scrolled into view.
 */
export const RevealSection: React.FC<RevealSectionProps> = ({ 
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
