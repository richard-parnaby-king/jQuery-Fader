/*!
 * jQuery Fader Plugin v1
 * https://github.com/richard-parnaby-king/jQuery-Fader
 *
 * Copyright 2013 Richard Parnaby-King
 * Released under the MIT license
 */
(function($){
"use strict";
	var opts = {
		speed:1000, //(int) Speed of fade
		delay:1000  //(int) Delay between animations
	};
	
	$.fn.fader = function(options){
		opts = $.extend(opts,options);
				
		this.each(function() {
			//Array of instantiated li
			var lis = [];
			
			//for each li of selector, instantiate and store in array
			$(this).find('li').each(function(){
				lis.push($(this));
				$(this).hide();
			});
		
			var lisLength = lis.length;
			
			//hide all but the first li
			lis[0].first().show();
			
			//begin animating
			setTimeout(function(){animate(0);}, opts.delay);
			
			/**
			 * Fade out current li, fade in next li
			 * @param int i Index of current li being animated
			 */
			function animate(i) {
				lis[i].fadeOut(opts.speed);
				
				//If we have reached the end of the list, reset the vairable to check
				if(i+1 >= lisLength) {
					i = -1;
				}
				
				//after fading in the new element, after delay milliseconds, repeat the animation
				lis[i+1].fadeIn(opts.speed,function(){
					setTimeout(function(){animate(i+1);}, opts.delay);
				});
			}
		});
	}
})(jQuery);