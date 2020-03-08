define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  var flutter_screenutil = Object.create(dart.library);
  const CT = Object.create(null);
  var uiWidthPx = dart.privateName(flutter_screenutil, "ScreenUtil.uiWidthPx");
  var uiHeightPx = dart.privateName(flutter_screenutil, "ScreenUtil.uiHeightPx");
  var allowFontScaling = dart.privateName(flutter_screenutil, "ScreenUtil.allowFontScaling");
  flutter_screenutil.ScreenUtil = class ScreenUtil extends core.Object {
    get uiWidthPx() {
      return this[uiWidthPx];
    }
    set uiWidthPx(value) {
      this[uiWidthPx] = value;
    }
    get uiHeightPx() {
      return this[uiHeightPx];
    }
    set uiHeightPx(value) {
      this[uiHeightPx] = value;
    }
    get allowFontScaling() {
      return this[allowFontScaling];
    }
    set allowFontScaling(value) {
      this[allowFontScaling] = value;
    }
    static new() {
      return flutter_screenutil.ScreenUtil._instance;
    }
    static init(context, opts) {
      let width = opts && 'width' in opts ? opts.width : 1080;
      let height = opts && 'height' in opts ? opts.height : 1920;
      let allowFontScaling = opts && 'allowFontScaling' in opts ? opts.allowFontScaling : false;
      if (flutter_screenutil.ScreenUtil._instance == null) {
        flutter_screenutil.ScreenUtil._instance = new flutter_screenutil.ScreenUtil.__();
      }
      flutter_screenutil.ScreenUtil._instance.uiWidthPx = width;
      flutter_screenutil.ScreenUtil._instance.uiHeightPx = height;
      flutter_screenutil.ScreenUtil._instance.allowFontScaling = allowFontScaling;
      let mediaQuery = media_query.MediaQuery.of(context);
      flutter_screenutil.ScreenUtil._mediaQueryData = mediaQuery;
      flutter_screenutil.ScreenUtil._pixelRatio = mediaQuery.devicePixelRatio;
      flutter_screenutil.ScreenUtil._screenWidth = mediaQuery.size.width;
      flutter_screenutil.ScreenUtil._screenHeight = mediaQuery.size.height;
      flutter_screenutil.ScreenUtil._statusBarHeight = mediaQuery.padding.top;
      flutter_screenutil.ScreenUtil._bottomBarHeight = flutter_screenutil.ScreenUtil._mediaQueryData.padding.bottom;
      flutter_screenutil.ScreenUtil._textScaleFactor = mediaQuery.textScaleFactor;
    }
    static get mediaQueryData() {
      return flutter_screenutil.ScreenUtil._mediaQueryData;
    }
    static get textScaleFactor() {
      return flutter_screenutil.ScreenUtil._textScaleFactor;
    }
    static get pixelRatio() {
      return flutter_screenutil.ScreenUtil._pixelRatio;
    }
    static get screenWidthDp() {
      return flutter_screenutil.ScreenUtil._screenWidth;
    }
    static get screenHeightDp() {
      return flutter_screenutil.ScreenUtil._screenHeight;
    }
    static get screenWidth() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenWidth) * dart.notNull(flutter_screenutil.ScreenUtil._pixelRatio);
    }
    static get screenHeight() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenHeight) * dart.notNull(flutter_screenutil.ScreenUtil._pixelRatio);
    }
    static get statusBarHeight() {
      return flutter_screenutil.ScreenUtil._statusBarHeight;
    }
    static get bottomBarHeight() {
      return flutter_screenutil.ScreenUtil._bottomBarHeight;
    }
    get scaleWidth() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenWidth) / dart.notNull(this.uiWidthPx);
    }
    get scaleHeight() {
      return dart.notNull(flutter_screenutil.ScreenUtil._screenHeight) / dart.notNull(this.uiHeightPx);
    }
    get scaleText() {
      return this.scaleWidth;
    }
    setWidth(width) {
      return dart.notNull(width) * dart.notNull(this.scaleWidth);
    }
    setHeight(height) {
      return dart.notNull(height) * dart.notNull(this.scaleHeight);
    }
    setSp(fontSize, opts) {
      let allowFontScalingSelf = opts && 'allowFontScalingSelf' in opts ? opts.allowFontScalingSelf : null;
      return allowFontScalingSelf == null ? dart.test(this.allowFontScaling) ? dart.notNull(fontSize) * dart.notNull(this.scaleText) : dart.notNull(fontSize) * dart.notNull(this.scaleText) / dart.notNull(flutter_screenutil.ScreenUtil._textScaleFactor) : dart.test(allowFontScalingSelf) ? dart.notNull(fontSize) * dart.notNull(this.scaleText) : dart.notNull(fontSize) * dart.notNull(this.scaleText) / dart.notNull(flutter_screenutil.ScreenUtil._textScaleFactor);
    }
  };
  (flutter_screenutil.ScreenUtil.__ = function() {
    this[uiWidthPx] = null;
    this[uiHeightPx] = null;
    this[allowFontScaling] = null;
    ;
  }).prototype = flutter_screenutil.ScreenUtil.prototype;
  dart.addTypeTests(flutter_screenutil.ScreenUtil);
  dart.setMethodSignature(flutter_screenutil.ScreenUtil, () => ({
    __proto__: dart.getMethods(flutter_screenutil.ScreenUtil.__proto__),
    setWidth: dart.fnType(core.num, [core.num]),
    setHeight: dart.fnType(core.num, [core.num]),
    setSp: dart.fnType(core.num, [core.num], {allowFontScalingSelf: core.bool}, {})
  }));
  dart.setGetterSignature(flutter_screenutil.ScreenUtil, () => ({
    __proto__: dart.getGetters(flutter_screenutil.ScreenUtil.__proto__),
    scaleWidth: core.double,
    scaleHeight: core.double,
    scaleText: core.double
  }));
  dart.setLibraryUri(flutter_screenutil.ScreenUtil, "package:flutter_screenutil/flutter_screenutil.dart");
  dart.setFieldSignature(flutter_screenutil.ScreenUtil, () => ({
    __proto__: dart.getFields(flutter_screenutil.ScreenUtil.__proto__),
    uiWidthPx: dart.fieldType(core.num),
    uiHeightPx: dart.fieldType(core.num),
    allowFontScaling: dart.fieldType(core.bool)
  }));
  dart.defineLazy(flutter_screenutil.ScreenUtil, {
    /*flutter_screenutil.ScreenUtil._instance*/get _instance() {
      return null;
    },
    set _instance(_) {},
    /*flutter_screenutil.ScreenUtil.defaultWidth*/get defaultWidth() {
      return 1080;
    },
    /*flutter_screenutil.ScreenUtil.defaultHeight*/get defaultHeight() {
      return 1920;
    },
    /*flutter_screenutil.ScreenUtil._mediaQueryData*/get _mediaQueryData() {
      return null;
    },
    set _mediaQueryData(_) {},
    /*flutter_screenutil.ScreenUtil._screenWidth*/get _screenWidth() {
      return null;
    },
    set _screenWidth(_) {},
    /*flutter_screenutil.ScreenUtil._screenHeight*/get _screenHeight() {
      return null;
    },
    set _screenHeight(_) {},
    /*flutter_screenutil.ScreenUtil._pixelRatio*/get _pixelRatio() {
      return null;
    },
    set _pixelRatio(_) {},
    /*flutter_screenutil.ScreenUtil._statusBarHeight*/get _statusBarHeight() {
      return null;
    },
    set _statusBarHeight(_) {},
    /*flutter_screenutil.ScreenUtil._bottomBarHeight*/get _bottomBarHeight() {
      return null;
    },
    set _bottomBarHeight(_) {},
    /*flutter_screenutil.ScreenUtil._textScaleFactor*/get _textScaleFactor() {
      return null;
    },
    set _textScaleFactor(_) {}
  });
  dart.trackLibraries("packages/flutter_screenutil/flutter_screenutil", {
    "package:flutter_screenutil/flutter_screenutil.dart": flutter_screenutil
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_screenutil.dart"],"names":[],"mappings":";;;;;;;;;;;;IAcM;;;;;;IACA;;;;;;IAIC;;;;;;;AAaH,YAAO;IACT;gBAE8B;UACrB;UACD;UACC;AACP,UAAI,AAAU,2CAAG;AACW,QAA1B,0CAAuB;;AAEE,MAA3B,AAAU,oDAAY,KAAK;AACE,MAA7B,AAAU,qDAAa,MAAM;AACgB,MAA7C,AAAU,2DAAmB,gBAAgB;AAE9B,uBAAwB,0BAAG,OAAO;AACrB,MAA5B,gDAAkB,UAAU;AACa,MAAzC,4CAAc,AAAW,UAAD;AACY,MAApC,6CAAe,AAAW,AAAK,UAAN;AACa,MAAtC,8CAAgB,AAAW,AAAK,UAAN;AACe,MAAzC,iDAAmB,AAAW,AAAQ,UAAT;AACoB,MAAjD,iDAAmB,AAAgB,AAAQ;AACE,MAA7C,iDAAmB,AAAW,UAAD;IAC/B;;AAE4C;IAAe;;AAItB;IAAgB;;AAIrB;IAAW;;AAIR;IAAY;;AAIX;IAAa;;AAIhB,YAAa,cAAb,2DAAe;IAAW;;AAIzB,YAAc,cAAd,4DAAgB;IAAW;;AAIxB;IAAgB;;AAIhB;IAAgB;;AAI5B,YAAa,cAAb,2DAAe;IAAS;;AAEvB,YAAc,cAAd,4DAAgB;IAAU;;AAE5B;IAAU;aAOjB;AAAU,YAAM,cAAN,KAAK,iBAAG;IAAU;cAU3B;AAAW,YAAO,cAAP,MAAM,iBAAG;IAAW;UAOnC;UAAgB;AAC1B,YAAA,AAAqB,qBAAD,IAAI,iBACjB,yBACa,aAAT,QAAQ,iBAAG,kBACD,AAAa,aAAtB,QAAQ,iBAAG,+BAAa,4DAC7B,oBAAoB,IACP,aAAT,QAAQ,iBAAG,kBACD,AAAa,aAAtB,QAAQ,iBAAG,+BAAa;IAAkB;;;IAjHtD;IACA;IAIC;;EAUS;;;;;;;;;;;;;;;;;;;;;;MArBI,uCAAS;;;;MACV,0CAAY;;;MACZ,2CAAa;;;MAWR,6CAAe;;;;MACvB,0CAAY;;;;MACZ,2CAAa;;;;MACb,yCAAW;;;;MACX,8CAAgB;;;;MAChB,8CAAgB;;;;MAChB,8CAAgB","file":"flutter_screenutil.ddc.js"}');
  // Exports:
  return {
    flutter_screenutil: flutter_screenutil
  };
});

//# sourceMappingURL=flutter_screenutil.ddc.js.map
