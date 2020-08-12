

/* message dialog */


var modal_self = null;

var modal = new function() {
	
	var _defaultFunction = function(){};
	
	this.alert         = function(message) {
		$.confirm({
			cancelButton: false,
			icon: 'fa fa-check',
			confirmButtonClass: 'btn-success',
			title: '반려사유',
			content: message,
			theme: 'white'
		});
	}, 
	this.success         = function(message) {
		$.confirm({
			cancelButton: false,
			icon: 'fa fa-check',
			confirmButtonClass: 'btn-success',
			title: message,
			content: false,
			theme: 'success'
		});
	}, 
	this.danger         = function(message) {
		$.confirm({
			confirmButton: false,
			icon: 'fa fa-warning',
			cancelButtonClass: 'btn-danger',
			title: message,
			content: false,
			theme: 'danger'
		});
	}, 
	this.confirm  = function(message, callBackConfirm, callBackCancel, theme) {
		
		var _theme = typeof theme !== 'undefined' ?  theme : 'white';
		var _callBackConfirm = typeof callBackConfirm !== 'undefined' ?  callBackConfirm : _defaultFunction;
		var _callBackCancel = typeof callBackCancel !== 'undefined' ?  callBackCancel : _defaultFunction;
		
		$.confirm({
			icon: 'fa fa-question',
			confirmButton: '확인',
		    cancelButton: '취소',
		    confirmButtonClass: 'btn-success',
		    cancelButtonClass: 'btn-danger',
			title: message,
			content: false,
			theme: _theme,
			confirm: _callBackConfirm,
		    cancel: _callBackCancel
		});
	}, 
	this.dataConfirm         = function(_viewPage, _data, callBackConfirm, callBackCancel, _columnClass) {
		
		var columnClass = typeof _columnClass !== 'undefined' ?  _columnClass : 'col-md-8 col-md-offset-2';
		
		$.confirm({
			title: false,
		    animation: 'top',
		    columnClass: columnClass,
		    closeAnimation: 'bottom',
		    backgroundDismiss: false,
		    confirmButton: '확인',
		    cancelButton: false,
		    confirmButtonClass: 'btn-info',
		    cancelButtonClass: 'btn-danger',
		    content: function () {
		    	modal_self = this;
		        return $.ajax({
		            url: _viewPage,
		            dataType: 'html',
		            method: 'POST',
		            data: _data,
		            /*async: false,*/
		        }).done(function (response) {
		        	modal_self.setContent(response);
		            return false;
		        }).fail(function(){
		        	modal_self.setContent('페이지 로딩중 에러가 발생하였습니다.');
		        	//modal_self.$confirmButton.addClass("hide");
		            return false;
		        });
		    },
		    confirm: callBackConfirm == null ? function(){ } : callBackConfirm,
		    cancel: callBackCancel == null ? function(){ } : callBackCancel,
		});
	},
	this.select         = function(_viewPage, _data, callBackConfirm, callBackCancel) {
		$.confirm({
			title: false,
		    animation: 'top',
		    columnClass: 'col-md-8 col-md-offset-2',
		    closeAnimation: 'bottom',
		    backgroundDismiss: false,
		    confirmButton: '선택',
		    cancelButton: '확인',
		    confirmButtonClass: 'btn-success',
		    cancelButtonClass: 'btn-info',
		    content: function () {
		    	modal_self = this;
		        return $.ajax({
		            url: _viewPage,
		            dataType: 'html',
		            method: 'POST',
		            data: _data,
		            /*async: false,*/
		        }).done(function (response) {
		        	modal_self.setContent(response);
		            return false;
		        }).fail(function(){
		        	modal_self.setContent('페이지 로딩중 에러가 발생하였습니다.');
		        	modal_self.$confirmButton.addClass("hide");
		            return false;
		        });
		    },
		    confirm: callBackConfirm == null ? function(){ } : callBackConfirm,
		    cancel: callBackCancel == null ? function(){ } : callBackCancel
		});
	},
	this.send         = function(_viewPage, _data, callBackConfirm, callBackCancel) {
		$.confirm({
		    title: false,
		    animation: 'top',
		    columnClass: 'col-md-8 col-md-offset-2',
		    closeAnimation: 'bottom',
		    backgroundDismiss: false,
		    confirmButton: '보내기',
		    cancelButton: '취소',
		    confirmButtonClass: 'btn-info',
		    cancelButtonClass: 'btn-danger',
		    content: function () {
		    	modal_self = this;
		        return $.ajax({
		            url: _viewPage,
		            dataType: 'html',
		            method: 'POST',
		            data: _data,
		        }).done(function (response) {
		        	modal_self.setContent(response);
		        }).fail(function(){
		        	modal_self.setContent('페이지 로딩중 에러가 발생하였습니다.');
		        	//modal_self.$confirmButton.addClass("hide");
		            return false;
		        });
		    },
		    confirm: callBackConfirm == null ? function(){ } : callBackConfirm,
		    cancel: callBackCancel == null ? function(){ } : callBackCancel
		});
	},
	this.reload         = function(_viewPage, _data) {
		$.ajax({
            url: _viewPage,
            dataType: 'html',
            method: 'POST',
            data: _data,
        }).done(function (response) {
        	modal_self.setContent(response);
        }).fail(function(){
        	modal_self.setContent('페이지 로딩중 에러가 발생하였습니다.');
        	//modal_self.$confirmButton.addClass("hide");
            return false;
        });	
	},
	this.close = function() {
		modal_self.close();
	},
	this.hideBtn = function(type) {
		if(type == 'cancel'){
			modal_self.buttons.cancelButton.hide();
		}
	},
	this.showBtn = function(type) {
		if(type == 'cancel'){
			modal_self.buttons.cancelButton.show();
		}
	},
	this.img = function(src) {
		$.confirm({
			title: false,
		    animation: 'top',
		    columnClass: 'col-md-12',
		    closeAnimation: 'bottom',
		    backgroundDismiss: false,
		    confirmButton: '확인',
		    cancelButton: false,
		    confirmButtonClass: 'btn-info',
		    cancelButtonClass: 'btn-danger',
		    content: '<img src="'+src+'">'
		});
	},
	this.dataUpdateConfirm         = function(_viewPage, _data, callBackConfirm, callBackCancel, _columnClass) {
	
		var columnClass = typeof _columnClass !== 'undefined' ?  _columnClass : 'col-md-8 col-md-offset-2';
		var hostIndex = location.href.indexOf( location.host ) + location.host.length;
		var contextPath = location.href.substring( hostIndex, location.href.indexOf('/', hostIndex + 1) );
		
		$.confirm({
			title: false,
		    animation: 'top',
		    columnClass: columnClass,
		    closeAnimation: 'bottom',
		    backgroundDismiss: false,
		    confirmButton: '확인',
		    cancelButton: '수정',
		    confirmButtonClass: 'btn-info',
		    cancelButtonClass: 'btn-danger',
		    content: function () {
		    	modal_self = this;
		        return $.ajax({
		            url: _viewPage,
		            dataType: 'html',
		            method: 'POST',
		            data: _data,
		            /*async: false,*/
		        }).done(function (response) {
		        	modal_self.setContent(response);
		            return false;
		        }).fail(function(){
		        	modal_self.setContent('페이지 로딩중 에러가 발생하였습니다.');
		        	//modal_self.$confirmButton.addClass("hide");
		            return false;
		        });
		    },
		    confirm: callBackConfirm == null ? function(){ } : callBackConfirm,
		    cancel: callBackCancel == null ? function(){ location.href= contextPath+'/sttemnt/updateUnit.do?onlSttmId='+_data.onlSttmId; } : callBackCancel
		});
	};
};
