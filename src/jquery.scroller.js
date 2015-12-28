/**
 * jQuery Scroller 1.0.0
 * @author Raphaël Lefebvre <raphael@raphaellefebvre.be>
 * @website https://github.com/Raphhh/jquery-scroller
 */
(function($) {
    "use strict";

    $.fn.scroller = function(options) {

        var settings = $.extend({
            duration: 1500,
            easing: 'easeInOutExpo'
        }, options);

        return this.bind('click', function(event) {
            var $target = $($(this).attr('href'));
            var properties = {
                scrollTop: $target.offset().top
            };

            $('html, body').stop().animate(properties, settings);
            event.preventDefault();
        });
    };

})(jQuery);
