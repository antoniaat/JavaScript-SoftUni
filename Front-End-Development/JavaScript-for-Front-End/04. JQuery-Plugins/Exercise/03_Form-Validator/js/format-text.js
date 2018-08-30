$('#bold-btn').on('click', formatBold);
$('#italic-btn').on('click', formatItalic);

function formatBold() {
    let text = $('#format-text input.form-control');

    if (text.hasClass('text-bold')) {
        text.removeClass('text-bold')
    } else {
        text.addClass('text-bold')
    }
}

function formatItalic() {
    let text = $('#format-text input.form-control');

    if (text.hasClass('text-italic')) {
        text.removeClass('text-italic')
    } else {
        text.addClass('text-italic')
    }
}