define(['dart_sdk', 'packages/pda_portal/main'], function(dart_sdk, packages__pda_portal__main) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const main = packages__pda_portal__main.main;
  var main_web_entrypoint = Object.create(dart.library);
  const CT = Object.create(null);
  main_web_entrypoint.main = function main$() {
    return async.async(dart.void, function* main$() {
      if (true) {
        yield ui.webOnlyInitializePlatform();
      }
      main.main();
    });
  };
  dart.trackLibraries("packages/pda_portal/main_web_entrypoint", {
    "package:pda_portal/main_web_entrypoint.dart": main_web_entrypoint
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main_web_entrypoint.dart"],"names":[],"mappings":";;;;;;;;;;;AAIiB;AACf,UAAI;AACkC,QAApC,MAAM;;AAES,MAAjB;IACF","file":"main_web_entrypoint.ddc.js"}');
  // Exports:
  return {
    main_web_entrypoint: main_web_entrypoint
  };
});

//# sourceMappingURL=main_web_entrypoint.ddc.js.map