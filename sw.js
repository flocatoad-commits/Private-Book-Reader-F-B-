self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('book-reader-v2').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
