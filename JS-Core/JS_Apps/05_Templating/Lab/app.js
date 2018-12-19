async function renderContactsTemplate(data) {
    //TODO: GET THE HTML + HANDLEBARS EXPRESSION AS A STRING
    let contactsTemplateHtml = await $.get('templates/contacts.hbs');
    //TODO: CREATE HANDLEBARS TEMPLATE FROM THE STRING (HANDLEBARS'S MAIN OBJECT)
    let contactsHandlebarsTemplate = Handlebars.compile(contactsTemplateHtml);
    //TODO: RENDER THE HTML, BY PASSING DATA TO THE TEMPLATE
    //TODO: THIS WILL INVOKE ALL FOREACHES, IFS ETC. IN THE TEMPLATE
    //TODO: THIS WILL RETURN A STRING WITH COMPILED HTML (RENDERED)
    let renderedHtml = contactsHandlebarsTemplate({'contacts': data});
    //TODO: APPEND RENDERED HTML TO ACTUAL HTML (TEMPLATING PROCESS)
    $('#list').append(renderedHtml);
}

async function attachEvents(data) {
    $('.contact').click(async function () {
        let currentUser = $(this).attr('id');

        for (let key in data) {
            let attrValue = data[key];

            if (attrValue.email === currentUser) {
                 await renderDetailsTemplate(attrValue);
                 return;
            }
        }
    });
}

async function renderDetailsTemplate(user) {
    $('#details .content').remove();

    let detailsTemplateHtml = await $.get('templates/details.hbs');
    let detailsHandlebarsTemplate = Handlebars.compile(detailsTemplateHtml);
    let renderedHtml = detailsHandlebarsTemplate(user);
    $('#details').append(renderedHtml);
}


(async () => {
    let data = await $.get('data.json');

    await renderContactsTemplate(data);
    await attachEvents(data);
})();