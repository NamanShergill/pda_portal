define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flare_flutter/flare', 'packages/flare_flutter/cache', 'packages/flare_flutter/asset_provider'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flare_flutter__flare, packages__flare_flutter__cache, packages__flare_flutter__asset_provider) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const isolates = packages__flutter__src__foundation___bitfield_web.src__foundation__isolates;
  const flare = packages__flare_flutter__flare.flare;
  const cache_asset = packages__flare_flutter__cache.cache_asset;
  const asset_provider = packages__flare_flutter__asset_provider.asset_provider;
  var flare_cache_asset = Object.create(dart.library);
  var boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  var FutureOfFlutterActor = () => (FutureOfFlutterActor = dart.constFn(async.Future$(flare.FlutterActor)))();
  var ByteDataToFutureOfFlutterActor = () => (ByteDataToFutureOfFlutterActor = dart.constFn(dart.fnType(FutureOfFlutterActor(), [typed_data.ByteData])))();
  var FlutterActorTovoid = () => (FlutterActorTovoid = dart.constFn(dart.fnType(dart.void, [flare.FlutterActor])))();
  var ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(flare.FlutterActor.loadFromByteData, ByteDataToFutureOfFlutterActor());
    }
  });
  var _actor = dart.privateName(flare_cache_asset, "_actor");
  var C0;
  flare_cache_asset.FlareCacheAsset = class FlareCacheAsset extends cache_asset.CacheAsset {
    get actor() {
      return this[_actor];
    }
    loadedActor(actor, assetProvider) {
      actor.loadImages().then(core.Null, dart.fn(_ => {
        if (actor != null) {
          this[_actor] = actor;
          this.completeLoad();
        } else {
          core.print("Failed to load flare file from " + dart.str(assetProvider) + ".");
        }
      }, boolToNull()));
    }
    load(cache, assetProvider) {
      super.load(cache, assetProvider);
      assetProvider.load().then(core.Null, dart.fn(data => {
        if (dart.test(flare_cache_asset.FlareCacheAsset.useCompute)) {
          isolates.compute(typed_data.ByteData, flare.FlutterActor, C0 || CT.C0, data).then(dart.void, dart.fn(actor => this.loadedActor(actor, assetProvider), FlutterActorTovoid()));
        } else {
          flare.FlutterActor.loadFromByteData(data).then(dart.void, dart.fn(actor => this.loadedActor(actor, assetProvider), FlutterActorTovoid()));
        }
      }, ByteDataToNull()));
    }
    get isAvailable() {
      return this[_actor] != null;
    }
  };
  (flare_cache_asset.FlareCacheAsset.new = function() {
    this[_actor] = null;
    flare_cache_asset.FlareCacheAsset.__proto__.new.call(this);
    ;
  }).prototype = flare_cache_asset.FlareCacheAsset.prototype;
  dart.addTypeTests(flare_cache_asset.FlareCacheAsset);
  dart.setMethodSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getMethods(flare_cache_asset.FlareCacheAsset.__proto__),
    loadedActor: dart.fnType(dart.void, [flare.FlutterActor, asset_provider.AssetProvider])
  }));
  dart.setGetterSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getGetters(flare_cache_asset.FlareCacheAsset.__proto__),
    actor: flare.FlutterActor,
    isAvailable: core.bool
  }));
  dart.setLibraryUri(flare_cache_asset.FlareCacheAsset, "package:flare_flutter/flare_cache_asset.dart");
  dart.setFieldSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getFields(flare_cache_asset.FlareCacheAsset.__proto__),
    [_actor]: dart.fieldType(flare.FlutterActor)
  }));
  dart.defineLazy(flare_cache_asset.FlareCacheAsset, {
    /*flare_cache_asset.FlareCacheAsset.useCompute*/get useCompute() {
      return true;
    },
    set useCompute(_) {}
  });
  dart.trackLibraries("packages/flare_flutter/flare_cache_asset", {
    "package:flare_flutter/flare_cache_asset.dart": flare_cache_asset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_cache_asset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAW4B;IAAM;gBAIF,OAAqB;AAQ/C,MAPF,AAAM,AAAa,KAAd,8BAAmB,QAAC;AACvB,YAAI,KAAK,IAAI;AACG,UAAd,eAAS,KAAK;AACA,UAAd;;AAEuD,UAAvD,WAAM,AAAgD,6CAAf,aAAa;;;IAG1D;SAGgB,OAAqB;AACH,MAA1B,WAAK,KAAK,EAAE,aAAa;AAS7B,MARF,AAAc,AAAO,aAAR,wBAAa,QAAU;AAClC,sBAAI;AAEkE,UADpE,AAAO,AACF,uEADkC,IAAI,kBACjC,QAAc,SAAU,iBAAY,KAAK,EAAE,aAAa;;AAGE,UADvD,AACR,oCADyB,IAAI,kBACxB,QAAc,SAAU,iBAAY,KAAK,EAAE,aAAa;;;IAGxE;;AAGwB,YAAA,AAAO,iBAAG;IAAI;;;IA/BzB;;;EAgCf;;;;;;;;;;;;;;;;;MA7Bc,4CAAU;YAAG","file":"flare_cache_asset.ddc.js"}');
  // Exports:
  return {
    flare_cache_asset: flare_cache_asset
  };
});

//# sourceMappingURL=flare_cache_asset.ddc.js.map
