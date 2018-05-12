(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('秦淮区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"320104","properties":{"name":"秦淮区","cp":[118.79476,32.039113],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@D@B@H@@@@A@A@@AABC@@@A@@@AB@B@@E@@@BD@@@B@AAB@B@@AB@@DD@@HB@@AD@@A@@D@@@@A@@B@B@@B@B@@HBB@F@BCDBDBFC@@BA@@AA@A@ABA@@BAB@BAB@ACGA@A@A@@@A@A@@A@@@AA@A@@A@CA@@@AA@CA@A@@AA@@@A@@A@@@AB@@C@AB@A@@@@CCCAA@AAB@ECAA@@AAAAAAAAAA@@@@@@@@@B@A@@@@@@AACA@@GEA@@@B@AAAB@A@A@@@@AA@@AA@@A@E@@@@@A@@@A@@@@@A@A@GA@@@AA@@@@@A@@@@@C@CAEAAAA@C@@@@AABEAED@@CF@@ABEJGLABABCB@@@BB@@@@@A@@@@@A@@BABA@@BA@@@@@@@A@@@ABA@CF@B@@A@BB@BA@@AA@@BEBA@@@A@CBA@GBA@A@BD@@C@AB@@@B@@C@BD@@@@@@@B@@BBBF@@BN@@@B@F@B@@@@AL@B@@AD@@@@AB@B@@@@BBB@@@@@J@H@@@PAT@BA@@J@@@D@B@D@@@LAN@J@BAF@D@B@@BB@B@B@LBDA@@AAA@@A@CDAAGAC@@@@"],"encodeOffsets":[[121690,32798]]}}],"UTF8Encoding":true});}));