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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
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

        google.maps.event.addDomListener(window, 'resize', function() {
            let center = map.getCenter();
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
        });
});

//Header
$(function() {

    showOrHide();
    $(window).scroll(function () { 
        showOrHide();
    });
});

function showOrHide() {
    if($(window).scrollTop() > 100) {
        $("nav").addClass("white-nav-top");
    } else {
        $("nav").removeClass("white-nav-top");
    }
}

//Smoothly scrolling
$(function() {
    $("a.smooth").click(function (e) { 
        e.preventDefault();
        let sectionID = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(sectionID).offset().top -64            
        }, 1000);  
    });
});

