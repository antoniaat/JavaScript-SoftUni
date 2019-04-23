handlers.getLogin = function(ctx) {
  ctx.loadPartials({
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
  }).then(function() {
    this.partial('./templates/user/login.hbs');
  })
}

handlers.getRegister = function(ctx) {
  ctx.loadPartials({
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
  }).then(function () {
    this.partial('./templates/user/register.hbs');
  })
}