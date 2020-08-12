
var _browser = {
		name : null,
		version : -1,
		isIe : function() {
			if(this.name == null) this.init();
			return this.name.toLowerCase() == 'ie';
		},
		isLowIe : function() {
			if(this.name == null) this.init();
			return (this.version < 10 || this.version == -1);
		},
		init : function() {
			isBrowser();
		}
};

function isBrowser() {
	var agent = navigator.userAgent.toLowerCase();
	var name = navigator.appName;

	// MS 계열 브라우저를 구분하기 위함.
	if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
		_browser.name  = 'ie';
		if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
			agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
			_browser.version = parseInt(agent[1]);
		} else { // IE 11+
			if(agent.indexOf('trident') > -1) { // IE 11 
				_browser.version = 11;
			} else if(agent.indexOf('edge/') > -1) { // Edge
				_browser.name  = 'edge';
				_browser.version = 11;
			}
		}
	} else if(agent.indexOf('safari') > -1) { // Chrome or Safari
		if(agent.indexOf('opr') > -1) { // Opera
			_browser.name  = 'opera';
		} else if(agent.indexOf('chrome') > -1) { // Chrome
			_browser.name  = 'chrome';
		} else { // Safari
			_browser.name  = 'safari';
		}
	} else if(agent.indexOf('firefox') > -1) { // Firefox
		_browser.name  = 'firefox';
	} else {
		_browser.name  = 'N/A';
	}
	
};

// 서비스 가능 여부 확인
function isSvcAt() {
	if(_browser.isIe() && _browser.isLowIe()){
		if (confirm("인터넷 익스플로러 10 버전 이상 또는 크롬 브라우저에 최적화되어 있습니다. \n다운로드후 사용하시겠습니까?")) {
			location.href = "https://support.microsoft.com/ko-kr/help/17621/internet-explorer-downloads";
		}
		
		return false;
	}
	
	return true;
};

var isLoading = false;

if(isSvcAt()) {
	Pace.on("start", function() {
		//$("div.cover").fadeIn();
		$("div.cover").show();
		isLoading = true;
	});
	
	Pace.on("done", function() {
		//$("div.cover").fadeOut();
		$("div.cover").hide();
		isLoading = false;
	});
	
	$(document).ajaxStart(function() {
		Pace.restart();
	}).ajaxStop(function() {
		Pace.stop();
	});
}

function startLoad() {
	Pace.restart();
	isLoading = true;
};

function endLoad() {
	Pace.stop();
	isLoading = false;
};

function isLoad() {
	return isLoading;
};

