(function($) {
    $(document).ready(function() {
        var maskBehavior = function(val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
            options = {
                onKeyPress: function(val, e, field, options) {
                    field.mask(maskBehavior.apply({}, arguments), options);
                }
            };

        $('#telefone').mask(maskBehavior, options);

        $("#contactForm").validate();

        $('.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 25,
            nav: true,
            dots: true,
            navText: ['<img src="assets/img/carousel-arrow.svg" />', '<img src="assets/img/carousel-arrow.svg" />'],
            slideBy: 3,
            lazyLoad: true,
            //autoplay: true,
            responsive: {

            }
        });
    });
})(jQuery);