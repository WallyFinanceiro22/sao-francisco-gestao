
const CACHE_VERSION = 'sao-francisco-v7';

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    if (
        event.request.method === 'GET' &&
        event.request.mode === 'navigate' &&
        new URL(event.request.url).origin === self.location.origin
    ) {
        event.respondWith(
            fetch(event.request, { cache: 'no-store' })
        );
    }
});

