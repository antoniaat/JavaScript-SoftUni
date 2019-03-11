$(document).on('ready', function () {
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});

$(window).load(function () {
    $('body').sakura();
});

jQuery('#datetimepicker').datetimepicker();