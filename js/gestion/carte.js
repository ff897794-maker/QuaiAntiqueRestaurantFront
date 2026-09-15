// Données dynamiques de la carte (modifiables via admin)
let menuData = [
  {
    category: "Entrées",
    items: [
      { name: "Salade savoyarde", price: "12€" },
      { name: "Soupe à l’oignon", price: "9€" },
    ],
  },
  {
    category: "Plats",
    items: [
      { name: "Fondue savoyarde", price: "18€" },
      { name: "Tartiflette traditionnelle", price: "17€" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Tarte aux myrtilles", price: "8€" },
      { name: "Crème brûlée", price: "7€" },
    ],
  },
];
function loadMenu() {
  const container = document.getElementById("menuContainer");
  container.innerHTML = ""; // reset

  menuData.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");

    categoryDiv.innerHTML = `<h2>${category.category}</h2>`;

    category.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");
      itemDiv.innerHTML = `
        <span class="menu-item-name">${item.name}</span>
        <div class="action-image-buttons" data-show="admin">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#EditDishModal"
          >
          <i class="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#DeleteDishModal"
          >
          <i class="bi bi-trash"></i>
          </button>
        </div>
        <span class="menu-item-price">${item.price}</span>
      `;

      categoryDiv.appendChild(itemDiv);
    });

    container.appendChild(categoryDiv);
  });
}

function addDish(category, name, price) {
  const categoryIndex = menuData.findIndex((cat) => cat.category === category);
  if (categoryIndex !== -1) {
    menuData[categoryIndex].items.push({ name, price });
  } else {
    menuData.push({
      category,
      items: [{ name, price }],
    });
  }
  localStorage.setItem("menuData", JSON.stringify(menuData));
}

document
  .getElementById("form-add-dish")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("NameInput").value;
    const category = document.getElementById("categorieInput").value;
    const price = document.getElementById("PriceInput").value;

    addDish(category, name, price);

    // Reset the form
    document.getElementById("form-add-dish").reset();
  });

const savedMenu = localStorage.getItem("menuData");
if (savedMenu) {
  menuData = JSON.parse(savedMenu);
}
loadMenu();
showAndHideElementsForRoles();
