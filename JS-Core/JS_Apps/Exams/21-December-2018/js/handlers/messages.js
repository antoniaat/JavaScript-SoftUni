handlers.messages = function (ctx) {
    util.getUser(ctx);
    let content = util.getPartials('myMessages');
    content.message = './templates/common/message.hbs';
    ctx.loadPartials(content).then(function () {
        ctx.partials = this.partials;
        ctx.partial('./templates/common/main.hbs').then(() => {
            let url = `messages?query={"recipient_username":"${localStorage.getItem('username')}"}`;
            remote.get('appdata', url).then((messages) => {
                messages.forEach(m => m.timestamp = util.formatDate(m._kmd.lmt));
                ctx.messages = messages;
                ctx.render('./templates/common/messageList.hbs').then(function () {
                    this.replace('#myMessages');
                });
            }).catch(notifications.handleError);
        });
    });
};

handlers.archive = function (ctx) {
    util.getUser(this);
    let url = `messages?query={"sender_username":"${localStorage.getItem('username')}"}`;
    remote.get('appdata', url).then((messages) => {
        messages.forEach(m => m.timestamp = util.formatDate(m._kmd.lmt));
        this.messages = messages;
        this.loadPartials(util.getPartials('archiveSent')).then(function () {
            this.partial('./templates/common/main.hbs').then(() => {
                $('button').click((e) => {
                    let id = $(e.target).attr('data-id');
                    remote.del('appdata', 'messages/' + id).then(() => {
                        notifications.showInfo('Message deleted');
                        $(e.target).parent().parent().remove();
                    }).catch(notifications.handleError);
                })
            });
        });
    }).catch(notifications.handleError);
};

handlers.send = function (ctx) {
    util.getUser(ctx);
    remote.get('user', '').then(userList => {
        ctx.userList = userList;
        ctx.loadPartials(util.getPartials('sendMessage')).then(function () {
            this.partial('./templates/common/main.hbs');
        });
    }).catch(notifications.handleError);
};

handlers.sendAction = function (ctx) {
    let message = {
        sender_username: localStorage.getItem('username'),
        sender_name: localStorage.getItem('name'),
        recipient_username: this.params.recipient,
        text: this.params.text
    };
    remote.post('appdata', 'messages', message).then((res) => {
        notifications.showInfo('Message sent');
        ctx.redirect('#/archive');
    }).catch(notifications.handleError);
};