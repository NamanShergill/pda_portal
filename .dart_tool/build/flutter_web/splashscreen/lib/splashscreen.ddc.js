define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const colors = packages__flutter__material.src__material__colors;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  var splashscreen = Object.create(dart.library);
  var BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var AlwaysStoppedAnimationOfColor = () => (AlwaysStoppedAnimationOfColor = dart.constFn(animations.AlwaysStoppedAnimation$(ui.Color)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: ""
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C3 || CT.C3,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C4 || CT.C4,
        [TextStyle_inherit]: true
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 29,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "radius",
        [_Location_column]: 29,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 103,
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
        [_Location_column]: 31,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 94,
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
        [_Location_column]: 34,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 19,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "valueColor",
        [_Location_column]: 25,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 19,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 11,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/splashscreen/splashscreen.dart"
      });
    }
  });
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var C0;
  var Color_value = dart.privateName(ui, "Color.value");
  var C1;
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var C3;
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var C4;
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var C2;
  var seconds$ = dart.privateName(splashscreen, "SplashScreen.seconds");
  var title$ = dart.privateName(splashscreen, "SplashScreen.title");
  var backgroundColor$ = dart.privateName(splashscreen, "SplashScreen.backgroundColor");
  var styleTextUnderTheLoader$ = dart.privateName(splashscreen, "SplashScreen.styleTextUnderTheLoader");
  var navigateAfterSeconds$ = dart.privateName(splashscreen, "SplashScreen.navigateAfterSeconds");
  var photoSize$ = dart.privateName(splashscreen, "SplashScreen.photoSize");
  var onClick$ = dart.privateName(splashscreen, "SplashScreen.onClick");
  var loaderColor$ = dart.privateName(splashscreen, "SplashScreen.loaderColor");
  var image$ = dart.privateName(splashscreen, "SplashScreen.image");
  var loadingText$ = dart.privateName(splashscreen, "SplashScreen.loadingText");
  var imageBackground$ = dart.privateName(splashscreen, "SplashScreen.imageBackground");
  var gradientBackground$ = dart.privateName(splashscreen, "SplashScreen.gradientBackground");
  splashscreen.SplashScreen = class SplashScreen extends framework.StatefulWidget {
    get seconds() {
      return this[seconds$];
    }
    set seconds(value) {
      super.seconds = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get styleTextUnderTheLoader() {
      return this[styleTextUnderTheLoader$];
    }
    set styleTextUnderTheLoader(value) {
      super.styleTextUnderTheLoader = value;
    }
    get navigateAfterSeconds() {
      return this[navigateAfterSeconds$];
    }
    set navigateAfterSeconds(value) {
      super.navigateAfterSeconds = value;
    }
    get photoSize() {
      return this[photoSize$];
    }
    set photoSize(value) {
      super.photoSize = value;
    }
    get onClick() {
      return this[onClick$];
    }
    set onClick(value) {
      super.onClick = value;
    }
    get loaderColor() {
      return this[loaderColor$];
    }
    set loaderColor(value) {
      super.loaderColor = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get loadingText() {
      return this[loadingText$];
    }
    set loadingText(value) {
      super.loadingText = value;
    }
    get imageBackground() {
      return this[imageBackground$];
    }
    set imageBackground(value) {
      super.imageBackground = value;
    }
    get gradientBackground() {
      return this[gradientBackground$];
    }
    set gradientBackground(value) {
      super.gradientBackground = value;
    }
    createState() {
      return new splashscreen._SplashScreenState.new();
    }
  };
  (splashscreen.SplashScreen.new = function(opts) {
    let loaderColor = opts && 'loaderColor' in opts ? opts.loaderColor : null;
    let seconds = opts && 'seconds' in opts ? opts.seconds : null;
    let photoSize = opts && 'photoSize' in opts ? opts.photoSize : null;
    let onClick = opts && 'onClick' in opts ? opts.onClick : null;
    let navigateAfterSeconds = opts && 'navigateAfterSeconds' in opts ? opts.navigateAfterSeconds : null;
    let title = opts && 'title' in opts ? opts.title : C0 || CT.C0;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C1 || CT.C1;
    let styleTextUnderTheLoader = opts && 'styleTextUnderTheLoader' in opts ? opts.styleTextUnderTheLoader : C2 || CT.C2;
    let image = opts && 'image' in opts ? opts.image : null;
    let loadingText = opts && 'loadingText' in opts ? opts.loadingText : C0 || CT.C0;
    let imageBackground = opts && 'imageBackground' in opts ? opts.imageBackground : null;
    let gradientBackground = opts && 'gradientBackground' in opts ? opts.gradientBackground : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[loaderColor$] = loaderColor;
    this[seconds$] = seconds;
    this[photoSize$] = photoSize;
    this[onClick$] = onClick;
    this[navigateAfterSeconds$] = navigateAfterSeconds;
    this[title$] = title;
    this[backgroundColor$] = backgroundColor;
    this[styleTextUnderTheLoader$] = styleTextUnderTheLoader;
    this[image$] = image;
    this[loadingText$] = loadingText;
    this[imageBackground$] = imageBackground;
    this[gradientBackground$] = gradientBackground;
    splashscreen.SplashScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = splashscreen.SplashScreen.prototype;
  dart.addTypeTests(splashscreen.SplashScreen);
  dart.setMethodSignature(splashscreen.SplashScreen, () => ({
    __proto__: dart.getMethods(splashscreen.SplashScreen.__proto__),
    createState: dart.fnType(splashscreen._SplashScreenState, [])
  }));
  dart.setLibraryUri(splashscreen.SplashScreen, "package:splashscreen/splashscreen.dart");
  dart.setFieldSignature(splashscreen.SplashScreen, () => ({
    __proto__: dart.getFields(splashscreen.SplashScreen.__proto__),
    seconds: dart.finalFieldType(core.int),
    title: dart.finalFieldType(text.Text),
    backgroundColor: dart.finalFieldType(ui.Color),
    styleTextUnderTheLoader: dart.finalFieldType(text_style.TextStyle),
    navigateAfterSeconds: dart.finalFieldType(dart.dynamic),
    photoSize: dart.finalFieldType(core.double),
    onClick: dart.finalFieldType(dart.dynamic),
    loaderColor: dart.finalFieldType(ui.Color),
    image: dart.finalFieldType(image.Image),
    loadingText: dart.finalFieldType(text.Text),
    imageBackground: dart.finalFieldType(image_provider.ImageProvider),
    gradientBackground: dart.finalFieldType(gradient.Gradient)
  }));
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C7;
  var C6;
  var C5;
  var C10;
  var C9;
  var C8;
  var C13;
  var C14;
  var C15;
  var C12;
  var C11;
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var C16;
  var C19;
  var C18;
  var C17;
  var C22;
  var C23;
  var C21;
  var C20;
  var C26;
  var C25;
  var C24;
  var C29;
  var C30;
  var C28;
  var C27;
  var C33;
  var C32;
  var C31;
  var C34;
  var C37;
  var C36;
  var C35;
  var C40;
  var C41;
  var C39;
  var C38;
  var C44;
  var C45;
  var C43;
  var C42;
  var C48;
  var C49;
  var C47;
  var C46;
  var C52;
  var C53;
  var C51;
  var C50;
  var C56;
  var C57;
  var C55;
  var C54;
  var C60;
  var C59;
  var C58;
  splashscreen._SplashScreenState = class _SplashScreenState extends framework.State$(splashscreen.SplashScreen) {
    initState() {
      super.initState();
      async.Timer.new(new core.Duration.new({seconds: this.widget.seconds}), dart.fn(() => {
        if (typeof this.widget.navigateAfterSeconds == 'string') {
          navigator.Navigator.of(this.context).pushReplacementNamed(core.Object, core.Object, core.String._check(this.widget.navigateAfterSeconds));
        } else if (framework.Widget.is(this.widget.navigateAfterSeconds)) {
          navigator.Navigator.of(this.context).pushReplacement(dart.dynamic, core.Object, new page.MaterialPageRoute.new({builder: dart.fn(context => framework.Widget._check(this.widget.navigateAfterSeconds), BuildContextToWidget())}));
        } else {
          dart.throw(new core.ArgumentError.new("widget.navigateAfterSeconds must either be a String or Widget"));
        }
      }, VoidToNull()));
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new ink_well.InkWell.new({onTap: VoidTovoid()._check(this.widget.onClick), child: new basic.Stack.new({fit: stack.StackFit.expand, children: JSArrayOfWidget().of([new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: this.widget.imageBackground == null ? null : new decoration_image.DecorationImage.new({fit: box_fit.BoxFit.cover, image: this.widget.imageBackground}), gradient: this.widget.gradientBackground, color: this.widget.backgroundColor}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({flex: 2, child: new container.Container.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundColor: colors.Colors.transparent, child: new container.Container.new({child: this.widget.image, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), radius: this.widget.photoSize, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.Padding.new({padding: C16 || CT.C16, $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), this.widget.title]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new basic.Expanded.new({flex: 1, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new progress_indicator.CircularProgressIndicator.new({valueColor: new (AlwaysStoppedAnimationOfColor()).new(this.widget.loaderColor), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new basic.Padding.new({padding: C34 || CT.C34, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), this.widget.loadingText]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42})]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46})]), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (splashscreen._SplashScreenState.new = function() {
    splashscreen._SplashScreenState.__proto__.new.call(this);
    ;
  }).prototype = splashscreen._SplashScreenState.prototype;
  dart.addTypeTests(splashscreen._SplashScreenState);
  dart.setMethodSignature(splashscreen._SplashScreenState, () => ({
    __proto__: dart.getMethods(splashscreen._SplashScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(splashscreen._SplashScreenState, "package:splashscreen/splashscreen.dart");
  dart.trackLibraries("packages/splashscreen/splashscreen", {
    "package:splashscreen/splashscreen.dart": splashscreen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["splashscreen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMY;;;;;;IACC;;;;;;IACC;;;;;;IACI;;;;;;IACF;;;;;;IACD;;;;;;IACC;;;;;;IACF;;;;;;IACA;;;;;;IACD;;;;;;IACS;;;;;;IACL;;;;;;;AAwBqB;IAAoB;;;QArB7C;QACU;QACV;QACA;QACA;QACA;QACA;QACA;QAKA;QACA;QACA;QACD;;IAfC;IACU;IACV;IACA;IACA;IACA;IACA;IACA;IAKA;IACA;IACA;IACD;AAjBV;;EAmBK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUc,MAAX;AAgBL,MAfD,gBACI,gCAAkB,AAAO,uBACrB;AACF,YAAgC,OAA5B,AAAO;AAG8D,UAA7D,AAAY,uBAAT,gFAA8B,AAAO;cAC7C,KAAgC,oBAA5B,AAAO;AAC4G,UAAlH,AAAY,uBAAT,yDAA6B,yCAA2B,QAAc,WAAY,wBAAA,AAAO;;AAIrG,UAFD,WAAU,2BACN;;;IAKd;UAE0B;AACxB,YAAO,kCACK,qDACD,AAAO,6BACJ,0BACM,iCACI,sBACZ,yCACc,6CACP,AAAO,AAAgB,+BAAG,OAC3B,OACI,+CACU,6BACL,AAAO,yCAEZ,AAAO,uCACV,AAAO,sFAGd,yCACmC,wCACnB,sBACZ,8BACI,UACK,oCACI,yCAC4B,yCACnB,sBACZ,qDACsB,kCACb,oCACA,AAAO,kFAEV,AAAO,gFAEb,wGAGJ,AAAO,gMAIjB,8BACQ,UACC,yCACgC,yCACnB,sBAEhB,kEACkB,0CAA8B,AAAO,mFAEvD,wGAGA,AAAO;IAU3B;;;;;EACF","file":"splashscreen.ddc.js"}');
  // Exports:
  return {
    splashscreen: splashscreen
  };
});

//# sourceMappingURL=splashscreen.ddc.js.map
