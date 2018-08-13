(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('兴文县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511528","properties":{"name":"兴文县","cp":[105.236325,28.303614],"childNum":8},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@B@"],["@@@@@@@@@@@@@BB@@@@@@@@@@@B@@@@@@@@@@A@@@@A@@@@@@AA@@@@@@@@@@B@@@@@@@@"],["@@@BB@@@AA"],["@@BB@A@@A@"],["@@@@@@@B@@B@@@@@@@@@BB@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@B@@@@A@@@@@@A@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@A@@@@@@@B@@A@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@"],["@@AA@@@@@AB@@YA@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@B@@@C@E@A@@B@@BJBB@@B@D@@BBB@B@D@J@B@DBHFA"],["@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@"],["@@EAE@ABADAFC@G@GCGACACA@@E@G@C@CBEBCBEBE@E@CBE@C@@@CDCBCFEDEDC@CBCAA@EBEBA@CBABEBCAGACAC@CB@DABEDC@G@CBCBCFBFC@ABE@A@E@EBCAC@AAAAAA@A@AI@A@C@C@A@@BABA@C@C@CBABAAG@EAE@EAECC@AAE@A@CBCBCBABCBA@IHABCBCDCD@DBB@BBB@@BB@B@BAB@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@B@BA@C@ABCB@BAAC@C@C@E@GBABA@A@A@A@A@CBCBABAA@@@CA@AA@E@AAGACAA@@A@@A@@@@D@@A@CBA@AB@@AA@@@@@A@@A@@@A@CAAAC@AAACAC@CDCDCDEBG@A@@@AAC@C@GDCBG@@@E@CCEAC@C@EF@DBHFHLNJH@HAFCFMNABEDEBCBCD@DCF@DBD@FBFBD@DBD@DBB@@@DADAD@DAFBD@HCBEBA@E@A@ED@DBBDDDDBDDDBDD@@DBB@B@BA@@@BD@BBD@BBB@BB@@BA@@@@B@@@B@B@B@BAB@@@@ABABABCBAB@B@B@@FDDDBB@@DDFDDBFBHBDBBDADADCDI@G@C@IBCDCDABEDC@CB@D@BBFDD@D@D@D@F@BDD@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@B@B@BADB@BBBB@@BBDDFJDFBBBF@FAF@DBF@@@@DBF@D@DADAF@FBH@FBFBF@DAFADCBCBCBC@CFCFCD@D@DBD@DABE@C@CBCDBBFF@FBD@BCACBCBEDA@@@@DC@G@G@CDAF@PD@@F@B@BABCBEBABCHEDAFCD@FAD@B@BBDBB@@AB@FEBCDEDEDGBABBBD@@@@AB@BBD@D@DAB@DADAD@FAF@D@D@D@BBF@D@@BBDBDBBADBFHDJDPDFBD@@BDDF@BAB@BCBAF@@E@E@CB@BABABGDADBBB@F@FAD@BB@@@B@F@BBBBBDD@D@B@BADADCBADCDCBCBAD@B@B@BBDB@B@D@DB@@FBDBBFBF@F@BCDCD@@A@ABA@ABA@AB@@AB@@@@@@@B@@@@@@@B@@A@A@@BA@@BB@BBBB@DAB@BC@CBCDEHA@ABADD@F@D@F@B@DBF@B@DBDBD@DBD@D@BBDBBD@BBDAB@BAD@BADAB@@@B@@BB@D@BBFBBBBBB@DB@@@DD@@HBF@PAFAB@BA@A@A@C@A@ACCCEEGAAAAAAAEBEDa@CBCDCLEF@DAD@B@D@B@D@DABABABABADABCDAB@B@B@B@BBB@@@B@DBD@FJB@BHB@@B@@ABA@ABC@CBIFA@ABABA@@B@@@FBD@BBBBDBB@BBAF@@B@D@FAD@DBH@B@F@BBBB@F@D@@@@@@@@@@@@@B@@@B@@@@A@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@B@@@BB@@@@BB@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@B@@@@@@@B@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@Z@@@@@@@@@@@@@A@@B@@@@@@B@@@@@@@@A@@@@@BB@@@@@BB@@@@@@@@B@@@@@B@@BB@@@@@@@B@@A@@B@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@A@@A@@@@@@@@@@@@AEB@HBD@BBB@@BBB@B@DAF@DAHAHAF@F@FBF@H@H@F@FBF@DBHBF@DBDBDAD@H@F@F@D@B@@CBCBA@@J@F@F@FBFBDBFBF@DBD@D@D@HAD@@@D@@@H@H@L@F@F@B@F@FBF@FBD@FAF@FCH@H@H@H@HBB@BA@ABACQAA@A@@BA@@B@@B@BB@BBD@B@D@BA@C@IBA@@DAF@D@DCBABAD@B@BF@BB@@@BA@ABE@A@CAE@A@ABA@@D@DBB@@A@@EE@A@@@A@AAAA@AAEAA@EEAA@A@C@@BAB@BADCBABADEBC@CAA@@C@@@A@AAAA@AAAA@@A@A@A@A@C@AA@A@ABAB@@ABAAA@A@@A@@@A@@BA@A@AAAC@E@C@C@@@C@A@A@A@A@C@CAA@@@BANCFCHCFADE@EBEDAHABC@CGO@EBADCBA@@@@BA@ABAB@@AD@DAB@FCHCFEFGDGCIACAE@G@CCI@EBGDC@@FADECQGY@CB[DKB@JADCBCCGEI@EBADAB@DEBABCBE@CAC@EAE@EAE@GAE@A@EBIDGNSDEBC@CBCACCGAAAA@AAAACACAACCC@A@ABABADABC@ABCBC@A@CAACACACCAAAA@C@E@C@A@G@E@C@A@E@CAC@AAC@A@CAC@C@A@E@E@E@E@A@C@AAA@ACA@CAC@C@C@A@CCCEACCCCAE@C@C@A@AAAA@@@@BC@A@C@AAA@AE@@@ACAACAAAABA@C@@@A@@A@ABA@AA@@@C@C@ACAAA@@@@@@AACEI@@CIACCEGCMMCAC@G@CAE@CAC@CAE@CAEAAA"]],"encodeOffsets":[[[107752,28774]],[[107752,28769]],[[107500,28790]],[[107398,28959]],[[107596,29104]],[[107638,29123]],[[107756,29135]],[[107702,28741]]]}}],"UTF8Encoding":true});}));