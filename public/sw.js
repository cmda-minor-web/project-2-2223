const staticCacheName = 'site-static-v1';
const assets = [
    "/offline", 
    "/styles/styles.css"
];

self.addEventListener("install", (event) => {

    // The promise that skipWaiting() returns can be safely ignored.
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting 
    self.skipWaiting();
    
    // console.log("Service worker has been installed")
    event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log("catching shell assets");
        cache.addAll(assets);
    })
  )
});
  
// activate service worker
self.addEventListener("activate", (event) => {
    // console.log("Service worker has been activated")

});

self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cacheRes) => {
        if (cacheRes) {
          return cacheRes;
        }
        return fetch(event.request).catch(() => {
          return caches.match("/offline");
        });
      })
    );
  });