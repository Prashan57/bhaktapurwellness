'use client';

import { useEffect, useRef, useState, type ReactNode, ElementType, CSSProperties } from 'react';

type InViewProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  once?: boolean;
};

export function InView({ children, className = '', as: Tag = 'div', delay = 0, once = true }: InViewProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref as any}
      style={style}
      className={[
        'transform transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  );
}
