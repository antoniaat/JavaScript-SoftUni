function attachEvents() {
    $('.button').click(addStyles);

    function addStyles() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $('.button').removeClass('selected');
            $(this).addClass('selected');
        }
    }
}