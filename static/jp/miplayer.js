var currentTrack = false;
		$(function(){
			
			currentTrack = document.getElementsByClassName('track')[0];
			
			$('#jquery_jplayer_1').jPlayer({
					solution:'flash, html',
					swfPath: '/static/jp/',
					supplied:'mp3, wav',
                    preload: 'auto',

					/*cssSelectorAncestor: '#jp_container_1',
					 cssSelector: {
					  videoPlay: '.jp-video-play',
					  play: '.mi-play',
					  pause: '.jp-pause',
					  stop: '.jp-stop',
					  seekBar: '.jp-seek-bar',
					  playBar: '.jp-play-bar',
					  mute: '.jp-mute',
					  unmute: '.jp-unmute',
					  volumeBar: '.jp-volume-bar',
					  volumeBarValue: '.jp-volume-bar-value',
					  volumeMax: '.jp-volume-max',
					  currentTime: '.jp-current-time',
					  duration: '.jp-duration',
					  fullScreen: '.jp-full-screen',
					  restoreScreen: '.jp-restore-screen',
					  repeat: '.jp-repeat',
					  repeatOff: '.jp-repeat-off',
					  gui: '.jp-gui',
					  noSolution: '.jp-no-solution'
					 },*/
					ready: function(){
							$(this).jPlayer("setMedia", {
								mp3:$(currentTrack).attr('href')
							});
					},
					pause: function(){
							
							$('.track').removeClass("mi-pause");
							$('.track').addClass('mi-play');
					},
					play: function()
					{
						
						$(currentTrack).removeClass("mi-play");
						$(currentTrack).addClass("mi-pause");
						
						$(".mi-pause").css("display","inline-block");
					},
					ended: function()
					{
							var tracks = document.getElementsByClassName('track');
							for(var i=0;i<tracks.length;i++)
							{
								if(tracks[i] == currentTrack && typeof(tracks[i+1]) != 'undefined')
								{
									$(tracks[i+1]).trigger('click');
									return;
									/*$('.track').trigger('click',{target: tracks[i+1]});*/
								}
								
							}
							$(tracks[0]).trigger('click');
					}
			});
			
			
			$(".track").click(function(e){
				

				if( $(e.target).hasClass('mi-play') && currentTrack != e.target )
				{
					currentTrack = e.target;
					
					url = $(e.target).attr("href");
					$('#jquery_jplayer_1').jPlayer("setMedia",{
							mp3:url
					});
					
					$('#jquery_jplayer_1').jPlayer("play");
					
					
					$('.track').removeClass("mi-pause");
					$('.track').addClass('mi-play');
					
					$(e.target).removeClass("mi-play");
					$(e.target).addClass("mi-pause");
					
					$('tr').css('background','');
					$(e.target.parentNode.parentNode).css('background','#ccc');


                    $('.jp-play').trigger('click');
				}
				else if( $(e.target).hasClass('mi-play') && currentTrack == e.target )
				{
					$('#jquery_jplayer_1').jPlayer('play');
                    $('.jp-play').trigger('click');
				}
				else if( $(e.target).hasClass('mi-pause') )
				{
					$('#jquery_jplayer_1').jPlayer('pause');
                    $('.jp-pause').trigger('click');
				}
				return false;
			});

            $('.mi-next').click(function(){

                var tracks = document.getElementsByClassName('track');
                for(var i=0;i<tracks.length;i++)
                {
                    if(tracks[i] == currentTrack && typeof(tracks[i+1]) != 'undefined')
                    {
                        $(tracks[i+1]).trigger('click');
                        return false;

                    }

                }
                $(tracks[0]).trigger('click');

                return false;
            });

            $('.mi-prev').click(function(){
                var tracks = document.getElementsByClassName('track');
                for(var i=0;i<tracks.length;i++)
                {
                    if(tracks[i] == currentTrack && typeof(tracks[i-1]) != 'undefined')
                    {
                        $(tracks[i-1]).trigger('click');
                        return false;

                    }

                }
                $(tracks[tracks.length-1]).trigger('click');

                return false;
            });
            
            $('.titletd').click(function(e){
					
				track = $(e.target.parentNode).find('.track');
				$(track[0]).trigger('click');
			});
		
		});
