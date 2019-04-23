const home = function () {

    const homePage = async function (context) {

        context.isLogged = storage.getData('userInfo') !== null;

        if(context.isLogged){
            context.username = JSON.parse(storage.getData('userInfo')).username.toUpperCase();
            context.events = await eventModel.getAllEvents();
        }

        context.loadPartials({
            'header': "../views/common/header.hbs",
            'footer': '../views/common/footer.hbs',
            'event': '../views/event/event.hbs'
        }).then(function(){
            this.partial('../views/home/homePage.hbs');
        });
    };

    return {
        homePage
    }
}();