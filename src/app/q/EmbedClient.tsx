"use client";

import { useEffect, useRef } from 'react';
import Questionnaire from '@/components/questionnaire/Questionnaire';

export default function EmbedClient({ variant, tunnelId }: { variant: string; tunnelId: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const post = () => {
      const height = el.scrollHeight;
      try {
        window.parent?.postMessage({ type: 'sentinel:q:height', height }, '*');
      } catch {}
    };
    post();
    const ro = new ResizeObserver(() => post());
    ro.observe(el);
    const onHash = () => post();
    window.addEventListener('hashchange', onHash);
    return () => {
      ro.disconnect();
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Questionnaire variant={variant} tunnelId={tunnelId} />
    </div>
  );
}


