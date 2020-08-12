
jQuery(function($) {'use clock',
	utc_offset();
});

var _date = null;

function srvTime(){
	
	var url = "../cmmn/getDate.json?url=http://www.copy112.or.kr";
	
	if(_date == null){
		
		try {
			$.ajax({
				type: "GET",
				async: false,
				dataType: 'json',
				cache: false,
				url: url,
				timeout: 3000,
				success: function(data, textStatus, xhr) {
					_date = new Date(data.date);
				},
				error: function (data, status, error) {
					console.log('error', data, status, error);
				}
			}).done(function (data, textStatus, xhr) { 
				_date = new Date(data.date); 
			}).fail(function(data, textStatus){
				if(textStatus === "timeout"){
					srvTime();
				}
			});
		} catch (e) {
			console.log(e.message);
		}
		
		
	} else {
		_date = new Date(_date.getTime() + 1000);
	}
	
	return (_date == null ? new Date() : _date);
}

function nowUTCoffset(t){ 
	var date = null;
	
	if(_date == null) date = srvTime();
	else _date = new Date(_date.getTime() + 1000);
	
	date = _date;
	
	//var date = srvTime();
	
	date = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
	return new Date(date.getTime() + (t * 60 * 60000)); 
};

function utc_offset(){
	var time = 9;
	
	$("#clock").html($.format.date(nowUTCoffset(time), "yyyy-MM-dd"));
	
	//$("#clock").html($.format.date(nowUTCoffset(time), "yyyy-MM-dd a hh:mm:ss"));
	
	//setTimeout ("utc_offset()", 1000);
}


function getPasteTime(){ 
	//_date = null;
	return $.format.date(srvTime(), "yyyyMMddHHmmss"); 
};

function changeFormat(format){ 
	//_date = null;
	return $.format.date(srvTime(), format); 
};


function _setDate(date){ 
	if(date == null) _date = null;
	else {
		date = date.replace( /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3-$4-$5-$6").split('-');
		_date = new Date(date[0], date[1]-1, date[2], date[3], date[4], date[5]);
	}
};







