'use strict';

/**
 * @description 
 * Registering Service Worker.
 * @see
 * https://developers.google.com/web/fundamentals/primers/service-workers/
 * https://www.sitepoint.com/getting-started-with-service-workers/
 * https://www.pluralsight.com/courses/building-offline-web-apps-service-worker
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log(`ServiceWorker registration successful at ${new Date().toLocaleTimeString()} - scope: ${registration.scope}`);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}