// Petals falling animation
$(window).load(function () {
    $('body').sakura();
});

// Slick slider
$(document).on('ready', function () {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});

// Datetime picker
jQuery('#datetimepicker').datetimepicker();
