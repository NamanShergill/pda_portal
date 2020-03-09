define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flare_flutter/provider/asset_flare', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flare_flutter/asset_provider', 'packages/flare_flutter/flare_controller', 'packages/flare_flutter/flare', 'packages/flare_dart/actor', 'packages/flare_dart/math/mat2d', 'packages/flare_flutter/flare_render_box', 'packages/flare_dart/math/aabb'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flare_flutter__provider__asset_flare, packages__flutter__src__gestures__arena, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flare_flutter__asset_provider, packages__flare_flutter__flare_controller, packages__flare_flutter__flare, packages__flare_dart__actor, packages__flare_dart__math__mat2d, packages__flare_flutter__flare_render_box, packages__flare_dart__math__aabb) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const asset_flare = packages__flare_flutter__provider__asset_flare.provider__asset_flare;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const asset_provider = packages__flare_flutter__asset_provider.asset_provider;
  const flare_controller = packages__flare_flutter__flare_controller.flare_controller;
  const flare = packages__flare_flutter__flare.flare;
  const actor_animation = packages__flare_dart__actor.animation__actor_animation;
  const actor_drawable = packages__flare_dart__actor.actor_drawable;
  const mat2d = packages__flare_dart__math__mat2d.math__mat2d;
  const flare_render_box = packages__flare_flutter__flare_render_box.flare_render_box;
  const aabb = packages__flare_dart__math__aabb.math__aabb;
  var flare_actor = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $clear = dartx.clear;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $modulo = dartx['%'];
  var $add = dartx.add;
  var $removeRange = dartx.removeRange;
  var $removeAt = dartx.removeAt;
  var $remove = dartx.remove;
  var JSArrayOfFlareAnimationLayer = () => (JSArrayOfFlareAnimationLayer = dart.constFn(_interceptors.JSArray$(flare_actor.FlareAnimationLayer)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.contain",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    }
  });
  var _name = dart.privateName(box_fit, "_name");
  var C0;
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var C1;
  var filename$ = dart.privateName(flare_actor, "FlareActor.filename");
  var flareProvider$ = dart.privateName(flare_actor, "FlareActor.flareProvider");
  var artboard$ = dart.privateName(flare_actor, "FlareActor.artboard");
  var animation$ = dart.privateName(flare_actor, "FlareActor.animation");
  var snapToEnd$ = dart.privateName(flare_actor, "FlareActor.snapToEnd");
  var fit$ = dart.privateName(flare_actor, "FlareActor.fit");
  var alignment$ = dart.privateName(flare_actor, "FlareActor.alignment");
  var isPaused$ = dart.privateName(flare_actor, "FlareActor.isPaused");
  var shouldClip$ = dart.privateName(flare_actor, "FlareActor.shouldClip");
  var controller$ = dart.privateName(flare_actor, "FlareActor.controller");
  var callback$ = dart.privateName(flare_actor, "FlareActor.callback");
  var color$ = dart.privateName(flare_actor, "FlareActor.color");
  var boundsNode$ = dart.privateName(flare_actor, "FlareActor.boundsNode");
  var sizeFromArtboard$ = dart.privateName(flare_actor, "FlareActor.sizeFromArtboard");
  flare_actor.FlareActor = class FlareActor extends framework.LeafRenderObjectWidget {
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get flareProvider() {
      return this[flareProvider$];
    }
    set flareProvider(value) {
      super.flareProvider = value;
    }
    get artboard() {
      return this[artboard$];
    }
    set artboard(value) {
      super.artboard = value;
    }
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get snapToEnd() {
      return this[snapToEnd$];
    }
    set snapToEnd(value) {
      super.snapToEnd = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get isPaused() {
      return this[isPaused$];
    }
    set isPaused(value) {
      super.isPaused = value;
    }
    get shouldClip() {
      return this[shouldClip$];
    }
    set shouldClip(value) {
      super.shouldClip = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get callback() {
      return this[callback$];
    }
    set callback(value) {
      super.callback = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get boundsNode() {
      return this[boundsNode$];
    }
    set boundsNode(value) {
      super.boundsNode = value;
    }
    get sizeFromArtboard() {
      return this[sizeFromArtboard$];
    }
    set sizeFromArtboard(value) {
      super.sizeFromArtboard = value;
    }
    createRenderObject(context) {
      let t1, t0;
      t0 = new flare_actor.FlareActorRenderObject.new();
      t0.assetProvider = (t1 = this.flareProvider, t1 == null ? new asset_flare.AssetFlare.new({bundle: asset_bundle.rootBundle, name: this.filename}) : t1);
      t0.fit = this.fit;
      t0.alignment = this.alignment;
      t0.animationName = this.animation;
      t0.snapToEnd = this.snapToEnd;
      t0.isPaused = this.isPaused;
      t0.controller = this.controller;
      t0.completed = this.callback;
      t0.color = this.color;
      t0.shouldClip = this.shouldClip;
      t0.boundsNodeName = this.boundsNode;
      t0.useIntrinsicSize = this.sizeFromArtboard;
      t0.artboardName = this.artboard;
      return t0;
    }
    updateRenderObject(context, renderObject) {
      let t1, t0;
      flare_actor.FlareActorRenderObject._check(renderObject);
      t0 = renderObject;
      t0.assetProvider = (t1 = this.flareProvider, t1 == null ? new asset_flare.AssetFlare.new({bundle: asset_bundle.rootBundle, name: this.filename}) : t1);
      t0.fit = this.fit;
      t0.alignment = this.alignment;
      t0.animationName = this.animation;
      t0.snapToEnd = this.snapToEnd;
      t0.isPaused = this.isPaused;
      t0.color = this.color;
      t0.shouldClip = this.shouldClip;
      t0.boundsNodeName = this.boundsNode;
      t0.useIntrinsicSize = this.sizeFromArtboard;
      t0.artboardName = this.artboard;
      t0;
    }
    didUnmountRenderObject(renderObject) {
      flare_actor.FlareActorRenderObject._check(renderObject);
      renderObject.dispose();
    }
  };
  (flare_actor.FlareActor.new = function(filename, opts) {
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C0 || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C1 || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[filename$] = filename;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[flareProvider$] = null;
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  (flare_actor.FlareActor.rootBundle = function(name, opts) {
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C0 || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C1 || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[filename$] = null;
    this[flareProvider$] = new asset_flare.AssetFlare.new({bundle: asset_bundle.rootBundle, name: name});
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  (flare_actor.FlareActor.asset = function(flareProvider, opts) {
    let boundsNode = opts && 'boundsNode' in opts ? opts.boundsNode : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let fit = opts && 'fit' in opts ? opts.fit : C0 || CT.C0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C1 || CT.C1;
    let isPaused = opts && 'isPaused' in opts ? opts.isPaused : false;
    let snapToEnd = opts && 'snapToEnd' in opts ? opts.snapToEnd : false;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let callback = opts && 'callback' in opts ? opts.callback : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let shouldClip = opts && 'shouldClip' in opts ? opts.shouldClip : true;
    let sizeFromArtboard = opts && 'sizeFromArtboard' in opts ? opts.sizeFromArtboard : false;
    let artboard = opts && 'artboard' in opts ? opts.artboard : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[flareProvider$] = flareProvider;
    this[boundsNode$] = boundsNode;
    this[animation$] = animation;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[isPaused$] = isPaused;
    this[snapToEnd$] = snapToEnd;
    this[controller$] = controller;
    this[callback$] = callback;
    this[color$] = color;
    this[shouldClip$] = shouldClip;
    this[sizeFromArtboard$] = sizeFromArtboard;
    this[artboard$] = artboard;
    this[filename$] = null;
    flare_actor.FlareActor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flare_actor.FlareActor.prototype;
  dart.addTypeTests(flare_actor.FlareActor);
  dart.setMethodSignature(flare_actor.FlareActor, () => ({
    __proto__: dart.getMethods(flare_actor.FlareActor.__proto__),
    createRenderObject: dart.fnType(object.RenderObject, [framework.BuildContext])
  }));
  dart.setLibraryUri(flare_actor.FlareActor, "package:flare_flutter/flare_actor.dart");
  dart.setFieldSignature(flare_actor.FlareActor, () => ({
    __proto__: dart.getFields(flare_actor.FlareActor.__proto__),
    filename: dart.finalFieldType(core.String),
    flareProvider: dart.finalFieldType(asset_provider.AssetProvider),
    artboard: dart.finalFieldType(core.String),
    animation: dart.finalFieldType(core.String),
    snapToEnd: dart.finalFieldType(core.bool),
    fit: dart.finalFieldType(box_fit.BoxFit),
    alignment: dart.finalFieldType(alignment.Alignment),
    isPaused: dart.finalFieldType(core.bool),
    shouldClip: dart.finalFieldType(core.bool),
    controller: dart.finalFieldType(flare_controller.FlareController),
    callback: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    color: dart.finalFieldType(ui.Color),
    boundsNode: dart.finalFieldType(core.String),
    sizeFromArtboard: dart.finalFieldType(core.bool)
  }));
  var name = dart.privateName(flare_actor, "FlareAnimationLayer.name");
  var animation = dart.privateName(flare_actor, "FlareAnimationLayer.animation");
  var time = dart.privateName(flare_actor, "FlareAnimationLayer.time");
  var mix = dart.privateName(flare_actor, "FlareAnimationLayer.mix");
  var mixSeconds = dart.privateName(flare_actor, "FlareAnimationLayer.mixSeconds");
  flare_actor.FlareAnimationLayer = class FlareAnimationLayer extends core.Object {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get animation() {
      return this[animation];
    }
    set animation(value) {
      this[animation] = value;
    }
    get time() {
      return this[time];
    }
    set time(value) {
      this[time] = value;
    }
    get mix() {
      return this[mix];
    }
    set mix(value) {
      this[mix] = value;
    }
    get mixSeconds() {
      return this[mixSeconds];
    }
    set mixSeconds(value) {
      this[mixSeconds] = value;
    }
    apply(artboard) {
      this.animation.apply(this.time, artboard, this.mix);
    }
    get duration() {
      return this.animation.duration;
    }
    get isDone() {
      return dart.notNull(this.time) >= dart.notNull(this.animation.duration);
    }
  };
  (flare_actor.FlareAnimationLayer.new = function() {
    this[name] = null;
    this[animation] = null;
    this[time] = 0.0;
    this[mix] = 0.0;
    this[mixSeconds] = 0.2;
    ;
  }).prototype = flare_actor.FlareAnimationLayer.prototype;
  dart.addTypeTests(flare_actor.FlareAnimationLayer);
  dart.setMethodSignature(flare_actor.FlareAnimationLayer, () => ({
    __proto__: dart.getMethods(flare_actor.FlareAnimationLayer.__proto__),
    apply: dart.fnType(dart.void, [flare.FlutterActorArtboard])
  }));
  dart.setGetterSignature(flare_actor.FlareAnimationLayer, () => ({
    __proto__: dart.getGetters(flare_actor.FlareAnimationLayer.__proto__),
    duration: core.double,
    isDone: core.bool
  }));
  dart.setLibraryUri(flare_actor.FlareAnimationLayer, "package:flare_flutter/flare_actor.dart");
  dart.setFieldSignature(flare_actor.FlareAnimationLayer, () => ({
    __proto__: dart.getFields(flare_actor.FlareAnimationLayer.__proto__),
    name: dart.fieldType(core.String),
    animation: dart.fieldType(actor_animation.ActorAnimation),
    time: dart.fieldType(core.double),
    mix: dart.fieldType(core.double),
    mixSeconds: dart.fieldType(core.double)
  }));
  var _lastControllerViewTransform = dart.privateName(flare_actor, "_lastControllerViewTransform");
  var _assetProvider = dart.privateName(flare_actor, "_assetProvider");
  var _artboardName = dart.privateName(flare_actor, "_artboardName");
  var _animationName = dart.privateName(flare_actor, "_animationName");
  var _boundsNodeName = dart.privateName(flare_actor, "_boundsNodeName");
  var _controller = dart.privateName(flare_actor, "_controller");
  var _completedCallback = dart.privateName(flare_actor, "_completedCallback");
  var _isPaused = dart.privateName(flare_actor, "_isPaused");
  var _actor = dart.privateName(flare_actor, "_actor");
  var _animationLayers = dart.privateName(flare_actor, "_animationLayers");
  var _artboard = dart.privateName(flare_actor, "_artboard");
  var _setupAABB = dart.privateName(flare_actor, "_setupAABB");
  var _color = dart.privateName(flare_actor, "_color");
  var _instanceArtboard = dart.privateName(flare_actor, "_instanceArtboard");
  var _updateAnimation = dart.privateName(flare_actor, "_updateAnimation");
  var snapToEnd = dart.privateName(flare_actor, "FlareActorRenderObject.snapToEnd");
  var shouldClip = dart.privateName(flare_actor, "FlareActorRenderObject.shouldClip");
  flare_actor.FlareActorRenderObject = class FlareActorRenderObject extends flare_render_box.FlareRenderBox {
    get snapToEnd() {
      return this[snapToEnd];
    }
    set snapToEnd(value) {
      this[snapToEnd] = value;
    }
    get shouldClip() {
      return this[shouldClip];
    }
    set shouldClip(value) {
      this[shouldClip] = value;
    }
    get artboardName() {
      return this[_artboardName];
    }
    set artboardName(name) {
      if (this[_artboardName] == name) {
        return;
      }
      this[_artboardName] = name;
      this[_instanceArtboard]();
    }
    get isPaused() {
      return this[_isPaused];
    }
    set isPaused(value) {
      if (dart.equals(this[_isPaused], value)) {
        return;
      }
      this[_isPaused] = value;
      this.updatePlayState();
    }
    get color() {
      return this[_color];
    }
    set color(value) {
      if (!dart.equals(value, this[_color])) {
        this[_color] = value;
        if (this[_artboard] != null) {
          this[_artboard].overrideColor = value == null ? null : _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([dart.notNull(value.red) / 255.0, dart.notNull(value.green) / 255.0, dart.notNull(value.blue) / 255.0, value.opacity]));
        }
        this.markNeedsPaint();
      }
    }
    get boundsNodeName() {
      return this[_boundsNodeName];
    }
    set boundsNodeName(value) {
      if (this[_boundsNodeName] == value) {
        return;
      }
      this[_boundsNodeName] = value;
      if (this[_artboard] != null) {
        let node = this[_artboard].getNode(this[_boundsNodeName]);
        if (actor_drawable.ActorDrawable.is(node)) {
          this[_setupAABB] = node.computeAABB();
        }
      }
    }
    updateBounds() {
      if (this[_artboard] != null) {
        let node = null;
        if (this[_boundsNodeName] != null && actor_drawable.ActorDrawable.is(node = this[_artboard].getNode(this[_boundsNodeName]))) {
          this[_setupAABB] = actor_drawable.ActorDrawable.as(node).computeAABB();
        } else {
          this[_setupAABB] = this[_artboard].artboardAABB();
        }
      }
    }
    get animationName() {
      return this[_animationName];
    }
    set animationName(value) {
      if (value != this[_animationName]) {
        this[_animationName] = value;
        this[_updateAnimation]();
      }
    }
    get isPlaying() {
      let t0, t0$, t0$0;
      return !dart.test(this[_isPaused]) && (dart.test((t0$0 = (t0$ = (t0 = this[_controller], t0 == null ? null : t0.isActive), t0$ == null ? null : t0$.value), t0$0 == null ? false : t0$0)) || dart.test(this[_animationLayers][$isNotEmpty]));
    }
    onControllerActiveChange() {
      this.updatePlayState();
    }
    get controller() {
      return this[_controller];
    }
    set controller(c) {
      let t0, t0$, t0$0, t0$1;
      if (!dart.equals(this[_controller], c)) {
        this[_lastControllerViewTransform] = c == null ? null : new mat2d.Mat2D.new();
        t0$ = (t0 = this[_controller], t0 == null ? null : t0.isActive);
        t0$ == null ? null : t0$.removeListener(dart.bind(this, 'onControllerActiveChange'));
        this[_controller] = c;
        t0$1 = (t0$0 = this[_controller], t0$0 == null ? null : t0$0.isActive);
        t0$1 == null ? null : t0$1.addListener(dart.bind(this, 'onControllerActiveChange'));
        if (this[_controller] != null && this[_artboard] != null) {
          this[_controller].initialize(this[_artboard]);
        }
      }
    }
    onUnload() {
      this[_animationLayers][$clear]();
    }
    get assetProvider() {
      return this[_assetProvider];
    }
    set assetProvider(value) {
      if (dart.equals(value, this[_assetProvider])) {
        return;
      }
      this[_assetProvider] = value;
      if (this[_assetProvider] == null) {
        this.markNeedsPaint();
      }
      this[_animationLayers][$clear]();
      this.load();
    }
    [_instanceArtboard]() {
      if (this[_actor] == null || this[_actor].artboard == null) {
        return false;
      }
      let artboard = flare.FlutterActorArtboard.as(this[_actor].getArtboard(this[_artboardName]).makeInstance());
      artboard.initializeGraphics();
      this[_artboard] = artboard;
      this.intrinsicSize = new ui.Size.new(artboard.width, artboard.height);
      this[_artboard].overrideColor = this[_color] == null ? null : _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([dart.notNull(this[_color].red) / 255.0, dart.notNull(this[_color].green) / 255.0, dart.notNull(this[_color].blue) / 255.0, this[_color].opacity]));
      if (this[_controller] != null) {
        this[_controller].initialize(this[_artboard]);
      }
      this[_animationLayers][$clear]();
      this[_updateAnimation]({onlyWhenMissing: true});
      this.advance(0.0);
      this.updateBounds();
      this.markNeedsPaint();
      return true;
    }
    get canLoad() {
      return dart.test(super.canLoad) && this[_assetProvider] != null;
    }
    warmLoad() {
      if (this[_assetProvider] == null) {
        return false;
      }
      this[_actor] = this.getWarmFlare(this[_assetProvider]);
      return this[_instanceArtboard]();
    }
    coldLoad() {
      return async.async(dart.void, (function* coldLoad() {
        if (this[_assetProvider] == null) {
          return;
        }
        this[_actor] = (yield this.loadFlare(this[_assetProvider]));
        this[_instanceArtboard]();
      }).bind(this));
    }
    get completed() {
      return this[_completedCallback];
    }
    set completed(value) {
      if (!dart.equals(this[_completedCallback], value)) {
        this[_completedCallback] = value;
      }
    }
    advance(elapsedSeconds) {
      let t0, t0$, t0$0, t0$1, t0$2;
      if (dart.test(this.isPlaying)) {
        let lastFullyMixed = -1;
        let lastMix = 0.0;
        let completed = JSArrayOfFlareAnimationLayer().of([]);
        for (let i = 0; i < dart.notNull(this[_animationLayers][$length]); i = i + 1) {
          let layer = this[_animationLayers][$_get](i);
          if (dart.test(this.snapToEnd) && !dart.test(layer.animation.isLooping)) {
            layer.mix = 1.0;
            layer.time = layer.duration;
          } else {
            t0 = layer;
            t0.mix = dart.notNull(t0.mix) + dart.notNull(elapsedSeconds);
            t0$ = layer;
            t0$.time = dart.notNull(t0$.time) + dart.notNull(elapsedSeconds);
          }
          lastMix = layer.mixSeconds == null || layer.mixSeconds === 0.0 ? 1.0 : math.min(core.double, 1.0, dart.notNull(layer.mix) / dart.notNull(layer.mixSeconds));
          if (dart.test(layer.animation.isLooping)) {
            t0$0 = layer;
            t0$0.time = t0$0.time[$modulo](layer.animation.duration);
          }
          layer.animation.apply(layer.time, this[_artboard], lastMix);
          if (lastMix === 1.0) {
            lastFullyMixed = i;
          }
          if (dart.notNull(layer.time) > dart.notNull(layer.animation.duration)) {
            completed[$add](layer);
          }
        }
        if (lastFullyMixed !== -1) {
          this[_animationLayers][$removeRange](0, lastFullyMixed);
        }
        if (this.animationName == null && this[_animationLayers][$length] === 1 && lastMix === 1.0) {
          this[_animationLayers][$removeAt](0);
        }
        for (let animation of completed) {
          this[_animationLayers][$remove](animation);
          if (this[_completedCallback] != null) {
            this[_completedCallback](animation.name);
          }
        }
      }
      if (this[_artboard] != null && this[_controller] != null && !dart.test(this[_controller].advance(this[_artboard], elapsedSeconds))) {
        t0$2 = (t0$1 = this[_controller], t0$1 == null ? null : t0$1.isActive);
        t0$2 == null ? null : t0$2.value = false;
      }
      if (this[_artboard] != null) {
        this[_artboard].advance(elapsedSeconds);
      }
    }
    get aabb() {
      return this[_setupAABB];
    }
    prePaint(canvas, offset) {
      if (dart.test(this.shouldClip)) {
        canvas.clipRect(offset['&'](this.size));
      }
    }
    paintFlare(canvas, viewTransform) {
      let t0;
      if (this[_artboard] == null) {
        return;
      }
      if (this.controller != null && !dart.test(mat2d.Mat2D.areEqual(this[_lastControllerViewTransform], viewTransform))) {
        mat2d.Mat2D.copy(this[_lastControllerViewTransform], viewTransform);
        t0 = this.controller;
        t0 == null ? null : t0.setViewTransform(viewTransform);
      }
      this[_artboard].draw(canvas);
    }
    [_updateAnimation](opts) {
      let t0;
      let onlyWhenMissing = opts && 'onlyWhenMissing' in opts ? opts.onlyWhenMissing : false;
      if (dart.test(onlyWhenMissing) && dart.test(this[_animationLayers][$isNotEmpty])) {
        return;
      }
      if (this[_animationName] != null && this[_artboard] != null) {
        let animation = this[_artboard].getAnimation(this[_animationName]);
        if (animation != null) {
          this[_animationLayers][$add]((t0 = new flare_actor.FlareAnimationLayer.new(), t0.name = this[_animationName], t0.animation = animation, t0.mix = 1.0, t0.mixSeconds = 0.2, t0));
          animation.apply(0.0, this[_artboard], 1.0);
          this[_artboard].advance(0.0);
          this.updatePlayState();
        }
      }
    }
  };
  (flare_actor.FlareActorRenderObject.new = function() {
    this[_lastControllerViewTransform] = null;
    this[_assetProvider] = null;
    this[_artboardName] = null;
    this[_animationName] = null;
    this[_boundsNodeName] = null;
    this[_controller] = null;
    this[_completedCallback] = null;
    this[snapToEnd] = false;
    this[_isPaused] = false;
    this[_actor] = null;
    this[_animationLayers] = JSArrayOfFlareAnimationLayer().of([]);
    this[shouldClip] = null;
    this[_artboard] = null;
    this[_setupAABB] = null;
    this[_color] = null;
    flare_actor.FlareActorRenderObject.__proto__.new.call(this);
    ;
  }).prototype = flare_actor.FlareActorRenderObject.prototype;
  dart.addTypeTests(flare_actor.FlareActorRenderObject);
  dart.setMethodSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getMethods(flare_actor.FlareActorRenderObject.__proto__),
    updateBounds: dart.fnType(dart.void, []),
    onControllerActiveChange: dart.fnType(dart.void, []),
    [_instanceArtboard]: dart.fnType(core.bool, []),
    advance: dart.fnType(dart.void, [core.double]),
    paintFlare: dart.fnType(dart.void, [ui.Canvas, mat2d.Mat2D]),
    [_updateAnimation]: dart.fnType(dart.void, [], {onlyWhenMissing: core.bool}, {})
  }));
  dart.setGetterSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getGetters(flare_actor.FlareActorRenderObject.__proto__),
    artboardName: core.String,
    isPaused: core.bool,
    color: ui.Color,
    boundsNodeName: core.String,
    animationName: core.String,
    isPlaying: core.bool,
    controller: flare_controller.FlareController,
    assetProvider: asset_provider.AssetProvider,
    completed: dart.fnType(dart.void, [core.String]),
    aabb: aabb.AABB
  }));
  dart.setSetterSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getSetters(flare_actor.FlareActorRenderObject.__proto__),
    artboardName: core.String,
    isPaused: core.bool,
    color: ui.Color,
    boundsNodeName: core.String,
    animationName: core.String,
    controller: flare_controller.FlareController,
    assetProvider: asset_provider.AssetProvider,
    completed: dart.fnType(dart.void, [core.String])
  }));
  dart.setLibraryUri(flare_actor.FlareActorRenderObject, "package:flare_flutter/flare_actor.dart");
  dart.setFieldSignature(flare_actor.FlareActorRenderObject, () => ({
    __proto__: dart.getFields(flare_actor.FlareActorRenderObject.__proto__),
    [_lastControllerViewTransform]: dart.fieldType(mat2d.Mat2D),
    [_assetProvider]: dart.fieldType(asset_provider.AssetProvider),
    [_artboardName]: dart.fieldType(core.String),
    [_animationName]: dart.fieldType(core.String),
    [_boundsNodeName]: dart.fieldType(core.String),
    [_controller]: dart.fieldType(flare_controller.FlareController),
    [_completedCallback]: dart.fieldType(dart.fnType(dart.void, [core.String])),
    snapToEnd: dart.fieldType(core.bool),
    [_isPaused]: dart.fieldType(core.bool),
    [_actor]: dart.fieldType(flare.FlutterActor),
    [_animationLayers]: dart.finalFieldType(core.List$(flare_actor.FlareAnimationLayer)),
    shouldClip: dart.fieldType(core.bool),
    [_artboard]: dart.fieldType(flare.FlutterActorArtboard),
    [_setupAABB]: dart.fieldType(aabb.AABB),
    [_color]: dart.fieldType(ui.Color)
  }));
  dart.trackLibraries("packages/flare_flutter/flare_actor", {
    "package:flare_flutter/flare_actor.dart": flare_actor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_actor.dart"],"names":[],"mappings":"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","file":"flare_actor.ddc.js"}');
  // Exports:
  return {
    flare_actor: flare_actor
  };
});

//# sourceMappingURL=flare_actor.ddc.js.map
