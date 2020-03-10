'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/7.gif": "8e87bd7c47cf4ac721d83c0c8d68acd1",
"/assets/7.svg": "91a8dbed84d7db38c2607c37240573ff",
"/assets/AssetManifest.json": "b951fc14a8c1b7ef7b39894d9f0bedd2",
"/assets/assets/flare/empty.flr": "69de3868cd1337f272398e937f7426a0",
"/assets/FontManifest.json": "ea4a17dd5cc3859ec97bb536293e893c",
"/assets/fonts/JosefinSans-Bold.ttf": "0fce6d85ecbbf3d97e0d848824454600",
"/assets/fonts/JosefinSans-BoldItalic.ttf": "fa35453b6281268c4c2d1425958dc107",
"/assets/fonts/JosefinSans-ExtraLight.ttf": "fd0692280b2e51d4707aa13d94ed4c37",
"/assets/fonts/JosefinSans-ExtraLightItalic.ttf": "c9daa91d7ef60befa607199fc780ef8c",
"/assets/fonts/JosefinSans-Italic.ttf": "8caa389a41ccc5c6a5fa013962bd058f",
"/assets/fonts/JosefinSans-Light.ttf": "456ef90358735491d805959f6bc3455b",
"/assets/fonts/JosefinSans-LightItalic.ttf": "4c9d3e49dada904411b6d99e2a4d21f9",
"/assets/fonts/JosefinSans-Medium.ttf": "7f9383f0d0631de101f1e538e3100e6c",
"/assets/fonts/JosefinSans-MediumItalic.ttf": "fb6ac4d94091f806dca98e08e1d91e25",
"/assets/fonts/JosefinSans-Regular.ttf": "70e2eb768304d11812d28e33e91ecac5",
"/assets/fonts/JosefinSans-SemiBold.ttf": "14dcbadd839196188ac6f14e87ea3963",
"/assets/fonts/JosefinSans-SemiBoldItalic.ttf": "a346992c353da9c6e5d9c6e6e494f78f",
"/assets/fonts/JosefinSans-Thin.ttf": "8f1a5916c7986af420490768a218375a",
"/assets/fonts/JosefinSans-ThinItalic.ttf": "abac76c2ae47bd550b183ec45cf5fd8a",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/grey.svg": "0c6f2fe6ce5e0c913a6e374e90318144",
"/assets/LICENSE": "de4e62ed9c7f8fcd768414fc00dbe85b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"/assets/tenor.gif": "fb57ce5805fab9c8fe40768a6bc1461a",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "b02f5046ab36c3df1279872c9d5c1379",
"/main.dart.js": "4ed24a96806938afc8d9fb993edc7f90",
"/manifest.json": "e9ef7eee57cb7a515b3acb109ce7181a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
