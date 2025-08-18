'use client';

import Questionnaire from '@/components/questionnaire/Questionnaire';

export default function ManufacturingQuestionnaireBridge() {
  return (
    <div className="w-full">
      <Questionnaire 
        tunnelId="manufacturer_page" 
        schemaId="manufacturing"
        embedMode={true} 
      />
    </div>
  );
}
