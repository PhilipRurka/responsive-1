/***********************************************************
                         	Var
************************************************************/
var tf = true;


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

$(document).on('click','.can-click a', function(event) {
	event.preventDefault();
	var varThis = $(this);
	$(this).parents('.global').fadeOut(500);
	$('.content-item .item').addClass('can-click');
	$(this).parent().parent().removeClass('can-click');
	setTimeout(function () {
		varThis.parent().parent()
		.insertBefore($('.first-element'))
		.addClass('first-element')
		.addClass('target');
		$('.global').fadeIn(500);
		varThis.parent().parent().next().removeClass('first-element');
	}, 500);
	event.stopPropagation();
});

$(document).on('click','.target', function(event) {
	event.preventDefault();
	event.stopPropagation();
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


$('.content-item .item').each(function() {
	$(this).addClass('can-click');
	tf = false;
});



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










// $(".contact").insertBefore($(".home"));



// 		if (('.first-element a').data('clicked')) {
// 			return;
// 		} else {
// 			$(this).parents('.global').fadeOut(500);
// 			setTimeout(function () {
//
// 		        $('.global').fadeIn(500);
// 		    }, 500);
// 		}


// $('.can-click a').each(function() {



// });

// $(document).on("click",".open-menu", function (e) {
//     $(".open-menu").addClass("close-menu1");
//     $(".open-menu").removeClass("open-menu");
//     e.stopPropagation();
// });








// if (bigContent === false) {
// 	$('.item-wrapper a').each(function(){
// 		$(this).click(function(event) {
// 			event.preventDefault();
// 			var varThis = $(this);
// 			bigContent = true;
// 			$(this).parents('.global').fadeOut(500);
// 			setTimeout(function () {
// 				varThis.parent().parent()
// 				.insertBefore($('.first-element'))
// 				.addClass('first-element').next().removeClass('first-element');
// 		        $('.global').fadeIn(500);
// 		    }, 500);
// 		});
// 	});
// }
//
// if (bigContent) {
// 	$('.item-wrapper a').each(function(){
// 		$(this).click(function(event) {
// 			event.preventDefault();
// 			var varThis = $(this);
//
// 			if ($(this).parent().parent().hasClass('first-element') === false ) {
// 				$(this).parents('.global').fadeOut(500);
// 				setTimeout(function () {
// 					varThis.parent().parent()
// 					.insertBefore($('.first-element'))
// 					.addClass('first-element').next().removeClass('first-element');
// 					$('.global').fadeIn(500);
// 				}, 500);
//
// 			}
// 		});
// 	});
// }





// $('.item-wrapper a').each(function(){
// 	$(this).click(function(event) {
// 		event.preventDefault();
// 		var varThis = $(this);
//
// 		if (bigContent) {
// 			bigContent = false;
// 			$(this).parents('.global').fadeOut(500);
// 			setTimeout(function () {
// 				varThis.parent().parent()
// 				.insertBefore($('.first-element'))
// 				.addClass('first-element').next().removeClass('first-element');
// 		        $('.global').fadeIn(500);
// 		    }, 500);
// 		} else {
// 			$(this).parents('.global').fadeOut(500);
// 			setTimeout(function () {
// 				varThis.parent().parent()
// 				.insertBefore($('.first-element'))
// 				.addClass('first-element').next().removeClass('first-element');
// 		        $('.global').fadeIn(500);
// 		    }, 500);
// 		}
// 	});
// });


//if body has class, when click, quit big.
