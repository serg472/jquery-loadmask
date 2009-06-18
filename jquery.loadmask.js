;(function($){
	
	$.fn.mask = function(label){
		
	    this.unmask();
		
		if(this.css("position") == "static") {
			this.addClass("masked-relative");
		}
		
		this.addClass("masked");
		
		var maskDiv = $('<div class="loadmask"></div>');
		
		var ua = navigator.userAgent.toLowerCase();
		var isStrict = document.compatMode == "CSS1Compat";
		var isIE = ua.indexOf("msie") > -1;
		var isIE7 = ua.indexOf("msie 7");
		
		if(isIE && !(isIE7 && isStrict) && this.css("height") == "auto"){ 
			maskDiv.height(this.height());
			maskDiv.width(this.width());
		}
		
		this.append(maskDiv);
		
		if(typeof label == "string") {
			var maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>');
			maskMsgDiv.append('<div>' + label + '</div>');
			this.append(maskMsgDiv);
			
			//calculate center position
			maskMsgDiv.css("top", Math.round(this.height() / 2 - maskMsgDiv.height() / 2)+"px");
			maskMsgDiv.css("left", Math.round(this.width() / 2 - maskMsgDiv.width() / 2)+"px");
			
			maskMsgDiv.show();
		}
		
	};
	
	$.fn.unmask = function(label){
		this.find(".loadmask-msg,.loadmask").remove();
		this.removeClass("masked");
		this.removeClass("masked-relative");
	};
 
})(jQuery);