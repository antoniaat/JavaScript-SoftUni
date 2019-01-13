const handlers = {};
const util = {};

$(() => {
    util.getPartials = function (page) {
        return {
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            page: `./templates/${page}.hbs`
        }
    };

    util.getUser = function (ctx) {
        ctx.username = localStorage.getItem('username');
    };

    util.formatDate = function (dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    };

    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.home);

        this.get('#/login', handlers.login);
        this.post('#/login', handlers.loginAction);

        this.get('#/register', handlers.register);
        this.post('#/register', handlers.registerAction);

        this.get('#/messages', handlers.messages);

        this.get('#/archive', handlers.archive);

        this.get('#/send', handlers.send);
        this.post('#/send', handlers.sendAction);

        this.get('#/logout', function (ctx) {
            auth.logout().then(() => {
                localStorage.clear();
                notifications.showInfo('Logout successful.');
                ctx.redirect('#');
            });
        });
    }).run();
});