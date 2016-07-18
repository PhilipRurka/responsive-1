/***********************************************************
                         	Var
************************************************************/

var tf = true;
var clickTime = true;
var $globalOverlay = $('.global-overlay');
var $contentItems = $('.content-item .item');
var intervalId;

/***********************************************************
                      Append + CSS + Hide
************************************************************/





/***********************************************************
                       Event Function
************************************************************/





/*****************
      Click
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

$globalOverlay.click(function() {
	quiteOverlay();
});

$(document).on('click','.can-click a', function(event) {
	event.preventDefault();
	var varThis = $(this);
	$(this).parents('.global').fadeOut(500);
	$contentItems.addClass('can-click');
	$(this).parent().parent().removeClass('can-click');
	setTimeout(function () {
		$contentItems.removeClass('target');
		varThis.parent().parent()
		.insertBefore($('.first-element'))
		.addClass('first-element')
		.addClass('target');
		$('html, body').animate({
        scrollTop: $(".content-item").offset().top
		}, 0);
		$('.global').fadeIn(500);
		varThis.parent().parent().next().removeClass('first-element');
	}, 500);
	event.stopPropagation();
});

$(document).on('click','.target', function(event) {
	event.preventDefault();
	event.stopPropagation();
});

$('.recomended-right-box').on('click', function() {
	rightSlideFunc();
});

$('.recomended-left-box').on('click', function() {
	leftSlideFunc();
});

$(document).on('click','.recomended-middle-box', function() {
	clearInterval(intervalId);
});


$(document).on('click','.recomended-middle-box-2', function() {
	intervalId = setInterval(leftSlideFunc, 3000);
});


/*****************
      hover
*****************/

/********************************************************************/

$(document).on('mouseover','.target .p-wrapper', function(event) {
	$('body').addClass('overflow-hidden');
	event.stopPropagation();
});

$(document).on('mouseout','.target .p-wrapper', function(event) {
	$('body').removeClass('overflow-hidden');
	event.stopPropagation();
});

/********************************************************************/

$(document).on('mouseover','.recomended-left-box', function(event) {
	setTimeout(function(){
		$( ".recomended-middle-box" ).trigger( "click" );
	}, 10);
});

$(document).on('mouseover','.third-position', function(event) {
	setTimeout(function(){
		$( ".recomended-middle-box" ).trigger( "click" );
	}, 10);
});

$(document).on('mouseover','.recomended-right-box', function(event) {
	setTimeout(function(){
		$( ".recomended-middle-box" ).trigger( "click" );
	}, 10);
});

$(document).on('mouseout','.recomended-left-box, .third-position, .recomended-right-box', function(event) {
	$(".recomended-middle-box-2").trigger( "click" );
});

/********************************************************************/

$(document).on('mouseenter','.site-menu a:not(.site-menu-selected)', function(event) {
	$(this).addClass('hover-site-menu');
});

$(document).on('mouseleave','.site-menu a:not(.site-menu-selected)', function(event) {
	$(this).removeClass('hover-site-menu');
});

$(document).on('touchend','.site-menu a:not(.site-menu-selected)', function(event) {
	$(this).removeClass('hover-site-menu');
});

/********************************************************************/

$(document).on('mouseenter', '.lg-blog-button button, .sm-blog-button button', function(event) {
	$(this).addClass('hover-blog');
});

$(document).on('mouseleave','.lg-blog-button button, .sm-blog-button button', function(event) {
	$(this).removeClass('hover-blog');
});

$(document).on('touchend','.lg-blog-button button, .sm-blog-button button', function(event) {
	$(this).removeClass('hover-blog');
});

/********************************************************************/

$(document).on('mouseenter', '.item-img', function() {
	$(this).children('.top-span').addClass('hover-top-split');
	$(this).children('.bottom-span').addClass('hover-bottom-split');
});

$(document).on('mouseleave', '.item-img', function() {
	$(this).children('.top-span').removeClass('hover-top-split');
	$(this).children('.bottom-span').removeClass('hover-bottom-split');
});

$(document).on('touchend', '.item-img', function() {
	$(this).children('.top-span').removeClass('hover-top-split');
	$(this).children('.bottom-span').removeClass('hover-bottom-split');
});


/********************************************************************/



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
	$globalOverlay.fadeOut(500);
	$('.burger-wrap').fadeOut(500);
	$('.wrapper-overlay').removeClass('fixed');
	$('body').scrollTop(0);
};

function enterOverlay(){
	$globalOverlay.fadeIn(500);
	$('.burger-wrap').fadeIn(500);
	$('.wrapper-overlay').addClass('fixed');
};

$(window).on("resize", function() {

    if($(window).width() > 825) {
		quiteOverlay();
	}
}).resize();


$contentItems.each(function() {
	$(this).addClass('can-click');
	tf = false;
});

function rightSlideFunc() {

	if ($('.recomended-right-box').hasClass('clickable-right') && $('.recomended-left-box').hasClass('clickable-left')) {
		$('.recomended-right-box').removeClass('clickable-right');
		setTimeout(function () {
			$('.recomended-item .item').removeClass('recomended-transition');
			$('.recomended-right-box').addClass('clickable-right');
		}, 1000);

		$('.recomended-item .item').each(function() {
			if        ($(this).hasClass('first-position')) {
					   $(this).addClass('fifth-position')
					   .removeClass('first-position');

			} else if ($(this).hasClass('second-position')) {
					   $(this).addClass('first-position')
					   .removeClass('second-position');

			} else if ($(this).hasClass('third-position')) {
					   $(this).addClass('second-position')
					   .removeClass('third-position');

			} else if ($(this).hasClass('fourth-position')) {
					   $(this).addClass('third-position')
					   .removeClass('fourth-position');

			} else if ($(this).hasClass('fifth-position')) {
					   $(this).addClass('fourth-position')
					   .removeClass('fifth-position');
			}
		});

		$('.recomended-item .item:not(.fifth-position)').each(function(){
			$(this).addClass('recomended-transition');
		});
	}
};

function leftSlideFunc() {
	if ($('.recomended-left-box').hasClass('clickable-left') && $('.recomended-right-box').hasClass('clickable-right')) {
		$('.recomended-left-box').removeClass('clickable-left');
	setTimeout(function () {
		$('.recomended-item .item').removeClass('recomended-transition');
		$('.recomended-left-box').addClass('clickable-left');
	}, 1000);

		$('.recomended-item .item').each(function() {
			if        ($(this).hasClass('first-position')) {
					   $(this).addClass('second-position')
					   .removeClass('first-position');

			} else if ($(this).hasClass('second-position')) {
					   $(this).addClass('third-position')
				       .removeClass('second-position');

			} else if ($(this).hasClass('third-position')) {
					   $(this).addClass('fourth-position')
					   .removeClass('third-position');

			} else if ($(this).hasClass('fourth-position')) {
					   $(this).addClass('fifth-position')
					   .removeClass('fourth-position');

			} else if ($(this).hasClass('fifth-position')) {
					   $(this).addClass('first-position')
					   .removeClass('fifth-position');
			}
		});
		$('.recomended-item .item:not(.first-position)').each(function(){
			$(this).addClass('recomended-transition');
		});
	}
};

$(document).ready(function() {
	$(".recomended-middle-box-2").trigger( "click" );
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

var touch = window.ontouchstart
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0);

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
