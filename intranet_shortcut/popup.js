//이미지
function openwindow(opage, x, y) {
farwindow = window.open('','Links','width='+x+', height='+y+', toolbar=0, scrollbars=0, resizable=no');
if (farwindow != null) {
if (farwindow.opener == null) {
farwindow.opener = self;
}
farwindow.location.href = opage;
}
}


var total_url = {
'예스파일':'http://www.yesfile.com/board/board_view.php?pg_mode=view_popup&idx=',
'위디스크':'http://www.wedisk.co.kr/wediskNew/contentsView.do?contentsID=',
'티플':'http://www.tple.co.kr/_renew/storage.php?todo=view&source=W&bbsIdx=',
'투디스크':'https://www.todisk.com/_main/popup.php?doc=bbsInfo&idx=',
'큐다운':'http://www.qdown.com/main/popup/bbs_info.php?idx=',
'엠파일':'http://www.mfile.co.kr/storage.php?act=view&idx=',
'케이디스크':'http://www.kdisk.co.kr/pop.php?sm=bbs_info&idx=',
'파일썬':'http://www.filesun.com/disk/board.php?board=',
'파일노리':'http://www.filenori.com/noriNew/contentsView.do?contentsID=',
'파일마루':'http://www.filemaru.com/?doc=list_sub&searchType=bidx&searchVal=',
'파일론':'http://www.filelon.com/main/popup.php?doc=bbsInfo&idx=',
'파일쿠키':'http://www.filekuki.com/popup/kukicontview.jsp?id=',
'파일콕':'http://www.filekok.com/main/popup.php?doc=bbsInfo&idx=',
'파일조':'http://www.filejo.com/main/popup/bbs_info.php?idx=',
'도도파일':'http://www.dodofile.com/board.php?act=bbs_info&idx=',
'본디스크':'http://www.bondisk.com/main/popup/bbs_info.php?idx=',
'빅파일':'http://www.bigfile.co.kr/content/content_main.php?co_id=',
'스마트파일':'http://smartfile.co.kr/contents/view.php?gg=1&idx=',
'쉐어박스':'http://sharebox.co.kr/storage/storage.php?todo=view&idx=',
'새디스크':'http://sedisk.com/storage.php?act=view&idx=',
'파일시티':'https://www.filecity.co.kr/contents/#tab=',
'온디스크':'http://ondisk.co.kr/pop.php?sm=bbs_info&idx=',
'미투디스크':'http://me2disk.com/contents/view.htm?idx=',
'지디스크':'http://g-disk.co.kr/contents/view.htm?idx=',
'파일이즈':'http://fileis.com/contents/view.htm?idx=',
'파일혼':'https://filehon.com/contents/view.php?idx=',
'파일구리(웹하드)':'http://disk.fileguri.com/pop.php?sm=bbs_info&idx=',
'애플파일':'http://applefile.com/contents/board_view.php?idx=',
'파일조':'http://www.filejo.com/main/popup/bbs_info.php?idx=',
'파일함':'http://fileham.com/main/popup.php?doc=bbsInfo&idx=',
'메가파일':'http://www.megafile.co.kr/webhard/view.php?WriteNum=',
'파일투어':'http://www.filetour.com/front/contents/',
'피디팝':'http://bbs.pdpop.com/board_re.php?mode=view&code=',
'파일런':'https://filerun.co.kr/contents/view.htm?idx='
};












//추출부
var ul = document.getElementsByClassName('addedFile'); //사진파일제목크롤링
var ul1 = ul[0]; 
var ul2 = ul[1];
var ul3 = ul[2];
var ul4 = ul[3];

function jubsoo_click() {
document.getElementById('cp020010').scrollIntoView(); //접수버튼누르기
document.getElementById('cp020010').click();
};

function banryu_click() {
document.getElementById('cp020090').scrollIntoView(); //반려버튼누르기
document.getElementById('cp020090').click();
}

function jeban_click() {
document.getElementById('cp020120').scrollIntoView(); //제.반버튼누르기
document.getElementById('cp020120').click();
}

function go_click() {
document.getElementById('insbtn').scrollIntoView(); //제.반버튼누르기
document.getElementById('insbtn').click();
}

function go_one() {
var aa = document.getElementById('ospName_1').click(); //1번 글 들어가기
}

function go_two() {
var aa = document.getElementById('ospName_2').click(); //2번 글 들어가기
}

function go_three() {
var aa = document.getElementById('ospName_3').click(); //3번 글 들어가기
}



function banSa() {

document.getElementById('cp020120').scrollIntoView(); //반려버튼누르기
document.getElementById('cp020120').click();	
document.getElementsByName('etc')[0].value = '게시물 삭제되어 반려(제휴)처리, 실적은 접수와 동일하게 인정됩니다';



}




function iheng_click() {
document.getElementsByName('ynall')[0].click();

};



function ihengGo() {
document.checkInsForm();
};








function image1() {
var img1_ad = document.getElementByClassName('addedFile').getAttribute('svrfile');
var img1 = '/file/opupload/'+img1_ad+'.jpg'
}

function picV() {
var picWth_pre = document.getElementById('imagePreviewArea');
picWth_pre.style.width = '1000px';
var picWth = picWth_pre.getElementsByClassName('imgArea')[0];
picWth.style.size = "2000px";
picWth.style.width = "1000px";
}



function over_img1() {
var img_ov = document.getElementsByClassName('addedFile');
var mo = document.createEvent("MouseEvent");
mo.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
img_ov[0].dispatchEvent(mo);
picV();

}

function over_img2() {
var img_ov = document.getElementsByClassName('addedFile');
var mo = document.createEvent("MouseEvent");
mo.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
img_ov[1].dispatchEvent(mo);
picV();
}

function over_img3() {
var img_ov = document.getElementsByClassName('addedFile');
var mo = document.createEvent("MouseEvent");
mo.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
img_ov[2].dispatchEvent(mo);
picV();
}

function over_img4() {
var img_ov = document.getElementsByClassName('addedFile');
var mo = document.createEvent("MouseEvent");
mo.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
img_ov[3].dispatchEvent(mo);
picV();
}

function over_img5() {
var img_ov = document.getElementsByClassName('addedFile');
var mo = document.createEvent("MouseEvent");
mo.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
img_ov[4].dispatchEvent(mo);
picV();
}

function over_img6() {
var img_ov = document.getElementsByClassName('addedFile');
var mo = document.createEvent("MouseEvent");
mo.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
img_ov[5].dispatchEvent(mo);
picV();
}


function page_open() {
	
var pathPage = document.getElementsByName('crplace')[0].getAttribute('value');
var webhard = document.getElementsByTagName('td')[7].childNodes[0].nodeValue;
var weburl = total_url[webhard];
var result = pathPage.replace(weburl, '');

if (webhard == '파일이즈') {
	
var jsCode = "'javascript:"
var m_t1 = "viewContentsOpen('1', '";
var m_t2 = "', '0', '', '','0','','','1')";
var finalCode = jsCode.concat(m_t1,result,m_t2);
var midCode = m_t1.concat(result,m_t2);

alert(midCode)

function abc(){
var aIframe = document.createElement("iframe");
aIframe.setAttribute("id","webhard1_id");
aIframe.setAttribute("name","webhard1_name");
aIframe.style.width = "800px";
aIframe.style.height = "400px";
document.getElementById("list-type-four").appendChild(aIframe);
var iframe = document.getElementById('webhard1_id');
var go_if = iframe.contentWindow;
go_if.location.href = "http://www.fileis.com/";

/go_if.location.href = 'midcode';/

setTimeout(function(){
	go_if.eval(midCode),3000});
	
};

abc();

}

else{
	
function abc(){
var aIframe = document.createElement("iframe");
aIframe.setAttribute("id","webhard1_id");
aIframe.setAttribute("name","webhard1_name");
aIframe.style.width = "800px";
aIframe.style.height = "300px";
document.getElementById("list-type-four").appendChild(aIframe);
var iframe = document.getElementById('webhard1_id');
var go_if = iframe.contentWindow;
go_if.location.href = pathPage;
};

abc();

}
}








function webhard_name() {
var webhard = document.getElementsByTagName('td')[7].childNodes[0].nodeValue;
var weburl = total_url[webhard];

var bon_url = document.getElementsByTagName('tbody')[3];
var bon_url2 = bon_url.getElementsByTagName('a')[1].innerText;

var result = bon_url2.replace(weburl, '');

if(webhard == '예스파일') {
var fi_result = result.length;
var final_re = result.slice(0,fi_result-14);
var final_result = final_re - final_re;
var result = final_re;
}

else if(webhard == '투디스크') {
var and = result.search('eidx');
var result = result.slice(0,and-1);
var final_result = result - result;
}

else if(webhard == '파일시티') {
var result = result.replace('&view=list&idx=','');
var result = result.slice(5,20);
var final_result = result - result;
}

else if(webhard == '파일썬') {
var and = result.search('n=');
var result = result.slice(and+2,20);
var final_result = result - result;
}

else if(webhard == '메가파일') {
var result = result.replace('&fv=','');
var final_result = result - result;
}



else if(webhard == '피디팝') {
var result = result.slice(8,20)
var final_result = result - result;
}
else{
var final_result = result - result;
}



var cn = document.getElementById('urlLoc');
var newli = document.createElement('li');



if(final_result ==0){
var fr = 'URL이상없음'+'('+result+')';
newli.style.color="blue";
}
else{
var fr = 'URL 확인필요' + weburl;
newli.style.color="red";
}

newli.innerHTML = ' ===> ' + fr;

cn.appendChild(newli);




}











//실행부 - shortcut


function numb() {






shortcut.add('Q',function() 
{jubsoo_click();
},
{'disable_in_input': true});



shortcut.add('W',function()
{banryu_click();
},
{'disable_in_input': true});



shortcut.add('E',function()
{jeban_click();
},
{'disable_in_input': true});



shortcut.add('R',function()
{go_click();
},
{'disable_in_input': true});



shortcut.add('',function()
{over_img1();
},
{'disable_in_input': true,
'keycode': 49});

shortcut.add('',function()
{over_img2();
},
{'disable_in_input': true,
'keycode': 50});

shortcut.add('',function()
{over_img3();
},
{'disable_in_input': true,
'keycode': 51});

shortcut.add('',function()
{over_img4();
},
{'disable_in_input': true,
'keycode': 52});

shortcut.add('',function()
{over_img5();
},
{'disable_in_input': true,
'keycode': 53});

shortcut.add('',function()
{over_img6();
},
{'disable_in_input': true,
'keycode': 54});









shortcut.add('alt+1',function()
{go_one();
},
{'disable_in_input': true
});


shortcut.add('alt+2',function()
{go_two();
},
{'disable_in_input': true
});


shortcut.add('alt+3',function()
{go_three();
},
{'disable_in_input': true
});

shortcut.add('A',function()
{webhard_name();
},
{'disable_in_input': true
});

shortcut.add('D',function()
{banSa();
},
{'disable_in_input': true
});


shortcut.add('F',function()
{page_open();
},
{'disable_in_input': true
});

shortcut.add('I',function()
{iheng_click();
},
{'disable_in_input': true
});



shortcut.add('o',function()
{ihengGo();
},
{'disable_in_input': true
});












}




window.onload=numb;