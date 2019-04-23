handlers.registerUser = function (ctx) {
  const username = ctx.params.username
  const password = ctx.params.password
  const passwordCheck = ctx.params.repeatPassword

  if (!/[A-Za-z]{3,}/.test(username)) {
    notify.showError('Username must be at least 3 symbols long and must contain only english alphabet letters!')
  } else if (!/[A-Za-z0-9]{6,}/.test(password)) {
    notify.showError('Password must be at least 6 characters long and must contain only digits and english alphabet letters!')
  } else if (password !== passwordCheck) {
    notify.showError('Both passwords must match!')
  } else {
    auth.register(username, password)
      .then((userData) => {
        auth.saveSession(userData)
        notify.showInfo('User registration successful.')
        ctx.redirect('#/home')
      })
    .catch(notify.handleError)
  }
}
handlers.loginUser = function (ctx) {
  const username = ctx.params.username
  const password = ctx.params.password

  if (!/[A-Za-z]{3,}/.test(username)) {
    notify.showError('Username must be at least 3 symbols long and must contain only english alphabet letters!')
  } else if (!/[A-Za-z0-9]{6,}/.test(password)) {
    notify.showError('Password must be at least 6 characters long and must contain only digits and english alphabet letters!')
  } else {
    auth.login(username, password)
      .then((userData) => {
        auth.saveSession(userData)
        notify.showInfo('Login successful.')
        ctx.redirect('#/home')
      })
      .catch(notify.handleError)
  }
}
handlers.logout = function (ctx) {
  auth.logout()
    .then(() => {
      sessionStorage.clear()
      notify.showInfo('Logout successful.')
      ctx.redirect('#/home')
    })
}
