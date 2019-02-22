handlers.login = function () {
    this.loadPartials(util.getPartials('login')).then(function () {
        this.partial('./templates/common/main.hbs');
    });
};

handlers.loginAction = function (ctx) {
    let {username, password} = this.params;
    auth.login(username, password).then((userInfo) => {
        auth.saveSession(userInfo);
        notifications.showInfo('Login successful.');
        ctx.redirect('#');
    });
};

handlers.register = function () {
    this.loadPartials(util.getPartials('register')).then(function () {
        this.partial('./templates/common/main.hbs');
    });
};

handlers.registerAction = function (ctx) {
    let {username, password, name} = this.params;
    auth.register(username, password, name).then((userInfo) => {
        auth.saveSession(userInfo);
        notifications.showInfo('Registration successful.');
        ctx.redirect('#');
    });
};