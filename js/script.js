
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

//Portfolio 
$(window).on('load', function() {
    let $plugin = $('#plugin-container').isotope();

    $('#isotope-filters').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter');
        $plugin.isotope({filter: filterValue});

        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

$('document').ready(function() {
    $('#plugin-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

