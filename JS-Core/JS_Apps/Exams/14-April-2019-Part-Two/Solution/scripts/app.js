const handlers = {}

$(() => {
  const app = Sammy ('#container', function () {
    this.use('Handlebars', 'hbs')
    this.get('index.html', handlers.getHome);
    this.get('#/home', handlers.getHome);
    this.get('/', handlers.getHome);

    this.get('#/login', handlers.getLogin);
    this.get('#/register', handlers.getRegister);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logout);

    this.get('#/movie/create', handlers.getCreateMovie);
    this.post('#/movie/create', handlers.createMovie);
    this.get('#/movie/all', handlers.getAllMovies);
    this.get('#/movie/my', handlers.getMyMovies);
    this.get('#/movie/details/:id', handlers.getDetails);
    this.get('#/movie/buyTicket/:id', handlers.buyTicket);

    this.get('#/movie/delete/:id', handlers.getDelete);
    this.post('#/movie/delete/:id', handlers.deleteMovie);
    this.get('#/movie/edit/:id', handlers.getEdit);
    this.post('#/movie/edit/:id', handlers.editMovie);
  })
  app.run()
})
