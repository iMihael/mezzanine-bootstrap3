

/*jQuery(function(){
	
	$jq.each($('audio'), function () {
		    this.stop();
	});
	
	jQuery("audio").bind("play",function(){
		
		
	});
});*/

$(function(){
	$("audio").bind("play",function(mevent){
		$.each($('audio'), function () {
			if(mevent.target!=this)
		    	this.pause();
		});	
		
	});
});
