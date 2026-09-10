const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const signInButton = document.getElementById("btn-signIn");

signInButton.addEventListener("click", checkCredentials);

function checkCredentials() {
  // Ici appel à l'API pour vérifier les identifiants ( si bdd ready)

  // Récupération des valeurs des champs de saisie
  const email = mailInput.value;
  const password = passwordInput.value;

  if (email === "test@mail.com" && password === "password123") {
    alert("Connexion réussie !");

    const token = "votre_token_d_authentification"; // Remplacez par le token réel obtenu après la connexion

    // Placer le token en cookie
    setToken(token);
    setCookie(roleCookieName, "admin", 7);
    // Redirection vers la page d'accueil
    window.location.href = "/";
  } else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}
