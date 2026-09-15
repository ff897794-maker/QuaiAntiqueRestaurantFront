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
        <span class="menu-item-price">${item.price}</span>
      `;

      categoryDiv.appendChild(itemDiv);
    });

    container.appendChild(categoryDiv);
  });
}

const savedMenu = localStorage.getItem("menuData");
if (savedMenu) {
  menuData = JSON.parse(savedMenu);
}
loadMenu();
