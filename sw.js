self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/src/css/app.css',
          '/src/js/app.js',
          '/src/images/icon/icon-48x48.png',
          '/src/images/icon/icon-96x96.png',
          '/src/images/icon/icon-144x144.png',
          '/src/images/icon/icon-192x192.png',
          '/src/images/icon/icon-256x256.png',
          '/src/images/icon/icon-384x384.png',
          '/src/images/icon/icon-512x512.png'
        ])
      })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});
