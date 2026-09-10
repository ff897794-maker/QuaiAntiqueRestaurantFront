const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputConfirmPassword = document.getElementById("ValidatePasswordInput");
const signUpButton = document.getElementById("signUpButton");

function ValidateForm() {
  const nomOk = validateRequired(inputNom);
  const prenomOk = validateRequired(inputPrenom);
  const emailOk = validateEmail(inputEmail);
  const passwordOk = validatePassword(inputPassword);
  const confirmPasswordOk = validateConfirmPassword(inputConfirmPassword);

  if (nomOk && prenomOk && emailOk && passwordOk && confirmPasswordOk) {
    signUpButton.removeAttribute("disabled");
  } else {
    signUpButton.setAttribute("disabled", "disabled");
  }
}

function validateRequired(input) {
  if (input.value.trim() === "") {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  }
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

function validatePassword(input) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  if (passwordRegex.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

function validateConfirmPassword(input) {
  if (input.value === inputPassword.value && input.value !== "") {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}

inputNom.addEventListener("input", () => ValidateForm());

inputPrenom.addEventListener("input", () => ValidateForm());

inputEmail.addEventListener("input", () => ValidateForm());

inputPassword.addEventListener("input", () => ValidateForm());

inputConfirmPassword.addEventListener("input", () => ValidateForm());
