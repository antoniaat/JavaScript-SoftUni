const app = Sammy('body', function () {

    this.use('Handlebars', 'hbs');

    // Home page
    this.get('#/home', home.homePage);
    
    // User pages
    this.get('#/login', user.getLogin);
    this.get('#/register', user.getRegister);
    this.post('#/loginPost', user.postLogin);
    this.post('#/registerPost', user.postRegister);
    this.get('#/logout', user.postLogout);
    this.get('#/profile', user.getProfile);

    // Event pages
    this.get('#/organizeEvent', event.getOrganizeEvent);
    this.post('#/organizeEventPost', event.postOrganizeEvent);
    this.get('#/eventDetails/:id', event.getEventDetails);
    this.get('#/eventDetails/joinEvent/:id', event.postJoinEvent);
    this.get('#/eventDetails/editEvent/:id', event.getEditEvent);
    this.post('#/editEvent/:id', event.postEditEvent);
    this.get('#/eventDetails/deleteEvent/:id', event.postDeleteEvent);

});

$(function () {
    app.run('#/home');
});