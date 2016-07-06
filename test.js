;(function ( $, window, document, undefined ) {

  $.fn.item-img = function () {

    return this.each(function () {

      // Vurribles
      var element = $(this),
          elemImg = element.find('img'),
          imgSrc  = elemImg.attr('src');

      // We be chainin'
      element
        .prepend('<span class="top-span"></span>')
        .append('<span class="btm-span"></span>')
        .find('span.top-span')
        .css('background', 'url(' + imgSrc + ') no-repeat center top')
        .css('background-size', '100%')
        .parent()
        .find('span.btm-span')
        .css('background', 'url(' + imgSrc + ') no-repeat center bottom')
        .css('background-size', '100%');
    });
  };
})( jQuery, window, document );

$('.item-img').item-img();
