function register() {
	let username = document.getElementById('username');
	let email = document.getElementById('email');
	let password = document.getElementById('password');

	let emailPattern = /(.+)@(.+).(com|bg)/gm;

	if (username.value && emailPattern.test(email.value) && password.value) {
		document.querySelector('section#result').innerHTML = `<h1>Successful Registration!</h1>` +
			`Username: ` + username.value + `<br>` +
			`Email: ` + email.value + `<br>` +
			`Password: ` + "*".repeat(password.value.length);

		username.value = '';
		email.value = "";
		password.value = '';

		setTimeout(() => {
			document.querySelector(`#result`).innerHTML = ``;
		}, 5000);
	}
}