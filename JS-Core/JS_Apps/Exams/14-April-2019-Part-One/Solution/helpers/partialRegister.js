(function () {

    $.get('../views/common/header.hbs').then(function (headerSrc) {
        Handlebars.registerPartial('header', headerSrc);
    });

    $.get('../views/common/footer.hbs').then(function (footerSrc) {
        Handlebars.registerPartial('footer', footerSrc);
    });

    $.get('../views/event/event.hbs').then(function (eventSrc) {
        Handlebars.registerPartial('event', eventSrc);
    });

}());