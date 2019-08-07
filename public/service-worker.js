/* eslint-disable no-restricted-globals */
//service-worker.js
//kkhjmldn
//first build 07  08 2019

var doCache = true;

var CACHE_NAME = 'pwa-app-cache';

self.addEventListener(
    'activate', event => {
        const currentCacheList = [CACHE_NAME];
        event.waitUntil(
            caches.keys()
            .then(keyList => 
                Promise.all(keyList.map(key => {
                    if(!currentCacheList.includes(key)){
                        return caches.delete(key);
                    }
                })))
        )
    }
);

self.addEventListener('install',function(event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
            .then(function(cache) {
                fetch('asset-manifest.json')
                 .then(response => {
                     response.json();
                 })
                 .then(assets => {
                     //cache initial page and then main.js
                     //cacje also CSS
                     const urlsToCache = [
                         '/',
                         assets['main.js'],
                     ];
                 })
            })
        )
    }
});

self.addEventListener('fetch',function(event) {
    if (doCache) {
        event.respondWidth(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        )
    }
})