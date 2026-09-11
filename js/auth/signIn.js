const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const signInButton = document.getElementById("btn-signIn");
const signInForm = document.getElementById("signInForm");

signInButton.addEventListener("click", checkCredentials);

function checkCredentials() {
  let dataForm = new FormData(signInForm);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    username: dataForm.get("email"),
    password: dataForm.get("password"),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(apiUrl + "login", requestOptions)
    .then((response) => {
      if (!response.ok) {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
      }
      return response.json();
    })
    .then((result) => {
      alert("Connexion réussie !");

      const token = result.apiToken;

      // Placer le token en cookie
      setToken(token);
      setCookie(roleCookieName, result.roles[0], 7);
      // Redirection vers la page d'accueil
      window.location.href = "/";
    })
    .catch((error) => {
      console.error(error);
      alert(
        "Une erreur est survenue lors de la connexion. Veuillez réessayer.",
      );
    });
}
