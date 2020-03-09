define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/material', 'packages/flutter/src/animation/animation', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__material, packages__flutter__src__animation__animation, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scroll_controller = packages__flutter__src__widgets__actions.src__widgets__scroll_controller;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const notification_listener = packages__flutter__src__widgets__actions.src__widgets__notification_listener;
  const scroll_notification = packages__flutter__src__widgets__actions.src__widgets__scroll_notification;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  var draggable_scrollbar = Object.create(dart.library);
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  var ColorAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (ColorAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [ui.Color, AnimationOfdouble(), AnimationOfdouble(), core.double], {labelConstraints: box.BoxConstraints, labelText: text.Text}, {})))();
  var NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(notification_listener.NotificationListener$(scroll_notification.ScrollNotification)))();
  var ScrollNotificationToNull = () => (ScrollNotificationToNull = dart.constFn(dart.fnType(core.Null, [scroll_notification.ScrollNotification])))();
  var BuildContextAndBoxConstraintsToNotificationListenerOfScrollNotification = () => (BuildContextAndBoxConstraintsToNotificationListenerOfScrollNotification = dart.constFn(dart.fnType(NotificationListenerOfScrollNotification(), [framework.BuildContext, box.BoxConstraints])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var CustomClipperOfPath = () => (CustomClipperOfPath = dart.constFn(proxy_box.CustomClipper$(ui.Path)))();
  var BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])))();
  var TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 300000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 600000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 17,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 17,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 13,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 178,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "foregroundPainter",
        [_Location_column]: 9,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipper",
        [_Location_column]: 9,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 11,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 251,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 9,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        [BoxConstraints_maxHeight]: 28,
        [BoxConstraints_minHeight]: 28,
        [BoxConstraints_maxWidth]: 72,
        [BoxConstraints_minWidth]: 72
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 13,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 296,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 296,
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
        [_Location_column]: 14,
        [_Location_line]: 294,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 294,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 386,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 396,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 397,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 394,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragStart",
        [_Location_column]: 15,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragUpdate",
        [_Location_column]: 15,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onVerticalDragEnd",
        [_Location_column]: 15,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 390,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 389,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 9,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 377,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 376,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C99() {
      return C99 = dart.constList([], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 61,
        [_Location_line]: 618,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 625,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 626,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 624,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 9,
        [_Location_line]: 620,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 624,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 619,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 618,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 619,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 616,
        [_Location_file]: "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart"
      });
    }
  });
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C0;
  var C1;
  var Color_value = dart.privateName(ui, "Color.value");
  var C2;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C5;
  var C6;
  var C7;
  var C8;
  var C4;
  var C3;
  var C11;
  var C12;
  var C13;
  var C10;
  var C9;
  var C16;
  var C17;
  var C15;
  var C14;
  var C20;
  var C19;
  var C18;
  var C23;
  var C24;
  var C25;
  var C26;
  var C22;
  var C21;
  var C29;
  var C30;
  var C31;
  var C28;
  var C27;
  var C34;
  var C35;
  var C36;
  var C33;
  var C32;
  var C39;
  var C40;
  var C38;
  var C37;
  var C43;
  var C42;
  var C41;
  var C46;
  var C47;
  var C48;
  var C49;
  var C45;
  var C44;
  var child$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.child");
  var scrollThumbBuilder$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.scrollThumbBuilder");
  var heightScrollThumb$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.heightScrollThumb");
  var backgroundColor$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.backgroundColor");
  var padding$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.padding");
  var scrollbarAnimationDuration$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.scrollbarAnimationDuration");
  var scrollbarTimeToFade$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.scrollbarTimeToFade");
  var labelTextBuilder$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.labelTextBuilder");
  var labelConstraints$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.labelConstraints");
  var controller$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.controller");
  var alwaysVisibleScrollThumb$ = dart.privateName(draggable_scrollbar, "DraggableScrollbar.alwaysVisibleScrollThumb");
  draggable_scrollbar.DraggableScrollbar = class DraggableScrollbar extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get scrollThumbBuilder() {
      return this[scrollThumbBuilder$];
    }
    set scrollThumbBuilder(value) {
      super.scrollThumbBuilder = value;
    }
    get heightScrollThumb() {
      return this[heightScrollThumb$];
    }
    set heightScrollThumb(value) {
      super.heightScrollThumb = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get scrollbarAnimationDuration() {
      return this[scrollbarAnimationDuration$];
    }
    set scrollbarAnimationDuration(value) {
      super.scrollbarAnimationDuration = value;
    }
    get scrollbarTimeToFade() {
      return this[scrollbarTimeToFade$];
    }
    set scrollbarTimeToFade(value) {
      super.scrollbarTimeToFade = value;
    }
    get labelTextBuilder() {
      return this[labelTextBuilder$];
    }
    set labelTextBuilder(value) {
      super.labelTextBuilder = value;
    }
    get labelConstraints() {
      return this[labelConstraints$];
    }
    set labelConstraints(value) {
      super.labelConstraints = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get alwaysVisibleScrollThumb() {
      return this[alwaysVisibleScrollThumb$];
    }
    set alwaysVisibleScrollThumb(value) {
      super.alwaysVisibleScrollThumb = value;
    }
    createState() {
      return new draggable_scrollbar._DraggableScrollbarState.new();
    }
    static buildScrollThumbAndLabel(opts) {
      let scrollThumb = opts && 'scrollThumb' in opts ? opts.scrollThumb : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let thumbAnimation = opts && 'thumbAnimation' in opts ? opts.thumbAnimation : null;
      let labelAnimation = opts && 'labelAnimation' in opts ? opts.labelAnimation : null;
      let labelText = opts && 'labelText' in opts ? opts.labelText : null;
      let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
      let alwaysVisibleScrollThumb = opts && 'alwaysVisibleScrollThumb' in opts ? opts.alwaysVisibleScrollThumb : null;
      let scrollThumbAndLabel = labelText == null ? scrollThumb : new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.end, children: JSArrayOfWidget().of([new draggable_scrollbar.ScrollLabel.new({animation: labelAnimation, child: labelText, backgroundColor: backgroundColor, constraints: labelConstraints, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), scrollThumb]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
      if (dart.test(alwaysVisibleScrollThumb)) {
        return scrollThumbAndLabel;
      }
      return new draggable_scrollbar.SlideFadeTransition.new({animation: thumbAnimation, child: scrollThumbAndLabel, $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    static _thumbSemicircleBuilder(width, scrollThumbKey, alwaysVisibleScrollThumb) {
      return dart.fn((backgroundColor, thumbAnimation, labelAnimation, height, opts) => {
        let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
        let labelText = opts && 'labelText' in opts ? opts.labelText : null;
        let scrollThumb = new basic.CustomPaint.new({key: scrollThumbKey, foregroundPainter: new draggable_scrollbar.ArrowCustomPainter.new(colors.Colors.grey), child: new material.Material.new({elevation: 4.0, child: new container.Container.new({constraints: new box.BoxConstraints.tight(new ui.Size.new(width, height)), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), color: backgroundColor, borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(height), bottomLeft: new ui.Radius.circular(height), topRight: new ui.Radius.circular(4.0), bottomRight: new ui.Radius.circular(4.0)}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
        return framework.Widget._check(draggable_scrollbar.DraggableScrollbar.buildScrollThumbAndLabel({scrollThumb: scrollThumb, backgroundColor: backgroundColor, thumbAnimation: thumbAnimation, labelAnimation: labelAnimation, labelText: labelText, labelConstraints: labelConstraints, alwaysVisibleScrollThumb: alwaysVisibleScrollThumb}));
      }, ColorAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    }
    static _thumbArrowBuilder(scrollThumbKey, alwaysVisibleScrollThumb) {
      return dart.fn((backgroundColor, thumbAnimation, labelAnimation, height, opts) => {
        let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
        let labelText = opts && 'labelText' in opts ? opts.labelText : null;
        let scrollThumb = new basic.ClipPath.new({child: new container.Container.new({height: height, width: 20.0, decoration: new box_decoration.BoxDecoration.new({color: backgroundColor, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(12.0))}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), clipper: new draggable_scrollbar.ArrowClipper.new(), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
        return framework.Widget._check(draggable_scrollbar.DraggableScrollbar.buildScrollThumbAndLabel({scrollThumb: scrollThumb, backgroundColor: backgroundColor, thumbAnimation: thumbAnimation, labelAnimation: labelAnimation, labelText: labelText, labelConstraints: labelConstraints, alwaysVisibleScrollThumb: alwaysVisibleScrollThumb}));
      }, ColorAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    }
    static _thumbRRectBuilder(scrollThumbKey, alwaysVisibleScrollThumb) {
      return dart.fn((backgroundColor, thumbAnimation, labelAnimation, height, opts) => {
        let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
        let labelText = opts && 'labelText' in opts ? opts.labelText : null;
        let scrollThumb = new material.Material.new({elevation: 4.0, child: new container.Container.new({constraints: new box.BoxConstraints.tight(new ui.Size.new(16.0, height)), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), color: backgroundColor, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(7.0)), $creationLocationd_0dea112b090073317d4: C44 || CT.C44});
        return framework.Widget._check(draggable_scrollbar.DraggableScrollbar.buildScrollThumbAndLabel({scrollThumb: scrollThumb, backgroundColor: backgroundColor, thumbAnimation: thumbAnimation, labelAnimation: labelAnimation, labelText: labelText, labelConstraints: labelConstraints, alwaysVisibleScrollThumb: alwaysVisibleScrollThumb}));
      }, ColorAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    }
  };
  (draggable_scrollbar.DraggableScrollbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let alwaysVisibleScrollThumb = opts && 'alwaysVisibleScrollThumb' in opts ? opts.alwaysVisibleScrollThumb : false;
    let heightScrollThumb = opts && 'heightScrollThumb' in opts ? opts.heightScrollThumb : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let scrollThumbBuilder = opts && 'scrollThumbBuilder' in opts ? opts.scrollThumbBuilder : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let scrollbarAnimationDuration = opts && 'scrollbarAnimationDuration' in opts ? opts.scrollbarAnimationDuration : C0 || CT.C0;
    let scrollbarTimeToFade = opts && 'scrollbarTimeToFade' in opts ? opts.scrollbarTimeToFade : C1 || CT.C1;
    let labelTextBuilder = opts && 'labelTextBuilder' in opts ? opts.labelTextBuilder : null;
    let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alwaysVisibleScrollThumb$] = alwaysVisibleScrollThumb;
    this[heightScrollThumb$] = heightScrollThumb;
    this[backgroundColor$] = backgroundColor;
    this[scrollThumbBuilder$] = scrollThumbBuilder;
    this[child$] = child;
    this[controller$] = controller;
    this[padding$] = padding;
    this[scrollbarAnimationDuration$] = scrollbarAnimationDuration;
    this[scrollbarTimeToFade$] = scrollbarTimeToFade;
    this[labelTextBuilder$] = labelTextBuilder;
    this[labelConstraints$] = labelConstraints;
    if (!(controller != null)) dart.assertFailed(null, "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart", 68, 16, "controller != null");
    if (!(scrollThumbBuilder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart", 69, 16, "scrollThumbBuilder != null");
    if (!dart.equals(child.scrollDirection, basic_types.Axis.vertical)) dart.assertFailed(null, "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart", 70, 16, "child.scrollDirection == Axis.vertical");
    draggable_scrollbar.DraggableScrollbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollbar.DraggableScrollbar.prototype;
  (draggable_scrollbar.DraggableScrollbar.rrect = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollThumbKey = opts && 'scrollThumbKey' in opts ? opts.scrollThumbKey : null;
    let alwaysVisibleScrollThumb = opts && 'alwaysVisibleScrollThumb' in opts ? opts.alwaysVisibleScrollThumb : false;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let heightScrollThumb = opts && 'heightScrollThumb' in opts ? opts.heightScrollThumb : 48;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C2 || CT.C2;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let scrollbarAnimationDuration = opts && 'scrollbarAnimationDuration' in opts ? opts.scrollbarAnimationDuration : C0 || CT.C0;
    let scrollbarTimeToFade = opts && 'scrollbarTimeToFade' in opts ? opts.scrollbarTimeToFade : C1 || CT.C1;
    let labelTextBuilder = opts && 'labelTextBuilder' in opts ? opts.labelTextBuilder : null;
    let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alwaysVisibleScrollThumb$] = alwaysVisibleScrollThumb;
    this[child$] = child;
    this[controller$] = controller;
    this[heightScrollThumb$] = heightScrollThumb;
    this[backgroundColor$] = backgroundColor;
    this[padding$] = padding;
    this[scrollbarAnimationDuration$] = scrollbarAnimationDuration;
    this[scrollbarTimeToFade$] = scrollbarTimeToFade;
    this[labelTextBuilder$] = labelTextBuilder;
    this[labelConstraints$] = labelConstraints;
    if (!dart.equals(child.scrollDirection, basic_types.Axis.vertical)) dart.assertFailed(null, "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart", 86, 16, "child.scrollDirection == Axis.vertical");
    this[scrollThumbBuilder$] = draggable_scrollbar.DraggableScrollbar._thumbRRectBuilder(scrollThumbKey, alwaysVisibleScrollThumb);
    draggable_scrollbar.DraggableScrollbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollbar.DraggableScrollbar.prototype;
  (draggable_scrollbar.DraggableScrollbar.arrows = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollThumbKey = opts && 'scrollThumbKey' in opts ? opts.scrollThumbKey : null;
    let alwaysVisibleScrollThumb = opts && 'alwaysVisibleScrollThumb' in opts ? opts.alwaysVisibleScrollThumb : false;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let heightScrollThumb = opts && 'heightScrollThumb' in opts ? opts.heightScrollThumb : 48;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C2 || CT.C2;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let scrollbarAnimationDuration = opts && 'scrollbarAnimationDuration' in opts ? opts.scrollbarAnimationDuration : C0 || CT.C0;
    let scrollbarTimeToFade = opts && 'scrollbarTimeToFade' in opts ? opts.scrollbarTimeToFade : C1 || CT.C1;
    let labelTextBuilder = opts && 'labelTextBuilder' in opts ? opts.labelTextBuilder : null;
    let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alwaysVisibleScrollThumb$] = alwaysVisibleScrollThumb;
    this[child$] = child;
    this[controller$] = controller;
    this[heightScrollThumb$] = heightScrollThumb;
    this[backgroundColor$] = backgroundColor;
    this[padding$] = padding;
    this[scrollbarAnimationDuration$] = scrollbarAnimationDuration;
    this[scrollbarTimeToFade$] = scrollbarTimeToFade;
    this[labelTextBuilder$] = labelTextBuilder;
    this[labelConstraints$] = labelConstraints;
    if (!dart.equals(child.scrollDirection, basic_types.Axis.vertical)) dart.assertFailed(null, "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart", 104, 16, "child.scrollDirection == Axis.vertical");
    this[scrollThumbBuilder$] = draggable_scrollbar.DraggableScrollbar._thumbArrowBuilder(scrollThumbKey, alwaysVisibleScrollThumb);
    draggable_scrollbar.DraggableScrollbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollbar.DraggableScrollbar.prototype;
  (draggable_scrollbar.DraggableScrollbar.semicircle = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let scrollThumbKey = opts && 'scrollThumbKey' in opts ? opts.scrollThumbKey : null;
    let alwaysVisibleScrollThumb = opts && 'alwaysVisibleScrollThumb' in opts ? opts.alwaysVisibleScrollThumb : false;
    let child = opts && 'child' in opts ? opts.child : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let heightScrollThumb = opts && 'heightScrollThumb' in opts ? opts.heightScrollThumb : 48;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C2 || CT.C2;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let scrollbarAnimationDuration = opts && 'scrollbarAnimationDuration' in opts ? opts.scrollbarAnimationDuration : C0 || CT.C0;
    let scrollbarTimeToFade = opts && 'scrollbarTimeToFade' in opts ? opts.scrollbarTimeToFade : C1 || CT.C1;
    let labelTextBuilder = opts && 'labelTextBuilder' in opts ? opts.labelTextBuilder : null;
    let labelConstraints = opts && 'labelConstraints' in opts ? opts.labelConstraints : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[alwaysVisibleScrollThumb$] = alwaysVisibleScrollThumb;
    this[child$] = child;
    this[controller$] = controller;
    this[heightScrollThumb$] = heightScrollThumb;
    this[backgroundColor$] = backgroundColor;
    this[padding$] = padding;
    this[scrollbarAnimationDuration$] = scrollbarAnimationDuration;
    this[scrollbarTimeToFade$] = scrollbarTimeToFade;
    this[labelTextBuilder$] = labelTextBuilder;
    this[labelConstraints$] = labelConstraints;
    if (!dart.equals(child.scrollDirection, basic_types.Axis.vertical)) dart.assertFailed(null, "org-dartlang-app:///packages/draggable_scrollbar/draggable_scrollbar.dart", 122, 16, "child.scrollDirection == Axis.vertical");
    this[scrollThumbBuilder$] = draggable_scrollbar.DraggableScrollbar._thumbSemicircleBuilder(dart.notNull(heightScrollThumb) * 0.6, scrollThumbKey, alwaysVisibleScrollThumb);
    draggable_scrollbar.DraggableScrollbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollbar.DraggableScrollbar.prototype;
  dart.addTypeTests(draggable_scrollbar.DraggableScrollbar);
  dart.setMethodSignature(draggable_scrollbar.DraggableScrollbar, () => ({
    __proto__: dart.getMethods(draggable_scrollbar.DraggableScrollbar.__proto__),
    createState: dart.fnType(draggable_scrollbar._DraggableScrollbarState, [])
  }));
  dart.setLibraryUri(draggable_scrollbar.DraggableScrollbar, "package:draggable_scrollbar/draggable_scrollbar.dart");
  dart.setFieldSignature(draggable_scrollbar.DraggableScrollbar, () => ({
    __proto__: dart.getFields(draggable_scrollbar.DraggableScrollbar.__proto__),
    child: dart.finalFieldType(scroll_view.BoxScrollView),
    scrollThumbBuilder: dart.finalFieldType(dart.fnType(framework.Widget, [ui.Color, animation.Animation$(core.double), animation.Animation$(core.double), core.double], {labelConstraints: box.BoxConstraints, labelText: text.Text}, {})),
    heightScrollThumb: dart.finalFieldType(core.double),
    backgroundColor: dart.finalFieldType(ui.Color),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    scrollbarAnimationDuration: dart.finalFieldType(core.Duration),
    scrollbarTimeToFade: dart.finalFieldType(core.Duration),
    labelTextBuilder: dart.finalFieldType(dart.fnType(text.Text, [core.double])),
    labelConstraints: dart.finalFieldType(box.BoxConstraints),
    controller: dart.finalFieldType(scroll_controller.ScrollController),
    alwaysVisibleScrollThumb: dart.finalFieldType(core.bool)
  }));
  var BoxConstraints_maxHeight = dart.privateName(box, "BoxConstraints.maxHeight");
  var BoxConstraints_minHeight = dart.privateName(box, "BoxConstraints.minHeight");
  var BoxConstraints_maxWidth = dart.privateName(box, "BoxConstraints.maxWidth");
  var BoxConstraints_minWidth = dart.privateName(box, "BoxConstraints.minWidth");
  var C50;
  var C53;
  var C54;
  var C55;
  var C52;
  var C51;
  var C58;
  var C59;
  var C60;
  var C61;
  var C57;
  var C56;
  var C64;
  var C65;
  var C63;
  var C62;
  var C68;
  var C69;
  var C67;
  var C66;
  var animation$ = dart.privateName(draggable_scrollbar, "ScrollLabel.animation");
  var backgroundColor$0 = dart.privateName(draggable_scrollbar, "ScrollLabel.backgroundColor");
  var child$0 = dart.privateName(draggable_scrollbar, "ScrollLabel.child");
  var constraints$ = dart.privateName(draggable_scrollbar, "ScrollLabel.constraints");
  draggable_scrollbar.ScrollLabel = class ScrollLabel extends framework.StatelessWidget {
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      super.animation = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get constraints() {
      return this[constraints$];
    }
    set constraints(value) {
      super.constraints = value;
    }
    build(context) {
      let t0;
      return new transitions.FadeTransition.new({opacity: this.animation, child: new container.Container.new({margin: new edge_insets.EdgeInsets.only({right: 12.0}), child: new material.Material.new({elevation: 4.0, color: this.backgroundColor, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(16.0)), child: new container.Container.new({constraints: (t0 = this.constraints, t0 == null ? draggable_scrollbar.ScrollLabel._defaultConstraints : t0), alignment: alignment.Alignment.center, child: this.child, $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
    }
  };
  (draggable_scrollbar.ScrollLabel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let constraints = opts && 'constraints' in opts ? opts.constraints : C50 || CT.C50;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    this[animation$] = animation;
    this[backgroundColor$0] = backgroundColor;
    this[constraints$] = constraints;
    draggable_scrollbar.ScrollLabel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollbar.ScrollLabel.prototype;
  dart.addTypeTests(draggable_scrollbar.ScrollLabel);
  dart.setMethodSignature(draggable_scrollbar.ScrollLabel, () => ({
    __proto__: dart.getMethods(draggable_scrollbar.ScrollLabel.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(draggable_scrollbar.ScrollLabel, "package:draggable_scrollbar/draggable_scrollbar.dart");
  dart.setFieldSignature(draggable_scrollbar.ScrollLabel, () => ({
    __proto__: dart.getFields(draggable_scrollbar.ScrollLabel.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    backgroundColor: dart.finalFieldType(ui.Color),
    child: dart.finalFieldType(text.Text),
    constraints: dart.finalFieldType(box.BoxConstraints)
  }));
  dart.defineLazy(draggable_scrollbar.ScrollLabel, {
    /*draggable_scrollbar.ScrollLabel._defaultConstraints*/get _defaultConstraints() {
      return C50 || CT.C50;
    }
  });
  var _barOffset = dart.privateName(draggable_scrollbar, "_barOffset");
  var _viewOffset = dart.privateName(draggable_scrollbar, "_viewOffset");
  var _isDragInProcess = dart.privateName(draggable_scrollbar, "_isDragInProcess");
  var _thumbAnimationController = dart.privateName(draggable_scrollbar, "_thumbAnimationController");
  var _thumbAnimation = dart.privateName(draggable_scrollbar, "_thumbAnimation");
  var _labelAnimationController = dart.privateName(draggable_scrollbar, "_labelAnimationController");
  var _labelAnimation = dart.privateName(draggable_scrollbar, "_labelAnimation");
  var _fadeoutTimer = dart.privateName(draggable_scrollbar, "_fadeoutTimer");
  var C72;
  var C71;
  var C70;
  var _onVerticalDragStart = dart.privateName(draggable_scrollbar, "_onVerticalDragStart");
  var _onVerticalDragUpdate = dart.privateName(draggable_scrollbar, "_onVerticalDragUpdate");
  var _onVerticalDragEnd = dart.privateName(draggable_scrollbar, "_onVerticalDragEnd");
  var C75;
  var C76;
  var C77;
  var C78;
  var C74;
  var C73;
  var C81;
  var C82;
  var C83;
  var C84;
  var C80;
  var C79;
  var C87;
  var C86;
  var C85;
  var C90;
  var C89;
  var C88;
  var C93;
  var C94;
  var C92;
  var C91;
  var C97;
  var C96;
  var C95;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(draggable_scrollbar.DraggableScrollbar) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(draggable_scrollbar.DraggableScrollbar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(draggable_scrollbar.DraggableScrollbar));
  draggable_scrollbar._DraggableScrollbarState = class _DraggableScrollbarState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this[_barOffset] = 0.0;
      this[_viewOffset] = 0.0;
      this[_isDragInProcess] = false;
      this[_thumbAnimationController] = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.scrollbarAnimationDuration});
      this[_thumbAnimation] = new animations.CurvedAnimation.new({parent: this[_thumbAnimationController], curve: curves.Curves.fastOutSlowIn});
      this[_labelAnimationController] = new animation_controller.AnimationController.new({vsync: this, duration: this.widget.scrollbarAnimationDuration});
      this[_labelAnimation] = new animations.CurvedAnimation.new({parent: this[_labelAnimationController], curve: curves.Curves.fastOutSlowIn});
    }
    dispose() {
      let t0;
      this[_thumbAnimationController].dispose();
      t0 = this[_fadeoutTimer];
      t0 == null ? null : t0.cancel();
      super.dispose();
    }
    get barMaxScrollExtent() {
      return dart.notNull(this.context.size.height) - dart.notNull(this.widget.heightScrollThumb);
    }
    get barMinScrollExtent() {
      return 0.0;
    }
    get viewMaxScrollExtent() {
      return this.widget.controller.position.maxScrollExtent;
    }
    get viewMinScrollExtent() {
      return this.widget.controller.position.minScrollExtent;
    }
    build(context) {
      let labelText = null;
      if (this.widget.labelTextBuilder != null && dart.test(this[_isDragInProcess])) {
        labelText = this.widget.labelTextBuilder(dart.notNull(this[_viewOffset]) + dart.notNull(this[_barOffset]) + dart.notNull(this.widget.heightScrollThumb) / 2);
      }
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => new (NotificationListenerOfScrollNotification()).new({onNotification: dart.fn(notification => {
            this.changePosition(notification);
          }, ScrollNotificationToNull()), child: new basic.Stack.new({children: JSArrayOfWidget().of([new basic.RepaintBoundary.new({child: this.widget.child, $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), new basic.RepaintBoundary.new({child: new gesture_detector.GestureDetector.new({onVerticalDragStart: dart.bind(this, _onVerticalDragStart), onVerticalDragUpdate: dart.bind(this, _onVerticalDragUpdate), onVerticalDragEnd: dart.bind(this, _onVerticalDragEnd), child: new container.Container.new({alignment: alignment.Alignment.topRight, margin: new edge_insets.EdgeInsets.only({top: this[_barOffset]}), padding: this.widget.padding, child: this.widget.scrollThumbBuilder(this.widget.backgroundColor, this[_thumbAnimation], this[_labelAnimation], this.widget.heightScrollThumb, {labelText: text.Text._check(labelText), labelConstraints: this.widget.labelConstraints}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85})]), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), BuildContextAndBoxConstraintsToNotificationListenerOfScrollNotification()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
    }
    changePosition(notification) {
      if (dart.test(this[_isDragInProcess])) {
        return;
      }
      this.setState(dart.fn(() => {
        let t0;
        if (scroll_notification.ScrollUpdateNotification.is(notification)) {
          this[_barOffset] = dart.notNull(this[_barOffset]) + dart.notNull(this.getBarDelta(notification.scrollDelta, this.barMaxScrollExtent, this.viewMaxScrollExtent));
          if (dart.notNull(this[_barOffset]) < dart.notNull(this.barMinScrollExtent)) {
            this[_barOffset] = this.barMinScrollExtent;
          }
          if (dart.notNull(this[_barOffset]) > dart.notNull(this.barMaxScrollExtent)) {
            this[_barOffset] = this.barMaxScrollExtent;
          }
          this[_viewOffset] = dart.notNull(this[_viewOffset]) + dart.notNull(notification.scrollDelta);
          if (dart.notNull(this[_viewOffset]) < dart.notNull(this.widget.controller.position.minScrollExtent)) {
            this[_viewOffset] = this.widget.controller.position.minScrollExtent;
          }
          if (dart.notNull(this[_viewOffset]) > dart.notNull(this.viewMaxScrollExtent)) {
            this[_viewOffset] = this.viewMaxScrollExtent;
          }
        }
        if (scroll_notification.ScrollUpdateNotification.is(notification) || scroll_notification.OverscrollNotification.is(notification)) {
          if (!dart.equals(this[_thumbAnimationController].status, animation.AnimationStatus.forward)) {
            this[_thumbAnimationController].forward();
          }
          t0 = this[_fadeoutTimer];
          t0 == null ? null : t0.cancel();
          this[_fadeoutTimer] = async.Timer.new(this.widget.scrollbarTimeToFade, dart.fn(() => {
            this[_thumbAnimationController].reverse();
            this[_labelAnimationController].reverse();
            this[_fadeoutTimer] = null;
          }, VoidToNull()));
        }
      }, VoidToNull()));
    }
    getBarDelta(scrollViewDelta, barMaxScrollExtent, viewMaxScrollExtent) {
      return dart.notNull(scrollViewDelta) * dart.notNull(barMaxScrollExtent) / dart.notNull(viewMaxScrollExtent);
    }
    getScrollViewDelta(barDelta, barMaxScrollExtent, viewMaxScrollExtent) {
      return dart.notNull(barDelta) * dart.notNull(viewMaxScrollExtent) / dart.notNull(barMaxScrollExtent);
    }
    [_onVerticalDragStart](details) {
      this.setState(dart.fn(() => {
        let t0;
        this[_isDragInProcess] = true;
        this[_labelAnimationController].forward();
        t0 = this[_fadeoutTimer];
        t0 == null ? null : t0.cancel();
      }, VoidToNull()));
    }
    [_onVerticalDragUpdate](details) {
      this.setState(dart.fn(() => {
        if (!dart.equals(this[_thumbAnimationController].status, animation.AnimationStatus.forward)) {
          this[_thumbAnimationController].forward();
        }
        if (dart.test(this[_isDragInProcess])) {
          this[_barOffset] = dart.notNull(this[_barOffset]) + dart.notNull(details.delta.dy);
          if (dart.notNull(this[_barOffset]) < dart.notNull(this.barMinScrollExtent)) {
            this[_barOffset] = this.barMinScrollExtent;
          }
          if (dart.notNull(this[_barOffset]) > dart.notNull(this.barMaxScrollExtent)) {
            this[_barOffset] = this.barMaxScrollExtent;
          }
          let viewDelta = this.getScrollViewDelta(details.delta.dy, this.barMaxScrollExtent, this.viewMaxScrollExtent);
          this[_viewOffset] = dart.notNull(this.widget.controller.position.pixels) + dart.notNull(viewDelta);
          if (dart.notNull(this[_viewOffset]) < dart.notNull(this.widget.controller.position.minScrollExtent)) {
            this[_viewOffset] = this.widget.controller.position.minScrollExtent;
          }
          if (dart.notNull(this[_viewOffset]) > dart.notNull(this.viewMaxScrollExtent)) {
            this[_viewOffset] = this.viewMaxScrollExtent;
          }
          this.widget.controller.jumpTo(this[_viewOffset]);
        }
      }, VoidToNull()));
    }
    [_onVerticalDragEnd](details) {
      this[_fadeoutTimer] = async.Timer.new(this.widget.scrollbarTimeToFade, dart.fn(() => {
        this[_thumbAnimationController].reverse();
        this[_labelAnimationController].reverse();
        this[_fadeoutTimer] = null;
      }, VoidToNull()));
      this.setState(dart.fn(() => {
        this[_isDragInProcess] = false;
      }, VoidToNull()));
    }
  };
  (draggable_scrollbar._DraggableScrollbarState.new = function() {
    this[_barOffset] = null;
    this[_viewOffset] = null;
    this[_isDragInProcess] = null;
    this[_thumbAnimationController] = null;
    this[_thumbAnimation] = null;
    this[_labelAnimationController] = null;
    this[_labelAnimation] = null;
    this[_fadeoutTimer] = null;
    draggable_scrollbar._DraggableScrollbarState.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollbar._DraggableScrollbarState.prototype;
  dart.addTypeTests(draggable_scrollbar._DraggableScrollbarState);
  dart.setMethodSignature(draggable_scrollbar._DraggableScrollbarState, () => ({
    __proto__: dart.getMethods(draggable_scrollbar._DraggableScrollbarState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    changePosition: dart.fnType(dart.dynamic, [scroll_notification.ScrollNotification]),
    getBarDelta: dart.fnType(core.double, [core.double, core.double, core.double]),
    getScrollViewDelta: dart.fnType(core.double, [core.double, core.double, core.double]),
    [_onVerticalDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_onVerticalDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_onVerticalDragEnd]: dart.fnType(dart.void, [drag_details.DragEndDetails])
  }));
  dart.setGetterSignature(draggable_scrollbar._DraggableScrollbarState, () => ({
    __proto__: dart.getGetters(draggable_scrollbar._DraggableScrollbarState.__proto__),
    barMaxScrollExtent: core.double,
    barMinScrollExtent: core.double,
    viewMaxScrollExtent: core.double,
    viewMinScrollExtent: core.double
  }));
  dart.setLibraryUri(draggable_scrollbar._DraggableScrollbarState, "package:draggable_scrollbar/draggable_scrollbar.dart");
  dart.setFieldSignature(draggable_scrollbar._DraggableScrollbarState, () => ({
    __proto__: dart.getFields(draggable_scrollbar._DraggableScrollbarState.__proto__),
    [_barOffset]: dart.fieldType(core.double),
    [_viewOffset]: dart.fieldType(core.double),
    [_isDragInProcess]: dart.fieldType(core.bool),
    [_thumbAnimationController]: dart.fieldType(animation_controller.AnimationController),
    [_thumbAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_labelAnimationController]: dart.fieldType(animation_controller.AnimationController),
    [_labelAnimation]: dart.fieldType(animation.Animation$(core.double)),
    [_fadeoutTimer]: dart.fieldType(async.Timer)
  }));
  var color$ = dart.privateName(draggable_scrollbar, "ArrowCustomPainter.color");
  draggable_scrollbar.ArrowCustomPainter = class ArrowCustomPainter extends custom_paint.CustomPainter {
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    shouldRepaint(oldDelegate) {
      custom_paint.CustomPainter._check(oldDelegate);
      return false;
    }
    paint(canvas, size) {
      let t0;
      let paint = (t0 = ui.Paint.new(), t0.color = this.color, t0);
      let baseX = dart.notNull(size.width) / 2;
      let baseY = dart.notNull(size.height) / 2;
      canvas.drawPath(draggable_scrollbar.ArrowCustomPainter._trianglePath(new ui.Offset.new(baseX, baseY - 2.0), 12, 8, true), paint);
      canvas.drawPath(draggable_scrollbar.ArrowCustomPainter._trianglePath(new ui.Offset.new(baseX, baseY + 2.0), 12, 8, false), paint);
    }
    static _trianglePath(o, width, height, isUp) {
      let t0;
      t0 = ui.Path.new();
      t0.moveTo(o.dx, o.dy);
      t0.lineTo(dart.notNull(o.dx) + dart.notNull(width), o.dy);
      t0.lineTo(dart.notNull(o.dx) + dart.notNull(width) / 2, dart.test(isUp) ? dart.notNull(o.dy) - dart.notNull(height) : dart.notNull(o.dy) + dart.notNull(height));
      t0.close();
      return t0;
    }
  };
  (draggable_scrollbar.ArrowCustomPainter.new = function(color) {
    this[color$] = color;
    draggable_scrollbar.ArrowCustomPainter.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollbar.ArrowCustomPainter.prototype;
  dart.addTypeTests(draggable_scrollbar.ArrowCustomPainter);
  dart.setMethodSignature(draggable_scrollbar.ArrowCustomPainter, () => ({
    __proto__: dart.getMethods(draggable_scrollbar.ArrowCustomPainter.__proto__),
    shouldRepaint: dart.fnType(core.bool, [core.Object]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size])
  }));
  dart.setLibraryUri(draggable_scrollbar.ArrowCustomPainter, "package:draggable_scrollbar/draggable_scrollbar.dart");
  dart.setFieldSignature(draggable_scrollbar.ArrowCustomPainter, () => ({
    __proto__: dart.getFields(draggable_scrollbar.ArrowCustomPainter.__proto__),
    color: dart.fieldType(ui.Color)
  }));
  draggable_scrollbar.ArrowClipper = class ArrowClipper extends proxy_box.CustomClipper$(ui.Path) {
    getClip(size) {
      let path = ui.Path.new();
      path.lineTo(0.0, size.height);
      path.lineTo(size.width, size.height);
      path.lineTo(size.width, 0.0);
      path.lineTo(0.0, 0.0);
      path.close();
      let arrowWidth = 8.0;
      let startPointX = (dart.notNull(size.width) - arrowWidth) / 2;
      let startPointY = dart.notNull(size.height) / 2 - arrowWidth / 2;
      path.moveTo(startPointX, startPointY);
      path.lineTo(startPointX + arrowWidth / 2, startPointY - arrowWidth / 2);
      path.lineTo(startPointX + arrowWidth, startPointY);
      path.lineTo(startPointX + arrowWidth, startPointY + 1.0);
      path.lineTo(startPointX + arrowWidth / 2, startPointY - arrowWidth / 2 + 1.0);
      path.lineTo(startPointX, startPointY + 1.0);
      path.close();
      startPointY = dart.notNull(size.height) / 2 + arrowWidth / 2;
      path.moveTo(startPointX + arrowWidth, startPointY);
      path.lineTo(startPointX + arrowWidth / 2, startPointY + arrowWidth / 2);
      path.lineTo(startPointX, startPointY);
      path.lineTo(startPointX, startPointY - 1.0);
      path.lineTo(startPointX + arrowWidth / 2, startPointY + arrowWidth / 2 - 1.0);
      path.lineTo(startPointX + arrowWidth, startPointY - 1.0);
      path.close();
      return path;
    }
    shouldReclip(oldClipper) {
      CustomClipperOfPath()._check(oldClipper);
      return false;
    }
  };
  (draggable_scrollbar.ArrowClipper.new = function() {
    draggable_scrollbar.ArrowClipper.__proto__.new.call(this);
    ;
  }).prototype = draggable_scrollbar.ArrowClipper.prototype;
  dart.addTypeTests(draggable_scrollbar.ArrowClipper);
  dart.setMethodSignature(draggable_scrollbar.ArrowClipper, () => ({
    __proto__: dart.getMethods(draggable_scrollbar.ArrowClipper.__proto__),
    getClip: dart.fnType(ui.Path, [ui.Size]),
    shouldReclip: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(draggable_scrollbar.ArrowClipper, "package:draggable_scrollbar/draggable_scrollbar.dart");
  var C99;
  var C98;
  var C102;
  var C103;
  var C101;
  var C100;
  var C106;
  var C107;
  var C105;
  var C104;
  var C110;
  var C111;
  var C112;
  var C109;
  var C108;
  var animation$0 = dart.privateName(draggable_scrollbar, "SlideFadeTransition.animation");
  var child$1 = dart.privateName(draggable_scrollbar, "SlideFadeTransition.child");
  draggable_scrollbar.SlideFadeTransition = class SlideFadeTransition extends framework.StatelessWidget {
    get animation() {
      return this[animation$0];
    }
    set animation(value) {
      super.animation = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new transitions.AnimatedBuilder.new({animation: this.animation, builder: dart.fn((context, child) => this.animation.value === 0.0 ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C98 || CT.C98}) : child, BuildContextAndWidgetToWidget()), child: new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: new ui.Offset.new(0.3, 0.0), end: new ui.Offset.new(0.0, 0.0)}).animate(this.animation), child: new transitions.FadeTransition.new({opacity: this.animation, child: this.child, $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108});
    }
  };
  (draggable_scrollbar.SlideFadeTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animation$0] = animation;
    this[child$1] = child;
    draggable_scrollbar.SlideFadeTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = draggable_scrollbar.SlideFadeTransition.prototype;
  dart.addTypeTests(draggable_scrollbar.SlideFadeTransition);
  dart.setMethodSignature(draggable_scrollbar.SlideFadeTransition, () => ({
    __proto__: dart.getMethods(draggable_scrollbar.SlideFadeTransition.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(draggable_scrollbar.SlideFadeTransition, "package:draggable_scrollbar/draggable_scrollbar.dart");
  dart.setFieldSignature(draggable_scrollbar.SlideFadeTransition, () => ({
    __proto__: dart.getFields(draggable_scrollbar.SlideFadeTransition.__proto__),
    animation: dart.finalFieldType(animation.Animation$(core.double)),
    child: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/draggable_scrollbar/draggable_scrollbar", {
    "package:draggable_scrollbar/draggable_scrollbar.dart": draggable_scrollbar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["draggable_scrollbar.dart"],"names":[],"mappings":"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","file":"draggable_scrollbar.ddc.js"}');
  // Exports:
  return {
    draggable_scrollbar: draggable_scrollbar
  };
});

//# sourceMappingURL=draggable_scrollbar.ddc.js.map
