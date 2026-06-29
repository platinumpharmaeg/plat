const DEFAULT_REMOTE_API_BASE = 'https://plat-gamma.vercel.app';

export function getApiBaseUrl() {
  const configured = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/$/, '');
  if (configured) return configured;

  if (typeof window !== 'undefined') {
    const host = window.location.hostname.toLowerCase();
    if (host === 'platinumpharma-eg.com' || host === 'www.platinumpharma-eg.com') {
      return DEFAULT_REMOTE_API_BASE;
    }
  }

  return '';
}

export function getApiUrl(path: string) {
  const base = getApiBaseUrl();
  return `${base}${path}`;
}
