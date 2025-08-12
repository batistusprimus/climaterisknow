'use client';

import { useEffect, useRef } from 'react';

export default function QuestionnaireBridge() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Vérifier l'origine pour la sécurité
      if (event.origin !== window.location.origin) return;
      
      // Écouter les messages de redimensionnement du questionnaire
      if (event.data?.type === 'sentinel:q:height' && iframeRef.current) {
        const height = event.data.height;
        iframeRef.current.style.height = `${Math.max(height, 600)}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe 
      ref={iframeRef}
      src="/q/embed?utm_source=capture_page"
      className="w-full border-0 transition-all duration-300"
      style={{ minHeight: '600px', height: '600px' }}
      title="Climate Risk Assessment Questionnaire"
    />
  );
}
