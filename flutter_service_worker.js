'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "35028b5504f8ac57a23745b10fa4adff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "54b6b167deb1cbaa47f382ef10d9fc1c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3144d7e8fce93b5ac44db7f4e551cddf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e4895f4751d829502e99d524b4e2a3c",
".git/logs/refs/heads/main": "82120e3a32b11385b3bbee6caf4923ad",
".git/logs/refs/remotes/origin/main": "1871101b60749755f3eb9b33bca74aba",
".git/objects/00/8e6ba6e4a963f5b0a9eea5632e799012bd3415": "6c58e80491401a96b272ddc2cc04261d",
".git/objects/0b/29dfdad3a7021b6620de05a74f7a8c7dec6439": "af7881462550e22adf83cc1b591a7689",
".git/objects/0c/a536d3e413df3832f002db211950eaa994240c": "0e4e0b584019813db1e2fb72282ff733",
".git/objects/14/c4624dfc767e6cce2407c95a9e12539169b942": "3f0e8678d0a2586e8061b7c4cdd32c1d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/24ee20e2317d191cde20c6c078b63917335f38": "4b6fa413ea001569d4a38d3367a71c49",
".git/objects/1f/30f022ebe372e7c8394e59bf4919a735f85ced": "21f0e5b2cc261fd96fcb13617c68d614",
".git/objects/24/951239e4e05ab188e6e1f177964ac9476a2cfd": "fb2097e90e7ced4e9c498915020784a7",
".git/objects/2b/4d1660b140c1b02e21d88d20cecca39e6f89f2": "e04461a8897c475e4d0765e5e3600e7f",
".git/objects/2d/86867c491353b59d5eeab71d6fc5b069cd099f": "5775a0efc612aab54e12cc74aad8f3f9",
".git/objects/49/c832098620ca3a8b048fa95c7952112f859d8b": "505f81b38ad2dee8114ebf7672bba906",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/96e79855b725416b59ef700f0e2773c444d716": "af5140ac0dd6b83918a66af81c5d51bd",
".git/objects/4e/c41223f825793273a71a66f6a100278f721609": "a56c7e1a7b151556d1f03d86d3267d60",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/edb3abea04705ea27aa84b0e90b7c1324642f8": "4d7cf9fff88c8079c61b34221668e484",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/ec9cad657ab5449f76822640c5501c3ca179c1": "7b386ab5b2962ec14fb7cf44d23d5ce2",
".git/objects/5d/f74ad349276a1b0907d81d311c40ab138c03ba": "acd047bb1927c44cf488d26a52a8377a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/e9fab65be31f54d7b067c88117b4e1471fa4d4": "a139db69e80fe6cbf2fa7e9929a27e3a",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/84/3f217dd8dc596240fbb7ca95bcabd303a0d2b7": "b040d55c17219fc9785db6b6f4d917d2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e8b67d38062e043ffbadcf461101ce6a930716": "cad6b829e17fbe3fa3ca637fc3c08eb7",
".git/objects/89/b118965c22d5d310b6599d3928df63e744db36": "2ce339ee427f80233646c7b0234ed370",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/91/45b3b1e2b4693d0cd3b217f71392097d72bb08": "88bd129cf08b609f6516ba2f1625252c",
".git/objects/91/7996ee86aca3cb778b0bf465cd6a1bf8d727cb": "8b5a77aff12e275244f656da28833fc6",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/ae/e017382194e32f90d311fc97addb7b1db9d6b4": "bfb4a9270e3659a0115606a36b27a601",
".git/objects/af/2fae917ddab5d5cde8c1c877eeaae65e408c5b": "535d83365fe1aba533aa592b85d23c5d",
".git/objects/b1/39b927c775b09440af57ff26e6532f53c07fbc": "c7063c357ed0b50a4ef5991d024de121",
".git/objects/b6/1824ff45c3373a3e01ae7854f64e6bad75d59c": "f22ddba22980834228567c988bb9e307",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/31f615dbae626754b5433e99679bd9acb7634b": "c5dd653a5b778cc678a0ef90b6b9de30",
".git/objects/c5/380d4534b4bbc09844c0df6c93fb17949770d9": "d22f1fc6bca0f3bd4f7801a4ffa7266a",
".git/objects/c5/c0eaca8ebe427772f92fb9c8b0f13e42086a26": "49bc827650f34b715ea03f60d20e9256",
".git/objects/c7/7ea84c9a42400c6ae9b848a94684ae6e30f8bf": "cadf506e614fb11d005238a67b73e177",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/88f304b0452b6756d8c59749618a7b7f56bd51": "f4c621abda1584b260592987428edae5",
".git/objects/d2/8e4942d8191ccedacefbf2ca849643bd254842": "5fc39def8dbfb3af00c5196042cae2dd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/885d6f4131966eca4c891e27dc5cc71c961a6f": "210b243dfdcc01f8757587e51ee358ac",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b5f736313a06555d7e156d419778d03787876c": "2ab4beb106a0f5e76b30bc722b9d4b09",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d863abf9838a1f87fa3f996d3436f238792bbf": "0d2216cac72d0a53cd9b04a90e92e2c1",
".git/objects/f4/385562545af9be474d66f65044eb1cce9a4c8c": "f008ddd1c9522b0c658c0b8dae6f0bfe",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/ORIG_HEAD": "90a7cf2f50fdc797653090b3cfbc4fba",
".git/refs/heads/main": "b869e3abe8d9b3d4c8a0618b99dfdcbf",
".git/refs/remotes/origin/main": "90a7cf2f50fdc797653090b3cfbc4fba",
"assets/AssetManifest.bin": "bf11366b43b208935e355912c1dece7f",
"assets/AssetManifest.bin.json": "a4718dc118c79c820fbdd768be9bd108",
"assets/AssetManifest.json": "bef1eb68a539db9e3a4ac0670d3c9079",
"assets/assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf": "85cc70f51b722cc2618ab156b5bd5e5d",
"assets/assets/fonts/JetBrainsMono-VariableFont_wght.ttf": "514bb1da4b5d654b134572435ffcfea7",
"assets/assets/icons/C.png": "a096c6319029b0b998711dab888ee1b8",
"assets/assets/icons/dart.png": "701962fe9ab38d5361df8e806ea6a6f3",
"assets/assets/icons/flutter.png": "a025591faa749c7614a24710ca835b95",
"assets/assets/icons/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/icons/langchain.png": "bc599c46f533711410a58ff5afa16567",
"assets/assets/icons/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/icons/numpy.png": "060039bc2737fb5e58840d509f1d86a6",
"assets/assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/icons/sourcecode.png": "677daa5de11687c39e54cb5f2bbda40b",
"assets/assets/images/me.jpeg": "14e26519770cadacafc11d7da6630511",
"assets/FontManifest.json": "67dbc7ad5a81d274eb8efe9f3a7f143a",
"assets/fonts/MaterialIcons-Regular.otf": "8243943dd601cd9e708c95414d9c318b",
"assets/NOTICES": "a27f6938a821de43902acceb886dbff9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ade06dc843804e71c56697cfd3127ff8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "4960272d5efb7499fb572c8ff3f4b5ea",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "be8965c9ddb8f6d70c7e21dcaa34b44c",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
