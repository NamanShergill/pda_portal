define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const colors = packages__flutter__material.src__material__colors;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const tweens = packages__flutter__src__rendering__animated_size.src__rendering__tweens;
  var animated_text_kit = Object.create(dart.library);
  var text_liquid_fill = Object.create(dart.library);
  var scale = Object.create(dart.library);
  var colorize = Object.create(dart.library);
  var fade = Object.create(dart.library);
  var typewriter = Object.create(dart.library);
  var rotate = Object.create(dart.library);
  var typer = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  var StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  var GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  var BuildContextAndWidgetToCustomPaint = () => (BuildContextAndWidgetToCustomPaint = dart.constFn(dart.fnType(basic.CustomPaint, [framework.BuildContext, framework.Widget])))();
  var JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  var JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  var RectToShader = () => (RectToShader = dart.constFn(dart.fnType(ui.Shader, [ui.Rect])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var JSArrayOfMap = () => (JSArrayOfMap = dart.constFn(_interceptors.JSArray$(core.Map)))();
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  var BuildContextAndWidgetToScaleTransition = () => (BuildContextAndWidgetToScaleTransition = dart.constFn(dart.fnType(transitions.ScaleTransition, [framework.BuildContext, framework.Widget])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var BuildContextAndWidgetToOpacity = () => (BuildContextAndWidgetToOpacity = dart.constFn(dart.fnType(basic.Opacity, [framework.BuildContext, framework.Widget])))();
  var BuildContextAndWidgetToText = () => (BuildContextAndWidgetToText = dart.constFn(dart.fnType(text.Text, [framework.BuildContext, framework.Widget])))();
  var AnimationOfAlignmentGeometry = () => (AnimationOfAlignmentGeometry = dart.constFn(animation.Animation$(alignment.AlignmentGeometry)))();
  var BuildContextAndWidgetToAlignTransition = () => (BuildContextAndWidgetToAlignTransition = dart.constFn(dart.fnType(transitions.AlignTransition, [framework.BuildContext, framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 17,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 13,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 19,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "blendMode",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shaderCallback",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/text_liquid_fill.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: alignment.AlignmentDirectional.prototype,
        [AlignmentDirectional_y]: -1,
        [AlignmentDirectional_start]: -1
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name]: "TextAlign.start",
        index: 4
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/scale.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 25,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/scale.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 23,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/scale.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 21,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/scale.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/scale.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/scale.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/colorize.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/colorize.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 21,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/colorize.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/colorize.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/colorize.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/fade.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/fade.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 21,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/fade.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/fade.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/fade.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typewriter.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typewriter.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typewriter.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typewriter.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 43,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 29,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 27,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 25,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 21,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 21,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/rotate.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typer.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 44,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 21,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typer.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typer.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/animated_text_kit/src/typer.dart"
      });
    }
  });
  var textStyle$ = dart.privateName(text_liquid_fill, "TextLiquidFill.textStyle");
  var loadDuration$ = dart.privateName(text_liquid_fill, "TextLiquidFill.loadDuration");
  var waveDuration$ = dart.privateName(text_liquid_fill, "TextLiquidFill.waveDuration");
  var boxHeight$ = dart.privateName(text_liquid_fill, "TextLiquidFill.boxHeight");
  var boxWidth$ = dart.privateName(text_liquid_fill, "TextLiquidFill.boxWidth");
  var text$ = dart.privateName(text_liquid_fill, "TextLiquidFill.text");
  var boxBackgroundColor$ = dart.privateName(text_liquid_fill, "TextLiquidFill.boxBackgroundColor");
  var waveColor$ = dart.privateName(text_liquid_fill, "TextLiquidFill.waveColor");
  text_liquid_fill.TextLiquidFill = class TextLiquidFill extends framework.StatefulWidget {
    get textStyle() {
      return this[textStyle$];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get loadDuration() {
      return this[loadDuration$];
    }
    set loadDuration(value) {
      super.loadDuration = value;
    }
    get waveDuration() {
      return this[waveDuration$];
    }
    set waveDuration(value) {
      super.waveDuration = value;
    }
    get boxHeight() {
      return this[boxHeight$];
    }
    set boxHeight(value) {
      super.boxHeight = value;
    }
    get boxWidth() {
      return this[boxWidth$];
    }
    set boxWidth(value) {
      super.boxWidth = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get boxBackgroundColor() {
      return this[boxBackgroundColor$];
    }
    set boxBackgroundColor(value) {
      super.boxBackgroundColor = value;
    }
    get waveColor() {
      return this[waveColor$];
    }
    set waveColor(value) {
      super.waveColor = value;
    }
    createState() {
      return new text_liquid_fill._TextLiquidFillState.new();
    }
  };
  (text_liquid_fill.TextLiquidFill.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let loadDuration = opts && 'loadDuration' in opts ? opts.loadDuration : null;
    let waveDuration = opts && 'waveDuration' in opts ? opts.waveDuration : null;
    let boxHeight = opts && 'boxHeight' in opts ? opts.boxHeight : null;
    let boxWidth = opts && 'boxWidth' in opts ? opts.boxWidth : null;
    let boxBackgroundColor = opts && 'boxBackgroundColor' in opts ? opts.boxBackgroundColor : null;
    let waveColor = opts && 'waveColor' in opts ? opts.waveColor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[textStyle$] = textStyle;
    this[loadDuration$] = loadDuration;
    this[waveDuration$] = waveDuration;
    this[boxHeight$] = boxHeight;
    this[boxWidth$] = boxWidth;
    this[boxBackgroundColor$] = boxBackgroundColor;
    this[waveColor$] = waveColor;
    text_liquid_fill.TextLiquidFill.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = text_liquid_fill.TextLiquidFill.prototype;
  dart.addTypeTests(text_liquid_fill.TextLiquidFill);
  dart.setMethodSignature(text_liquid_fill.TextLiquidFill, () => ({
    __proto__: dart.getMethods(text_liquid_fill.TextLiquidFill.__proto__),
    createState: dart.fnType(text_liquid_fill._TextLiquidFillState, [])
  }));
  dart.setLibraryUri(text_liquid_fill.TextLiquidFill, "package:animated_text_kit/src/text_liquid_fill.dart");
  dart.setFieldSignature(text_liquid_fill.TextLiquidFill, () => ({
    __proto__: dart.getFields(text_liquid_fill.TextLiquidFill.__proto__),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    loadDuration: dart.finalFieldType(core.Duration),
    waveDuration: dart.finalFieldType(core.Duration),
    boxHeight: dart.finalFieldType(core.double),
    boxWidth: dart.finalFieldType(core.double),
    text: dart.finalFieldType(core.String),
    boxBackgroundColor: dart.finalFieldType(ui.Color),
    waveColor: dart.finalFieldType(ui.Color)
  }));
  var _waveController = dart.privateName(text_liquid_fill, "_waveController");
  var _loadController = dart.privateName(text_liquid_fill, "_loadController");
  var _waveDuration = dart.privateName(text_liquid_fill, "_waveDuration");
  var _loadDuration = dart.privateName(text_liquid_fill, "_loadDuration");
  var _loadValue = dart.privateName(text_liquid_fill, "_loadValue");
  var _boxHeight = dart.privateName(text_liquid_fill, "_boxHeight");
  var _boxWidth = dart.privateName(text_liquid_fill, "_boxWidth");
  var _boxBackgroundColor = dart.privateName(text_liquid_fill, "_boxBackgroundColor");
  var _waveColor = dart.privateName(text_liquid_fill, "_waveColor");
  var _textStyle = dart.privateName(text_liquid_fill, "_textStyle");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var C5;
  var C6;
  var C4;
  var C3;
  var C9;
  var C10;
  var C11;
  var C8;
  var C7;
  var C14;
  var C15;
  var C16;
  var C13;
  var C12;
  var C19;
  var C18;
  var C17;
  var C22;
  var C23;
  var C21;
  var C20;
  var C26;
  var C27;
  var C28;
  var C25;
  var C24;
  var C31;
  var C32;
  var C33;
  var C30;
  var C29;
  var C36;
  var C35;
  var C34;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(text_liquid_fill.TextLiquidFill) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(text_liquid_fill.TextLiquidFill)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(text_liquid_fill.TextLiquidFill));
  text_liquid_fill._TextLiquidFillState = class _TextLiquidFillState extends State_TickerProviderStateMixin$36 {
    initState() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      super.initState();
      text_liquid_fill._textKey = GlobalKeyOfStateOfStatefulWidget().new();
      this[_boxHeight] = (t0 = this.widget.boxHeight, t0 == null ? 250.0 : t0);
      this[_boxWidth] = (t0$ = this.widget.boxWidth, t0$ == null ? 400.0 : t0$);
      this[_waveDuration] = (t0$0 = this.widget.waveDuration, t0$0 == null ? new core.Duration.new({milliseconds: 2000}) : t0$0);
      this[_loadDuration] = (t0$1 = this.widget.loadDuration, t0$1 == null ? new core.Duration.new({milliseconds: 6000}) : t0$1);
      this[_waveController] = new animation_controller.AnimationController.new({vsync: this, duration: this[_waveDuration]});
      this[_loadController] = new animation_controller.AnimationController.new({vsync: this, duration: this[_loadDuration]});
      this[_loadValue] = new (TweenOfdouble()).new({begin: 0.0, end: 100.0}).animate(this[_loadController]);
      this[_boxBackgroundColor] = (t0$2 = this.widget.boxBackgroundColor, t0$2 == null ? colors.Colors.black : t0$2);
      this[_waveColor] = (t0$3 = this.widget.waveColor, t0$3 == null ? colors.Colors.blueAccent : t0$3);
      this[_textStyle] = (t0$4 = this.widget.textStyle, t0$4 == null ? new text_style.TextStyle.new({fontSize: 140.0, fontWeight: ui.FontWeight.bold}) : t0$4);
      this[_waveController].repeat();
      this[_loadController].forward();
    }
    dispose() {
      let t0, t0$;
      if (this[_waveController] != null) {
        t0 = this[_waveController];
        t0.stop();
        t0.dispose();
        t0;
      }
      if (this[_loadController] != null) {
        t0$ = this[_loadController];
        t0$.stop();
        t0$.dispose();
        t0$;
      }
      super.dispose();
    }
    build(context) {
      let t0, t0$;
      return new basic.Stack.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: this[_boxHeight], width: (t0 = this[_boxWidth], t0 == null ? media_query.MediaQuery.of(context).size.width : t0), child: new transitions.AnimatedBuilder.new({animation: this[_waveController], builder: dart.fn((context, child) => new basic.CustomPaint.new({painter: new text_liquid_fill.WavePainter.new({waveAnimation: this[_waveController], percentValue: core.double._check(this[_loadValue].value), boxHeight: this[_boxHeight], waveColor: this[_waveColor]}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextAndWidgetToCustomPaint()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.SizedBox.new({height: this[_boxHeight], width: (t0$ = this[_boxWidth], t0$ == null ? media_query.MediaQuery.of(context).size.width : t0$), child: new basic.ShaderMask.new({blendMode: ui.BlendMode.srcOut, shaderCallback: dart.fn(bounds => new gradient.LinearGradient.new({colors: JSArrayOfColor().of([this[_boxBackgroundColor]]), stops: JSArrayOfdouble().of([0.0])}).createShader(bounds), RectToShader()), child: new container.Container.new({color: colors.Colors.transparent, child: new basic.Center.new({child: new text.Text.new(this.widget.text, {key: text_liquid_fill._textKey, style: this[_textStyle], $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
    }
  };
  (text_liquid_fill._TextLiquidFillState.new = function() {
    this[_waveController] = null;
    this[_loadController] = null;
    this[_waveDuration] = null;
    this[_loadDuration] = null;
    this[_loadValue] = null;
    this[_boxHeight] = null;
    this[_boxWidth] = null;
    this[_boxBackgroundColor] = null;
    this[_waveColor] = null;
    this[_textStyle] = null;
    text_liquid_fill._TextLiquidFillState.__proto__.new.call(this);
    ;
  }).prototype = text_liquid_fill._TextLiquidFillState.prototype;
  dart.addTypeTests(text_liquid_fill._TextLiquidFillState);
  dart.setMethodSignature(text_liquid_fill._TextLiquidFillState, () => ({
    __proto__: dart.getMethods(text_liquid_fill._TextLiquidFillState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(text_liquid_fill._TextLiquidFillState, "package:animated_text_kit/src/text_liquid_fill.dart");
  dart.setFieldSignature(text_liquid_fill._TextLiquidFillState, () => ({
    __proto__: dart.getFields(text_liquid_fill._TextLiquidFillState.__proto__),
    [_waveController]: dart.fieldType(animation_controller.AnimationController),
    [_loadController]: dart.fieldType(animation_controller.AnimationController),
    [_waveDuration]: dart.fieldType(core.Duration),
    [_loadDuration]: dart.fieldType(core.Duration),
    [_loadValue]: dart.fieldType(animation.Animation),
    [_boxHeight]: dart.fieldType(core.double),
    [_boxWidth]: dart.fieldType(core.double),
    [_boxBackgroundColor]: dart.fieldType(ui.Color),
    [_waveColor]: dart.fieldType(ui.Color),
    [_textStyle]: dart.fieldType(text_style.TextStyle)
  }));
  var waveAnimation$ = dart.privateName(text_liquid_fill, "WavePainter.waveAnimation");
  var percentValue$ = dart.privateName(text_liquid_fill, "WavePainter.percentValue");
  var boxHeight$0 = dart.privateName(text_liquid_fill, "WavePainter.boxHeight");
  var waveColor$0 = dart.privateName(text_liquid_fill, "WavePainter.waveColor");
  text_liquid_fill.WavePainter = class WavePainter extends custom_paint.CustomPainter {
    get waveAnimation() {
      return this[waveAnimation$];
    }
    set waveAnimation(value) {
      this[waveAnimation$] = value;
    }
    get percentValue() {
      return this[percentValue$];
    }
    set percentValue(value) {
      this[percentValue$] = value;
    }
    get boxHeight() {
      return this[boxHeight$0];
    }
    set boxHeight(value) {
      this[boxHeight$0] = value;
    }
    get waveColor() {
      return this[waveColor$0];
    }
    set waveColor(value) {
      this[waveColor$0] = value;
    }
    paint(canvas, size) {
      let t0;
      let width = size.width != null ? size.width : 200.0;
      let height = size.height != null ? size.height : 200.0;
      let wavePaint = (t0 = ui.Paint.new(), t0.color = this.waveColor, t0);
      let textBox = box.RenderBox._check(text_liquid_fill._textKey.currentContext.findRenderObject());
      let _textHeight = textBox.size.height;
      let _percent = dart.notNull(this.percentValue) / 100.0;
      let _baseHeight = dart.notNull(this.boxHeight) / 2 + dart.notNull(_textHeight) / 2 - _percent * dart.notNull(_textHeight);
      let path = ui.Path.new();
      path.moveTo(0.0, _baseHeight);
      for (let i = 0.0; i < dart.notNull(width); i = i + 1) {
        path.lineTo(i, _baseHeight + math.sin(i / dart.notNull(width) * 2 * 3.141592653589793 + dart.notNull(this.waveAnimation.value) * 2 * 3.141592653589793) * 8);
      }
      path.lineTo(width, height);
      path.lineTo(0.0, height);
      path.close();
      canvas.drawPath(path, wavePaint);
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (text_liquid_fill.WavePainter.new = function(opts) {
    let waveAnimation = opts && 'waveAnimation' in opts ? opts.waveAnimation : null;
    let percentValue = opts && 'percentValue' in opts ? opts.percentValue : null;
    let boxHeight = opts && 'boxHeight' in opts ? opts.boxHeight : null;
    let waveColor = opts && 'waveColor' in opts ? opts.waveColor : null;
    this[waveAnimation$] = waveAnimation;
    this[percentValue$] = percentValue;
    this[boxHeight$0] = boxHeight;
    this[waveColor$0] = waveColor;
    text_liquid_fill.WavePainter.__proto__.new.call(this);
    ;
  }).prototype = text_liquid_fill.WavePainter.prototype;
  dart.addTypeTests(text_liquid_fill.WavePainter);
  dart.setMethodSignature(text_liquid_fill.WavePainter, () => ({
    __proto__: dart.getMethods(text_liquid_fill.WavePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(text_liquid_fill.WavePainter, "package:animated_text_kit/src/text_liquid_fill.dart");
  dart.setFieldSignature(text_liquid_fill.WavePainter, () => ({
    __proto__: dart.getFields(text_liquid_fill.WavePainter.__proto__),
    waveAnimation: dart.fieldType(animation.Animation$(core.double)),
    percentValue: dart.fieldType(core.double),
    boxHeight: dart.fieldType(core.double),
    waveColor: dart.fieldType(ui.Color)
  }));
  dart.defineLazy(text_liquid_fill, {
    /*text_liquid_fill._textKey*/get _textKey() {
      return null;
    },
    set _textKey(_) {}
  });
  var AlignmentDirectional_y = dart.privateName(alignment, "AlignmentDirectional.y");
  var AlignmentDirectional_start = dart.privateName(alignment, "AlignmentDirectional.start");
  var C37;
  var _name = dart.privateName(ui, "_name");
  var C38;
  var text$0 = dart.privateName(scale, "ScaleAnimatedTextKit.text");
  var textStyle$0 = dart.privateName(scale, "ScaleAnimatedTextKit.textStyle");
  var pause$ = dart.privateName(scale, "ScaleAnimatedTextKit.pause");
  var duration$ = dart.privateName(scale, "ScaleAnimatedTextKit.duration");
  var onTap$ = dart.privateName(scale, "ScaleAnimatedTextKit.onTap");
  var onFinished$ = dart.privateName(scale, "ScaleAnimatedTextKit.onFinished");
  var onNext$ = dart.privateName(scale, "ScaleAnimatedTextKit.onNext");
  var onNextBeforePause$ = dart.privateName(scale, "ScaleAnimatedTextKit.onNextBeforePause");
  var alignment$ = dart.privateName(scale, "ScaleAnimatedTextKit.alignment");
  var textAlign$ = dart.privateName(scale, "ScaleAnimatedTextKit.textAlign");
  var totalRepeatCount$ = dart.privateName(scale, "ScaleAnimatedTextKit.totalRepeatCount");
  var isRepeatingAnimation$ = dart.privateName(scale, "ScaleAnimatedTextKit.isRepeatingAnimation");
  var scalingFactor$ = dart.privateName(scale, "ScaleAnimatedTextKit.scalingFactor");
  var displayFullTextOnTap$ = dart.privateName(scale, "ScaleAnimatedTextKit.displayFullTextOnTap");
  var stopPauseOnTap$ = dart.privateName(scale, "ScaleAnimatedTextKit.stopPauseOnTap");
  scale.ScaleAnimatedTextKit = class ScaleAnimatedTextKit extends framework.StatefulWidget {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$0];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get pause() {
      return this[pause$];
    }
    set pause(value) {
      super.pause = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onFinished() {
      return this[onFinished$];
    }
    set onFinished(value) {
      super.onFinished = value;
    }
    get onNext() {
      return this[onNext$];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onNextBeforePause() {
      return this[onNextBeforePause$];
    }
    set onNextBeforePause(value) {
      super.onNextBeforePause = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get totalRepeatCount() {
      return this[totalRepeatCount$];
    }
    set totalRepeatCount(value) {
      super.totalRepeatCount = value;
    }
    get isRepeatingAnimation() {
      return this[isRepeatingAnimation$];
    }
    set isRepeatingAnimation(value) {
      super.isRepeatingAnimation = value;
    }
    get scalingFactor() {
      return this[scalingFactor$];
    }
    set scalingFactor(value) {
      super.scalingFactor = value;
    }
    get displayFullTextOnTap() {
      return this[displayFullTextOnTap$];
    }
    set displayFullTextOnTap(value) {
      super.displayFullTextOnTap = value;
    }
    get stopPauseOnTap() {
      return this[stopPauseOnTap$];
    }
    set stopPauseOnTap(value) {
      super.stopPauseOnTap = value;
    }
    createState() {
      return new scale._RotatingTextState.new();
    }
  };
  (scale.ScaleAnimatedTextKit.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let scalingFactor = opts && 'scalingFactor' in opts ? opts.scalingFactor : 0.5;
    let pause = opts && 'pause' in opts ? opts.pause : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onNextBeforePause = opts && 'onNextBeforePause' in opts ? opts.onNextBeforePause : null;
    let onFinished = opts && 'onFinished' in opts ? opts.onFinished : null;
    let totalRepeatCount = opts && 'totalRepeatCount' in opts ? opts.totalRepeatCount : 3;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C37 || CT.C37;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C38 || CT.C38;
    let isRepeatingAnimation = opts && 'isRepeatingAnimation' in opts ? opts.isRepeatingAnimation : true;
    let displayFullTextOnTap = opts && 'displayFullTextOnTap' in opts ? opts.displayFullTextOnTap : false;
    let stopPauseOnTap = opts && 'stopPauseOnTap' in opts ? opts.stopPauseOnTap : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$0] = text;
    this[textStyle$0] = textStyle;
    this[scalingFactor$] = scalingFactor;
    this[pause$] = pause;
    this[duration$] = duration;
    this[onTap$] = onTap;
    this[onNext$] = onNext;
    this[onNextBeforePause$] = onNextBeforePause;
    this[onFinished$] = onFinished;
    this[totalRepeatCount$] = totalRepeatCount;
    this[alignment$] = alignment;
    this[textAlign$] = textAlign;
    this[isRepeatingAnimation$] = isRepeatingAnimation;
    this[displayFullTextOnTap$] = displayFullTextOnTap;
    this[stopPauseOnTap$] = stopPauseOnTap;
    scale.ScaleAnimatedTextKit.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = scale.ScaleAnimatedTextKit.prototype;
  dart.addTypeTests(scale.ScaleAnimatedTextKit);
  dart.setMethodSignature(scale.ScaleAnimatedTextKit, () => ({
    __proto__: dart.getMethods(scale.ScaleAnimatedTextKit.__proto__),
    createState: dart.fnType(scale._RotatingTextState, [])
  }));
  dart.setLibraryUri(scale.ScaleAnimatedTextKit, "package:animated_text_kit/src/scale.dart");
  dart.setFieldSignature(scale.ScaleAnimatedTextKit, () => ({
    __proto__: dart.getFields(scale.ScaleAnimatedTextKit.__proto__),
    text: dart.finalFieldType(core.List),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    pause: dart.finalFieldType(core.Duration),
    duration: dart.finalFieldType(core.Duration),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onFinished: dart.finalFieldType(dart.fnType(dart.void, [])),
    onNext: dart.finalFieldType(core.Function),
    onNextBeforePause: dart.finalFieldType(core.Function),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    textAlign: dart.finalFieldType(ui.TextAlign),
    totalRepeatCount: dart.finalFieldType(core.int),
    isRepeatingAnimation: dart.finalFieldType(core.bool),
    scalingFactor: dart.finalFieldType(core.double),
    displayFullTextOnTap: dart.finalFieldType(core.bool),
    stopPauseOnTap: dart.finalFieldType(core.bool)
  }));
  var _controller = dart.privateName(scale, "_controller");
  var _fadeIn = dart.privateName(scale, "_fadeIn");
  var _fadeOut = dart.privateName(scale, "_fadeOut");
  var _scaleIn = dart.privateName(scale, "_scaleIn");
  var _scaleOut = dart.privateName(scale, "_scaleOut");
  var _pause = dart.privateName(scale, "_pause");
  var _texts = dart.privateName(scale, "_texts");
  var _index = dart.privateName(scale, "_index");
  var _isCurrentlyPausing = dart.privateName(scale, "_isCurrentlyPausing");
  var _timer = dart.privateName(scale, "_timer");
  var _currentRepeatCount = dart.privateName(scale, "_currentRepeatCount");
  var _duration = dart.privateName(scale, "_duration");
  var _nextAnimation = dart.privateName(scale, "_nextAnimation");
  var _onTap = dart.privateName(scale, "_onTap");
  var C41;
  var C42;
  var C43;
  var C40;
  var C39;
  var C46;
  var C47;
  var C48;
  var C45;
  var C44;
  var C51;
  var C52;
  var C50;
  var C49;
  var C55;
  var C56;
  var C54;
  var C53;
  var C59;
  var C60;
  var C58;
  var C57;
  var C63;
  var C64;
  var C62;
  var C61;
  var _animationEndCallback = dart.privateName(scale, "_animationEndCallback");
  var _setPause = dart.privateName(scale, "_setPause");
  const State_TickerProviderStateMixin$36$ = class State_TickerProviderStateMixin extends framework.State$(scale.ScaleAnimatedTextKit) {};
  (State_TickerProviderStateMixin$36$.new = function() {
    ticker_provider.TickerProviderStateMixin$(scale.ScaleAnimatedTextKit)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$, ticker_provider.TickerProviderStateMixin$(scale.ScaleAnimatedTextKit));
  scale._RotatingTextState = class _RotatingTextState extends State_TickerProviderStateMixin$36$ {
    initState() {
      let t0;
      super.initState();
      this[_pause] = (t0 = this.widget.pause, t0 == null ? new core.Duration.new({milliseconds: 500}) : t0);
      this[_index] = -1;
      this[_currentRepeatCount] = 0;
      if (this.widget.duration == null) {
        this[_duration] = new core.Duration.new({milliseconds: 2000});
      } else {
        this[_duration] = this.widget.duration;
      }
      for (let i = 0; i < dart.notNull(this.widget.text[$length]); i = i + 1) {
        try {
          if (!dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["text"]))) dart.throw(new core.Error.new());
          this[_texts][$add](new _js_helper.LinkedMap.from(["text", dart.dsend(this.widget.text[$_get](i), '_get', ["text"]), "pause", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["pause"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["pause"]) : this[_pause]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_texts][$add](new _js_helper.LinkedMap.from(["text", this.widget.text[$_get](i), "pause", this[_pause]]));
        }
      }
      this[_nextAnimation]();
    }
    dispose() {
      let t1;
      if (this[_controller] != null) {
        t1 = this[_controller];
        t1.stop();
        t1.dispose();
        t1;
      }
      super.dispose();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _onTap), child: dart.test(this[_isCurrentlyPausing]) || !dart.test(this[_controller].isAnimating) ? new text.Text.new(core.String._check(this[_texts][$_get](this[_index])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}) : new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((context, child) => new transitions.ScaleTransition.new({scale: AnimationOfdouble()._check(!dart.equals(this[_scaleIn].value, 1.0) ? this[_scaleIn] : this[_scaleOut]), child: new basic.Opacity.new({opacity: core.double._check(!dart.equals(this[_fadeIn].value, 1.0) ? this[_fadeIn].value : this[_fadeOut].value), child: new text.Text.new(core.String._check(this[_texts][$_get](this[_index])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), BuildContextAndWidgetToScaleTransition()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
    }
    [_nextAnimation]() {
      let t1;
      let isLast = this[_index] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing] = false;
      if (dart.notNull(this[_index]) > -1) {
        if (this.widget.onNext != null) dart.dsend(this.widget, 'onNext', [this[_index], isLast]);
      }
      if (isLast) {
        if (dart.test(this.widget.isRepeatingAnimation) && this[_currentRepeatCount] !== dart.notNull(this.widget.totalRepeatCount) - 1) {
          this[_index] = 0;
          this[_currentRepeatCount] = dart.notNull(this[_currentRepeatCount]) + 1;
        } else {
          if (this.widget.onFinished != null) this.widget.onFinished();
          return;
        }
      } else {
        this[_index] = dart.notNull(this[_index]) + 1;
      }
      if (this[_controller] != null) this[_controller].dispose();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      this[_controller] = new animation_controller.AnimationController.new({duration: this[_duration], vsync: this});
      this[_fadeIn] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: new curves.Interval.new(0.0, 0.5, {curve: curves.Curves.easeOut})}));
      this[_fadeOut] = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: new curves.Interval.new(0.5, 1.0, {curve: curves.Curves.easeOut})}));
      this[_scaleIn] = new (TweenOfdouble()).new({begin: this.widget.scalingFactor, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: new curves.Interval.new(0.0, 0.5, {curve: curves.Curves.easeOut})}));
      this[_scaleOut] = (t1 = new (TweenOfdouble()).new({begin: 1.0, end: this.widget.scalingFactor}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: new curves.Interval.new(0.5, 1.0, {curve: curves.Curves.easeIn})})), t1.addStatusListener(dart.bind(this, _animationEndCallback)), t1);
      this[_controller].forward();
    }
    [_setPause]() {
      let isLast = this[_index] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing] = true;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      if (this.widget.onNextBeforePause != null) dart.dsend(this.widget, 'onNextBeforePause', [this[_index], isLast]);
    }
    [_animationEndCallback](state) {
      if (dart.equals(state, animation.AnimationStatus.completed)) {
        this[_isCurrentlyPausing] = true;
        this[_timer] = async.Timer.new(core.Duration._check(this[_texts][$_get](this[_index])[$_get]("pause")), dart.bind(this, _nextAnimation));
      }
    }
    [_onTap]() {
      let t1;
      let pause = null;
      let left = null;
      if (dart.test(this.widget.displayFullTextOnTap)) {
        if (dart.test(this[_isCurrentlyPausing])) {
          if (dart.test(this.widget.stopPauseOnTap)) {
            t1 = this[_timer];
            t1 == null ? null : t1.cancel();
            this[_nextAnimation]();
          }
        } else {
          pause = core.int._check(dart.dload(this[_texts][$_get](this[_index])[$_get]("pause"), 'inMilliseconds'));
          left = this[_duration].inMilliseconds;
          this[_controller].stop();
          this[_setPause]();
          this[_timer] = async.Timer.new(new core.Duration.new({milliseconds: math.max(core.int, pause, left)}), dart.bind(this, _nextAnimation));
        }
      }
      if (this.widget.onTap != null) {
        this.widget.onTap();
      }
    }
  };
  (scale._RotatingTextState.new = function() {
    this[_controller] = null;
    this[_fadeIn] = null;
    this[_fadeOut] = null;
    this[_scaleIn] = null;
    this[_scaleOut] = null;
    this.textWidgetList = JSArrayOfWidget().of([]);
    this[_pause] = null;
    this[_texts] = JSArrayOfMap().of([]);
    this[_index] = null;
    this[_isCurrentlyPausing] = false;
    this[_timer] = null;
    this[_currentRepeatCount] = null;
    this[_duration] = null;
    scale._RotatingTextState.__proto__.new.call(this);
    ;
  }).prototype = scale._RotatingTextState.prototype;
  dart.addTypeTests(scale._RotatingTextState);
  dart.setMethodSignature(scale._RotatingTextState, () => ({
    __proto__: dart.getMethods(scale._RotatingTextState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_nextAnimation]: dart.fnType(dart.void, []),
    [_setPause]: dart.fnType(dart.void, []),
    [_animationEndCallback]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTap]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(scale._RotatingTextState, "package:animated_text_kit/src/scale.dart");
  dart.setFieldSignature(scale._RotatingTextState, () => ({
    __proto__: dart.getFields(scale._RotatingTextState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_fadeIn]: dart.fieldType(animation.Animation),
    [_fadeOut]: dart.fieldType(animation.Animation),
    [_scaleIn]: dart.fieldType(animation.Animation),
    [_scaleOut]: dart.fieldType(animation.Animation),
    textWidgetList: dart.fieldType(core.List$(framework.Widget)),
    [_pause]: dart.fieldType(core.Duration),
    [_texts]: dart.fieldType(core.List$(core.Map)),
    [_index]: dart.fieldType(core.int),
    [_isCurrentlyPausing]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer),
    [_currentRepeatCount]: dart.fieldType(core.int),
    [_duration]: dart.fieldType(core.Duration)
  }));
  var text$1 = dart.privateName(colorize, "ColorizeAnimatedTextKit.text");
  var textStyle$1 = dart.privateName(colorize, "ColorizeAnimatedTextKit.textStyle");
  var speed$ = dart.privateName(colorize, "ColorizeAnimatedTextKit.speed");
  var pause$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.pause");
  var onTap$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.onTap");
  var onFinished$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.onFinished");
  var onNext$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.onNext");
  var onNextBeforePause$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.onNextBeforePause");
  var alignment$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.alignment");
  var textAlign$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.textAlign");
  var isRepeatingAnimation$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.isRepeatingAnimation");
  var totalRepeatCount$0 = dart.privateName(colorize, "ColorizeAnimatedTextKit.totalRepeatCount");
  var colors$ = dart.privateName(colorize, "ColorizeAnimatedTextKit.colors");
  colorize.ColorizeAnimatedTextKit = class ColorizeAnimatedTextKit extends framework.StatefulWidget {
    get text() {
      return this[text$1];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$1];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get speed() {
      return this[speed$];
    }
    set speed(value) {
      super.speed = value;
    }
    get pause() {
      return this[pause$0];
    }
    set pause(value) {
      super.pause = value;
    }
    get onTap() {
      return this[onTap$0];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onFinished() {
      return this[onFinished$0];
    }
    set onFinished(value) {
      super.onFinished = value;
    }
    get onNext() {
      return this[onNext$0];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onNextBeforePause() {
      return this[onNextBeforePause$0];
    }
    set onNextBeforePause(value) {
      super.onNextBeforePause = value;
    }
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get textAlign() {
      return this[textAlign$0];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get isRepeatingAnimation() {
      return this[isRepeatingAnimation$0];
    }
    set isRepeatingAnimation(value) {
      super.isRepeatingAnimation = value;
    }
    get totalRepeatCount() {
      return this[totalRepeatCount$0];
    }
    set totalRepeatCount(value) {
      super.totalRepeatCount = value;
    }
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    createState() {
      return new colorize._RotatingTextState.new();
    }
  };
  (colorize.ColorizeAnimatedTextKit.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let speed = opts && 'speed' in opts ? opts.speed : null;
    let pause = opts && 'pause' in opts ? opts.pause : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onNextBeforePause = opts && 'onNextBeforePause' in opts ? opts.onNextBeforePause : null;
    let onFinished = opts && 'onFinished' in opts ? opts.onFinished : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C37 || CT.C37;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C38 || CT.C38;
    let totalRepeatCount = opts && 'totalRepeatCount' in opts ? opts.totalRepeatCount : 3;
    let isRepeatingAnimation = opts && 'isRepeatingAnimation' in opts ? opts.isRepeatingAnimation : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$1] = text;
    this[textStyle$1] = textStyle;
    this[colors$] = colors;
    this[speed$] = speed;
    this[pause$0] = pause;
    this[onTap$0] = onTap;
    this[onNext$0] = onNext;
    this[onNextBeforePause$0] = onNextBeforePause;
    this[onFinished$0] = onFinished;
    this[alignment$0] = alignment;
    this[textAlign$0] = textAlign;
    this[totalRepeatCount$0] = totalRepeatCount;
    this[isRepeatingAnimation$0] = isRepeatingAnimation;
    colorize.ColorizeAnimatedTextKit.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = colorize.ColorizeAnimatedTextKit.prototype;
  dart.addTypeTests(colorize.ColorizeAnimatedTextKit);
  dart.setMethodSignature(colorize.ColorizeAnimatedTextKit, () => ({
    __proto__: dart.getMethods(colorize.ColorizeAnimatedTextKit.__proto__),
    createState: dart.fnType(colorize._RotatingTextState, [])
  }));
  dart.setLibraryUri(colorize.ColorizeAnimatedTextKit, "package:animated_text_kit/src/colorize.dart");
  dart.setFieldSignature(colorize.ColorizeAnimatedTextKit, () => ({
    __proto__: dart.getFields(colorize.ColorizeAnimatedTextKit.__proto__),
    text: dart.finalFieldType(core.List),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    speed: dart.finalFieldType(core.Duration),
    pause: dart.finalFieldType(core.Duration),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onFinished: dart.finalFieldType(dart.fnType(dart.void, [])),
    onNext: dart.finalFieldType(core.Function),
    onNextBeforePause: dart.finalFieldType(core.Function),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    textAlign: dart.finalFieldType(ui.TextAlign),
    isRepeatingAnimation: dart.finalFieldType(core.bool),
    totalRepeatCount: dart.finalFieldType(core.double),
    colors: dart.finalFieldType(core.List$(ui.Color))
  }));
  var _controller$ = dart.privateName(colorize, "_controller");
  var _colorShifter = dart.privateName(colorize, "_colorShifter");
  var _fadeIn$ = dart.privateName(colorize, "_fadeIn");
  var _fadeOut$ = dart.privateName(colorize, "_fadeOut");
  var _tuning = dart.privateName(colorize, "_tuning");
  var _speed = dart.privateName(colorize, "_speed");
  var _pause$ = dart.privateName(colorize, "_pause");
  var _texts$ = dart.privateName(colorize, "_texts");
  var _index$ = dart.privateName(colorize, "_index");
  var _isCurrentlyPausing$ = dart.privateName(colorize, "_isCurrentlyPausing");
  var _currentRepeatCount$ = dart.privateName(colorize, "_currentRepeatCount");
  var _nextAnimation$ = dart.privateName(colorize, "_nextAnimation");
  var C67;
  var C68;
  var C69;
  var C66;
  var C65;
  var C72;
  var C73;
  var C74;
  var C71;
  var C70;
  var C77;
  var C78;
  var C76;
  var C75;
  var C81;
  var C82;
  var C80;
  var C79;
  var C85;
  var C86;
  var C84;
  var C83;
  var _animationEndCallback$ = dart.privateName(colorize, "_animationEndCallback");
  const State_TickerProviderStateMixin$36$0 = class State_TickerProviderStateMixin extends framework.State$(colorize.ColorizeAnimatedTextKit) {};
  (State_TickerProviderStateMixin$36$0.new = function() {
    ticker_provider.TickerProviderStateMixin$(colorize.ColorizeAnimatedTextKit)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$0.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$0.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$0, ticker_provider.TickerProviderStateMixin$(colorize.ColorizeAnimatedTextKit));
  colorize._RotatingTextState = class _RotatingTextState extends State_TickerProviderStateMixin$36$0 {
    initState() {
      let t1, t1$;
      super.initState();
      this[_speed] = (t1 = this.widget.speed, t1 == null ? new core.Duration.new({milliseconds: 200}) : t1);
      this[_pause$] = (t1$ = this.widget.pause, t1$ == null ? new core.Duration.new({milliseconds: 1000}) : t1$);
      this[_index$] = -1;
      this[_currentRepeatCount$] = 0;
      for (let i = 0; i < dart.notNull(this.widget.text[$length]); i = i + 1) {
        try {
          if (!dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["text"]))) dart.throw(new core.Error.new());
          this[_texts$][$add](new _js_helper.LinkedMap.from(["text", dart.dsend(this.widget.text[$_get](i), '_get', ["text"]), "speed", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["speed"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["speed"]) : this[_speed], "pause", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["pause"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["pause"]) : this[_pause$]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_texts$][$add](new _js_helper.LinkedMap.from(["text", this.widget.text[$_get](i), "speed", this[_speed], "pause", this[_pause$]]));
        }
      }
      this[_nextAnimation$]();
    }
    dispose() {
      this[_controller$].dispose();
      super.dispose();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: this.widget.onTap, child: dart.test(this[_isCurrentlyPausing$]) || !dart.test(this[_controller$].isAnimating) ? new text.Text.new(core.String._check(this[_texts$][$_get](this[_index$])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}) : new transitions.AnimatedBuilder.new({animation: this[_controller$], builder: dart.fn((context, child) => {
            let t2;
            let linearGradient = new gradient.LinearGradient.new({colors: this.widget.colors}).createShader(new ui.Rect.fromLTWH(0.0, 0.0, core.double._check(this[_colorShifter].value), 0.0));
            return new basic.Opacity.new({opacity: core.double._check(!dart.equals(this[_fadeIn$].value, 1.0) ? this[_fadeIn$].value : this[_fadeOut$].value), child: new text.Text.new(core.String._check(this[_texts$][$_get](this[_index$])[$_get]("text")), {style: this.widget.textStyle != null ? this.widget.textStyle.merge(new text_style.TextStyle.new({foreground: (t2 = ui.Paint.new(), t2.shader = linearGradient, t2)})) : this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75});
          }, BuildContextAndWidgetToOpacity()), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
    }
    [_nextAnimation$]() {
      let t2;
      let isLast = this[_index$] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$] = false;
      if (dart.notNull(this[_index$]) > -1) {
        if (this.widget.onNext != null) dart.dsend(this.widget, 'onNext', [this[_index$], isLast]);
      }
      if (isLast) {
        if (dart.test(this.widget.isRepeatingAnimation) && this[_currentRepeatCount$] !== dart.notNull(this.widget.totalRepeatCount) - 1) {
          this[_index$] = 0;
          this[_currentRepeatCount$] = dart.notNull(this[_currentRepeatCount$]) + 1;
        } else {
          if (this.widget.onFinished != null) this.widget.onFinished();
          return;
        }
      } else {
        this[_index$] = dart.notNull(this[_index$]) + 1;
      }
      if (this[_controller$] != null) this[_controller$].dispose();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      this[_controller$] = new animation_controller.AnimationController.new({duration: core.Duration._check(dart.dsend(this[_texts$][$_get](this[_index$])[$_get]("speed"), '*', [dart.dload(this[_texts$][$_get](this[_index$])[$_get]("text"), 'length')])), vsync: this});
      this[_tuning] = 300.0 * dart.notNull(this.widget.colors[$length]) * (dart.notNull(this.widget.textStyle.fontSize) / 24.0) * 0.75 * dart.notNull(core.num._check(dart.dsend(dart.dload(this[_texts$][$_get](this[_index$])[$_get]("text"), 'length'), '/', [15.0])));
      this[_fadeIn$] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: new curves.Interval.new(0.0, 0.1, {curve: curves.Curves.easeOut})}));
      this[_fadeOut$] = new (TweenOfdouble()).new({begin: 1.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: new curves.Interval.new(0.9, 1.0, {curve: curves.Curves.easeIn})}));
      this[_colorShifter] = (t2 = new (TweenOfdouble()).new({begin: 0.0, end: dart.notNull(this.widget.colors[$length]) * dart.notNull(this[_tuning])}).animate(new animations.CurvedAnimation.new({parent: this[_controller$], curve: new curves.Interval.new(0.0, 1.0, {curve: curves.Curves.easeIn})})), t2.addStatusListener(dart.bind(this, _animationEndCallback$)), t2);
      this[_controller$].forward();
    }
    [_animationEndCallback$](state) {
      if (dart.equals(state, animation.AnimationStatus.completed)) {
        this[_isCurrentlyPausing$] = true;
        async.Timer.new(core.Duration._check(this[_texts$][$_get](this[_index$])[$_get]("pause")), dart.bind(this, _nextAnimation$));
      }
    }
  };
  (colorize._RotatingTextState.new = function() {
    this[_controller$] = null;
    this[_colorShifter] = null;
    this[_fadeIn$] = null;
    this[_fadeOut$] = null;
    this[_tuning] = null;
    this[_speed] = null;
    this[_pause$] = null;
    this[_texts$] = JSArrayOfMap().of([]);
    this[_index$] = null;
    this[_isCurrentlyPausing$] = false;
    this[_currentRepeatCount$] = null;
    colorize._RotatingTextState.__proto__.new.call(this);
    ;
  }).prototype = colorize._RotatingTextState.prototype;
  dart.addTypeTests(colorize._RotatingTextState);
  dart.setMethodSignature(colorize._RotatingTextState, () => ({
    __proto__: dart.getMethods(colorize._RotatingTextState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_nextAnimation$]: dart.fnType(dart.void, []),
    [_animationEndCallback$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(colorize._RotatingTextState, "package:animated_text_kit/src/colorize.dart");
  dart.setFieldSignature(colorize._RotatingTextState, () => ({
    __proto__: dart.getFields(colorize._RotatingTextState.__proto__),
    [_controller$]: dart.fieldType(animation_controller.AnimationController),
    [_colorShifter]: dart.fieldType(animation.Animation),
    [_fadeIn$]: dart.fieldType(animation.Animation),
    [_fadeOut$]: dart.fieldType(animation.Animation),
    [_tuning]: dart.fieldType(core.double),
    [_speed]: dart.fieldType(core.Duration),
    [_pause$]: dart.fieldType(core.Duration),
    [_texts$]: dart.fieldType(core.List$(core.Map)),
    [_index$]: dart.fieldType(core.int),
    [_isCurrentlyPausing$]: dart.fieldType(core.bool),
    [_currentRepeatCount$]: dart.fieldType(core.int)
  }));
  var text$2 = dart.privateName(fade, "FadeAnimatedTextKit.text");
  var textStyle$2 = dart.privateName(fade, "FadeAnimatedTextKit.textStyle");
  var pause$1 = dart.privateName(fade, "FadeAnimatedTextKit.pause");
  var duration$0 = dart.privateName(fade, "FadeAnimatedTextKit.duration");
  var onTap$1 = dart.privateName(fade, "FadeAnimatedTextKit.onTap");
  var onFinished$1 = dart.privateName(fade, "FadeAnimatedTextKit.onFinished");
  var onNext$1 = dart.privateName(fade, "FadeAnimatedTextKit.onNext");
  var onNextBeforePause$1 = dart.privateName(fade, "FadeAnimatedTextKit.onNextBeforePause");
  var alignment$1 = dart.privateName(fade, "FadeAnimatedTextKit.alignment");
  var textAlign$1 = dart.privateName(fade, "FadeAnimatedTextKit.textAlign");
  var totalRepeatCount$1 = dart.privateName(fade, "FadeAnimatedTextKit.totalRepeatCount");
  var isRepeatingAnimation$1 = dart.privateName(fade, "FadeAnimatedTextKit.isRepeatingAnimation");
  var displayFullTextOnTap$0 = dart.privateName(fade, "FadeAnimatedTextKit.displayFullTextOnTap");
  var stopPauseOnTap$0 = dart.privateName(fade, "FadeAnimatedTextKit.stopPauseOnTap");
  fade.FadeAnimatedTextKit = class FadeAnimatedTextKit extends framework.StatefulWidget {
    get text() {
      return this[text$2];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$2];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get pause() {
      return this[pause$1];
    }
    set pause(value) {
      super.pause = value;
    }
    get duration() {
      return this[duration$0];
    }
    set duration(value) {
      super.duration = value;
    }
    get onTap() {
      return this[onTap$1];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onFinished() {
      return this[onFinished$1];
    }
    set onFinished(value) {
      super.onFinished = value;
    }
    get onNext() {
      return this[onNext$1];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onNextBeforePause() {
      return this[onNextBeforePause$1];
    }
    set onNextBeforePause(value) {
      super.onNextBeforePause = value;
    }
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get textAlign() {
      return this[textAlign$1];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get totalRepeatCount() {
      return this[totalRepeatCount$1];
    }
    set totalRepeatCount(value) {
      super.totalRepeatCount = value;
    }
    get isRepeatingAnimation() {
      return this[isRepeatingAnimation$1];
    }
    set isRepeatingAnimation(value) {
      super.isRepeatingAnimation = value;
    }
    get displayFullTextOnTap() {
      return this[displayFullTextOnTap$0];
    }
    set displayFullTextOnTap(value) {
      super.displayFullTextOnTap = value;
    }
    get stopPauseOnTap() {
      return this[stopPauseOnTap$0];
    }
    set stopPauseOnTap(value) {
      super.stopPauseOnTap = value;
    }
    createState() {
      return new fade._RotatingTextState.new();
    }
  };
  (fade.FadeAnimatedTextKit.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let pause = opts && 'pause' in opts ? opts.pause : null;
    let displayFullTextOnTap = opts && 'displayFullTextOnTap' in opts ? opts.displayFullTextOnTap : false;
    let stopPauseOnTap = opts && 'stopPauseOnTap' in opts ? opts.stopPauseOnTap : false;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onNextBeforePause = opts && 'onNextBeforePause' in opts ? opts.onNextBeforePause : null;
    let onFinished = opts && 'onFinished' in opts ? opts.onFinished : null;
    let totalRepeatCount = opts && 'totalRepeatCount' in opts ? opts.totalRepeatCount : 3;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C37 || CT.C37;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C38 || CT.C38;
    let isRepeatingAnimation = opts && 'isRepeatingAnimation' in opts ? opts.isRepeatingAnimation : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$2] = text;
    this[duration$0] = duration;
    this[textStyle$2] = textStyle;
    this[pause$1] = pause;
    this[displayFullTextOnTap$0] = displayFullTextOnTap;
    this[stopPauseOnTap$0] = stopPauseOnTap;
    this[onTap$1] = onTap;
    this[onNext$1] = onNext;
    this[onNextBeforePause$1] = onNextBeforePause;
    this[onFinished$1] = onFinished;
    this[totalRepeatCount$1] = totalRepeatCount;
    this[alignment$1] = alignment;
    this[textAlign$1] = textAlign;
    this[isRepeatingAnimation$1] = isRepeatingAnimation;
    fade.FadeAnimatedTextKit.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = fade.FadeAnimatedTextKit.prototype;
  dart.addTypeTests(fade.FadeAnimatedTextKit);
  dart.setMethodSignature(fade.FadeAnimatedTextKit, () => ({
    __proto__: dart.getMethods(fade.FadeAnimatedTextKit.__proto__),
    createState: dart.fnType(fade._RotatingTextState, [])
  }));
  dart.setLibraryUri(fade.FadeAnimatedTextKit, "package:animated_text_kit/src/fade.dart");
  dart.setFieldSignature(fade.FadeAnimatedTextKit, () => ({
    __proto__: dart.getFields(fade.FadeAnimatedTextKit.__proto__),
    text: dart.finalFieldType(core.List),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    pause: dart.finalFieldType(core.Duration),
    duration: dart.finalFieldType(core.Duration),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onFinished: dart.finalFieldType(dart.fnType(dart.void, [])),
    onNext: dart.finalFieldType(core.Function),
    onNextBeforePause: dart.finalFieldType(core.Function),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    textAlign: dart.finalFieldType(ui.TextAlign),
    totalRepeatCount: dart.finalFieldType(core.int),
    isRepeatingAnimation: dart.finalFieldType(core.bool),
    displayFullTextOnTap: dart.finalFieldType(core.bool),
    stopPauseOnTap: dart.finalFieldType(core.bool)
  }));
  var _fadeIn$0 = dart.privateName(fade, "_fadeIn");
  var _fadeOut$0 = dart.privateName(fade, "_fadeOut");
  var _controller$0 = dart.privateName(fade, "_controller");
  var _pause$0 = dart.privateName(fade, "_pause");
  var _texts$0 = dart.privateName(fade, "_texts");
  var _index$0 = dart.privateName(fade, "_index");
  var _isCurrentlyPausing$0 = dart.privateName(fade, "_isCurrentlyPausing");
  var _timer$ = dart.privateName(fade, "_timer");
  var _currentRepeatCount$0 = dart.privateName(fade, "_currentRepeatCount");
  var _duration$ = dart.privateName(fade, "_duration");
  var _nextAnimation$0 = dart.privateName(fade, "_nextAnimation");
  var _onTap$ = dart.privateName(fade, "_onTap");
  var C89;
  var C90;
  var C91;
  var C88;
  var C87;
  var C94;
  var C95;
  var C96;
  var C93;
  var C92;
  var C99;
  var C100;
  var C98;
  var C97;
  var C103;
  var C104;
  var C102;
  var C101;
  var C107;
  var C108;
  var C106;
  var C105;
  var _animationEndCallback$0 = dart.privateName(fade, "_animationEndCallback");
  var _setPause$ = dart.privateName(fade, "_setPause");
  const State_TickerProviderStateMixin$36$1 = class State_TickerProviderStateMixin extends framework.State$(fade.FadeAnimatedTextKit) {};
  (State_TickerProviderStateMixin$36$1.new = function() {
    ticker_provider.TickerProviderStateMixin$(fade.FadeAnimatedTextKit)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$1.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$1.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$1, ticker_provider.TickerProviderStateMixin$(fade.FadeAnimatedTextKit));
  fade._RotatingTextState = class _RotatingTextState extends State_TickerProviderStateMixin$36$1 {
    initState() {
      let t2;
      super.initState();
      this[_pause$0] = (t2 = this.widget.pause, t2 == null ? new core.Duration.new({milliseconds: 500}) : t2);
      this[_index$0] = -1;
      this[_currentRepeatCount$0] = 0;
      if (this.widget.duration == null) {
        this[_duration$] = new core.Duration.new({milliseconds: 2000});
      } else {
        this[_duration$] = this.widget.duration;
      }
      for (let i = 0; i < dart.notNull(this.widget.text[$length]); i = i + 1) {
        try {
          if (!dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["text"]))) dart.throw(new core.Error.new());
          this[_texts$0][$add](new _js_helper.LinkedMap.from(["text", dart.dsend(this.widget.text[$_get](i), '_get', ["text"]), "pause", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["pause"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["pause"]) : this[_pause$0]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_texts$0][$add](new _js_helper.LinkedMap.from(["text", this.widget.text[$_get](i), "pause", this[_pause$0]]));
        }
      }
      this[_nextAnimation$0]();
    }
    dispose() {
      let t3;
      t3 = this[_controller$0];
      t3.stop();
      t3.dispose();
      t3;
      super.dispose();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _onTap$), child: dart.test(this[_isCurrentlyPausing$0]) || !dart.test(this[_controller$0].isAnimating) ? new text.Text.new(core.String._check(this[_texts$0][$_get](this[_index$0])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}) : new transitions.AnimatedBuilder.new({animation: this[_controller$0], builder: dart.fn((context, child) => new basic.Opacity.new({opacity: core.double._check(!dart.equals(this[_fadeIn$0].value, 1.0) ? this[_fadeIn$0].value : this[_fadeOut$0].value), child: new text.Text.new(core.String._check(this[_texts$0][$_get](this[_index$0])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), BuildContextAndWidgetToOpacity()), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105});
    }
    [_nextAnimation$0]() {
      let t3, t3$;
      let isLast = this[_index$0] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$0] = false;
      if (dart.notNull(this[_index$0]) > -1) {
        if (this.widget.onNext != null) dart.dsend(this.widget, 'onNext', [this[_index$0], isLast]);
      }
      if (isLast) {
        if (dart.test(this.widget.isRepeatingAnimation) && this[_currentRepeatCount$0] !== dart.notNull(this.widget.totalRepeatCount) - 1) {
          this[_index$0] = 0;
          this[_currentRepeatCount$0] = dart.notNull(this[_currentRepeatCount$0]) + 1;
        } else {
          if (this.widget.onFinished != null) this.widget.onFinished();
          return;
        }
      } else {
        this[_index$0] = dart.notNull(this[_index$0]) + 1;
      }
      if (this[_controller$0] != null) this[_controller$0].dispose();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      this[_controller$0] = new animation_controller.AnimationController.new({duration: this[_duration$], vsync: this});
      this[_fadeIn$0] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$0], curve: new curves.Interval.new(0.0, 0.5, {curve: curves.Curves.linear})}));
      this[_fadeOut$0] = (t3 = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$0], curve: new curves.Interval.new(0.8, 1.0, {curve: curves.Curves.linear})})), t3.addStatusListener(dart.bind(this, _animationEndCallback$0)), t3);
      t3$ = this[_controller$0];
      t3$.forward();
      t3$;
    }
    [_setPause$]() {
      let isLast = this[_index$0] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$0] = true;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      if (this.widget.onNextBeforePause != null) dart.dsend(this.widget, 'onNextBeforePause', [this[_index$0], isLast]);
    }
    [_animationEndCallback$0](state) {
      if (dart.equals(state, animation.AnimationStatus.completed)) {
        this[_isCurrentlyPausing$0] = true;
        this[_timer$] = async.Timer.new(core.Duration._check(this[_texts$0][$_get](this[_index$0])[$_get]("pause")), dart.bind(this, _nextAnimation$0));
      }
    }
    [_onTap$]() {
      let t3;
      let pause = null;
      let left = null;
      if (dart.test(this.widget.displayFullTextOnTap)) {
        if (dart.test(this[_isCurrentlyPausing$0])) {
          if (dart.test(this.widget.stopPauseOnTap)) {
            t3 = this[_timer$];
            t3 == null ? null : t3.cancel();
            this[_nextAnimation$0]();
          }
        } else {
          pause = core.int._check(dart.dload(this[_texts$0][$_get](this[_index$0])[$_get]("pause"), 'inMilliseconds'));
          left = this.widget.duration.inMilliseconds;
          this[_controller$0].stop();
          this[_setPause$]();
          this[_timer$] = async.Timer.new(new core.Duration.new({milliseconds: math.max(core.int, pause, left)}), dart.bind(this, _nextAnimation$0));
        }
      }
      if (this.widget.onTap != null) {
        this.widget.onTap();
      }
    }
  };
  (fade._RotatingTextState.new = function() {
    this[_fadeIn$0] = null;
    this[_fadeOut$0] = null;
    this[_controller$0] = null;
    this.textWidgetList = JSArrayOfWidget().of([]);
    this[_pause$0] = null;
    this[_texts$0] = JSArrayOfMap().of([]);
    this[_index$0] = null;
    this[_isCurrentlyPausing$0] = false;
    this[_timer$] = null;
    this[_currentRepeatCount$0] = null;
    this[_duration$] = null;
    fade._RotatingTextState.__proto__.new.call(this);
    ;
  }).prototype = fade._RotatingTextState.prototype;
  dart.addTypeTests(fade._RotatingTextState);
  dart.setMethodSignature(fade._RotatingTextState, () => ({
    __proto__: dart.getMethods(fade._RotatingTextState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_nextAnimation$0]: dart.fnType(dart.void, []),
    [_setPause$]: dart.fnType(dart.void, []),
    [_animationEndCallback$0]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTap$]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(fade._RotatingTextState, "package:animated_text_kit/src/fade.dart");
  dart.setFieldSignature(fade._RotatingTextState, () => ({
    __proto__: dart.getFields(fade._RotatingTextState.__proto__),
    [_fadeIn$0]: dart.fieldType(animation.Animation),
    [_fadeOut$0]: dart.fieldType(animation.Animation),
    [_controller$0]: dart.fieldType(animation_controller.AnimationController),
    textWidgetList: dart.fieldType(core.List$(framework.Widget)),
    [_pause$0]: dart.fieldType(core.Duration),
    [_texts$0]: dart.fieldType(core.List$(core.Map)),
    [_index$0]: dart.fieldType(core.int),
    [_isCurrentlyPausing$0]: dart.fieldType(core.bool),
    [_timer$]: dart.fieldType(async.Timer),
    [_currentRepeatCount$0]: dart.fieldType(core.int),
    [_duration$]: dart.fieldType(core.Duration)
  }));
  var text$3 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.text");
  var textStyle$3 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.textStyle");
  var speed$0 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.speed");
  var pause$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.pause");
  var onTap$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.onTap");
  var onFinished$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.onFinished");
  var onNext$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.onNext");
  var onNextBeforePause$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.onNextBeforePause");
  var alignment$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.alignment");
  var textAlign$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.textAlign");
  var totalRepeatCount$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.totalRepeatCount");
  var isRepeatingAnimation$2 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.isRepeatingAnimation");
  var displayFullTextOnTap$1 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.displayFullTextOnTap");
  var stopPauseOnTap$1 = dart.privateName(typewriter, "TypewriterAnimatedTextKit.stopPauseOnTap");
  typewriter.TypewriterAnimatedTextKit = class TypewriterAnimatedTextKit extends framework.StatefulWidget {
    get text() {
      return this[text$3];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$3];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get speed() {
      return this[speed$0];
    }
    set speed(value) {
      super.speed = value;
    }
    get pause() {
      return this[pause$2];
    }
    set pause(value) {
      super.pause = value;
    }
    get onTap() {
      return this[onTap$2];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onFinished() {
      return this[onFinished$2];
    }
    set onFinished(value) {
      super.onFinished = value;
    }
    get onNext() {
      return this[onNext$2];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onNextBeforePause() {
      return this[onNextBeforePause$2];
    }
    set onNextBeforePause(value) {
      super.onNextBeforePause = value;
    }
    get alignment() {
      return this[alignment$2];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get textAlign() {
      return this[textAlign$2];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get totalRepeatCount() {
      return this[totalRepeatCount$2];
    }
    set totalRepeatCount(value) {
      super.totalRepeatCount = value;
    }
    get isRepeatingAnimation() {
      return this[isRepeatingAnimation$2];
    }
    set isRepeatingAnimation(value) {
      super.isRepeatingAnimation = value;
    }
    get displayFullTextOnTap() {
      return this[displayFullTextOnTap$1];
    }
    set displayFullTextOnTap(value) {
      super.displayFullTextOnTap = value;
    }
    get stopPauseOnTap() {
      return this[stopPauseOnTap$1];
    }
    set stopPauseOnTap(value) {
      super.stopPauseOnTap = value;
    }
    createState() {
      return new typewriter._TypewriterState.new();
    }
  };
  (typewriter.TypewriterAnimatedTextKit.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let speed = opts && 'speed' in opts ? opts.speed : null;
    let pause = opts && 'pause' in opts ? opts.pause : null;
    let displayFullTextOnTap = opts && 'displayFullTextOnTap' in opts ? opts.displayFullTextOnTap : false;
    let stopPauseOnTap = opts && 'stopPauseOnTap' in opts ? opts.stopPauseOnTap : false;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onNextBeforePause = opts && 'onNextBeforePause' in opts ? opts.onNextBeforePause : null;
    let onFinished = opts && 'onFinished' in opts ? opts.onFinished : null;
    let totalRepeatCount = opts && 'totalRepeatCount' in opts ? opts.totalRepeatCount : 3;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C37 || CT.C37;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C38 || CT.C38;
    let isRepeatingAnimation = opts && 'isRepeatingAnimation' in opts ? opts.isRepeatingAnimation : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$3] = text;
    this[textStyle$3] = textStyle;
    this[speed$0] = speed;
    this[pause$2] = pause;
    this[displayFullTextOnTap$1] = displayFullTextOnTap;
    this[stopPauseOnTap$1] = stopPauseOnTap;
    this[onTap$2] = onTap;
    this[onNext$2] = onNext;
    this[onNextBeforePause$2] = onNextBeforePause;
    this[onFinished$2] = onFinished;
    this[totalRepeatCount$2] = totalRepeatCount;
    this[alignment$2] = alignment;
    this[textAlign$2] = textAlign;
    this[isRepeatingAnimation$2] = isRepeatingAnimation;
    if (!(text != null)) dart.assertFailed("You should specify the list of text", "org-dartlang-app:///packages/animated_text_kit/src/typewriter.dart", 86, 16, "!(text == null)");
    typewriter.TypewriterAnimatedTextKit.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = typewriter.TypewriterAnimatedTextKit.prototype;
  dart.addTypeTests(typewriter.TypewriterAnimatedTextKit);
  dart.setMethodSignature(typewriter.TypewriterAnimatedTextKit, () => ({
    __proto__: dart.getMethods(typewriter.TypewriterAnimatedTextKit.__proto__),
    createState: dart.fnType(typewriter._TypewriterState, [])
  }));
  dart.setLibraryUri(typewriter.TypewriterAnimatedTextKit, "package:animated_text_kit/src/typewriter.dart");
  dart.setFieldSignature(typewriter.TypewriterAnimatedTextKit, () => ({
    __proto__: dart.getFields(typewriter.TypewriterAnimatedTextKit.__proto__),
    text: dart.finalFieldType(core.List),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    speed: dart.finalFieldType(core.Duration),
    pause: dart.finalFieldType(core.Duration),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onFinished: dart.finalFieldType(dart.fnType(dart.void, [])),
    onNext: dart.finalFieldType(core.Function),
    onNextBeforePause: dart.finalFieldType(core.Function),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    textAlign: dart.finalFieldType(ui.TextAlign),
    totalRepeatCount: dart.finalFieldType(core.int),
    isRepeatingAnimation: dart.finalFieldType(core.bool),
    displayFullTextOnTap: dart.finalFieldType(core.bool),
    stopPauseOnTap: dart.finalFieldType(core.bool)
  }));
  var _controller$1 = dart.privateName(typewriter, "_controller");
  var _typewriterText = dart.privateName(typewriter, "_typewriterText");
  var _speed$ = dart.privateName(typewriter, "_speed");
  var _pause$1 = dart.privateName(typewriter, "_pause");
  var _texts$1 = dart.privateName(typewriter, "_texts");
  var _index$1 = dart.privateName(typewriter, "_index");
  var _isCurrentlyPausing$1 = dart.privateName(typewriter, "_isCurrentlyPausing");
  var _timer$0 = dart.privateName(typewriter, "_timer");
  var _currentRepeatCount$1 = dart.privateName(typewriter, "_currentRepeatCount");
  var _nextAnimation$1 = dart.privateName(typewriter, "_nextAnimation");
  var _onTap$0 = dart.privateName(typewriter, "_onTap");
  var C111;
  var C112;
  var C113;
  var C110;
  var C109;
  var C116;
  var C117;
  var C118;
  var C115;
  var C114;
  var C121;
  var C122;
  var C120;
  var C119;
  var C125;
  var C126;
  var C124;
  var C123;
  var _animationEndCallback$1 = dart.privateName(typewriter, "_animationEndCallback");
  var _setPause$0 = dart.privateName(typewriter, "_setPause");
  const State_TickerProviderStateMixin$36$2 = class State_TickerProviderStateMixin extends framework.State$(typewriter.TypewriterAnimatedTextKit) {};
  (State_TickerProviderStateMixin$36$2.new = function() {
    ticker_provider.TickerProviderStateMixin$(typewriter.TypewriterAnimatedTextKit)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$2.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$2.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$2, ticker_provider.TickerProviderStateMixin$(typewriter.TypewriterAnimatedTextKit));
  typewriter._TypewriterState = class _TypewriterState extends State_TickerProviderStateMixin$36$2 {
    initState() {
      let t3, t3$;
      super.initState();
      this[_speed$] = (t3 = this.widget.speed, t3 == null ? new core.Duration.new({milliseconds: 30}) : t3);
      this[_pause$1] = (t3$ = this.widget.pause, t3$ == null ? new core.Duration.new({milliseconds: 1000}) : t3$);
      this[_index$1] = -1;
      this[_currentRepeatCount$1] = 0;
      for (let i = 0; i < dart.notNull(this.widget.text[$length]); i = i + 1) {
        try {
          if (!dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["text"]))) dart.throw(new core.Error.new());
          this[_texts$1][$add](new _js_helper.LinkedMap.from(["text", dart.dsend(this.widget.text[$_get](i), '_get', ["text"]), "speed", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["speed"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["speed"]) : this[_speed$], "pause", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["pause"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["pause"]) : this[_pause$1]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_texts$1][$add](new _js_helper.LinkedMap.from(["text", this.widget.text[$_get](i), "speed", this[_speed$], "pause", this[_pause$1]]));
        }
      }
      this[_nextAnimation$1]();
    }
    dispose() {
      let t4;
      if (this[_controller$1] != null) {
        t4 = this[_controller$1];
        t4.stop();
        t4.dispose();
        t4;
      }
      super.dispose();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _onTap$0), child: dart.test(this[_isCurrentlyPausing$1]) || !dart.test(this[_controller$1].isAnimating) ? new text.Text.new(core.String._check(this[_texts$1][$_get](this[_index$1])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C109 || CT.C109}) : new transitions.AnimatedBuilder.new({animation: this[_controller$1], builder: dart.fn((context, child) => {
            let visibleString = core.String._check(this[_texts$1][$_get](this[_index$1])[$_get]("text"));
            if (dart.equals(this[_typewriterText].value, 0)) {
              visibleString = "";
            } else if (dart.dtest(dart.dsend(this[_typewriterText].value, '>', [dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length')]))) {
              if (dart.equals(dart.dsend(dart.dsend(this[_typewriterText].value, '-', [dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length')]), '%', [2]), 0)) {
                visibleString = core.String._check(dart.dsend(dart.dsend(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'substring', [0, dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length')]), '+', ["_"]));
              } else {
                visibleString = core.String._check(dart.dsend(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'substring', [0, dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length')]));
              }
            } else {
              visibleString = core.String._check(dart.dsend(dart.dsend(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'substring', [0, this[_typewriterText].value]), '+', ["_"]));
            }
            return new text.Text.new(visibleString, {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C114 || CT.C114});
          }, BuildContextAndWidgetToText()), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123});
    }
    [_nextAnimation$1]() {
      let t4;
      let isLast = this[_index$1] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$1] = false;
      if (dart.notNull(this[_index$1]) > -1) {
        if (this.widget.onNext != null) dart.dsend(this.widget, 'onNext', [this[_index$1], isLast]);
      }
      if (isLast) {
        if (dart.test(this.widget.isRepeatingAnimation) && this[_currentRepeatCount$1] !== dart.notNull(this.widget.totalRepeatCount) - 1) {
          this[_index$1] = 0;
          this[_currentRepeatCount$1] = dart.notNull(this[_currentRepeatCount$1]) + 1;
        } else {
          if (this.widget.onFinished != null) this.widget.onFinished();
          return;
        }
      } else {
        this[_index$1] = dart.notNull(this[_index$1]) + 1;
      }
      if (this[_controller$1] != null) this[_controller$1].dispose();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      this[_controller$1] = new animation_controller.AnimationController.new({duration: core.Duration._check(dart.dsend(this[_texts$1][$_get](this[_index$1])[$_get]("speed"), '*', [dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length')])), vsync: this});
      this[_typewriterText] = (t4 = new tween.StepTween.new({begin: 0, end: core.int._check(dart.dsend(dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length'), '+', [8]))}).animate(this[_controller$1]), t4.addStatusListener(dart.bind(this, _animationEndCallback$1)), t4);
      this[_controller$1].forward();
    }
    [_setPause$0]() {
      let isLast = this[_index$1] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$1] = true;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      if (this.widget.onNextBeforePause != null) dart.dsend(this.widget, 'onNextBeforePause', [this[_index$1], isLast]);
    }
    [_animationEndCallback$1](state) {
      if (dart.equals(state, animation.AnimationStatus.completed)) {
        this[_setPause$0]();
        this[_timer$0] = async.Timer.new(core.Duration._check(this[_texts$1][$_get](this[_index$1])[$_get]("pause")), dart.bind(this, _nextAnimation$1));
      }
    }
    [_onTap$0]() {
      let t4;
      let pause = null;
      let left = null;
      if (dart.test(this.widget.displayFullTextOnTap)) {
        if (dart.test(this[_isCurrentlyPausing$1])) {
          if (dart.test(this.widget.stopPauseOnTap)) {
            t4 = this[_timer$0];
            t4 == null ? null : t4.cancel();
            this[_nextAnimation$1]();
          }
        } else {
          pause = core.int._check(dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("pause"), 'inMilliseconds'));
          left = core.int._check(dart.dsend(dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("speed"), 'inMilliseconds'), '*', [dart.dsend(dart.dload(this[_texts$1][$_get](this[_index$1])[$_get]("text"), 'length'), '-', [this[_typewriterText].value])]));
          this[_controller$1].stop();
          this[_setPause$0]();
          this[_timer$0] = async.Timer.new(new core.Duration.new({milliseconds: math.max(core.int, pause, left)}), dart.bind(this, _nextAnimation$1));
        }
      }
      if (this.widget.onTap != null) {
        this.widget.onTap();
      }
    }
  };
  (typewriter._TypewriterState.new = function() {
    this[_controller$1] = null;
    this[_typewriterText] = null;
    this.textWidgetList = JSArrayOfWidget().of([]);
    this[_speed$] = null;
    this[_pause$1] = null;
    this[_texts$1] = JSArrayOfMap().of([]);
    this[_index$1] = null;
    this[_isCurrentlyPausing$1] = false;
    this[_timer$0] = null;
    this[_currentRepeatCount$1] = null;
    typewriter._TypewriterState.__proto__.new.call(this);
    ;
  }).prototype = typewriter._TypewriterState.prototype;
  dart.addTypeTests(typewriter._TypewriterState);
  dart.setMethodSignature(typewriter._TypewriterState, () => ({
    __proto__: dart.getMethods(typewriter._TypewriterState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_nextAnimation$1]: dart.fnType(dart.void, []),
    [_setPause$0]: dart.fnType(dart.void, []),
    [_animationEndCallback$1]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTap$0]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(typewriter._TypewriterState, "package:animated_text_kit/src/typewriter.dart");
  dart.setFieldSignature(typewriter._TypewriterState, () => ({
    __proto__: dart.getFields(typewriter._TypewriterState.__proto__),
    [_controller$1]: dart.fieldType(animation_controller.AnimationController),
    [_typewriterText]: dart.fieldType(animation.Animation),
    textWidgetList: dart.fieldType(core.List$(framework.Widget)),
    [_speed$]: dart.fieldType(core.Duration),
    [_pause$1]: dart.fieldType(core.Duration),
    [_texts$1]: dart.fieldType(core.List$(core.Map)),
    [_index$1]: dart.fieldType(core.int),
    [_isCurrentlyPausing$1]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer),
    [_currentRepeatCount$1]: dart.fieldType(core.int)
  }));
  var text$4 = dart.privateName(rotate, "RotateAnimatedTextKit.text");
  var textStyle$4 = dart.privateName(rotate, "RotateAnimatedTextKit.textStyle");
  var pause$3 = dart.privateName(rotate, "RotateAnimatedTextKit.pause");
  var duration$1 = dart.privateName(rotate, "RotateAnimatedTextKit.duration");
  var transitionHeight$ = dart.privateName(rotate, "RotateAnimatedTextKit.transitionHeight");
  var onTap$3 = dart.privateName(rotate, "RotateAnimatedTextKit.onTap");
  var onFinished$3 = dart.privateName(rotate, "RotateAnimatedTextKit.onFinished");
  var onNext$3 = dart.privateName(rotate, "RotateAnimatedTextKit.onNext");
  var onNextBeforePause$3 = dart.privateName(rotate, "RotateAnimatedTextKit.onNextBeforePause");
  var alignment$3 = dart.privateName(rotate, "RotateAnimatedTextKit.alignment");
  var textAlign$3 = dart.privateName(rotate, "RotateAnimatedTextKit.textAlign");
  var totalRepeatCount$3 = dart.privateName(rotate, "RotateAnimatedTextKit.totalRepeatCount");
  var isRepeatingAnimation$3 = dart.privateName(rotate, "RotateAnimatedTextKit.isRepeatingAnimation");
  var displayFullTextOnTap$2 = dart.privateName(rotate, "RotateAnimatedTextKit.displayFullTextOnTap");
  rotate.RotateAnimatedTextKit = class RotateAnimatedTextKit extends framework.StatefulWidget {
    get text() {
      return this[text$4];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$4];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get pause() {
      return this[pause$3];
    }
    set pause(value) {
      super.pause = value;
    }
    get duration() {
      return this[duration$1];
    }
    set duration(value) {
      super.duration = value;
    }
    get transitionHeight() {
      return this[transitionHeight$];
    }
    set transitionHeight(value) {
      super.transitionHeight = value;
    }
    get onTap() {
      return this[onTap$3];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onFinished() {
      return this[onFinished$3];
    }
    set onFinished(value) {
      super.onFinished = value;
    }
    get onNext() {
      return this[onNext$3];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onNextBeforePause() {
      return this[onNextBeforePause$3];
    }
    set onNextBeforePause(value) {
      super.onNextBeforePause = value;
    }
    get alignment() {
      return this[alignment$3];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get textAlign() {
      return this[textAlign$3];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get totalRepeatCount() {
      return this[totalRepeatCount$3];
    }
    set totalRepeatCount(value) {
      super.totalRepeatCount = value;
    }
    get isRepeatingAnimation() {
      return this[isRepeatingAnimation$3];
    }
    set isRepeatingAnimation(value) {
      super.isRepeatingAnimation = value;
    }
    get displayFullTextOnTap() {
      return this[displayFullTextOnTap$2];
    }
    set displayFullTextOnTap(value) {
      super.displayFullTextOnTap = value;
    }
    createState() {
      return new rotate._RotatingTextState.new();
    }
  };
  (rotate.RotateAnimatedTextKit.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let transitionHeight = opts && 'transitionHeight' in opts ? opts.transitionHeight : null;
    let pause = opts && 'pause' in opts ? opts.pause : null;
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onNextBeforePause = opts && 'onNextBeforePause' in opts ? opts.onNextBeforePause : null;
    let onFinished = opts && 'onFinished' in opts ? opts.onFinished : null;
    let totalRepeatCount = opts && 'totalRepeatCount' in opts ? opts.totalRepeatCount : 3;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C37 || CT.C37;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C38 || CT.C38;
    let displayFullTextOnTap = opts && 'displayFullTextOnTap' in opts ? opts.displayFullTextOnTap : false;
    let isRepeatingAnimation = opts && 'isRepeatingAnimation' in opts ? opts.isRepeatingAnimation : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$4] = text;
    this[textStyle$4] = textStyle;
    this[transitionHeight$] = transitionHeight;
    this[pause$3] = pause;
    this[onNext$3] = onNext;
    this[onNextBeforePause$3] = onNextBeforePause;
    this[onFinished$3] = onFinished;
    this[totalRepeatCount$3] = totalRepeatCount;
    this[duration$1] = duration;
    this[onTap$3] = onTap;
    this[alignment$3] = alignment;
    this[textAlign$3] = textAlign;
    this[displayFullTextOnTap$2] = displayFullTextOnTap;
    this[isRepeatingAnimation$3] = isRepeatingAnimation;
    rotate.RotateAnimatedTextKit.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rotate.RotateAnimatedTextKit.prototype;
  dart.addTypeTests(rotate.RotateAnimatedTextKit);
  dart.setMethodSignature(rotate.RotateAnimatedTextKit, () => ({
    __proto__: dart.getMethods(rotate.RotateAnimatedTextKit.__proto__),
    createState: dart.fnType(rotate._RotatingTextState, [])
  }));
  dart.setLibraryUri(rotate.RotateAnimatedTextKit, "package:animated_text_kit/src/rotate.dart");
  dart.setFieldSignature(rotate.RotateAnimatedTextKit, () => ({
    __proto__: dart.getFields(rotate.RotateAnimatedTextKit.__proto__),
    text: dart.finalFieldType(core.List),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    pause: dart.finalFieldType(core.Duration),
    duration: dart.finalFieldType(core.Duration),
    transitionHeight: dart.finalFieldType(core.double),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onFinished: dart.finalFieldType(dart.fnType(dart.void, [])),
    onNext: dart.finalFieldType(core.Function),
    onNextBeforePause: dart.finalFieldType(core.Function),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    textAlign: dart.finalFieldType(ui.TextAlign),
    totalRepeatCount: dart.finalFieldType(core.int),
    isRepeatingAnimation: dart.finalFieldType(core.bool),
    displayFullTextOnTap: dart.finalFieldType(core.bool)
  }));
  var _controller$2 = dart.privateName(rotate, "_controller");
  var _transitionHeight = dart.privateName(rotate, "_transitionHeight");
  var _fadeIn$1 = dart.privateName(rotate, "_fadeIn");
  var _fadeOut$1 = dart.privateName(rotate, "_fadeOut");
  var _slideIn = dart.privateName(rotate, "_slideIn");
  var _slideOut = dart.privateName(rotate, "_slideOut");
  var _pause$2 = dart.privateName(rotate, "_pause");
  var _texts$2 = dart.privateName(rotate, "_texts");
  var _index$2 = dart.privateName(rotate, "_index");
  var _isCurrentlyPausing$2 = dart.privateName(rotate, "_isCurrentlyPausing");
  var _timer$1 = dart.privateName(rotate, "_timer");
  var _currentRepeatCount$2 = dart.privateName(rotate, "_currentRepeatCount");
  var _duration$0 = dart.privateName(rotate, "_duration");
  var _nextAnimation$2 = dart.privateName(rotate, "_nextAnimation");
  var _onTap$1 = dart.privateName(rotate, "_onTap");
  var C129;
  var C130;
  var C131;
  var C128;
  var C127;
  var C134;
  var C135;
  var C136;
  var C133;
  var C132;
  var C139;
  var C140;
  var C138;
  var C137;
  var C143;
  var C144;
  var C142;
  var C141;
  var C147;
  var C148;
  var C146;
  var C145;
  var C151;
  var C152;
  var C150;
  var C149;
  var C155;
  var C156;
  var C154;
  var C153;
  var _animationEndCallback$2 = dart.privateName(rotate, "_animationEndCallback");
  var _setPause$1 = dart.privateName(rotate, "_setPause");
  const State_TickerProviderStateMixin$36$3 = class State_TickerProviderStateMixin extends framework.State$(rotate.RotateAnimatedTextKit) {};
  (State_TickerProviderStateMixin$36$3.new = function() {
    ticker_provider.TickerProviderStateMixin$(rotate.RotateAnimatedTextKit)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$3.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$3.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$3, ticker_provider.TickerProviderStateMixin$(rotate.RotateAnimatedTextKit));
  rotate._RotatingTextState = class _RotatingTextState extends State_TickerProviderStateMixin$36$3 {
    initState() {
      let t4;
      super.initState();
      this[_pause$2] = (t4 = this.widget.pause, t4 == null ? new core.Duration.new({milliseconds: 500}) : t4);
      this[_index$2] = -1;
      this[_currentRepeatCount$2] = 0;
      if (this.widget.duration == null) {
        this[_duration$0] = new core.Duration.new({milliseconds: 2000});
      } else {
        this[_duration$0] = this.widget.duration;
      }
      for (let i = 0; i < dart.notNull(this.widget.text[$length]); i = i + 1) {
        try {
          if (!dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["text"]))) dart.throw(new core.Error.new());
          this[_texts$2][$add](new _js_helper.LinkedMap.from(["text", dart.dsend(this.widget.text[$_get](i), '_get', ["text"]), "pause", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["pause"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["pause"]) : this[_pause$2]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_texts$2][$add](new _js_helper.LinkedMap.from(["text", this.widget.text[$_get](i), "pause", this[_pause$2]]));
        }
      }
      this[_nextAnimation$2]();
    }
    dispose() {
      let t5;
      t5 = this[_controller$2];
      t5.stop();
      t5.dispose();
      t5;
      super.dispose();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _onTap$1), child: new basic.SizedBox.new({height: this[_transitionHeight], child: dart.test(this[_isCurrentlyPausing$2]) || !dart.test(this[_controller$2].isAnimating) ? new text.Text.new(core.String._check(this[_texts$2][$_get](this[_index$2])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C127 || CT.C127}) : new transitions.AnimatedBuilder.new({animation: this[_controller$2], builder: dart.fn((context, child) => new transitions.AlignTransition.new({alignment: AnimationOfAlignmentGeometry()._check(!dart.equals(dart.dload(this[_slideIn].value, 'y'), 0.0) ? this[_slideIn] : this[_slideOut]), child: new basic.Opacity.new({opacity: core.double._check(!dart.equals(this[_fadeIn$1].value, 1.0) ? this[_fadeIn$1].value : this[_fadeOut$1].value), child: new text.Text.new(core.String._check(this[_texts$2][$_get](this[_index$2])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), $creationLocationd_0dea112b090073317d4: C137 || CT.C137}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), BuildContextAndWidgetToAlignTransition()), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153});
    }
    [_nextAnimation$2]() {
      let t5;
      let isLast = this[_index$2] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$2] = false;
      if (dart.notNull(this[_index$2]) > -1) {
        if (this.widget.onNext != null) dart.dsend(this.widget, 'onNext', [this[_index$2], isLast]);
      }
      if (isLast) {
        if (dart.test(this.widget.isRepeatingAnimation) && this[_currentRepeatCount$2] !== dart.notNull(this.widget.totalRepeatCount) - 1) {
          this[_index$2] = 0;
          this[_currentRepeatCount$2] = dart.notNull(this[_currentRepeatCount$2]) + 1;
        } else {
          if (this.widget.onFinished != null) this.widget.onFinished();
          return;
        }
      } else {
        this[_index$2] = dart.notNull(this[_index$2]) + 1;
      }
      if (this[_controller$2] != null) this[_controller$2].dispose();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      if (this.widget.transitionHeight == null) {
        this[_transitionHeight] = dart.notNull(this.widget.textStyle.fontSize) * 10 / 3;
      } else {
        this[_transitionHeight] = this.widget.transitionHeight;
      }
      this[_controller$2] = new animation_controller.AnimationController.new({duration: this[_duration$0], vsync: this});
      if (this[_index$2] === 0) {
        this[_slideIn] = new tweens.AlignmentTween.new({begin: new alignment.Alignment.new(-1.0, -1.0), end: new alignment.Alignment.new(-1.0, 0.0)}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: new curves.Interval.new(0.0, 0.4, {curve: curves.Curves.linear})}));
        this[_fadeIn$1] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: new curves.Interval.new(0.0, 0.4, {curve: curves.Curves.easeOut})}));
      } else {
        this[_slideIn] = new tweens.AlignmentTween.new({begin: new alignment.Alignment.new(-1.0, -1.0), end: new alignment.Alignment.new(-1.0, 0.0)}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: new curves.Interval.new(0.0, 0.4, {curve: curves.Curves.linear})}));
        this[_fadeIn$1] = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: new curves.Interval.new(0.0, 0.4, {curve: curves.Curves.easeOut})}));
      }
      this[_slideOut] = new tweens.AlignmentTween.new({begin: new alignment.Alignment.new(-1.0, 0.0), end: new alignment.Alignment.new(-1.0, 1.0)}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: new curves.Interval.new(0.7, 1.0, {curve: curves.Curves.linear})}));
      this[_fadeOut$1] = (t5 = new (TweenOfdouble()).new({begin: 1.0, end: 0.0}).animate(new animations.CurvedAnimation.new({parent: this[_controller$2], curve: new curves.Interval.new(0.7, 1.0, {curve: curves.Curves.easeIn})})), t5.addStatusListener(dart.bind(this, _animationEndCallback$2)), t5);
      this[_controller$2].forward();
    }
    [_setPause$1]() {
      let isLast = this[_index$2] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$2] = true;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      if (this.widget.onNextBeforePause != null) dart.dsend(this.widget, 'onNextBeforePause', [this[_index$2], isLast]);
    }
    [_animationEndCallback$2](state) {
      if (dart.equals(state, animation.AnimationStatus.completed)) {
        this[_timer$1] = async.Timer.new(core.Duration._check(this[_texts$2][$_get](this[_index$2])[$_get]("pause")), dart.bind(this, _nextAnimation$2));
      }
    }
    [_onTap$1]() {
      let t5;
      let pause = null;
      if (dart.test(this.widget.displayFullTextOnTap)) {
        if (dart.test(this[_isCurrentlyPausing$2])) {
          t5 = this[_timer$1];
          t5 == null ? null : t5.cancel();
          this[_nextAnimation$2]();
        } else {
          pause = core.int._check(dart.dload(this[_texts$2][$_get](this[_index$2])[$_get]("pause"), 'inMilliseconds'));
          this[_controller$2].stop();
          this[_setPause$1]();
          this[_timer$1] = async.Timer.new(new core.Duration.new({milliseconds: pause}), dart.bind(this, _nextAnimation$2));
        }
      }
      if (this.widget.onTap != null) {
        this.widget.onTap();
      }
    }
  };
  (rotate._RotatingTextState.new = function() {
    this[_controller$2] = null;
    this[_transitionHeight] = null;
    this[_fadeIn$1] = null;
    this[_fadeOut$1] = null;
    this[_slideIn] = null;
    this[_slideOut] = null;
    this.textWidgetList = JSArrayOfWidget().of([]);
    this[_pause$2] = null;
    this[_texts$2] = JSArrayOfMap().of([]);
    this[_index$2] = null;
    this[_isCurrentlyPausing$2] = false;
    this[_timer$1] = null;
    this[_currentRepeatCount$2] = null;
    this[_duration$0] = null;
    rotate._RotatingTextState.__proto__.new.call(this);
    ;
  }).prototype = rotate._RotatingTextState.prototype;
  dart.addTypeTests(rotate._RotatingTextState);
  dart.setMethodSignature(rotate._RotatingTextState, () => ({
    __proto__: dart.getMethods(rotate._RotatingTextState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_nextAnimation$2]: dart.fnType(dart.void, []),
    [_setPause$1]: dart.fnType(dart.void, []),
    [_animationEndCallback$2]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTap$1]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(rotate._RotatingTextState, "package:animated_text_kit/src/rotate.dart");
  dart.setFieldSignature(rotate._RotatingTextState, () => ({
    __proto__: dart.getFields(rotate._RotatingTextState.__proto__),
    [_controller$2]: dart.fieldType(animation_controller.AnimationController),
    [_transitionHeight]: dart.fieldType(core.double),
    [_fadeIn$1]: dart.fieldType(animation.Animation),
    [_fadeOut$1]: dart.fieldType(animation.Animation),
    [_slideIn]: dart.fieldType(animation.Animation),
    [_slideOut]: dart.fieldType(animation.Animation),
    textWidgetList: dart.fieldType(core.List$(framework.Widget)),
    [_pause$2]: dart.fieldType(core.Duration),
    [_texts$2]: dart.fieldType(core.List$(core.Map)),
    [_index$2]: dart.fieldType(core.int),
    [_isCurrentlyPausing$2]: dart.fieldType(core.bool),
    [_timer$1]: dart.fieldType(async.Timer),
    [_currentRepeatCount$2]: dart.fieldType(core.int),
    [_duration$0]: dart.fieldType(core.Duration)
  }));
  var text$5 = dart.privateName(typer, "TyperAnimatedTextKit.text");
  var textStyle$5 = dart.privateName(typer, "TyperAnimatedTextKit.textStyle");
  var speed$1 = dart.privateName(typer, "TyperAnimatedTextKit.speed");
  var pause$4 = dart.privateName(typer, "TyperAnimatedTextKit.pause");
  var onTap$4 = dart.privateName(typer, "TyperAnimatedTextKit.onTap");
  var onFinished$4 = dart.privateName(typer, "TyperAnimatedTextKit.onFinished");
  var onNext$4 = dart.privateName(typer, "TyperAnimatedTextKit.onNext");
  var onNextBeforePause$4 = dart.privateName(typer, "TyperAnimatedTextKit.onNextBeforePause");
  var alignment$4 = dart.privateName(typer, "TyperAnimatedTextKit.alignment");
  var textAlign$4 = dart.privateName(typer, "TyperAnimatedTextKit.textAlign");
  var isRepeatingAnimation$4 = dart.privateName(typer, "TyperAnimatedTextKit.isRepeatingAnimation");
  var displayFullTextOnTap$3 = dart.privateName(typer, "TyperAnimatedTextKit.displayFullTextOnTap");
  var stopPauseOnTap$2 = dart.privateName(typer, "TyperAnimatedTextKit.stopPauseOnTap");
  typer.TyperAnimatedTextKit = class TyperAnimatedTextKit extends framework.StatefulWidget {
    get text() {
      return this[text$5];
    }
    set text(value) {
      super.text = value;
    }
    get textStyle() {
      return this[textStyle$5];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get speed() {
      return this[speed$1];
    }
    set speed(value) {
      super.speed = value;
    }
    get pause() {
      return this[pause$4];
    }
    set pause(value) {
      super.pause = value;
    }
    get onTap() {
      return this[onTap$4];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onFinished() {
      return this[onFinished$4];
    }
    set onFinished(value) {
      super.onFinished = value;
    }
    get onNext() {
      return this[onNext$4];
    }
    set onNext(value) {
      super.onNext = value;
    }
    get onNextBeforePause() {
      return this[onNextBeforePause$4];
    }
    set onNextBeforePause(value) {
      super.onNextBeforePause = value;
    }
    get alignment() {
      return this[alignment$4];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get textAlign() {
      return this[textAlign$4];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get isRepeatingAnimation() {
      return this[isRepeatingAnimation$4];
    }
    set isRepeatingAnimation(value) {
      super.isRepeatingAnimation = value;
    }
    get displayFullTextOnTap() {
      return this[displayFullTextOnTap$3];
    }
    set displayFullTextOnTap(value) {
      super.displayFullTextOnTap = value;
    }
    get stopPauseOnTap() {
      return this[stopPauseOnTap$2];
    }
    set stopPauseOnTap(value) {
      super.stopPauseOnTap = value;
    }
    createState() {
      return new typer._TyperState.new();
    }
  };
  (typer.TyperAnimatedTextKit.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onNext = opts && 'onNext' in opts ? opts.onNext : null;
    let onNextBeforePause = opts && 'onNextBeforePause' in opts ? opts.onNextBeforePause : null;
    let onFinished = opts && 'onFinished' in opts ? opts.onFinished : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C37 || CT.C37;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C38 || CT.C38;
    let isRepeatingAnimation = opts && 'isRepeatingAnimation' in opts ? opts.isRepeatingAnimation : true;
    let speed = opts && 'speed' in opts ? opts.speed : null;
    let pause = opts && 'pause' in opts ? opts.pause : null;
    let displayFullTextOnTap = opts && 'displayFullTextOnTap' in opts ? opts.displayFullTextOnTap : false;
    let stopPauseOnTap = opts && 'stopPauseOnTap' in opts ? opts.stopPauseOnTap : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$5] = text;
    this[textStyle$5] = textStyle;
    this[onTap$4] = onTap;
    this[onNext$4] = onNext;
    this[onNextBeforePause$4] = onNextBeforePause;
    this[onFinished$4] = onFinished;
    this[alignment$4] = alignment;
    this[textAlign$4] = textAlign;
    this[isRepeatingAnimation$4] = isRepeatingAnimation;
    this[speed$1] = speed;
    this[pause$4] = pause;
    this[displayFullTextOnTap$3] = displayFullTextOnTap;
    this[stopPauseOnTap$2] = stopPauseOnTap;
    typer.TyperAnimatedTextKit.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = typer.TyperAnimatedTextKit.prototype;
  dart.addTypeTests(typer.TyperAnimatedTextKit);
  dart.setMethodSignature(typer.TyperAnimatedTextKit, () => ({
    __proto__: dart.getMethods(typer.TyperAnimatedTextKit.__proto__),
    createState: dart.fnType(typer._TyperState, [])
  }));
  dart.setLibraryUri(typer.TyperAnimatedTextKit, "package:animated_text_kit/src/typer.dart");
  dart.setFieldSignature(typer.TyperAnimatedTextKit, () => ({
    __proto__: dart.getFields(typer.TyperAnimatedTextKit.__proto__),
    text: dart.finalFieldType(core.List),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    speed: dart.finalFieldType(core.Duration),
    pause: dart.finalFieldType(core.Duration),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onFinished: dart.finalFieldType(dart.fnType(dart.void, [])),
    onNext: dart.finalFieldType(core.Function),
    onNextBeforePause: dart.finalFieldType(core.Function),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    textAlign: dart.finalFieldType(ui.TextAlign),
    isRepeatingAnimation: dart.finalFieldType(core.bool),
    displayFullTextOnTap: dart.finalFieldType(core.bool),
    stopPauseOnTap: dart.finalFieldType(core.bool)
  }));
  var _controller$3 = dart.privateName(typer, "_controller");
  var _typingText = dart.privateName(typer, "_typingText");
  var _speed$0 = dart.privateName(typer, "_speed");
  var _pause$3 = dart.privateName(typer, "_pause");
  var _texts$3 = dart.privateName(typer, "_texts");
  var _index$3 = dart.privateName(typer, "_index");
  var _isCurrentlyPausing$3 = dart.privateName(typer, "_isCurrentlyPausing");
  var _timer$2 = dart.privateName(typer, "_timer");
  var _nextAnimation$3 = dart.privateName(typer, "_nextAnimation");
  var _onTap$2 = dart.privateName(typer, "_onTap");
  var C159;
  var C160;
  var C161;
  var C158;
  var C157;
  var C164;
  var C165;
  var C166;
  var C163;
  var C162;
  var C169;
  var C170;
  var C168;
  var C167;
  var C173;
  var C174;
  var C172;
  var C171;
  var _animationEndCallback$3 = dart.privateName(typer, "_animationEndCallback");
  var _setPause$2 = dart.privateName(typer, "_setPause");
  const State_TickerProviderStateMixin$36$4 = class State_TickerProviderStateMixin extends framework.State$(typer.TyperAnimatedTextKit) {};
  (State_TickerProviderStateMixin$36$4.new = function() {
    ticker_provider.TickerProviderStateMixin$(typer.TyperAnimatedTextKit)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36$4.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36$4.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36$4, ticker_provider.TickerProviderStateMixin$(typer.TyperAnimatedTextKit));
  typer._TyperState = class _TyperState extends State_TickerProviderStateMixin$36$4 {
    initState() {
      let t5, t5$;
      super.initState();
      this[_speed$0] = (t5 = this.widget.speed, t5 == null ? new core.Duration.new({milliseconds: 40}) : t5);
      this[_pause$3] = (t5$ = this.widget.pause, t5$ == null ? new core.Duration.new({milliseconds: 1000}) : t5$);
      this[_index$3] = -1;
      for (let i = 0; i < dart.notNull(this.widget.text[$length]); i = i + 1) {
        try {
          if (!dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["text"]))) dart.throw(new core.Error.new());
          this[_texts$3][$add](new _js_helper.LinkedMap.from(["text", dart.dsend(this.widget.text[$_get](i), '_get', ["text"]), "speed", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["speed"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["speed"]) : this[_speed$0], "pause", dart.dtest(dart.dsend(this.widget.text[$_get](i), 'containsKey', ["pause"])) ? dart.dsend(this.widget.text[$_get](i), '_get', ["pause"]) : this[_pause$3]]));
        } catch (e$) {
          let e = dart.getThrown(e$);
          this[_texts$3][$add](new _js_helper.LinkedMap.from(["text", this.widget.text[$_get](i), "speed", this[_speed$0], "pause", this[_pause$3]]));
        }
      }
      this[_nextAnimation$3]();
    }
    dispose() {
      let t6;
      if (this[_controller$3] != null) {
        t6 = this[_controller$3];
        t6.stop();
        t6.dispose();
        t6;
      }
      super.dispose();
    }
    build(context) {
      return new gesture_detector.GestureDetector.new({onTap: dart.bind(this, _onTap$2), child: dart.test(this[_isCurrentlyPausing$3]) || !dart.test(this[_controller$3].isAnimating) ? new text.Text.new(core.String._check(this[_texts$3][$_get](this[_index$3])[$_get]("text")), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C157 || CT.C157}) : new transitions.AnimatedBuilder.new({animation: this[_controller$3], builder: dart.fn((context, child) => {
            let offset = core.int._check(dart.dtest(dart.dsend(dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("text"), 'length'), '<', [this[_typingText].value])) ? dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("text"), 'length') : this[_typingText].value);
            return new text.Text.new(core.String._check(dart.dsend(this[_texts$3][$_get](this[_index$3])[$_get]("text"), 'substring', [0, offset])), {style: this.widget.textStyle, textAlign: this.widget.textAlign, $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
          }, BuildContextAndWidgetToText()), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171});
    }
    [_nextAnimation$3]() {
      let t6;
      let isLast = this[_index$3] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$3] = false;
      if (dart.notNull(this[_index$3]) > -1) {
        if (this.widget.onNext != null) dart.dsend(this.widget, 'onNext', [this[_index$3], isLast]);
      }
      if (isLast) {
        if (dart.test(this.widget.isRepeatingAnimation)) {
          this[_index$3] = 0;
        } else {
          if (this.widget.onFinished != null) this.widget.onFinished();
          return;
        }
      } else {
        this[_index$3] = dart.notNull(this[_index$3]) + 1;
      }
      if (this[_controller$3] != null) this[_controller$3].dispose();
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      this[_controller$3] = new animation_controller.AnimationController.new({duration: core.Duration._check(dart.dsend(this[_texts$3][$_get](this[_index$3])[$_get]("speed"), '*', [dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("text"), 'length')])), vsync: this});
      this[_typingText] = (t6 = new tween.StepTween.new({begin: 0, end: core.int._check(dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("text"), 'length'))}).animate(this[_controller$3]), t6.addStatusListener(dart.bind(this, _animationEndCallback$3)), t6);
      this[_controller$3].forward();
    }
    [_setPause$2]() {
      let isLast = this[_index$3] === dart.notNull(this.widget.text[$length]) - 1;
      this[_isCurrentlyPausing$3] = true;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
      if (this.widget.onNextBeforePause != null) dart.dsend(this.widget, 'onNextBeforePause', [this[_index$3], isLast]);
    }
    [_animationEndCallback$3](state) {
      if (dart.equals(state, animation.AnimationStatus.completed)) {
        this[_setPause$2]();
        this[_timer$2] = async.Timer.new(core.Duration._check(this[_texts$3][$_get](this[_index$3])[$_get]("pause")), dart.bind(this, _nextAnimation$3));
      }
    }
    [_onTap$2]() {
      let t6;
      let pause = null;
      let left = null;
      if (dart.test(this.widget.displayFullTextOnTap)) {
        if (dart.test(this[_isCurrentlyPausing$3])) {
          if (dart.test(this.widget.stopPauseOnTap)) {
            t6 = this[_timer$2];
            t6 == null ? null : t6.cancel();
            this[_nextAnimation$3]();
          }
        } else {
          pause = core.int._check(dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("pause"), 'inMilliseconds'));
          left = core.int._check(dart.dsend(dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("speed"), 'inMilliseconds'), '*', [dart.dsend(dart.dload(this[_texts$3][$_get](this[_index$3])[$_get]("text"), 'length'), '-', [this[_typingText].value])]));
          this[_controller$3].stop();
          this[_setPause$2]();
          this[_timer$2] = async.Timer.new(new core.Duration.new({milliseconds: math.max(core.int, pause, left)}), dart.bind(this, _nextAnimation$3));
        }
      }
      if (this.widget.onTap != null) {
        this.widget.onTap();
      }
    }
  };
  (typer._TyperState.new = function() {
    this[_controller$3] = null;
    this[_typingText] = null;
    this.textWidgetList = JSArrayOfWidget().of([]);
    this[_speed$0] = null;
    this[_pause$3] = null;
    this[_texts$3] = JSArrayOfMap().of([]);
    this[_index$3] = null;
    this[_isCurrentlyPausing$3] = false;
    this[_timer$2] = null;
    typer._TyperState.__proto__.new.call(this);
    ;
  }).prototype = typer._TyperState.prototype;
  dart.addTypeTests(typer._TyperState);
  dart.setMethodSignature(typer._TyperState, () => ({
    __proto__: dart.getMethods(typer._TyperState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_nextAnimation$3]: dart.fnType(dart.void, []),
    [_setPause$2]: dart.fnType(dart.void, []),
    [_animationEndCallback$3]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTap$2]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(typer._TyperState, "package:animated_text_kit/src/typer.dart");
  dart.setFieldSignature(typer._TyperState, () => ({
    __proto__: dart.getFields(typer._TyperState.__proto__),
    [_controller$3]: dart.fieldType(animation_controller.AnimationController),
    [_typingText]: dart.fieldType(animation.Animation),
    textWidgetList: dart.fieldType(core.List$(framework.Widget)),
    [_speed$0]: dart.fieldType(core.Duration),
    [_pause$3]: dart.fieldType(core.Duration),
    [_texts$3]: dart.fieldType(core.List$(core.Map)),
    [_index$3]: dart.fieldType(core.int),
    [_isCurrentlyPausing$3]: dart.fieldType(core.bool),
    [_timer$2]: dart.fieldType(async.Timer)
  }));
  dart.trackLibraries("packages/animated_text_kit/animated_text_kit", {
    "package:animated_text_kit/animated_text_kit.dart": animated_text_kit,
    "package:animated_text_kit/src/text_liquid_fill.dart": text_liquid_fill,
    "package:animated_text_kit/src/scale.dart": scale,
    "package:animated_text_kit/src/colorize.dart": colorize,
    "package:animated_text_kit/src/fade.dart": fade,
    "package:animated_text_kit/src/typewriter.dart": typewriter,
    "package:animated_text_kit/src/rotate.dart": rotate,
    "package:animated_text_kit/src/typer.dart": typer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/text_liquid_fill.dart","src/scale.dart","src/colorize.dart","src/fade.dart","src/typewriter.dart","src/rotate.dart","src/typer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"animated_text_kit.ddc.js"}');
  // Exports:
  return {
    animated_text_kit: animated_text_kit,
    src__text_liquid_fill: text_liquid_fill,
    src__scale: scale,
    src__colorize: colorize,
    src__fade: fade,
    src__typewriter: typewriter,
    src__rotate: rotate,
    src__typer: typer
  };
});

//# sourceMappingURL=animated_text_kit.ddc.js.map
