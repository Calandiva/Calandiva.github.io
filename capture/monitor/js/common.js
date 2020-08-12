jQuery(function($) {'use common',

	$('#incfont').click(function(){ 
		curSize = parseInt($('body').css('font-size')) + 2;
		if(curSize <= 26) $('body').css('font-size', curSize);
	});
	
	$('#decfont').click(function(){
		curSize = parseInt($('body').css('font-size')) - 2;
		if(curSize >= 13) $('body').css('font-size', curSize);
	});
	
});


function getContextPath(){
    var offset = location.href.indexOf(location.host)+location.host.length;
    var ctxPath = location.href.substring(offset,location.href.indexOf('/',offset+1));
    return ctxPath;
}
