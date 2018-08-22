'use strict';

/**
 * Registering Service Worker.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./js/sw.js')
            .then(res => console.log(`Service work Registered ${new Date().toLocaleTimeString()}`))
            .catch(er => console.error('There was an issue', err));
    });
}