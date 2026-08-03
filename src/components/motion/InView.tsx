'use client';

import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface InViewProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  animation?: 'fade-in' | 'fade-up';
}

export function InView({
  children,
  as: Component = 'div',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  className = '',
  animation = 'fade-in',
}: InViewProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsInView(true), delay);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, once]);

  const animationClass = animation === 'fade-up'
    ? `transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
    : `transition-all duration-700 ease-out ${isInView ? 'opacity-100' : 'opacity-0'}`;

  return (
    <Component
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}