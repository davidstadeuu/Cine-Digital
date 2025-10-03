self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-saudacao-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "index2.html",
                "manifest.json",
                "ícone-192.png",
                "ícone-512.png",
                "batalha.jpg",
                "demon.jpg",
                "downtown.jpg",
                "interestelar.jpg",
                "invocação.jpg",
                "quarteto.jpg",
                "sexta.jpeg",
                "sogra.jpg"
            ]);
        })

    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});