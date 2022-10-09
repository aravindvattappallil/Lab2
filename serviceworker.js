let cacheName = "cache_v1"

self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request)
        .catch(function () {
        return caches.match(event.request);
        })
    );
});

//installing 
self.addEventListener('install',(   )=>{
    console.log("Installing...")
    self.skipWaiting();
    caches.open(cacheName).then((cache)=>{
        return cache.addAll([
            '/',
            '/index.html',
            '/manifest.json',
            '/script.js',
            '/icon/icon.png',
            '/css/style.css',
            '/favicon_package/android-chrome-192x192.png',
            '/favicon_package/android-chrome-512x512.png'

        ]);
    }).catch((error)=>{
        console.error("failed")
    })
    
});

// claim control
self.addEventListener('activate',(event)=>{
    event.waitUntil(clients.claim());

    event.waitUntil(caches.keys().then(function(cacheNames){
        return Promise.all(cacheNames.filter(item => item !== cacheName).map(item =>caches.delete(item))
        );
        
    }));

});
