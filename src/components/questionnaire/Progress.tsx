"use client";

export default function Progress({ current, total, stepTitle }: { current: number; total: number; stepTitle?: string }) {
  const pct = Math.max(0, Math.min(100, Math.round((current / total) * 100)));
  
  const getStepLabel = () => {
    if (pct <= 15) return "Getting started";
    if (pct <= 40) return "Basic information";
    if (pct <= 70) return "Detailed assessment";
    if (pct <= 90) return "Almost there";
    return "Finalizing";
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between text-sm text-gray-800 mb-2">
        <div className="font-medium">{getStepLabel()}</div>
        <div className="text-blue-600 font-semibold">{pct}% complete</div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
        <div>Step {current} of {total}</div>
        <div>You're making great progress!</div>
      </div>
    </div>
  );
}


