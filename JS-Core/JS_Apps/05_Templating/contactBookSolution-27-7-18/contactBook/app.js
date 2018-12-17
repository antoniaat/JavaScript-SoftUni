(async () => {
    const data = await $.get('./data.json');
    const contactHtml = await $.get('./templates/contact.hbs');
    let contactTemplate = Handlebars.compile(contactHtml);
    let finalData = {contacts: data};
    let resultHtml = contactTemplate(finalData);
    $('#list').append(resultHtml);

    const partialContactsHtml = await $.get('./templates/partials/personalContacts.hbs');
    const partialInfoHtml = await $.get('./templates/partials/personalInfo.hbs');

    Handlebars.registerPartial('personalContacts', partialContactsHtml);
    Handlebars.registerPartial('personalInfo', partialInfoHtml);

    const detailsHtml = await $.get('./templates/details.hbs');
    const detailsTemplate = Handlebars.compile(detailsHtml);

    $('.contact').on('click', function () {
        $('.content > div').removeClass('contactSelected');
        $(this).addClass('contactSelected');
        let index = $(this).attr('data-id');
        let result = detailsTemplate(data[index]);
        $('#details > div').remove();
        $('#details').append(result);
    })
})();