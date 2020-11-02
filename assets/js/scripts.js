(function($) {
    $(document).ready(function() {
        // Phone Mask
        var maskBehavior = function(val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
            options = {
                onKeyPress: function(val, e, field, options) {
                    field.mask(maskBehavior.apply({}, arguments), options);
                }
            };

        $('#telefone').mask(maskBehavior, options);

        // Form Validation
        $("#contactForm").validate();

        // Owl Carousel
        $('.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 25,
            nav: true,
            dots: true,
            navText: ['<img src="assets/img/carousel-arrow.svg" />', '<img src="assets/img/carousel-arrow.svg" />'],
            lazyLoad: true,
            //autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    });
})(jQuery);