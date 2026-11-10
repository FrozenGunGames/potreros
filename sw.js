const CACHE = 'potreros-v1';
const FILES = ["./", "index.html", "leaflet.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "tiles/0/0/0.jpg", "tiles/1/0/0.jpg", "tiles/1/0/1.jpg", "tiles/1/1/0.jpg", "tiles/1/1/1.jpg", "tiles/2/0/0.jpg", "tiles/2/0/1.jpg", "tiles/2/0/2.jpg", "tiles/2/1/0.jpg", "tiles/2/1/1.jpg", "tiles/2/1/2.jpg", "tiles/2/2/0.jpg", "tiles/2/2/1.jpg", "tiles/2/2/2.jpg", "tiles/2/3/0.jpg", "tiles/2/3/1.jpg", "tiles/2/3/2.jpg", "tiles/3/0/0.jpg", "tiles/3/0/1.jpg", "tiles/3/0/2.jpg", "tiles/3/0/3.jpg", "tiles/3/0/4.jpg", "tiles/3/1/0.jpg", "tiles/3/1/1.jpg", "tiles/3/1/2.jpg", "tiles/3/1/3.jpg", "tiles/3/1/4.jpg", "tiles/3/2/0.jpg", "tiles/3/2/1.jpg", "tiles/3/2/2.jpg", "tiles/3/2/3.jpg", "tiles/3/2/4.jpg", "tiles/3/3/0.jpg", "tiles/3/3/1.jpg", "tiles/3/3/2.jpg", "tiles/3/3/3.jpg", "tiles/3/3/4.jpg", "tiles/3/4/0.jpg", "tiles/3/4/1.jpg", "tiles/3/4/2.jpg", "tiles/3/4/3.jpg", "tiles/3/4/4.jpg", "tiles/3/5/0.jpg", "tiles/3/5/1.jpg", "tiles/3/5/2.jpg", "tiles/3/5/3.jpg", "tiles/3/5/4.jpg", "tiles/3/6/0.jpg", "tiles/3/6/1.jpg", "tiles/3/6/2.jpg", "tiles/3/6/3.jpg", "tiles/3/6/4.jpg", "tiles/4/0/0.jpg", "tiles/4/0/1.jpg", "tiles/4/0/2.jpg", "tiles/4/0/3.jpg", "tiles/4/0/4.jpg", "tiles/4/0/5.jpg", "tiles/4/0/6.jpg", "tiles/4/0/7.jpg", "tiles/4/0/8.jpg", "tiles/4/1/0.jpg", "tiles/4/1/1.jpg", "tiles/4/1/2.jpg", "tiles/4/1/3.jpg", "tiles/4/1/4.jpg", "tiles/4/1/5.jpg", "tiles/4/1/6.jpg", "tiles/4/1/7.jpg", "tiles/4/1/8.jpg", "tiles/4/10/0.jpg", "tiles/4/10/1.jpg", "tiles/4/10/2.jpg", "tiles/4/10/3.jpg", "tiles/4/10/4.jpg", "tiles/4/10/5.jpg", "tiles/4/10/6.jpg", "tiles/4/10/7.jpg", "tiles/4/10/8.jpg", "tiles/4/11/0.jpg", "tiles/4/11/1.jpg", "tiles/4/11/2.jpg", "tiles/4/11/3.jpg", "tiles/4/11/4.jpg", "tiles/4/11/5.jpg", "tiles/4/11/6.jpg", "tiles/4/11/7.jpg", "tiles/4/11/8.jpg", "tiles/4/12/0.jpg", "tiles/4/12/1.jpg", "tiles/4/12/2.jpg", "tiles/4/12/3.jpg", "tiles/4/12/4.jpg", "tiles/4/12/5.jpg", "tiles/4/12/6.jpg", "tiles/4/12/7.jpg", "tiles/4/12/8.jpg", "tiles/4/2/0.jpg", "tiles/4/2/1.jpg", "tiles/4/2/2.jpg", "tiles/4/2/3.jpg", "tiles/4/2/4.jpg", "tiles/4/2/5.jpg", "tiles/4/2/6.jpg", "tiles/4/2/7.jpg", "tiles/4/2/8.jpg", "tiles/4/3/0.jpg", "tiles/4/3/1.jpg", "tiles/4/3/2.jpg", "tiles/4/3/3.jpg", "tiles/4/3/4.jpg", "tiles/4/3/5.jpg", "tiles/4/3/6.jpg", "tiles/4/3/7.jpg", "tiles/4/3/8.jpg", "tiles/4/4/0.jpg", "tiles/4/4/1.jpg", "tiles/4/4/2.jpg", "tiles/4/4/3.jpg", "tiles/4/4/4.jpg", "tiles/4/4/5.jpg", "tiles/4/4/6.jpg", "tiles/4/4/7.jpg", "tiles/4/4/8.jpg", "tiles/4/5/0.jpg", "tiles/4/5/1.jpg", "tiles/4/5/2.jpg", "tiles/4/5/3.jpg", "tiles/4/5/4.jpg", "tiles/4/5/5.jpg", "tiles/4/5/6.jpg", "tiles/4/5/7.jpg", "tiles/4/5/8.jpg", "tiles/4/6/0.jpg", "tiles/4/6/1.jpg", "tiles/4/6/2.jpg", "tiles/4/6/3.jpg", "tiles/4/6/4.jpg", "tiles/4/6/5.jpg", "tiles/4/6/6.jpg", "tiles/4/6/7.jpg", "tiles/4/6/8.jpg", "tiles/4/7/0.jpg", "tiles/4/7/1.jpg", "tiles/4/7/2.jpg", "tiles/4/7/3.jpg", "tiles/4/7/4.jpg", "tiles/4/7/5.jpg", "tiles/4/7/6.jpg", "tiles/4/7/7.jpg", "tiles/4/7/8.jpg", "tiles/4/8/0.jpg", "tiles/4/8/1.jpg", "tiles/4/8/2.jpg", "tiles/4/8/3.jpg", "tiles/4/8/4.jpg", "tiles/4/8/5.jpg", "tiles/4/8/6.jpg", "tiles/4/8/7.jpg", "tiles/4/8/8.jpg", "tiles/4/9/0.jpg", "tiles/4/9/1.jpg", "tiles/4/9/2.jpg", "tiles/4/9/3.jpg", "tiles/4/9/4.jpg", "tiles/4/9/5.jpg", "tiles/4/9/6.jpg", "tiles/4/9/7.jpg", "tiles/4/9/8.jpg"];
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;700&family=Figtree:wght@400;500;600;700&display=swap';
async function cacheFonts(cache) {          // best effort: fonts come from Google, the app works without them
  try {
    const r = await fetch(FONT_CSS, { mode: 'cors' }); if (!r.ok) return;
    await cache.put(FONT_CSS, r.clone());
    const urls = [...(await r.text()).matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]);
    await Promise.all(urls.map(u => fetch(u, { mode: 'cors' }).then(x => x.ok && cache.put(u, x)).catch(() => {})));
  } catch (e) {}
}
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(async c => { await c.addAll(FILES); await cacheFonts(c); }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: new URL(req.url).origin === location.origin });
    if (hit) return hit;
    try {
      const resp = await fetch(req);
      if (resp.ok && (new URL(req.url).origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(new URL(req.url).hostname))) {
        const copy = resp.clone(); caches.open(CACHE).then(c => c.put(req, copy));
      }
      return resp;
    } catch (err) {
      if (req.mode === 'navigate') return (await caches.match('index.html')) || Response.error();
      return Response.error();
    }
  })());
});
