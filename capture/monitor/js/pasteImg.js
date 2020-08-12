jQuery(function($) {'use pasteImg',
	
	/*$('.loadImg').ready(function() {
		alert($(this).attr('class'));
		alert($('div[data-target="'+$(this).attr('data-target')+'"]').attr("data-seq"));
	});*/
	
	
	$(document).ready(function() { 
		
		$('.loadImg').each( function( index, element ) {
			loadImg($(this));
		});
	});
	
	$('.pasteArea').each(function(index, element){
		$(this).attr('contenteditable', 'true');
		$(this).html($(this).attr('title'));
	});

	$('.pasteArea').on('paste', function(e) {
		
		if(isLoad()) return;
		
		var orgEvent = e.originalEvent;
		var _area = $(this);
		if (typeof orgEvent === 'undefined' || orgEvent == null || typeof orgEvent.clipboardData === 'undefined') {
			//console.log(typeof orgEvent.clipboardData === 'undefined');
			var waitToPastInterval = setInterval(function() {
				if (_area.children().length > 0) {
					clearInterval(waitToPastInterval);
					_makeImg(_area, _area.find('img')[0].src, 'N', '');
				}
			}, 1);
			
		} else {
			//console.log(typeof orgEvent.clipboardData === 'undefined');
			for (var i = 0; i < orgEvent.clipboardData.items.length; i++) {
				if (orgEvent.clipboardData.items[i].kind == "file" && orgEvent.clipboardData.items[i].type == "image/png") {
					var imageFile = orgEvent.clipboardData.items[i].getAsFile();
					var fileReader = new FileReader();

					fileReader.onloadend = function() {
						_makeImg(_area, fileReader.result, 'N', '');
					};

					fileReader.readAsDataURL(imageFile);
					break;	
				}
			}
		}
		
	});

	
});


function loadImg(obj){
	
	var _area = $('div[data-target="'+obj.attr('data-target')+'"]');
	var _oldDate = obj.attr('data-filenm');
	
	
	if (_oldDate != '') {
		
		_oldDate = _oldDate.split('_')[0];
		
		var _type = (_oldDate == '' ? 'N' : 'Y');
		
		//if(?????) _type = 'N';
		
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			var reader = new FileReader();
			reader.onloadend = function(e) {
				obj.remove();
				_makeImg(_area, e.target.result, _type, _oldDate);
		    };
			
		    reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', obj.attr('data-src'));
		xhr.responseType = 'blob';
		xhr.send();
	}
	
}

function removeElement(obj){	
	obj.remove();
}

function _makeImg(_area, base64Data, _new, _oldDate) {
	
	startLoad();
	
	if(_new == 'Y') _setDate(_oldDate);
	else _setDate(null);
	
	var _pasteTime = getPasteTime();
	var _downloadFileName = changeFormat("yyyy년MM월dd일HH시mm분ss초"); //fileName
	var _changeTime = changeFormat("yyyy-MM-dd HH:mm:ss");
	
	var _pasteImg = new Image();
	_pasteImg.src = base64Data;
	
	_pasteImg.onload = function() {
		
	    $("#timeMarker").text(_changeTime);
		$("#timeMarkerElement").addClass("flex-element").removeClass("hide-element");
		
	    var _timeImg = new Image();
	    
	    html2canvas($("#timeMarkerElement"), {
	    	async: false,
	    	allowTaint: true,
	        useCORS: true,
	        taintTest: false,
	        baseImg: _pasteImg,
			onrendered: function(canvas) {
				
				_timeImg.src = canvas.toDataURL();
				
				var _baseImg = this.baseImg;
				canvas.width = _baseImg.width;
			    canvas.height = _baseImg.height;
			    
			    var ctx = canvas.getContext("2d");
			    ctx.drawImage(_baseImg, 0, 0);
			    ctx.globalAlpha = 1;
				
			    _timeImg.onload = function(){
			    	ctx.drawImage(_timeImg, _baseImg.width - (_timeImg.width + 2), _baseImg.height - (_timeImg.height + 2));
			    	
			    	_paste(_area, canvas.toDataURL('image/jpg'), _pasteTime, _downloadFileName);
			    };
			    
			    $("#timeMarker").text("");
				$("#timeMarkerElement").addClass("hide-element").removeClass("flex-element");
				
			}
	    });
	};
}

function _paste(_area, _base64Data, _pasteTime, _downloadFileName) {
	
	_area.empty();
	
	_area.html(_area.attr('title'));
	
	var _close = _area.attr("data-close");
	
	if(_close == 'true'){
		return;
	}
	
	var _seq = Number(_area.attr("data-seq"));
	var _cnt = Number(_area.attr("data-cnt"));
	var _limit = Number(_area.attr("data-limit"));
	
	var _div = $('<div>', { 'class':'img-area row' });
	
	$('<input>', {
		type: 'hidden',
		name: _area.attr("data-target"),
		'data-time':_pasteTime,
		'data-seq':(_seq + _cnt),
		'data-ext':".jpg",
		value: _pasteTime + "_" + (_seq + _cnt)  + ".jpg," + _base64Data
	}).appendTo(_div);
	
	$('<img>', {
		src: _base64Data,
		alt: '캡쳐 이미지',
		title:'캡쳐 이미지',
		width:'100px',
		height:'100px',
		'class':'img-rounded',
		click: function(){
			modal.img(_base64Data);
		}
	}).css({
		cursor: 'pointer'
	}).appendTo(_div);
	
	$('<button>', {
		type: 'button',
		title:'이미지 삭제',
		'class':'btn btn-success btn-sm pasteArea-btn',
		click: function(){
			_delete($(this), _area);
		}
	}).html('삭제').appendTo(_div);
	
	$('<button>', {
		type: 'button',
		title:'이미지 다운로드',
		'class':'btn btn-default btn-sm pasteArea-btn',
		click: function(){
			_download(_base64Data, _downloadFileName);
		}
	}).html('다운로드').appendTo(_div);
	
	
	_div.appendTo(_area.parent());
	
	_cnt++;
	
	_area.attr("data-cnt", _cnt);
	
	if(_cnt == _limit) { 
		_area.hide();
		_area.attr("data-close", "true");
	}
	
	endLoad();
}


function _delete(obj, area){
	
	var _parent = obj.parent();
	
	_resetValue(_parent);
	
	_parent.remove();
	
	area.html(area.attr('title'));
	
	area.attr("data-cnt", Number(area.attr("data-cnt")) - 1);
	area.attr("data-close", "false");
	
	area.show();
	
}

function _resetValue(obj){
	
	var _obj = obj;
	
	while(true) {
		_obj = _obj.next();
		var _input = _obj.find('input[name="etcImg"]');
		
		if(!_input.is( "input" )) break;
		
		var _base64Data = _obj.find('img').attr('src');
		var _seq = Number(_input.attr("data-seq")) - 1;
		var _val = _input.attr("data-time") + "_" + _seq + _input.attr("data-ext") + "," + _base64Data;
		
		_input.attr("data-seq", _seq);
		_input.val(_val);
	}
	
}

function cleanPasteAreas(){
	
	$(".pasteArea").each( function() {
		$(this).parent().find('.img-area').remove();
		$(this).html($(this).attr('title'));
		$(this).attr("data-cnt", "0");
		$(this).attr("data-close", "false");
		$(this).show();
	});
	
}

function _download(base64Data, fileNm){
	var ext = "png";
	var format = "image/png";
	download(base64Data, fileNm+"."+ext, format);
}
