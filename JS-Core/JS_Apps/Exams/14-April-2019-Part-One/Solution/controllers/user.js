const user = function () {

    const getLogin = function (context) {
        context.loadPartials({
            'header': '../views/common/header.hbs',
            'footer': '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/user/loginPage.hbs')
        })
    };

    const getRegister = function (context) {
        context.loadPartials({
            'header': '../views/common/header.hbs',
            'footer': '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/user/registerPage.hbs');
        })
    };

    const postLogin = function (context) {

        let validatedInfo = validator.userAction(context.params);

        if (validatedInfo.result) {

            userModel.login(validatedInfo).then(function (data) {
                storage.saveUser(data);
                responder.notify('successBox', `You have just logged in successfully!`, true);
                home.homePage(context);
            }).catch(function (err) {
                responder.errorHandler(err);
            });

        } else {
            responder.notify('errorBox', validator.getTheIncorrectData(validatedInfo), false);
        }
    };

    const postRegister = function (context) {

        let validatedInfo = validator.userAction(context.params);

        if (validatedInfo.result) {

            userModel.register(validatedInfo).then(function (data) {
                storage.saveUser(data);
                responder.notify('successBox', `You have just registered successfully!`, true);
                home.homePage(context);
            }).catch(function (err) {
                responder.errorHandler(err);
            });

        } else {
            responder.notify('errorBox', validator.getTheIncorrectData(validatedInfo), false);
        }
    };

    const postLogout = function (context) {
        userModel.logout().then(function () {
            storage.deleteUser();
            storage.deleteData('events');
            responder.notify('successBox', 'You have just logout successfully!', true);
            home.homePage(context);
        }).catch(function (err) {
            responder.errorHandler(err);
        });
    };

    const getProfile = function (context) {

        let username = JSON.parse(storage.getData('userInfo')).username;

        eventModel.getAllEventsByOrganizer(username).then(function (data) {

            context.username = username.toUpperCase();
            context.events = data;
            context.isLogged = storage.getData('userInfo') !== null;
            context.count = data.length;

            context.loadPartials({
                'header': '../views/common/header.hbs',
                'footer': '../views/common/footer.hbs'
            }).then(function () {
                this.partial('../views/user/profilePage.hbs');
            });

        }).catch(function (err) {
            responder.errorHandler(err);
        });
    };

    return {
        getLogin,
        getRegister,
        postLogin,
        postRegister,
        postLogout,
        getProfile
    }
}();