const responder = function() {

    const notify = function (elementId, message, isFading){
        let notifyBox = $(`#${elementId}`);
        notifyBox.text(message);
        notifyBox.show();

        if(isFading){
            setTimeout(() => notifyBox.fadeOut(), 5000);
        } else {
            notifyBox.on('click', function(){
                notifyBox.fadeOut();
            });
        }
    };

    const errorHandler = function (reason) {
        notify('errorBox', reason.responseJSON.description, true);
    };

    $(document).on('ajaxStart', function() {
        notify('loadingBox', 'Loading...', false);
    });

    $(document).on('ajaxStop', function() {
        $('#loadingBox').hide();
    });

    return{
        errorHandler,
        notify
    }
}();