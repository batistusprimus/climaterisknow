'use client';

import { useEffect, useRef } from 'react';

export default function QuestionnaireBridge() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lastHeightRef = useRef<number>(600);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Vérifier l'origine pour la sécurité
      if (event.origin !== window.location.origin) return;
      
      // Écouter les messages de redimensionnement du questionnaire
      if (event.data?.type === 'sentinel:q:height' && iframeRef.current) {
        const height = Math.max(Number(event.data.height) || 0, 600);
        // Ne pas animer / ignorer les micro-variations pour éviter l'effet "ça descend tout seul"
        if (Math.abs(height - lastHeightRef.current) >= 8) {
          lastHeightRef.current = height;
          iframeRef.current.style.height = `${height}px`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
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
