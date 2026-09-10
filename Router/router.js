import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Loader functions
const showLoader = () => {
  const loader = document.getElementById("loader");
  loader.classList.remove("hidden");
};

const hideLoader = () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
};

// Création d'une route pour la page 404 (page introuvable)
const route404 = new Route("404", "Page introuvable", "/pages/404.html", []);

// Fonction pour récupérer la route correspondant à une URL donnée
const getRouteByUrl = (url) => {
  let currentRoute = null;
  // Parcours de toutes les routes pour trouver la correspondance
  allRoutes.forEach((element) => {
    if (element.url == url) {
      currentRoute = element;
    }
  });
  // Si aucune correspondance n'est trouvée, on retourne la route 404
  if (currentRoute != null) {
    return currentRoute;
  } else {
    return route404;
  }
};

// Fonction pour charger le contenu de la page
const LoadContentPage = async () => {
  //ajout d'un loader pour le temps de chargement de la page
  showLoader();
  const path = window.location.pathname;
  // Récupération de l'URL actuelle
  const actualRoute = getRouteByUrl(path);

  // Vérifier les droits d'accès à la page
  const allRolesArray = actualRoute.authorize;

  if (allRolesArray.length > 0) {
    // Cas spécial : page réservée aux non connectés
    if (allRolesArray.includes("disconnected")) {
      if (isConnected()) {
        window.location.replace("/");
        return;
      }
    }

    // Cas général : page réservée à certains rôles
    else {
      const roleUser = getRole();

      // 1) Si l'utilisateur n'est pas connecté → redirection vers signIn
      if (!isConnected()) {
        localStorage.setItem(
          "redirectMessage",
          "Veuillez vous connecter pour accéder à cette page.",
        );
        window.location.replace("/signIn");
        return;
      }

      // 2) Si l'utilisateur est connecté mais n'a pas le bon rôle
      if (!allRolesArray.includes(roleUser)) {
        localStorage.setItem(
          "redirectMessage",
          "Vous n'avez pas les droits pour accéder à cette page.",
        );
        window.location.replace("/");
        return;
      }
    }
  }

  // Récupération du contenu HTML de la route
  const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
  // Ajout du contenu HTML à l'élément avec l'ID "main-page"
  document.getElementById("main-page").innerHTML = html;
  const msg = localStorage.getItem("redirectMessage");
  if (msg) {
    showRedirectBanner(msg);
    localStorage.removeItem("redirectMessage");
  }

  // Ajout du contenu JavaScript
  if (actualRoute.pathJS != "") {
    // Création d'une balise script
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", actualRoute.pathJS);

    // Ajout de la balise script au corps du document
    document.querySelector("body").appendChild(scriptTag);
  }

  // Changement du titre de la page
  document.title = actualRoute.title + " - " + websiteName;

  // Afficher et masquer les elements en fonction du rôle
  showAndHideElementsForRoles();
  hideLoader();
};
// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
  event = event || window.event;
  event.preventDefault();
  // Mise à jour de l'URL dans l'historique du navigateur
  window.history.pushState({}, "", event.target.href);
  // Chargement du contenu de la nouvelle page
  LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
LoadContentPage();

function showRedirectBanner(message) {
  const banner = document.createElement("div");
  banner.className = "redirect-banner";
  banner.textContent = message;

  document.body.prepend(banner);

  setTimeout(() => {
    banner.classList.add("hide");
    setTimeout(() => banner.remove(), 500);
  }, 4000);
}
