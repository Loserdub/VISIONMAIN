const TRIAL_DAYS = 14;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const TRIAL_PREFIX = 'void:trial:';
const LAST_USER_KEY = 'void:lastSignedInUserId';

function trialStorageKey(clerkUserId) {
  return `${TRIAL_PREFIX}${clerkUserId}`;
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function getCachedUserId() {
  return localStorage.getItem(LAST_USER_KEY);
}

export function clearCachedUserId() {
  localStorage.removeItem(LAST_USER_KEY);
}

export function setCachedUserId(clerkUserId) {
  localStorage.setItem(LAST_USER_KEY, clerkUserId);
}

export function getOrCreateTrial(clerkUserId) {
  const key = trialStorageKey(clerkUserId);
  const existing = safeJsonParse(localStorage.getItem(key));

  if (existing && typeof existing.trialStart === 'number') {
    return existing;
  }

  const created = { trialStart: Date.now() };
  localStorage.setItem(key, JSON.stringify(created));
  return created;
}

export function getTrialStatus(clerkUserId) {
  const { trialStart } = getOrCreateTrial(clerkUserId);
  const elapsedDays = Math.floor((Date.now() - trialStart) / MS_PER_DAY);
  const daysLeft = Math.max(0, TRIAL_DAYS - elapsedDays);
  return {
    elapsedDays,
    daysLeft,
    inTrial: elapsedDays < TRIAL_DAYS,
  };
}

export async function checkSubscription(clerkUserId) {
  void clerkUserId;
  // TODO: replace with Cloudflare Worker endpoint call
  return false;
}

export async function resolveAccess(clerkUserId) {
  setCachedUserId(clerkUserId);
  const trial = getTrialStatus(clerkUserId);
  const subscribed = await checkSubscription(clerkUserId);
  return {
    subscribed,
    trial,
    allowApp: subscribed || trial.inTrial,
  };
}
