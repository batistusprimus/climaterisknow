'use client';

import { useEffect } from 'react';
import Questionnaire from '@/components/questionnaire/Questionnaire';

export default function EmbedClient() {
  useEffect(() => {
    // Auto-height functionality for iframe embedding
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const height = Math.ceil(entry.contentRect.height);
        // Envoyer la hauteur au parent (la page de capture)
        if (window.parent !== window) {
          window.parent.postMessage({
            type: 'sentinel:q:height',
            height: height + 16 // petite marge
          }, window.location.origin);
        }
      }
    });

    // Observer le body de la page
    if (document.body) resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      <Questionnaire tunnelId="capture_page" embedMode={true} />
    </div>
  );
}
