define(['dart_sdk', 'packages/flare_flutter/flare_cache_asset', 'packages/flare_flutter/cache'], function(dart_sdk, packages__flare_flutter__flare_cache_asset, packages__flare_flutter__cache) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flare_cache_asset = packages__flare_flutter__flare_cache_asset.flare_cache_asset;
  const cache = packages__flare_flutter__cache.cache;
  var flare_cache = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    }
  });
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  flare_cache.FlareCache = class FlareCache extends cache.Cache$(flare_cache_asset.FlareCacheAsset) {
    get isPruningEnabled() {
      return flare_cache.FlareCache.doesPrune;
    }
    get pruneAfter() {
      return flare_cache.FlareCache.pruneDelay;
    }
    makeAsset() {
      return new flare_cache_asset.FlareCacheAsset.new();
    }
  };
  (flare_cache.FlareCache.new = function() {
    flare_cache.FlareCache.__proto__.new.call(this);
    ;
  }).prototype = flare_cache.FlareCache.prototype;
  dart.addTypeTests(flare_cache.FlareCache);
  dart.setMethodSignature(flare_cache.FlareCache, () => ({
    __proto__: dart.getMethods(flare_cache.FlareCache.__proto__),
    makeAsset: dart.fnType(flare_cache_asset.FlareCacheAsset, [])
  }));
  dart.setGetterSignature(flare_cache.FlareCache, () => ({
    __proto__: dart.getGetters(flare_cache.FlareCache.__proto__),
    pruneAfter: core.Duration
  }));
  dart.setLibraryUri(flare_cache.FlareCache, "package:flare_flutter/flare_cache.dart");
  dart.defineLazy(flare_cache.FlareCache, {
    /*flare_cache.FlareCache.doesPrune*/get doesPrune() {
      return true;
    },
    set doesPrune(_) {},
    /*flare_cache.FlareCache.pruneDelay*/get pruneDelay() {
      return C0 || CT.C0;
    },
    set pruneDelay(_) {}
  });
  flare_cache.cachedActor = function cachedActor(assetProvider) {
    return flare_cache._cache.getAsset(assetProvider);
  };
  flare_cache.getWarmActor = function getWarmActor(assetProvider) {
    return flare_cache._cache.getWarmAsset(assetProvider);
  };
  dart.defineLazy(flare_cache, {
    /*flare_cache._cache*/get _cache() {
      return new flare_cache.FlareCache.new();
    }
  });
  dart.trackLibraries("packages/flare_flutter/flare_cache", {
    "package:flare_flutter/flare_cache.dart": flare_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAY+B;IAAS;;AAGX;IAAU;;AAGN;IAAiB;;;;;EAClD;;;;;;;;;;;;MAXc,gCAAS;YAAG;;;MACR,iCAAU;;;;;iDAgBsB;AAC9C,UAAA,AAAO,6BAAS,aAAa;EAAC;mDAGS;AACvC,UAAA,AAAO,iCAAa,aAAa;EAAC;;MARhC,kBAAM;YAAG","file":"flare_cache.ddc.js"}');
  // Exports:
  return {
    flare_cache: flare_cache
  };
});

//# sourceMappingURL=flare_cache.ddc.js.map
