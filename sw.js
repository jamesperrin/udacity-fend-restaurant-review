'use strict';

/**
 * @description 
 * Variable to store static cache name
 */
const STATIC_CACHE_NAME = 'ufend-restaurant-v4';

/**
 * @description 
 * Variable to store all cached assets and resoucres.
 */
const CACHED_ASSETS = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/offline.html',
    '/css/styles.css',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/data/restaurants.json',
    '/sw.js',
    '/service-worker.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
];

/**
 * @description 
 * Service Worker Install Event
 */
self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(STATIC_CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            self.skipWaiting();
            return cache.addAll(CACHED_ASSETS);
        })
        .catch(err => console.error(err)));
});

/**
 * @description 
 * Servicer Worker Activate Event
 */
self.addEventListener('activate', function (evt) {
    evt.waitUntil(
        caches.keys().then(
            function (cacheNames) {
                return Promise.all(
                    cacheNames.filter(function (cacheName) {
                        return cacheName !== STATIC_CACHE_NAME;
                    }).map(function (cacheName) {
                        if (cacheName != STATIC_CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
});

/**
 * @description
 * Service Work Fetch Event
 * If Online, retrieves assets and resourcee along with adding to cache.
 * If Offline, retrieves assets and resources from cache.
 * @see
 * https://developers.google.com/web/fundamentals/primers/service-workers/
 * https://www.sitepoint.com/getting-started-with-service-workers/
 * https://www.pluralsight.com/courses/building-offline-web-apps-service-worker
 */
self.addEventListener('fetch', function (evt) {
    evt.respondWith(
        caches.match(evt.request).then(function (res) {
            if (res) {
                return res;
            }

            if (!navigator.onLine) {
                return caches.match(new Request('/offline.html'));
            }

            return fetch(evt.request).then(function (fRes) {
                if (fRes) {
                    return caches.open(STATIC_CACHE_NAME).then(function (cache) {
                        return cache.put(evt.request, fRes.clone()).then(function () {
                            return fRes;
                        });
                    });
                }
            });
        })
    );
});