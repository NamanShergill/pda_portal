define(['dart_sdk', 'packages/flare_flutter/asset_provider', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flare_flutter__asset_provider, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_provider = packages__flare_flutter__asset_provider.asset_provider;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  var asset_flare = Object.create(dart.library);
  var $runtimeType = dartx.runtimeType;
  const CT = Object.create(null);
  var bundle$ = dart.privateName(asset_flare, "AssetFlare.bundle");
  var name$ = dart.privateName(asset_flare, "AssetFlare.name");
  asset_flare.AssetFlare = class AssetFlare extends asset_provider.AssetProvider {
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    load() {
      return async.async(typed_data.ByteData, (function* load() {
        let data = (yield this.bundle.load(this.name));
        if (!(data != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flare_flutter/provider/asset_flare.dart", 27, 12, "data != null");
        return data;
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      return asset_flare.AssetFlare.is(other) && dart.equals(other.bundle, this.bundle) && other.name == this.name;
    }
    get hashCode() {
      return ui.hashValues(this.bundle, this.name);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.name) + "\")";
    }
  };
  (asset_flare.AssetFlare.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let name = opts && 'name' in opts ? opts.name : null;
    this[bundle$] = bundle;
    this[name$] = name;
    if (!(bundle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flare_flutter/provider/asset_flare.dart", 11, 16, "bundle != null");
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flare_flutter/provider/asset_flare.dart", 12, 16, "name != null");
    asset_flare.AssetFlare.__proto__.new.call(this);
    ;
  }).prototype = asset_flare.AssetFlare.prototype;
  dart.addTypeTests(asset_flare.AssetFlare);
  dart.setMethodSignature(asset_flare.AssetFlare, () => ({
    __proto__: dart.getMethods(asset_flare.AssetFlare.__proto__),
    load: dart.fnType(async.Future$(typed_data.ByteData), [])
  }));
  dart.setLibraryUri(asset_flare.AssetFlare, "package:flare_flutter/provider/asset_flare.dart");
  dart.setFieldSignature(asset_flare.AssetFlare, () => ({
    __proto__: dart.getFields(asset_flare.AssetFlare.__proto__),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(asset_flare.AssetFlare, ['_equals', 'toString']);
  dart.defineExtensionAccessors(asset_flare.AssetFlare, ['hashCode']);
  dart.trackLibraries("packages/flare_flutter/provider/asset_flare", {
    "package:flare_flutter/provider/asset_flare.dart": asset_flare
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["asset_flare.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAiBoB;;;;;;IAIL;;;;;;;AAGQ;AACJ,oBAAO,MAAM,AAAO,iBAAK;AACxC,cAAO,AAAK,IAAD,IAAI;AACf,cAAO,KAAI;MACb;;;UAGyB;AACvB,uBAAU,iBAAN,KAAK,GAAgB;AACvB,cAAO;;AAET,YAAa,AAAwC,2BAA9C,KAAK,KAA+B,YAAb,AAAM,KAAD,SAAW,gBAAU,AAAM,AAAK,KAAN,SAAS;IACxE;;AAGoB,2BAAW,aAAQ;IAAK;;AAGvB,YAA8C,UAA5C,sBAAW,uBAAU,eAAM,wBAAU,aAAI;IAAG;;;QAjClC;QAAuB;IAAvB;IAAuB;UAC3C,AAAO,MAAD,IAAI;UACV,AAAK,IAAD,IAAI;AAFf;;EAEoB","file":"asset_flare.ddc.js"}');
  // Exports:
  return {
    provider__asset_flare: asset_flare
  };
});

//# sourceMappingURL=asset_flare.ddc.js.map
