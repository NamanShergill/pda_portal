define(['dart_sdk', 'packages/flutter_screenutil/flutter_screenutil', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter_screenutil__flutter_screenutil, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flutter_screenutil = packages__flutter_screenutil__flutter_screenutil.flutter_screenutil;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__material.src__material__colors;
  var theme = Object.create(dart.library);
  const CT = Object.create(null);
  theme.wSize = function wSize(value, value2) {
    let x = core.double._check(dart.notNull(flutter_screenutil.ScreenUtil.new().setSp(value)) > dart.notNull(core.num._check(value2)) ? value2 : flutter_screenutil.ScreenUtil.new().setSp(value));
    return x;
  };
  theme.wHeight = function wHeight(value) {
    let x = flutter_screenutil.ScreenUtil.new().setHeight(value);
    return x;
  };
  theme.wWidth = function wWidth(value) {
    let x = flutter_screenutil.ScreenUtil.new().setWidth(value);
    return x;
  };
  dart.defineLazy(theme, {
    /*theme.background*/get background() {
      return new ui.Color.new(4280428073);
    },
    set background(_) {},
    /*theme.card*/get card() {
      return new ui.Color.new(4282862415);
    },
    set card(_) {},
    /*theme.accent*/get accent() {
      return new ui.Color.new(4287021618);
    },
    set accent(_) {},
    /*theme.textWhite*/get textWhite() {
      return new text_style.TextStyle.new({color: colors.Colors.white});
    },
    set textWhite(_) {}
  });
  dart.trackLibraries("packages/pda_portal/theme", {
    "package:pda_portal/theme.dart": theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["theme.dart"],"names":[],"mappings":";;;;;;;;;;;+BAiBoB,OAAO;AAClB,+BAA2B,aAAzB,AAAa,0CAAM,KAAK,kCAAE,MAAM,KAAC,MAAM,GAAC,AAAa,0CAAM,KAAK;AACzE,UAAO,EAAC;EACV;mCAEsB;AACb,YAAE,AAAa,8CAAU,KAAK;AACrC,UAAO,EAAC;EACV;iCAEqB;AACZ,YAAE,AAAa,6CAAS,KAAK;AACpC,UAAO,EAAC;EACV;;MA3BM,gBAAU;YAAG,kBAAM;;;MACnB,UAAI;YAAC,kBAAM;;;MACX,YAAM;YAAE,kBAAM;;;MAUV,eAAS;YAAE,sCAAwB","file":"theme.ddc.js"}');
  // Exports:
  return {
    theme: theme
  };
});

//# sourceMappingURL=theme.ddc.js.map
