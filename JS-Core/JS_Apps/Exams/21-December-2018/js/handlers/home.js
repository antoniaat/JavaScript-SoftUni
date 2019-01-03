handlers.home = function () {
    let content = {};
    if (auth.isAuthed()) {
        this.username = localStorage.getItem('username');
        content = util.getPartials('userHome');
    } else {
        content = util.getPartials('appHome');
    }

    this.loadPartials(content).then(function () {
        this.partial('./templates/common/main.hbs');
    });
};