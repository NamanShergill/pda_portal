define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var asset_provider = Object.create(dart.library);
  const CT = Object.create(null);
  asset_provider.AssetProvider = class AssetProvider extends core.Object {};
  (asset_provider.AssetProvider.new = function() {
    ;
  }).prototype = asset_provider.AssetProvider.prototype;
  dart.addTypeTests(asset_provider.AssetProvider);
  dart.setLibraryUri(asset_provider.AssetProvider, "package:flare_flutter/asset_provider.dart");
  dart.trackLibraries("packages/flare_flutter/asset_provider", {
    "package:flare_flutter/asset_provider.dart": asset_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["asset_provider.dart"],"names":[],"mappings":";;;;;;;;;;EAIuB","file":"asset_provider.ddc.js"}');
  // Exports:
  return {
    asset_provider: asset_provider
  };
});

//# sourceMappingURL=asset_provider.ddc.js.map
