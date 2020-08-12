/*
	모니터링 신고도구 환경 세팅 파일
*/

var Const = {};

Const.COUNTRY_CODE = {
	"A1":"Anonymous Proxy",
	"A2":"Satellite Provider",
	"O1":"Other Country",
	"AD":"Andorra",
	"AE":"United Arab Emirates",
	"AF":"Afghanistan",
	"AG":"Antigua and Barbuda",
	"AI":"Anguilla",
	"AL":"Albania",
	"AM":"Armenia",
	"AO":"Angola",
	"AP":"Asia/Pacific Region",
	"AQ":"Antarctica",
	"AR":"Argentina",
	"AS":"American Samoa",
	"AT":"Austria",
	"AU":"Australia",
	"AW":"Aruba",
	"AX":"Aland Islands",
	"AZ":"Azerbaijan",
	"BA":"Bosnia and Herzegovina",
	"BB":"Barbados",
	"BD":"Bangladesh",
	"BE":"Belgium",
	"BF":"Burkina Faso",
	"BG":"Bulgaria",
	"BH":"Bahrain",
	"BI":"Burundi",
	"BJ":"Benin",
	"BL":"Saint Bartelemey",
	"BM":"Bermuda",
	"BN":"Brunei Darussalam",
	"BO":"Bolivia",
	"BQ":"Bonaire, Saint Eustatius and Saba",
	"BR":"Brazil",
	"BS":"Bahamas",
	"BT":"Bhutan",
	"BV":"Bouvet Island",
	"BW":"Botswana",
	"BY":"Belarus",
	"BZ":"Belize",
	"CA":"캐나다",
	"CC":"Cocos (Keeling) Islands",
	"CD":"Congo, The Democratic Republic of the",
	"CF":"Central African Republic",
	"CG":"Congo",
	"CH":"Switzerland",
	"CI":"Cote d'Ivoire",
	"CK":"Cook Islands",
	"CL":"Chile",
	"CM":"Cameroon",
	"CN":"중국",
	"CO":"Colombia",
	"CR":"Costa Rica",
	"CU":"Cuba",
	"CV":"Cape Verde",
	"CW":"Curacao",
	"CX":"Christmas Island",
	"CY":"Cyprus",
	"CZ":"Czech Republic",
	"DE":"독일",
	"DJ":"Djibouti",
	"DK":"Denmark",
	"DM":"Dominica",
	"DO":"Dominican Republic",
	"DZ":"Algeria",
	"EC":"Ecuador",
	"EE":"Estonia",
	"EG":"Egypt",
	"EH":"Western Sahara",
	"ER":"Eritrea",
	"ES":"스페인",
	"ET":"Ethiopia",
	"EU":"유럽",
	"FI":"Finland",
	"FJ":"Fiji",
	"FK":"Falkland Islands (Malvinas)",
	"FM":"Micronesia, Federated States of",
	"FO":"Faroe Islands",
	"FR":"프랑스",
	"GA":"Gabon",
	"GB":"영국",
	"GD":"Grenada",
	"GE":"Georgia",
	"GF":"French Guiana",
	"GG":"Guernsey",
	"GH":"Ghana",
	"GI":"Gibraltar",
	"GL":"Greenland",
	"GM":"Gambia",
	"GN":"Guinea",
	"GP":"Guadeloupe",
	"GQ":"Equatorial Guinea",
	"GR":"Greece",
	"GS":"South Georgia and the South Sandwich Islands",
	"GT":"Guatemala",
	"GU":"Guam",
	"GW":"Guinea-Bissau",
	"GY":"Guyana",
	"HK":"홍콩",
	"HM":"Heard Island and McDonald Islands",
	"HN":"Honduras",
	"HR":"Croatia",
	"HT":"Haiti",
	"HU":"Hungary",
	"ID":"Indonesia",
	"IE":"Ireland",
	"IL":"Israel",
	"IM":"Isle of Man",
	"IN":"India",
	"IO":"British Indian Ocean Territory",
	"IQ":"Iraq",
	"IR":"Iran, Islamic Republic of",
	"IS":"Iceland",
	"IT":"이탈리아",
	"JE":"Jersey",
	"JM":"Jamaica",
	"JO":"Jordan",
	"JP":"일본",
	"KE":"Kenya",
	"KG":"Kyrgyzstan",
	"KH":"Cambodia",
	"KI":"Kiribati",
	"KM":"Comoros",
	"KN":"Saint Kitts and Nevis",
	"KP":"북한",
	"KR":"대한민국",
	"KW":"Kuwait",
	"KY":"Cayman Islands",
	"KZ":"Kazakhstan",
	"LA":"Lao People's Democratic Republic",
	"LB":"Lebanon",
	"LC":"Saint Lucia",
	"LI":"Liechtenstein",
	"LK":"Sri Lanka",
	"LR":"Liberia",
	"LS":"Lesotho",
	"LT":"Lithuania",
	"LU":"Luxembourg",
	"LV":"Latvia",
	"LY":"Libyan Arab Jamahiriya",
	"MA":"Morocco",
	"MC":"Monaco",
	"MD":"Moldova, Republic of",
	"ME":"Montenegro",
	"MF":"Saint Martin",
	"MG":"Madagascar",
	"MH":"Marshall Islands",
	"MK":"Macedonia",
	"ML":"Mali",
	"MM":"Myanmar",
	"MN":"Mongolia",
	"MO":"Macao",
	"MP":"Northern Mariana Islands",
	"MQ":"Martinique",
	"MR":"Mauritania",
	"MS":"Montserrat",
	"MT":"Malta",
	"MU":"Mauritius",
	"MV":"Maldives",
	"MW":"Malawi",
	"MX":"Mexico",
	"MY":"Malaysia",
	"MZ":"Mozambique",
	"NA":"Namibia",
	"NC":"New Caledonia",
	"NE":"Niger",
	"NF":"Norfolk Island",
	"NG":"Nigeria",
	"NI":"Nicaragua",
	"NL":"Netherlands",
	"NO":"Norway",
	"NP":"Nepal",
	"NR":"Nauru",
	"NU":"Niue",
	"NZ":"New Zealand",
	"OM":"Oman",
	"PA":"Panama",
	"PE":"Peru",
	"PF":"French Polynesia",
	"PG":"Papua New Guinea",
	"PH":"Philippines",
	"PK":"Pakistan",
	"PL":"Poland",
	"PM":"Saint Pierre and Miquelon",
	"PN":"Pitcairn",
	"PR":"Puerto Rico",
	"PS":"Palestinian Territory",
	"PT":"Portugal",
	"PW":"Palau",
	"PY":"Paraguay",
	"QA":"Qatar",
	"RE":"Reunion",
	"RO":"Romania",
	"RS":"Serbia",
	"RU":"Russian Federation",
	"RW":"Rwanda",
	"SA":"Saudi Arabia",
	"SB":"Solomon Islands",
	"SC":"Seychelles",
	"SD":"Sudan",
	"SE":"Sweden",
	"SG":"Singapore",
	"SH":"Saint Helena",
	"SI":"Slovenia",
	"SJ":"Svalbard and Jan Mayen",
	"SK":"Slovakia",
	"SL":"Sierra Leone",
	"SM":"San Marino",
	"SN":"Senegal",
	"SO":"Somalia",
	"SR":"Suriname",
	"SS":"South Sudan",
	"ST":"Sao Tome and Principe",
	"SV":"El Salvador",
	"SX":"Sint Maarten",
	"SY":"Syrian Arab Republic",
	"SZ":"Swaziland",
	"TC":"Turks and Caicos Islands",
	"TD":"Chad",
	"TF":"French Southern Territories",
	"TG":"Togo",
	"TH":"Thailand",
	"TJ":"Tajikistan",
	"TK":"Tokelau",
	"TL":"Timor-Leste",
	"TM":"Turkmenistan",
	"TN":"Tunisia",
	"TO":"Tonga",
	"TR":"Turkey",
	"TT":"Trinidad and Tobago",
	"TV":"Tuvalu",
	"TW":"Taiwan",
	"TZ":"Tanzania, United Republic of",
	"UA":"Ukraine",
	"UG":"Uganda",
	"UM":"United States Minor Outlying Islands",
	"US":"미국",
	"UY":"Uruguay",
	"UZ":"Uzbekistan",
	"VA":"Holy See (Vatican City State)",
	"VC":"Saint Vincent and the Grenadines",
	"VE":"Venezuela",
	"VG":"Virgin Islands, British",
	"VI":"Virgin Islands, U.S.",
	"VN":"Vietnam",
	"VU":"Vanuatu",
	"WF":"Wallis and Futuna",
	"WS":"Samoa",
	"YE":"Yemen",
	"YT":"Mayotte",
	"ZA":"South Africa",
	"ZM":"Zambia",
	"ZW":"Zimbabwe"
};

// 임시 적용... 사이트차단 목록에 등록된 사이트에 대한 중복확인용
Const.BLOCK_SITE = [
//	"hibogo.net",
//	"torenzoa.net",
//	"btzoa.com",
//	"torrentby.com",
//	"tolinee.com",
//	"magnetpot.com",
//	"tnori.com",
//	"tvzil.com",
//	"tv0u.com",
//	"jjangto.net",
//	"filetv.net",
//	"grooveshark.com",
//	"dongyoungsang.com",
//	"thepiratebay.sx",
//	"deezer.com",
//	"bitsnoop.com",
//	"btmoa.com",
//	"totorg.com",
//	"togoon.com",
//	"playzoa.com",
//	"torinee.net",
//	"tnori.us",
//	"tonawa.net",
//	"tv0u.com",
//	"torrentbada.com",
//	"tcafe.net",
//	"ttox.net",
//	"torrentgun.net",
//	"torrentkg.com",
//	"torrent777.com",
//	"tohaja.net",
//	"torrentmr.com",
//	"4shared.com",
//	"funshion.com",
//	"hi-bogo.net",
//	"cloudzoa.net",
//	"torrentbom.com",
//	"sudazoa.net",
//	"sudazoa.com",
//	"bamizoa.com",
//	"torenzoa.info",
//	"tfreeca.com",
//	"torinee.org",
//	"tnori.org",
//	"torrentdown.net",
//	"mp30u.com",
//	"티노리.한국",
//	"tvzil.co.kr",
//	"torrentcup.net",
//	"tvday.net",
//	"totosky.com",
//	"tohari.com",
//	"torrentby.us",
//	"torrentby.net",
//	"togoons.com",
//	"tcafez.com",
//	"mytcafe.com",
//	"torrentoa.com",
//	"4shared-china.com",
//	"tosarang.net",
//	"torrentbest.net",
//	"torrent82.com",
//	"torrenters.com",
//	"torters.com",
//	"ubtoz.com",
//	"gongwon.net",
//	"gwtorrent.com",
//	"torrentdada.com",
//	"torrentdada.net",
//	"torrentred.com",
//	"torrentred.net",
//	"wonzoh.com",
//	"torrentgogo.com",
//	"torrentgogo.net",
//	"togoon.org",
//	"togoons.com",
//	"togoonz.com",
//	"abctb.net",
//	"chakantv.co.kr",
//	"chakantv.net",
//	"chakhantv.co.kr",
//	"chakhantv.com",
//	"chosuntv.net",
//	"happitv.co.kr",
//	"kgbtv.net",
//	"wmovie.net",
//	"xdm.co.kr",
//	"ychannel.net",
//	"bbtb.kr",
//	"kgtv.co.kr",
//	"uptv.co.kr",
//	"wmovie.net",
//	"xkm.kr",
//	"ftb.kr",
//	"thepiratebay.to",
//	"thepiratebay.se",
//	"thepiratebay.org",
//	"tobogo.net",
//	"cloudzoa.info",
//	"bamizoa.net",
//	"yumdisk.com",
//	"togle.info",
//	"tzoa.info",
//	"tmong.info",
//	"tozoa.info",
//	"tfreeca.us",
//	"tfreeca.org",
//	"torinee.info",
//	"tnori.net",
//	"mblaq.net",
//	"tvzil.us",
//	"tvzil.com",
//	"tvzil.kr",
//	"torrentdn.com",
//	"torrentman.net",
//	"torrentmr.net",
//	"torrentme.net",
//	"tcafex.com",
//	"tcafez.net",
//	"tcafe.info",
//	"tcafev.com",
//	"tcafez.net",
//	"bestbogo.net",
//	"ttzoa.info",
//	"tfreeca.tv",
//	"torinee.me",
//	"tnori.me",
//	"torrentdn.net",
//	"tcafen.com",
//	"tcafein.net",
//	"tcafein.com",
//	"tosarang1.net",
//	"torrentlove.net",
//	"torrentair.com",
//	"torrenters.net",
//	"torrentersx.com",
//	"aficif.com",
//	"torrentgw.com",
//	"torrentgr.com",
//	"wztorrent.com",
//	"hohotv.kr",
//	"optb.kr",
//	"bananatb.com",
//	"tcafek.com",
//	"tcafek.net",
//	"baykoreans.net",
//	"enjoylimit.tv",
//	"dramahost.net",
//	"alink.tv",
//	"dongyoungsang.com",
//	"jebangsong.com",
//	"onairkorean.tv",
//	"jolabada5.com",
//	"i.tguri.com",
//	"torrenthaja.com",
//	"torrentgirl.com",
//	"ck114.net",
//	"newyorkkorea.net",
//	"wowbogo.net",
//	"tnzoa.info",
//	"tfreecaa.com",
//	"tfreeca.org",
//	"torinee.co",
//	"torrentkim1.net",
//	"tcafeon.com",
//	"tosarang2.net",
//	"tobest2.net",
//	"torrentair.net",
//	"ttters.com",
//	"torrentmoatv.com",
//	"torrentred.org",
//	"wz1.site",
//	"wjtorrent.com",
//	"tgogonew.net",
//	"tgogonew.com",
//	"ck-tv.com",
//	"tv486.com",
//	"xtb.kr",
//	"mixbogo.net",
//	"trzoa.info",
//	"tfreecaa.com",
//	"torinee.work",
//	"tcafego.com",
//	"tersx.com",
//	"tgogoneo.com",
//	"bananatb.net",
//	"tv486.net",
//	"dramahost.org",
//	"linktv1.com",
//	"linktv2.com",
//	"linktv3.com",
//	"linktv4.com",
//	"linktv5.com",
//	"linktv6.com",
//	"linktv7.com",
//	"linktv8.com",
//	"linktv9.com",
//	"jebangsong3.net",
//	"jolabada.net",
//	"tguri.com",
//	"tguris.com",
//	"bigbogo.net",
//	"tezoa.info",
//	"tfreecab.com",
//	"tfreecab.com",
//	"85tv.net",
//	"torinee2.info",
//	"tcafeby.com",
//	"torrentersgo.com",
//	"tgogoneo.net",
//	"tv2016.net",
//	"drama486.com",
//	"cktv79.com",
//	"cktv99.com",
//	"dramahost1.com",
//	"alinktv.com",
//	"jolabada1.net",
//	"zipbogo.net",
//	"howbogo.net",
//	"tuzoa.info",
//	"tfreecac.com",
//	"tfreecac.com",
//	"utzoa.com",
//	"utzoa.com",
//	"tcafeuu.com",
//	"tcafeuu.net",
//	"torrentersme.com",
//	"tgogonew01.com",
//	"cktv79.net",
//	"cktv99.net",
//	"chakan11.com",
//	"chakan22.com",
//	"chakan33.com",
//	"chakan89.com",
//	"chakan99.com",
//	"ocn24.com",
//	"chakantv1.com",
//	"dramahost.tv",
//	"alinktv.co",
//	"dramalink.info",
//	"baykoreans.com",
//	"baykoreans.tv",
//	"www.enjoylimit.tv",
//	"torrenthajo.com",
//	"tgori.com",
//	"torrentga.com",
//	"tmoim.com",
//	"torrenhu.com",
//	"torrentyo.net",
//	"tizoa.info",
//	"tfreecad.com",
//	"tfreecad.com",
//	"tcafegg.com",
//	"torrentersq.com",
//	"tgogonew01.net",
//	"chaktb.com",
//	"drama.host",
//	"alink.info",
//	"tohu1.com",
//	"torrentgirl.kr",
//	"torrent22.net",
//	"tobest22.net",
//	"wz2.site",
//	"toptrn.com",
//	"bestmrt.com",
//	"jubetv.com",
//	"boja.tv",
//	"tvwhat.com",
//	"tvmon.kr",
//	"joovideo.net",
//	"korvideo.net",
//	"korvideo.com",
//	"belu.tv",
//	"liveusa.net",
//	"ontvkorea.com",
//	"playkorean.com",
//	"drama777.info",
//	"tvzon.info",
//	"tcafeaa.com",
//	"tfreeca2.com",
//	"tfreeca2.com",
//	"tfreecaf.com",
//	"tfreecaf.com",
//	"torrentersw.com",
//	"torrentgogo1.com",
//	"chaktb.net",
//	"cktv12.com",
//	"chak13.com",
//	"cktv14.com",
//	"cktv15.com",
//	"cktv16.com",
//	"cktv17.com",
//	"cktv18.com",
//	"cktv19.com",
//	"cktv20.com",
//	"cktv21.com",
//	"cktv22.com",
//	"cktv23.com",
//	"alinktv.org",
//	"tozangg.com",
//	"tosarangnew.net",
//	"tobestnew.net",
//	"torrentkim3.net",
//	"tpzoa.info",
//	"tcafeh.com",
//	"tfreecag.com",
//	"tfreecag.com",
//	"torrentersh.com",
//	"torrentgogo2.com",
//	"pup113.com",
//	"pup114.com",
//	"vegatorrent.com",
//	"themrt.com",
//	"mrk55.com",
//	"mrkcom.com",
//	"mrkok.com",
//	"mrtorent.com",
//	"bestmrk.com",
//	"thewrt.com",
//	"wtorent.com",
//	"m.tvwhat2.com",
//	"tzzoa.info",
//	"tcafemm.com",
//	"torrentersv.com",
//	"torrentgogo3.com",
//	"jolabada2.net",
//	"tguria.com",
//	"torrentred.info",
//	"joovideo.net",
//	"alinktv.cc",
//	"baykoreans.info",
//	"onairkorean.net",
//	"info447.info",
//	"tfreeca22.com",
//	"tfreeca22.com",
//	"otorrent.org",
//	"otorrent.co",
//	"otorrent.me",
//	"otorrent.us",
//	"otorrent1.com",
//	"otorrent.info",
//	"tomoa.net",
//	"mohmo.net",
//	"torrentlee.com",
//	"torrentlee.me",
//	"tok2.net",
//	"tgzoa.info",
//	"tcafegg.net",
//	"tcafeh.net",
//	"tfreeca2.com",
//	"tfreeca2.com",
//	"torrentgogo4.com",
//	"tgori.net",
//	"tguri.net",
//	"joo2video.com",
//	"joo2video.net",
//	"joovideo.tv",
//	"onairkorean.com",
//	"onairstart.com",
//	"onairkoreantv.net",
	
	// 2016-09-02 추가 (2016-14차)
//	"torrentwiz.com",
//	"torrentgirld.com",
//	"kreplay.com",
//	"torrentkwon.com",
//	"torrentkwon.xyz",
//	"joytorrent.com",
//	"torrentmart.net",
//	"tvkira.com",
//	"torrentstar.net",
//	"xxtorrent.net",
//	"onkoreantv.com"
];

Const.MOBILE_WEBHARD_LIST = {
//	"m.applefile.com":"applefile.com",
//	"m.pdpop.com":"www.pdpop.com",
//	"m.fileguri.com":"www.fileguri.com",
//	"m.lottofile.net":"www.lottofile.net",
//	"m.pruna.com":"www.pruna.com",
//	"m.filewa.com":"www.filewa.com",
//	"m.alfile.net":"www.alfile.net",
//	"m.daoki.com":"www.daoki.com",
//	"m.luckyworld.net":"www.luckyworld.net",
//	"m.monkey3.co.kr":"www.monkey3.co.kr",
//	"m.pruna.com":"www.pruna.com",
//	"m.mfile.co.kr":"www.mfile.co.kr",
//	"m.sharebox.co.kr":"www.sharebox.co.kr",
//	"m.qdown.com":"www.qdown.com",
//	"m.bondisk.com":"www.bondisk.com",
//	"m.tutudisk.com":"www.tutudisk.com",
//	"m.fileham.com":"www.fileham.com",
//	"m.yesfile.com":"www.yesfile.com",
//	"m.crazyfile.net":"www.crazyfile.net",
//	"m.tple.co.kr":"www.tple.co.kr",
//	"m.me2disk.com":"www.me2disk.com",
//	"m.santa25.net":"www.santa25.net",
//	"m.filejo.com":"www.filejo.com",
//	"m.megafile.co.kr":"www.megafile.co.kr",
//	"m.lottofile.net":"www.lottofile.net",
//	"m.alfile.net":"www.alfile.net",
//	"www.wedisk.co.kr/mobile":"www.wedisk.co.kr",
//	"m.kdisk.co.kr":"www.kdisk.co.kr",
//	"m.dbgo.com":"www.dbgo.com",
//	"m.bigfile.co.kr":"www.bigfile.co.kr",
//	"m.daoki.com":"www.diskman.co.kr",
//	"m.dondisk.co.kr":"www.dondisk.co.kr",
//	"m.filehon.com":"filehon.com",
//	"m.ondisk.co.kr":"ondisk.co.kr",
//	"m.dbgo.com":"dbgo.com",
//	"m.filetour.com":"filetour.com",
//	"m.filecast.co.kr/mobile":"filecast.co.kr",
//	"m.sedisk.com":"sedisk.com",
//	"m.todisk.com/mobil":"www.todisk.com",
//	"m.fileman.co.kr":"fileman.co.kr",
//	"m.g-disk.co.kr":"g-disk.co.kr",
//	"m.filebong.com":"www.filebong.com",
//	"m.zumdisk.com":"zumdisk.com",
//	"m.filewang.com":"filewang.com",
//	"m.filenori.com":"www.filenori.com"
};