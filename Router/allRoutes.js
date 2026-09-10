import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html", []),
  new Route("/galerie", "Galerie", "/pages/gestion/galerie.html", []),
  new Route(
    "/signIn",
    "Connexion",
    "/pages/auth/signIn.html",
    ["disconnected"],
    "/js/auth/signIn.js",
  ),
  new Route(
    "/signUp",
    "Inscription",
    "/pages/auth/signUp.html",
    ["disconnected"],
    "/js/auth/signUp.js",
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
    "/adminResa",
    "Réservations",
    "/pages/reservations/adminResa.html",
    ["admin"],
  ),
  new Route(
    "/reservations",
    "Vos réservations",
    "/pages/reservations/allResa.html",
    ["client", "admin"],
  ),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", [
    "client",
  ]),
  new Route("/carte", "La carte", "/pages/gestion/carte.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
