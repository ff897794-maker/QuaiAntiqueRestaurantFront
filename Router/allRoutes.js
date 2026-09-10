import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/gestion/galerie.html"),
  new Route("/signIn", "Connexion", "/pages/auth/signIn.html"),
  new Route("/signUp", "Inscription", "/pages/auth/signUp.html"),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route(
    "/editPassword",
    "Modifier mot de passe",
    "/pages/auth/editPassword.html",
  ),
  new Route(
    "/reservations",
    "Vos réservations",
    "/pages/reservations/allResa.html",
  ),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
  new Route("/carte", "La carte", "/pages/gestion/carte.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
