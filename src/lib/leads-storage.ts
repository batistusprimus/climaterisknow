import { Redis } from '@upstash/redis';

export type LeadAnswer = {
  stepId: string;
  value: unknown;
};

export type LeadSubmission = {
  sessionId: string;
  tunnelId: string;
  variant?: string;
  answers: LeadAnswer[];
  score?: number;
  metadata?: {
    utm?: Record<string, string | null>;
    referrer?: string | null;
    userAgent?: string | null;
    [key: string]: unknown;
  };
  completedAt: string; // ISO-8601
};

let leadsRedisClient: Redis | null = null;

function getLeadsRedis(): Redis {
  if (leadsRedisClient) return leadsRedisClient;

  // Supporte plusieurs conventions d'env vars (UPPERCASE, fallback lowercase)
  const url =
    process.env.LEADS_UPSTASH_REDIS_REST_URL ||
    process.env.LEADS_KV_REST_API_URL ||
    // fallbacks génériques project-wide si on veut mutualiser l'instance
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    // compat manuel (lowercase fournies par l'utilisateur)
    (process.env as any).leads_KV_REST_API_URL ||
    (process.env as any).leads_REDIS_URL;

  const token =
    process.env.LEADS_UPSTASH_REDIS_REST_TOKEN ||
    process.env.LEADS_KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    (process.env as any).leads_KV_REST_API_TOKEN;

  if (!url || !token) {
    throw new Error(
      'Upstash Leads non configuré. Définissez LEADS_KV_REST_API_URL et LEADS_KV_REST_API_TOKEN (ou UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN).'
    );
  }

  leadsRedisClient = new Redis({ url, token });
  return leadsRedisClient;
}

const LEADS_INDEX_KEY = 'leads:index';
const LEADS_TUNNEL_INDEX_PREFIX = 'leads:tunnel:'; // leads:tunnel:{tunnelId}
const LEADS_SUBMISSION_PREFIX = 'leads:submission:'; // leads:submission:{sessionId}

function submissionKey(sessionId: string): string {
  return `${LEADS_SUBMISSION_PREFIX}${sessionId}`;
}

export async function saveLeadSubmission(submission: LeadSubmission): Promise<{ ok: true }>{
  const redis = getLeadsRedis();
  const key = submissionKey(submission.sessionId);

  const pipeline = redis.pipeline();
  pipeline.set(key, submission);
  pipeline.sadd(LEADS_INDEX_KEY, submission.sessionId);
  pipeline.sadd(`${LEADS_TUNNEL_INDEX_PREFIX}${submission.tunnelId}`, submission.sessionId);
  await pipeline.exec();

  return { ok: true };
}

export async function getLeadSubmission(sessionId: string): Promise<LeadSubmission | null> {
  const redis = getLeadsRedis();
  const data = await redis.get<LeadSubmission | null>(submissionKey(sessionId));
  return data ?? null;
}

export async function listLeadSessionIds(params: { tunnelId?: string } = {}): Promise<string[]> {
  const redis = getLeadsRedis();
  if (params.tunnelId) {
    const setKey = `${LEADS_TUNNEL_INDEX_PREFIX}${params.tunnelId}`;
    const ids = (await redis.smembers(setKey)) as string[];
    return ids || [];
  }
  const ids = (await redis.smembers(LEADS_INDEX_KEY)) as string[];
  return ids || [];
}

export type { LeadSubmission as LeadSubmissionRecord };


