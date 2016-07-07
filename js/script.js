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


/*****************
       Key
*****************/


/***********************************************************
                      Non-Event Function
************************************************************/


/***** Outline Hack part 2/2 *****/
$('a, button').each(function(){
	$(this).addClass('outline-hover');
});
/***** Outline Hack part 2/2 *****/


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
        .append('<span class="btm-span"></span>')
        .find('span.top-span')
        .css('background', 'url(' + imgSrc + ')')
		.css('background-repeat', 'no-repeat')
		.css('background-position', 'center calc(50% + 6em)')
        .css('background-size', '100%')
        .parent()
        .find('span.btm-span')
        .css('background', 'url(' + imgSrc + ')')
		.css('background-repeat', 'no-repeat')
		.css('background-position', 'center calc(50% - 6em)')
        .css('background-size', '100%');
    });
  };
})( jQuery, window, document );

$('.item-img').rift_img();


/***********************************************************
                       	   Test
************************************************************/
