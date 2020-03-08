define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/pda_portal/theme', 'packages/flutter/src/rendering/animated_size', 'packages/pda_portal/ui_2/statusCard', 'packages/flutter_screenutil/flutter_screenutil'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__pda_portal__theme, packages__flutter__src__rendering__animated_size, packages__pda_portal__ui_2__statusCard, packages__flutter_screenutil__flutter_screenutil) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const nested_scroll_view = packages__flutter__src__widgets__actions.src__widgets__nested_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const flexible_space_bar = packages__flutter__material.src__material__flexible_space_bar;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const theme = packages__pda_portal__theme.theme;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const statusCard = packages__pda_portal__ui_2__statusCard.ui_2__statusCard;
  const flutter_screenutil = packages__flutter_screenutil__flutter_screenutil.flutter_screenutil;
  var dashboard = Object.create(dart.library);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  var BuildContextAndboolToListOfWidget = () => (BuildContextAndboolToListOfWidget = dart.constFn(dart.fnType(ListOfWidget(), [framework.BuildContext, core.bool])))();
  var BuildContextAndintToTestCard = () => (BuildContextAndintToTestCard = dart.constFn(dart.fnType(statusCard.TestCard, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 25,
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
        [_Location_column]: 29,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 26,
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
        [_Location_column]: 28,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "preferredSize",
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 30,
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
        [_Location_column]: 25,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 41,
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
        [_Location_column]: 26,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "collapseMode",
        [_Location_column]: 19,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "titlePadding",
        [_Location_column]: 19,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottom",
        [_Location_column]: 17,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 17,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 17,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floating",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 17,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 17,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C37() {
      return C37 = dart.constList([], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 25,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 25,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 25,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 25,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 43,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 37,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 33,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 33,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 29,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 27,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 27,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "headerSliverBuilder",
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 50,
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
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dashboard.dart"
      });
    }
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
  var C8;
  var C7;
  var C13;
  var C12;
  var C11;
  var C16;
  var C17;
  var C15;
  var C14;
  var C20;
  var C21;
  var C19;
  var C18;
  var C24;
  var C25;
  var C26;
  var C23;
  var C22;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C28;
  var C27;
  var C37;
  var C36;
  var C40;
  var C41;
  var C42;
  var C43;
  var C39;
  var C38;
  var C46;
  var C45;
  var C44;
  var C49;
  var C48;
  var C47;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C50;
  var C53;
  var C54;
  var C52;
  var C51;
  var C57;
  var C58;
  var C59;
  var C56;
  var C55;
  var C62;
  var C63;
  var C61;
  var C60;
  var C66;
  var C67;
  var C65;
  var C64;
  var C70;
  var C71;
  var C72;
  var C69;
  var C68;
  var C75;
  var C76;
  var C77;
  var C74;
  var C73;
  var C80;
  var C81;
  var C79;
  var C78;
  var C84;
  var C85;
  var C83;
  var C82;
  var C88;
  var C87;
  var C86;
  var C91;
  var C92;
  var C90;
  var C89;
  var C95;
  var C96;
  var C94;
  var C93;
  var C99;
  var C100;
  var C101;
  var C98;
  var C97;
  var C104;
  var C105;
  var C103;
  var C102;
  var C108;
  var C107;
  var C106;
  var C111;
  var C110;
  var C109;
  dashboard._DashboardState = class _DashboardState extends framework.State$(dashboard.Dashboard) {
    build(context) {
      let _media = media_query.MediaQuery.of(context).size;
      return new scrollbar.Scrollbar.new({child: new scaffold.Scaffold.new({body: new nested_scroll_view.NestedScrollView.new({headerSliverBuilder: dart.fn((context, innerBoxIsScrolled) => JSArrayOfWidget().of([new app_bar.SliverAppBar.new({leading: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 15.0, left: dart.notNull(_media.width) * 0.015}), child: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.menu, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => {
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), bottom: new preferred_size.PreferredSize.new({preferredSize: new ui.Size.fromHeight(15.0), child: new text.Text.new("", {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), backgroundColor: theme.background, expandedHeight: 150.0, floating: false, pinned: true, flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({collapseMode: flexible_space_bar.CollapseMode.parallax, titlePadding: new edge_insets.EdgeInsets.only({left: dart.notNull(_media.width) * 0.1, bottom: 15.0}), title: new text.Text.new("Pending Requests", {style: theme.textWhite.copyWith({fontSize: 35.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), BuildContextAndboolToListOfWidget()), body: new container.Container.new({width: _media.width, color: theme.background, child: new single_child_scroll_view.SingleChildScrollView.new({physics: new scroll_physics.BouncingScrollPhysics.new(), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Center.new({child: new scroll_view.ListView.builder({physics: new scroll_physics.BouncingScrollPhysics.new(), shrinkWrap: true, itemCount: 4, itemBuilder: dart.fn((context, index) => new statusCard.TestCard.new({$creationLocationd_0dea112b090073317d4: C36 || CT.C36}), BuildContextAndintToTestCard()), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.Center.new({child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: colors.Colors.white}), color: colors.Colors.white, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10.0))}), child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(10.0)), onTap: dart.fn(() => {
                            }, VoidToNull()), child: new container.Container.new({width: flutter_screenutil.ScreenUtil.new().setWidth(200), constraints: new box.BoxConstraints.new({maxWidth: 200.0}), child: new basic.Padding.new({padding: C50 || CT.C50, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("ADD", {style: theme.textWhite.copyWith({fontSize: theme.wSize(25.0, 15), fontWeight: ui.FontWeight.bold, color: theme.background}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new icon.Icon.new(icons.Icons.add, {size: theme.wSize(30.0, 20), color: theme.background, $creationLocationd_0dea112b090073317d4: C55 || CT.C55})]), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109});
    }
  };
  (dashboard._DashboardState.new = function() {
    dashboard._DashboardState.__proto__.new.call(this);
    ;
  }).prototype = dashboard._DashboardState.prototype;
  dart.addTypeTests(dashboard._DashboardState);
  dart.setMethodSignature(dashboard._DashboardState, () => ({
    __proto__: dart.getMethods(dashboard._DashboardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dashboard._DashboardState, "package:pda_portal/ui_2/dashboard.dart");
  dart.trackLibraries("packages/pda_portal/ui_2/dashboard", {
    "package:pda_portal/ui_2/dashboard.dart": dashboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dashboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AAClB,mBAAoB,AAAY,0BAAT,OAAO;AACpC,YAAO,qCACE,iCACC,kEACiB,SAAc,SAAc,uBAChC,sBACb,uCACW,gCACe,sCAAU,YAAsB,aAAZ,AAAO,MAAD,UAAO,gBAC9C,sCACC,kBAAW,qFACN;4JAET,qDACc,uBAAW,cACxB,kBAAK,wIAEG,kCACD,iBACN,eACF,qBACO,2DACc,wDACF,uCAAuB,aAAZ,AAAO,MAAD,UAAO,aAAa,eACvD,kBACL,4BACO,AAAU,oCACL,kBACa,+OAO7B,oCACG,AAAO,MAAD,eACN,yBACA,iEACI,uDACF,0CACkC,yCACrB,sBAChB,6BACkB,2CACH,4DACG,iBACD,gBACE,SAAC,SAAS,UACd,yOAGf,gCACU,+DAEV,6BACS,yCACO,8CACO,8BAAkB,8BACnB,mCACa,mCAAW,uBAAS,iBAC5C,kCACS,kCACP,wCACsB,mCAAW,uBAAS,eACxC;qDACA,oCACE,AAAa,6CAAS,mBAChB,sCAAyB,gBAC/B,sDAEE,sCACgC,yCACnB,sBAChB,kBACE,eACO,AAAU,oCACH,YAAM,MAAI,iBACG,2BAChB,6EAEb,kBACQ,wBACA,YAAM,MAAI,YACT;IAiBzC;;;;;EACF","file":"dashboard.ddc.js"}');
  // Exports:
  return {
    ui_2__dashboard: dashboard
  };
});

//# sourceMappingURL=dashboard.ddc.js.map