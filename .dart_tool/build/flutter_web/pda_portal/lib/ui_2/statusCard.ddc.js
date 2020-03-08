define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/pda_portal/theme', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/line_awesome_icons/line_awesome_icons'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__pda_portal__theme, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__line_awesome_icons__line_awesome_icons) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const implicit_animations = packages__flutter__src__widgets__actions.src__widgets__implicit_animations;
  const placeholder = packages__flutter__src__widgets__actions.src__widgets__placeholder;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_shadow = packages__flutter__src__painting___network_image_web.src__painting__box_shadow;
  const theme = packages__pda_portal__theme.theme;
  const card = packages__flutter__material.src__material__card;
  const colors = packages__flutter__material.src__material__colors;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const line_awesome_icons = packages__line_awesome_icons__line_awesome_icons.line_awesome_icons;
  var statusCard = Object.create(dart.library);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(box_shadow.BoxShadow)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 3,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 60,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 80,
        [_Location_line]: 45,
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
        [_Location_column]: 38,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 45,
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
        [_Location_column]: 29,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 39,
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
        [_Location_column]: 34,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 53,
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
        [_Location_column]: 32,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 57,
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
        [_Location_column]: 29,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 45,
        [_Location_line]: 58,
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
        [_Location_column]: 29,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 56,
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
        [_Location_column]: 35,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 58,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 79,
        [_Location_line]: 63,
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
        [_Location_column]: 28,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 60,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 81,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 25,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 25,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dense",
        [_Location_column]: 23,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isThreeLine",
        [_Location_column]: 23,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 25,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 25,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 25,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "hoverColor",
        [_Location_column]: 21,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 30,
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
        [_Location_column]: 26,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 28,
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
        [_Location_column]: 24,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 26,
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
        [_Location_column]: 22,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C68 || CT.C68,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C72() {
      return C72 = dart.constList([], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 16,
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
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fallbackHeight",
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fallbackWidth",
        [_Location_column]: 13,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 100,
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
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 98,
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
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 25,
        [_Location_line]: 147,
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
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 47,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 61,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 82,
        [_Location_line]: 159,
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
        [_Location_column]: 36,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 29,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 29,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 29,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 29,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 17,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C134 || CT.C134,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 5
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 21,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146, C147 || CT.C147], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 17,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 30,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 60,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 81,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 103,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 119,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 140,
        [_Location_line]: 229,
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
        [_Location_column]: 92,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 21,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 19,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 235,
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
        [_Location_column]: 15,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C192 || CT.C192,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/statusCard.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C200 || CT.C200,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 125,
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
  var _expanded = dart.privateName(statusCard, "_expanded");
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
  var C30;
  var C29;
  var C36;
  var C37;
  var C38;
  var C35;
  var C34;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C40;
  var C39;
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
  var C66;
  var C62;
  var C61;
  var C69;
  var C70;
  var C68;
  var C67;
  var C72;
  var C71;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C74;
  var C73;
  var C82;
  var C81;
  var C80;
  var C85;
  var C86;
  var C84;
  var C83;
  statusCard._TestCardState = class _TestCardState extends framework.State$(statusCard.TestCard) {
    build(context) {
      return new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({width: theme.wWidth(800.0), child: new card.Card.new({color: colors.Colors.transparent, elevation: 5.0, margin: new edge_insets.EdgeInsets.only({right: 10.0, left: 10.0, top: 10.0}), child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: theme.card}), child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({hoverColor: colors.Colors.yellowAccent, child: new list_tile.ListTile.new({onTap: dart.fn(() => {
                          this.setState(dart.fn(() => {
                            dart.test(this[_expanded]) ? this[_expanded] = false : this[_expanded] = true;
                          }, VoidToNull()));
                        }, VoidToNull()), contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 20.0, vertical: 10.0}), leading: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({right: 12.0}), decoration: new box_decoration.BoxDecoration.new({border: new box_border.Border.new({right: new borders.BorderSide.new({width: 1.0, color: colors.Colors.white24})})}), child: new icon.Icon.new(line_awesome_icons.LineAwesomeIcons.exclamation_circle, {color: colors.Colors.white, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), dense: true, isThreeLine: false, title: new text.Text.new("Placeholder Text", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), subtitle: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.linear_scale, {color: colors.Colors.yellowAccent, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new text.Text.new("Pending", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), trailing: dart.test(this[_expanded]) ? new icon.Icon.new(icons.Icons.keyboard_arrow_up, {color: colors.Colors.white, size: 30.0, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}) : new icon.Icon.new(icons.Icons.keyboard_arrow_down, {color: colors.Colors.white, size: 30.0, $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), new implicit_animations.AnimatedContainer.new({width: theme.wWidth(750.0), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.grey.shade50, border: new box_border.Border.new(), borderRadius: new border_radius.BorderRadius.only({bottomLeft: new ui.Radius.circular(5.0), bottomRight: new ui.Radius.circular(5.0)})}), duration: new core.Duration.new({milliseconds: 170}), height: dart.test(this[_expanded]) ? 150.0 : 0.0, child: new statusCard.StatusInfo.new({$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73})]), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
    }
  };
  (statusCard._TestCardState.new = function() {
    this[_expanded] = false;
    statusCard._TestCardState.__proto__.new.call(this);
    ;
  }).prototype = statusCard._TestCardState.prototype;
  dart.addTypeTests(statusCard._TestCardState);
  dart.setMethodSignature(statusCard._TestCardState, () => ({
    __proto__: dart.getMethods(statusCard._TestCardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(statusCard._TestCardState, "package:pda_portal/ui_2/statusCard.dart");
  dart.setFieldSignature(statusCard._TestCardState, () => ({
    __proto__: dart.getFields(statusCard._TestCardState.__proto__),
    [_expanded]: dart.fieldType(core.bool)
  }));
  statusCard.StatusInfo = class StatusInfo extends framework.StatefulWidget {
    createState() {
      return new statusCard._StatusInfoState.new();
    }
  };
  (statusCard.StatusInfo.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    statusCard.StatusInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = statusCard.StatusInfo.prototype;
  dart.addTypeTests(statusCard.StatusInfo);
  dart.setMethodSignature(statusCard.StatusInfo, () => ({
    __proto__: dart.getMethods(statusCard.StatusInfo.__proto__),
    createState: dart.fnType(statusCard._StatusInfoState, [])
  }));
  dart.setLibraryUri(statusCard.StatusInfo, "package:pda_portal/ui_2/statusCard.dart");
  var C89;
  var C90;
  var C88;
  var C87;
  var C93;
  var C94;
  var C92;
  var C91;
  var C97;
  var C96;
  var C95;
  statusCard._StatusInfoState = class _StatusInfoState extends framework.State$(statusCard.StatusInfo) {
    build(context) {
      return new container.Container.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new placeholder.Placeholder.new({fallbackHeight: 100.0, fallbackWidth: 700.0, $creationLocationd_0dea112b090073317d4: C87 || CT.C87})]), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
    }
  };
  (statusCard._StatusInfoState.new = function() {
    statusCard._StatusInfoState.__proto__.new.call(this);
    ;
  }).prototype = statusCard._StatusInfoState.prototype;
  dart.addTypeTests(statusCard._StatusInfoState);
  dart.setMethodSignature(statusCard._StatusInfoState, () => ({
    __proto__: dart.getMethods(statusCard._StatusInfoState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(statusCard._StatusInfoState, "package:pda_portal/ui_2/statusCard.dart");
  statusCard.reqCard = class reqCard extends framework.StatefulWidget {
    createState() {
      return new statusCard._reqCardState.new();
    }
  };
  (statusCard.reqCard.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    statusCard.reqCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = statusCard.reqCard.prototype;
  dart.addTypeTests(statusCard.reqCard);
  dart.setMethodSignature(statusCard.reqCard, () => ({
    __proto__: dart.getMethods(statusCard.reqCard.__proto__),
    createState: dart.fnType(statusCard._reqCardState, [])
  }));
  dart.setLibraryUri(statusCard.reqCard, "package:pda_portal/ui_2/statusCard.dart");
  var C98;
  var C101;
  var C100;
  var C99;
  var C104;
  var C105;
  var C106;
  var C103;
  var C102;
  var C109;
  var C110;
  var C111;
  var C112;
  var C108;
  var C107;
  var C115;
  var C114;
  var C113;
  var C118;
  var C119;
  var C120;
  var C117;
  var C116;
  var C123;
  var C124;
  var C122;
  var C121;
  var C127;
  var C126;
  var C125;
  var C130;
  var C131;
  var C132;
  var C129;
  var C128;
  var C135;
  var C136;
  var C137;
  var C134;
  var C133;
  var C138;
  var C141;
  var C142;
  var C143;
  var C140;
  var C139;
  var C146;
  var C147;
  var C145;
  var C144;
  var C150;
  var C151;
  var C149;
  var C148;
  var C154;
  var C155;
  var C153;
  var C152;
  var C158;
  var C159;
  var C160;
  var C157;
  var C156;
  var C163;
  var C164;
  var C165;
  var C162;
  var C161;
  var C168;
  var C169;
  var C167;
  var C166;
  var C172;
  var C173;
  var C174;
  var C171;
  var C170;
  var C177;
  var C178;
  var C179;
  var C176;
  var C175;
  var C182;
  var C183;
  var C184;
  var C181;
  var C180;
  var C187;
  var C186;
  var C185;
  var C190;
  var C189;
  var C188;
  var C193;
  var C194;
  var C192;
  var C191;
  var C197;
  var C198;
  var C196;
  var C195;
  var C201;
  var C200;
  var C199;
  statusCard._reqCardState = class _reqCardState extends framework.State$(statusCard.reqCard) {
    build(context) {
      return new basic.Center.new({child: new basic.Padding.new({padding: C98 || CT.C98, child: new container.Container.new({width: theme.wWidth(750.0), child: new basic.Column.new({children: JSArrayOfWidget().of([new material.Material.new({color: colors.Colors.transparent, elevation: 5.0, child: new container.Container.new({height: theme.wHeight(100.0), decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.only({topLeft: new ui.Radius.circular(7.5), topRight: new ui.Radius.circular(7.5)}), color: colors.Colors.white}), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new container.Container.new({height: theme.wHeight(50.0), width: theme.wWidth(50.0), decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle, color: colors.Colors.blue}), child: new icon.Icon.new(icons.Icons.announcement, {color: colors.Colors.white, size: theme.wSize(25.0, 15), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new basic.SizedBox.new({height: 5.0, $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new text.Text.new("ACTION\nREQUIRED", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w400, fontSize: 10.0}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C116 || CT.C116})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121})]), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), new basic.Opacity.new({opacity: 1.0, child: new basic.Padding.new({padding: C138 || CT.C138, child: new implicit_animations.AnimatedContainer.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.grey.shade50, border: new box_border.Border.new({left: new borders.BorderSide.new({width: 1.0, color: colors.Colors.white}), right: new borders.BorderSide.new({width: 1.0, color: colors.Colors.white})})}), duration: new core.Duration.new({milliseconds: 200}), height: dart.test(this[_expanded]) ? 150.0 : 0.0, $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148}), new container.Container.new({height: 30.0, decoration: new box_decoration.BoxDecoration.new({boxShadow: JSArrayOfBoxShadow().of([]), borderRadius: new border_radius.BorderRadius.only({bottomLeft: new ui.Radius.circular(7.5), bottomRight: new ui.Radius.circular(7.5)}), border: box_border.Border.all({width: 0.5, color: colors.Colors.white})}), child: new material.Material.new({elevation: 5.0, color: colors.Colors.transparent, child: new ink_well.InkWell.new({borderRadius: new border_radius.BorderRadius.only({bottomLeft: new ui.Radius.circular(7.5), bottomRight: new ui.Radius.circular(7.5)}), onTap: dart.fn(() => {
                        this.setState(dart.fn(() => {
                          dart.test(this[_expanded]) ? this[_expanded] = false : this[_expanded] = true;
                        }, VoidToNull()));
                      }, VoidToNull()), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("STATUS", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.bold, fontSize: 12.0}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152}), dart.test(this[_expanded]) ? new icon.Icon.new(icons.Icons.arrow_drop_up, {color: colors.Colors.white, size: 12.0, $creationLocationd_0dea112b090073317d4: C156 || CT.C156}) : new icon.Icon.new(icons.Icons.arrow_drop_down, {color: colors.Colors.white, size: 12.0, $creationLocationd_0dea112b090073317d4: C161 || CT.C161})]), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170}), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C185 || CT.C185})]), $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), $creationLocationd_0dea112b090073317d4: C191 || CT.C191}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195}), $creationLocationd_0dea112b090073317d4: C199 || CT.C199});
    }
  };
  (statusCard._reqCardState.new = function() {
    this[_expanded] = false;
    statusCard._reqCardState.__proto__.new.call(this);
    ;
  }).prototype = statusCard._reqCardState.prototype;
  dart.addTypeTests(statusCard._reqCardState);
  dart.setMethodSignature(statusCard._reqCardState, () => ({
    __proto__: dart.getMethods(statusCard._reqCardState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(statusCard._reqCardState, "package:pda_portal/ui_2/statusCard.dart");
  dart.setFieldSignature(statusCard._reqCardState, () => ({
    __proto__: dart.getFields(statusCard._reqCardState.__proto__),
    [_expanded]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/pda_portal/ui_2/statusCard", {
    "package:pda_portal/ui_2/statusCard.dart": statusCard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["statusCard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAMkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,qDAEE,gCACa,sBAChB,oCACS,aAAO,eACP,0BACS,sCACH,aACQ,wCAAY,YAAS,WAAQ,eACzC,yCACO,6CAAqB,qBAC1B,kCACS,kCACP,sCACc,mCACZ,mCACE;AAGH,0BAFF,cAAS;AACiC,sCAAxC,mBAAU,kBAAU,QAAM,kBAAU;;0DAGX,kDAAsB,gBAAgB,iBACxD,yCAC8B,yCACnB,sBAChB,sCACsB,wCAAY,oBACpB,8CACA,kCACG,mCAAkB,YAAmB,oCAC7C,kBAAsB,gEAAkC,qMAIhE,mBACM,cACJ,kBACL,4BACO,qCAAwB,iCAA8B,yFAErD,6BACU,sBAChB,kBAAW,kCAA4B,qFACvC,kBAAK,mBAAkB,qCAAwB,+JAInD,mBACG,kBAAW,uCAAiC,2BAAa,gEACzD,kBAAW,yCAAmC,2BAAa,qZAO5E,sDACS,aAAO,oBACF,6CACI,AAAK,oCACX,2CAEmB,iDAAwB,uBAAS,mBAAuB,uBAAS,oBAEpF,qCAAuB,yBACzB,mBAAU,QAAI,YACf;IAKjB;;;IA3EK,kBAAW;;;EA4ElB;;;;;;;;;;;;;AAIoC;IAAkB;;;;;;EACtD;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,qCACE,yCACgC,8CACnB,sBAChB,iDACkB,sBACD;IAKzB;;;;;EACF;;;;;;;;;AASiC;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACxB,YAAO,8BACE,sDAEE,oCACE,aAAO,eACP,gCACa,sBAChB,kCACgB,sCACH,YACJ,qCACG,cAAQ,oBACJ,oDACiB,8CACP,uBAAS,gBACR,uBAAS,eAEhB,8BAET,6BACa,sBAChB,+BACS,+DAET,yCACuC,yCACnB,sBAChB,qCACU,cAAQ,cACT,aAAO,mBACF,6CACQ,mCACF,6BAEX,kBAAW,kCAA4B,2BAAa,YAAM,MAAI,2HAEvE,gCACU,gEAEV,kBAAK,4BACI,0CACoB,8BACb,mBAEO,gUAQnC,gCACW,YACF,wDAEE,2DACO,6CACI,AAAK,oCACX,iCACA,mCAAkB,YAAiB,8BAClC,mCAAkB,YAAiB,qCAGpC,qCAAuB,yBACzB,mBAAU,QAAI,sLAI5B,qCACU,kBACI,iDACG,2CAGgB,iDACJ,uBAAS,mBACR,uBAAS,gBAElB,8BAAW,YAAmB,gCAE1C,sCACM,YACG,kCACP,wCACsB,iDACN,uBAAS,mBACR,uBAAS,eAExB;AAGH,wBAFF,cAAS;AACiC,oCAAxC,mBAAU,kBAAU,QAAM,kBAAU;;+CAGjC,sCACgC,yCACnB,sBAChB,kBAAK,kBACI,qCACW,iCACS,8BACb,6EAGhB,mBAAU,kBAAW,mCAA4B,2BAAa,kEAAK,kBAAW,qCAA8B,2BAAa,+SAMnI,gCAAgB;IAM5B;;;IAvHK,kBAAW;;;EAwHlB","file":"statusCard.ddc.js"}');
  // Exports:
  return {
    ui_2__statusCard: statusCard
  };
});

//# sourceMappingURL=statusCard.ddc.js.map
