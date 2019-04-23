handlers.getHome = function(ctx) {
  let username = sessionStorage.getItem('username');
  if (username) {
    ctx.username = username;
  }
  ctx.loadPartials({
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
  }).then(function() {
    this.partial('./templates/home.hbs')
  })
}