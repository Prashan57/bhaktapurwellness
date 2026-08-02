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
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
}

export function InView({
  children,
  as: Component = 'div',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  className = '',
  animation = 'fade-up',
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

  const getAnimationStyles = () => {
    const baseStyles = 'transition-all duration-700 ease-out';
    
    switch (animation) {
      case 'fade-up':
        return `${baseStyles} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'fade-in':
        return `${baseStyles} ${isInView ? 'opacity-100' : 'opacity-0'}`;
      case 'scale-up':
        return `${baseStyles} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      case 'slide-left':
        return `${baseStyles} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
      case 'slide-right':
        return `${baseStyles} ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`;
      default:
        return `${baseStyles} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
    }
  };

  return (
    <Component
      ref={ref}
      className={`${getAnimationStyles()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}