const event = function () {

    const getOrganizeEvent = function (context) {

        context.isLogged = storage.getData('userInfo') !== null;
        context.username = context.username = JSON.parse(storage.getData('userInfo')).username.toUpperCase();

        context.loadPartials({
            'header': '../views/common/header.hbs',
            'footer': '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/event/organizeEvent.hbs');
        })
    };

    const postOrganizeEvent = function (context) {

        let validatedInfo =  validator.eventAction(context.params);

        if(validatedInfo.result){
            validatedInfo.organizer = JSON.parse(storage.getData('userInfo')).username;
            validatedInfo.peopleInterestedIn = 0;
    
            eventModel.organizeEvent(validatedInfo).then(function (data) {
                responder.notify('successBox', 'Your event was created successfully!', true);
                home.homePage(context);
            }).catch(function (err) {
                responder.errorHandler(err);
            });
        } else {
            responder.notify('errorBox', validator.getIncorrectEventData(validatedInfo), false);
        }
    };

    const getEventDetails = function (context) {
        
        eventModel.eventDetails(context.params.id).then(function (data) {
            let username = JSON.parse(storage.getData('userInfo')).username;
            context.isLogged = username !== null;
            context.username = username.toUpperCase();
            context.isOrganizer = data[0].organizer === username;
            context.name = data[0].name;
            context.dateTime = data[0].dateTime;
            context.description = data[0].description;
            context.organizer = data[0].organizer;
            context.peopleInterestedIn = data[0].peopleInterestedIn;
            context.imageURL = data[0].imageURL;
            context.id = data[0]._id;
            context.loadPartials({
                'header': '../views/common/header.hbs',
                'footer': '../views/common/footer.hbs'
            }).then(function () {
                this.partial('../views/event/eventDetails.hbs');
            })
        }).catch(function (err) {
            responder.errorHandler(err);
        })
    };

    const postJoinEvent = function (context) {
        eventModel.eventDetails(context.params.id).then(function (data) {
            eventModel.eventJoin(data[0]).then(function () {
                responder.notify('successBox', 'You successfully join this event!', true);
                home.homePage(context);
            }).catch(function (err) {
                responder.errorHandler(err);
            });
        }).catch(function (err) {
            responder.errorHandler(err);
        });
    };

    const getEditEvent = function (context) {
        eventModel.eventDetails(context.params.id).then(function (data) {

            let username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
            context.isLogged = username !== null;
            context.name = data[0].name;
            context.dateTime = data[0].dateTime;
            context.description = data[0].description;
            context.imageURL = data[0].imageURL;
            context.id = data[0]._id;
            context.organizer = data[0].organizer;
            context.peopleInterestedIn = data[0].peopleInterestedIn;

            context.loadPartials({
                'header': '../views/common/header.hbs',
                'footer': '../views/common/footer.hbs'
            }).then(function () {
                this.partial('../views/event/eventEdit.hbs')
            })
        }).catch(function (err) {
            responder.errorHandler(err);
        });
    }

    const postEditEvent = function (context) {
        let event = {
            id: context.params.id,
            data: {
                ...context.params
            }
        };

        delete event.data.id;

        eventModel.eventEdit(event).then(function () {
            responder.notify('successBox', 'You successfully edited the event!', true);
            home.homePage(context);
        }).catch(function (err) {
            responder.errorHandler(err);
        });
    };

    const postDeleteEvent = function (context) {
        eventModel.eventDelete(context.params.id).then(function () {
            responder.notify('successBox', 'You successfully close up the event!', true);
            home.homePage(context);
        }).catch(function (err){
            responder.errorHandler(err);
        });
    };

    return {
        getOrganizeEvent,
        postOrganizeEvent,
        getEventDetails,
        postJoinEvent,
        getEditEvent,
        postEditEvent,
        postDeleteEvent
    }
}();