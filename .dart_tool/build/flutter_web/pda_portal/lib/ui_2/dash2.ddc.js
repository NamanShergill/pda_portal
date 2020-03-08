define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/pda_portal/ui_2/dashboard', 'packages/flutter_screenutil/flutter_screenutil', 'packages/flutter/material', 'packages/bubble_bottom_bar/bubble_bottom_bar', 'packages/pda_portal/theme'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__pda_portal__ui_2__dashboard, packages__flutter_screenutil__flutter_screenutil, packages__flutter__material, packages__bubble_bottom_bar__bubble_bottom_bar, packages__pda_portal__theme) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const dashboard = packages__pda_portal__ui_2__dashboard.ui_2__dashboard;
  const flutter_screenutil = packages__flutter_screenutil__flutter_screenutil.flutter_screenutil;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const bubble_bottom_bar = packages__bubble_bottom_bar__bubble_bottom_bar.bubble_bottom_bar;
  const theme = packages__pda_portal__theme.theme;
  var dash2 = Object.create(dart.library);
  var $_get = dartx._get;
  var JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  var VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfBubbleBottomBarItem = () => (JSArrayOfBubbleBottomBarItem = dart.constFn(_interceptors.JSArray$(bubble_bottom_bar.BubbleBottomBarItem)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 32,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 32,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 32,
        [_Location_line]: 63,
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
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 64,
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
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentIndex",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 3,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/pda_portal/ui_2/dash2.dart"
      });
    }
  });
  dash2.Dash2 = class Dash2 extends framework.StatefulWidget {
    createState() {
      return new dash2._Dash2State.new();
    }
  };
  (dash2.Dash2.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    dash2.Dash2.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = dash2.Dash2.prototype;
  dart.addTypeTests(dash2.Dash2);
  dart.setMethodSignature(dash2.Dash2, () => ({
    __proto__: dart.getMethods(dash2.Dash2.__proto__),
    createState: dart.fnType(dash2._Dash2State, [])
  }));
  dart.setLibraryUri(dash2.Dash2, "package:pda_portal/ui_2/dash2.dart");
  var _children = dart.privateName(dash2, "_children");
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C0;
  var C2;
  var C5;
  var C4;
  var C3;
  var C8;
  var C7;
  var C6;
  var C11;
  var C10;
  var C9;
  var C14;
  var C13;
  var C12;
  var C17;
  var C16;
  var C15;
  var C20;
  var C19;
  var C18;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C22;
  var C21;
  var C30;
  var C31;
  var C29;
  var C28;
  var C34;
  var C35;
  var C33;
  var C32;
  dash2._Dash2State = class _Dash2State extends framework.State$(dash2.Dash2) {
    initState() {
      super.initState();
      this.currentIndex = 0;
    }
    changePage(index) {
      this.setState(dart.fn(() => {
        this.currentIndex = index;
      }, VoidToNull()));
    }
    build(context) {
      flutter_screenutil.ScreenUtil.init(context, {width: 1000, height: 1000, allowFontScaling: true});
      return new safe_area.SafeArea.new({top: true, child: new scaffold.Scaffold.new({body: this[_children][$_get](this.currentIndex), bottomNavigationBar: new bubble_bottom_bar.BubbleBottomBar.new({backgroundColor: theme.background, opacity: 0.1, currentIndex: this.currentIndex, onTap: dart.bind(this, 'changePage'), items: JSArrayOfBubbleBottomBarItem().of([new bubble_bottom_bar.BubbleBottomBarItem.new({icon: new icon.Icon.new(icons.Icons.dashboard, {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), backgroundColor: colors.Colors.white, title: new text.Text.new("1st Step", {$creationLocationd_0dea112b090073317d4: C6 || CT.C6})}), new bubble_bottom_bar.BubbleBottomBarItem.new({icon: new icon.Icon.new(icons.Icons.account_balance, {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), title: new text.Text.new("2nd Step", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), backgroundColor: colors.Colors.white}), new bubble_bottom_bar.BubbleBottomBarItem.new({icon: new icon.Icon.new(icons.Icons.check_circle, {$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), title: new text.Text.new("3rd Step", {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), backgroundColor: colors.Colors.white})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
    }
  };
  (dash2._Dash2State.new = function() {
    this.currentIndex = null;
    this[_children] = JSArrayOfWidget().of([new dashboard.Dashboard.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new container.Container.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2})]);
    dash2._Dash2State.__proto__.new.call(this);
    ;
  }).prototype = dash2._Dash2State.prototype;
  dart.addTypeTests(dash2._Dash2State);
  dart.setMethodSignature(dash2._Dash2State, () => ({
    __proto__: dart.getMethods(dash2._Dash2State.__proto__),
    changePage: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(dash2._Dash2State, "package:pda_portal/ui_2/dash2.dart");
  dart.setFieldSignature(dash2._Dash2State, () => ({
    __proto__: dart.getFields(dash2._Dash2State.__proto__),
    currentIndex: dart.fieldType(core.int),
    [_children]: dart.finalFieldType(core.List$(framework.Widget))
  }));
  var C36;
  dart.defineLazy(dash2, {
    /*dash2.pageView*/get pageView() {
      return [new dashboard.Dashboard.new({$creationLocationd_0dea112b090073317d4: C36 || CT.C36})];
    },
    set pageView(_) {}
  });
  dart.trackLibraries("packages/pda_portal/ui_2/dash2", {
    "package:pda_portal/ui_2/dash2.dart": dash2
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["dash2.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAU+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBqB,MAAX;AACU,MAAhB,oBAAe;IACjB;eAEoB;AAGhB,MAFF,cAAS;AACa,QAApB,oBAAe,KAAK;;IAExB;UAG0B;AAEmD,MAAhE,mCAAK,OAAO,UAAS,cAAc,wBAAwB;AACtE,YAAO,kCACA,aACE,iCACC,AAAS,uBAAC,yCACK,4DACF,2BACR,mBACK,oCACP,4BACqB,mCAC1B,qDACQ,kBAAW,gGACO,4BACjB,kBAAK,sEAEd,qDACQ,kBAAW,4FACV,kBAAK,uFACY,uBAE1B,qDACQ,kBAAW,2FACV,kBAAK,uFACY;IAMpC;;;IApDI;IACe,kBAAY,sBAC7B,oFACA;;;EAkDJ;;;;;;;;;;;;;;;MA1DK,cAAQ;YAAC,EACZ","file":"dash2.ddc.js"}');
  // Exports:
  return {
    ui_2__dash2: dash2
  };
});

//# sourceMappingURL=dash2.ddc.js.map
