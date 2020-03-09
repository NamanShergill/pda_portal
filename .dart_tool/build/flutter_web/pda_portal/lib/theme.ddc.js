define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__material.src__material__colors;
  var theme = Object.create(dart.library);
  const CT = Object.create(null);
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
  }, '{"version":3,"sourceRoot":"","sources":["theme.dart"],"names":[],"mappings":";;;;;;;;;;;MAEM,gBAAU;YAAG,kBAAM;;;MACnB,UAAI;YAAC,kBAAM;;;MACX,YAAM;YAAE,kBAAM;;;MAUV,eAAS;YAAE,sCAAwB","file":"theme.ddc.js"}');
  // Exports:
  return {
    theme: theme
  };
});

//# sourceMappingURL=theme.ddc.js.map
