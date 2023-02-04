/**
 * importScripts() used to add other scripts.
 * There can be just one SW for PWA.
 */
importScripts('./sw-helper.js');

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', installHandler);

/* Serve cached content when offline */
self.addEventListener('fetch', fetchHandler);

/* handle notifications clicked */
self.addEventListener('notificationclick', notificationHandler);
