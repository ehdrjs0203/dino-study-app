// ===================================================
// 🦕 다이노 스터디 - Service Worker
// ===================================================

const CACHE_NAME = 'dino-study-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// ===== 설치: 핵심 파일 캐시 =====
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] 캐시 저장 중...');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ===== 활성화: 오래된 캐시 삭제 =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ===== 요청 가로채기: 캐시 우선 전략 =====
self.addEventListener('fetch', event => {
  // POST 요청이나 chrome-extension은 무시
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // 유효한 응답만 캐시
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // 오프라인 fallback
        return caches.match('/index.html');
      });
    })
  );
});
