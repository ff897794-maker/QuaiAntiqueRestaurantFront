import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("/signIn", "Connexion", "/pages/auth/signIn.html"),
  new Route("/signUp", "Inscription", "/pages/auth/signUp.html"),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
