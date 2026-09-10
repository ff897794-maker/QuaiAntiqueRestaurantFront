import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "Galerie", "/pages/gestion/galerie.html", []),
  new Route(
    "/signIn",
    "Connexion",
    "/pages/auth/signIn.html",
    "/js/auth/signIn.js",
    ["disconnected"],
  ),
  new Route(
    "/signUp",
    "Inscription",
    "/pages/auth/signUp.html",
    "/js/auth/signUp.js",
    ["disconnected"],
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html", [
    "client",
    "admin",
  ]),
  new Route(
    "/editPassword",
    "Modifier mot de passe",
    "/pages/auth/editPassword.html",
    ["client", "admin"],
  ),
  new Route(
    "/reservations",
    "Vos réservations",
    "/pages/reservations/allResa.html",
    ["client"],
  ),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", [
    "client",
  ]),
  new Route("/carte", "La carte", "/pages/gestion/carte.html", [
    "client",
    "admin",
  ]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
