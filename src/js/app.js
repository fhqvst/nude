var $ = require('jquery');

$('document').ready(function() {

    $('.is-sticky').each(function (index, element) {

        var $element = $(element),
            offset = 40,
            elementOffset = $element.offset(),
            stickyCss = {
                top: offset,
                left: elementOffset.left,
                width: $element.outerWidth,
                marginTop: 0
            },
            unstickyCss = {
                top: $element.css('top'),
                left: $element.css('left'),
                width: $element.css('width'),
                marginTop: $element.css('margin-top')
            };

        $(window).on('scroll', function() {

            if ($(window).scrollTop() > elementOffset.top - offset) {
                $(element)
                    .addClass('is-stuck')
                    .css(stickyCss);
            } else {
                $(element)
                    .removeClass('is-stuck')
                    .css(unstickyCss);
            }

        });
    });

});