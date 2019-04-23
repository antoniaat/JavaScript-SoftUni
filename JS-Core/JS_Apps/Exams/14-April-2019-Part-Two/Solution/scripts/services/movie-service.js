const movieService = (() => {
  function createMovie(movie) {
    return remote.post('appdata', 'movies', 'kinvey', movie);
  }

  function getMovies(search) {
    let endpoint;
    if (search) {
      endpoint = `movies?query={"genres":{"$regex": "^.*${search}.*"}}&sort={"tickets":-1}`;
    } else {
      endpoint = 'movies?query={}&sort={"tickets":-1}';
    }
    return remote.get('appdata', endpoint, 'kinvey');
  }

  function getMyMovies(userId) {
    let endpoint = `movies?query={"_acl.creator":"${userId}"}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  function getById(movieId) {
    let endpoint = `movies/${movieId}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  function buyTicket(movie) {
    movie.tickets = +movie.tickets - 1;
    return remote.update('appdata', `movies/${movie._id}`, 'kinvey', movie);
  }

  function editMovie(id, movie) {
    return remote.update('appdata', `movies/${id}`, 'kinvey', movie);
  }

  function deleteMovie(id) {
    return remote.remove('appdata', `movies/${id}`, 'kinvey');
  }

  function getByGenre(genre) {
    let endpoint = `movies?query={"genres":{"$regex": "^.*${genre}.*"}}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  return {
    createMovie,
    getMovies,
    getMyMovies,
    getById,
    buyTicket,
    editMovie,
    deleteMovie,
    getByGenre
  }
})()