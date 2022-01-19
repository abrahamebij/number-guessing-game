var cacheName = 'Number Guessing Game';
var filesToCache = [
  '/',
  'index.html',
  'assets/styles.css',
  'assets/index.js',
  'assets/pic.png',
  'assets/fc.jpg',
  'assets/1_pic.png',
  'assets/2_pic.png',
  'assets/3_pic.png',
  'assets/4_pic.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
