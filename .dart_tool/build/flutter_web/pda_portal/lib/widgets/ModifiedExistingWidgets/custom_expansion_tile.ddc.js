define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const page_storage = packages__flutter__src__widgets__actions.src__widgets__page_storage;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const colors = packages__flutter__material.src__material__colors;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const material = packages__flutter__material.src__material__material;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const theme$ = packages__flutter__material.src__material__theme;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  var custom_expansion_tile = Object.create(dart.library);
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var TweenOfdouble = () => (TweenOfdouble = dart.constFn(tween.Tween$(core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], framework.Widget);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58831
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "turns",
        [_Location_column]: 25,
        [_Location_line]: 180,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 181,
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
        [_Location_column]: 52,
        [_Location_line]: 179,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "contentPadding",
        [_Location_column]: 23,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 23,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 23,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 23,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 23,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 23,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 172,
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
        [_Location_column]: 24,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heightFactor",
        [_Location_column]: 15,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 37,
        [_Location_line]: 222,
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
        [_Location_column]: 30,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 200000
      });
    }
  });
  var C0;
  var leading$ = dart.privateName(custom_expansion_tile, "ExpansionTile.leading");
  var title$ = dart.privateName(custom_expansion_tile, "ExpansionTile.title");
  var subtitle$ = dart.privateName(custom_expansion_tile, "ExpansionTile.subtitle");
  var onExpansionChanged$ = dart.privateName(custom_expansion_tile, "ExpansionTile.onExpansionChanged");
  var children$ = dart.privateName(custom_expansion_tile, "ExpansionTile.children");
  var backgroundColor$ = dart.privateName(custom_expansion_tile, "ExpansionTile.backgroundColor");
  var headerBackgroundColor$ = dart.privateName(custom_expansion_tile, "ExpansionTile.headerBackgroundColor");
  var trailing$ = dart.privateName(custom_expansion_tile, "ExpansionTile.trailing");
  var initiallyExpanded$ = dart.privateName(custom_expansion_tile, "ExpansionTile.initiallyExpanded");
  custom_expansion_tile.ExpansionTile = class ExpansionTile extends framework.StatefulWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get subtitle() {
      return this[subtitle$];
    }
    set subtitle(value) {
      super.subtitle = value;
    }
    get onExpansionChanged() {
      return this[onExpansionChanged$];
    }
    set onExpansionChanged(value) {
      super.onExpansionChanged = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get headerBackgroundColor() {
      return this[headerBackgroundColor$];
    }
    set headerBackgroundColor(value) {
      super.headerBackgroundColor = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get initiallyExpanded() {
      return this[initiallyExpanded$];
    }
    set initiallyExpanded(value) {
      super.initiallyExpanded = value;
    }
    createState() {
      return new custom_expansion_tile._ExpansionTileState.new();
    }
  };
  (custom_expansion_tile.ExpansionTile.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let headerBackgroundColor = opts && 'headerBackgroundColor' in opts ? opts.headerBackgroundColor : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let subtitle = opts && 'subtitle' in opts ? opts.subtitle : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let onExpansionChanged = opts && 'onExpansionChanged' in opts ? opts.onExpansionChanged : null;
    let children = opts && 'children' in opts ? opts.children : C0 || CT.C0;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let initiallyExpanded = opts && 'initiallyExpanded' in opts ? opts.initiallyExpanded : false;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[leading$] = leading;
    this[headerBackgroundColor$] = headerBackgroundColor;
    this[title$] = title;
    this[subtitle$] = subtitle;
    this[backgroundColor$] = backgroundColor;
    this[onExpansionChanged$] = onExpansionChanged;
    this[children$] = children;
    this[trailing$] = trailing;
    this[initiallyExpanded$] = initiallyExpanded;
    if (!(initiallyExpanded != null)) dart.assertFailed(null, "org-dartlang-app:///packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart", 39, 15, "initiallyExpanded != null");
    custom_expansion_tile.ExpansionTile.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = custom_expansion_tile.ExpansionTile.prototype;
  dart.addTypeTests(custom_expansion_tile.ExpansionTile);
  dart.setMethodSignature(custom_expansion_tile.ExpansionTile, () => ({
    __proto__: dart.getMethods(custom_expansion_tile.ExpansionTile.__proto__),
    createState: dart.fnType(custom_expansion_tile._ExpansionTileState, [])
  }));
  dart.setLibraryUri(custom_expansion_tile.ExpansionTile, "package:pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart");
  dart.setFieldSignature(custom_expansion_tile.ExpansionTile, () => ({
    __proto__: dart.getFields(custom_expansion_tile.ExpansionTile.__proto__),
    leading: dart.finalFieldType(framework.Widget),
    title: dart.finalFieldType(framework.Widget),
    subtitle: dart.finalFieldType(framework.Widget),
    onExpansionChanged: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    children: dart.finalFieldType(core.List$(framework.Widget)),
    backgroundColor: dart.finalFieldType(ui.Color),
    headerBackgroundColor: dart.finalFieldType(ui.Color),
    trailing: dart.finalFieldType(framework.Widget),
    initiallyExpanded: dart.finalFieldType(core.bool)
  }));
  var _borderColorTween = dart.privateName(custom_expansion_tile, "_borderColorTween");
  var _headerColorTween = dart.privateName(custom_expansion_tile, "_headerColorTween");
  var _iconColorTween = dart.privateName(custom_expansion_tile, "_iconColorTween");
  var _backgroundColorTween = dart.privateName(custom_expansion_tile, "_backgroundColorTween");
  var _controller = dart.privateName(custom_expansion_tile, "_controller");
  var _iconTurns = dart.privateName(custom_expansion_tile, "_iconTurns");
  var _heightFactor = dart.privateName(custom_expansion_tile, "_heightFactor");
  var _borderColor = dart.privateName(custom_expansion_tile, "_borderColor");
  var _headerColor = dart.privateName(custom_expansion_tile, "_headerColor");
  var _iconColor = dart.privateName(custom_expansion_tile, "_iconColor");
  var _backgroundColor = dart.privateName(custom_expansion_tile, "_backgroundColor");
  var _isExpanded = dart.privateName(custom_expansion_tile, "_isExpanded");
  var _handleTap = dart.privateName(custom_expansion_tile, "_handleTap");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var C2;
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C5;
  var C6;
  var C4;
  var C3;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C8;
  var C7;
  var C17;
  var C16;
  var C15;
  var C20;
  var C19;
  var C18;
  var C23;
  var C24;
  var C22;
  var C21;
  var C27;
  var C28;
  var C26;
  var C25;
  var C31;
  var C32;
  var C30;
  var C29;
  var C35;
  var C34;
  var C33;
  var C38;
  var C39;
  var C37;
  var C36;
  var C42;
  var C43;
  var C41;
  var C40;
  var _buildChildren = dart.privateName(custom_expansion_tile, "_buildChildren");
  var C46;
  var C45;
  var C44;
  var C49;
  var C50;
  var C51;
  var C48;
  var C47;
  const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(custom_expansion_tile.ExpansionTile) {};
  (State_SingleTickerProviderStateMixin$36.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(custom_expansion_tile.ExpansionTile)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(custom_expansion_tile.ExpansionTile));
  custom_expansion_tile._ExpansionTileState = class _ExpansionTileState extends State_SingleTickerProviderStateMixin$36 {
    initState() {
      let t0, t0$;
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: custom_expansion_tile._kExpand, vsync: this});
      this[_heightFactor] = this[_controller].drive(core.double, custom_expansion_tile._ExpansionTileState._easeInTween);
      this[_iconTurns] = this[_controller].drive(core.double, custom_expansion_tile._ExpansionTileState._halfTween.chain(custom_expansion_tile._ExpansionTileState._easeInTween));
      this[_borderColor] = this[_controller].drive(ui.Color, this[_borderColorTween].chain(custom_expansion_tile._ExpansionTileState._easeOutTween));
      this[_headerColor] = this[_controller].drive(ui.Color, this[_headerColorTween].chain(custom_expansion_tile._ExpansionTileState._easeInTween));
      this[_iconColor] = this[_controller].drive(ui.Color, this[_iconColorTween].chain(custom_expansion_tile._ExpansionTileState._easeInTween));
      this[_backgroundColor] = this[_controller].drive(ui.Color, this[_backgroundColorTween].chain(custom_expansion_tile._ExpansionTileState._easeOutTween));
      this[_isExpanded] = (t0$ = core.bool.as((t0 = page_storage.PageStorage.of(this.context), t0 == null ? null : t0.readState(this.context))), t0$ == null ? this.widget.initiallyExpanded : t0$);
      if (dart.test(this[_isExpanded])) this[_controller].value = 1.0;
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    [_handleTap]() {
      this.setState(dart.fn(() => {
        let t0;
        this[_isExpanded] = !dart.test(this[_isExpanded]);
        if (dart.test(this[_isExpanded])) {
          this[_controller].forward();
        } else {
          this[_controller].reverse().then(dart.void, dart.fn(value => {
            if (!dart.test(this.mounted)) return;
            this.setState(dart.fn(() => {
            }, VoidToNull()));
          }, voidToNull()));
        }
        t0 = page_storage.PageStorage.of(this.context);
        t0 == null ? null : t0.writeState(this.context, this[_isExpanded]);
      }, VoidToNull()));
      if (this.widget.onExpansionChanged != null) this.widget.onExpansionChanged(this[_isExpanded]);
    }
    [_buildChildren](context, child) {
      let t0, t0$, t0$0;
      let borderSideColor = (t0 = this[_borderColor].value, t0 == null ? colors.Colors.transparent : t0);
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: (t0$ = this[_backgroundColor].value, t0$ == null ? colors.Colors.transparent : t0$), border: new box_border.Border.new({top: new borders.BorderSide.new({color: borderSideColor}), bottom: new borders.BorderSide.new({color: borderSideColor})})}), child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([list_tile.ListTileTheme.merge({iconColor: this[_iconColor].value, textColor: this[_headerColor].value, child: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(5.0)), color: this.widget.headerBackgroundColor}), child: new material.Material.new({color: colors.Colors.transparent, child: new ink_well.InkWell.new({child: new container.Container.new({child: new list_tile.ListTile.new({contentPadding: new edge_insets.EdgeInsets.symmetric({horizontal: 20.0, vertical: 15.0}), onTap: dart.bind(this, _handleTap), leading: this.widget.leading, title: this.widget.title, subtitle: this.widget.subtitle, trailing: (t0$0 = this.widget.trailing, t0$0 == null ? new transitions.RotationTransition.new({turns: this[_iconTurns], child: C1 || CT.C1, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}) : t0$0), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25})}), new basic.ClipRect.new({child: new basic.Align.new({heightFactor: this[_heightFactor].value, child: child, $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40});
    }
    didChangeDependencies() {
      let t0, t0$, t0$0, t0$1;
      let theme = theme$.Theme.of(this.context);
      t0 = this[_borderColorTween];
      t0.end = theme.dividerColor;
      t0;
      t0$ = this[_headerColorTween];
      t0$.begin = theme.textTheme.subtitle1.color;
      t0$.end = theme.accentColor;
      t0$;
      t0$0 = this[_iconColorTween];
      t0$0.begin = theme.unselectedWidgetColor;
      t0$0.end = theme.accentColor;
      t0$0;
      t0$1 = this[_backgroundColorTween];
      t0$1.end = this.widget.backgroundColor;
      t0$1;
      super.didChangeDependencies();
    }
    build(context) {
      let closed = !dart.test(this[_isExpanded]) && dart.test(this[_controller].isDismissed);
      return new transitions.AnimatedBuilder.new({animation: this[_controller].view, builder: dart.bind(this, _buildChildren), child: closed ? null : new basic.Column.new({children: this.widget.children, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
    }
  };
  (custom_expansion_tile._ExpansionTileState.new = function() {
    this[_borderColorTween] = new tween.ColorTween.new();
    this[_headerColorTween] = new tween.ColorTween.new();
    this[_iconColorTween] = new tween.ColorTween.new();
    this[_backgroundColorTween] = new tween.ColorTween.new();
    this[_controller] = null;
    this[_iconTurns] = null;
    this[_heightFactor] = null;
    this[_borderColor] = null;
    this[_headerColor] = null;
    this[_iconColor] = null;
    this[_backgroundColor] = null;
    this[_isExpanded] = false;
    custom_expansion_tile._ExpansionTileState.__proto__.new.call(this);
    ;
  }).prototype = custom_expansion_tile._ExpansionTileState.prototype;
  dart.addTypeTests(custom_expansion_tile._ExpansionTileState);
  dart.setMethodSignature(custom_expansion_tile._ExpansionTileState, () => ({
    __proto__: dart.getMethods(custom_expansion_tile._ExpansionTileState.__proto__),
    [_handleTap]: dart.fnType(dart.void, []),
    [_buildChildren]: dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(custom_expansion_tile._ExpansionTileState, "package:pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart");
  dart.setFieldSignature(custom_expansion_tile._ExpansionTileState, () => ({
    __proto__: dart.getFields(custom_expansion_tile._ExpansionTileState.__proto__),
    [_borderColorTween]: dart.finalFieldType(tween.ColorTween),
    [_headerColorTween]: dart.finalFieldType(tween.ColorTween),
    [_iconColorTween]: dart.finalFieldType(tween.ColorTween),
    [_backgroundColorTween]: dart.finalFieldType(tween.ColorTween),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_iconTurns]: dart.fieldType(animation.Animation$(core.double)),
    [_heightFactor]: dart.fieldType(animation.Animation$(core.double)),
    [_borderColor]: dart.fieldType(animation.Animation$(ui.Color)),
    [_headerColor]: dart.fieldType(animation.Animation$(ui.Color)),
    [_iconColor]: dart.fieldType(animation.Animation$(ui.Color)),
    [_backgroundColor]: dart.fieldType(animation.Animation$(ui.Color)),
    [_isExpanded]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(custom_expansion_tile._ExpansionTileState, {
    /*custom_expansion_tile._ExpansionTileState._easeOutTween*/get _easeOutTween() {
      return new tween.CurveTween.new({curve: curves.Curves.easeOut});
    },
    /*custom_expansion_tile._ExpansionTileState._easeInTween*/get _easeInTween() {
      return new tween.CurveTween.new({curve: curves.Curves.easeIn});
    },
    /*custom_expansion_tile._ExpansionTileState._halfTween*/get _halfTween() {
      return new (TweenOfdouble()).new({begin: 0.0, end: 0.5});
    }
  });
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C52;
  dart.defineLazy(custom_expansion_tile, {
    /*custom_expansion_tile._kExpand*/get _kExpand() {
      return C52 || CT.C52;
    }
  });
  dart.trackLibraries("packages/pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile", {
    "package:pda_portal/widgets/ModifiedExistingWidgets/custom_expansion_tile.dart": custom_expansion_tile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_expansion_tile.dart"],"names":[],"mappings":"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","file":"custom_expansion_tile.ddc.js"}');
  // Exports:
  return {
    widgets__ModifiedExistingWidgets__custom_expansion_tile: custom_expansion_tile
  };
});

//# sourceMappingURL=custom_expansion_tile.ddc.js.map
