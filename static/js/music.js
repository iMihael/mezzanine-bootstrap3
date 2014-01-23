jQuery(function(){
	jQuery("#miplay").miPlayer({
		autoPlay: false,
		songs : [
					[{src:'music/wave.mp3',type:'audio/mpeg',title:'2Q - Лови волну'},{src:'music/wave.ogg',type:'audio/ogg',title:'2Q - Лови волну'}],
					[{src:'music/diver.mp3',type:'audio/mpeg',title:'2Q - Водолаз'},{src:'music/diver.ogg',type:'audio/ogg',title:'2Q - Водолаз'}],
					[{src:'music/sky.mp3',type:'audio/mpeg',title:'2Q - Какое небо'},{src:'music/sky.ogg',type:'audio/ogg',title:'2Q - Какое небо'}],
					[{src:'music/to_you.mp3',type:'audio/mpeg',title:'2Q - К тебе'},{src:'music/to_you.ogg',type:'audio/ogg',title:'2Q - К тебе'}],
					[{src:'music/not_necessary.mp3',type:'audio/mpeg',title:'2Q - Не треба'},{src:'music/not_necessary.ogg',type:'audio/ogg',title:'2Q - Не треба'}]
					
				],
		volume:100
	});
});
