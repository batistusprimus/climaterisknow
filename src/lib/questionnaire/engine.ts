import type { AnswerRecord, BranchRule, QuestionnaireSchema } from './types';

function normalizeValue(val: unknown): unknown {
  return val;
}

export function getAnswerValue(answers: AnswerRecord[], stepId: string): unknown {
  const found = answers.find(a => a.stepId === stepId);
  return found ? normalizeValue(found.value) : undefined;
}

function ruleMatches(rule: BranchRule, answers: AnswerRecord[]): boolean {
  return rule.when.every(cond => {
    const value = getAnswerValue(answers, cond.stepId);
    if (cond.exists !== undefined) {
      return cond.exists ? value !== undefined && value !== null : value === undefined || value === null;
    }
    if (cond.equals !== undefined) return value === cond.equals;
    if (cond.notEquals !== undefined) return value !== cond.notEquals;
    if (cond.includes !== undefined && Array.isArray(value)) return value.includes(cond.includes as never);
    return false;
  });
}

export function computeNextStepId(schema: QuestionnaireSchema, answers: AnswerRecord[], currentStepId?: string, stepHistory?: string[]): string | null {
  const matching = (schema.rules || [])
    .filter(r => ruleMatches(r, answers))
    .filter(r => r.nextStepId !== currentStepId) // Éviter les boucles infinies
    .filter(r => !stepHistory?.includes(r.nextStepId)) // Éviter de revenir à des étapes déjà visitées
    .sort((a, b) => (a.priority ?? 100) - (b.priority ?? 100));

  if (matching.length === 0) return null;

  const topPriority = (matching[0].priority ?? 100);
  const topGroup = matching.filter(r => (r.priority ?? 100) === topPriority);

  if (topGroup.length === 1) return topGroup[0].nextStepId;

  // Si plusieurs règles de même priorité: tirage pondéré par weight
  const totalWeight = topGroup.reduce((acc, r) => acc + (r.weight ?? 1), 0);
  let pick = Math.random() * totalWeight;
  for (const r of topGroup) {
    pick -= (r.weight ?? 1);
    if (pick <= 0) return r.nextStepId;
  }
  return topGroup[0].nextStepId;
}


