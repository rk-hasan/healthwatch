//for Smoth Scroll
var scroll = new SmoothScroll('.scrolltotop[href="index.html"]', {
    speed: 1000,
    speedAsDuration: true
});


//for navigation bar scroll Efect
$(window).on("scroll", function(){
	if($(window).scrollTop()) {
		
		$('.scrolltotop').css({
			display: 'block',
		})
		
	}

	else{
		
		$('.scrolltotop').css({
			display: 'none',
		})
		
	}
})

 