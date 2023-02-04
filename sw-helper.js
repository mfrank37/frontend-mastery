const cacheName = 'fem-mastery';
const filesToCache = [
  './',
  './index.html',
  './link-icon.svg',
  './main.css',
  './main.js',
  './manifest.json',
  './logo-192x192.png',
  './logo-512x512.png',
  './screenshot.png',
  'https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap'
];

const installHandler = function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
}

const fetchHandler = function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
}

const notificationHandler = (event) => {
  // event.waitUntil(self.clients.matchAll().then(clients => {});
  const url = event.notification.data.url;
  switch(event.action) {
    case 'open':
      self.clients.openWindow(url);
      break;
    case 'close':
      event.notification.close();
  }
}
