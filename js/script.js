//Preload

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(400).fadeOut('slow');
});

//Team
$('document').ready(function () {
    $('#team-members.owl-carousel').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
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
$(window).on('load', function () {
    let $plugin = $('#plugin-container').isotope();

    $('#isotope-filters').on('click', 'button', function () {
        let filterValue = $(this).attr('data-filter');
        $plugin.isotope({
            filter: filterValue
        });

        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

$('document').ready(function () {
    $('#plugin-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

//Testimonials
$('document').ready(function () {
    $('#testimonials-slider.owl-carousel').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

//Stats
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2500,
    });
});

//Map 
$(window).on('load', function() {

        let address = {lat: 44.7, lng: -70};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6, 
            center: address
        });
        let marker = new google.maps.Marker({
            position: address, 
            map: map,
            title: "Click to see details"
        });
      
        let infowindow = new google.maps.InfoWindow({
            content: "This is my address: 524 Sheffield Str."
        });

        marker.addListener('click', function() {
            infowindow.open(map,marker);
        });
});