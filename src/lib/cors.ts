const ALLOWED_ORIGINS = new Set([
  'https://platinumpharma-eg.com',
  'https://www.platinumpharma-eg.com',
  'https://plat-gamma.vercel.app',
  'https://plat-webseoar-9982s-projects.vercel.app',
  'http://localhost:3000',
]);

export function getCorsHeaders(request: Request) {
  const origin = request.headers.get('origin');
  const allowOrigin =
    origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://www.platinumpharma-eg.com';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

export function jsonWithCors(request: Request, body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: getCorsHeaders(request),
  });
}
