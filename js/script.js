/***********************************************************
                         	Var
************************************************************/



/***********************************************************
                      Append + CSS + Hide
************************************************************/





/***********************************************************
                       Event Function
************************************************************/





/*****************
      Mouse
*****************/


/***** Outline Hack part 1/2 *****/
$('button, a').each(function() {
	$(this).click(function(event) {
		$('#outline a').focus();
	});
});
/***** Outline Hack part 1/2 *****/


$('.burger-menu button').click(function(event) {
	event.preventDefault();
	enterOverlay();
});

$('.big-x').click(function(event) {
	event.preventDefault();
	quiteOverlay();
});

$('.global-overlay').click(function() {
	quiteOverlay();
});


/*****************
       Key
*****************/

$(document).keyup(function(event) {
     if (event.keyCode == 27) {
        quiteOverlay();
    };
});

/***********************************************************
                      Non-Event Function
************************************************************/


/***** Outline Hack part 2/2 *****/
$('a, button').each(function(){
	$(this).addClass('outline-hover');
});
/***** Outline Hack part 2/2 *****/


function quiteOverlay(){
	$('.global-overlay').fadeOut(500);
	$('.burger-wrap').fadeOut(500);
	$('.wrapper-overlay').removeClass('fixed');
};

function enterOverlay(){
	$('.global-overlay').fadeIn(500);
	$('.burger-wrap').fadeIn(500);
	$('.wrapper-overlay').addClass('fixed');
};

$(window).on("resize", function() {

    if($(window).width() > 825) {
		quiteOverlay();
	}
}).resize();


/***********************************************************
                     Img Split Effect
************************************************************/

(function ( $, window, document, undefined ) {

	 $.fn.rift_img = function () {

    	return this.each(function () {

			var element = $(this),
          		elemImg = element.find('img'),
          		imgSrc  = elemImg.attr('src');

	    	element
	        .prepend('<span class="top-span"></span>')
	        .append('<span class="bottom-span"></span>')
	        .find('span.top-span')
	        .css('background', 'url(' + imgSrc + ')')
			.css('background-repeat', 'no-repeat')
			// background-potition: center calc(50% + {half of span height});
			.css('background-position', 'center calc(50% + 6em)')
	        .css('background-size', '100%')
	        .parent()
	        .find('span.bottom-span')
	        .css('background', 'url(' + imgSrc + ')')
			.css('background-repeat', 'no-repeat')
			// background-potition: center calc(50% - {half of span height});
			.css('background-position', 'center calc(50% - 6em)')
	        .css('background-size', '100%');
    	});
	};
})( jQuery, window, document );

$('.item-img').rift_img();


/***********************************************************
                       	   Test
************************************************************/
