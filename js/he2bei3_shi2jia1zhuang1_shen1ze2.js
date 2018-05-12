(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('深泽县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130128","properties":{"name":"深泽县","cp":[115.20092,38.184033],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AA@C@EE@CAG@@CE@@AADKH@HCFC@E@CA@C@@GEC@AAC@E@CBCBEFGBAAAACDG@C@C@G@KCWAA@BCGAI@E@KBC@MCEA@@C@G@@@CBA@O@KG@D@L@BE@@B@B@T@R@BHAB@BL@DA@@FDB@HB@BJAB@B@@FA@ADB@BDBH@B@FDHF@PO@CBCB@FA@@P@@AJE@AF@B@@FD@BADH@B@@BFBBF@BALF@@FBBB@BD@PF@DDDDHHDFHRD@NALAB@@@@@H@FALDD@RB@@FE@EB@FEJ@AAJ@DA@A@IH@BGFCD@B@B@F@B@@AH@BABB@@BDDA@DDPB@D@DBFHBH@BBHFF@@CBBFB@B@BA@@@DC@BDGF@DBHF@D@DBDADBB@BABBFABBB@BBFB@JF@@BD@DFLCHCDBD@@I@EACBED@BCI@E@@A@E@GDGBAD@D@JEBA@GCO@A@ADCBAHAJCRCV@@BB@@DADBDDDFDFBL@ND@@AY@IAOBEB@F@N@ACHAACNAHAHEBE@IACEAEAEEAEBG@G@ABK@@@EASDMD@AAD@AGAKDA@A@K@AD@N@RABI@MF@@KEAUA@CAAGBGDC@CBABIBC@AA@E@@C@GBIB@DC@OD@@@EE@[DGBSB@RABC@G@KBCKAGOBYBAB@B@BEBEBWAA@"],"encodeOffsets":[[117993,39047]]}}],"UTF8Encoding":true});}));