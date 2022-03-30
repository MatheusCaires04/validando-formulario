const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm__pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPassValue = confirmPass.value;

  if (usernameValue === "") {
    setErrorFor(username, "Nome de usuário obrigatório.");
  } else {
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Email inválido, informe um email válido.");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Informe uma senha.");
  } else if (passwordValue.lenght < 7) {
    setErrorFor(password, "Senha deve conter mais de 7 caracteres.");
  } else {
    setSucessFor(password);
  }

  if (confirmPassValue === "") {
    setErrorFor(confirmPass, "Informe uma senha.");
  } else if (passwordValue === confirmPassValue) {
    setErrorFor(confirmPass, "As senhas não são iguais.");
  } else {
    setSucessFor(confirmPass);
  }
}

function setErrorFor(input, message) {
  const formControll = input.parentElement;
  const small = formControll.querySelector("small");

  small.innerText = message;

  formControll.className = "form__controll error";
}

function setSucessFor(input) {
  const formControll = input.parentElement;

  formControll.className = "form__controll sucess";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
