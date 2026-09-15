const galerieContainer = document.getElementById("allImages");

//Récuperer les images de la base de données et les afficher dans la galerie
let monImage = getImage("Barista", "../assets/barista.jpg");
let monImage2 = getImage("Burger", "../assets/burger.jpg");
let monImage3 = getImage("Drink", "../assets/drink.jpg");
let monImage4 = getImage("Lunch", "../assets/lunch.jpg");
let monImage5 = getImage("Terrasse", "../assets/terrasse.jpg");
let monImage6 = getImage("Plat", "../assets/plats.jpg");

galerieContainer.innerHTML += monImage;
galerieContainer.innerHTML += monImage2;
galerieContainer.innerHTML += monImage3;
galerieContainer.innerHTML += monImage4;
galerieContainer.innerHTML += monImage5;
galerieContainer.innerHTML += monImage6;

function getImage(titre, urlImage) {
  titre = sanitizeHtml(titre);
  urlImage = sanitizeHtml(urlImage);
  return `      <div class="col p-3">
        <div class="image-card h-10 text-white">
          <img src="${urlImage}" class="rounded w-100" alt="..." />
          <p class="titre-image">${titre}</p>
          <div class="action-image-buttons" data-show="admin">
            <button
              type="button"
              class="btn btn-outline-light"
              data-bs-toggle="modal"
              data-bs-target="#EditionPhotoModal"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button
              type="button"
              class="btn btn-outline-light"
              data-bs-toggle="modal"
              data-bs-target="#DeletePhotoModal"
            >
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>`;
}
