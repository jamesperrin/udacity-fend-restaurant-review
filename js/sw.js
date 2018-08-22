'use strict';

/**
 * Variable to store static cache name
 */
var staticCacheName = 'ufend-restaurant-v1';

/**
 * Variable to store all cached assets and resoucres.
 */
const cachedAssets = [
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
    '/js/main.js',
    '/js/sw.js',
    '/js/service-worker.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
];

/**
 * Service Worker Install Event
 */
self.addEventListener('install', function (evt) {
    evt.waitUntil(
        caches.open(staticCacheName)
        .then(function (cache) {
            return cache.addAll(cachedAssets);
        })
        .catch(err => console.error(err)));
});

/**
 *  Servicer Worker Activate Event
 */
self.addEventListener('activate', function (evt) {
    evt.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames
                .filter(function (cacheName) {
                    return cacheName.startsWith('ufend-') && cacheName != staticCacheName;
                })
                .map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

/**
 * Service Work Fetch Event
 * If Online, retrieves assets and resourcee along with adding to cache.
 * If Offline, retrieves assets and resources from cache.
 */
self.addEventListener('fetch', function (evt) {
    evt.respondWith(
        caches.match(evt.request).then(function (cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(evt.request).then(function (newResponse) {
                return caches.open(staticCacheName)
                    .then(function (cache) {
                        return cache.put(evt.request, newResponse.clone())
                            .then(function () {
                                return newResponse;
                            });
                    });
            });
        })
    );
});