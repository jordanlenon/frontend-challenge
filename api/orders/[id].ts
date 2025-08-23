export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const VITE_API_URL = process.env.VITE_API_URL;
  if (!VITE_API_URL) return new Response('VITE_API_URL not set', { status: 500 });

  const incoming = new URL(req.url);
  const outgoingPath = incoming.pathname.replace(/^\/api\//, '');
  const target = new URL(outgoingPath + incoming.search, VITE_API_URL);

  const headers = new Headers(req.headers);
  headers.delete('host');
  headers.delete('content-length');

  const init: RequestInit = {
    method: req.method,
    headers,
    redirect: 'manual'
  };

  if (!['GET', 'HEAD'].includes(req.method)) {
    init.body = req.body as any;
    (init as any).duplex = 'half';
  }

  const resp = await fetch(target, init);
  return new Response(resp.body, { status: resp.status, headers: resp.headers });
}