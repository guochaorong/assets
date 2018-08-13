(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('奈曼旗', {"type":"FeatureCollection","features":[{"type":"Feature","id":"150525","properties":{"name":"奈曼旗","cp":[120.658282,42.867226],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ABC@@@CBA@C@ABA@@@ABA@ABA@ABCBCBAB@@AB@BA@BBBBB@B@BBBB@@@BA@ABCBA@CAC@A@C@CBA@EBABAB@@A@C@CAAACA@@C@CBA@@@AB@@@@A@A@@@A@A@@@AAA@AA@BA@A@ABABA@@B@@@BA@@@A@@@C@A@A@AB@@@B@@BD@@@B@BABA@ABA@ABA@@@A@AB@@A@C@A@A@ABA@A@A@ABA@A@CB@@C@ABA@A@A@@@AAA@@A@AA@@AAAAA@@C@A@A@C@A@EAA@A@C@A@AAA@A@A@@AAA@@@@AAA@AAA@A@A@@@A@A@A@A@A@@@A@@@ABA@ABA@A@ABA@@BA@A@A@A@@@AA@@@@@@@@AA@@B@GBABCAECCAE@MBA@E@ABA@@BA@ABCDCDABA@A@CBA@@BB@ZNBBABAB@@@D@@@@EBABC@CBAB@BAD@B@@ADABAB@BCBEJSLIFq^MDEH@@AFA@@DBBBBDBBBBB@@DD@B@BB@@BBDBBBBIBR@FBZ@HBPKDKFA@SJ_L@@YLCBMHMLEA]RD@AJE@EBCBC@KDGAEFSTAVgZCB[TOVMNKNBLHJ@@CHCJIFIDgF@BFFGHAFADEH@@@@@B@D@BB@BBB@@@@D@BAB@FAP@D@DSFC@A@@B@B@@@B@@BB@@B@BBD@B@B@LA@BBTAA@@A@AA@@ABABABEBABA@A@@@A@@@@A@@@ABABA@C@@@AA@AAA@ABABC@CD@@@@APOPGTELINABABILGFAFMpAFD@]nENGbAF@DixCFKlSCDSPMJABC^ARAB@@OG@BAB@@@B@@BB@FPHB@ONA@_RGFFPT^@@XN@BIJ@BABW^\\vVhD@BF@UfYnCAEH@BDDBB@B@B@BBD@FABGBABCBADAF@BA@@BABAB@BABABABAB@@@B@B@@BB@@B@B@B@B@@@D@BBB@@FBDBB@B@BAB@@@BDBDDBBBBFBB@BB@@BBA@@B@BDFBB@BBBBBBBBBDBBBBDFDBBBBBBDDB@JEAC@@CEBADA@AB@B@@@@@@B@BBBBB@BBB@@B@@@BA@AB@@@@@B@JIDABA@@B@@@B@BB@BB@@BABBDB@DBD@DBFBFBB@@B@@@B@BABC@CBCACACACAA@A@A@@@AB@BA@@B@D@@BBDF@@@B@@@BAF@B@@@BB@@@BBF@D@B@B@FBB@@@BBB@F@B@BB@BBD@FB@@BBBDBB@FBD@B@@BB@BB@BB@B@B@D@@@DAB@BB@@BBBDBBBBBB@@BBB@DB@@BB@@@DB@@FBD@@DBBBB@@@@B@B@@@BAB@B@@AB@@@B@@@B@B@@@DAB@@@BBB@B@@@@CB@@@@AB@@BBBBHDB@@@@B@B@B@B@BDB@@@@@B@@BBB@@BB@@@@B@@@B@F@B@@@@BB@@DD@@BB@@B@@@B@B@@@B@B@@@B@DB@@B@@BB@@@@B@@@B@@B@@B@@@@BBB@B@FB@AB@@B@@B@B@@@DB@@B@BBB@@@BAB@BB@@B@B@B@B@@BB@@B@B@@AB@@@B@BB@@BDBB@BBD@@@BB@@BB@@BBB@B@@B@@@B@BBD@BBBF@@B@@B@@BB@B@FB@BJF@B@@@@A@AB@@@@BB@D@@DBB@B@D@D@BBB@B@BB@@FBD@@@DBD@DBB@BBBB@@B@BBBB@@@@BBBB@BB@B@D@BBD@D@@B@@BB@D@@@BAB@@BB@DB@@BA@@B@B@BBBaEAJ@BDBB@BBNBB@DBHB@@B@@@B@B@B@@@@@@@BF@@B@@BDD@D@@@BFD@DB@@@BB@B@@B@BB@@DBBB@@BBB@@@B@D@BBB@HDB@BBH@B@FB@@BD@@@DB@BB@@BB@BB@BBD@DDB@D@H@AHAF@BA@@B@@@B@@@BBBBD@@@@@BA@@B@@BB@B@@@@A@AB@@@@@B@B@BA@@BBB@@BBDBFDBBB@BBBBHBD@D@F@DBF@B@F@@@BA@A@@ACDAF@BBD@@BB@@B@BBBBB@D@@BDNHBBBB@BB@@B@BA@@BBB@@FD@@@BAB@B@@BBFDHFDBBBDFBDBFFFDFDDDDBBHPFFFHBBDDBBDBD@HBFBHBFBFBPDFDD@DBDB@@BBB@H@B@BDDBFFBB@B@D@D@D@DBDBB@B@D@B@@@@XXTVJD@BADDDDD\\VFB\\LBBJ@PBNARE^DD@@@PAH@H@FBBB@@DBLBBBDBB@DBLFHFFDFFLJHFDBNDD@B@BBB@B@L@D@D@LBB@D@N@BGLBP@dPXHLFFB^N@@PHTGD@VIFEFGV@^@bBbLnP@H@@BBFB@@B@DBH@DB@@JDJBFAT@BCF@JAJCHBDABAHAH@DBLFHAH@N@JCB@F@DBNEPALCLDF@BBJDFDB@THH@JD@@B@NCbAV@RBH@B@J@RGPGBAFALAF@BADABIDCBEC@@CFGA@BQDAFIAABGB@@KDC@ADED@@EDBCMA@@CEBCCHGPKBCB@B@F@@BB@@B@@@CB@AAD@BBBAF@BA@B@@PCHCjO@CF@HCBF\\CICBAD@@AF@B@D@FB@IAA@ABCBGLOCBBCD@B@FG@ATKLEBABACABEC@BE@E@EA@FIAG@CACBACGFELHHEB@TC@CBAJEFB@@B@JEAA@AECJMDOCCCC@@CADEBGD@@CB@@GLBBENEFDF@H@H@JGLGSHBKNCFBBEECKBI@CBBM@IBADAICC@@ADIGCAKSMDMOEAEJGIMEGGC@EDGIE@ADQDGHODC@CHICCAS@@a]KEEBYDKFgJEFEAeRK@A@E@ODG@I@G@IBC@AAECCAA@H]BM@A@@@ABC@@@A@AAACCCCAA@@AA@C@CAAAA@@CCA@@A@@@AA@@A@@@A@A@AAA@AAACCCEAAACA@@AAACE@AAC@C@@@AAC@A@@@AAA@ACEACAAAAACCAA@EAICA@IAAA@C@@@A@C@A@A@AB@@CEGA@CAAAACA@@@AAIGCAA@@@AAAACALE@ABGA@AE@A@I@WNEB@D@@AFA@CBWFC@CAC@SICAC@EAGA@AC@CAA@ABC@@@ODC@GBEBE@@BKNEBKHA@IB@@IAA@C@IA@ACC@C@C@C@CDILQDGBAFKBADEBCBADC@G@EAACCCGACA@UAuGK@G@MQBM@C@@BA@@JMEGDK@UAMBWEEAAD@BGN@FAHCPMlYFEHG\\[@@AKAcqACCMACAEAE@A@@GS@AAS@A@@@@@@@A@AAA@A@@BABEBCDCDELK@K@W@I@@EE@@AA@E@E@C@@@A@@@A@@BAB@@@@A@@A@@B@@@@@@A@@@@AAA@@@@@@B@B@@A@@A@@@A@A@@@@@@A@@B@B@@@@@@@@AA@@A@@B@@@B@@@@@@@@AB@@@@@@A@@@@AB@@@A@@@@@AB@@@@A@@@A@A@@D@@A@@A@@@@@@@@AB@@@@@@@A@@@AC@@AACBE@AAEGIGIGCAEECAE@CA@A@E@SJA@GBA@E@CBEBK@I@AA@BA@A@CFABIA@@S@A@@DAAC@A@M@AD@BADABCRCBEDIJMDCDM@@@ADADBBBFBFDDB@AC@@AA@BA@@@CCCC@AACBBCBCC@BEA@CA@E@ED@FB@ABA@CGACDA@IEADAD@B@BBDCDA@A@ACACCBA@@C@CAA@A@A@A@@BG@E@C@AA@@A@@@AB@BA@A@A@@@@CAEACA@@@@@ABCBA@CBADCBA@CBA@A@ABA@@@A@ACC@@@A@@@ABA@@@@@A@@@@A@@@A@@@A@E@MD@ADAHCBAB@@@@@A@EB@@EDIF@ACCEEECFOLM@@@EMIIG@ACAEEEF@ABKB@DQA@MG@@@@BA@A@CB@DA@@YEHIBCEEAE@@BC@@BA@@BAB@CETGFC\\KB@DEBADE@@H@B@F@F@@EAEGCCABABAHAJCD@DABADCDABABED@BC@E@@I@@EE@@ACC@EAAC@K@FCBADAF@L@FCFDDBFBB@EMACGA@C@AEA@AAAC@ABABBCAAAA@@@A@@BG@AAACAGCCIAA@AFAD@BA@@B@AEZHCSNO@AG@LOEBDKDDFCEEHEFOAAC@AAAAA@@@A@AA@@A@@@A@@@AC@@@@AAA@AAA@@@A@@@@@@@A@@AA@A@A@ABAAA@AAA@AA@@CA@@@@@A@@@AAA@@@A@@BABABA@A@@@A@A@@AA@@ACAAA@@A@@@@@A@A@AAA@@AAAA@@A@A@A@@ACACCAACAAAA@@@A@@@A@CA@@A@@@@A@A@@A@@AA@A@AAA@@@AAA@A@@@A@AAA@AAA@@AAB@@@@@@AAB@@@@A@@@A@@B@@AB@@@BA@@AA@@A@@@@@@A@@@@@AA@A@@@@@A@@A@CAA@@@AB@@A@@A@@AA@AA@@@@@@A@@@@@@BA@@@A@AA@@A@A@@@@@A@@@@@BB@@@B@@@@@B@@@BA@@AA@@@AAA@A@AAA@@@@C@@@AAA@A@AA@@ACACCCA@@@@AAAAA@@A@@AA@A@A@A@A@A@@A@@@A@A@E@A@A@IA@@C@@AAB@@@@@B@@AB@@@BA@@@ABCA@@A@CAGA@@A@CAC@AAA@AA@@AA@ACCA@ACAAAA@ACCCC@ACG@@ACACACAAAA@@A@A@C@ABA@ABEB@@AB@@A@@BA@@@C@A@@BA@A@ABA@AB@@@@CAGC@@GAEAAAA@CABA@@DADCB@BA@@@@ACAACA@@CBA@AB@@@AAA@AAA@@@@@@AB"],"encodeOffsets":[[123933,43258]]}}],"UTF8Encoding":true});}));