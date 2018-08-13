(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('古塔区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210702","properties":{"name":"古塔区","cp":[121.128279,41.117245],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GBEBC@EB@@C@@BA@A@ABA@@@CDA@AD@@AB@F@B@@@BCFCDA@C@EAE@C@GDABC@EAA@ABA@@@@@CBABADCBE@@BA@OFEBEBEBABIBCAECA@AACAGAEAIACCEGAAA@CAAAAAAAA@C@A@ABCBA@@DAD@BABADABCBCBABAB@BAB@@B@DD@@B@BB@@BHBB@@BF@B@B@BDBDBBBDDDD@@B@@@BA@@@@BAB@@@LLLP@BNVDFHLHDVHD@H@LBRBR@NCD@BAH@FAJCFCDCDAB@BABCDABEBIEABAHGBADA@CAG@@@@@@@EB@@@@AB@@@A@@A@@D@@@@@@BB@BB@BB@@@@@DBBA@CA@@A@@B@@A@@BB@@BABAB@ACC@@CC@@AE@@@C@@E@A@@@C@A@@@@@@@A@@@@B@@A@@@E@@BA@@@@AA@@@@@C@@@@@E@@@@AG@@@@@A@@@@@A@@@@@@B@D@B@@@D@B@B@BAD@AA@@@A@@@@@@@C@@@@@A@A@@@AAA@@@@@@@@@C@@@@@A@@@A@@@C@@@@@A@A@A@@@A@@@@@@@GMB"],"encodeOffsets":[[124040,42090]]}}],"UTF8Encoding":true});}));