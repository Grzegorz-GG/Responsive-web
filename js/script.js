
//Preload

$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});

//Carousel
$('document').ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

//Progress bar

$(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });
    });

