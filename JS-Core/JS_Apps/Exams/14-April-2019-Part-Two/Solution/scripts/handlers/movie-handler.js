handlers.getAllMovies = function (ctx) {
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  ctx.loadPartials({
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
  }).then(function() {
    this.partial('./templates/movie/all.hbs');
  })
}

handlers.getCreateMovie = function (ctx) {
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  ctx.loadPartials({
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
  }).then(function () {
    this.partial('./templates/movie/create.hbs');
  })
}

handlers.createMovie = function (ctx) {
  let movie = {};
  movie.title = ctx.params.title;
  movie.imageUrl = ctx.params.imageUrl;
  movie.description = ctx.params.description;
  movie.genres = ctx.params.genres.split(' ');
  movie.tickets = +ctx.params.tickets;
  movieService.createMovie(movie).then(() => {
    notify.showInfo("Movie created successfully");
    ctx.redirect('#/home');
  }).catch(err => {
    notify.handleError(err);
  })
}

handlers.getAllMovies = function(ctx) {
   let search = ctx.params.search;
   let username = sessionStorage.getItem('username');
   if (username) {
     ctx.username = username;
   }
   movieService.getMovies(search).then((movies) => {
    ctx.movies = movies;
    ctx.loadPartials({
      header: './templates/common/header.hbs',
      footer: './templates/common/footer.hbs',
      movie: './templates/movie/movie.hbs'
    }).then(function () {
      this.partial('./templates/movie/all.hbs');
    })
   }) 
}

handlers.getMyMovies = function (ctx) {
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  let userId = sessionStorage.getItem('userId');
  movieService.getMyMovies(userId).then((movies) => {
    ctx.movies = movies;
    ctx.loadPartials({
      header: './templates/common/header.hbs',
      footer: './templates/common/footer.hbs',
      movie: './templates/movie/movie.hbs'
    }).then(function () {
      this.partial('./templates/movie/myMovies.hbs');
    })
  })
}

handlers.getDetails = function (ctx) {
  let movieId = ctx.params.id;
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  movieService.getById(movieId).then((movie) => {
    ctx.movie = movie;
    ctx.loadPartials({
      header: './templates/common/header.hbs',
      footer: './templates/common/footer.hbs'
    }).then(function () {
      this.partial('./templates/movie/movieDetails.hbs');
    })
  })
}

handlers.buyTicket = function (ctx) {
  let movieId = ctx.params.id;
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  movieService.getById(movieId).then(movie => {
    movieService.buyTicket(movie).then(() => {
      notify.showInfo(`Successfully bought ticket for ${movie.title}`);
      ctx.redirect('#/movie/all');
    })
  })
}

handlers.getEdit = function (ctx) {
  let movieId = ctx.params.id;
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  movieService.getById(movieId).then((movie) => {
    ctx.movie = movie;
    ctx.loadPartials({
      header: './templates/common/header.hbs',
      footer: './templates/common/footer.hbs'
    }).then(function () {
      this.partial('./templates/movie/edit.hbs');
    })
  })
}

handlers.getDelete = function (ctx) {
  let movieId = ctx.params.id;
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  movieService.getById(movieId).then((movie) => {
    ctx.movie = movie;
    ctx.loadPartials({
      header: './templates/common/header.hbs',
      footer: './templates/common/footer.hbs'
    }).then(function () {
      this.partial('./templates/movie/delete.hbs');
    })
  })
}

handlers.editMovie = function (ctx) {
  let movieId = ctx.params.id;
  let movie = {};
  movie.title = ctx.params.title;
  movie.imageUrl = ctx.params.imageUrl;
  movie.description = ctx.params.description;
  movie.genres = ctx.params.genres.split(' ');
  movie.tickets = +ctx.params.tickets;
  movieService.editMovie(movieId, movie).then(() => {
    notify.showInfo("Movie edited successfully");
    ctx.redirect('#/home');
  }).catch(err => {
    notify.handleError(err);
  })
}

handlers.deleteMovie = function (ctx) {
  let movieId = ctx.params.id;
  movieService.deleteMovie(movieId).then(() => {
    notify.showInfo("Movie deleted successfully");
    ctx.redirect('#/home');
  }).catch(err => {
    notify.handleError(err);
  })
}