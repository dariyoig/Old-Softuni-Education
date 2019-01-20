function register() {
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  let regex = /(.+)@(.+).(com|bg)/gm;

  let isEmailValid = regex.test(email);

  if (isEmailValid && username.length > 0 && password.length > 0) {
    let cryptoPassword = `Password: ${'*'.repeat(password.length)}`;
    let result = document.getElementById('result');
    let heading = document.createElement('h1');
    let usernameMsg = `Username: ${username}`;
    let emailMsg = `Email: ${email}`;
    heading.innerText = `Successful Registration!`;

    result.appendChild(heading);
    result.insertAdjacentHTML('beforeend', `${usernameMsg}`);
    result.insertAdjacentHTML('beforeend', '<br>');
    result.insertAdjacentHTML('beforeend', `${emailMsg}`);
    result.insertAdjacentHTML('beforeend', `<br>`);
    result.insertAdjacentHTML('beforeend', `${cryptoPassword}`);

  }

}
