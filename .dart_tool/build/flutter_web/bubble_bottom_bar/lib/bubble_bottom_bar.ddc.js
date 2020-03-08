define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/animation/animation', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__animation__animation, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const animated_cross_fade = packages__flutter__src__widgets__actions.src__widgets__animated_cross_fade;
  const icon_theme = packages__flutter__src__widgets__actions.src__widgets__icon_theme;
  const icon_theme_data = packages__flutter__src__widgets__actions.src__widgets__icon_theme_data;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const spacer = packages__flutter__src__widgets__actions.src__widgets__spacer;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const debug = packages__flutter__src__widgets__actions.src__widgets__debug;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const notched_shapes = packages__flutter__src__painting___network_image_web.src__painting__notched_shapes;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const theme = packages__flutter__material.src__material__theme;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const material = packages__flutter__material.src__material__material;
  const debug$ = packages__flutter__material.src__material__debug;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  var bubble_bottom_bar = Object.create(dart.library);
  var $length = dartx.length;
  var $every = dartx.every;
  var $round = dartx.round;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $insert = dartx.insert;
  var BubbleBottomBarItemTobool = () => (BubbleBottomBarItemTobool = dart.constFn(dart.fnType(core.bool, [bubble_bottom_bar.BubbleBottomBarItem])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var JSArrayOfAnimationController = () => (JSArrayOfAnimationController = dart.constFn(_interceptors.JSArray$(animation_controller.AnimationController)))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  var ListOfAnimationController = () => (ListOfAnimationController = dart.constFn(core.List$(animation_controller.AnimationController)))();
  var intToAnimationController = () => (intToAnimationController = dart.constFn(dart.fnType(animation_controller.AnimationController, [core.int])))();
  var ListOfCurvedAnimation = () => (ListOfCurvedAnimation = dart.constFn(core.List$(animations.CurvedAnimation)))();
  var intToCurvedAnimation = () => (intToCurvedAnimation = dart.constFn(dart.fnType(animations.CurvedAnimation, [core.int])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: bubble_bottom_bar.BubbleBottomBarFabLocation.prototype,
        [_name$]: "BubbleBottomBarFabLocation.end",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: bubble_bottom_bar.BubbleBottomBarFabLocation.prototype,
        [_name$]: "BubbleBottomBarFabLocation.center",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], bubble_bottom_bar.BubbleBottomBarFabLocation);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "item",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colorTween",
        [_Location_column]: 23,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 23,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 23,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 23,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "item",
        [_Location_column]: 23,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C16() {
      return C16 = dart.constList([], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 136,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "firstChild",
        [_Location_column]: 23,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondChild",
        [_Location_column]: 23,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 23,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sizeCurve",
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "firstCurve",
        [_Location_column]: 23,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "secondCurve",
        [_Location_column]: 23,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossFadeState",
        [_Location_column]: 23,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "containedInkWell",
        [_Location_column]: 15,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 15,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "splashColor",
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "highlightColor",
        [_Location_column]: 15,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 15,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "container",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "header",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 9,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 7,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alwaysIncludeSemantics",
        [_Location_column]: 11,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 7,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "item",
        [_Location_column]: 23,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 18,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 22,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 18,
        [_Location_line]: 333,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 337,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selected",
        [_Location_column]: 11,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "indexLabel",
        [_Location_column]: 11,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "ink",
        [_Location_column]: 11,
        [_Location_line]: 341,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inkColor",
        [_Location_column]: 11,
        [_Location_line]: 342,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91, C92 || CT.C92, C93 || CT.C93, C94 || CT.C94, C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 329,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 13,
        [_Location_line]: 350,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 349,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 359,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "context",
        [_Location_column]: 15,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "removeBottom",
        [_Location_column]: 15,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109, C110 || CT.C110], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 382,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 376,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "type",
        [_Location_column]: 11,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 372,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 374,
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
        [_Location_column]: 14,
        [_Location_line]: 371,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 371,
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
        [_Location_line]: 367,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 403,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipper",
        [_Location_column]: 17,
        [_Location_line]: 407,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 412,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 402,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 415,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 416,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 419,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 17,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137, C138 || CT.C138], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 414,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "explicitChildNodes",
        [_Location_column]: 9,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 401,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 399,
        [_Location_file]: "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart"
      });
    }
  });
  var _name$ = dart.privateName(bubble_bottom_bar, "_name");
  var C0;
  var C1;
  var C2;
  bubble_bottom_bar.BubbleBottomBarFabLocation = class BubbleBottomBarFabLocation extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (bubble_bottom_bar.BubbleBottomBarFabLocation.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = bubble_bottom_bar.BubbleBottomBarFabLocation.prototype;
  dart.addTypeTests(bubble_bottom_bar.BubbleBottomBarFabLocation);
  dart.setLibraryUri(bubble_bottom_bar.BubbleBottomBarFabLocation, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar.BubbleBottomBarFabLocation, () => ({
    __proto__: dart.getFields(bubble_bottom_bar.BubbleBottomBarFabLocation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(bubble_bottom_bar.BubbleBottomBarFabLocation, ['toString']);
  bubble_bottom_bar.BubbleBottomBarFabLocation.end = C0 || CT.C0;
  bubble_bottom_bar.BubbleBottomBarFabLocation.center = C1 || CT.C1;
  bubble_bottom_bar.BubbleBottomBarFabLocation.values = C2 || CT.C2;
  var items$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.items");
  var onTap$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.onTap");
  var currentIndex$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.currentIndex");
  var iconSize$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.iconSize");
  var opacity$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.opacity");
  var borderRadius$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.borderRadius");
  var elevation$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.elevation");
  var backgroundColor$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.backgroundColor");
  var hasNotch$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.hasNotch");
  var hasInk$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.hasInk");
  var fabLocation$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.fabLocation");
  var inkColor$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBar.inkColor");
  bubble_bottom_bar.BubbleBottomBar = class BubbleBottomBar extends framework.StatefulWidget {
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get currentIndex() {
      return this[currentIndex$];
    }
    set currentIndex(value) {
      this[currentIndex$] = value;
    }
    get iconSize() {
      return this[iconSize$];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get hasNotch() {
      return this[hasNotch$];
    }
    set hasNotch(value) {
      super.hasNotch = value;
    }
    get hasInk() {
      return this[hasInk$];
    }
    set hasInk(value) {
      super.hasInk = value;
    }
    get fabLocation() {
      return this[fabLocation$];
    }
    set fabLocation(value) {
      super.fabLocation = value;
    }
    get inkColor() {
      return this[inkColor$];
    }
    set inkColor(value) {
      super.inkColor = value;
    }
    createState() {
      return new bubble_bottom_bar._BottomNavigationBarState.new();
    }
  };
  (bubble_bottom_bar.BubbleBottomBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let items = opts && 'items' in opts ? opts.items : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let currentIndex = opts && 'currentIndex' in opts ? opts.currentIndex : 0;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : 24;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let hasNotch = opts && 'hasNotch' in opts ? opts.hasNotch : false;
    let hasInk = opts && 'hasInk' in opts ? opts.hasInk : false;
    let inkColor = opts && 'inkColor' in opts ? opts.inkColor : null;
    let fabLocation = opts && 'fabLocation' in opts ? opts.fabLocation : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[items$] = items;
    this[onTap$] = onTap;
    this[currentIndex$] = currentIndex;
    this[opacity$] = opacity;
    this[iconSize$] = iconSize;
    this[borderRadius$] = borderRadius;
    this[elevation$] = elevation;
    this[backgroundColor$] = backgroundColor;
    this[hasNotch$] = hasNotch;
    this[hasInk$] = hasInk;
    this[inkColor$] = inkColor;
    this[fabLocation$] = fabLocation;
    if (!(items != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 28, 16, "items != null");
    if (!(dart.notNull(items[$length]) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 29, 16, "items.length >= 2");
    if (!dart.equals(items[$every](dart.fn(item => item.title != null, BubbleBottomBarItemTobool())), true)) dart.assertFailed("Every item must have a non-null title", "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 31, 13, "items.every((BubbleBottomBarItem item) => item.title != null) ==\n                true");
    if (!(0 <= dart.notNull(currentIndex) && dart.notNull(currentIndex) < dart.notNull(items[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 34, 16, "0 <= currentIndex && currentIndex < items.length");
    if (!(iconSize != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 35, 16, "iconSize != null");
    bubble_bottom_bar.BubbleBottomBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bubble_bottom_bar.BubbleBottomBar.prototype;
  dart.addTypeTests(bubble_bottom_bar.BubbleBottomBar);
  dart.setMethodSignature(bubble_bottom_bar.BubbleBottomBar, () => ({
    __proto__: dart.getMethods(bubble_bottom_bar.BubbleBottomBar.__proto__),
    createState: dart.fnType(bubble_bottom_bar._BottomNavigationBarState, [])
  }));
  dart.setLibraryUri(bubble_bottom_bar.BubbleBottomBar, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar.BubbleBottomBar, () => ({
    __proto__: dart.getFields(bubble_bottom_bar.BubbleBottomBar.__proto__),
    items: dart.finalFieldType(core.List$(bubble_bottom_bar.BubbleBottomBarItem)),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [core.int])),
    currentIndex: dart.fieldType(core.int),
    iconSize: dart.finalFieldType(core.double),
    opacity: dart.finalFieldType(core.double),
    borderRadius: dart.finalFieldType(border_radius.BorderRadius),
    elevation: dart.finalFieldType(core.double),
    backgroundColor: dart.finalFieldType(ui.Color),
    hasNotch: dart.finalFieldType(core.bool),
    hasInk: dart.finalFieldType(core.bool),
    fabLocation: dart.finalFieldType(bubble_bottom_bar.BubbleBottomBarFabLocation),
    inkColor: dart.finalFieldType(ui.Color)
  }));
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C5;
  var C6;
  var C7;
  var C4;
  var C3;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C9;
  var C8;
  var C16;
  var C15;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C18;
  var C17;
  var C29;
  var C30;
  var C31;
  var C32;
  var C28;
  var C27;
  var C35;
  var C36;
  var C37;
  var C34;
  var C33;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C39;
  var C38;
  var C48;
  var C47;
  var C46;
  var C51;
  var C50;
  var C49;
  var C54;
  var C55;
  var C56;
  var C57;
  var C53;
  var C52;
  var C60;
  var C61;
  var C59;
  var C58;
  var item$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.item");
  var animation$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.animation");
  var iconSize$0 = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.iconSize");
  var onTap$0 = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.onTap");
  var colorTween$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.colorTween");
  var flex$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.flex");
  var selected$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.selected");
  var indexLabel$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.indexLabel");
  var opacity$0 = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.opacity");
  var ink$ = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.ink");
  var inkColor$0 = dart.privateName(bubble_bottom_bar, "_BottomNavigationTile.inkColor");
  bubble_bottom_bar._BottomNavigationTile = class _BottomNavigationTile extends framework.StatelessWidget {
    get item() {
      return this[item$];
    }
    set item(value) {
      super.item = value;
    }
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get iconSize() {
      return this[iconSize$0];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get onTap() {
      return this[onTap$0];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get colorTween() {
      return this[colorTween$];
    }
    set colorTween(value) {
      super.colorTween = value;
    }
    get flex() {
      return this[flex$];
    }
    set flex(value) {
      super.flex = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      super.selected = value;
    }
    get indexLabel() {
      return this[indexLabel$];
    }
    set indexLabel(value) {
      super.indexLabel = value;
    }
    get opacity() {
      return this[opacity$0];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get ink() {
      return this[ink$];
    }
    set ink(value) {
      super.ink = value;
    }
    get inkColor() {
      return this[inkColor$0];
    }
    set inkColor(value) {
      super.inkColor = value;
    }
    build(context) {
      let size = null;
      let label = null;
      size = (dart.notNull(this.flex) * 1000.0)[$round]();
      label = new bubble_bottom_bar._Label.new({animation: this.animation, item: this.item, color: this.item.backgroundColor, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      return new basic.Expanded.new({flex: size, child: new basic.Semantics.new({container: true, header: true, selected: this.selected, child: new basic.Stack.new({children: JSArrayOfWidget().of([new ink_well.InkResponse.new({borderRadius: new border_radius.BorderRadius.horizontal({right: new ui.Radius.circular(50.0), left: new ui.Radius.circular(50.0)}), containedInkWell: true, onTap: this.onTap, splashColor: dart.test(this.ink) ? this.inkColor != null ? this.inkColor : theme.Theme.of(context).splashColor : colors.Colors.transparent, highlightColor: colors.Colors.transparent, child: new container.Container.new({height: 48.0, decoration: new box_decoration.BoxDecoration.new({color: dart.test(this.selected) ? this.item.backgroundColor.withOpacity(this.opacity) : colors.Colors.transparent, borderRadius: new border_radius.BorderRadius.horizontal({right: new ui.Radius.circular(50.0), left: new ui.Radius.circular(50.0)})}), child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: dart.test(this.selected) ? flex.MainAxisAlignment.spaceEvenly : flex.MainAxisAlignment.center, mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidget().of([new bubble_bottom_bar._TileIcon.new({colorTween: this.colorTween, animation: this.animation, iconSize: this.iconSize, selected: this.selected, item: this.item, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new animated_cross_fade.AnimatedCrossFade.new({alignment: new alignment.Alignment.new(0.0, 0.0), firstChild: label, secondChild: new container.Container.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), duration: new core.Duration.new({milliseconds: 200}), sizeCurve: curves.Curves.fastOutSlowIn, firstCurve: curves.Curves.fastOutSlowIn, secondCurve: curves.Curves.fastOutSlowIn.flipped, crossFadeState: dart.test(this.selected) ? animated_cross_fade.CrossFadeState.showFirst : animated_cross_fade.CrossFadeState.showSecond, $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), new basic.Semantics.new({label: this.indexLabel, $creationLocationd_0dea112b090073317d4: C46 || CT.C46})]), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (bubble_bottom_bar._BottomNavigationTile.new = function(item, opacity, animation, iconSize, opts) {
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let colorTween = opts && 'colorTween' in opts ? opts.colorTween : null;
    let flex = opts && 'flex' in opts ? opts.flex : null;
    let selected = opts && 'selected' in opts ? opts.selected : false;
    let indexLabel = opts && 'indexLabel' in opts ? opts.indexLabel : null;
    let ink = opts && 'ink' in opts ? opts.ink : false;
    let inkColor = opts && 'inkColor' in opts ? opts.inkColor : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[item$] = item;
    this[opacity$0] = opacity;
    this[animation$] = animation;
    this[iconSize$0] = iconSize;
    this[onTap$0] = onTap;
    this[colorTween$] = colorTween;
    this[flex$] = flex;
    this[selected$] = selected;
    this[indexLabel$] = indexLabel;
    this[ink$] = ink;
    this[inkColor$0] = inkColor;
    if (!(selected != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 65, 16, "selected != null");
    bubble_bottom_bar._BottomNavigationTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bubble_bottom_bar._BottomNavigationTile.prototype;
  dart.addTypeTests(bubble_bottom_bar._BottomNavigationTile);
  dart.setMethodSignature(bubble_bottom_bar._BottomNavigationTile, () => ({
    __proto__: dart.getMethods(bubble_bottom_bar._BottomNavigationTile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bubble_bottom_bar._BottomNavigationTile, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar._BottomNavigationTile, () => ({
    __proto__: dart.getFields(bubble_bottom_bar._BottomNavigationTile.__proto__),
    item: dart.finalFieldType(bubble_bottom_bar.BubbleBottomBarItem),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    iconSize: dart.finalFieldType(core.double),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    colorTween: dart.finalFieldType(tween.ColorTween),
    flex: dart.finalFieldType(core.double),
    selected: dart.finalFieldType(core.bool),
    indexLabel: dart.finalFieldType(core.String),
    opacity: dart.finalFieldType(core.double),
    ink: dart.finalFieldType(core.bool),
    inkColor: dart.finalFieldType(ui.Color)
  }));
  var C64;
  var C65;
  var C63;
  var C62;
  var C68;
  var C67;
  var C66;
  var C71;
  var C72;
  var C73;
  var C70;
  var C69;
  var colorTween$0 = dart.privateName(bubble_bottom_bar, "_TileIcon.colorTween");
  var animation$0 = dart.privateName(bubble_bottom_bar, "_TileIcon.animation");
  var iconSize$1 = dart.privateName(bubble_bottom_bar, "_TileIcon.iconSize");
  var selected$0 = dart.privateName(bubble_bottom_bar, "_TileIcon.selected");
  var item$0 = dart.privateName(bubble_bottom_bar, "_TileIcon.item");
  bubble_bottom_bar._TileIcon = class _TileIcon extends framework.StatelessWidget {
    get colorTween() {
      return this[colorTween$0];
    }
    set colorTween(value) {
      super.colorTween = value;
    }
    get animation() {
      return this[animation$0];
    }
    set animation(value) {
      super.animation = value;
    }
    get iconSize() {
      return this[iconSize$1];
    }
    set iconSize(value) {
      super.iconSize = value;
    }
    get selected() {
      return this[selected$0];
    }
    set selected(value) {
      super.selected = value;
    }
    get item() {
      return this[item$0];
    }
    set item(value) {
      super.item = value;
    }
    build(context) {
      let iconColor = null;
      iconColor = colors.Colors.white;
      return new basic.Align.new({alignment: alignment.Alignment.topCenter, heightFactor: 1.0, child: new container.Container.new({child: new icon_theme.IconTheme.new({data: new icon_theme_data.IconThemeData.new({color: dart.test(this.selected) ? this.item.backgroundColor : iconColor, size: this.iconSize}), child: dart.test(this.selected) ? this.item.activeIcon : this.item.icon, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69});
    }
  };
  (bubble_bottom_bar._TileIcon.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let colorTween = opts && 'colorTween' in opts ? opts.colorTween : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let iconSize = opts && 'iconSize' in opts ? opts.iconSize : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[colorTween$0] = colorTween;
    this[animation$0] = animation;
    this[iconSize$1] = iconSize;
    this[selected$0] = selected;
    this[item$0] = item;
    bubble_bottom_bar._TileIcon.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bubble_bottom_bar._TileIcon.prototype;
  dart.addTypeTests(bubble_bottom_bar._TileIcon);
  dart.setMethodSignature(bubble_bottom_bar._TileIcon, () => ({
    __proto__: dart.getMethods(bubble_bottom_bar._TileIcon.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bubble_bottom_bar._TileIcon, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar._TileIcon, () => ({
    __proto__: dart.getFields(bubble_bottom_bar._TileIcon.__proto__),
    colorTween: dart.finalFieldType(tween.ColorTween),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    iconSize: dart.finalFieldType(core.double),
    selected: dart.finalFieldType(core.bool),
    item: dart.finalFieldType(bubble_bottom_bar.BubbleBottomBarItem)
  }));
  var C76;
  var C77;
  var C78;
  var C75;
  var C74;
  var C81;
  var C80;
  var C79;
  var C84;
  var C85;
  var C86;
  var C83;
  var C82;
  bubble_bottom_bar._Label = class _Label extends framework.StatelessWidget {
    build(context) {
      return new basic.Align.new({alignment: alignment.Alignment.center, heightFactor: 1.0, child: new container.Container.new({child: new transitions.FadeTransition.new({alwaysIncludeSemantics: true, opacity: this.animation, child: text.DefaultTextStyle.merge({style: new text_style.TextStyle.new({fontSize: 14, fontWeight: ui.FontWeight.w600, color: this.color}), child: this.item.title}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82});
    }
  };
  (bubble_bottom_bar._Label.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let item = opts && 'item' in opts ? opts.item : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.animation = animation;
    this.item = item;
    this.color = color;
    bubble_bottom_bar._Label.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bubble_bottom_bar._Label.prototype;
  dart.addTypeTests(bubble_bottom_bar._Label);
  dart.setMethodSignature(bubble_bottom_bar._Label, () => ({
    __proto__: dart.getMethods(bubble_bottom_bar._Label.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bubble_bottom_bar._Label, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar._Label, () => ({
    __proto__: dart.getFields(bubble_bottom_bar._Label.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    item: dart.finalFieldType(bubble_bottom_bar.BubbleBottomBarItem),
    color: dart.finalFieldType(ui.Color)
  }));
  var _controllers = dart.privateName(bubble_bottom_bar, "_controllers");
  var _animations = dart.privateName(bubble_bottom_bar, "_animations");
  var _backgroundColor = dart.privateName(bubble_bottom_bar, "_backgroundColor");
  var _flexTween = dart.privateName(bubble_bottom_bar, "_flexTween");
  var _rebuild = dart.privateName(bubble_bottom_bar, "_rebuild");
  var _resetState = dart.privateName(bubble_bottom_bar, "_resetState");
  var _evaluateFlex = dart.privateName(bubble_bottom_bar, "_evaluateFlex");
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C88;
  var C87;
  var C101;
  var C100;
  var C99;
  var _createTiles = dart.privateName(bubble_bottom_bar, "_createTiles");
  var C104;
  var C105;
  var C103;
  var C102;
  var _createContainer = dart.privateName(bubble_bottom_bar, "_createContainer");
  var C108;
  var C109;
  var C110;
  var C107;
  var C106;
  var C113;
  var C114;
  var C112;
  var C111;
  var C117;
  var C118;
  var C116;
  var C115;
  var C121;
  var C122;
  var C120;
  var C119;
  var C125;
  var C126;
  var C124;
  var C123;
  var _inner = dart.privateName(bubble_bottom_bar, "_inner");
  var C129;
  var C130;
  var C131;
  var C132;
  var C128;
  var C127;
  var C135;
  var C136;
  var C137;
  var C138;
  var C134;
  var C133;
  var C141;
  var C142;
  var C140;
  var C139;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(bubble_bottom_bar.BubbleBottomBar) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(bubble_bottom_bar.BubbleBottomBar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(bubble_bottom_bar.BubbleBottomBar));
  bubble_bottom_bar._BottomNavigationBarState = class _BottomNavigationBarState extends State_TickerProviderStateMixin$36 {
    didChangeDependencies() {
      super.didChangeDependencies();
      this.geometryListenable = scaffold.Scaffold.geometryOf(this.context);
      this[_flexTween] = dart.test(this.widget.hasNotch) ? new (TweenOfdouble()).new({begin: 1.15, end: 2.0}) : new (TweenOfdouble()).new({begin: 1.15, end: 1.75});
    }
    [_resetState]() {
      for (let controller of this[_controllers])
        controller.dispose();
      this[_controllers] = ListOfAnimationController().generate(this.widget.items[$length], dart.fn(index => {
        let t0;
        t0 = new animation_controller.AnimationController.new({duration: new core.Duration.new({milliseconds: 200}), vsync: this});
        t0.addListener(dart.bind(this, _rebuild));
        return t0;
      }, intToAnimationController()));
      this[_animations] = ListOfCurvedAnimation().generate(this.widget.items[$length], dart.fn(index => new animations.CurvedAnimation.new({parent: this[_controllers][$_get](index), curve: curves.Curves.fastOutSlowIn, reverseCurve: curves.Curves.fastOutSlowIn.flipped}), intToCurvedAnimation()));
      this[_controllers][$_get](this.widget.currentIndex).value = 1.0;
      this[_backgroundColor] = this.widget.items[$_get](this.widget.currentIndex).backgroundColor;
    }
    initState() {
      super.initState();
      this[_resetState]();
    }
    [_rebuild]() {
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    dispose() {
      for (let controller of this[_controllers])
        controller.dispose();
      super.dispose();
    }
    [_evaluateFlex](animation) {
      return this[_flexTween].evaluate(animation);
    }
    didUpdateWidget(oldWidget) {
      bubble_bottom_bar.BubbleBottomBar._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.items[$length] != oldWidget.items[$length]) {
        this[_resetState]();
        return;
      }
      if (this.widget.currentIndex != oldWidget.currentIndex) {
        this[_controllers][$_get](oldWidget.currentIndex).reverse();
        this[_controllers][$_get](this.widget.currentIndex).forward();
        if (dart.equals(this.widget.fabLocation, bubble_bottom_bar.BubbleBottomBarFabLocation.center)) {
          let _currentItem = this.widget.items[$_get](oldWidget.currentIndex);
          let _nextItem = this.widget.items[$_get](this.widget.currentIndex);
          this.widget.items[$_set](0, _nextItem);
          this.widget.items[$_set](this.widget.currentIndex, _currentItem);
          this[_controllers][$_get](oldWidget.currentIndex).reverse();
          this[_controllers][$_get](this.widget.currentIndex).forward();
          this.widget.currentIndex = 0;
          this[_resetState]();
        }
      } else {
        if (!dart.equals(this[_backgroundColor], this.widget.items[$_get](this.widget.currentIndex).backgroundColor)) this[_backgroundColor] = this.widget.items[$_get](this.widget.currentIndex).backgroundColor;
      }
    }
    [_createTiles]() {
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      if (!(localizations != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 325, 12, "localizations != null");
      let children = JSArrayOfWidget().of([]);
      for (let i = 0; i < dart.notNull(this.widget.items[$length]); i = i + 1) {
        children[$add](new bubble_bottom_bar._BottomNavigationTile.new(this.widget.items[$_get](i), this.widget.opacity, this[_animations][$_get](i), this.widget.iconSize, {onTap: dart.fn(() => {
            if (this.widget.onTap != null) this.widget.onTap(i);
          }, VoidToNull()), flex: this[_evaluateFlex](this[_animations][$_get](i)), selected: i === this.widget.currentIndex, indexLabel: localizations.tabLabel({tabIndex: i + 1, tabCount: this.widget.items[$length]}), ink: this.widget.hasInk, inkColor: this.widget.inkColor, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}));
      }
      if (dart.equals(this.widget.fabLocation, bubble_bottom_bar.BubbleBottomBarFabLocation.center)) {
        children[$insert](1, new spacer.Spacer.new({flex: 1500, $creationLocationd_0dea112b090073317d4: C99 || CT.C99}));
      }
      return children;
    }
    [_createContainer](tiles) {
      return text.DefaultTextStyle.merge({overflow: paragraph.TextOverflow.ellipsis, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: tiles, $creationLocationd_0dea112b090073317d4: C102 || CT.C102})});
    }
    [_inner](additionalBottomPadding) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 10.0}), child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minHeight: 56 + dart.notNull(additionalBottomPadding)}), child: new material.Material.new({type: material.MaterialType.transparency, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({bottom: additionalBottomPadding, right: dart.equals(this.widget.fabLocation, bubble_bottom_bar.BubbleBottomBarFabLocation.end) ? 72.0 : 0.0}), child: media_query.MediaQuery.removePadding({context: this.context, removeBottom: true, child: this[_createContainer](this[_createTiles]()), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C123 || CT.C123});
    }
    build(context) {
      if (!dart.test(debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 395, 12, "debugCheckHasDirectionality(context)");
      if (!dart.test(debug$.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 396, 12, "debugCheckHasMaterialLocalizations(context)");
      let additionalBottomPadding = math.max(core.double, dart.notNull(media_query.MediaQuery.of(context).padding.bottom) - 8, 0.0);
      return new basic.Semantics.new({explicitChildNodes: true, child: dart.test(this.widget.hasNotch) ? new basic.PhysicalShape.new({elevation: this.widget.elevation != null ? this.widget.elevation : 8.0, color: this.widget.backgroundColor != null ? this.widget.backgroundColor : colors.Colors.white, clipper: new bubble_bottom_bar._BubbleBottomBarClipper.new({shape: new notched_shapes.CircularNotchedRectangle.new(), geometry: this.geometryListenable, notchMargin: 8.0}), child: this[_inner](additionalBottomPadding), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}) : new material.Material.new({elevation: this.widget.elevation != null ? this.widget.elevation : 8.0, color: this.widget.backgroundColor != null ? this.widget.backgroundColor : colors.Colors.white, child: this[_inner](additionalBottomPadding), borderRadius: this.widget.borderRadius != null ? this.widget.borderRadius : border_radius.BorderRadius.zero, $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), $creationLocationd_0dea112b090073317d4: C139 || CT.C139});
    }
  };
  (bubble_bottom_bar._BottomNavigationBarState.new = function() {
    this[_controllers] = JSArrayOfAnimationController().of([]);
    this[_animations] = null;
    this[_backgroundColor] = null;
    this.geometryListenable = null;
    this.fabExists = false;
    this.holder = null;
    this[_flexTween] = null;
    bubble_bottom_bar._BottomNavigationBarState.__proto__.new.call(this);
    ;
  }).prototype = bubble_bottom_bar._BottomNavigationBarState.prototype;
  dart.addTypeTests(bubble_bottom_bar._BottomNavigationBarState);
  dart.setMethodSignature(bubble_bottom_bar._BottomNavigationBarState, () => ({
    __proto__: dart.getMethods(bubble_bottom_bar._BottomNavigationBarState.__proto__),
    [_resetState]: dart.fnType(dart.void, []),
    [_rebuild]: dart.fnType(dart.void, []),
    [_evaluateFlex]: dart.fnType(core.double, [animation.Animation$(core.double)]),
    [_createTiles]: dart.fnType(core.List$(framework.Widget), []),
    [_createContainer]: dart.fnType(framework.Widget, [core.List$(framework.Widget)]),
    [_inner]: dart.fnType(framework.Widget, [core.double]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bubble_bottom_bar._BottomNavigationBarState, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar._BottomNavigationBarState, () => ({
    __proto__: dart.getFields(bubble_bottom_bar._BottomNavigationBarState.__proto__),
    [_controllers]: dart.fieldType(core.List$(animation_controller.AnimationController)),
    [_animations]: dart.fieldType(core.List$(animations.CurvedAnimation)),
    [_backgroundColor]: dart.fieldType(ui.Color),
    geometryListenable: dart.fieldType(change_notifier.ValueListenable$(scaffold.ScaffoldGeometry)),
    fabExists: dart.fieldType(core.bool),
    holder: dart.fieldType(bubble_bottom_bar.BubbleBottomBar),
    [_flexTween]: dart.fieldType(tween.Animatable$(core.double))
  }));
  var icon$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBarItem.icon");
  var activeIcon$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBarItem.activeIcon");
  var title$ = dart.privateName(bubble_bottom_bar, "BubbleBottomBarItem.title");
  var backgroundColor$0 = dart.privateName(bubble_bottom_bar, "BubbleBottomBarItem.backgroundColor");
  bubble_bottom_bar.BubbleBottomBarItem = class BubbleBottomBarItem extends core.Object {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get activeIcon() {
      return this[activeIcon$];
    }
    set activeIcon(value) {
      super.activeIcon = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
  };
  (bubble_bottom_bar.BubbleBottomBarItem.new = function(opts) {
    let t0;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let activeIcon = opts && 'activeIcon' in opts ? opts.activeIcon : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    this[icon$] = icon;
    this[title$] = title;
    this[backgroundColor$0] = backgroundColor;
    this[activeIcon$] = (t0 = activeIcon, t0 == null ? icon : t0);
    if (!(icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 434, 16, "icon != null");
    ;
  }).prototype = bubble_bottom_bar.BubbleBottomBarItem.prototype;
  dart.addTypeTests(bubble_bottom_bar.BubbleBottomBarItem);
  dart.setLibraryUri(bubble_bottom_bar.BubbleBottomBarItem, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar.BubbleBottomBarItem, () => ({
    __proto__: dart.getFields(bubble_bottom_bar.BubbleBottomBarItem.__proto__),
    icon: dart.finalFieldType(framework.Widget),
    activeIcon: dart.finalFieldType(framework.Widget),
    title: dart.finalFieldType(framework.Widget),
    backgroundColor: dart.finalFieldType(ui.Color)
  }));
  var geometry$ = dart.privateName(bubble_bottom_bar, "_BubbleBottomBarClipper.geometry");
  var shape$ = dart.privateName(bubble_bottom_bar, "_BubbleBottomBarClipper.shape");
  var notchMargin$ = dart.privateName(bubble_bottom_bar, "_BubbleBottomBarClipper.notchMargin");
  bubble_bottom_bar._BubbleBottomBarClipper = class _BubbleBottomBarClipper extends proxy_box.CustomClipper$(ui.Path) {
    get geometry() {
      return this[geometry$];
    }
    set geometry(value) {
      super.geometry = value;
    }
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get notchMargin() {
      return this[notchMargin$];
    }
    set notchMargin(value) {
      super.notchMargin = value;
    }
    getClip(size) {
      let t0, t0$;
      let button = (t0 = this.geometry.value.floatingActionButtonArea, t0 == null ? null : t0.translate(0.0, dart.notNull(this.geometry.value.bottomNavigationBarTop) * -1.0));
      return this.shape.getOuterPath(ui.Offset.zero['&'](size), (t0$ = button, t0$ == null ? null : t0$.inflate(this.notchMargin)));
    }
    shouldReclip(oldClipper) {
      bubble_bottom_bar._BubbleBottomBarClipper._check(oldClipper);
      return !dart.equals(oldClipper.geometry, this.geometry) || !dart.equals(oldClipper.shape, this.shape) || oldClipper.notchMargin != this.notchMargin;
    }
  };
  (bubble_bottom_bar._BubbleBottomBarClipper.new = function(opts) {
    let geometry = opts && 'geometry' in opts ? opts.geometry : null;
    let shape = opts && 'shape' in opts ? opts.shape : null;
    let notchMargin = opts && 'notchMargin' in opts ? opts.notchMargin : null;
    this[geometry$] = geometry;
    this[shape$] = shape;
    this[notchMargin$] = notchMargin;
    if (!(geometry != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 446, 16, "geometry != null");
    if (!(shape != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 447, 16, "shape != null");
    if (!(notchMargin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bubble_bottom_bar/bubble_bottom_bar.dart", 448, 16, "notchMargin != null");
    bubble_bottom_bar._BubbleBottomBarClipper.__proto__.new.call(this, {reclip: geometry});
    ;
  }).prototype = bubble_bottom_bar._BubbleBottomBarClipper.prototype;
  dart.addTypeTests(bubble_bottom_bar._BubbleBottomBarClipper);
  dart.setMethodSignature(bubble_bottom_bar._BubbleBottomBarClipper, () => ({
    __proto__: dart.getMethods(bubble_bottom_bar._BubbleBottomBarClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(bubble_bottom_bar._BubbleBottomBarClipper, "package:bubble_bottom_bar/bubble_bottom_bar.dart");
  dart.setFieldSignature(bubble_bottom_bar._BubbleBottomBarClipper, () => ({
    __proto__: dart.getFields(bubble_bottom_bar._BubbleBottomBarClipper.__proto__),
    geometry: dart.finalFieldType(change_notifier.ValueListenable$(scaffold.ScaffoldGeometry)),
    shape: dart.finalFieldType(notched_shapes.NotchedShape),
    notchMargin: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(bubble_bottom_bar, {
    /*bubble_bottom_bar._kActiveFontSize*/get _kActiveFontSize() {
      return 14;
    },
    /*bubble_bottom_bar._kBottomMargin*/get _kBottomMargin() {
      return 8;
    }
  });
  dart.trackLibraries("packages/bubble_bottom_bar/bubble_bottom_bar", {
    "package:bubble_bottom_bar/bubble_bottom_bar.dart": bubble_bottom_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bubble_bottom_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"bubble_bottom_bar.ddc.js"}');
  // Exports:
  return {
    bubble_bottom_bar: bubble_bottom_bar
  };
});

//# sourceMappingURL=bubble_bottom_bar.ddc.js.map
