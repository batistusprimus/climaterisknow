export type QuestionType = 'single' | 'multi' | 'input' | 'ziplist' | 'number' | 'slider' | 'date';

export type QuestionOption = {
  id: string;
  label: string;
  description?: string;
  value?: string | number | boolean;
  weight?: number;
};

export type StepBase = {
  id: string;
  title?: string;
  description?: string;
  required?: boolean;
  transitions?: {
    rules?: BranchRule[];
    fallbackNextStepId?: string | null;
  };
};

export type SingleStep = StepBase & {
  kind: 'single';
  options: QuestionOption[];
};

export type MultiStep = StepBase & {
  kind: 'multi';
  options: QuestionOption[];
  maxSelections?: number;
  minSelections?: number;
};

export type InputStep = StepBase & {
  kind: 'input';
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'url';
};

export type ZipListStep = StepBase & {
  kind: 'ziplist';
  fields: number; // nombre total d'inputs
  requiredMin: number; // nombre minimal requis (valides)
  labelPrefix?: string;
};

export type QuestionStep = SingleStep | MultiStep | InputStep | ZipListStep;

export type BranchCondition = {
  stepId: string;
  equals?: unknown;
  includes?: unknown;
  notEquals?: unknown;
  exists?: boolean;
};

export type BranchRule = {
  when: BranchCondition[];
  nextStepId: string;
  priority?: number; // plus petit = plus prioritaire
  weight?: number; // utilisé si probabilités
};

export type QuestionnaireSchema = {
  id: string;
  version: string;
  entryStepId: string;
  steps: QuestionStep[];
  rules?: BranchRule[];
};

export type AnswerRecord = {
  stepId: string;
  value: unknown;
};


