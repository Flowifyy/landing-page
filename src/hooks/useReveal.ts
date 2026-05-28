import { useEffect, useRef, useState } from 'react';

/**
 * IntersectionObserver-based scroll reveal hook.
 * Returns a ref to attach to the element and a boolean `isVisible`.
 * Once visible, stays visible (no re-hide on scroll out).
 */
export function useReveal(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Once revealed, stop observing
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
