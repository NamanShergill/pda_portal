define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/pda_portal/theme', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/pda_portal/ui_2/statusCard', 'packages/flare_flutter/flare_actor', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__pda_portal__theme, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__pda_portal__ui_2__statusCard, packages__flare_flutter__flare_actor, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const placeholder = packages__flutter__src__widgets__actions.src__widgets__placeholder;
  const nested_scroll_view = packages__flutter__src__widgets__actions.src__widgets__nested_scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const value_listenable_builder = packages__flutter__src__widgets__actions.src__widgets__value_listenable_builder;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const theme = packages__pda_portal__theme.theme;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const drawer = packages__flutter__material.src__material__drawer;
  const drawer_header = packages__flutter__material.src__material__drawer_header;
  const card = packages__flutter__material.src__material__card;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const flexible_space_bar = packages__flutter__material.src__material__flexible_space_bar;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const statusCard = packages__pda_portal__ui_2__statusCard.ui_2__statusCard;
  const flare_actor = packages__flare_flutter__flare_actor.flare_actor;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  var bottomnav = Object.create(dart.library);
  var dashboard = Object.create(dart.library);
  var $_get = dartx._get;
  var BuildContextAndintToBottomBarTab = () => (BuildContextAndintToBottomBarTab = dart.constFn(dart.fnType(bottomnav.BottomBarTab, [framework.BuildContext, core.int])))();
  var VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  var GlobalKeyOfScaffoldState = () => (GlobalKeyOfScaffoldState = dart.constFn(framework.GlobalKey$(scaffold.ScaffoldState)))();
  var BuildContextAndintToPadding = () => (BuildContextAndintToPadding = dart.constFn(dart.fnType(basic.Padding, [framework.BuildContext, core.int])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var ValueListenableBuilderOfint = () => (ValueListenableBuilderOfint = dart.constFn(value_listenable_builder.ValueListenableBuilder$(core.int)))();
  var BuildContextAnddynamicAndWidgetToStack = () => (BuildContextAnddynamicAndWidgetToStack = dart.constFn(dart.fnType(basic.Stack, [framework.BuildContext, dart.dynamic, framework.Widget])))();
  var ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  var BuildContextAndboolToListOfWidget = () => (BuildContextAndboolToListOfWidget = dart.constFn(dart.fnType(ListOfWidget(), [framework.BuildContext, core.bool])))();
  var BuildContextAndintToTestCard = () => (BuildContextAndintToTestCard = dart.constFn(dart.fnType(statusCard.TestCard, [framework.BuildContext, core.int])))();
  var ValueNotifierOfint = () => (ValueNotifierOfint = dart.constFn(change_notifier.ValueNotifier$(core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 43,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 52,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "parent",
        [_Location_column]: 59,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 11,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 7,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/bottomnav.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C47() {
      return C47 = dart.constList([], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 33,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 46,
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
        [_Location_column]: 38,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 43,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 56,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 31,
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
        [_Location_column]: 20,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 26,
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
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 56,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 63,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 66,
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
        [_Location_column]: 25,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 29,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 29,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 29,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 29,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 29,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 29,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134, C135 || CT.C135], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 29,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 29,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 130,
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
        [_Location_column]: 36,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 29,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 29,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueListenable",
        [_Location_column]: 21,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 21,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "collapseMode",
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "titlePadding",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floating",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169, C170 || CT.C170, C171 || CT.C171, C172 || CT.C172, C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 25,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 25,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 25,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "filename",
        [_Location_column]: 31,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 31,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 31,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 31,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190, C191 || CT.C191, C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 170,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 176,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.constList([C205 || CT.C205], widget_inspector._Location);
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C204 || CT.C204,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C207 || CT.C207,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C210 || CT.C210,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 15,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.constList([C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C217 || CT.C217,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerSliverBuilder",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228], widget_inspector._Location);
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 28,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 54,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232, C233 || CT.C233], widget_inspector._Location);
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 3,
        [EdgeInsets_left]: 0
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 38,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238], widget_inspector._Location);
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], widget_inspector._Location);
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245], widget_inspector._Location);
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 11,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 13,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248, C249 || CT.C249, C250 || CT.C250, C251 || CT.C251], widget_inspector._Location);
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 191,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 9,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 9,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256, C257 || CT.C257, C258 || CT.C258, C259 || CT.C259], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C254 || CT.C254,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262], widget_inspector._Location);
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    }
  });
  bottomnav.BottomNavCustom = class BottomNavCustom extends framework.StatefulWidget {
    createState() {
      return new bottomnav._BottomNavCustomState.new();
    }
  };
  (bottomnav.BottomNavCustom.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    bottomnav.BottomNavCustom.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottomnav.BottomNavCustom.prototype;
  dart.addTypeTests(bottomnav.BottomNavCustom);
  dart.setMethodSignature(bottomnav.BottomNavCustom, () => ({
    __proto__: dart.getMethods(bottomnav.BottomNavCustom.__proto__),
    createState: dart.fnType(bottomnav._BottomNavCustomState, [])
  }));
  dart.setLibraryUri(bottomnav.BottomNavCustom, "package:pda_portal/widgets/bottomnav.dart");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C4;
  var C1;
  var C0;
  var C7;
  var C8;
  var C9;
  var C10;
  var C6;
  var C5;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C12;
  var C11;
  bottomnav._BottomNavCustomState = class _BottomNavCustomState extends framework.State$(bottomnav.BottomNavCustom) {
    build(context) {
      let _media = media_query.MediaQuery.of(context).size;
      return new container.Container.new({constraints: new box.BoxConstraints.new({minHeight: 50.0}), width: _media.width, height: dart.notNull(_media.height) * 0.08, color: theme.background, child: new scroll_view.ListView.builder({physics: new scroll_physics.NeverScrollableScrollPhysics.new(), itemCount: 5, scrollDirection: basic_types.Axis.horizontal, itemBuilder: dart.fn((context, index) => new bottomnav.BottomBarTab.new(bottomnav.navBottom[$_get](index), index, this, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextAndintToBottomBarTab()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (bottomnav._BottomNavCustomState.new = function() {
    bottomnav._BottomNavCustomState.__proto__.new.call(this);
    ;
  }).prototype = bottomnav._BottomNavCustomState.prototype;
  dart.addTypeTests(bottomnav._BottomNavCustomState);
  dart.setMethodSignature(bottomnav._BottomNavCustomState, () => ({
    __proto__: dart.getMethods(bottomnav._BottomNavCustomState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottomnav._BottomNavCustomState, "package:pda_portal/widgets/bottomnav.dart");
  var parent$ = dart.privateName(bottomnav, "BottomBarTab.parent");
  var name$ = dart.privateName(bottomnav, "BottomBarTab.name");
  var index$ = dart.privateName(bottomnav, "BottomBarTab.index");
  bottomnav.BottomBarTab = class BottomBarTab extends framework.StatefulWidget {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      this[parent$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    createState() {
      return new bottomnav._BottomBarTabState.new();
    }
  };
  (bottomnav.BottomBarTab.new = function(name, index, parent, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    this[index$] = index;
    this[parent$] = parent;
    bottomnav.BottomBarTab.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bottomnav.BottomBarTab.prototype;
  dart.addTypeTests(bottomnav.BottomBarTab);
  dart.setMethodSignature(bottomnav.BottomBarTab, () => ({
    __proto__: dart.getMethods(bottomnav.BottomBarTab.__proto__),
    createState: dart.fnType(bottomnav._BottomBarTabState, [])
  }));
  dart.setLibraryUri(bottomnav.BottomBarTab, "package:pda_portal/widgets/bottomnav.dart");
  dart.setFieldSignature(bottomnav.BottomBarTab, () => ({
    __proto__: dart.getFields(bottomnav.BottomBarTab.__proto__),
    parent: dart.fieldType(bottomnav._BottomNavCustomState),
    name: dart.finalFieldType(core.String),
    index: dart.finalFieldType(core.int)
  }));
  var C20;
  var C21;
  var C19;
  var C18;
  var C24;
  var C23;
  var C22;
  var C27;
  var C26;
  var C25;
  var C30;
  var C31;
  var C32;
  var C29;
  var C28;
  var C35;
  var C36;
  var C34;
  var C33;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C38;
  var C37;
  bottomnav._BottomBarTabState = class _BottomBarTabState extends framework.State$(bottomnav.BottomBarTab) {
    build(context) {
      const checkIndex = () => {
        let x = bottomnav.selectedIndex == this.widget.index;
        return x;
      };
      dart.fn(checkIndex, VoidTobool());
      let _media = media_query.MediaQuery.of(context).size;
      return new implicit_animations.AnimatedContainer.new({constraints: new box.BoxConstraints.new({minHeight: 50.0}), decoration: new box_decoration.BoxDecoration.new({color: dart.test(checkIndex()) ? colors.Colors.white : theme.background, border: new box_border.Border.new({top: dart.test(checkIndex()) ? new borders.BorderSide.new({color: theme.accent, width: 4.0, style: borders.BorderStyle.solid}) : new borders.BorderSide.new({color: colors.Colors.white, width: 2.0})})}), duration: new core.Duration.new({milliseconds: 350}), width: dart.notNull(_media.width) * 0.2, height: dart.notNull(_media.height) * 0.08, child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({hoverColor: colors.Colors.black26.withOpacity(0.08), onTap: dart.fn(() => {
              this.setState(dart.fn(() => {
                bottomnav.selectedIndex = this.widget.index;
                this.widget.parent.setState(dart.fn(() => {
                }, VoidToNull()));
                dashboard.pageTitle.value = bottomnav.selectedIndex;
              }, VoidToNull()));
            }, VoidToNull()), child: new container.Container.new({child: new basic.Center.new({child: new text.Text.new(this.widget.name, {style: dart.test(checkIndex()) ? new text_style.TextStyle.new({fontWeight: ui.FontWeight.w400, color: colors.Colors.black, fontSize: 20.0}) : theme.textWhite.copyWith({fontWeight: ui.FontWeight.w300, fontSize: 17.0}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
    }
  };
  (bottomnav._BottomBarTabState.new = function() {
    bottomnav._BottomBarTabState.__proto__.new.call(this);
    ;
  }).prototype = bottomnav._BottomBarTabState.prototype;
  dart.addTypeTests(bottomnav._BottomBarTabState);
  dart.setMethodSignature(bottomnav._BottomBarTabState, () => ({
    __proto__: dart.getMethods(bottomnav._BottomBarTabState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottomnav._BottomBarTabState, "package:pda_portal/widgets/bottomnav.dart");
  dart.defineLazy(bottomnav, {
    /*bottomnav.selectedIndex*/get selectedIndex() {
      return 0;
    },
    set selectedIndex(_) {},
    /*bottomnav.navBottom*/get navBottom() {
      return JSArrayOfString().of(["All", "Urgent", "Pending", "Approved", "Rejected"]);
    },
    set navBottom(_) {}
  });
  dashboard.Dashboard = class Dashboard extends framework.StatefulWidget {
    createState() {
      return new dashboard._DashboardState.new();
    }
  };
  (dashboard.Dashboard.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    dashboard.Dashboard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dashboard.Dashboard.prototype;
  dart.addTypeTests(dashboard.Dashboard);
  dart.setMethodSignature(dashboard.Dashboard, () => ({
    __proto__: dart.getMethods(dashboard.Dashboard.__proto__),
    createState: dart.fnType(dashboard._DashboardState, [])
  }));
  dart.setLibraryUri(dashboard.Dashboard, "package:pda_portal/ui_2/dashboard.dart");
  var _scaffoldKey = dart.privateName(dashboard, "_scaffoldKey");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C45;
  var C47;
  var C46;
  var C50;
  var C51;
  var C49;
  var C48;
  var C54;
  var C53;
  var C52;
  var C57;
  var C56;
  var C55;
  var C60;
  var C61;
  var C59;
  var C58;
  var C64;
  var C63;
  var C62;
  var C67;
  var C66;
  var C65;
  var C70;
  var C71;
  var C69;
  var C68;
  var C74;
  var C75;
  var C73;
  var C72;
  var C78;
  var C77;
  var C76;
  var C81;
  var C80;
  var C79;
  var C84;
  var C85;
  var C86;
  var C87;
  var C83;
  var C82;
  var C90;
  var C89;
  var C88;
  var C93;
  var C92;
  var C91;
  var C96;
  var C97;
  var C95;
  var C94;
  var C100;
  var C101;
  var C99;
  var C98;
  var C104;
  var C103;
  var C102;
  var C107;
  var C108;
  var C106;
  var C105;
  var C111;
  var C112;
  var C110;
  var C109;
  var C115;
  var C116;
  var C117;
  var C114;
  var C113;
  var C120;
  var C121;
  var C119;
  var C118;
  var C124;
  var C125;
  var C126;
  var C123;
  var C122;
  var C129;
  var C130;
  var C128;
  var C127;
  var C133;
  var C134;
  var C135;
  var C132;
  var C131;
  var C138;
  var C139;
  var C137;
  var C136;
  var C142;
  var C143;
  var C144;
  var C141;
  var C140;
  var C147;
  var C148;
  var C146;
  var C145;
  var C151;
  var C152;
  var C153;
  var C150;
  var C149;
  var C156;
  var C155;
  var C154;
  var C159;
  var C160;
  var C158;
  var C157;
  var C163;
  var C164;
  var C165;
  var C162;
  var C161;
  var C168;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C174;
  var C167;
  var C166;
  var C175;
  var C178;
  var C179;
  var C180;
  var C181;
  var C177;
  var C176;
  var C184;
  var C183;
  var C182;
  var C187;
  var C186;
  var C185;
  var C190;
  var C191;
  var C192;
  var C193;
  var C189;
  var C188;
  var C196;
  var C197;
  var C198;
  var C195;
  var C194;
  var C201;
  var C202;
  var C200;
  var C199;
  var C205;
  var C204;
  var C203;
  var C208;
  var C207;
  var C206;
  var C211;
  var C210;
  var C209;
  var C214;
  var C215;
  var C213;
  var C212;
  var C218;
  var C219;
  var C217;
  var C216;
  var C222;
  var C223;
  var C224;
  var C221;
  var C220;
  var C227;
  var C228;
  var C226;
  var C225;
  var C231;
  var C232;
  var C233;
  var C230;
  var C229;
  var C234;
  var C237;
  var C238;
  var C236;
  var C235;
  var C241;
  var C242;
  var C240;
  var C239;
  var C245;
  var C244;
  var C243;
  var C248;
  var C249;
  var C250;
  var C251;
  var C247;
  var C246;
  var C252;
  var C255;
  var C256;
  var C257;
  var C258;
  var C259;
  var C254;
  var C253;
  var C262;
  var C261;
  var C260;
  dashboard._DashboardState = class _DashboardState extends framework.State$(dashboard.Dashboard) {
    build(context) {
      let _media = media_query.MediaQuery.of(context).size;
      return new scrollbar.Scrollbar.new({child: new scaffold.Scaffold.new({key: this[_scaffoldKey], drawer: new drawer.Drawer.new({child: new container.Container.new({width: dart.notNull(_media.width) * 0.15, height: _media.height, color: theme.background, child: new basic.Column.new({children: JSArrayOfWidget().of([new drawer_header.DrawerHeader.new({child: new basic.Padding.new({padding: C45 || CT.C45, child: new placeholder.Placeholder.new({$creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), new basic.Flexible.new({child: new scroll_view.ListView.builder({itemCount: 5, itemBuilder: dart.fn((context, index) => new basic.Padding.new({padding: C45 || CT.C45, child: new card.Card.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C45 || CT.C45, child: new text.Text.new("Placeholder Text", {$creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), BuildContextAndintToPadding()), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76})]), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), body: new nested_scroll_view.NestedScrollView.new({headerSliverBuilder: dart.fn((context, innerBoxIsScrolled) => JSArrayOfWidget().of([new app_bar.SliverAppBar.new({leading: new basic.Align.new({alignment: alignment.Alignment.bottomCenter, child: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.menu, {$creationLocationd_0dea112b090073317d4: C91 || CT.C91}), onPressed: dart.fn(() => {
                      this[_scaffoldKey].currentState.openDrawer();
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), bottom: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.fromHeight(15.0), child: new text.Text.new("", {$creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), backgroundColor: theme.background, expandedHeight: 150.0, floating: false, pinned: true, flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({collapseMode: flexible_space_bar.CollapseMode.parallax, titlePadding: new edge_insets.EdgeInsets.only({left: dart.notNull(_media.width) * 0.1, bottom: 15.0}), title: new (ValueListenableBuilderOfint()).new({valueListenable: dashboard.pageTitle, builder: dart.fn((context, value, child) => new basic.Stack.new({children: JSArrayOfWidget().of([new implicit_animations.AnimatedOpacity.new({opacity: dart.equals(value, 0) ? 1.0 : 0.0, duration: theme.durVal, child: new text.Text.new("All Requests", {style: theme.textWhite.copyWith({fontSize: 35.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new implicit_animations.AnimatedOpacity.new({opacity: dart.equals(value, 1) ? 1.0 : 0.0, duration: theme.durVal, child: new text.Text.new("Urgent Requests", {style: theme.textWhite.copyWith({fontSize: 35.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), new implicit_animations.AnimatedOpacity.new({opacity: dart.equals(value, 2) ? 1.0 : 0.0, duration: theme.durVal, child: new text.Text.new("Pending Requests", {style: theme.textWhite.copyWith({fontSize: 35.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), new implicit_animations.AnimatedOpacity.new({opacity: dart.equals(value, 3) ? 1.0 : 0.0, duration: theme.durVal, child: new text.Text.new("Approved Requests", {style: theme.textWhite.copyWith({fontSize: 35.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), new implicit_animations.AnimatedOpacity.new({opacity: dart.equals(value, 4) ? 1.0 : 0.0, duration: theme.durVal, child: new text.Text.new("Rejected Requests", {style: theme.textWhite.copyWith({fontSize: 35.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149})]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), BuildContextAnddynamicAndWidgetToStack()), $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C166 || CT.C166})]), BuildContextAndboolToListOfWidget()), body: new container.Container.new({width: _media.width, color: theme.background, child: new single_child_scroll_view.SingleChildScrollView.new({physics: new scroll_physics.BouncingScrollPhysics.new(), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Center.new({child: new scroll_view.ListView.builder({physics: new scroll_physics.NeverScrollableScrollPhysics.new(), shrinkWrap: true, itemCount: 15, itemBuilder: dart.fn((context, index) => new statusCard.TestCard.new({$creationLocationd_0dea112b090073317d4: C175 || CT.C175}), BuildContextAndintToTestCard()), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({height: 150.0, width: 150.0, child: new flare_actor.FlareActor.new("assets/flare/empty.flr", {alignment: alignment.Alignment.center, fit: box_fit.BoxFit.contain, animation: "idle", $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), new text.Text.new("Nothing more to see here!", {style: theme.textWhite, $creationLocationd_0dea112b090073317d4: C199 || CT.C199})]), $creationLocationd_0dea112b090073317d4: C203 || CT.C203}), $creationLocationd_0dea112b090073317d4: C206 || CT.C206}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C209 || CT.C209})]), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), $creationLocationd_0dea112b090073317d4: C216 || CT.C216}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), $creationLocationd_0dea112b090073317d4: C225 || CT.C225}), floatingActionButton: new floating_action_button.FloatingActionButton.extended({tooltip: "Submit a new request", onPressed: dart.fn(() => {
            }, VoidToNull()), backgroundColor: theme.accent, label: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.add, {color: colors.Colors.white, size: 13.0, $creationLocationd_0dea112b090073317d4: C229 || CT.C229}), new basic.Padding.new({padding: C234 || CT.C234, child: new text.Text.new("NEW", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 15.0, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239})]), $creationLocationd_0dea112b090073317d4: C243 || CT.C243}), $creationLocationd_0dea112b090073317d4: C246 || CT.C246}), bottomNavigationBar: new bottomnav.BottomNavCustom.new({$creationLocationd_0dea112b090073317d4: C252 || CT.C252}), $creationLocationd_0dea112b090073317d4: C253 || CT.C253}), $creationLocationd_0dea112b090073317d4: C260 || CT.C260});
    }
  };
  (dashboard._DashboardState.new = function() {
    this[_scaffoldKey] = GlobalKeyOfScaffoldState().new();
    dashboard._DashboardState.__proto__.new.call(this);
    ;
  }).prototype = dashboard._DashboardState.prototype;
  dart.addTypeTests(dashboard._DashboardState);
  dart.setMethodSignature(dashboard._DashboardState, () => ({
    __proto__: dart.getMethods(dashboard._DashboardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dashboard._DashboardState, "package:pda_portal/ui_2/dashboard.dart");
  dart.setFieldSignature(dashboard._DashboardState, () => ({
    __proto__: dart.getFields(dashboard._DashboardState.__proto__),
    [_scaffoldKey]: dart.finalFieldType(framework.GlobalKey$(scaffold.ScaffoldState))
  }));
  dart.defineLazy(dashboard, {
    /*dashboard.pageTitle*/get pageTitle() {
      return new (ValueNotifierOfint()).new(0);
    },
    set pageTitle(_) {}
  });
  dart.trackLibraries("packages/pda_portal/ui_2/dashboard", {
    "package:pda_portal/widgets/bottomnav.dart": bottomnav,
    "package:pda_portal/ui_2/dashboard.dart": dashboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../widgets/bottomnav.dart","dashboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUyC;IAAuB;;;;;;EAChE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AAClB,mBAAmB,AAAY,0BAAT,OAAO;AACnC,YAAO,2CACU,uCACE,eAEV,AAAO,MAAD,gBACQ,aAAb,AAAO,MAAD,WAAQ,aACf,yBACS,2CACL,kEACI,oBACW,0CACT,SAAC,SAAS,UACb,+BAAa,AAAS,2BAAC,KAAK,GAAG,KAAK,EAAE;IAGxD;;;;;EACF;;;;;;;;;;;IAGwB;;;;;;IACT;;;;;;IACH;;;;;;;AAG0B;IAAoB;;yCAFtC,MAAW,OAAY;;IAAvB;IAAW;IAAY;AAAzC;;EAAgD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOtB;AACxB,YAAK;AACE,gBAAG,AAAa,2BAAE,AAAO;AAC9B,cAAO,EAAC;;;AAEJ,mBAAmB,AAAY,0BAAT,OAAO;AACnC,YAAO,6DACQ,uCACA,oBAED,uDACH,AAAU,UAAA,MACL,sBACP,0BACG,0CACD,AAAU,UAAA,MACV,mCAAkB,qBAAe,YAAsB,8BACvD,mCAAyB,4BAAc,qBAGtC,qCAAuB,cACd,aAAZ,AAAO,MAAD,UAAO,aACC,aAAb,AAAO,MAAD,WAAQ,aACf,kCACS,kCACP,sCACc,AAAQ,kCAAY,cAChC;AAKH,cAJF,cAAS;AACoB,gBAA3B,0BAAe,AAAO;AACQ,gBAA9B,AAAO,AAAO,4BAAS;;AACO,gBAA9B,AAAU,4BAAO;;qCAGd,oCACE,6BACI,kBACL,AAAO,oCACJ,AAAU,UAAA,MACZ,0CAAiC,2BAAoB,+BAAgB,SACrE,AAAU,sCAAgC,8BAAgB;IAO3E;;;;;EACF;;;;;;;;MAzFI,uBAAa;YAAE;;;MACN,mBAAS;YAAG,uBAAC,OAAM,UAAS,WAAU,YAAY;;;;;;ACO5B;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AAClB,mBAAoB,AAAY,0BAAT,OAAO;AACpC,YAAO,qCACE,gCACA,4BACG,8BACC,oCACe,aAAb,AAAO,MAAD,UAAS,cACd,AAAO,MAAD,gBACP,yBACA,gCACa,sBAChB,2CACS,sDAEE,4MAGX,+BACkB,6CAAmB,gBAAe,SAAC,SAAS,UACnD,sDAEE,0BACE,6BACM,sDAEE,kBAAK,unBAW9B,kEACiB,SAAc,SAAc,uBAChC,sBACb,uCACW,gCACgB,yCACd,sCAAiB,kBAAW,uFAAkB;AAAyC,sBAAtC,AAAa,AAAa;gKAC9E,qDACc,uBAAW,cACxB,kBAAK,4IAEG,kCACD,iBACN,eACF,qBACO,2DACc,wDAEZ,uCAAwB,aAAb,AAAO,MAAD,UAAS,aAAa,eAC/C,0DACY,8BACR,SAAC,SAAS,OAAO,UACjB,+BACa,sBAChB,sDACgB,YAAL,KAAK,EAAE,KAAE,MAAE,eACV,qBACH,kBACL,wBACO,AAAU,oCACL,kBACa,4IAI7B,sDACgB,YAAL,KAAK,EAAE,KAAE,MAAE,eACV,qBACH,kBACL,2BACO,AAAU,oCACL,kBACa,4IAI7B,sDACgB,YAAL,KAAK,EAAE,KAAE,MAAE,eACV,qBACH,kBACL,4BACO,AAAU,oCACL,kBACa,4IAI7B,sDACgB,YAAL,KAAK,EAAE,KAAE,MAAE,eACV,qBACH,kBACL,6BACO,AAAU,oCACL,kBACa,4IAI7B,sDACgB,YAAL,KAAK,EAAE,KAAE,MAAE,eACV,qBACH,kBACL,6BACO,AAAU,oCACL,kBACa,mdAYvC,oCACG,AAAO,MAAD,eACN,yBACA,iEACI,uDACF,0CACkC,yCACrB,sBAChB,6BACkB,2CACH,mEACG,iBACD,iBACE,SAAC,SAAS,UACd,+OAGf,gCACU,iEAEV,6BACS,gCACa,sBAChB,qCACY,cACD,cACA,+BACL,sCACqB,iCACT,mCACD,8HAEjB,kBACE,qCACO,oMAKf,gCACU,qUAOuB,mEAChC,mCACI;+CACM,qBACV,6BACa,sBAChB,kBAAW,yBAAmB,2BAAa,iEAC3C,wDAES,kBAAK,eAAc,qCAAwB,+BAAiB,kBAA2B,yRAKnF;IAG3B;;;IA9L+B,qBAAmB;;;EA+LpD;;;;;;;;;;;;MAvMI,mBAAS;YAAG,gCAAc","file":"dashboard.ddc.js"}');
  // Exports:
  return {
    widgets__bottomnav: bottomnav,
    ui_2__dashboard: dashboard
  };
});

//# sourceMappingURL=dashboard.ddc.js.map
