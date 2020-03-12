define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/pda_portal/theme', 'packages/flutter/src/rendering/animated_size', 'packages/line_awesome_icons/line_awesome_icons'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__pda_portal__theme, packages__flutter__src__rendering__animated_size, packages__line_awesome_icons__line_awesome_icons) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const card = packages__flutter__material.src__material__card;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const expansion_tile = packages__flutter__material.src__material__expansion_tile;
  const icons = packages__flutter__material.src__material__icons;
  const theme = packages__pda_portal__theme.theme;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const line_awesome_icons = packages__line_awesome_icons__line_awesome_icons.line_awesome_icons;
  var statusCard = Object.create(dart.library);
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 58,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 78,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 29,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 50,
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
        [_Location_column]: 30,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 38,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 52,
        [_Location_line]: 54,
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
        [_Location_column]: 27,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 43,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 29,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 29,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 27,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 53,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 73,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 41,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 41,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 50,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 63,
        [_Location_line]: 91,
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
        [_Location_column]: 39,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 37,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 37,
        [_Location_line]: 86,
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
        [_Location_column]: 42,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 35,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 84,
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
        [_Location_column]: 38,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 31,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 31,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 29,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 29,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 27,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 23,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 23,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 23,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 21,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C89 || CT.C89,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    }
  });
  statusCard.TestCard = class TestCard extends framework.StatefulWidget {
    createState() {
      return new statusCard._TestCardState.new();
    }
  };
  (statusCard.TestCard.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    statusCard.TestCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = statusCard.TestCard.prototype;
  dart.addTypeTests(statusCard.TestCard);
  dart.setMethodSignature(statusCard.TestCard, () => ({
    __proto__: dart.getMethods(statusCard.TestCard.__proto__),
    createState: dart.fnType(statusCard._TestCardState, [])
  }));
  dart.setLibraryUri(statusCard.TestCard, "package:pda_portal/ui_2/statusCard.dart");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C2;
  var C1;
  var C7;
  var C8;
  var C9;
  var C6;
  var C5;
  var C12;
  var C13;
  var C11;
  var C10;
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
  var C23;
  var C22;
  var C28;
  var C27;
  var C26;
  var C31;
  var C32;
  var C33;
  var C34;
  var C30;
  var C29;
  var C37;
  var C38;
  var C39;
  var C36;
  var C35;
  var C40;
  var C43;
  var C44;
  var C42;
  var C41;
  var C47;
  var C48;
  var C46;
  var C45;
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
  var C65;
  var C62;
  var C61;
  var C68;
  var C69;
  var C70;
  var C71;
  var C67;
  var C66;
  var C74;
  var C75;
  var C76;
  var C77;
  var C73;
  var C72;
  var C80;
  var C81;
  var C82;
  var C83;
  var C79;
  var C78;
  var C86;
  var C87;
  var C85;
  var C84;
  var C90;
  var C91;
  var C89;
  var C88;
  var C94;
  var C95;
  var C93;
  var C92;
  var C98;
  var C99;
  var C100;
  var C101;
  var C97;
  var C96;
  var C104;
  var C105;
  var C106;
  var C103;
  var C102;
  var C109;
  var C108;
  var C107;
  var C112;
  var C113;
  var C111;
  var C110;
  statusCard._TestCardState = class _TestCardState extends framework.State$(statusCard.TestCard) {
    build(context) {
      let _media = media_query.MediaQuery.of(context).size;
      return new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Column.new({children: JSArrayOfWidget().of([new implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({milliseconds: 200}), width: dart.notNull(_media.width) * 0.8, child: new card.Card.new({color: colors.Colors.transparent, elevation: 5.0, margin: new edge_insets.EdgeInsets.only({top: 15.0}), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: theme.card, borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(5.0))}), child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({borderRadius: new border_radius.BorderRadius.circular(5.0), child: new expansion_tile.ExpansionTile.new({leading: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({right: 12.0}), decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({right: new borders.BorderSide.new({width: 1.0, color: colors.Colors.white24})})}), child: new icon.Icon.new(line_awesome_icons.LineAwesomeIcons.exclamation_circle, {color: colors.Colors.yellowAccent, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), title: new text.Text.new("SSIC 2019", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), subtitle: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.linear_scale, {color: colors.Colors.yellowAccent, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new text.Text.new("Pending", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), children: JSArrayOfWidget().of([new material.Material.new({color: colors.Colors.transparent, elevation: 2.0, child: new implicit_animations.AnimatedContainer.new({width: dart.notNull(_media.width) * 0.8, decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.grey.shade50}), duration: new core.Duration.new({milliseconds: 100}), height: 200.0, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({milliseconds: 100}), width: dart.notNull(_media.width) * 0.8, height: 35.0, child: new material.Material.new({color: theme.card, elevation: 2.0, borderRadius: new border_radius.BorderRadius.only({bottomLeft: new ui.Radius.circular(5.0), bottomRight: new ui.Radius.circular(5.0)}), child: new ink_well.InkWell.new({borderRadius: new border_radius.BorderRadius.only({bottomLeft: new ui.Radius.circular(5.0), bottomRight: new ui.Radius.circular(5.0)}), onTap: dart.fn(() => {
                                }, VoidToNull()), child: new basic.Align.new({alignment: alignment.Alignment.center, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C40 || CT.C40, child: new text.Text.new("More Information", {style: theme.textWhite.copyWith({fontWeight: ui.FontWeight.w400, fontSize: 15.0}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new icon.Icon.new(icons.Icons.arrow_right, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72})]), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C96 || CT.C96}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102})]), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C110 || CT.C110});
    }
  };
  (statusCard._TestCardState.new = function() {
    statusCard._TestCardState.__proto__.new.call(this);
    ;
  }).prototype = statusCard._TestCardState.prototype;
  dart.addTypeTests(statusCard._TestCardState);
  dart.setMethodSignature(statusCard._TestCardState, () => ({
    __proto__: dart.getMethods(statusCard._TestCardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(statusCard._TestCardState, "package:pda_portal/ui_2/statusCard.dart");
  dart.trackLibraries("packages/pda_portal/ui_2/statusCard", {
    "package:pda_portal/ui_2/statusCard.dart": statusCard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["statusCard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AAClB,mBAAmB,AAAY,0BAAT,OAAO;AACnC,YAAO,qDAEE,gCACa,sBAChB,yDACY,qCAAuB,cACd,aAAZ,AAAO,MAAD,UAAO,YACb,0BACS,sCACH,aACQ,sCAAU,eACtB,yCACO,6CACD,0BACkB,mCAAW,uBAAS,gBAE1C,kCACS,kCACP,wCACsB,wCAAS,aAC7B,+CACI,yCAC8B,yCACnB,sBAChB,sCACsB,wCAAY,oBACpB,8CACA,kCACG,mCAAkB,YAAmB,oCAC7C,kBAAsB,gEAAkC,4MAI9D,kBACL,qBACO,qCAAwB,iCAA8B,yFAErD,6BACU,sBAChB,kBAAW,kCAA4B,qFACvC,kBAAK,mBAAkB,qCAAwB,qJAGjC,sBAChB,kCACgB,sCACH,YACJ,sDACc,aAAZ,AAAO,MAAD,UAAO,iBACR,6CACI,AAAK,wCAEX,qCAAuB,eACzB,yHAGZ,yDACY,qCAAuB,cACd,aAAZ,AAAO,MAAD,UAAO,aACZ,aACD,kCACE,uBACI,mBACgB,iDAAwB,uBAAS,mBAAwB,uBAAS,eACtF,wCACsB,iDAAwB,uBAAS,mBAAwB,uBAAS,eACtF;yDACA,gCACkB,mCACd,sCACgC,yCACnB,sBAChB,sDAES,kBAAK,4BAA2B,AAAU,sCAAgC,8BAAgB,0HAEnG,kBAAW,iCAA2B;IAgB1E;;;;;EACF","file":"statusCard.ddc.js"}');
  // Exports:
  return {
    ui_2__statusCard: statusCard
  };
});

//# sourceMappingURL=statusCard.ddc.js.map
