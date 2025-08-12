'use client';

import { useEffect, useRef } from 'react';

export default function QuestionnaireBridge() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lastHeightRef = useRef<number>(600);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Vérifier l'origine pour la sécurité
      if (event.origin !== window.location.origin) return;
      
      // Écouter les messages de redimensionnement du questionnaire
      if (event.data?.type === 'sentinel:q:height' && iframeRef.current) {
        const next = Math.max(Number(event.data.height) || 0, 600);
        // Taux limité via rAF: on n'applique qu'une fois par frame
        const apply = () => {
          if (!iframeRef.current) return;
          // Seulement si on augmente de façon significative (>16px) pour éviter le drift
          if (next - lastHeightRef.current > 16) {
            lastHeightRef.current = next;
            iframeRef.current.style.height = `${next}px`;
          }
          rafRef.current = null;
        };
        if (rafRef.current == null) rafRef.current = requestAnimationFrame(apply);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <iframe 
      ref={iframeRef}
      src="/q/embed?utm_source=capture_page"
      className="w-full border-0 block"
      style={{ minHeight: '600px', height: '600px' }}
      title="Climate Risk Assessment Questionnaire"
    />
  );
}
