'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { completeSchema } from '@/lib/questionnaire/complete-schema';
import type { AnswerRecord, InputStep, MultiStep, QuestionStep, SingleStep, ZipListStep } from '@/lib/questionnaire/types';
import { computeNextStepId } from '@/lib/questionnaire/engine';
import Progress from './Progress';

interface QuestionnaireProps {
  tunnelId?: string;
  schemaId?: string;
  embedMode?: boolean;
}

export default function Questionnaire({ tunnelId = 'default', embedMode = false }: QuestionnaireProps) {
  const schema = completeSchema;
  const containerRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>('');

  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [currentStepId, setCurrentStepId] = useState<string>(schema.entryStepId);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (!sessionIdRef.current) {
      sessionIdRef.current = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    const storageKey = `q:${schema.id}:v:${schema.version}:state`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnswers(parsed.answers || []);
        setCurrentStepId(parsed.currentStepId || schema.entryStepId);
        setHistory(parsed.history || []);
      } catch (e) {
        console.warn('Failed to parse saved state:', e);
      }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const utmData: Record<string, string> = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
      const value = urlParams.get(key);
      if (value) utmData[key] = value;
    });
    if (Object.keys(utmData).length > 0) {
      const utmAnswer: AnswerRecord = { stepId: '__utm__', value: utmData };
      setAnswers(prev => {
        const filtered = prev.filter(a => a.stepId !== '__utm__');
        return [...filtered, utmAnswer];
      });
    }
  }, [schema.id, schema.version, schema.entryStepId]);

  useEffect(() => {
    const storageKey = `q:${schema.id}:v:${schema.version}:state`;
    const state = { answers, currentStepId, history };
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [answers, currentStepId, history, schema.id, schema.version]);

  const setAnswer = useCallback((stepId: string, value: unknown) => {
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.stepId === stepId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { stepId, value };
        return updated;
      } else {
        return [...prev, { stepId, value }];
      }
    });
    setError(null);
  }, []);

  const formatPhoneUS = (input: string): string => {
    const digits = (input || '').replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const currentStep = schema.steps.find(s => s.id === currentStepId);

  const validateCurrent = useCallback((answersSnapshot?: AnswerRecord[]): string | null => {
    if (!currentStep) return null;
    const list = answersSnapshot || answers;
    const ans = list.find(a => a.stepId === currentStep.id)?.value;
    
    const isOptional = currentStep.kind === 'input' && currentStep.type === 'tel';
    
    if (!isOptional) {
      if (ans === undefined || ans === null || ans === '') {
        return 'Please answer this question.';
      }
      if (currentStep.kind === 'ziplist') {
        const arr = Array.isArray(ans) ? ans : [];
        const validZips = arr.filter(v => v && /^(\d{5})$/.test(String(v).trim()));
        const minRequired = currentStep.requiredMin || 1;
        if (validZips.length < minRequired) {
          return `Please provide at least ${minRequired} valid ZIP code(s).`;
        }
      }
      if (currentStep.kind === 'multi') {
        const arr = Array.isArray(ans) ? ans : [];
        const minRequired = currentStep.minSelections || 1;
        if (arr.length < minRequired) {
          return `Please select at least ${minRequired} option(s).`;
        }
      }
      if (currentStep.kind === 'input' && (currentStep.type === 'email')) {
        const email = String(ans);
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!ok) return 'Please provide a valid email address.';
        const domain = email.split('@')[1]?.toLowerCase() || '';
        const freeList = ['gmail.com','yahoo.com','outlook.com','hotmail.com','icloud.com','aol.com','proton.me','protonmail.com','gmx.com','live.com'];
        if (freeList.includes(domain)) return 'Please use a business email address.';
      }
    }
    
    if (currentStep?.kind === 'input' && currentStep.type === 'tel') {
      if (typeof ans === 'string' && ans.trim() !== '') {
        const digits = ans.replace(/\D/g, '');
        if (digits.length !== 10) return 'Please provide a valid US phone number.';
      }
    }
    return null;
  }, [answers, currentStep]);

  const buildSnapshotWithCurrentInput = (): AnswerRecord[] => {
    const snapshot: AnswerRecord[] = [...answers];
    
    if (currentStep?.kind === 'input') {
      const root = containerRef.current;
      const input = root?.querySelector('input') as HTMLInputElement;
      if (input) {
        let inputValue = input.value;
        if (currentStep.type === 'tel') {
          inputValue = formatPhoneUS(inputValue);
        }
        const idx = snapshot.findIndex(a => a.stepId === currentStep.id);
        if (idx >= 0) {
          snapshot[idx] = { stepId: currentStep.id, value: inputValue };
        } else {
          snapshot.push({ stepId: currentStep.id, value: inputValue });
        }
      }
    }
    
    if (isZipList(currentStep)) {
      const root = containerRef.current;
      const inputs = Array.from(root?.querySelectorAll('input') || []);
      if (inputs.length > 0) {
        const values = inputs.map(el => (el as HTMLInputElement).value.trim());
        const idx = snapshot.findIndex(a => a.stepId === currentStep.id);
        if (idx >= 0) {
          snapshot[idx] = { stepId: currentStep.id, value: values };
        } else {
          snapshot.push({ stepId: currentStep.id, value: values });
        }
      }
    }
    
    return snapshot;
  };

  const goNext = useCallback(async () => {
    const snap = buildSnapshotWithCurrentInput();
    if (snap !== answers) setAnswers(snap);
    const validationError = validateCurrent(snap);
    if (validationError) {
      setError(validationError);
      return;
    }
    const rulesNext = computeNextStepId(schema, snap, currentStep?.id, history);
    const stepFallback = currentStep?.transitions?.fallbackNextStepId ?? null;
    const nextId = rulesNext || stepFallback;
    if (!nextId) {
      setSubmitting(true);
      try {
        const payload = {
          sessionId: sessionIdRef.current,
          tunnelId,
          answers: snap,
          metadata: {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            utm: snap.find(a => a.stepId === '__utm__')?.value || {},
          },
        };
        const res = await fetch('/api/questionnaire/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          localStorage.removeItem(`q:${schema.id}:v:${schema.version}:state`);
        }
      } catch (err) {
        console.error('Submission failed:', err);
        setError('Failed to submit. Please try again.');
      } finally {
        setSubmitting(false);
      }
      return;
    }
    setHistory(prev => [...prev, currentStepId]);
    setCurrentStepId(nextId);
    setError(null);
  }, [answers, currentStep, history, schema, tunnelId, validateCurrent, buildSnapshotWithCurrentInput, currentStepId]);

  const goBack = useCallback(() => {
    if (history.length === 0) return;
    const previousStepId = history[history.length - 1];
    setCurrentStepId(previousStepId);
    setHistory(prev => prev.slice(0, -1));
    setError(null);
  }, [history]);

  const totalByBranch: Record<string, number> = {
    default: 8,
    ind_energy: 18,
    ind_petrochem: 17,
    ind_logistics: 19,
    ind_manufacturing: 19,
    ind_construction: 19,
    ind_other: 8,
  };

  if (!currentStep) return <div>Step not found: {currentStepId}</div>;

  const industryAnswer = answers.find(a => a.stepId === 'primary_industry')?.value as string;
  const branchKey = industryAnswer ? `ind_${industryAnswer.toLowerCase().replace(/[^a-z]/g, '_')}` : 'default';
  const total = totalByBranch[branchKey] || totalByBranch.default;
  const currentIndex = history.length + 1;

  const isThankYouPage = currentStep.id === 'thank_you';

  if (isThankYouPage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-blue-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Submitted!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for completing your Climate Vulnerability Assessment.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">What happens next?</h2>
              <div className="space-y-3 text-blue-800">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">1</span>
                  </div>
                  <span>Our climate risk analysts will process your assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">2</span>
                  </div>
                  <span>We'll analyze 25+ years of weather data for your locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">3</span>
                  </div>
                  <span><strong>You'll receive your personalized report within 24 hours</strong></span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Questions? Contact us at <a href="mailto:support@sentinelshield.com" className="text-blue-600 hover:underline">support@sentinelshield.com</a>
            </p>
          </div>
          
          {/* Disclaimer constant */}
          <div className="mt-8 px-12">
            <p className="text-xs text-gray-500 italic text-center leading-relaxed">
              This is an educational climate risk analysis service. Sentinel Shield provides weather risk intelligence based on 25 years of Texas climate data. We are NOT insurance agents, brokers, or advisors. This assessment does NOT constitute insurance advice, recommendations, or solicitation. We do NOT sell, broker, or advise on insurance products.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={embedMode ? "bg-transparent" : "min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"}>
      <div className="relative">
        {!embedMode && (
          <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="px-4 py-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-md"></div>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">Climate Risk Assessment</h1>
                    <p className="text-gray-600 text-xs">Powered by 25+ years of NOAA & FEMA data</p>
                  </div>
                </div>
                <Progress current={currentIndex} total={total} stepTitle={currentStep.title} />
              </div>
            </div>
          </div>
        )}

        <div className={`bg-white shadow-lg border border-gray-200 relative z-10 ${embedMode ? 'rounded-lg' : 'mx-4 mt-2 max-w-4xl mx-auto rounded-xl'}`}>
          {embedMode && (
            <div className="px-6 py-3 border-b border-gray-200">
              <Progress current={currentIndex} total={total} stepTitle={currentStep.title} />
            </div>
          )}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 rounded-t-xl border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-1">{currentStep.title}</h2>
            {currentStep.description && (
              <p className="text-gray-700 leading-relaxed text-sm">{currentStep.description}</p>
            )}
          </div>
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex-shrink-0"></div>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            {isSingle(currentStep) && (
              <div className="space-y-2">
                {currentStep.options.map((opt) => {
                  const isSelected = answers.find(a => a.stepId === currentStep.id)?.value === opt.id;
                  return (
                  <button
                    key={opt.id}
                    type="button"
                    className={`group w-full p-4 border-2 rounded-xl transition-all duration-200 text-left shadow-sm hover:shadow-md ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50 bg-white'
                    }`}
                    onClick={() => {
                      // Update answers immediately and create a snapshot for validation
                      const newAnswers = [...answers];
                      const existingIndex = newAnswers.findIndex(a => a.stepId === currentStep.id);
                      if (existingIndex >= 0) {
                        newAnswers[existingIndex] = { stepId: currentStep.id, value: opt.id };
                      } else {
                        newAnswers.push({ stepId: currentStep.id, value: opt.id });
                      }
                      setAnswers(newAnswers);
                      setError(null);
                      
                      // Proceed with the updated answers
                      setTimeout(() => {
                        const validationError = validateCurrent(newAnswers);
                        if (validationError) {
                          setError(validationError);
                          return;
                        }
                        const rulesNext = computeNextStepId(schema, newAnswers, currentStep?.id, history);
                        const stepFallback = currentStep?.transitions?.fallbackNextStepId ?? null;
                        const nextId = rulesNext || stepFallback;
                        if (nextId) {
                          setHistory(prev => [...prev, currentStepId]);
                          setCurrentStepId(nextId);
                        }
                      }, 200);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="relative">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                            isSelected 
                              ? 'border-blue-500 bg-blue-500' 
                              : 'border-gray-300 group-hover:border-blue-500'
                          }`}>
                            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                              isSelected 
                                ? 'bg-white' 
                                : 'bg-transparent group-hover:bg-blue-500'
                            }`}></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-base font-medium text-gray-900 group-hover:text-blue-900 transition-colors">{opt.label}</span>
                          {opt.description && (
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{opt.description}</div>
                          )}
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">&rarr;</span>
                        </div>
                      </div>
                    </div>
                  </button>
                  );
                })}
              </div>
            )}

            {isMulti(currentStep) && (
              <MultiEditor
                step={currentStep}
                value={answers.find(a => a.stepId === currentStep.id)?.value as string[] || []}
                onChange={(v) => setAnswer(currentStep.id, v)}
              />
            )}

            {isInput(currentStep) && (
              <div className="space-y-4">
                <input
                  key={currentStep.id}
                  type={currentStep.type}
                  placeholder={currentStep.placeholder}
                  defaultValue={(answers.find(a => a.stepId === currentStep.id)?.value as string) || ''}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 bg-white shadow-sm"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      goNext();
                    }
                  }}
                  onChange={(e) => {
                    if (currentStep.type === 'tel') {
                      const formatted = formatPhoneUS(e.target.value);
                      e.target.value = formatted;
                      setAnswer(currentStep.id, formatted);
                    } else {
                      setAnswer(currentStep.id, e.target.value);
                    }
                  }}
                />
                {currentStep.type === 'tel' && (
                  <p className="text-sm text-gray-500 px-1">Format: (555) 123-4567</p>
                )}
                {currentStep.type === 'email' && (
                  <p className="text-sm text-gray-500 px-1">Please use your business email address</p>
                )}
              </div>
            )}

            {isZipList(currentStep) && (
              <ZipListEditor
                step={currentStep}
                value={answers.find(a => a.stepId === currentStep.id)?.value as string[] || []}
                onChange={(v) => setAnswer(currentStep.id, v)}
              />
            )}

            {currentStep.id === 'contact_consent' && (
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-800 text-sm font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-900 mb-2">Important Disclaimer</p>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      This is an educational climate risk analysis service. Sentinel Shield provides weather risk intelligence based on 25 years of Texas climate data. We are NOT insurance agents, brokers, or advisors.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-6 pb-6">
            <div className="flex items-center justify-between">
              <div>
                {history.length > 0 && (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-700 font-medium text-sm"
                    onClick={goBack}
                  >
                    <span>&larr;</span> 
                    <span>Previous</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-base" 
                  onClick={goNext} 
                  disabled={submitting}
                >
                  {submitting && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <span>
                    {(() => {
                      const hasNext = computeNextStepId(schema, answers, currentStep?.id, history) || currentStep.transitions?.fallbackNextStepId;
                      if (hasNext) return 'Continue';
                      return submitting ? 'Submitting...' : 'Submit Assessment';
                    })()}
                  </span>
                  {!submitting && (
                    <span className="text-lg">&rarr;</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer constant */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <p className="text-xs text-gray-500 italic text-center leading-relaxed">
            This is an educational climate risk analysis service. Sentinel Shield provides weather risk intelligence based on 25 years of Texas climate data. We are NOT insurance agents, brokers, or advisors. This assessment does NOT constitute insurance advice, recommendations, or solicitation. We do NOT sell, broker, or advise on insurance products.
          </p>
        </div>
      </div>
    </div>
  );
}

function MultiEditor({ step, value, onChange }: { step: MultiStep; value: string[]; onChange: (v: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>(value || []);
  
  // Sync with parent value
  useEffect(() => {
    setSelected(value || []);
  }, [value]);
  
  useEffect(() => {
    onChange(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const isConsentPage = step.title === 'Consent & Disclaimer';

  return (
    <div className="space-y-4">
      {step.options.map((opt) => (
        <label
          key={opt.id}
          className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 cursor-pointer group bg-white"
        >
          <input
            type="checkbox"
            checked={selected.includes(opt.id)}
            onChange={(e) => {
              if (e.target.checked) {
                setSelected(prev => [...prev, opt.id]);
              } else {
                setSelected(prev => prev.filter(id => id !== opt.id));
              }
            }}
            className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 group-hover:border-blue-500 transition-colors"
          />
          <div className="flex-1">
            {isConsentPage ? (
              <span className="text-gray-700 leading-relaxed">
                {opt.id === 'consent_educational' && (
                  <>
                    I understand this is an educational climate risk analysis only. Sentinel Shield does not provide insurance advice or sell insurance products. For complete terms, see our{' '}
                    <a href="/legal/disclaimer" target="_blank" className="underline hover:text-blue-800">
                      disclaimer
                    </a>{' '}
                    and{' '}
                    <a href="/legal/terms" target="_blank" className="underline hover:text-blue-800">
                      terms of service
                    </a>.
                  </>
                )}
                {opt.id === 'consent_email' && (
                  <>
                    I consent to receive my Climate Vulnerability Analysis report via email.
                  </>
                )}
                {opt.id === 'consent_agg' && (
                  <>
                    I understand that Sentinel Shield may share aggregated, anonymized climate risk data for research purposes. See our{' '}
                    <a href="/legal/privacy" target="_blank" className="underline hover:text-blue-800">
                      privacy policy
                    </a>.
                  </>
                )}
              </span>
            ) : (
              <span className="text-lg font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                {opt.label}
              </span>
            )}
            {opt.description && !isConsentPage && (
              <div className="text-sm text-gray-500 mt-1">{opt.description}</div>
            )}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}

function ZipListEditor({ step, value, onChange }: { step: ZipListStep; value: string[]; onChange: (v: string[]) => void }) {
  const [items, setItems] = useState<string[]>(() => {
    const arr = Array.isArray(value) ? value : [];
    const minItems = step.maxItems || 5;
    while (arr.length < minItems) arr.push('');
    return arr;
  });

  // Sync with parent value
  useEffect(() => {
    const arr = Array.isArray(value) ? value : [];
    const minItems = step.maxItems || 5;
    while (arr.length < minItems) arr.push('');
    setItems(arr);
  }, [value, step.maxItems]);

  useEffect(() => {
    onChange(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const updateItem = (index: number, newValue: string) => {
    setItems(prev => {
      const copy = [...prev];
      copy[index] = newValue.trim();
      return copy;
    });
  };

  return (
    <div className="space-y-3">
      {items.map((val, i) => (
        <input
          key={i}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          inputMode="numeric"
          pattern="\\d{5}"
          placeholder={`${step.labelPrefix || 'ZIP Code'} ${i + 1}${i === 0 && step.requiredMin > 0 ? ' *' : ''}`}
          value={val}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, '').slice(0, 5);
            e.target.value = v;
            updateItem(i, v);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const v = (e.target as HTMLInputElement).value.trim();
              updateItem(i, v);
            }
          }}
        />
      ))}
      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        <span className="font-medium">Format:</span> 5 digits (US ZIP codes only).
        <span className="font-medium"> Minimum required:</span> {step.requiredMin} valid ZIP{step.requiredMin > 1 ? 's' : ''}.
      </p>
    </div>
  );
}

function isSingle(step: QuestionStep): step is SingleStep {
  return step.kind === 'single';
}

function isMulti(step: QuestionStep): step is MultiStep {
  return step.kind === 'multi';
}

function isInput(step: QuestionStep): step is InputStep {
  return step.kind === 'input';
}

function isZipList(step: QuestionStep): step is ZipListStep {
  return step.kind === 'ziplist';
}